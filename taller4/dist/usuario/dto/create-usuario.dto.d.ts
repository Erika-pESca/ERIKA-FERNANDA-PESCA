import { Roles } from '../enums/roles.enum';
export declare class CreateUsuarioDto {
    nombre: string;
    correo: string;
    contrasena: string;
    rol: Roles;
}
