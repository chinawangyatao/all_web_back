import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecommendService } from './recommend.service';
import { CreateRecommendDto } from './dto/create-recommend.dto';
import { UpdateRecommendDto } from './dto/update-recommend.dto';

@Controller('recommend')
export class RecommendController {
  constructor(private readonly recommendService: RecommendService) {}

  @Post()
  create(@Body() createRecommendDto: CreateRecommendDto) {
    return this.recommendService.create(createRecommendDto);
  }

  @Get()
  findAll() {
    return this.recommendService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recommendService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecommendDto: UpdateRecommendDto) {
    return this.recommendService.update(+id, updateRecommendDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recommendService.remove(+id);
  }
}
