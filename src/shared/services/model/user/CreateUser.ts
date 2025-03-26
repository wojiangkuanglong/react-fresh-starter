import type { User } from '../User.ts';

/**
 * @description successful operation
 */
export type CreateUserError = unknown;

/**
 * @description Created user object
 */
export type CreateUserMutationRequest = User;

export type CreateUserMutationResponse = unknown;

export type CreateUserMutation = {
  Response: any;
  Request: CreateUserMutationRequest;
  Errors: any;
};
