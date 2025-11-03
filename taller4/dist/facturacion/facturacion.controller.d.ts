import { FacturacionService } from './facturacion.service';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';
export declare class FacturacionController {
    private readonly service;
    constructor(service: FacturacionService);
    create(dto: CreateFacturacionDto): Promise<import("./facturacion.entity").Facturacion>;
    findAll(): Promise<import("./facturacion.entity").Facturacion[]>;
    findOne(id: number): Promise<import("./facturacion.entity").Facturacion>;
    update(id: number, dto: UpdateFacturacionDto): Promise<import("./facturacion.entity").Facturacion>;
    remove(id: number): Promise<import("./facturacion.entity").Facturacion>;
}
