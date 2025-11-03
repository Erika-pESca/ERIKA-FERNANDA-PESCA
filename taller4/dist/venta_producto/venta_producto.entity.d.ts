import { Ventas } from 'src/ventas/ventas.entity';
import { Producto } from 'src/producto/producto.entity';
export declare class VentaProducto {
    id_venta_producto: number;
    cantidad: number;
    precio_unitario: number;
    subtotal: number;
    venta: Ventas;
    producto: Producto;
}
