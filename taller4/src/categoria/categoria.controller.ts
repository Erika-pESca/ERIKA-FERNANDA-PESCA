import { 
  Controller, Get, Post, Body, Param, Patch, Delete, 
  ParseIntPipe, UsePipes, ValidationPipe, HttpStatus 
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { ApiDefaultResponses } from '../common/decorators/ApiDefaultResponses';
import { DefaultResponse, DefaultSuccessResponse } from '../common/interfaces/IResponse';

@ApiTags('Categoría')
@Controller('categorias')
export class CategoriaController {
  constructor(private readonly service: CategoriaService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @ApiOperation({ summary: 'Crear nueva categoría' })
  @ApiBody({ type: CreateCategoriaDto })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Categoría creada correctamente',
    type: DefaultSuccessResponse, 
  })
  @ApiDefaultResponses('Categoria')
  create(@Body() dto: CreateCategoriaDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas las categorías' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Listado de categorías',
    type: DefaultSuccessResponse, 
  })
  @ApiDefaultResponses('Categoria')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener categoría por ID' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Categoría encontrada',
    type: DefaultSuccessResponse, 
  })
  @ApiDefaultResponses('Categoria')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  @ApiOperation({ summary: 'Actualizar categoría' })
  @ApiBody({ type: UpdateCategoriaDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Categoría actualizada correctamente',
    type: DefaultSuccessResponse,
  })
  @ApiDefaultResponses('Categoria')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateCategoriaDto,
  ) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Eliminar categoría' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Categoría eliminada correctamente',
    type: DefaultSuccessResponse, 
  })
  @ApiDefaultResponses('Categoria')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.service.remove(id);
  }
}
