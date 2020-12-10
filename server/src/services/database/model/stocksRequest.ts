import { v4 as uuidv4 } from 'uuid';

export class StocksRequest {
  id: string;
  costBasis:number;
  equity: number;
  quantity: number;
  ticker: string;
  name: string;
  portfolioId?: string;

  constructor(costBasis: number, equity: number, quantity: number, ticker: string, name: string) {
    this.id = uuidv4();
    this.costBasis = costBasis;
    this.equity = equity;
    this.quantity = quantity;
    this.ticker = ticker;
    this.name = name;
  }

  setPortfolioId(portfolioId:string){
    this.portfolioId = portfolioId;
  }
}
