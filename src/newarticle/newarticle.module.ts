import { Module } from '@nestjs/common';
import { NewarticleService } from './newarticle.service';
import { NewarticleController } from './newarticle.controller';

@Module({
  controllers: [NewarticleController],
  providers: [NewarticleService]
})
export class NewarticleModule {}
