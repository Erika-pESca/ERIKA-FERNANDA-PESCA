// Importamos decoradores y clases necesarias de NestJS y TypeORM
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

// Importamos la entidad y los DTOs (objetos para recibir datos)
import { Facturacion } from './facturacion.entity';
import { CreateFacturacionDto } from './dto/create-facturacion.dto';
import { UpdateFacturacionDto } from './dto/update-facturacion.dto';

/**
 * Servicio de Facturación
 * Contiene la lógica de negocio (crear, buscar, actualizar, eliminar facturas).
 */
//Este decorador indica que esta clase puede ser inyectada como un servicio
@Injectable()
export class FacturacionService {
  // Se inyecta el repositorio de la entidad facturación para interactuar con la base de datos
  constructor(
    @InjectRepository(Facturacion)
    private readonly repo: Repository<Facturacion>,
  ) {}

  // Crear una nueva factura
  create(dto: CreateFacturacionDto) {
    const nuevaFactura = this.repo.create(dto);
    return this.repo.save(nuevaFactura);
  }

  // Obtener todas las facturas
  findAll() {
    return this.repo.find({ relations: ['venta'] }); // Incluye los datos de la venta asociada
  }

  // Buscar una factura por ID
  async findOne(id: number) {
    const factura = await this.repo.findOne({ where: { id_facturacion: id }, relations: ['venta'] });
    if (!factura) throw new NotFoundException('Factura no encontrada');
    return factura;
  }

  // Actualizar una factura existente
  async update(id: number, dto: UpdateFacturacionDto) {
    const factura = await this.findOne(id);
    this.repo.merge(factura, dto);
    return this.repo.save(factura);
  }

  // Eliminar una factura
  async remove(id: number) {
    const factura = await this.findOne(id);
    return this.repo.remove(factura);
  }
}
