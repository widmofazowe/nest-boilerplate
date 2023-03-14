import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PasswordModule } from 'src/modules/password/password.module';
import { ResetPasswordController } from './reset-password.controller';
import { ResetPasswordService } from './reset-password.service';

@Module({
  imports: [JwtModule.register({}), PasswordModule],
  controllers: [ResetPasswordController],
  providers: [ResetPasswordService],
})
export class ResetPasswordModule {}
