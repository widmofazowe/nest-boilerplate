import { DeepPartial, FindManyOptions, FindOneOptions } from 'typeorm';
import { AbstractEntity } from './abstract.entity';

export interface CoreService<T extends AbstractEntity> {
  find: (options: FindManyOptions) => Promise<T[]>;
  findOne: (options: FindOneOptions) => Promise<T>;
  create: (createDto: DeepPartial<T>) => Promise<DeepPartial<T>>;
  update: (id: string, updateDto: DeepPartial<T>) => Promise<DeepPartial<T>>;
}
