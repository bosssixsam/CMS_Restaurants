import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

// import * as providers from './services';

@Global()
@Module({
  imports: [ConfigModule],
  // providers: Object.values(providers),
  // exports: Object.values(providers),
})
export class ShareModule {}
