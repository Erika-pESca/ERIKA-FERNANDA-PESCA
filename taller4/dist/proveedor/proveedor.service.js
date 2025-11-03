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
exports.ProveedorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const proveedor_entity_1 = require("./proveedor.entity");
let ProveedorService = class ProveedorService {
    proveedorRepository;
    constructor(proveedorRepository) {
        this.proveedorRepository = proveedorRepository;
    }
    async findAll() {
        const proveedores = await this.proveedorRepository.find({ relations: ['productos'] });
        return proveedores.map((p) => ({
            ...p,
            correo: p.getDecryptedEmail(),
        }));
    }
    async findOne(id) {
        const proveedor = await this.proveedorRepository.findOne({
            where: { id_proveedor: id },
            relations: ['productos'],
        });
        if (!proveedor)
            return null;
        return {
            ...proveedor,
            correo: proveedor.getDecryptedEmail(),
        };
    }
    async create(proveedor) {
        return await this.proveedorRepository.save(proveedor);
    }
    async update(id, proveedor) {
        await this.proveedorRepository.update(id, proveedor);
        const actualizado = await this.proveedorRepository.findOneBy({ id_proveedor: id });
        if (actualizado) {
            actualizado.correo = actualizado.getDecryptedEmail();
        }
        return actualizado;
    }
    async remove(id) {
        await this.proveedorRepository.delete(id);
    }
};
exports.ProveedorService = ProveedorService;
exports.ProveedorService = ProveedorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(proveedor_entity_1.Proveedor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ProveedorService);
//# sourceMappingURL=proveedor.service.js.map