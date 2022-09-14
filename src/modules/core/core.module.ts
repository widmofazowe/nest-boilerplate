import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityModule } from 'nest-typeorm-object-activites';
import { UserActivity } from './entities/user-activity.entity';

import { User } from './entities/user.entity';
import { CoreUsersService } from './services/user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserActivity]), ActivityModule.forFeature(UserActivity, 'user')],
  providers: [CoreUsersService],
  exports: [CoreUsersService],
})
export class CoreModule {}
