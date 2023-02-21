import { Module } from '@nestjs/common';
import { NewarticleService } from './newarticle.service';
import { NewarticleController } from './newarticle.controller';
import { newArticle } from './entities/newarticle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([newArticle])],
  controllers: [NewarticleController],
  providers: [NewarticleService]
})
export class NewarticleModule {}
