import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryController } from './category/category.controller';
import { BannerModule } from './banner/banner.module';
import { AboutusModule } from './aboutus/aboutus.module';
import { NewarticleModule } from './newarticle/newarticle.module';
import { CodemoduleModule } from './codemodule/codemodule.module';
import { HouseModule } from './house/house.module';
import { RecommendModule } from './recommend/recommend.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectModule } from './project/project.module';

@Module({
  imports: [
    BannerModule,
    TypeOrmModule.forRoot({
      type: 'mysql', //数据库类型
      username: 'root', //账号
      password: '88888888', //密码
      // host: '123.168.95.215',
      host: '127.0.0.1', //host
      port: 3306, //
      database: 'mybolg', //库名

      // 线上地址
      // username: 'nest_daidaidd', //账号
      // password: 'Fz7cptaC4ni4XC3M', //密码
      // host: '127.0.0.1', //host
      // port: 3306, //
      // database: 'nest_daidaidd', //库名

      // entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
      synchronize: true, //synchronize字段代表是否自动将实体类同步到数据库
      retryDelay: 500, //重试连接数据库间隔
      retryAttempts: 10, //重试连接数据库的次数
      autoLoadEntities: true, //如果为true,将自动加载实体 forFeature()方法注册的每个实体都将自动添加到配置对象的实体数组中
    }),
    AboutusModule,
    NewarticleModule,
    CodemoduleModule,
    HouseModule,
    RecommendModule,
    UsersModule,
    ProjectModule,
  ],
  controllers: [AppController, CategoryController],
  providers: [AppService],
})
export class AppModule {}
