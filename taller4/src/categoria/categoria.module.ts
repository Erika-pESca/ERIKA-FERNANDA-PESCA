// // Importa el decorador @Module, que se usa para definir un módulo en NestJS.
import { Module } from '@nestjs/common';

// // Importa TypeOrmModule, que permite conectar entidades a la base de datos.
import { TypeOrmModule } from '@nestjs/typeorm';

// // Importa la entidad Categoria (representa la tabla de categorías en la base de datos).
import { Categoria } from './categoria.entity';

// // Importa el servicio que contiene la lógica de negocio de las categorías.
import { CategoriaService } from './categoria.service';

// // Importa el controlador que maneja las rutas HTTP relacionadas con categorías.
import { CategoriaController } from './categoria.controller';

// // Define el módulo de Categoría.
// // Un módulo agrupa componentes relacionados (controlador, servicio y entidad) en una sola unidad.
@Module({
//   // Registra la entidad Categoria para que TypeORM pueda trabajar con ella (consultas, guardado, etc.)
imports: [TypeOrmModule.forFeature([Categoria])],

//   // Declara el controlador que se encargará de recibir las peticiones HTTP.
controllers: [CategoriaController],

//   // Declara los proveedores (services) que contienen la lógica del negocio.
providers: [CategoriaService],

//   // Exporta el servicio para que otros módulos puedan usarlo si lo necesitan.
exports: [CategoriaService],
})

// //Clase principal del módulo de Categoría.
// // Este módulo reúne todo lo relacionado con las categorías (entidad, servicio y controlador).
export class CategoriaModule {}

