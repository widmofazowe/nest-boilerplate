import { Body, Controller, Post, Put } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ResetPasswordDto } from './reset-password.dto';
import { ResetPasswordService } from './reset-password.service';
import { UpdatePasswordDto } from './update-password.dto';

@Controller('/user/reset-password')
export class ResetPasswordController {
  constructor(private resetPasswordService: ResetPasswordService) {}

  @Post('/')
  @Public()
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.resetPasswordService.resetPassword(resetPasswordDto.email);
  }

  @Put('/')
  @Public()
  updatePassword(@Body() updatePasswordDto: UpdatePasswordDto) {
    return this.resetPasswordService.updatePassword(updatePasswordDto);
  }
}
