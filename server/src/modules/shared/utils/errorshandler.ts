import { HttpException, HttpStatus, ValidationError } from '@nestjs/common';

export const ErrorPipeHandler = (errors: ValidationError[]) => {
  const errors_arr = errors.map((item) => {
    return [...Object.values(item.constraints)];
  });
  const format = [].concat.apply([], errors_arr);
  return new HttpException(format[0], HttpStatus.BAD_REQUEST);
};
