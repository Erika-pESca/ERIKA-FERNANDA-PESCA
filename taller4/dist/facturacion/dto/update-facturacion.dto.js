"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFacturacionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_facturacion_dto_1 = require("./create-facturacion.dto");
class UpdateFacturacionDto extends (0, mapped_types_1.PartialType)(create_facturacion_dto_1.CreateFacturacionDto) {
}
exports.UpdateFacturacionDto = UpdateFacturacionDto;
//# sourceMappingURL=update-facturacion.dto.js.map