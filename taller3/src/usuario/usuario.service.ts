// Clase Servicio: Contiene la Lógica de Negocio central de la entidad Usuario.
// Este servicio actúa como intermediario: recibe peticiones del Controlador y
// delega las operaciones de DB al Repositorio.
// Se encarga de la validación de existencia (ej. antes de actualizar o eliminar).

import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from './providers/usuario.repository';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject(UsuarioRepository)
    private readonly userRepo: UsuarioRepository,   
  ) {}

  createUser(body: CreateUsuarioDto) {
    return this.userRepo.createUser(body);
  }

  listUsers() {
    return this.userRepo.findAll();
  }

  async getUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return u;
  }

  async updateUser(id: number, body: UpdateUsuarioDto) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.updateUser(id, body);
  }

  async deleteUser(id: number) {
    const u = await this.userRepo.findOne(id);
    if (!u) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return this.userRepo.deleteUser(id);
  }

  // agrega este método en UsuarioService para auth
async findByEmail(email: string) {
  return this.userRepo.findByEmail(email);
}

}
