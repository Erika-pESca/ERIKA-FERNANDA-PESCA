import { Repository } from 'typeorm';
import { Facturacion } from './facturacion.entity';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';
export declare class FacturacionService {
    private readonly repo;
    constructor(repo: Repository<Facturacion>);
    create(dto: CreateFacturacionDto): Promise<Facturacion>;
    findAll(): Promise<Facturacion[]>;
    findOne(id: number): Promise<Facturacion>;
    update(id: number, dto: UpdateFacturacionDto): Promise<Facturacion>;
    remove(id: number): Promise<Facturacion>;
}
