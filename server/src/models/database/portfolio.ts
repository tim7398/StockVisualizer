import { v4 as uuidv4 } from 'uuid';

export class Portfolio {
  id: string;
  stocks: string[];

  constructor(stocks: string[]) {
    this.id = uuidv4();
    this.stocks = stocks;
  }
}
