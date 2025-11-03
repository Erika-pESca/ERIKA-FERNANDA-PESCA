import { UsuarioRepository } from './providers/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioService {
    private readonly userRepo;
    constructor(userRepo: UsuarioRepository);
    createUser(body: CreateUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    listUsers(): Promise<import("./usuario.entity").Usuario[]>;
    getUser(id: number): Promise<import("./usuario.entity").Usuario>;
    updateUser(id: number, body: UpdateUsuarioDto): Promise<import("./usuario.entity").Usuario | null>;
    deleteUser(id: number): Promise<import("typeorm").DeleteResult>;
    findByEmail(email: string): Promise<import("./usuario.entity").Usuario | null>;
}
