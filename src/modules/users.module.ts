import { UpdateUserUseCase } from './../domain/usecases/updateUser.usecase';
import { UpdateUserRepository } from 'src/infra/repositories/updateUser.repository';
import { CreateUserRepository } from './../infra/repositories/createUser.repository';
import { CreateUserUseCase } from './../domain/usecases/createUser.usecase';
import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserController } from '../presentation/controllers/users.controller';
import { UsersService } from './users/users.service';
import { ListUserWithFiltersRepository } from 'src/infra/repositories/listUserWithFilters.repository';

@Module({
  controllers: [UserController],
  providers: [
    PrismaService,
    UsersService,
    //Create
    CreateUserUseCase,
    CreateUserRepository,
    //Update
    UpdateUserUseCase,
    UpdateUserRepository,

    //list
    ListUserWithFiltersRepository,
  ],
  exports: [
    UsersService,
    //Create
    CreateUserUseCase,
    CreateUserRepository,
    //Update
    UpdateUserUseCase,
    UpdateUserRepository,

    //list
    ListUserWithFiltersRepository,
  ],
})
export class UsersModule {}
