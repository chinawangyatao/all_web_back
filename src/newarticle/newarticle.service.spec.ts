import { Test, TestingModule } from '@nestjs/testing';
import { NewarticleService } from './newarticle.service';

describe('NewarticleService', () => {
  let service: NewarticleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewarticleService],
    }).compile();

    service = module.get<NewarticleService>(NewarticleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
