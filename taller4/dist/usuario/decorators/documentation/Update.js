"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const update_usuario_dto_1 = require("../../dto/update-usuario.dto");
const UpdateUserDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Actualizar un usuario',
        description: 'Actualiza un usuario en la base de datos',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del usuario a actualizar',
        type: Number,
        example: 2,
    }), (0, swagger_1.ApiBody)({
        description: 'Campos que pueden actualizarse del usuario',
        type: update_usuario_dto_1.UpdateUsuarioDto,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario actualizado correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
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
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Usuario'));
};
exports.UpdateUserDoc = UpdateUserDoc;
//# sourceMappingURL=Update.js.map