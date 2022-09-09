import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/core';

@Controller('/')
export class AppController {
  constructor(private appService: AppService, private usersService: UsersService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/')
  createUser(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }
}
