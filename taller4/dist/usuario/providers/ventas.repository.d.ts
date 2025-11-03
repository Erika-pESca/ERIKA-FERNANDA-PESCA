import { Repository } from 'typeorm';
import { Ventas } from 'src/ventas/ventas.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { CreateVentaDto } from 'src/ventas/dto/create-venta.dto';
import { UpdateVentaDto } from 'src/ventas/dto/update-venta.dto';
export declare class VentasRepository {
    private ventasRepo;
    private usuarioRepo;
    private facturacionRepo;
    constructor(ventasRepo: Repository<Ventas>, usuarioRepo: Repository<Usuario>, facturacionRepo: Repository<Facturacion>);
    createVenta(data: CreateVentaDto): Promise<Ventas | null>;
    findAll(): Promise<Ventas[]>;
    findOne(id: number): Promise<Ventas | null>;
    updateVenta(id: number, data: UpdateVentaDto): Promise<Ventas | null>;
    deleteVenta(id: number): Promise<import("typeorm").DeleteResult>;
}
