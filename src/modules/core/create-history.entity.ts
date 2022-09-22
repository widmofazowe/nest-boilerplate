import { Type } from '@nestjs/common';
import { HistoryEntity, HistoryFor } from 'nest-typeorm-history';
import { Entity } from 'typeorm';
import { AbstractEntity } from './abstract.entity';
import { EntityConfig } from './entity-config';

export const createHistoryEntity = <T extends AbstractEntity>(entityConfig: EntityConfig<T>): Type<HistoryEntity> => {
  @Entity({ name: `${entityConfig.baseEntity.name.toLowerCase()}_history` })
  @HistoryFor(entityConfig.baseEntity)
  class CoreEntityHistory extends HistoryEntity {}

  return CoreEntityHistory;
};
