import { Test, TestingModule } from '@nestjs/testing';
import { CodemoduleController } from './codemodule.controller';
import { CodemoduleService } from './codemodule.service';

describe('CodemoduleController', () => {
  let controller: CodemoduleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CodemoduleController],
      providers: [CodemoduleService],
    }).compile();

    controller = module.get<CodemoduleController>(CodemoduleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
