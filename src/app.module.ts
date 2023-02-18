import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { BannerModule } from './banner/banner.module';

@Module({
  imports: [BannerModule],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
