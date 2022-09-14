import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CoreModule } from 'src/modules/core';
import { PasswordModule } from 'src/modules/password/password.module';
import { UserManagementResetPasswordController } from './reset-password.controller';
import { UserManagementResetPasswordService } from './reset-password.service';

@Module({
  imports: [JwtModule.register({}), CoreModule, PasswordModule],
  controllers: [UserManagementResetPasswordController],
  providers: [UserManagementResetPasswordService],
})
export class ResetPasswordModule {}
