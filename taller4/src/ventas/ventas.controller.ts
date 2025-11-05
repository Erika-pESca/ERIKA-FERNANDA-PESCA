// src/ventas/ventas.controller.ts
import { Controller, Post, Get, Delete, Patch, Param, Body, ParseIntPipe } from '@nestjs/common';
import { VentasService } from './ventas.service';
import { Ventas } from './ventas.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { CreateVentaDto } from './dto/create-venta.dto';
import { CreateVentaDoc } from './decorators/documentation/Create';
import { DeleteVentaDoc } from './decorators/documentation/Delete';
import { GetAllVentasDoc } from './decorators/documentation/GetAll';
import { ListVentasDoc } from './decorators/documentation/List';
import { UpdateVentaDoc } from './decorators/documentation/Update';

@Controller('ventas')
export class VentasController {
  constructor(private readonly ventasService: VentasService) {}

@CreateVentaDoc()
  @Post('crear')
  async crear(@Body() datos: CreateVentaDto) {
    return this.ventasService.createVenta(datos);
  }
@ListVentasDoc()
 @Get('listar')
async listar() {
  // Llamamos al método que devuelve todas las ventas
  return this.ventasService.updateVenta(0, {}); // pasar cualquier valor temporal
}
@GetAllVentasDoc()
  @Get(':id')
  async obtener(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.getVenta(id);
  }
@UpdateVentaDoc()
  @Patch(':id')
  async actualizar(@Param('id', ParseIntPipe) id: number, @Body() body: UpdateVentaDto) {
    return this.ventasService.updateVenta(id, body);
  }
@DeleteVentaDoc()
  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    return this.ventasService.deleteVenta(id); 
  }
}
