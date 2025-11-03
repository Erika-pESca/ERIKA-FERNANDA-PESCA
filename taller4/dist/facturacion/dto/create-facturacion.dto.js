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
exports.CreateFacturacionDto = void 0;
const class_validator_1 = require("class-validator");
const metodo_pago_enum_1 = require("../enums/metodo-pago.enum");
class CreateFacturacionDto {
    numero_factura;
    tipo_factura;
    metodo_pago;
    total;
    id_venta;
    id_usuario;
}
exports.CreateFacturacionDto = CreateFacturacionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 50),
    __metadata("design:type", String)
], CreateFacturacionDto.prototype, "numero_factura", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 30),
    __metadata("design:type", String)
], CreateFacturacionDto.prototype, "tipo_factura", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(metodo_pago_enum_1.MetodoPago, { message: 'El método de pago debe ser efectivo, tarjeta o transferencia' }),
    __metadata("design:type", String)
], CreateFacturacionDto.prototype, "metodo_pago", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFacturacionDto.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFacturacionDto.prototype, "id_venta", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateFacturacionDto.prototype, "id_usuario", void 0);
//# sourceMappingURL=create-facturacion.dto.js.map