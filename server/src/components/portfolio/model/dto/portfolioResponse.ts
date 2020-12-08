export class PortfolioResponse {
  id: string;
  stocks: string[];
  name: string;
  totalATGains?: number;
  totalATLosses?: number;

  constructor(stocks: string[]) {
    this.stocks = stocks;
  }
}
