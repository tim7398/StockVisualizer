import {Stocks} from './stocks'

export class UpdatePortfolio {
    id: string;
    stocks: Stocks[];

    constructor(id: string, stocks:Stocks[]){
      this.id = id;
      this.stocks = stocks;
    }
  }
