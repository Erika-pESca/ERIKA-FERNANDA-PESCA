import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Proveedor } from './proveedor.entity';

@Injectable()
export class ProveedorService {
  constructor(
    @InjectRepository(Proveedor)
    private readonly proveedorRepository: Repository<Proveedor>,
  ) {}

  async findAll(): Promise<any[]> {
    const proveedores = await this.proveedorRepository.find({ relations: ['productos'] });
    return proveedores.map((p) => ({
      ...p,
      correo: p.getDecryptedEmail(),
    }));
  }

  async findOne(id: number): Promise<any> {
    const proveedor = await this.proveedorRepository.findOne({
      where: { id_proveedor: id },
      relations: ['productos'],
    });

    if (!proveedor) return null;

    return {
      ...proveedor,
      correo: proveedor.getDecryptedEmail(),
    };
  }

  async create(proveedor: Proveedor): Promise<Proveedor> {
    return await this.proveedorRepository.save(proveedor);
  }

  async update(id: number, proveedor: Proveedor): Promise<Proveedor | null> {
    await this.proveedorRepository.update(id, proveedor);
    const actualizado = await this.proveedorRepository.findOneBy({ id_proveedor: id });
    if (actualizado) {
      actualizado.correo = actualizado.getDecryptedEmail();
    }
    return actualizado;
  }

  async remove(id: number): Promise<void> {
    await this.proveedorRepository.delete(id);
  }
}
