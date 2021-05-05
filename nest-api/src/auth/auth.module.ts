import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [UsersModule, PassportModule, JwtModule.registerAsync({
    useFactory: (config: ConfigService) => {
      return {
        secret: config.get('JWT_SECRET'),
        signOptions: {
          expiresIn: '1h'
        }
      }
    },
    inject: [ConfigService]
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModule {
}
