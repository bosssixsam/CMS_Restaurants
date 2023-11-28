import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersController } from 'src/modules/users/controllers';
import { UsersService } from 'src/modules/users/services';

@Module({
  controllers: [UsersController],
  providers: [UsersService, JwtService],
})
export class UsersModule {}
