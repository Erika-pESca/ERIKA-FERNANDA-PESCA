import { Module } from '@nestjs/common';
import { VentaProductoController } from './venta_producto.controller';
import { VentaProductoService } from './venta_producto.service';

@Module({
  controllers: [VentaProductoController],
  providers: [VentaProductoService]
})
export class VentaProductoModule {}
