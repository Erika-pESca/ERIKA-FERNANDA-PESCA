import {
  Controller, Get, Post, Body, Param, Patch, Delete, ParseIntPipe, UsePipes, ValidationPipe, HttpStatus
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { FacturacionService } from './facturacion.service';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';
import { ApiDefaultResponses } from '../common/decorators/ApiDefaultResponses';
import { DefaultResponse, DefaultSuccessResponse } from '../common/interfaces/IResponse';

/**
 * Controlador encargado de gestionar las operaciones relacionadas con la facturación.
 * 
 * Este controlador recibe las peticiones HTTP y las redirige al servicio correspondiente
 * para procesar facturas, tanto su creación como consulta y eliminación.
 */
@ApiTags('Facturación')
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
  @ApiOperation({ summary: 'Crear nueva factura' })
  @ApiBody({ type: CreateFacturacionDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Factura creada correctamente',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Facturación')
  create(@Body() dto: CreateFacturacionDto) {
    return this.service.create(dto);
  }

  /**
   * Obtiene todas las facturas registradas.
   * @returns Un arreglo con todas las facturas almacenadas.
   */
  @Get()
  @ApiOperation({ summary: 'Listar todas las facturas' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listado de facturas',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Facturación')
  findAll() {
    return this.service.findAll();
  }

  /**
   * Busca una factura específica por su ID.
   * @param id - Identificador numérico de la factura.
   * @returns La factura correspondiente si existe.
   */
  @Get(':id')
  @ApiOperation({ summary: 'Obtener factura por ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Factura encontrada',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Facturación')
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
  @ApiOperation({ summary: 'Actualizar factura' })
  @ApiBody({ type: UpdateFacturacionDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Factura actualizada correctamente',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Facturación')
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateFacturacionDto) {
    return this.service.update(id, dto);
  }

  /**
   * Elimina una factura del sistema.
   * @param id - ID de la factura a eliminar.
   * @returns Confirmación de la eliminación.
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar factura' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Factura eliminada correctamente',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Facturación')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
