import { Body, Controller, Param, Post, Put } from '@nestjs/common';
import { Public } from 'src/common/decorators/public.decorator';
import { ResetPasswordDto } from './reset-password.dto';
import { UserManagementResetPasswordService } from './reset-password.service';
import { UpdatePasswordDto } from './update-password.dto';

@Controller('/reset-password')
export class UserManagementResetPasswordController {
  constructor(private resetPasswordService: UserManagementResetPasswordService) {}

  @Post('/')
  @Public()
  resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.resetPasswordService.resetPasword(resetPasswordDto.email);
  }

  @Post('/:userId/:token')
  @Public()
  updatePassword(
    @Param('userId') userId: string,
    @Param('token') token: string,
    @Body() updatePasswordDto: UpdatePasswordDto,
  ) {
    return this.resetPasswordService.updatePasword(userId, token, updatePasswordDto.password);
  }
}
