import { Test, TestingModule } from '@nestjs/testing';
import { NewarticleController } from './newarticle.controller';
import { NewarticleService } from './newarticle.service';

describe('NewarticleController', () => {
  let controller: NewarticleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewarticleController],
      providers: [NewarticleService],
    }).compile();

    controller = module.get<NewarticleController>(NewarticleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
