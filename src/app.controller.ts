import { ClassSerializerInterceptor, Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';
import { RequestUser } from './common/decorators/user.decorator';
import { User } from './common/entities/user';

@Controller('/')
export class AppController {
  constructor(private appService: AppService) {}

  @Public()
  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @Get('/user')
  getUsers(@RequestUser() user: User) {
    return user;
  }
}
