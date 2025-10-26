// Importamos decoradores del paquete class-validator
// Estos se usan para validar los datos que se reciben en las peticiones (por ejemplo, desde el frontend)
import { IsString, IsOptional, Length } from 'class-validator';

// Definimos un DTO (Data Transfer Object) para crear una categoría
// Sirve para controlar y validar qué datos se pueden enviar al backend
export class CreateCategoriaDto {

  // Campo obligatorio: nombre de la categoría
  // Debe ser una cadena (texto) con mínimo 2 y máximo 100 caracteres
  @IsString()
  @Length(2, 100)
  nombre!: string;

  // Campo opcional: descripción de la categoría
  // Si se envía, debe ser texto (string)
  @IsOptional()
  @IsString()
  descripcion?: string;
}
