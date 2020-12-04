import { Injectable } from '@nestjs/common';
import { AlphaVantageService } from '../../services/alphaVantage/alphaVantage.service';

@Injectable()
export class StockService {
  constructor(private alphaVantageService: AlphaVantageService) {}

  async getStocks(name: string): Promise<any> {
    const quote = await this.alphaVantageService.getQuote(name);
    return quote;
  }
}
