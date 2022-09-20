import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { RequestContextMiddleware, TypeOrmHistoryModule } from 'nest-typeorm-history';

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core';
import { AuthModule } from './modules/auth/auth.module';
import { UserManagementModule } from './modules/user-management/user.module';
import { AppMailerModule } from './modules/mailer/mailer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.database }),
    TypeOrmHistoryModule,
    EventEmitterModule.forRoot(),
    //internal
    AppMailerModule,
    CoreModule,
    AuthModule,
    UserManagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestContextMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
