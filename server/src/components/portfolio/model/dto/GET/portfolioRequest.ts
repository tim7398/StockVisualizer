export class PortfolioRequest {
  id: string;
  stocks: string[];
  totalATGains?: number;
  totalATLosses?: number;

  constructor(stocks: string[]) {
    this.stocks = stocks;
  }
}
