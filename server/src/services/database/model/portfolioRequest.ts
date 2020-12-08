import { v4 as uuidv4 } from 'uuid';

export class PortfolioRequest {
  id: string;
  stocks: string[];
  totalATGains?: number;
  totalATLosses?: number;

  constructor(stocks: string[]) {
    this.id = uuidv4();
    this.stocks = stocks;
    //TODO this needs to be dynamic
    this.totalATGains = 0;
    this.totalATLosses = 0;
  }
}
