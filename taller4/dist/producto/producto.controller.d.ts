import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    findAll(): Promise<import("./producto.entity").Producto[]>;
    findOne(id: number): Promise<import("./producto.entity").Producto>;
    create(data: CreateProductoDto): Promise<import("./producto.entity").Producto>;
    update(id: number, data: UpdateProductoDto): Promise<import("./producto.entity").Producto>;
    remove(id: number): Promise<void>;
}
