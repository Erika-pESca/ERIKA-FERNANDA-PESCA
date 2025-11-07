import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';
import { DefaultResponse } from '../../../common/interfaces/IResponse';
import { DefaultErrorsDoc } from '../../../common/decorators/defaultErrorsDoc';
import { UpdateUsuarioDto } from '../../../usuario/dto/update-usuario.dto';

export const UpdateUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Actualizar un usuario',
      description: 'Actualiza un usuario en la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del usuario a actualizar',
      type: Number,
      example: 2,
    }),

    ApiBody({
      description: 'Campos que pueden actualizarse del usuario',
      type: UpdateUsuarioDto,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Usuario actualizado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 2,
          nombre: 'andres',
          apellido: 'ardila',
          correo: 'andres@gmail.com',
          contrasena: '125234',
          rol: 'Usuario',
        },
        message: 'Usuario actualizado correctamente',
      },
    }),

    DefaultErrorsDoc('Usuario'),
  );
};
