import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePropertyRepository } from 'src/infra/repositories/createProperty.repository';
import { PropertyController } from 'src/presentation/controllers/property.controller';
import { ManyToOne } from 'typeorm';

@Module({
  controllers: [PropertyController],
  providers:[PrismaService, CreatePropertyRepository],
  exports: [],
})
export class PropertyModule {}