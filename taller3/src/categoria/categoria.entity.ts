// // Importamos los decoradores y tipos necesarios de TypeORM
// // Estos sirven para definir cómo se comportan las clases con la base de datos
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

// // Importamos la entidad Producto (para definir la relación entre ambas tablas)
import { Producto } from '../producto/producto.entity';

// // Indica que esta clase representa una tabla llamada "categoria" en la base de datos
@Entity('categoria')
export class Categoria {
 // Columna ID autogenerada (llave primaria)
@PrimaryGeneratedColumn()
id_categoria!: number;

// Columna tipo texto con máximo 100 caracteres (nombre de la categoría)
@Column({ length: 100 })
nombre!: string;

//   // Columna tipo texto largo (opcional, puede quedar vacía)
 @Column({ type: 'text', nullable: true })
descripcion?: string;

//   // Relación uno a muchos (1 categoría tiene muchos productos)
//   // El primer argumento indica con qué entidad se relaciona
//   // El segundo define la propiedad inversa en la entidad Producto
@OneToMany(() => Producto, producto => producto.categoria)
productos!: Producto[];
}


