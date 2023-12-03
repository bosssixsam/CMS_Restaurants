import { Injectable } from '@nestjs/common';

@Injectable()
export class DepartmentServices {
  getHello(): string {
    return 'Hello World!';
  }
}
