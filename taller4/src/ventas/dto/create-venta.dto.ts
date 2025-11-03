import { IsNumber, IsOptional } from 'class-validator';

export class CreateVentaDto {
  @IsOptional()
  fecha?: Date;

  @IsNumber()
  total: number;

  @IsNumber()
  id_usuario: number;
}
