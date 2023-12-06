import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  UseFilters,
  Delete,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CreateDepartmentDto } from 'modules/department/dto';

import { AuthGuard, ExceptionsFilter } from 'modules/shared';

import { DepartmentServices } from 'modules/department/services';

import { ErrorPipeHandler } from 'modules/shared/utils';

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
    return this.departmentService.create(department);
  }

  @Patch('update/:id')
  @UseFilters(ExceptionsFilter)
  update(@Param('id') id: string, @Body() updateUserDto: CreateDepartmentDto) {
    return this.departmentService.update(id, updateUserDto);
  }

  @Patch('delete/:id')
  @UseFilters(ExceptionsFilter)
  delete(@Param('id') id: string) {}
}
