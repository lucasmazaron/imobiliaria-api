import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsUUID,
  IsDate,
} from 'class-validator';

export class updatePeopleDto {
  @IsUUID()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fullName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fantasyName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly peopleType: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly contact_email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly cpf_cnpj: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly general_records: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly estate_subscription: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly buyer: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly salesman: boolean;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly birth_date: Date;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contact_fone: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contact_cell: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly zip_code: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address_number: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address_district: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address_city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly address_uf: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly contact_name: string;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly created_at: Date;

  @IsDate()
  @IsNotEmpty()
  @ApiProperty()
  readonly updated_at: Date;
}
