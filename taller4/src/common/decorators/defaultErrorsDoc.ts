import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { DefaultResponse } from '../interfaces/IResponse';

export const DefaultErrorsDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiResponse({
      status: HttpStatus.BAD_REQUEST,
      description: 'El usuario no fue creado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.BAD_REQUEST,
        message: 'El usuario no fue creado correctamente',
      },
    }),

    ApiResponse({
      status: HttpStatus.OK,
      description: 'Usuario creado correctamente',
      type: DefaultResponse,
      example: {
        status: HttpStatus.OK,
        data: {
          id: 1,
          nombre: 'Erika',
          apellido: 'Pesca',
          correo: 'erika@gmail.com',
          contrasena: '123456',
          rol: 'Administrador',
        },
        message: 'Usuario creado correctamente',
      },
    }),

    ApiResponse({
      status: HttpStatus.CONFLICT,
      description: 'El usuario ya existe',
      type: DefaultResponse,
      example: {
        status: HttpStatus.CONFLICT,
        message: 'El usuario ya existe',
      },
    }),

    ApiResponse({
      status: HttpStatus.UNAUTHORIZED,
      description: 'No tiene permisos para crear ese usuario',
      type: DefaultResponse,
      example: {
        status: HttpStatus.UNAUTHORIZED,
        message: 'No tiene permisos para crear ese usuario',
      },
    }),
  );
};
