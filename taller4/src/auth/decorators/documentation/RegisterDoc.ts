import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { RegisterDto } from '../../dto/register.dto';

export function RegisterDoc() {
  return applyDecorators(
    ApiTags('Auth'),
    ApiOperation({
      summary: 'Registrar un nuevo usuario',
      description:
        'Crea una nueva cuenta de usuario en el sistema. Retorna un mensaje de confirmación o el usuario creado.',
    }),
    ApiBody({
      type: RegisterDto,
      description: 'Datos requeridos para registrar un nuevo usuario.',
      examples: {
        usuarioEjemplo: {
          summary: 'Ejemplo de registro',
          value: {
            username: 'erika',
            email: 'erika@example.com',
            password: '123456',
            role: 'user',
          },
        },
      },
    }),
    ApiResponse({
      status: 201,
      description: 'Usuario registrado exitosamente.',
      schema: {
        example: {
          message: 'Usuario creado correctamente',
          user: {
            id: 1,
            username: 'erika',
            email: 'erika@example.com',
            role: 'user',
          },
        },
      },
    }),
    ApiResponse({
      status: 400,
      description: 'Datos inválidos o usuario ya existente.',
      schema: {
        example: {
          statusCode: 400,
          message: 'El correo ya está registrado.',
          error: 'Bad Request',
        },
      },
    }),
  );
}
