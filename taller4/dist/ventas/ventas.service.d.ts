import { Repository } from 'typeorm';
import { Ventas } from './ventas.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
export declare class VentasService {
    private readonly ventaRepo;
    private readonly usuarioRepo;
    private readonly facturacionRepo;
    constructor(ventaRepo: Repository<Ventas>, usuarioRepo: Repository<Usuario>, facturacionRepo: Repository<Facturacion>);
    createVenta(data: {
        total: number;
        id_usuario: number;
    }): Promise<Ventas | null>;
    updateVenta(id: number, body: UpdateVentaDto): Promise<Ventas[]>;
    getVenta(id: number): Promise<Ventas | null>;
    deleteVenta(id: number): Promise<import("typeorm").DeleteResult>;
}
