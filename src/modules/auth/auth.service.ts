import { BadRequestException, Injectable, Logger, NotAcceptableException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, CoreUsersService } from '../core';
import { PasswordService } from '../password/password.service';
import config from 'src/config';
import { instanceToPlain } from 'class-transformer';

@Injectable()
export class AuthService {
  private logger = new Logger(AuthService.name);

  constructor(
    private usersService: CoreUsersService,
    private passwordService: PasswordService,
    private jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    this.logger.log({ username }, 'Trying to log in');
    const user = await this.getByUsername(username);

    if (!this.passwordService.comparePassword(password, user.password)) {
      throw new BadRequestException();
    }

    this.logger.log({ username, userId: user.id }, 'Logged in');
    return this.generateJWTTokens(user);
  }

  async refresh(refreshToken: string) {
    this.logger.log({ refreshToken }, 'Trying to refresh jwt');
    try {
      const { username } = this.jwtService.verify(refreshToken, {
        secret: config.jwt.refreshSecret,
      });
      const user = await this.getByUsername(username);
      this.logger.log({ username, userId: user.id }, 'Refreshing tokens');
      return this.generateJWTTokens(user);
    } catch (e) {
      this.logger.log({ refreshToken }, 'Bad refresh token');
      throw new NotAcceptableException();
    }
  }

  private async getByUsername(username: string) {
    const user = await this.usersService.findOne({ where: { email: username } });

    if (!user) {
      throw new BadRequestException();
    }

    return user;
  }

  private generateJWTTokens(user: User) {
    this.logger.log({ userId: user.id }, 'JWT sign in');
    const authToken = this.jwtService.sign(instanceToPlain(user), {
      secret: config.jwt.authSecret,
      expiresIn: '60s',
    });

    const refreshToken = this.jwtService.sign(
      {
        username: user.email,
      },
      {
        secret: config.jwt.refreshSecret,
        expiresIn: '1d',
      },
    );

    return { authToken, refreshToken };
  }
}
