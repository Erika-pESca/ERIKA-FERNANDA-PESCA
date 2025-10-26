// src/ventas/ventas.controller.ts
import { Controller, Post, Get, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Ventas } from './ventas.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { CreateVentaDto } from './dto/create-venta.dto';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

  @Post('crear')
  async crear(@Body() datos: CreateVentaDto) {
    return this.ventasService.createVenta(datos);
  }

 @Get('listar')
async listar() {
  // Llamamos al método que devuelve todas las ventas
  return this.ventasService.updateVenta(0, {}); // pasar cualquier valor temporal
}

  @Get(':id')
  async obtener(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.getVenta(id);
  }

  @Patch(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateVentaDto) {
    return this.ventasService.updateVenta(id, body);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.deleteVenta(id); // ✅ corregido
  }
}
