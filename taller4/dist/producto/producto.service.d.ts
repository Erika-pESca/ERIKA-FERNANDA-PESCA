import { Repository } from 'typeorm';
import { Producto } from './producto.entity';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Proveedor } from '../proveedor/proveedor.entity';
import { Categoria } from '../categoria/categoria.entity';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoService {
    private readonly productoRepository;
    private readonly proveedorRepository;
    private readonly categoriaRepository;
    constructor(productoRepository: Repository<Producto>, proveedorRepository: Repository<Proveedor>, categoriaRepository: Repository<Categoria>);
    findAll(): Promise<Producto[]>;
    findOne(id: number): Promise<Producto>;
    create(dto: CreateProductoDto): Promise<Producto>;
    update(id: number, dto: UpdateProductoDto): Promise<Producto>;
    remove(id: number): Promise<void>;
}
