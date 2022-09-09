import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  app.use(helmet());
  app.enableCors();
  app.enableShutdownHooks();
  await app.listen(3000);
}
bootstrap();
