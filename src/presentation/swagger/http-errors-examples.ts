import { ApiProperty } from '@nestjs/swagger';

export class BadRequestResponseExample {
  @ApiProperty({
    example: 400,
  })
  statusCode: number;

  @ApiProperty({
    example: 'One or more request fields are invalid',
  })
  message: string;

  @ApiProperty({
    example: 'Bad Request',
  })
  error: string;
}

export class UnauthorizedResponseExample {
  @ApiProperty({
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Unauthorized!',
  })
  message: string;

  @ApiProperty({
    example: 'Unauthorized',
  })
  error: string;
}

export class UnauthorizedAuthenticationResponseExample {
  @ApiProperty({
    example: 401,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Invalid Credentials',
  })
  message: string;

  @ApiProperty({
    example: 'Unauthorized',
  })
  error: string;
}

export class ForbiddenResponseExample {
  @ApiProperty({
    example: 403,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Forbidden resource',
  })
  message: string;

  @ApiProperty({
    example: 'Forbidden',
  })
  error: string;
}

export class NotFoundResponseExample {
  @ApiProperty({
    example: 404,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Entity was not found!',
  })
  message: string;

  @ApiProperty({
    example: 'Not Found',
  })
  error: string;
}

export class ConflictResponseExample {
  @ApiProperty({
    example: 409,
  })
  statusCode: number;

  @ApiProperty({
    example: 'An unique field is already in use!',
  })
  message: string;

  @ApiProperty({
    example: 'Conflict',
  })
  error: string;
}

export class InternalServerErrorResponseExample {
  @ApiProperty({
    example: 500,
  })
  statusCode: number;

  @ApiProperty({
    example: 'Internal Server Error',
  })
  message: string;

  @ApiProperty({
    example: 'Internal Server Error',
  })
  error: string;
}
