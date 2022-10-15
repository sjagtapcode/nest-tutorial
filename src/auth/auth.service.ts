import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
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
