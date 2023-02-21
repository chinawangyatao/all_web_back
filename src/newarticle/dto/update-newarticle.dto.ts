import { PartialType } from '@nestjs/mapped-types';
import { CreateNewarticleDto } from './create-newarticle.dto';

export class UpdateNewarticleDto extends PartialType(CreateNewarticleDto) {}
