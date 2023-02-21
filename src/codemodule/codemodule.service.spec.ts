import { Test, TestingModule } from '@nestjs/testing';
import { CodemoduleService } from './codemodule.service';

describe('CodemoduleService', () => {
  let service: CodemoduleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CodemoduleService],
    }).compile();

    service = module.get<CodemoduleService>(CodemoduleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
