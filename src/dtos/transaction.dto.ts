import { IsEnum, IsInt, IsNumber, IsOptional, IsPositive } from 'class-validator';
import { TransactionType, BankType } from '../enums/transaction-enum';

export class CreateTransactionDto {
  @IsEnum(TransactionType, { message: 'El tipo de transacción debe ser depósito, retiro o transferencia' })
  type: TransactionType;

  @IsPositive({ message: 'El monto debe ser un número positivo' })
  amount: number;

  @IsInt({ message: 'El número de cuenta debe ser un entero' })
  sourceAccountId: number;// numero de cuenta origen

  // Solo se usa en transferencias
  @IsOptional()
  @IsEnum(BankType, { message: 'El banco debe ser Bancolombia, Nequi o Daviplata' })
  bank?: BankType;

  @IsOptional()
  @IsInt({ message: 'El número de cuenta destino debe ser un entero' })
  destinationAccountId?: number;// numero de cuenta destino
}
