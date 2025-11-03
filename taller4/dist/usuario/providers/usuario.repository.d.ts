import { Usuario } from '../usuario.entity';
import { Repository } from 'typeorm';
import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
export declare class UsuarioRepository {
    private readonly repo;
    constructor(repo: Repository<Usuario>);
    createUser(body: CreateUsuarioDto): Promise<Usuario>;
    findAll(): Promise<Usuario[]>;
    findOne(id: number): Promise<Usuario | null>;
    findByEmail(email: string): Promise<Usuario | null>;
    updateUser(id: number, body: UpdateUsuarioDto): Promise<Usuario | null>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
}
