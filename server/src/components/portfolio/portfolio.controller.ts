import { Body, Controller, Get, Put, Query } from '@nestjs/common';
import { PortfolioService } from './portfolio.service';
import {UpdatePortfolioRequest, UpdatePortfolio} from './model';

@Controller('portfolio')
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get()
  getPortfolio(@Query('id') id: string) {
    return this.portfolioService.getPortfolio(id);
  }

  @Put()
  updatePortfolio(@Body() updatePortfolioBody: UpdatePortfolioRequest) {
    console.log("body:", updatePortfolioBody)
    const updatePortfolio = new UpdatePortfolio(updatePortfolioBody.id, updatePortfolioBody.stocks)

    return this.portfolioService.updatePortfolio(updatePortfolio)
  }
}
