import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../services/database/database.service';
import { TABLE_NAMES } from 'src/services/database/model';
import { ProfileResponse } from './model';

@Injectable()
export class ProfileService {
  constructor(private databaseService: DatabaseService) { }

  async getProfile(id: string): Promise<ProfileResponse> {
    const profile = await this.databaseService.getItem(
      TABLE_NAMES.PROFILE,
      id,
    );

    const portfolios = []

    for (let i = 0; i < profile.Item.portfolios.length; i++) {
      const portfolioId = profile.Item.portfolios[i]

      //TODO potential bottleneck here. Can make the calls in parallel if there isn't a way to do this in one call
      const portfolio = await this.databaseService.getItem(TABLE_NAMES.PORTFOLIO, portfolioId)
      
      portfolios.push(portfolio.Item)
    }

    profile.Item.portfolios = portfolios

    return profile;
  }
}
