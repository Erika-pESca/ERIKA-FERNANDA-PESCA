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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacturacionRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const facturacion_entity_1 = require("../../facturacion/facturacion.entity");
let FacturacionRepository = class FacturacionRepository {
    facturacionRepo;
    constructor(facturacionRepo) {
        this.facturacionRepo = facturacionRepo;
    }
    async findByVentaId(id_venta) {
        return await this.facturacionRepo.findOne({
            where: { venta: { id_venta } },
            relations: ['venta', 'usuario'],
        });
    }
    async createFacturacion(data) {
        if (!data.venta || !data.venta.id_venta) {
            throw new Error('No se puede crear la factura, falta la información de la venta.');
        }
        const facturaExistente = await this.findByVentaId(data.venta.id_venta);
        if (facturaExistente) {
            return facturaExistente;
        }
        const nuevaFactura = this.facturacionRepo.create(data);
        return await this.facturacionRepo.save(nuevaFactura);
    }
    async listarFacturas() {
        return await this.facturacionRepo.find({ relations: ['venta', 'usuario'] });
    }
    async obtenerFactura(id) {
        return await this.facturacionRepo.findOne({
            where: { id_facturacion: id },
            relations: ['venta', 'usuario'],
        });
    }
    async eliminarFactura(id) {
        return await this.facturacionRepo.delete(id);
    }
    async findOne(options) {
        return await this.facturacionRepo.findOne(options);
    }
};
exports.FacturacionRepository = FacturacionRepository;
exports.FacturacionRepository = FacturacionRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(facturacion_entity_1.Facturacion)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], FacturacionRepository);
//# sourceMappingURL=facturacion.repository.js.map