import { Ventas } from 'src/ventas/ventas.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
export declare class Usuario {
    id_usuario: number;
    nombre: string;
    correo: string;
    contrasena: string;
    rol: string;
    ventas?: Ventas[];
    facturas?: Facturacion[];
    updatedAt: Date;
    deletedAt: Date;
}
