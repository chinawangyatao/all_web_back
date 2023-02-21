import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NewarticleService } from './newarticle.service';
import { CreateNewarticleDto } from './dto/create-newarticle.dto';
import { UpdateNewarticleDto } from './dto/update-newarticle.dto';

@Controller('newarticle')
export class NewarticleController {
  constructor(private readonly newarticleService: NewarticleService) {}

  @Post()
  create(@Body() createNewarticleDto: CreateNewarticleDto) {
    return this.newarticleService.create(createNewarticleDto);
  }

  @Get()
  findAll() {
    return this.newarticleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.newarticleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNewarticleDto: UpdateNewarticleDto) {
    return this.newarticleService.update(+id, updateNewarticleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.newarticleService.remove(+id);
  }
}
