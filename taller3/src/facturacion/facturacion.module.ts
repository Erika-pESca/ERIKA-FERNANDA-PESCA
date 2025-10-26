// Importa el decorador @Module, que se usa para definir un módulo en NestJS.
import { Module } from '@nestjs/common';

// Importa TypeOrmModule, que permite conectar entidades a la base de datos.
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa la entidad Facturación (representa la tabla de facturación en la base de datos).
import { Facturacion } from './facturacion.entity';

// Importa la entidad Ventas, necesaria para establecer la relación entre venta y facturación.
import { Ventas } from 'src/ventas/ventas.entity';

// Importa la entidad Usuario, ya que una factura está asociada a un usuario (cliente o administrador).
import { Usuario } from 'src/usuario/usuario.entity';

// Importa el servicio que contiene la lógica de negocio de la facturación.
import { FacturacionService } from './facturacion.service';

// Importa el controlador que maneja las rutas HTTP relacionadas con facturación.
import { FacturacionController } from './facturacion.controller';

// Importa el repositorio personalizado que maneja las operaciones de base de datos relacionadas con facturación.
import { FacturacionRepository } from '../usuario/providers/facturacion.repository';

/**
 * Módulo de Facturación
 * Un módulo agrupa componentes relacionados (controlador, servicio y entidad) en una sola unidad.
 */
@Module({
  // Registra las entidades necesarias para que TypeORM pueda trabajar con ellas (consultas, guardado, relaciones, etc.)
  imports: [
    TypeOrmModule.forFeature([
      Facturacion, // Entidad principal de facturación.
      Ventas,      // Entidad relacionada: cada factura pertenece a una venta.
      Usuario,     // Entidad relacionada: cada factura está asociada a un usuario.
    ]),
  ],

  // Declara el controlador que se encargará de recibir las peticiones HTTP relacionadas con facturación.
  controllers: [FacturacionController],

  // Declara los proveedores (servicios y repositorios) que contienen la lógica del negocio y acceso a datos.
  providers: [FacturacionService, FacturacionRepository],

  // Exporta los servicios y repositorios para que otros módulos (como ventas) puedan usarlos si lo necesitan.
  exports: [FacturacionService, FacturacionRepository],
})

// Clase principal del módulo de facturación.
// Este módulo reúne todo lo relacionado con facturación (entidad, servicio, repositorio y controlador).
export class FacturacionModule {}
