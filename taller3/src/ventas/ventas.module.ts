// Importa el decorador @Module, que define un módulo en NestJS.
import { Module } from '@nestjs/common';

// Importa TypeOrmModule, que permite usar repositorios con entidades.
import { TypeOrmModule } from '@nestjs/typeorm';

// Importa la entidad de ventas (representa la tabla ventas en la base de datos).
import { Ventas } from './ventas.entity';

// Importa el servicio de ventas (contiene la lógica de negocio).
import { VentasService } from './ventas.service';

// Importa el controlador que maneja las rutas HTTP de ventas.
import { VentasController } from './ventas.controller';

// Importa el repositorio personalizado de ventas (para manejar consultas avanzadas).
import { VentasRepository } from '../usuario/providers/ventas.repository';

// Importa las entidades relacionadas.
import { Usuario } from 'src/usuario/usuario.entity';
import { Facturacion } from 'src/facturacion/facturacion.entity';

// Importa el módulo de facturación para poder acceder a su servicio y repositorio exportados.
import { FacturacionModule } from 'src/facturacion/facturacion.module';

/**
 * Módulo de Ventas
 * Agrupa todo lo relacionado con el manejo de ventas (entidad, controlador, servicio y repositorio).
 */
@Module({
  // Importa las entidades necesarias y el módulo de facturación.
  imports: [
    TypeOrmModule.forFeature([Ventas, Usuario, Facturacion]),
    FacturacionModule, // 👈 permite usar FacturacionRepository y FacturacionService
  ],

  // Declara el controlador para manejar las peticiones HTTP de ventas.
  controllers: [VentasController],

  // Declara los servicios y repositorios que contienen la lógica del negocio.
  providers: [VentasService, VentasRepository],
})

// Clase principal del módulo de ventas.
export class VentasModule {}
