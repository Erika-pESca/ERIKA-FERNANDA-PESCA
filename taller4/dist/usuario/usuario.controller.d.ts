import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuarioController {
    private readonly userService;
    constructor(userService: UsuarioService);
    createUser(body: CreateUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    listUsers(): Promise<import("./usuario.entity").Usuario[]>;
    getUser(id: number): Promise<import("./usuario.entity").Usuario>;
    updateUser(id: number, body: UpdateUsuarioDto): Promise<import("./usuario.entity").Usuario>;
    deleteUser(id: number): Promise<{
        message: string;
    }>;
}
