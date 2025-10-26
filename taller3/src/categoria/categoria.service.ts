// Importamos decoradores y clases necesarias de NestJS y TypeORM
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importamos la entidad y los DTOs (objetos para recibir datos)
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

//Este decorador indica que esta clase puede ser inyectada como un servicio
@Injectable()
export class CategoriaService {
  // Se inyecta el repositorio de la entidad Categoria para interactuar con la base de datos
  constructor(
    @InjectRepository(Categoria)
    private readonly repo: Repository<Categoria>,
  ) {}

  // Crear una nueva categoría
  create(dto: CreateCategoriaDto) {
    // Crea una nueva instancia de categoría usando los datos del DTO
    const entity = this.repo.create(dto);
    // Guarda la categoría en la base de datos
    return this.repo.save(entity);
  }

  // Obtener todas las categorías registradas
  findAll() {
    // Devuelve un arreglo con todas las categorías encontradas
    return this.repo.find();
  }

  // Buscar una categoría específica por su ID
  async findOne(id: number) {
    // Busca la categoría por su id_categoria
    const cat = await this.repo.findOne({ where: { id_categoria: id } });

    // Si no existe, lanza  error 404 (no encontrada)
    if (!cat) throw new NotFoundException('Categoría no encontrada');

    // Si se encuentra, la devuelve
    return cat;
  }

  // Actualizar una categoría existente
  async update(id: number, dto: UpdateCategoriaDto) {
    // Verifica que la categoría exista antes de actualizarla
    const cat = await this.findOne(id);

    // Mezcla los nuevos datos (dto) con los datos existentes
    this.repo.merge(cat, dto);

    // Guarda los cambios en la base de datos
    return this.repo.save(cat);
  }

  // Eliminar una categoría por su ID
  async remove(id: number) {
    // Verifica que la categoría exista antes de eliminarla
    const cat = await this.findOne(id);

    // Elimina la categoría de la base de datos
    return this.repo.remove(cat);
  }
}
