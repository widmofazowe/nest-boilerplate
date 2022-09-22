import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/modules/password/password.service';
import { MailerEventEmitter } from 'src/modules/mailer/mailer.emitter';
import { CoreService, InjectCoreService } from 'src/modules/core';
import { User } from 'src/common/entities/user';

@Injectable()
export class ResetPasswordService {
  private logger = new Logger(ResetPasswordService.name);

  constructor(
    private jwtService: JwtService,
    private mailerEventEmitter: MailerEventEmitter,
    @InjectCoreService(User) private usersService: CoreService<User>,
    private passwordService: PasswordService,
  ) {}

  async resetPasword(email: string) {
    const user = await this.usersService.findOne({ where: { email } });
    if (!user) {
      throw new BadRequestException();
    }

    this.logger.log({ email }, 'Resetting user password');
    const secret = this.getSecret(user);
    const resetPasswordToken = this.jwtService.sign(
      { email },
      {
        secret,
        expiresIn: '60min',
      },
    );

    this.mailerEventEmitter.emit({
      subject: 'Reset Password',
      to: [{ email, type: 'to' }],
      text: `Reset password with following token ${user.id}/${resetPasswordToken}`,
    });
  }

  async updatePasword(userId: string, token: string, password: string) {
    const user = await this.usersService.findOne({ where: { id: userId } });
    if (!user) {
      throw new BadRequestException();
    }

    const secret = this.getSecret(user);
    try {
      this.logger.log({ userId, token }, 'Veryfing reset password token');
      this.jwtService.verify(token, { secret });
      this.logger.log({ userId, token }, 'Updating user password');
      await this.usersService.update(userId, { password: await this.passwordService.cryptPassword(password) });
    } catch (e) {
      this.logger.warn({ userId, token }, 'Token invalid');
      throw new BadRequestException();
    }
  }

  private getSecret(user: User) {
    return `${user.password}-${user.createdDate.getTime()}`;
  }
}
