import { Producto } from '../producto/producto.entity';
export declare class Categoria {
    id_categoria: number;
    nombre: string;
    descripcion?: string;
    productos: Producto[];
}
