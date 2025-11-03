import { MetodoPago } from '../enums/metodo-pago.enum';
export declare class CreateFacturacionDto {
    numero_factura: string;
    tipo_factura: string;
    metodo_pago: MetodoPago;
    total: number;
    id_venta?: number;
    id_usuario?: number;
}
