import { Injectable } from '@nestjs/common';
import { CreateNewarticleDto } from './dto/create-newarticle.dto';
import { UpdateNewarticleDto } from './dto/update-newarticle.dto';
import { newArticle } from './entities/newarticle.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class NewarticleService {
  constructor(@InjectRepository(newArticle) private readonly newArticle:Repository<newArticle>){}
  create(createNewarticleDto: CreateNewarticleDto) {
    return 'This action adds a new newarticle';
  }

  findAll() {
    return this.newArticle.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} newarticle`;
  }

  update(id: number, updateNewarticleDto: UpdateNewarticleDto) {
    return `This action updates a #${id} newarticle`;
  }

  remove(id: number) {
    return `This action removes a #${id} newarticle`;
  }
}
