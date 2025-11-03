import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { VentaProducto } from 'src/venta_producto/venta_producto.entity';
export declare class Ventas {
    id_venta: number;
    fecha: Date;
    total: number;
    usuario: Usuario;
    facturacion: Facturacion;
    ventaProductos: VentaProducto[];
}
