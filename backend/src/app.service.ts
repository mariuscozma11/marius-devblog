import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const user = this.configService.get<string>('DATABASE_USER');
    if (!user) {
      throw new Error('DATABASE_USER is missing');
    }
    return user;
  }
}

