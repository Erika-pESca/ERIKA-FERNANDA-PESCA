import { applyDecorators, HttpStatus } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiBearerAuth } from "@nestjs/swagger";
import { DefaultResponse } from "../../../common/interfaces/IResponse";
import { DefaultErrorsDoc } from "../../../common/decorators/defaultErrorsDoc";

export const CreateUserDoc = (): MethodDecorator => {
  return applyDecorators(
    ApiBearerAuth(),

    ApiOperation({
      summary: 'Crear un usuario',
      description: 'Crea un nuevo usuario en la base de datos',
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

    DefaultErrorsDoc('Usuario') // Aquí se agregan las respuestas de error comunes
  );
};
