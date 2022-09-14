import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CoreUsersService, User } from 'src/modules/core';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { SendEmailEvent, SEND_EMAIL_EVENT } from 'nest-mailer-module';
import { PasswordService } from 'src/modules/password/password.service';

@Injectable()
export class UserManagementResetPasswordService {
  private logger = new Logger(UserManagementResetPasswordService.name);

  constructor(
    private jwtService: JwtService,
    private eventEmitter: EventEmitter2,
    private usersService: CoreUsersService,
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

    this.eventEmitter.emit(SEND_EMAIL_EVENT, {
      subject: 'Reset Password',
      to: [{ email, type: 'to' }],
      text: `Reset password with following token ${user.id}/${resetPasswordToken}`,
    } as SendEmailEvent);
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
