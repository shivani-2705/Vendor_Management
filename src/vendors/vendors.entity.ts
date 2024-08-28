import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PurchaseOrder } from '../purchase-orders/purchase-orders.entity';

@Entity()
export class Vendor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  contactDetails: string;

  @Column()
  address: string;

  @Column({ unique: true })
  vendorCode: string;

  @Column({ type: 'float', default: 0 })
  onTimeDeliveryRate: number;

  @Column({ type: 'float', default: 0 })
  qualityRatingAvg: number;

  @Column({ type: 'float', default: 0 })
  averageResponseTime: number;

  @Column({ type: 'float', default: 0 })
  fulfillmentRate: number;

  @OneToMany(() => PurchaseOrder, (po) => po.vendor)
  purchaseOrders: PurchaseOrder[];
}
