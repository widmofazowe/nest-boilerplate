import { NestFactory } from '@nestjs/core';
import * as express from 'express';
import helmet from 'helmet';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { Logger as NestLogger, ValidationPipe } from '@nestjs/common';
import { registerSignalHandler } from './signal-handler';
import { Logger } from 'nestjs-pino';

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
  app.useGlobalPipes(new ValidationPipe());
  app.useLogger(app.get(Logger));
  app.enableShutdownHooks();
  const server = await app.listen(port, () => {
    NestLogger.log(`Listening on prod ${port}`);
  });
  registerSignalHandler(server);
}
bootstrap();
