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
} from '@nestjs/common';
import { PeoplesService } from '../../modules/people/peoples.service';
import { createPeopleDto } from '../../utils/dtos/createPeople.dto';
import { updatePeopleDto } from '../../utils/dtos/updatePeople.dto';
import { BASE_URL } from '../../utils/consts';
import { ApiBody, ApiParam } from '@nestjs/swagger';
import { TPeople } from '../../utils/types';

@Controller(`${BASE_URL}/peoples`)
export class PeopleController {
  constructor(private readonly peoplesService: PeoplesService) {}

  @Post()
  @UsePipes(ValidationPipe)
  @ApiBody({ type: [createPeopleDto] })
  async addPeople(@Body() peopleDto: createPeopleDto) {
    await this.peoplesService.addPeople(peopleDto);
  }

  @Put()
  @UsePipes(ValidationPipe)
  @ApiBody({ type: [updatePeopleDto] })
  async updatePeople(@Body() peopleDto: updatePeopleDto) {
    await this.peoplesService.updatePeople(peopleDto);
  }

  @Get('/:id')
  @ApiParam({ name: 'id', type: 'int' })
  async getPeopleById(@Param() params: any): Promise<TPeople> {
    return await this.peoplesService.listPeopleById(params.id);
  }

  @Get()
  async listPeoples(): Promise<TPeople[]> {
    return await this.peoplesService.listPeoples();
  }

  @Delete('/:id')
  @ApiParam({ name: 'id', type: 'int' })
  async deletePeople(@Param() params: any): Promise<void> {
    await this.peoplesService.deletePeople(params.id);
  }
}
