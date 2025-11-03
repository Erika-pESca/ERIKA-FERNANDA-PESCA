import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriaService {
    private readonly repo;
    constructor(repo: Repository<Categoria>);
    create(dto: CreateCategoriaDto): Promise<Categoria>;
    findAll(): Promise<Categoria[]>;
    findOne(id: number): Promise<Categoria>;
    update(id: number, dto: UpdateCategoriaDto): Promise<Categoria>;
    remove(id: number): Promise<Categoria>;
}
