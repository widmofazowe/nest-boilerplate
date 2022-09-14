import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core';
import config from './config';
import { RequestContextMiddleware, TypeOrmHistoryModule } from 'nest-typeorm-history';
import { AuthModule } from './modules/auth/auth.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { UserManagementModule } from './modules/user-management/user.module';
import { MailerModule, MandrillMailer } from 'nest-mailer-module';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.database }),
    TypeOrmHistoryModule,
    EventEmitterModule.forRoot(),
    MailerModule.forRoot({ mailer: MandrillMailer }),
    //internal
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
