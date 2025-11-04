"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUsersDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const ListUsersDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Lista todos los usuarios',
        description: 'Lista todos los usuarios creados en la base de datos',
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Lista de usuarios',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
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
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Usuario'));
};
exports.ListUsersDoc = ListUsersDoc;
//# sourceMappingURL=List.js.map