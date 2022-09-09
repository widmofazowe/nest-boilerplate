import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UsersService } from './modules/core';

@Controller('/')
export class AppController {
  constructor(private appService: AppService, private usersService: UsersService) {}

  @Get('/')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/user')
  getUsers() {
    return this.usersService.findAll({ where: { name: undefined, email: 'widmo@rspective.pl' } });
  }

  @Post('/user')
  createUser(@Body() createUserDto: any) {
    return this.usersService.create(createUserDto);
  }

  @Put('/user/:id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: any) {
    return this.usersService.update(id, updateUserDto);
  }
}
