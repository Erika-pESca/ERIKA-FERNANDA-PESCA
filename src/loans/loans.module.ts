import { Module } from '@nestjs/common';
import { LoanController } from '../loans/loans.controller';

@Module({
  controllers: [LoanController],
})
export class LoanModule {}
