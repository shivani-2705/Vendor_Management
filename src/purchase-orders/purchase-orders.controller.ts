import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { PurchaseOrdersService } from './purchase-orders.service';
import { PurchaseOrder } from './purchase-orders.entity';

@Controller('purchase-orders')
export class PurchaseOrdersController {
  constructor(private readonly purchaseOrdersService: PurchaseOrdersService) {}

  @Post()
  create(@Body() purchaseOrder: PurchaseOrder) {
    return this.purchaseOrdersService.create(purchaseOrder);
  }

  @Get()
  findAll() {
    return this.purchaseOrdersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.purchaseOrdersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() purchaseOrder: Partial<PurchaseOrder>) {
    return this.purchaseOrdersService.update(+id, purchaseOrder);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.purchaseOrdersService.remove(+id);
  }
}
