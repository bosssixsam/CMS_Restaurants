import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { AuthGuard } from 'modules/shared';

import { DepartmentServices } from 'modules/department/services';

import { ErrorPipeHandler } from 'modules/shared/utils';
import { CreateDepartmentDto } from 'modules/department/dto';

@Controller('department')
export class DepartmentControllers {
  constructor(private readonly departmentService: DepartmentServices) {}

  @Post('/create')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      exceptionFactory(errors) {
        return ErrorPipeHandler(errors);
      },
    }),
  )
  create(@Body() department: CreateDepartmentDto) {
    // return this.usersService.create(createUserDto);
  }
}
