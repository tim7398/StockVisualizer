import { Injectable } from '@nestjs/common';
import { AlphaVantageService } from '../../services/alphaVantage/alphaVantage.service';
import { DatabaseService } from '../../services/database/database.service';
import { Portfolio, TABLE_NAMES } from '../../models/database';

@Injectable()
export class StockService {
  constructor(
    private alphaVantageService: AlphaVantageService,
    private databaseService: DatabaseService,
  ) {}

  async getStocks(name: string): Promise<any> {
    // Commented out the database code. This is an example of how to use it.
    // const portfolioItem = new Portfolio([
    //   'IBM',
    //   'PLTR',
    //   'DKNG',
    //   'GME',
    //   'SPCE',
    //   'APL',
    // ]);
    const quote = await this.alphaVantageService.getQuote(name);
    // const res = await this.databaseService.postItem(
    //   TABLE_NAMES.PORTFOLIO,
    //   portfolioItem,
    // ); 

    return quote;
  }
}
