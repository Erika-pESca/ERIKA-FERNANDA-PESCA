import { VentaProductoService } from './venta_producto.service';
export declare class VentaProductoController {
    private readonly ventaProductoService;
    constructor(ventaProductoService: VentaProductoService);
    agregarProducto(body: {
        idVenta: number;
        idProducto: number;
        cantidad: number;
    }): Promise<import("./venta_producto.entity").VentaProducto>;
    listar(idVenta: number): Promise<import("./venta_producto.entity").VentaProducto[]>;
    eliminar(id: number): Promise<import("typeorm").DeleteResult>;
}
