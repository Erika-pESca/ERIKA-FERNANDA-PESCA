import { Controller, Post, Get, Delete, Param, Body, HttpStatus } from '@nestjs/common';
import { VentaProductoService } from './venta_producto.service';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { ApiDefaultResponses } from '../common/decorators/ApiDefaultResponses';
import { VentaProducto } from './venta_producto.entity';
import * as IResponse from '../common/interfaces/IResponse';

/**
 * Controlador encargado de gestionar los productos asociados a una venta.
 * Permite agregar, listar y eliminar productos dentro de una venta específica.
 */
@ApiTags('Venta Producto')
@Controller('venta-producto')
export class VentaProductoController {
  constructor(private readonly ventaProductoService: VentaProductoService) {}

  /**
   * Agrega un producto a una venta específica.
   * @param body - Contiene el ID de la venta, el ID del producto y la cantidad.
   * @returns Confirmación del producto agregado a la venta.
   */
  @ApiOperation({ summary: 'Agregar producto a una venta' })
  @ApiResponse({
    status: 201,
    description: 'Producto agregado correctamente a la venta',
    type: IResponse.DefaultSuccessResponse,
    schema: {
      example: {
        status: HttpStatus.CREATED,
        data: {
          id_venta_producto: 1,
          cantidad: 3,
          precio_unitario: 10000,
          subtotal: 30000,
          venta: { id_venta: 1 },
          producto: { id_producto: 5, nombre: 'Producto A' },
        },
        message: 'Producto agregado correctamente a la venta',
      },
    },
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        idVenta: { type: 'number', example: 1 },
        idProducto: { type: 'number', example: 5 },
        cantidad: { type: 'number', example: 3 },
      },
      required: ['idVenta', 'idProducto', 'cantidad'],
    },
  })
  @ApiDefaultResponses('VentaProducto')
  @Post()
  async agregarProducto(@Body() body: { idVenta: number; idProducto: number; cantidad: number }) {
    const productoAgregado = await this.ventaProductoService.agregarProductoAVenta(
      body.idVenta,
      body.idProducto,
      body.cantidad,
    );

    return {
      status: HttpStatus.CREATED,
      data: productoAgregado,
      message: 'Producto agregado correctamente a la venta',
    };
  }

  /**
   * Lista los productos asociados a una venta específica.
   * @param idVenta - ID de la venta.
   * @returns Lista de productos relacionados con la venta.
   */
  @ApiOperation({ summary: 'Listar productos de una venta específica' })
  @ApiResponse({
    status: 200,
    description: 'Lista de productos asociados a la venta',
    type: IResponse.DefaultSuccessResponse,
    schema: {
      example: {
        status: HttpStatus.OK,
        data: [
          {
            id_venta_producto: 1,
            cantidad: 2,
            precio_unitario: 10000,
            subtotal: 20000,
            venta: { id_venta: 1 },
            producto: { id_producto: 5, nombre: 'Producto A' },
          },
        ],
        message: 'Productos listados correctamente',
      },
    },
  })
  @ApiDefaultResponses('VentaProducto')
  @Get(':idVenta')
  async listar(@Param('idVenta') idVenta: number) {
    const data = await this.ventaProductoService.listarPorVenta(idVenta);
    return {
      status: HttpStatus.OK,
      data,
      message: 'Productos listados correctamente',
    };
  }

  /**
   * Elimina un producto de una venta.
   * @param id - ID del registro de venta_producto a eliminar.
   * @returns Confirmación de eliminación.
   */
  @ApiOperation({ summary: 'Eliminar producto de una venta' })
  @ApiResponse({
    status: 200,
    description: 'Producto eliminado correctamente de la venta',
    type: IResponse.DefaultSuccessResponse,
    schema: {
      example: {
        status: HttpStatus.OK,
        data: null,
        message: 'Producto eliminado correctamente de la venta',
      },
    },
  })
  @ApiDefaultResponses('VentaProducto')
  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    await this.ventaProductoService.eliminar(id);
    return {
      status: HttpStatus.OK,
      data: null,
      message: 'Producto eliminado correctamente de la venta',
    };
  }
}
