import { Module } from '@nestjs/common';
import { RegistrationModule } from './registration/registration.module';
import { ResetPasswordModule } from './reset-password/reset-password.module';

@Module({
  imports: [RegistrationModule, ResetPasswordModule],
})
export class UserManagementModule {}
