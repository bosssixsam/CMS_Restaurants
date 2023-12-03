import { HttpException } from '@nestjs/common';

export const passwordRegEx =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export const HTTPS_ERRORS = {
  USER_EXIST: new HttpException('Account username has already been taken', 1),
};
