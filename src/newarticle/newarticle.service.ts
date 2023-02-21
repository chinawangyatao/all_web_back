import { Injectable } from '@nestjs/common';
import { CreateNewarticleDto } from './dto/create-newarticle.dto';
import { UpdateNewarticleDto } from './dto/update-newarticle.dto';

@Injectable()
export class NewarticleService {
  create(createNewarticleDto: CreateNewarticleDto) {
    return 'This action adds a new newarticle';
  }

  findAll() {
    return `This action returns all newarticle`;
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
