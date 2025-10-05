import { IsString, IsEmail, IsInt, Min, Max, IsEnum } from 'class-validator';
import { ClientType } from '../enums/client-enum';

export class CreateClientDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  @Min(1, { message: 'La edad mínima es 1 año' })
  @Max(120, { message: 'La edad máxima es 120 años' })
  age: number;

  @IsEnum(ClientType, { message: 'El tipo debe ser regular, premium o vip' })
  type: ClientType;

  @IsString()
  telefono: string; 
}
