import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from '../vendors/vendors.entity';
import { PurchaseOrder } from '../purchase-orders/purchase-orders.entity';

@Injectable()
export class PerformanceService {
  constructor(
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
    @InjectRepository(PurchaseOrder)
    private purchaseOrdersRepository: Repository<PurchaseOrder>,
  ) {}

  async calculatePerformance(vendorId: number): Promise<any> {
    const vendor = await this.vendorsRepository.findOne({ where: { id: vendorId }, relations: ['purchaseOrders'] });
    if (!vendor) {
      throw new Error('Vendor not found');
    }

    const purchaseOrders = vendor.purchaseOrders;

    if (purchaseOrders.length === 0) {
      return {
        onTimeDeliveryRate: 0,
        qualityRatingAvg: 0,
        averageResponseTime: 0,
        fulfillmentRate: 0,
      };
    }

    const totalOrders = purchaseOrders.length;
    let onTimeOrders = 0;
    let totalQualityRating = 0;
    let totalResponseTime = 0;
    let fulfilledOrders = 0;

    for (const po of purchaseOrders) {
      if (po.status === 'completed') {
        if (po.deliveryDate <= po.issueDate) {
          onTimeOrders++;
        }
        if (po.qualityRating) {
          totalQualityRating += po.qualityRating;
        }
        if (po.acknowledgmentDate) {
          const responseTime = new Date(po.acknowledgmentDate).getTime() - new Date(po.issueDate).getTime();
          totalResponseTime += responseTime;
        }
        if (po.status === 'completed' && po.issueDate && po.deliveryDate) {
          fulfilledOrders++;
        }
      }
    }

    return {
      onTimeDeliveryRate: (onTimeOrders / totalOrders) * 100,
      qualityRatingAvg: totalQualityRating / purchaseOrders.length,
      averageResponseTime: totalResponseTime / purchaseOrders.length,
      fulfillmentRate: (fulfilledOrders / totalOrders) * 100,
    };
  }
}
