import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return "welcome to the @dev.to example api with CI/CD Heroku."', () => {
      expect(appController.getHello()).toStrictEqual({
        message: 'welcome to the @dev.to example api with CI/CD Heroku.',
      });
    });
  });
});
