import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendor } from './vendors.entity';

@Injectable()
export class VendorsService {
  constructor(
    @InjectRepository(Vendor)
    private vendorsRepository: Repository<Vendor>,
  ) {}

  async create(vendor: Vendor): Promise<Vendor> {
    return this.vendorsRepository.save(vendor);
  }

  async findAll(): Promise<Vendor[]> {
    return this.vendorsRepository.find();
  }

  async findOne(id: number): Promise<Vendor> {
    return this.vendorsRepository.findOneBy({ id });
  }

  async update(id: number, vendor: Partial<Vendor>): Promise<void> {
    await this.vendorsRepository.update(id, vendor);
  }

  async remove(id: number): Promise<void> {
    await this.vendorsRepository.delete(id);
  }
}
