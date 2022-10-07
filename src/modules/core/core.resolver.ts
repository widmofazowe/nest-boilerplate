import { AbstractEntity } from './abstract.entity';
import { EntityConfig } from './entity-config';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Type } from '@nestjs/common';
import { InjectCoreService } from './inject.decorator';
import { CoreService } from './core.service';
import { getMetadataArgsStorage } from 'typeorm';

export const createCoreResolver = <T extends AbstractEntity>(entityConfig: EntityConfig<T>): Type<any> => {
  @Resolver(() => entityConfig.baseEntity)
  class CoreResolver {
    constructor(@InjectCoreService(entityConfig.baseEntity) private coreService: CoreService<T>) {}

    @Query(() => entityConfig.baseEntity, { name: entityConfig.baseEntity.name.toLowerCase() })
    async queryEntity(@Args('id') id: string) {
      return this.coreService.findOne({ where: { id } });
    }
  }

  const relations = getMetadataArgsStorage().relations.filter(r => r.target === entityConfig.baseEntity);
  relations
    .filter(r => r.relationType === 'one-to-many')
    .forEach(r => (CoreResolver.prototype[r.propertyName] = function (this: CoreResolver, ...args: any) {}));
  // severityKeys.forEach(
  //   k =>
  //     (CoreResolver.prototype[k] = function (this: CoreResolver, ...args: any) {

  //     }),
  // );

  return CoreResolver;
};
