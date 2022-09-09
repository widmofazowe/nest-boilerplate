import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, FindOneOptions, Repository } from 'typeorm';

import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(options?: FindManyOptions<User>) {
    return this.usersRepository.find(options);
  }

  findOne(options: FindOneOptions<User>) {
    return this.usersRepository.findOne(options);
  }

  create(payload: Partial<User>) {
    console.log(payload);
    return this.usersRepository.save({ ...payload });
  }

  update(id: string, payload: Partial<User>) {
    console.log({ id, ...payload });
    return this.usersRepository.save({ id, ...payload });
  }
}
