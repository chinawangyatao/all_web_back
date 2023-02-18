import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets('public');
  // app.setViewEngine('hbs');
  await app.listen(3000);
}
bootstrap();
