import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../services/database/database.service';
import { PortfolioRequest, TABLE_NAMES } from 'src/services/database/model';
import { PortfolioResponse, UpdatePortfolio } from './model';
import { StocksRequest } from 'src/services/database/model/stocksRequest';

@Injectable()
export class PortfolioService {
  constructor(private databaseService: DatabaseService) { }

  async getPortfolio(id: string): Promise<PortfolioResponse> {
    const portfolio = await this.databaseService.getItem(
      TABLE_NAMES.PORTFOLIO,
      id,
    );

    return portfolio;
  }

  //TODO add portfolioid to the stocks table
  async updatePortfolio(updatePortfolio: UpdatePortfolio): Promise<any> {

    const stockIds = [];



    for (let i = 0; i < updatePortfolio.stocks.length; i++) {
      const stock = updatePortfolio.stocks[i]
      const equity = stock.costBasis * stock.quantity
      const stockRequest = new StocksRequest(stock.costBasis, equity, stock.quantity, stock.ticker, stock.name)
      await this.databaseService.postItem(TABLE_NAMES.STOCKS, stockRequest)
      stockIds.push(stockRequest.id)
    }

    const portfolio = new PortfolioRequest(stockIds)
    await this.databaseService.postItem(
      TABLE_NAMES.PORTFOLIO,
      portfolio
    );

    return { id: portfolio.id };
  }
}
