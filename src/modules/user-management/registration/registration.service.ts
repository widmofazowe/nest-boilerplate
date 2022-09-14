import { Injectable, Logger } from '@nestjs/common';
import { PasswordService } from '../../password/password.service';
import { CoreUsersService } from '../../core';
import { RegistrationDto } from './registration.dto';

@Injectable()
export class RegistrationService {
  private logger = new Logger(RegistrationService.name);

  constructor(private usersService: CoreUsersService, private passwordService: PasswordService) {}

  async register(registrationDto: RegistrationDto) {
    this.logger.log(
      {
        name: registrationDto.name,
      },
      'Registering user',
    );

    return this.usersService.create({
      email: registrationDto.email,
      name: registrationDto.name,
      password: await this.passwordService.cryptPassword(registrationDto.password),
    });
  }
}
