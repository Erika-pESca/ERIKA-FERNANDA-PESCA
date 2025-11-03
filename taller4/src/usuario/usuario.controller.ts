import {Body,Controller,Delete,Get,Param,ParseIntPipe,Patch,Post,NotFoundException,} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuario') //definimos la ruta base para este controlador
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  // Crear usuario
  @Post('register')
  createUser(@Body() body: CreateUsuarioDto) {
    return this.userService.createUser(body);
  }

  // Listar usuarios
  @Get('list')
  listUsers() {
    return this.userService.listUsers();
  }

  // Obtener usuario por ID
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);
    // Manejo de errores: Si el Servicio devuelve null/undefined
    if (!user) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return user;
  }

  // Actualizar usuario
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsuarioDto, //// El Body se valida con UpdateUsuarioDto todos los campos opcionales
  ) {
    const updated = await this.userService.updateUser(id, body);
    // verifica si la actualización fue exitosa
    if (!updated) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return updated;
  }

  // Eliminar usuario
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const result = await this.userService.deleteUser(id);
    if (!result) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return { message: `Usuario ${id} eliminado correctamente` };
  }
}
