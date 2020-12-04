import { Module } from '@nestjs/common';
import { StockController } from './stocks.controller';
import { StockService } from './stocks.service';
import { AlphaVantageModule } from '../../services/alphaVantage/alphaVantage.module';

@Module({
  imports: [AlphaVantageModule],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
