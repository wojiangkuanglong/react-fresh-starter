import type { User } from '../User.ts';

/**
 * @description successful operation
 */
export type CreateUsersWithArrayInputError = unknown;

/**
 * @description List of user object
 */
export type CreateUsersWithArrayInputMutationRequest = User[];

export type CreateUsersWithArrayInputMutationResponse = unknown;

export type CreateUsersWithArrayInputMutation = {
  Response: any;
  Request: CreateUsersWithArrayInputMutationRequest;
  Errors: any;
};
