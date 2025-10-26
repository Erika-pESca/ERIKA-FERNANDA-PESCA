import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VentaProducto } from './venta_producto.entity';
import { Ventas } from 'src/ventas/ventas.entity';
import { Producto } from 'src/producto/producto.entity';

@Injectable()
export class VentaProductoService {
  constructor(
    @InjectRepository(VentaProducto)
    private readonly ventaProductoRepo: Repository<VentaProducto>,

    @InjectRepository(Ventas)
    private readonly ventaRepo: Repository<Ventas>,

    @InjectRepository(Producto)
    private readonly productoRepo: Repository<Producto>,
  ) {}

  // 🔹 Crear un nuevo registro en venta_producto
  async agregarProductoAVenta(idVenta: number, idProducto: number, cantidad: number) {
    const venta = await this.ventaRepo.findOne({ where: { id_venta: idVenta } });
    if (!venta) throw new NotFoundException('Venta no encontrada');

    const producto = await this.productoRepo.findOne({ where: { id_producto: idProducto } });
    if (!producto) throw new NotFoundException('Producto no encontrado');

    if (cantidad > producto.stock) {
      throw new NotFoundException(`Stock insuficiente. Disponible: ${producto.stock}`);
    }

    // Calcular subtotal
    const subtotal = Number(producto.precio) * cantidad;

    // Crear el registro
    const ventaProducto = this.ventaProductoRepo.create({
      cantidad,
      precio_unitario: producto.precio,
      subtotal,
      venta,
      producto,
    });

    // Guardar y actualizar stock
    const nuevoRegistro = await this.ventaProductoRepo.save(ventaProducto);
    producto.stock -= cantidad;
    await this.productoRepo.save(producto);

    return nuevoRegistro;
  }

  // 🔹 Listar productos por venta
  async listarPorVenta(idVenta: number) {
    return await this.ventaProductoRepo.find({
      where: { venta: { id_venta: idVenta } },
      relations: ['producto', 'venta'],
    });
  }

  // 🔹 Eliminar un producto de una venta
  async eliminar(id: number) {
    const existe = await this.ventaProductoRepo.findOne({ where: { id_venta_producto: id } });
    if (!existe) throw new NotFoundException('Registro no encontrado');
    return await this.ventaProductoRepo.delete(id);
  }
}
