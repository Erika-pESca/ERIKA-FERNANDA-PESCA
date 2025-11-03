import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';
export declare class ProveedorService {
    private readonly proveedorRepository;
    constructor(proveedorRepository: Repository<Proveedor>);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(proveedor: Proveedor): Promise<Proveedor>;
    update(id: number, proveedor: Proveedor): Promise<Proveedor | null>;
    remove(id: number): Promise<void>;
}
