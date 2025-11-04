import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { VentaProductoService } from './venta_producto.service';

/**
 * Controlador encargado de gestionar los productos asociados a una venta.
 * 
 * Permite agregar, listar y eliminar productos dentro de una venta específica.
 */
@Controller('venta-producto')
export class VentaProductoController {
  constructor(private readonly ventaProductoService: VentaProductoService) {}

  /**
   * Agrega un producto a una venta específica.
   * @param body - Contiene el ID de la venta, el ID del producto y la cantidad.
   * @returns Confirmación del producto agregado a la venta.
   */
  @Post()
  async agregarProducto(@Body() body: { idVenta: number; idProducto: number; cantidad: number }) {
    return this.ventaProductoService.agregarProductoAVenta(
      body.idVenta,
      body.idProducto,
      body.cantidad,
    );
  }

  /**
   * Lista los productos asociados a una venta específica.
   * @param idVenta - ID de la venta.
   * @returns Lista de productos relacionados con la venta.
   */
  @Get(':idVenta')
  async listar(@Param('idVenta') idVenta: number) {
    return this.ventaProductoService.listarPorVenta(idVenta);
  }

  /**
   * Elimina un producto de una venta.
   * @param id - ID del registro de venta_producto a eliminar.
   * @returns Confirmación de eliminación.
   */
  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    return this.ventaProductoService.eliminar(id);
  }
}
