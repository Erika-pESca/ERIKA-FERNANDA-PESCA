import { Controller, Post, Get, Delete, Param, Body } from '@nestjs/common';
import { VentaProductoService } from './venta_producto.service';

@Controller('venta-producto')
export class VentaProductoController {
  constructor(private readonly ventaProductoService: VentaProductoService) {}

  //  Agregar producto a una venta
  @Post()
  async agregarProducto(
    @Body() body: { idVenta: number; idProducto: number; cantidad: number },
  ) {
    return this.ventaProductoService.agregarProductoAVenta(
      body.idVenta,
      body.idProducto,
      body.cantidad,
    );
  }

  //  Listar productos de una venta
  @Get(':idVenta')
  async listar(@Param('idVenta') idVenta: number) {
    return this.ventaProductoService.listarPorVenta(idVenta);
  }

  //Eliminar producto de una venta
  @Delete(':id')
  async eliminar(@Param('id') id: number) {
    return this.ventaProductoService.eliminar(id);
  }
}
