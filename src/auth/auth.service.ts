import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  signup() {
    return {
      id: '20',
      success: true,
    };
  }
  login() {
    return {
      id: '2',
      time: Date.now(),
      success: true,
    };
  }
}
