import { HttpException, HttpStatus } from '@nestjs/common';

export const HTTPS_ERRORS = {
  ID_TYPE: new HttpException('Id type is wrong', HttpStatus.BAD_REQUEST),
  ID_NOT_FOUND: new HttpException('Item do not exist', HttpStatus.BAD_REQUEST),
};
