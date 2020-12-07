import { Module } from '@nestjs/common';
import { StockController } from './stocks.controller';
import { StockService } from './stocks.service';
import { AlphaVantageModule } from '../../services/alphaVantage/alphaVantage.module';
import { DatabaseModule } from '../../services/database/database.module';

@Module({
  imports: [AlphaVantageModule, DatabaseModule],
  controllers: [StockController],
  providers: [StockService],
})
export class StockModule {}
