import {
  BadRequestResponseExample,
  UnauthorizedAuthenticationResponseExample,
  UnauthorizedResponseExample,
  ForbiddenResponseExample,
  NotFoundResponseExample,
  ConflictResponseExample,
  InternalServerErrorResponseExample,
} from './http-errors-examples';

export const HttpBadRequestError = {
  status: 400,
  description: 'Error: Bad Request',
  type: BadRequestResponseExample,
};

export const HttpUnauthorizedError = {
  status: 401,
  description: 'Error: Unauthorized',
  type: UnauthorizedResponseExample,
};

export const HttpUnauthorizedAuthenticationError = {
  status: 401,
  description: 'Error: Unauthorized',
  type: UnauthorizedAuthenticationResponseExample,
};

export const HttpForbiddenError = {
  status: 403,
  description: 'Error: Forbbiden',
  type: ForbiddenResponseExample,
};

export const HttpNotFoundError = {
  status: 404,
  description: 'Error: Not Found',
  type: NotFoundResponseExample,
};

export const HttpConflictError = {
  status: 409,
  description: 'Error: Conflict',
  type: ConflictResponseExample,
};

export const HttpInternalServerError = {
  status: 500,
  description: 'Error: Internal Server Error',
  type: InternalServerErrorResponseExample,
};
