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
// import { CreateUserDto, UpdateUserDto } from 'modules/users/dto';
import { AuthGuard } from 'modules/shared';
import { CreateUserDto } from 'modules/users/dto';

import { UsersService } from 'modules/users/services';

import { ErrorPipeHandler } from 'modules/shared/utils';

@Controller('roles')
export class RoleControllers {
  constructor(private readonly usersService: UsersService) {}

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
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @UseGuards(AuthGuard)
  // @Get()
  // findAll() {
  //   return this.usersService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: any) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
