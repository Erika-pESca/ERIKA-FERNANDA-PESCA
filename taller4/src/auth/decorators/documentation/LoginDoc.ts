import { applyDecorators } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { LoginDto } from '../../dto/login.dto';

export function LoginDoc() {
  return applyDecorators(
    ApiTags('Auth'),
    ApiOperation({
      summary: 'Iniciar sesión',
      description: 'Permite que un usuario inicie sesión y reciba un token JWT válido para autenticación.',
    }),
    ApiBody({
      type: LoginDto,
      description: 'Credenciales del usuario para iniciar sesión.',
      examples: {
        usuarioEjemplo: {
          summary: 'Ejemplo de credenciales',
          value: {
            username: 'erika',
            password: '123456',
          },
        },
      },
    }),
    ApiResponse({
      status: 200,
      description: 'Inicio de sesión exitoso: devuelve un token JWT.',
      schema: {
        example: {
          access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
        },
      },
    }),
    ApiResponse({
      status: 401,
      description: 'Credenciales inválidas. Usuario o contraseña incorrectos.',
    }),
  );
}
