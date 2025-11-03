import { IsEmail, IsEnum, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Roles } from '../enums/roles.enum';
// definimos la estructura de datos de un usuario
export class CreateUsuarioDto {
  @IsString() // cadena de texto
  @MinLength(3) // longitud mínima 3
  @MaxLength(100) // longitud máxima 100
  @IsNotEmpty() // no puede estar vacío
  nombre: string; // nombre

  @IsEmail() //formato para el correo
  @MinLength(5) // longitud mínima 5
  @MaxLength(100) // longitud máxima 100
  @IsNotEmpty() // no puede estar vacío
  correo: string; // correo

  @IsString()
  @MinLength(8)
  @MaxLength(100)
  @IsNotEmpty()
  contrasena: string;

  @IsEnum(Roles) // validar que sea uno de los roles qu estan definidos en el enum
  @IsNotEmpty()
  rol: Roles;
}
