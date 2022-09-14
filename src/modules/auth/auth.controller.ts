import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';
import { Public } from '../../common/decorators/public.decorator';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @Public()
  async login(@Res({ passthrough: true }) response: Response, @Body() loginDto: LoginDto) {
    const { authToken, refreshToken } = await this.authService.login(loginDto.username, loginDto.password);
    this.setRefreshTokenCookie(response, refreshToken);

    return { authToken };
  }

  @Post('/refresh')
  @Public()
  async refresh(@Req() request: Request, @Res({ passthrough: true }) response: Response) {
    const requestRefreshToken = request.cookies.jwt;
    const { authToken, refreshToken } = await this.authService.refresh(requestRefreshToken);
    this.setRefreshTokenCookie(response, refreshToken);

    return { authToken };
  }

  private setRefreshTokenCookie(response: Response, refreshToken: string) {
    response.cookie('jwt', refreshToken, {
      httpOnly: true,
      sameSite: 'none',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    });
  }
}
