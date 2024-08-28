import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VendorsModule } from './vendors/vendors.module';
import { PurchaseOrdersModule } from './purchase-orders/purchase-orders.module';
import { PerformanceModule } from './performance/performance.module';
import { Vendor } from './vendors/vendors.entity';
import { PurchaseOrder } from './purchase-orders/purchase-orders.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'password',
      database: 'vendor_management',
      entities: [Vendor, PurchaseOrder],
      synchronize: true,
    }),
    VendorsModule,
    PurchaseOrdersModule,
    PerformanceModule,
  ],
})
export class AppModule {}
