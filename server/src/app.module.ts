import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import configuration from './config/configuration';

import { ShareModule } from './modules/shared/share.module';
// import { UsersModule } from 'src/modules/users';
// import { DatabaseModule } from './modules/database';
// import { AuthModule } from './modules/auth/auth.module';
// import { UsersModule } from './modules/users/users.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),

    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        return {
          ...config.get('db'),
        };
      },
      inject: [ConfigService],
    }),
    ShareModule,
    // AuthModule,
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
