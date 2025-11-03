import { VentasService } from './ventas.service';
import { Ventas } from './ventas.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { CreateVentaDto } from './dto/create-venta.dto';
export declare class VentasController {
    private readonly ventasService;
    constructor(ventasService: VentasService);
    crear(datos: CreateVentaDto): Promise<Ventas | null>;
    listar(): Promise<Ventas[]>;
    obtener(id: number): Promise<Ventas | null>;
    actualizar(id: number, body: UpdateVentaDto): Promise<Ventas[]>;
    eliminar(id: number): Promise<import("typeorm").DeleteResult>;
}
