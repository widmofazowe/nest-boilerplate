import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PasswordService } from 'src/modules/password/password.service';
import { MailerEventEmitter } from 'src/modules/mailer/mailer.emitter';
import { CoreService, InjectCoreService } from 'src/modules/core';
import { User } from 'src/common/entities/user';
import { UpdatePasswordDto } from './update-password.dto';

@Injectable()
export class ResetPasswordService {
  private logger = new Logger(ResetPasswordService.name);

  constructor(
    private jwtService: JwtService,
    private mailerEventEmitter: MailerEventEmitter,
    @InjectCoreService(User) private usersService: CoreService<User>,
    private passwordService: PasswordService,
  ) {}

  async resetPassword(email: string) {
    const user = await this.usersService.findOne({ where: { email } });
    if (!user) {
      this.logger.warn(`There is no such user ${email}`);
      return;
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

    this.mailerEventEmitter.emit(
      'reset-password',
      {
        to: [{ email, type: 'to' }],
      },
      { resetPasswordToken, user },
    );
  }

  async updatePassword(updatePasswordDto: UpdatePasswordDto) {
    const user = await this.usersService.findOne({ where: { id: updatePasswordDto.userId } });
    if (!user) {
      throw new BadRequestException();
    }

    const loggerContext = { userId: updatePasswordDto.userId, token: updatePasswordDto.token };
    const secret = this.getSecret(user);
    try {
      this.logger.log(loggerContext, 'Verifying reset password token');
      this.jwtService.verify(updatePasswordDto.token, { secret });
      this.logger.log(loggerContext, 'Updating user password');
      await this.usersService.update(updatePasswordDto.userId, {
        password: await this.passwordService.cryptPassword(updatePasswordDto.password),
      });
    } catch (e) {
      this.logger.warn(loggerContext, 'Token invalid');
      throw new BadRequestException();
    }
  }

  private getSecret(user: User) {
    return `${user.password}-${user.createdDate.getTime()}`;
  }
}
