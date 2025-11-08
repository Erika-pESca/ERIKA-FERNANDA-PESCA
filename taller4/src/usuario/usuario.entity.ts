import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Ventas } from '../ventas/ventas.entity';
import { Facturacion } from '../facturacion/facturacion.entity';

@Entity('usuario')
export class Usuario {
  // 🔹 Clave primaria
  @PrimaryGeneratedColumn()
  id_usuario: number;

  // 🔹 Nombre del usuario
  @Column({ length: 100 })
  nombre: string;

  // 🔹 Apellido opcional (soluciona el error de valores null)
  @Column({ length: 100, nullable: true })
  apellido?: string;

  // 🔹 Correo único
  @Column({ unique: true, length: 150 })
  correo: string;

  // 🔹 Contraseña (hash)
  @Column({ length: 200 })
  contrasena: string;

  // 🔹 Rol del usuario (por defecto "empleado")
  @Column({ default: 'empleado' })
  rol: string;

  // 🔹 Relación: un usuario puede tener muchas ventas
  @OneToMany(() => Ventas, (venta) => venta.usuario, { nullable: true })
  ventas?: Ventas[];

  // 🔹 Relación: un usuario puede tener muchas facturas
  @OneToMany(() => Facturacion, (factura) => factura.usuario, { nullable: true })
  facturas?: Facturacion[];

  // 🔹 Fecha de última actualización
  @UpdateDateColumn()
  updatedAt: Date;

  // 🔹 Fecha de eliminación lógica (soft delete)
  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt?: Date | null;
}
