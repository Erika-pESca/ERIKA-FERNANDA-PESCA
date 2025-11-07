import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { DefaultResponse } from '../../../common/interfaces/IResponse';
import { DefaultErrorsDoc } from '../../../common/decorators/defaultErrorsDoc';

export const ListUsersDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Lista todos los usuarios',
      description: 'Lista todos los usuarios creados en la base de datos',
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Lista de usuarios',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: [
          {
            id: 1,
            nombre: 'Erika',
            apellido: 'Pesca',
            correo: 'erika@gmail.com',
            contrasena: '123456',
            rol: 'Administrador',
          },
          {
            id: 2,
            nombre: 'andres',
            apellido: 'ardila',
            correo: 'andres@gmail.com',
            contrasena: '125234',
            rol: 'Usuario',
          },
        ],
        message: 'Lista de usuarios',
      },
    }),

    DefaultErrorsDoc('Usuario'),
  );
};
