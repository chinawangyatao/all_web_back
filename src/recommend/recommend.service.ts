import { Injectable } from '@nestjs/common';
import { CreateRecommendDto } from './dto/create-recommend.dto';
import { UpdateRecommendDto } from './dto/update-recommend.dto';
import { Recommend } from './entities/recommend.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class RecommendService {
  constructor(@InjectRepository(Recommend) private readonly recommend:Repository<Recommend>){}
  create(createRecommendDto: CreateRecommendDto) {
    return 'This action adds a new recommend';
  }

  findAll() {
    return this.recommend.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} recommend`;
  }

  update(id: number, updateRecommendDto: UpdateRecommendDto) {
    return `This action updates a #${id} recommend`;
  }

  remove(id: number) {
    return `This action removes a #${id} recommend`;
  }
}
