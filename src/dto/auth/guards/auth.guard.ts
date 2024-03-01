import {
  ExecutionContext,
  Injectable,
  RequestTimeoutException,
  UnauthorizedException
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { MESSAGE } from 'src/messageError';

// import { AuthService } from '../../auth/auth.service';
import { STRATEGY_JWT_AUTH } from '../constants/role.constant';
import { AuthService } from 'src/business/auth.service';
@Injectable()
export class AuthenticationGuard extends AuthGuard(STRATEGY_JWT_AUTH) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async canActivate(context: ExecutionContext): Promise<any> {
    // Add your custom authentication logic here
    const request = context.switchToHttp().getRequest();
    if (request.headers.authorization) {
      const token = request.headers.authorization.split('Bearer ')[1];
      const payload: any = await this.authService.decodeToken(token);
      request.user = payload;
      return true;

      // const latestToken = await this.authService.getActiveUserToken(payload?.sub, payload?.role);
      // if (
      //   latestToken &&
      //   request.headers.authorization.split('Bearer ')[1] !== latestToken.token
      // ) {
      //   throw new RequestTimeoutException(MESSAGE.jwt_is_expired);
      // }
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
