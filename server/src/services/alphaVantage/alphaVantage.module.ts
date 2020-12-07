import { HttpModule, Module } from '@nestjs/common';
import { AlphaVantageService } from '../../services/alphaVantage/alphaVantage.service';

@Module({
  imports: [HttpModule],
  providers: [AlphaVantageService],
  exports: [AlphaVantageService],
})
export class AlphaVantageModule {}
