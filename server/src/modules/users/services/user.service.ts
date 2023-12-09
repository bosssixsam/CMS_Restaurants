import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, ValidationPipe } from '@nestjs/common';

import { User } from 'modules/users/entities';
import { CreateUserDto } from 'modules/users/dto';

import { HTTPS_ERRORS } from 'modules/users/constant';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    // try {
    //   // const exist = this.userRepo
    //   //   .createQueryBuilder('user')
    //   //   .where('user.username = :username', {
    //   //     username: createUserDto.username,
    //   //   })
    //   //   .orWhere('user.email = :email', { email: createUserDto.email })
    //   //   .getExists()
    //   //   .then((value) => {
    //   //     console.log('basfdsafdasfads', value);
    //   //   })
    //   //   .catch();
    // } catch (error) {}

    try {
      const exist = await this.userRepo
        .createQueryBuilder('user')
        .where('user.username = :username', {
          username: createUserDto.username,
        })
        // .orWhere('user.email = :email', { email: createUserDto.email })
        .getExists();

      if (exist) {
        throw HTTPS_ERRORS.USER_EXIST;
      }

      // this.userRepo.save()

      return 'This action adds a new user';
    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
