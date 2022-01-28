import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createPeopleDto } from '../../utils/dtos/createPeople.dto';
import { updatePeopleDto } from '../../utils/dtos/updatePeople.dto';
import { TPeople } from '../../utils/types';

@Injectable()
export class PeoplesService {
  private readonly logger = new Logger(createPeopleDto.name);

  constructor(private readonly prismaService: PrismaService) {}

  async addPeople(createPeopleDto: createPeopleDto): Promise<void> {
    await this.createPeople(createPeopleDto);
  }

  async updatePeople(updatePeopleDto: updatePeopleDto): Promise<void> {
    await this.updatePeopleInDB(updatePeopleDto);
  }

  async listPeopleById(id: string): Promise<TPeople> {
    const people = await this.prismaService.people.findFirst({
      where: {
        id: id,
      },
    });
    if (!people) {
      throw new NotFoundException(`Pessoa não id ${id} não encontrado!`);
    }
    return people;
  }

  async listPeoples(): Promise<TPeople[]> {
    return await this.prismaService.people.findMany();
  }

  async getOnePeople(filters: any): Promise<TPeople> {
    return await this.prismaService.people.findFirst({
      where: { ...filters },
    });
  }

  async deletePeople(id: string): Promise<void> {
    await this.prismaService.people.delete({
      where: { id },
    });
  }
  private async createPeople(peopleDto: createPeopleDto) {
    this.logger.log(`createPeopleDto: ${JSON.stringify(peopleDto)}`);
    const people = { ...peopleDto };

    try {
      await this.prismaService.people.create({
        data: {
          ...people,
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  private async updatePeopleInDB(peopleDto: updatePeopleDto) {
    this.logger.log(`updatePeopleDto: ${JSON.stringify(peopleDto)}`);
    const people = { ...peopleDto };
    try {
      await this.prismaService.people.update({
        where: {
          id: people.id,
        },
        data: {
          ...people,
          updated_at: new Date().toISOString(),
        },
      });
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
