import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';

import { Department } from 'entities';

import { CreateDepartmentDto } from 'modules/department/dto';

import { HTTPS_ERRORS } from 'modules/department/constant';

import { successUpdateFormat } from 'modules/shared/utils';

@Injectable()
export class DepartmentServices {
  constructor(
    @InjectRepository(Department)
    private readonly deparmentRepo: Repository<Department>,
  ) {}

  async create(createDepartmentDto: CreateDepartmentDto): Promise<Object> {
    try {
      const result = await this.deparmentRepo.save(createDepartmentDto);

      if (result) {
        return successUpdateFormat('Department created');
      }
    } catch (error: any) {
      throw new HttpException('Creation failed', HttpStatus.BAD_REQUEST);
    }
  }

  async update(
    id: string,
    createDepartmentDto: CreateDepartmentDto,
  ): Promise<Object> {
    if (Number.isNaN(parseInt(id))) {
      throw HTTPS_ERRORS.ID_TYPE;
    }
    try {
      const validateID = await this.deparmentRepo.findOne({
        where: {
          id: parseInt(id),
        },
      });

      if (validateID === null) {
        throw HTTPS_ERRORS.ID_NOT_FOUND;
      } else {
        const result = await this.deparmentRepo.update(id, createDepartmentDto);

        if (result) {
          return successUpdateFormat('Department updated');
        }
      }
    } catch (error: any) {
      throw error;
    }
  }

  async delete(id: string): Promise<any> {
    if (Number.isNaN(parseInt(id))) {
      throw HTTPS_ERRORS.ID_TYPE;
    }
    try {
      const validateID = await this.deparmentRepo.findOne({
        where: {
          id: parseInt(id),
        },
      });

      if (validateID === null) {
        throw HTTPS_ERRORS.ID_NOT_FOUND;
      } else {
        const result = await this.deparmentRepo.delete(id);

        if (result) {
          return successUpdateFormat('Department deleted');
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
