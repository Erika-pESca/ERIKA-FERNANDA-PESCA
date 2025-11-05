import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { DefaultErrorsDoc} from '../common/decorators/DefaultErrorsDoc';

/**
 * Controlador encargado de gestionar las operaciones relacionadas con los proveedores.
 * 
 * Este controlador maneja las solicitudes HTTP relacionadas con la creación,
 * consulta, actualización y eliminación de proveedores.
 * 
 * Se conecta con el servicio `ProveedorService` para ejecutar la lógica de negocio.
 */
@ApiTags('Proveedores')
@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  /**
   * Obtiene la lista completa de proveedores registrados junto con sus productos asociados.
   * @returns Una lista con todos los proveedores y sus productos.
   */
  @ApiOperation({ summary: 'Obtener todos los proveedores' })
  @ApiResponse({ status: 200, description: 'Lista de proveedores', type: [Proveedor] })
  @DefaultErrorsDoc('Proveedor')
  @Get()
  findAll() {
    return this.proveedorService.findAll();
  }

  /**
   * Busca un proveedor específico por su identificador único.
   * @param id - Identificador numérico del proveedor a buscar.
   * @returns El proveedor correspondiente o `null` si no existe.
   */
  @ApiOperation({ summary: 'Buscar proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor encontrado', type: Proveedor })
  @DefaultErrorsDoc('Proveedor')
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.proveedorService.findOne(id);
  }

  /**
   * Crea un nuevo registro de proveedor.
   * @param proveedor - Datos del proveedor que se desea registrar.
   * @returns El proveedor creado con su información almacenada en la base de datos.
   */
  @ApiOperation({ summary: 'Crear un nuevo proveedor' })
  @ApiResponse({ status: 201, description: 'Proveedor creado exitosamente', type: Proveedor })
  @DefaultErrorsDoc('Proveedor')
  @Post()
  create(@Body() proveedor: Proveedor) {
    return this.proveedorService.create(proveedor);
  }

  /**
   * Actualiza la información de un proveedor existente.
   * @param id - Identificador del proveedor a actualizar.
   * @param proveedor - Nuevos datos del proveedor.
   * @returns El proveedor actualizado o `null` si no existe.
   */
  @ApiOperation({ summary: 'Actualizar proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor actualizado correctamente', type: Proveedor })
  @DefaultErrorsDoc('Proveedor')
  @Put(':id')
  update(@Param('id') id: number, @Body() proveedor: Proveedor) {
    return this.proveedorService.update(id, proveedor);
  }

  /**
   * Elimina un proveedor existente por su ID.
   * @param id - Identificador único del proveedor a eliminar.
   * @returns Un mensaje de confirmación o error si no existe.
   */
  @ApiOperation({ summary: 'Eliminar proveedor por ID' })
  @ApiResponse({ status: 200, description: 'Proveedor eliminado correctamente' })
  @DefaultErrorsDoc('Proveedor')
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.proveedorService.remove(id);
  }
}
