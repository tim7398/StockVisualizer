import { Controller, Get, Query } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @Get()
  getPortfolio(@Query('id') id: string) {
    return this.profileService.getProfile(id);
  }
}
