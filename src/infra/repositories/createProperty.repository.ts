import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { TProperty } from 'src/utils/types/property.type';


@Injectable()
export class CreatePropertyRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(property: TProperty): Promise<TProperty> {
    return await this.prismaService.property.create({
      data: {
        ...property,
      },
    });
  }
}
