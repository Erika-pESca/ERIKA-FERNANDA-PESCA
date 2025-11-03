"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proveedor = void 0;
const typeorm_1 = require("typeorm");
const producto_entity_1 = require("../producto/producto.entity");
const crypto = __importStar(require("crypto"));
let Proveedor = class Proveedor {
    id_proveedor;
    nombre;
    telefono;
    correo;
    productos;
    ENCRYPTION_KEY = Buffer.from('12345678901234567890123456789012');
    IV = Buffer.from('1234567890123456');
    encryptEmail() {
        if (!/^[0-9a-f]+$/.test(this.correo)) {
            const cipher = crypto.createCipheriv('aes-256-cbc', this.ENCRYPTION_KEY, this.IV);
            let encrypted = cipher.update(this.correo, 'utf8', 'hex');
            encrypted += cipher.final('hex');
            this.correo = encrypted;
        }
    }
    getDecryptedEmail() {
        try {
            const decipher = crypto.createDecipheriv('aes-256-cbc', this.ENCRYPTION_KEY, this.IV);
            let decrypted = decipher.update(this.correo, 'hex', 'utf8');
            decrypted += decipher.final('utf8');
            return decrypted;
        }
        catch {
            return this.correo;
        }
    }
};
exports.Proveedor = Proveedor;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Proveedor.prototype, "id_proveedor", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proveedor.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proveedor.prototype, "telefono", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Proveedor.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => producto_entity_1.Producto, (producto) => producto.proveedor),
    __metadata("design:type", Array)
], Proveedor.prototype, "productos", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Proveedor.prototype, "encryptEmail", null);
exports.Proveedor = Proveedor = __decorate([
    (0, typeorm_1.Entity)()
], Proveedor);
//# sourceMappingURL=proveedor.entity.js.map