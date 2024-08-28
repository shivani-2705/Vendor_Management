import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PerformanceService } from './performance.service';
import { Vendor } from '../vendors/vendors.entity';
import { PurchaseOrder } from '../purchase-orders/purchase-orders.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vendor, PurchaseOrder])],
  providers: [PerformanceService],
  exports: [PerformanceService],
})
export class PerformanceModule {}
