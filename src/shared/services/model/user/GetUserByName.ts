import type { User } from '../User.ts';

export type GetUserByNamePathParams = {
  /**
   * @description The name that needs to be fetched. Use user1 for testing.
   * @type string
   */
  username: string;
};

/**
 * @description successful operation
 */
export type GetUserByName200 = User;

/**
 * @description Invalid username supplied
 */
export type GetUserByName400 = unknown;

/**
 * @description User not found
 */
export type GetUserByName404 = unknown;

export type GetUserByNameQueryResponse = GetUserByName200;

export type GetUserByNameQuery = {
  Response: GetUserByName200;
  PathParams: GetUserByNamePathParams;
  Errors: GetUserByName400 | GetUserByName404;
};
