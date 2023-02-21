import { Injectable } from '@nestjs/common';
import { CreateAboutusDto } from './dto/create-aboutus.dto';
import { UpdateAboutusDto } from './dto/update-aboutus.dto';

@Injectable()
export class AboutusService {
  create(createAboutusDto: CreateAboutusDto) {
    return 'This action adds a new aboutus';
  }

  findAll() {
    return `This action returns all aboutus`;
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
