import { IsEnum, IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { MetodoPago } from '../enums/metodo-pago.enum';

export class CreateFacturacionDto {
  @IsString()
  @Length(2, 50)
  numero_factura!: string;

  @IsString()
  @Length(2, 30)
  tipo_factura!: string;

  @IsEnum(MetodoPago, { message: 'El método de pago debe ser efectivo, tarjeta o transferencia' })
  metodo_pago!: MetodoPago;

  @IsNumber()
  total!: number;

  @IsOptional()
  @IsNumber()
  id_venta?: number;

  @IsOptional()
  @IsNumber()
  id_usuario?: number;
}
