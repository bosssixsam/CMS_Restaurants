import { IsNotEmpty, IsString } from 'class-validator';

import { Match } from 'modules/shared';

import { passwordRegEx } from 'modules/users/constant';

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty({
    message: 'name is reqired',
  })
  name: string;
}
