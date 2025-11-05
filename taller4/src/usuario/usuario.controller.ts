import {Body,Controller,Delete,Get,Param,ParseIntPipe,Patch,Post,NotFoundException, HttpStatus} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { ApiOperation, ApiParam, ApiBody  } from '@nestjs/swagger';
import { DefaultErrorsDoc } from '../common/decorators/defaultErrorsDoc';

@Controller('usuario') //definimos la ruta base para este controlador
export class UsuarioController {
  constructor(private readonly userService: UsuarioService) {}

  @ApiOperation({
    summary: 'Crear un usuario',
    description: 'Crea un nuevo usuario en la base de datos',
  })
@DefaultErrorsDoc()
  // Crear usuario
  @Post('register')
  createUser(@Body() body: CreateUsuarioDto) {
    return this.userService.createUser(body);
  }

  @ApiOperation({
    summary: 'Lista los usuarios creados',
    description: 'nos lista todos los usuarios creados en la base de datos y guardados corectamente',
  })
  // Listar usuarios
  @Get('list')
  listUsers() {
    return this.userService.listUsers();
  }

  @ApiOperation({
    summary: 'Obtener usuario por un ID',
    description: 'nos devuelve un usuario en especifico',
  })
@ApiParam({
    name: 'id',
    description: 'Identificador numérico del usuario',
    type: Number,
    example: 1,
  })
  // Obtener usuario por ID
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id: number) {
    const user = await this.userService.getUser(id);
    // Manejo de errores: Si el Servicio devuelve null/undefined
    if (!user) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return user;
  }


  @ApiOperation({
    summary: 'Actualizar usuario',
    description: 'actualiza un usuario en la base de datos en los campos que queremos que se actualicen',
  })
  @ApiParam({
    name: 'id',
    description: 'Identificador numérico del usuario a actualizar',
    type: Number,
    example: 2,
  })
  @ApiBody({
    description: 'Campos que pueden actualizarse del usuario',
    type: UpdateUsuarioDto,
  })
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


  @ApiOperation({
    summary: 'Eliminar usuario',
    description: 'elimina un usuario en la base de datos con su respectivo ID',
  })
  
  @ApiParam({
    name: 'id',
    description: 'Identificador del usuario a eliminar',
    type: Number,
    example: 3,
  })
  // Eliminar usuario
  @Delete(':id')
  async deleteUser(@Param('id', ParseIntPipe) id: number) {
    const result = await this.userService.deleteUser(id);
    if (!result) throw new NotFoundException(`Usuario ${id} no encontrado`);
    return { message: `Usuario ${id} eliminado correctamente` };
  }
}
