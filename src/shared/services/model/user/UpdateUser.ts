import type { User } from '../User.ts';

export type UpdateUserPathParams = {
  /**
   * @description name that need to be updated
   * @type string
   */
  username: string;
};

/**
 * @description Invalid user supplied
 */
export type UpdateUser400 = unknown;

/**
 * @description User not found
 */
export type UpdateUser404 = unknown;

/**
 * @description Updated user object
 */
export type UpdateUserMutationRequest = User;

export type UpdateUserMutationResponse = unknown;

export type UpdateUserMutation = {
  Response: any;
  Request: UpdateUserMutationRequest;
  PathParams: UpdateUserPathParams;
  Errors: UpdateUser400 | UpdateUser404;
};
