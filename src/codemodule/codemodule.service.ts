import { Injectable } from '@nestjs/common';
import { CreateCodemoduleDto } from './dto/create-codemodule.dto';
import { UpdateCodemoduleDto } from './dto/update-codemodule.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Code } from './entities/codemodule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CodemoduleService {
  constructor (@InjectRepository(Code) private readonly Code:Repository<Code>){}
  create(createCodemoduleDto: CreateCodemoduleDto) {
    return 'This action adds a new codemodule';
  }

  findAll() {
    return this.Code.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} codemodule`;
  }

  update(id: number, updateCodemoduleDto: UpdateCodemoduleDto) {
    return `This action updates a #${id} codemodule`;
  }

  remove(id: number) {
    return `This action removes a #${id} codemodule`;
  }
}
