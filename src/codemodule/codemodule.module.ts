import { Module } from '@nestjs/common';
import { CodemoduleService } from './codemodule.service';
import { CodemoduleController } from './codemodule.controller';

@Module({
  controllers: [CodemoduleController],
  providers: [CodemoduleService]
})
export class CodemoduleModule {}
