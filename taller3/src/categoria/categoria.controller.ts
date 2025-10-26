// Importamos los decoradores y utilidades necesarios de NestJS
import { 
  Controller, Get, Post, Body, Param, Patch, Delete, 
  ParseIntPipe, UsePipes, ValidationPipe 
} from '@nestjs/common';

// Importamos el servicio y los DTOs que usaremos
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

// El decorador @Controller define la ruta base para este controlador
// En este caso, todas las rutas empezarán con /categorias
@Controller('categorias')
export class CategoriaController {

  // Inyectamos el servicio de Categoría para usar su lógica
  constructor(private readonly service: CategoriaService) {}

  // Crear una nueva categoría (POST /categorias)
  @Post()
  // Usa un pipe de validación para comprobar los datos del DTO
  @UsePipes(new ValidationPipe({ whitelist: true }))
  create(@Body() dto: CreateCategoriaDto) {
    // Envía los datos al servicio para crear la categoría
    return this.service.create(dto);
  }

  // Obtener todas las categorías (GET /categorias)
  @Get()
  findAll() {
    // Llama al servicio para listar todas las categorías
    return this.service.findAll();
  }

  // Obtener una categoría por su ID (GET /categorias/:id)
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    // Usa ParseIntPipe para asegurar que el id sea un número
    return this.service.findOne(id);
  }

  // Actualizar una categoría existente (PATCH /categorias/:id)
  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  update(
    @Param('id', ParseIntPipe) id: number, // obtiene y valida el ID
    @Body() dto: UpdateCategoriaDto,        // recibe los nuevos datos
  ) {
    // Llama al servicio para actualizar la categoría
    return this.service.update(id, dto);
  }

  // Eliminar una categoría (DELETE /categorias/:id)
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    // Llama al servicio para eliminar la categoría por ID
    return this.service.remove(id);
  }
}
