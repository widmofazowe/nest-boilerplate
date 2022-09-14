import { Body, ClassSerializerInterceptor, Controller, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { Public } from './common/decorators/public.decorator';
import { RequestUser } from './common/decorators/user.decorator';
import { User, UsersService } from './modules/core';

@Controller('/')
export class AppController {
  constructor(private appService: AppService, private usersService: UsersService) {}

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

  @Put('/user/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }
}
