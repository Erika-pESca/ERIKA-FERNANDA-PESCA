import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ventas } from './ventas.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentasService {
  constructor(
    @InjectRepository(Ventas)
    private readonly ventaRepo: Repository<Ventas>,

    @InjectRepository(Usuario)
    private readonly usuarioRepo: Repository<Usuario>,

    @InjectRepository(Facturacion)
    private readonly facturacionRepo: Repository<Facturacion>,
  ) {}

  // ✅ Crear una venta y su facturación automáticamente
  async createVenta(data: { total: number; id_usuario: number }) {
    // 1️⃣ Buscar el usuario
    const usuario = await this.usuarioRepo.findOne({
      where: { id_usuario: data.id_usuario },
    });
    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // 2️⃣ Crear la venta
    const nuevaVenta = this.ventaRepo.create({
      total: data.total,
      usuario: usuario,
    });
    const ventaGuardada = await this.ventaRepo.save(nuevaVenta);

    // 3️⃣ Crear automáticamente la facturación asociada
    const nuevaFactura = this.facturacionRepo.create({
      venta: ventaGuardada,
      usuario: usuario,
      fecha_emision: new Date(),
      total: ventaGuardada.total,
    });
    const facturaGuardada = await this.facturacionRepo.save(nuevaFactura);

    // 4️⃣ Volver a consultar la venta, pero incluyendo la relación
    const ventaConFactura = await this.ventaRepo.findOne({
      where: { id_venta: ventaGuardada.id_venta },
      relations: ['usuario', 'facturacion'],
    });

    return ventaConFactura;
  }

  // ✅ Listar todas las ventas con su facturación y usuario
  async updateVenta(id: number, body: UpdateVentaDto) {
    return await this.ventaRepo.find({
      relations: ['usuario', 'facturacion'],
    });
  }

  // ✅ Obtener una venta específica
  async getVenta(id: number) {
    return await this.ventaRepo.findOne({
      where: { id_venta: id },
      relations: ['usuario', 'facturacion'],
    });
  }

  // ✅ Eliminar una venta
  async deleteVenta(id: number) {
    return await this.ventaRepo.delete(id);
  }
}
