// facturacion.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Usuario } from 'src/usuario/usuario.entity';
import { Ventas } from 'src/ventas/ventas.entity';

@Entity('facturacion')
export class Facturacion {
  @PrimaryGeneratedColumn()
  id_facturacion: number;

  @CreateDateColumn()
  fecha_emision: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  total: number;

  // 🔹 Esta relación es la DUEÑA del OneToOne
 @OneToOne(() => Ventas, (venta) => venta.facturacion, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
})
@JoinColumn({ name: 'id_venta' }) // Este lado mantiene la FK
venta: Ventas;


  @ManyToOne(() => Usuario, (usuario) => usuario.facturas, {
    onDelete: 'SET NULL',
    nullable: true,
  })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;
}
