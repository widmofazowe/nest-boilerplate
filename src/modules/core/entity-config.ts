import { Type } from '@nestjs/common';
import { EntityClassOrSchema } from '@nestjs/typeorm/dist/interfaces/entity-class-or-schema.type';
import { AbstractEntity } from './abstract.entity';

export interface EntityConfig<T extends AbstractEntity> {
  baseEntity: Type<T>;
  baseUrl: string;
  supportEntities?: EntityClassOrSchema[];
}
