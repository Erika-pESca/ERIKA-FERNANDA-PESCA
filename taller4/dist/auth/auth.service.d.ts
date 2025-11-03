import { JwtService } from '@nestjs/jwt';
import { UsuarioService } from 'src/usuario/usuario.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private readonly usuarioService;
    private readonly jwtService;
    constructor(usuarioService: UsuarioService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<any>;
    validateUser(correo: string, contrasena: string): Promise<any>;
    login(loginDto: LoginDto): Promise<{
        access_token: string;
    }>;
}
