import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
  Put,
  Query,
  Req,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags
} from '@nestjs/swagger';

import { AuthService } from './auth.service';
import {
  BaseApiErrorResponse,
  BaseApiResponse,
  SwaggerBaseApiResponse
} from './decorators';
import { ReqContext } from './decorators/req-context.decorator';
import { RequestContext } from './decorators/request-context.dto';
import {
  AuthTokenOutput,
  RefreshTokenInput
} from './dto/auth-token-output.dto';
import { CheckUserDto } from './dto/check-user.dto';
import { ForgotPasswordDto, NewPasswordDto } from './dto/forgot-password.dto';
import { SigninDto } from './dto/sign-in.dto';
import { SignupDto } from './dto/sign-up.dto';
import { AuthenticationGuard } from './guards/auth.guard';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }

  //fucntion register user
  @Post('/register')
  async registerUser(@Body() input: SignupDto): Promise<any> {

    // input.passWord = await this.authService.hashPassword(input.passWord);
    return this.authService.createUser(input);
  }

  @Post('/login-student')
  async loginStudent(@Body() input: SigninDto): Promise<AuthTokenOutput> {
    return this.authService.login(input);
  }

  @Post('/login-admin')
  async loginAdmin(@Body() input: SigninDto): Promise<AuthTokenOutput> {
    return this.authService.loginAdmin(input);
  }


  @Post('refresh-token')
  @ApiOperation({
    summary: 'Refresh access token API'
  })
  @ApiResponse({
    status: HttpStatus.OK,
    type: SwaggerBaseApiResponse(AuthTokenOutput)
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    type: BaseApiErrorResponse
  })
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtRefreshGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  async refreshToken(
    @ReqContext() ctx: RequestContext,
    @Body() credential: RefreshTokenInput
  ): Promise<BaseApiResponse<AuthTokenOutput>> {
    const authToken = await this.authService.refreshToken(ctx);
    return { data: authToken, meta: {} };
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('logout')
  logout(@Req() req) {
    return this.authService.logout(req);
  }

}
