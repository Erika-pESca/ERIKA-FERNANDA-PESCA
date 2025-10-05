import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { CreateLoanDto } from '../dtos/loan.dto';
import { LoanStatus } from '../enums/loan-enum';

@Controller('loans')
export class LoanController {
  // Guardamos préstamos en memoria
  private loans: (CreateLoanDto & { id: number; date: Date })[] = [];

  // Crear un préstamo
  @Post()
  createLoan(@Body() dto: CreateLoanDto) {
    const newLoan = {
      id: this.loans.length + 1,
      date: new Date(),
      status: dto.status || LoanStatus.PENDIENTE,
      ...dto,
    };

    this.loans.push(newLoan);

    return {
      message: `Préstamo ${newLoan.type} creado exitosamente`,
      data: newLoan,
    };
  }

  // Listar todos los préstamos
  @Get()
  getAll() {
    return this.loans;
  }

  // Consultar préstamo por ID
  @Get(':id')
  getById(@Param('id') id: string) {
    const loan = this.loans.find((l) => l.id === Number(id));
    if (!loan) return { message: `No existe préstamo con id ${id}` };
    return { message: 'Préstamo encontrado', data: loan };
  }
}
