import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../services/database/database.service';
import { TABLE_NAMES } from 'src/services/database/model';
import { PortfolioResponse } from './model';

@Injectable()
export class PortfolioService {
  constructor(private databaseService: DatabaseService) {}

  async getPortfolio(id: string): Promise<PortfolioResponse> {
    const portfolio = await this.databaseService.getItem(
      TABLE_NAMES.PORTFOLIO,
      id,
    );

    return portfolio;
  }
}
