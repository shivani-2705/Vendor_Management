import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PurchaseOrder } from './purchase-orders.entity';

@Injectable()
export class PurchaseOrdersService {
  constructor(
    @InjectRepository(PurchaseOrder)
    private purchaseOrdersRepository: Repository<PurchaseOrder>,
  ) {}

  async create(purchaseOrder: PurchaseOrder): Promise<PurchaseOrder> {
    return this.purchaseOrdersRepository.save(purchaseOrder);
  }

  async findAll(): Promise<PurchaseOrder[]> {
    return this.purchaseOrdersRepository.find();
  }

  async findOne(id: number): Promise<PurchaseOrder> {
    return this.purchaseOrdersRepository.findOneBy({ id });
  }

  async update(id: number, purchaseOrder: Partial<PurchaseOrder>): Promise<void> {
    await this.purchaseOrdersRepository.update(id, purchaseOrder);
  }

  async remove(id: number): Promise<void> {
    await this.purchaseOrdersRepository.delete(id);
  }
}
