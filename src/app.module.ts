import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AppModule, UserModule, BookmarkModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
