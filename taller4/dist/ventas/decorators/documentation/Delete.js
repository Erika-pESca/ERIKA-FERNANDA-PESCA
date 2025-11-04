"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteVentaDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const DeleteVentaDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Eliminar una venta',
        description: 'Elimina una venta de la base de datos',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la venta a eliminar',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Venta eliminada correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
            message: 'Venta eliminada correctamente',
        },
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Venta'));
};
exports.DeleteVentaDoc = DeleteVentaDoc;
//# sourceMappingURL=Delete.js.map