import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateTransactionDto } from '../dtos/transaction.dto';
import { TransactionType, BankType } from '../enums/transaction-enum';

@Controller('transactions')
export class TransactionController {
  // Guardamos todas las transacciones realizadas
  private transactions: (CreateTransactionDto & { id: number; date: Date })[] = [];

  // Simulamos UNA sola cuenta bancaria
  private account = {
    id: 1,
    name: 'Cuenta de Ahorros',
    balance: 50000,
  };

  // POST  Crear transacción (Depósito, Retiro o Transferencia)
  @Post()
  createTransaction(@Body() dto: CreateTransactionDto) {
    // valores que queremos extraer del DTO
    const { type, amount, destinationAccountId, bank } = dto;

    let message = '';

    switch (type) {
      // DEPÓSITO
      case TransactionType.DEPOSITO:
        this.account.balance += amount; // sumamos el monto al saldo
        message = `Depósito exitoso en ${this.account.name} con un Monto de: $${amount}  Saldo actual: $${this.account.balance}`;
        break;

      // RETIRO
      case TransactionType.RETIRO:
        if (this.account.balance < amount) // verificamos que el saldo sea suficiente
          return { message: 'Fondos insuficientes para realizar el retiro' };

        this.account.balance -= amount; // restar el monto al saldo
        message = `Retiro exitoso de $${amount}, Saldo actual: $${this.account.balance}`;
        break;

      // TRANSFERENCIA
      case TransactionType.TRANSFERENCIA:
        if (!destinationAccountId) // verificamos que se indique la cuenta destino
          return { message: 'Debe indicar la cuenta destino para transferir' };
        if (!bank)
          return { message: ' Debe indicar el banco destino (Bancolombia, Nequi o Daviplata)' };
        if (this.account.balance < amount)
          return { message: 'Fondos insuficientes para transferir' };

        this.account.balance -= amount;
        message = `Transferencia exitosa de $${amount} desde ${this.account.name} hacia el banco:${bank} cuenta #${destinationAccountId}. Saldo actual: $${this.account.balance}`;
        break;

      default:
        return { message: 'Tipo de transacción inválido' };
    }

    const newTransaction: CreateTransactionDto & { id: number; date: Date } = {
      id: this.transactions.length + 1,
      date: new Date(),
      ...dto,
    };

    this.transactions.push(newTransaction);// agregamos la transacción a la lista
    return { message, data: newTransaction };
  }

  // GET  Listar todas las transacciones
  @Get()
  getAll() {
    return this.transactions;
  }

  // GET  Consultar saldo actual de la cuenta
@Get('saldo')
getBalance() {
  return {
    message: `Saldo actual de ${this.account.name}: $${this.account.balance}`,
    data: this.account,
  };
}

// GET  Buscar transacción por ID
@Get(':id')
getById(@Param('id') id: string) {
  const tx = this.transactions.find((t) => t.id === Number(id));
  if (!tx) return { message: `No existe una transacción con id ${id}` };
  return { message: 'Transacción encontrada', data: tx };
}

}
