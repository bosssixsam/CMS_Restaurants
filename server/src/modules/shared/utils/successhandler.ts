import { HttpStatus } from '@nestjs/common';

export const successUpdateFormat = (
  message: string,
  status?: number,
  data?: Object,
) => {
  return {
    statusCode: status || HttpStatus.CREATED,
    message,
    data,
  };
};
