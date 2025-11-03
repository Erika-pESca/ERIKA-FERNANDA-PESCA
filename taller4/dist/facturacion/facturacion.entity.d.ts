import { Usuario } from 'src/usuario/usuario.entity';
import { Ventas } from 'src/ventas/ventas.entity';
export declare class Facturacion {
    id_facturacion: number;
    fecha_emision: Date;
    total: number;
    venta: Ventas;
    usuario: Usuario;
}
