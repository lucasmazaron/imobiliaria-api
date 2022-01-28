import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { ApiBody } from "@nestjs/swagger";
import { CreatePropertyRepository } from "src/infra/repositories/createProperty.repository";
import { BASE_URL } from "src/utils/consts";
import { TProperty } from "src/utils/types/property.type";


// @UseGuards(JwtAuthGuard)
@Controller(`${BASE_URL}/property`)
export class PropertyController {
  constructor(
    private readonly createPropertyRepository: CreatePropertyRepository
  ) {}

  @Post()
  @UsePipes(ValidationPipe)
 // @ApiBody({ type: [createpropertyDto] })
  async addProperty(@Body() propertyDto: TProperty) {
    return await this.createPropertyRepository.create(propertyDto);
  }


}
