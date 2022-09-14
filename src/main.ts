import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet());
  app.use(express.json());
  app.use(cookieParser());
  app.enableCors();
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
