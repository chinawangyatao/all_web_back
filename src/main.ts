import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';
import {join} from 'path';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, 'public'), {
    prefix: '/static/', // 虚拟名称 http://localhost:3010/static/...png
  });
// app.useStaticAssets('public')
  await app.listen(3000);
}
bootstrap();
