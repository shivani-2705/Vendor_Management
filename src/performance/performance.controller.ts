import { Controller, Get, Param } from '@nestjs/common';
import { PerformanceService } from './performance.service';

@Controller('vendors')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get(':id/performance')
  async getPerformance(@Param('id') id: string) {
    return this.performanceService.calculatePerformance(+id);
  }
}
