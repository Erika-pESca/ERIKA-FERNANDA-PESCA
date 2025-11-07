import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
  ApiParam,
} from '@nestjs/swagger';
import { DefaultResponse } from '../../../common/interfaces/IResponse';
import { DefaultErrorsDoc } from '../../../common/decorators/defaultErrorsDoc';

export const DeleteUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Eliminar un usuario',
      description: 'Elimina un usuario de la base de datos',
    }),

    ApiParam({
      name: 'id',
      description: 'Identificador del usuario a eliminar',
      type: Number,
      example: 3,
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Usuario eliminado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        message: 'Usuario eliminado correctamente',
      },
    }),

    DefaultErrorsDoc('Usuario'),
  );
};
// Aquí se agregan las respuestas de error comunes
