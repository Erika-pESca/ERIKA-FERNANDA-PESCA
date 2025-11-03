import { Proveedor } from '../proveedor/proveedor.entity';
import { Categoria } from 'src/categoria/categoria.entity';
import { VentaProducto } from 'src/venta_producto/venta_producto.entity';
export declare class Producto {
    id_producto: number;
    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    proveedor: Proveedor;
    categoria: Categoria;
    ventaProductos: VentaProducto[];
}
