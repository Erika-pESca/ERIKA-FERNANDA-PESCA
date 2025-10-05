import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { CreateAccountDto } from '../dtos/account.dto';

@Controller('accounts')
export class AccountsController {
  // guardamos temporal para guardar las cuentas
  private accounts: (CreateAccountDto & { id: number })[] = [];

  // POST Crear una nueva cuenta
  @Post()
  createAccount(@Body() dto: CreateAccountDto) {
    // va incrementando el a id de a uno
    const newAccount = { id: this.accounts.length + 1, ...dto };
    // agrega un nuevo cliente a la lista
    this.accounts.push(newAccount);
    return {
      message: 'Cuenta creada exitosamente',
      data: newAccount,
    };
  }

  // GET Listar todas las cuentas
  @Get()
  getlistaAccounts() {
    return this.accounts;
  }

  //  GET  Obtener cuenta por ID
  @Get(':id')
  getAccountById(@Param('id') id: string) {
    const account = this.accounts.find((a) => a.id === Number(id));
    if (!account) {
      return { message: `No existe una cuenta con id: ${id}` }; // devuelve undefined
    }
    return {
      message: 'Cuenta encontrada',
      data: account,
    };
  }

  // DELETE  Eliminar cuenta por ID
  @Delete(':id')
  deleteAccount(@Param('id') id: string) {
    const index = this.accounts.findIndex((a) => a.id === Number(id));
    if (index === -1) {
      return { message: `No existe una cuenta con id: ${id}` };
    }

    const deleted = this.accounts.splice(index, 1);
    return {
      message: 'Cuenta eliminada correctamente',
      data: deleted[0],
    };
  }
}
