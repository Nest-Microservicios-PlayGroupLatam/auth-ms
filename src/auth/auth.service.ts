import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {

    private readonly logger = new Logger('AuthService');

  onModuleInit() {
    this.$connect();
    this.logger.log('MongoDB Connected');
  }

  onModuleDestroy() {
    this.$disconnect();
    
  }
}