import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriaController {
    private readonly service;
    constructor(service: CategoriaService);
    create(dto: CreateCategoriaDto): Promise<import("./categoria.entity").Categoria>;
    findAll(): Promise<import("./categoria.entity").Categoria[]>;
    findOne(id: number): Promise<import("./categoria.entity").Categoria>;
    update(id: number, dto: UpdateCategoriaDto): Promise<import("./categoria.entity").Categoria>;
    remove(id: number): Promise<import("./categoria.entity").Categoria>;
}
