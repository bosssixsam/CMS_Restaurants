import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const isProduction = process.env.NODE_ENV === 'production';

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // set prefix

  app.setGlobalPrefix(`api/v${process.env['VERSON'] || '1'}`);

  if (isProduction) {
    app.enable('trust proxy');
  }

  // Redis Adapter
  // const redisIoAdapter = new RedisIoAdapter(app);
  // await redisIoAdapter.connectToRedis();

  // app.useWebSocketAdapter(redisIoAdapter);
  // // Express Middleware
  // middleware(app);

  // pipe validator

  // app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  await app.listen(5000);
}
bootstrap();
