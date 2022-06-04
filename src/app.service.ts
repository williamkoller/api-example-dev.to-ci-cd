import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message: `welcome to the @dev.to example api with CI/CD Heroku`,
    };
  }
}
