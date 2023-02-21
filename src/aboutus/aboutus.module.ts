import { Module } from '@nestjs/common';
import { AboutusService } from './aboutus.service';
import { AboutusController } from './aboutus.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { aboutUs } from './entities/aboutus.entity';

@Module({
  imports: [TypeOrmModule.forFeature([aboutUs])],
  controllers: [AboutusController],
  providers: [AboutusService]
})
export class AboutusModule {}
