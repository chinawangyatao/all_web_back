import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CodemoduleService } from './codemodule.service';
import { CreateCodemoduleDto } from './dto/create-codemodule.dto';
import { UpdateCodemoduleDto } from './dto/update-codemodule.dto';

@Controller('codemodule')
export class CodemoduleController {
  constructor(private readonly codemoduleService: CodemoduleService) {}

  @Post()
  create(@Body() createCodemoduleDto: CreateCodemoduleDto) {
    return this.codemoduleService.create(createCodemoduleDto);
  }

  @Get()
  findAll() {
    return this.codemoduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.codemoduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCodemoduleDto: UpdateCodemoduleDto) {
    return this.codemoduleService.update(+id, updateCodemoduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.codemoduleService.remove(+id);
  }
}
