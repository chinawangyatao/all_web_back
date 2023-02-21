import { Injectable } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { UpdateAboutusDto } from './dto/update-aboutus.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { aboutUs } from './entities/aboutus.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AboutusService {
  constructor(@InjectRepository(aboutUs) private readonly aboutUs: Repository<aboutUs>){}
  create(createAboutusDto: CreateAboutusDto) {
    return 'This action adds a new aboutus';
  }

  findAll() {
    return this.aboutUs.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} aboutus`;
  }

  update(id: number, updateAboutusDto: UpdateAboutusDto) {
    return `This action updates a #${id} aboutus`;
  }

  remove(id: number) {
    return `This action removes a #${id} aboutus`;
  }
}
