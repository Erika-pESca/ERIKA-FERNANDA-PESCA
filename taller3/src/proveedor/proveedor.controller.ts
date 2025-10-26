import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';

@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proveedorService.findOne(id);
  }

  @Post()
  create(@Body() proveedor: Proveedor) {
    return this.proveedorService.create(proveedor);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() proveedor: Proveedor) {
    return this.proveedorService.update(id, proveedor);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proveedorService.remove(id);
  }
}
