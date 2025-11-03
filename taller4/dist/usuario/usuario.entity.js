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
exports.Usuario = void 0;
const typeorm_1 = require("typeorm");
const ventas_entity_1 = require("../ventas/ventas.entity");
const facturacion_entity_1 = require("../facturacion/facturacion.entity");
let Usuario = class Usuario {
    id_usuario;
    nombre;
    correo;
    contrasena;
    rol;
    ventas;
    facturas;
    updatedAt;
    deletedAt;
};
exports.Usuario = Usuario;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Usuario.prototype, "id_usuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Usuario.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 150 }),
    __metadata("design:type", String)
], Usuario.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Usuario.prototype, "contrasena", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 'empleado' }),
    __metadata("design:type", String)
], Usuario.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ventas_entity_1.Ventas, (venta) => venta.usuario, { nullable: true }),
    __metadata("design:type", Array)
], Usuario.prototype, "ventas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => facturacion_entity_1.Facturacion, (factura) => factura.usuario, { nullable: true }),
    __metadata("design:type", Array)
], Usuario.prototype, "facturas", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Usuario.prototype, "deletedAt", void 0);
exports.Usuario = Usuario = __decorate([
    (0, typeorm_1.Entity)('usuario')
], Usuario);
//# sourceMappingURL=usuario.entity.js.map