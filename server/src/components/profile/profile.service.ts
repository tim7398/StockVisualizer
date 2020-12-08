import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../../services/database/database.service';
import { TABLE_NAMES } from 'src/services/database/model';
import { ProfileResponse } from './model';

@Injectable()
export class ProfileService {
  constructor(private databaseService: DatabaseService) {}

  async getProfile(id: string): Promise<ProfileResponse> {
    const portfolio = await this.databaseService.getItem(
      TABLE_NAMES.PROFILE,
      id,
    );

    return portfolio;
  }
}
