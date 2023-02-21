import { Injectable } from '@nestjs/common';
import { CreateCodemoduleDto } from './dto/create-codemodule.dto';
import { UpdateCodemoduleDto } from './dto/update-codemodule.dto';

@Injectable()
export class CodemoduleService {
  create(createCodemoduleDto: CreateCodemoduleDto) {
    return 'This action adds a new codemodule';
  }

  findAll() {
    return `This action returns all codemodule`;
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
