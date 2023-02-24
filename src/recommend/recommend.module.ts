import { Module } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { RecommendController } from './recommend.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recommend } from './entities/recommend.entity';
@Module({
  imports:([TypeOrmModule.forFeature([Recommend])]),
  controllers: [RecommendController],
  providers: [RecommendService]
})
export class RecommendModule {}
