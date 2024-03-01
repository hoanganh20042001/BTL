import {
  BadRequestException,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MESSAGE } from 'src/messageError';

import { STRATEGY_JWT_REFRESH } from '../constants/role.constant';
import { AuthService } from 'src/business/auth.service';

@Injectable()
export class JwtRefreshGuard extends AuthGuard(STRATEGY_JWT_REFRESH) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    // Add your custom authentication logic here
    const request = context.switchToHttp().getRequest();
    if (request.headers.authorization) {
      const token: any = await this.authService.decodeToken(
        request.headers.authorization.split('Bearer ')[1]
      );
      const latestToken = await this.authService.getActiveUserToken(token?.id);
      if (
        latestToken &&
        request.headers.authorization.split('Bearer ')[1] !== latestToken.token
      ) {
        throw new BadRequestException(MESSAGE.jwt_is_expired);
      }
    }
    // for example, call super.logIn(request) to establish a session.
    return super.canActivate(context);
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  handleRequest(err, user, info) {
    // You can throw an exception based on either "info" or "err" arguments
    if (err || !user) {
      throw err || new UnauthorizedException(`${info}`);
    }
    return user;
  }
}
