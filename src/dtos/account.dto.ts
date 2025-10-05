import { IsInt, IsEnum, Min, IsPositive, IsString } from 'class-validator';
import { AccountType } from '../enums/account-enum';

export class CreateAccountDto {
  @IsString()
  name: string;

  @IsInt()
  clientId: number;

  @IsEnum(AccountType, { message: 'El tipo debe ser ahorros o corriente' })
  type: AccountType;

  @IsPositive({ message: 'El saldo debe ser mayor que 0' })
  @Min(0)
  balance: number;
}
