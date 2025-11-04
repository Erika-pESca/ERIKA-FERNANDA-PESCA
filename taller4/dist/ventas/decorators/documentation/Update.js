"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateVentaDoc = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const IResponse_1 = require("../../../common/interfaces/IResponse");
const defaultErrorsDoc_1 = require("../../../common/decorators/defaultErrorsDoc");
const UpdateVentaDoc = () => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiOperation)({
        summary: 'Actualizar una venta',
        description: 'Actualiza los datos de una venta existente en la base de datos',
    }), (0, swagger_1.ApiParam)({
        name: 'id',
        description: 'Identificador de la venta a actualizar',
        type: Number,
        example: 1,
    }), (0, swagger_1.ApiBody)({
        description: 'Datos de la venta a actualizar',
        required: true,
        schema: {
            type: 'object',
            properties: {
                fecha: {
                    type: 'string',
                    format: 'date-time',
                    example: '2025-11-03T15:30:00.000Z',
                    description: 'Fecha de la venta en formato ISO 8601',
                },
                total: {
                    type: 'number',
                    example: 200000,
                    description: 'Valor total de la venta',
                },
                id_usuario: {
                    type: 'number',
                    example: 1,
                    description: 'Identificador del usuario que realiza la venta',
                },
            },
        },
    }), (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Venta actualizada correctamente',
        type: IResponse_1.DefaultResponse,
        example: {
            status: common_1.HttpStatus.OK,
            data: {
                id: 1,
                fecha: '2025-11-03T15:30:00.000Z',
                total: 200000,
                id_usuario: 1,
            },
            message: 'Venta actualizada correctamente',
        },
    }), (0, defaultErrorsDoc_1.DefaultErrorsDoc)('Venta'));
};
exports.UpdateVentaDoc = UpdateVentaDoc;
//# sourceMappingURL=Update.js.map