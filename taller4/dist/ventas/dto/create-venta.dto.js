"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateVentaDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateVentaDto {
    fecha;
    total;
    id_usuario;
}
exports.CreateVentaDto = CreateVentaDto;
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        name: 'fecha',
        required: false,
        type: String,
        description: 'Fecha en la que se realiza la venta (opcional)',
        example: '2025-11-03T15:30:00.000Z',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateVentaDto.prototype, "fecha", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'total',
        required: true,
        type: Number,
        description: 'Valor total de la venta',
        example: 150000,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVentaDto.prototype, "total", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        name: 'id_usuario',
        required: true,
        type: Number,
        description: 'Identificador del usuario que realiza la venta',
        example: 1,
    }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateVentaDto.prototype, "id_usuario", void 0);
//# sourceMappingURL=create-venta.dto.js.map