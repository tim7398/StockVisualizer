import { Controller, Get, Query } from '@nestjs/common';
import { StockService } from './stocks.service';

@Controller('stocks')
export class StockController {
  constructor(private readonly stockService: StockService) {}

  @Get()
  getStocks(@Query('name') name: string) {
    return this.stockService.getStocks(name.toUpperCase());
  }
}
