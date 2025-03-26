import type { User } from '../User.ts';

/**
 * @description successful operation
 */
export type CreateUsersWithListInputError = unknown;

/**
 * @description List of user object
 */
export type CreateUsersWithListInputMutationRequest = User[];

export type CreateUsersWithListInputMutationResponse = unknown;

export type CreateUsersWithListInputMutation = {
  Response: any;
  Request: CreateUsersWithListInputMutationRequest;
  Errors: any;
};
