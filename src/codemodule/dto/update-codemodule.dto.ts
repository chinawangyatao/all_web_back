import { PartialType } from '@nestjs/mapped-types';
import { CreateCodemoduleDto } from './create-codemodule.dto';

export class UpdateCodemoduleDto extends PartialType(CreateCodemoduleDto) {}
