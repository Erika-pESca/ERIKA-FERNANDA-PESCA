import { Producto } from '../producto/producto.entity';
export declare class Proveedor {
    id_proveedor: number;
    nombre: string;
    telefono: string;
    correo: string;
    productos: Producto[];
    private readonly ENCRYPTION_KEY;
    private readonly IV;
    encryptEmail(): void;
    getDecryptedEmail(): string;
}
