import { ValidationError } from '@nestjs/common';
import { ValidatorOptions } from 'class-validator';

export interface ValidationPipeOption extends ValidatorOptions {
  transform?: boolean;
  disableErrorMessages?: boolean;
  whitelist?: boolean;
  // exceptionFactory?: (errors: ValidationError[]) => any;
}
