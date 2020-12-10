import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';
import { PortfolioRequest } from './model';
import { StocksRequest } from './model/stocksRequest';

@Injectable()
export class DatabaseService {
  dynamoDB: AWS.DynamoDB.DocumentClient;

  constructor() {
    AWS.config.update({ region: 'us-east-1' });
    this.dynamoDB = new AWS.DynamoDB.DocumentClient();
  }

  async getItem(tableName: string, key: string) {
    try {
      const params = {
        TableName: tableName,
        Key: {
          id: key,
        },
      };
      return this.dynamoDB.get(params).promise();
    } catch (err) {
      console.log('error retrieving from Dynamo:', err);
      return err;
    }
  }

  //item can be typed to be portfolio or profile
  async postItem(tableName: string, item: PortfolioRequest | StocksRequest) {
    try {
      const params = {
        TableName: tableName,
        Item: item,
        ReturnValues:"ALL_OLD"
      };

      return this.dynamoDB.put(params).promise();
    } catch (err) {
      console.log('error for putItem', err);
      return err;
    }
  }
}
