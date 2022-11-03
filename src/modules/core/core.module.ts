import { DynamicModule, Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createCoreService } from './core-service.factory';
import { createCoreController } from './core.controller';
import { AbstractEntity } from './abstract.entity';

import { EntityConfig } from './entity-config';
import { getCoreServiceToken } from './inject.decorator';
import { AuthorizationModule } from '../authorization/authorization.module';

@Module({})
export class CoreModule {
  private static logger = new Logger(CoreModule.name);

  static forFeature<T extends AbstractEntity>(entityConfig: EntityConfig<T>): DynamicModule {
    this.logger.log(`Initializing core for ${entityConfig.baseEntity.name}`);
    const coreServiceToken = getCoreServiceToken(entityConfig.baseEntity);
    const coreService = createCoreService<T>(entityConfig);
    const coreController = createCoreController<T>(entityConfig);

    const provider = {
      provide: coreServiceToken,
      useClass: coreService,
    };

    return {
      module: CoreModule,
      global: true,
      imports: [
        AuthorizationModule,
        TypeOrmModule.forFeature([entityConfig.baseEntity, ...(entityConfig?.supportEntities || [])]),
      ],
      providers: [provider],
      exports: [provider],
      controllers: [coreController],
    };
  }
}
