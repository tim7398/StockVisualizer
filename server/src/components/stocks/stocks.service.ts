import { Injectable } from '@nestjs/common';

@Injectable()
export class StockService {
  getStocks(name: string): string {
    return `stocks endpoint works ${name}`;
  }
}
