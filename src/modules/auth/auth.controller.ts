import { Body, Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { Public } from './public.decorator';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('/')
  @Public()
  async login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto.username, loginDto.password);
  }
}
