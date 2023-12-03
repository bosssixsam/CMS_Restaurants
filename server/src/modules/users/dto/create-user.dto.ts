import {
  IsNotEmpty,
  IsString,
  IsEmail,
  Equals,
  Matches,
} from 'class-validator';

import { Match } from 'modules/shared';

import { passwordRegEx } from 'modules/users/constant';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({
    message: 'name is reqired',
  })
  name: string;

  @IsString()
  @IsNotEmpty({
    message: 'username is reqired',
  })
  username: string;

  @IsString()
  @IsNotEmpty({
    message: 'email is reqired',
  })
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty({
    message: 'password is required',
  })
  // @Matches(passwordRegEx, {
  //   message: `Password must contain Minimum 8 and maximum 20 characters,
  //   at least one uppercase letter,
  //   one lowercase letter,
  //   one number and
  //   one special character`,
  // })
  password: string;

  @Match(CreateUserDto, (field) => field.password, {
    message: 'confirm password do not match',
  })
  @IsString()
  @IsNotEmpty()
  confirm_password: string;
}
