import { UserFilters } from './../../utils/types/userFilters.type';
import { ListUserWithFiltersRepository } from './../../infra/repositories/listUserWithFilters.repository';
import { CreateUserUseCase } from './../../domain/usecases/createUser.usecase';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Query,
} from '@nestjs/common';
import { UsersService } from '../../modules/users/users.service';
import { createUserDto } from '../../utils/dtos/createUser.dto';
import { updateUserDto } from '../../utils/dtos/updateUser.dto';
import { BASE_URL } from '../../utils/consts';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../modules/users/auth/jwt-auth.guard';
import { TUser } from '../../utils/types';
import { UpdateUserUseCase } from 'src/domain/usecases/updateUser.usecase';

// @UseGuards(JwtAuthGuard)
@Controller(`${BASE_URL}/users`)
export class UserController {
  constructor(
    private readonly usersService: UsersService,
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly listUserWithFiltersRepository: ListUserWithFiltersRepository
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({ type: [createUserDto] })
  async addUser(@Body() userDto: createUserDto) {
    return await this.createUserUseCase.create(userDto);
  }

  @Put()
  @UsePipes(ValidationPipe)
  @ApiBody({ type: [updateUserDto] })
  async updateUser(@Body() userDto: updateUserDto) {
    return await this.updateUserUseCase.update(userDto);
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'int' })
  async getUserById(@Param() params: any): Promise<TUser> {
    return await this.usersService.listUserById(params.id);
  }

  @Get()
  async listUsers(@Query() query: UserFilters): Promise<TUser[]> {
    return await this.listUserWithFiltersRepository.listUsers(query);
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', type: 'int' })
  async deleteUser(@Param() params: any): Promise<void> {
    await this.usersService.deleteUser(params.id);
  }
}
