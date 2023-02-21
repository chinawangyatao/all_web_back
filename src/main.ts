import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express';
import { Response } from './common/response';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalInterceptors(new Response())
  await app.listen(3000);
}
bootstrap();
