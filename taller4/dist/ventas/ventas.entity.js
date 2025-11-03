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
exports.Ventas = void 0;
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("../usuario/usuario.entity");
const facturacion_entity_1 = require("../facturacion/facturacion.entity");
const venta_producto_entity_1 = require("../venta_producto/venta_producto.entity");
let Ventas = class Ventas {
    id_venta;
    fecha;
    total;
    usuario;
    facturacion;
    ventaProductos;
};
exports.Ventas = Ventas;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Ventas.prototype, "id_venta", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Ventas.prototype, "fecha", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Ventas.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.Usuario, (usuario) => usuario.ventas, {
        onDelete: 'CASCADE',
        eager: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'id_usuario' }),
    __metadata("design:type", usuario_entity_1.Usuario)
], Ventas.prototype, "usuario", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => facturacion_entity_1.Facturacion, (factura) => factura.venta, {
        cascade: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    __metadata("design:type", facturacion_entity_1.Facturacion)
], Ventas.prototype, "facturacion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => venta_producto_entity_1.VentaProducto, (vp) => vp.venta, {
        cascade: true,
    }),
    __metadata("design:type", Array)
], Ventas.prototype, "ventaProductos", void 0);
exports.Ventas = Ventas = __decorate([
    (0, typeorm_1.Entity)('ventas')
], Ventas);
//# sourceMappingURL=ventas.entity.js.map