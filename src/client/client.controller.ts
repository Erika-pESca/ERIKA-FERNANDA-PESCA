import { Controller, Get, Post, Put, Patch, Delete, Body, Param } from '@nestjs/common';
import { CreateClientDto } from '../dtos/client.dto';

@Controller('clients')
export class ClientController {
  //  private guardamos clientes en memoria temporalmente
  // cada cliente tiene las propieddes de createClientDto + un id: number
  private clients: (CreateClientDto & { id: number })[] = [];

  // GET de listar todos los clientes
  @Get()
  getlistaClients() {
    return this.clients; // devuelve la lista de clientes
  }

  // GET de un cliente por id
  @Get(':id')
  getClientById(@Param('id') id: string) {
    //this.clients -> guarda todos los clientes en el controlador
    // .find -> busca un cliente en la lista de clientes si no lo encuentra devuelve undefined
    // (c) => c.id  -> verifica el id del cliente es igual  al id extraido de la url  === Number(id));
    const client = this.clients.find((c) => c.id === Number(id));
    if (!client) {
      return `No existe un cliente con id: ${id}`;
    }
    return `El cliente ${client.name} tiene el número de id: ${id}`;
  }

  // POST cracion de un cliente
  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    const newClient = {
      id: this.clients.length + 1, // generamos un id automático
      ...createClientDto,  // nos traea toda la infomacion que se encuentra en el dto para crear el cliente
    };
    this.clients.push(newClient); // agrega un nuevo cliente a la lista
    return {
      message: 'Cliente creado exitosamente',
      data: newClient,
    };
  }

  // PUT actualiza completamente un cliente existente
  //reemplazar todo un cliente por uno nuevo.
  @Put(':id')
  // UPDATE (actualizar)
  updateClient(@Param('id') id: string, @Body() dto: CreateClientDto) {
    // busca el índice del cliente
    //.findIndex(...) recorre toda la funcion
    const index = this.clients.findIndex((c) => c.id === Number(id));
    if (index === -1) {
      return { message: `No existe un cliente con id: ${id}` };
    }

    // reemplaza toda la información del cliente
    this.clients[index] = { id: Number(id), ...dto };

    return {
      message: 'Cliente actualizado completamente',
      data: this.clients[index],
    };
  }

  // PATCH actualiza parcialmente un cliente existente
  // Modifica algunos campos de un cliente ya creado
  @Patch(':id')
  patchClient(@Param('id') id: string, @Body() data: Partial<CreateClientDto>) { //  los datos (data) deben tener la forma del CreateClientDto, pero todos sus campos son opcionales. 
    // busca el cliente existente
    const client = this.clients.find((c) => c.id === Number(id));
    if (!client) {
      return { message: `No existe un cliente con id: ${id}` };
    }

    // mezcla la información antigua con la nueva (solo campos enviados)
    Object.assign(client, data);

    return {
      message: 'Cliente actualizado parcialmente',
      data: client,
    };
  }

  // DELETE elimina un cliente por id
  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    // busca el índice del cliente
    const index = this.clients.findIndex((c) => c.id === Number(id));
    if (index === -1) {
      return { message: `No existe un cliente con id: ${id}` };
    }

    // elimina el cliente del arreglo
    const deleted = this.clients.splice(index, 1);

    return {
      message: 'Cliente eliminado correctamente',
      data: deleted[0],
    };
  }
}
