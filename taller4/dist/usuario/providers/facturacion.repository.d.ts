import { Repository } from 'typeorm';
import { Facturacion } from 'src/facturacion/facturacion.entity';
export declare class FacturacionRepository {
    private readonly facturacionRepo;
    constructor(facturacionRepo: Repository<Facturacion>);
    findByVentaId(id_venta: number): Promise<Facturacion | null>;
    createFacturacion(data: Partial<Facturacion>): Promise<Facturacion>;
    listarFacturas(): Promise<Facturacion[]>;
    obtenerFactura(id: number): Promise<Facturacion | null>;
    eliminarFactura(id: number): Promise<import("typeorm").DeleteResult>;
    findOne(options: any): Promise<Facturacion | null>;
}
