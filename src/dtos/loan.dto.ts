import { IsString, IsNumber, IsEnum, Min, IsOptional } from 'class-validator';
import { LoanType, LoanStatus } from '../enums/loan-enum';

export class CreateLoanDto {
  @IsString()
  name: string; // Nombre del solicitante

  @IsNumber()
  @Min(1)
  amount: number; // Monto solicitado

  @IsEnum(LoanType)
  type: LoanType; // Tipo de préstamo

  @IsNumber()
  @Min(1)
  termMonths: number; // Plazo en meses

  @IsOptional()
  @IsEnum(LoanStatus)
  status?: LoanStatus; // Estado inicial (opcional)
}
