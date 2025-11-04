"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUserDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const DeleteUserDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Eliminar un usuario',
        description: 'Elimina un usuario de la base de datos',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador del usuario a eliminar',
        type: Number,
        example: 3,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Usuario eliminado correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
            message: 'Usuario eliminado correctamente',
        },
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Usuario'));
};
exports.DeleteUserDoc = DeleteUserDoc;
//# sourceMappingURL=Delete.js.map