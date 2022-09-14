import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UsersService } from '../core';
import { PasswordService } from './password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
    private logger: Logger,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    this.logger.log({ username }, 'Trying to log in');
    const user = await this.usersService.findOne({ where: { email: username } });

    if (!user) {
      throw new BadRequestException();
    }

    if (!this.passwordService.comparePassword(password, user.password)) {
      throw new BadRequestException();
    }

    this.logger.log({ username, userId: user.id }, 'Logged in');
    return this.generateJWTTokens(user);
  }

  private generateJWTTokens(user: User) {
    this.logger.log({ userId: user.id }, 'JWT sign in');
    const authToken = this.jwtService.sign(user);

    return { authToken };
  }
}
