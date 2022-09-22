import { Inject, Type } from '@nestjs/common';
import { AbstractEntity } from './abstract.entity';

export function getCoreServiceToken<T extends AbstractEntity>(entity: Type<T>) {
  if (!entity) {
    throw new Error('CircularDependencyException - @InjectCoreService()');
  }

  return `${entity.name}Service`;
}

export function InjectCoreService<T extends AbstractEntity>(entity: Type<T>): any {
  return Inject(getCoreServiceToken(entity));
}
