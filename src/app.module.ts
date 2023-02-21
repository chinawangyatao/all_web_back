import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { BannerModule } from './banner/banner.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AboutusModule } from './aboutus/aboutus.module';
import { NewarticleModule } from './newarticle/newarticle.module';
import { CodemoduleModule } from './codemodule/codemodule.module';
import { HouseModule } from './house/house.module';
import { RecommendModule } from './recommend/recommend.module';



@Module({
  imports: [BannerModule,
  ServeStaticModule.forRoot({
    rootPath:join(__dirname,'..','public'),
  }),
  AboutusModule,
  NewarticleModule,
  CodemoduleModule,
  HouseModule,
  RecommendModule
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
