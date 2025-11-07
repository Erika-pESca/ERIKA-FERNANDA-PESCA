import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa primero los módulos que NO dependen de otros
import { CategoriaModule } from './categoria/categoria.module';
import { ProveedorModule } from './proveedor/proveedor.module';
import { ProductoModule } from './producto/producto.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FacturacionModule } from './facturacion/facturacion.module';
import { VentasModule } from './ventas/ventas.module';
import { VentaProductoModule } from './venta_producto/venta_producto.module';
import { AuthModule } from './auth/auth.module'; // Módulo de autenticación (JWT, bcrypt)

@Module({
  imports: [
    // Conexión a la base de datos PostgreSQL
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '250622', //'250622',
      database: 'ferreteria',
      autoLoadEntities: true, // Detecta automáticamente las entidades
      synchronize: true, // Solo en desarrollo, elimina y recrea tablas
    }),

    //  Módulos de la aplicación
    CategoriaModule,
    ProveedorModule,
    ProductoModule,
    UsuarioModule,
    FacturacionModule,
    VentasModule,
    VentaProductoModule,
    AuthModule,
  ],
})
export class AppModule {}
