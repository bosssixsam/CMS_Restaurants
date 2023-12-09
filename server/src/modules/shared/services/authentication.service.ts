import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

// import { CONFIG } from 'src/config';

import { IAuthenticationPayload } from 'modules/shared/interfaces';

@Injectable()
export class AuthenticationService {
  constructor(
    private jwt_nest: JwtService,
    private config: ConfigService,
  ) {}

  public signJWT(data: IAuthenticationPayload) {
    const payload = {
      sub: data.id,
      username: data.username,
      roles: [],
    };

    return {
      access_token: this.jwt_nest.sign(payload),
      refresh_token: this.getRefreshToken(payload.sub),
    };
  }

  private getRefreshToken(sub: string): string {
    return this.jwt_nest.sign(
      { sub },
      {
        secret: this.config.get('jwt_secret'),
        expiresIn: '7d', // Set greater than the expiresIn of the access_token
      },
    );
  }
}
