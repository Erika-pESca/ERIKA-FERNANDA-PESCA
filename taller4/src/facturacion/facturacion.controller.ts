import {
  Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, UsePipes, ValidationPipe,
} from '@nestjs/common';
import { FacturacionService } from './facturacion.service';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';

/**
 * Controlador encargado de gestionar las operaciones relacionadas con la facturación.
 * 
 * Este controlador recibe las peticiones HTTP y las redirige al servicio correspondiente
 * para procesar facturas, tanto su creación como consulta y eliminación.
 */
@Controller('facturacion')
export class FacturacionController {
  constructor(private readonly service: FacturacionService) {}

  /**
   * Crea una nueva factura en el sistema.
   * @param dto - Datos necesarios para crear la factura.
   * @returns La factura creada.
   */
  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateFacturacionDto) {
    return this.service.create(dto);
  }

  /**
   * Obtiene todas las facturas registradas.
   * @returns Un arreglo con todas las facturas almacenadas.
   */
  @Get()
  findAll() {
    return this.service.findAll();
  }

  /**
   * Busca una factura específica por su ID.
   * @param id - Identificador numérico de la factura.
   * @returns La factura correspondiente si existe.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  /**
   * Actualiza los datos de una factura existente.
   * @param id - ID de la factura a actualizar.
   * @param dto - Datos actualizados.
   * @returns La factura actualizada.
   */
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFacturacionDto) {
    return this.service.update(id, dto);
  }

  /**
   * Elimina una factura del sistema.
   * @param id - ID de la factura a eliminar.
   * @returns Confirmación de la eliminación.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
