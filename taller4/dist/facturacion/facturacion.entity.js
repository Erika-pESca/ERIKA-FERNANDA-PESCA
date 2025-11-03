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
exports.Facturacion = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
const ventas_entity_1 = require("../ventas/ventas.entity");
let Facturacion = class Facturacion {
    id_facturacion;
    fecha_emision;
    total;
    venta;
    usuario;
};
exports.Facturacion = Facturacion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Facturacion.prototype, "id_facturacion", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Facturacion.prototype, "fecha_emision", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Facturacion.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => ventas_entity_1.Ventas, (venta) => venta.facturacion, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_venta' }),
    __metadata("design:type", ventas_entity_1.Ventas)
], Facturacion.prototype, "venta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.facturas, {
        onDelete: 'SET NULL',
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Facturacion.prototype, "usuario", void 0);
exports.Facturacion = Facturacion = __decorate([
    (0, typeorm_1.Entity)('facturacion')
], Facturacion);
//# sourceMappingURL=facturacion.entity.js.map