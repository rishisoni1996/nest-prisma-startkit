import { Test, TestingModule } from '@nestjs/testing';

import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let _app: TestingModule;

  beforeAll(async () => {
    _app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('root', () => {
    it('Health check route (/health-check) should return nothing!', () => {
      const appController = _app.get<AppController>(AppController);
      expect(appController.healthCheck()).toBe(undefined);
    });
  });
});
