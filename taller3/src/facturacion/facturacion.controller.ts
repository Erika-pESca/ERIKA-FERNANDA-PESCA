import {
  Controller, Get, Post, Body, Param, Patch, Delete,
  ParseIntPipe, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { FacturacionService } from './facturacion.service';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';

/**
 * Controlador de Facturación
 * Recibe las peticiones HTTP y las envía al servicio correspondiente.
 */
// El decorador @Controller define la ruta base para este controlador
// En este caso, todas las rutas empezarán con /facturacion
@Controller('facturacion')
export class FacturacionController {

// Inyectamos el servicio de facturación para usar su lógica
  constructor(private readonly service: FacturacionService) {}

  // Crear una nueva factura
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateFacturacionDto) {
    return this.service.create(dto);
  }

  // Obtener todas las facturas
  @Get()
  findAll() {
    return this.service.findAll();
  }

  // Obtener una factura específica por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  // Actualizar una factura existente
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFacturacionDto) {
    return this.service.update(id, dto);
  }

  // Eliminar una factura
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
