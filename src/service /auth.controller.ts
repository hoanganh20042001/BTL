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

import {
  BaseApiErrorResponse,
  BaseApiResponse,
  SwaggerBaseApiResponse
} from '../dto/auth/decorators';
import { ReqContext } from '../dto/auth/decorators/req-context.decorator';
import { RequestContext } from '../dto/auth/decorators/request-context.dto';
import {
  AuthTokenOutput,
  RefreshTokenInput
} from '../dto/auth/dto/auth-token-output.dto';
import { CheckUserDto } from '../dto/auth/dto/check-user.dto';
import { ForgotPasswordDto, NewPasswordDto } from '../dto/auth/dto/forgot-password.dto'
import { SigninDto, forgetPassDto } from '../dto/auth/dto/sign-in.dto';
import { SignupDto, confirmationInput, resetPassword } from '../dto/auth/dto/sign-up.dto';
import { AuthenticationGuard } from '../dto/auth/guards/auth.guard';
import { JwtRefreshGuard } from '../dto/auth/guards/jwt-refresh.guard';
import { AuthService } from 'src/business/auth.service';

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

  @Post('/login-client')
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

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('forget-password')
  async forgetPassword(@Body() input: forgetPassDto) {
    return this.authService.forgetPassword(input);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('confirm-forget-password')
  async confirmForgetPassword(@Body() input: confirmationInput) {
    return this.authService.confirmationForgetPassword(input);
  }

  @UseGuards(AuthenticationGuard)
  @ApiBearerAuth()
  @Post('reset-password')
  async resetPassword(@Body() input: resetPassword) {
    return this.authService.resetPassword(input);
  }

}
