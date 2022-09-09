import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll() {
    return this.usersRepository.find();
  }

  findOne(options: FindOneOptions<User>) {
    return this.usersRepository.findOne(options);
  }

  create(createUserDto: any) {
    console.log(createUserDto);
    return this.usersRepository.save({ ...createUserDto });
  }
}
