import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  NotFoundException,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { CreateUserDoc } from './decorators/documentation/Create';
import { DeleteUserDoc } from './decorators/documentation/Delete';
import { GetAllUsersDoc } from './decorators/documentation/GetAll';
import { UpdateUserDoc } from './decorators/documentation/Update';
import { ListUsersDoc } from './decorators/documentation/List';
import { Usuario } from './usuario.entity';

/**
 * Controlador responsable de manejar las operaciones relacionadas con los usuarios.
 *
 * Define las rutas HTTP y enlaza las peticiones con los métodos del servicio `UsuarioService`.
 *
 * @controller UsuarioController
 * @route /usuario
 */
@Controller('usuario')
export class UsuarioController {
  /**
   * Inyecta el servicio de usuarios para manejar la lógica de negocio.
   * @param userService Servicio encargado de las operaciones CRUD de usuario.
   */
  constructor(private readonly userService: UsuarioService) {}

  /**
   * Crea un nuevo usuario en el sistema.
   *
   * @route POST /usuario/register
   * @param body Datos del usuario a crear (CreateUsuarioDto).
   * @returns El usuario creado.
   */
  @Post('register')
  @CreateUserDoc()
  async createUser(@Body() body: CreateUsuarioDto): Promise<Usuario> {
    return this.userService.createUser(body);
  }

  /**
   * Obtiene la lista de todos los usuarios registrados.
   *
   * @route GET /usuario/list
   * @returns Lista de usuarios.
   */
  @ListUsersDoc()
  @Get('list')
  async listUsers(): Promise<Usuario[]> {
    return this.userService.listUsers();
  }

  /**
   * Obtiene un usuario específico por su ID.
   *
   * @route GET /usuario/:id
   * @param id Identificador numérico del usuario.
   * @throws NotFoundException Si el usuario no existe.
   * @returns El usuario encontrado.
   */
  @GetAllUsersDoc()
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<Usuario> {
    const user = await this.userService.getUser(id);
    if (!user) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return user;
  }

  /**
   * Actualiza los datos de un usuario existente.
   *
   * @route PATCH /usuario/:id
   * @param id Identificador del usuario a actualizar.
   * @param body Datos a actualizar (UpdateUsuarioDto).
   * @throws NotFoundException Si el usuario no existe.
   * @returns El usuario actualizado.
   */
  @UpdateUserDoc()
  @Patch(':id')
  async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateUsuarioDto,
  ): Promise<Usuario> {
    const updated = await this.userService.updateUser(id, body);
    if (!updated) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return updated;
  }

  /**
   * Elimina un usuario del sistema.
   *
   * @route DELETE /usuario/:id
   * @param id Identificador del usuario a eliminar.
   * @throws NotFoundException Si el usuario no existe.
   * @returns Mensaje de confirmación de eliminación.
   */
  @DeleteUserDoc()
  @Delete(':id')
  async deleteUser(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<{ message: string }> {
    const result = await this.userService.deleteUser(id);
    if (!result) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return { message: `Usuario ${id} eliminado correctamente` };
  }
}
