import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Department } from 'entities';

import { DepartmentControllers } from 'modules/department/controllers';

import { DepartmentServices } from 'modules/department/services';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  controllers: [DepartmentControllers],
  providers: [DepartmentServices],
})
export class DeparmentModule {}
