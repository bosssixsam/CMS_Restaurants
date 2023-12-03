import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from 'modules/users/entities';

import { UsersController } from 'modules/users/controllers';

import { UsersService } from 'modules/users/services';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService, JwtService],
})
export class UsersModule {}
