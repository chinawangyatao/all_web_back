import { Module } from '@nestjs/common';
import { CodemoduleService } from './codemodule.service';
import { CodemoduleController } from './codemodule.controller';
import { Code } from './entities/codemodule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Code])],
  controllers: [CodemoduleController],
  providers: [CodemoduleService]
})
export class CodemoduleModule {}
