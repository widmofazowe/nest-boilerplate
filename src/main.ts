import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { registerSignalHandler } from './signal-handler';

const port = 8000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.use(
    helmet({
      crossOriginEmbedderPolicy: false,
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          imgSrc: ["'self'", 'https://via.placeholder.com'],
        },
      },
    }),
  );
  app.use(express.json());
  app.use(cookieParser());
  app.enableCors({
    origin: ['https://via.placeholder.com'],
  });
  app.enableShutdownHooks();
  const server = await app.listen(port, () => {
    Logger.log(`Listening on prod ${port}`);
  });
  registerSignalHandler(server);
}
bootstrap();
