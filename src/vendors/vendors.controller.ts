import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VendorsService } from './vendors.service';
import { Vendor } from './vendors.entity';

@Controller('vendors')
export class VendorsController {
  constructor(private readonly vendorsService: VendorsService) {}

  @Post()
  create(@Body() vendor: Vendor) {
    return this.vendorsService.create(vendor);
  }

  @Get()
  findAll() {
    return this.vendorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vendorsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() vendor: Partial<Vendor>) {
    return this.vendorsService.update(+id, vendor);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vendorsService.remove(+id);
  }
}
