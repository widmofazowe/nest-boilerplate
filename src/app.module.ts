import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { ServeStaticModule } from '@nestjs/serve-static';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { RequestContextMiddleware, TypeOrmHistoryModule } from 'nest-typeorm-history';

import config from './config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoreModule } from './modules/core';
import { AuthModule } from './modules/auth/auth.module';
import { UserManagementModule } from './modules/user-management/user.module';
import { AppMailerModule } from './modules/mailer/mailer.module';
import { User, UserActivity, UserHistory } from './common/entities/user';
import { LoggerModule, Logger } from 'nestjs-pino';
import { join } from 'path';

@Module({
  imports: [
    TypeOrmModule.forRoot({ ...config.database }),
    TypeOrmHistoryModule,
    EventEmitterModule.forRoot(),
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', 'assets'), serveRoot: '/static' }),
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile: true, //join(process.cwd(), 'src/schema.gql'),
    // }),
    LoggerModule.forRoot(),
    //internal
    CoreModule.forFeature({ baseEntity: User, baseUrl: 'user', supportEntities: [UserHistory, UserActivity] }),
    AppMailerModule,
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
