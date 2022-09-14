import { Module } from '@nestjs/common';
import { CoreModule } from '../../core';
import { PasswordModule } from '../../password/password.module';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

@Module({
  imports: [PasswordModule, CoreModule],
  controllers: [RegistrationController],
  providers: [RegistrationService],
})
export class RegistrationModule {}
