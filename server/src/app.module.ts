import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockModule } from './components/stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import { PortfolioModule } from './components/portfolio/portfolio.module';
import { ProfileModule } from './components/profile/profile.module';

@Module({
  imports: [
    StockModule,
    PortfolioModule,
    ProfileModule,
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
