import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../services/database/database.service';
import { Portfolio, TABLE_NAMES } from '../../models/database';

@Injectable()
export class PortfolioService {
  constructor(private databaseService: DatabaseService) {}

  async getPortfolio(id: string): Promise<any> {
    const portfolio = await this.databaseService.getItem(TABLE_NAMES.PORTFOLIO, id);

    return portfolio;
  }
}
