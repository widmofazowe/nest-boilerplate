import { Body, Controller, Get, Param, Post, Put, Type } from '@nestjs/common';
import { CoreService } from './core.service';
import { AbstractEntity } from './abstract.entity';
import { EntityConfig } from './entity-config';
import { InjectCoreService } from './inject.decorator';
import { Policy } from 'src/common/decorators/policy.decorator';
import { AppAbility } from '../authorization/casl-ability.factory';
import { Action } from '../authorization/action.enum';

export const createCoreController = <T extends AbstractEntity>(entityConfig: EntityConfig<T>): Type<any> => {
  @Controller(`/mev/${entityConfig.baseUrl}`)
  class CoreController {
    constructor(@InjectCoreService(entityConfig.baseEntity) private coreService: CoreService<T>) {}

    @Policy((ability: AppAbility) => ability.can(Action.Read, entityConfig.baseEntity as any))
    @Get('/:id')
    get(@Param('id') id: string) {
      return this.coreService.findOne({ where: { id } });
    }

    @Policy((ability: AppAbility) => ability.can(Action.Create, entityConfig.baseEntity as any))
    @Post('/')
    create(@Body() createDto: T) {
      return this.coreService.create(createDto);
    }

    @Policy((ability: AppAbility) => ability.can(Action.Update, entityConfig.baseEntity as any))
    @Put('/:id')
    update(@Param('id') id: string, @Body() updateDto: T) {
      return this.coreService.update(id, updateDto);
    }
  }

  return CoreController;
};
