import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class AlphaVantageService {
  constructor(private httpService: HttpService) {}

  async getQuote(name: string): Promise<any> {
    const res = await this.httpService
      .get(
        `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${name}&apikey=${process.env.API_KEY}`,
      )
      .toPromise();
    return res.data;
  }
}
