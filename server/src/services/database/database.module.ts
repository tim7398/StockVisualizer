import { HttpModule, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Module({
  imports: [HttpModule],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
