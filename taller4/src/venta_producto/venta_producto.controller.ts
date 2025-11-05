import { 
    Controller, Post, Get, Delete, Param, Body, HttpStatus, 
    UsePipes, ValidationPipe, ParseIntPipe 
} from '@nestjs/common';
import { ApiTags, ApiParam } from '@nestjs/swagger';
import { ApiDefaultResponses } from '../common/decorators/ApiDefaultResponses'; 
import { DefaultCreateDoc } from '../common/decorators/DefaultCreateDoc';
import { DefaultFindAllDoc } from '../common/decorators/DefaultFindAllDoc';
import { DefaultDeleteDoc } from '../common/decorators/DefaultDeleteDoc';
import { VentaProductoService } from './venta_producto.service';
import { VentaProducto } from './venta_producto.entity';
import { VentaProductoResponseDto } from './dto/venta-producto-response.dto';
import { VentaProductoSingularExample, VentaProductoArrayExample } from './docs/VentaProductoExample';
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
  @Post()
   @UsePipes(new ValidationPipe({ transform: true })) 
   @DefaultCreateDoc(
     'VentaProducto', 
     VentaProductoResponseDto,
     VentaProducto, 
     VentaProductoSingularExample 
   )
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
  @Get(':idVenta')
   // Usamos el decorador generalizado y añadimos el parámetro específico
   @DefaultFindAllDoc(
     'VentaProducto', 
     VentaProducto, 
     VentaProductoArrayExample
   )
   @ApiParam({
     name: 'idVenta',
     description: 'ID numérico de la venta cuyos productos se desean listar',
     type: Number,
     example: 1
   })
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
  @Delete(':id')
  @DefaultDeleteDoc('VentaProducto')
  @ApiParam({
     name: 'id',
    description: 'ID numérico del registro VentaProducto a eliminar',
    type: Number,
    example: 1
  })
  async eliminar(@Param('id') id: number) {
    await this.ventaProductoService.eliminar(id);
    return {
      status: HttpStatus.OK,
      data: null,
      message: 'Producto eliminado correctamente de la venta',
    };
  }
}
