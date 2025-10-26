import { Entity, PrimaryGeneratedColumn, Column, OneToMany, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { Ventas } from 'src/ventas/ventas.entity'; 
import { Facturacion } from 'src/facturacion/facturacion.entity'; 

@Entity('usuario')
export class Usuario {
  // define la columna de id de usuario como clave primaria
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column({ length: 100 }) // define el tamaño máximo de 100 caracteres para el nombre
  nombre: string;

  @Column({ unique: true, length: 150 }) // unique asegura que no hay dos usuarios con el mismo correo
  correo: string;

  @Column({ length: 200 }) // alamacena el hash de la contraseña
  contrasena: string;

  @Column({ default: 'empleado' }) // columna rol con un valor por defecto
  rol: string;

  // Relaciones
  @OneToMany(() => Ventas, (venta) => venta.usuario, { nullable: true })
  ventas?: Ventas[];
  // RELACIÓN UNO A MUCHOS: Un Usuario puede tener MUCHAS Ventas.
   // 1. () => Ventas: Define la entidad relacionada.
   // 2. (venta) => venta.usuario: Define la propiedad en la entidad Ventas que mapea de vuelta a Usuario.
   // 3. nullable: true: Indica que, aunque una venta requiere un usuario, el lado del array puede estar vacío.
   //'ventas?: Ventas[]' es la propiedad que contendrá el array de ventas si se carga la relación.
   

  @OneToMany(() => Facturacion, (factura) => factura.usuario, { nullable: true })
  facturas?: Facturacion[]; // indican que es un array de entidades opcional

  @UpdateDateColumn()
  updatedAt: Date;

  
  @DeleteDateColumn()
  deletedAt: Date;
}
