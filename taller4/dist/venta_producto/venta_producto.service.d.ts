import { Repository } from 'typeorm';
import { VentaProducto } from './venta_producto.entity';
import { Ventas } from 'src/ventas/ventas.entity';
import { Producto } from 'src/producto/producto.entity';
export declare class VentaProductoService {
    private readonly ventaProductoRepo;
    private readonly ventaRepo;
    private readonly productoRepo;
    constructor(ventaProductoRepo: Repository<VentaProducto>, ventaRepo: Repository<Ventas>, productoRepo: Repository<Producto>);
    agregarProductoAVenta(idVenta: number, idProducto: number, cantidad: number): Promise<VentaProducto>;
    listarPorVenta(idVenta: number): Promise<VentaProducto[]>;
    eliminar(id: number): Promise<import("typeorm").DeleteResult>;
}
