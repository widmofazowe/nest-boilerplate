import { Injectable, Logger } from '@nestjs/common';
import { User } from 'src/common/entities/user';
import { CoreService, InjectCoreService } from 'src/modules/core';
import { PasswordService } from '../../password/password.service';
import { RegistrationDto } from './registration.dto';

@Injectable()
export class RegistrationService {
  private logger = new Logger(RegistrationService.name);

  constructor(
    @InjectCoreService(User) private usersService: CoreService<User>,
    private passwordService: PasswordService,
  ) {}

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
