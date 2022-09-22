import { Injectable, Logger, Type } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, FindManyOptions, FindOneOptions, Repository } from 'typeorm';
import { CoreService } from './core.service';
import { AbstractEntity } from './abstract.entity';
import { EntityConfig } from './entity-config';

export const createCoreService = <T extends AbstractEntity>(entityConfig: EntityConfig<T>): Type<CoreService<T>> => {
  @Injectable()
  class EntityCoreService implements CoreService<T> {
    private logger = new Logger(`${entityConfig.baseEntity.name}${EntityCoreService.name}`);

    constructor(
      @InjectRepository(entityConfig.baseEntity)
      private entityRepository: Repository<T>,
    ) {}

    find(options: FindManyOptions<T>) {
      return this.entityRepository.find(options);
    }

    findOne(options: FindOneOptions<T>) {
      return this.entityRepository.findOne(options);
    }

    create(createDto: DeepPartial<T>) {
      if (createDto.id) {
        throw new Error('Cannot specify id field in create method');
      }

      this.logger.log(`Creating ${entityConfig.baseEntity.name}`);
      return this.entityRepository.save(createDto);
    }

    update(id: string, updateDto: DeepPartial<T>) {
      if (!id) {
        throw new Error('Cannot update without id');
      }

      this.logger.log(`Updating ${entityConfig.baseEntity.name} - ${id}`);
      return this.entityRepository.save({ id, ...updateDto });
    }
  }

  return EntityCoreService;
};
