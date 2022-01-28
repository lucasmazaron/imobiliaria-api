import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  IsBoolean,
  IsUUID,
} from 'class-validator';

export class updateUserDto {
  @IsUUID()
  @ApiProperty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly fullName: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  readonly password: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly active: boolean;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty()
  readonly admin: boolean;
}
