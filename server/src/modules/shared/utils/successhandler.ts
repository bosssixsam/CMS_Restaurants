import { HttpStatus } from '@nestjs/common';

export const successUpdateFormat = (message: string, status?: number) => {
  return {
    statusCode: status || HttpStatus.CREATED,
    message,
  };
};
