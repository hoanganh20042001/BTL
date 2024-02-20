import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class AuthTokenOutput {
  @Expose()
  @ApiProperty()
  accessToken: string;

  @Expose()
  @ApiProperty()
  refreshToken: string;
}
export class AuthTokenOutput2 {
  @Expose()
  @ApiProperty()
  accessToken: string;

  @Expose()
  @ApiProperty()
  refreshToken: string;
}
export class UserAccessTokenClaims {
  @Expose()
  id: number;
  @Expose()
  username: string;
  @Expose()
  role: string;
}

export class UserRefreshTokenClaims {
  id: number;
}

export class RefreshTokenInput {
  @IsNotEmpty()
  @ApiProperty()
  refreshToken: string;
}

export class saveTokenCodeDto {
  @IsNotEmpty()
  @ApiProperty()
  code: string;

  @IsNotEmpty()
  @ApiProperty()
  accessToken: string;

  @IsNotEmpty()
  @ApiProperty()
  refreshToken: string;
}
