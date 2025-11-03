import { ProveedorService } from './proveedor.service';
import { Proveedor } from './proveedor.entity';
export declare class ProveedorController {
    private readonly proveedorService;
    constructor(proveedorService: ProveedorService);
    findAll(): Promise<any[]>;
    findOne(id: number): Promise<any>;
    create(proveedor: Proveedor): Promise<Proveedor>;
    update(id: number, proveedor: Proveedor): Promise<Proveedor | null>;
    remove(id: number): Promise<void>;
}
