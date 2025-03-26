export type LoginUserQueryParams = {
  /**
   * @description The user name for login
   * @type string
   */
  username: string;
  /**
   * @description The password for login in clear text
   * @type string
   */
  password: string;
};

/**
 * @description successful operation
 */
export type LoginUser200 = string;

/**
 * @description Invalid username/password supplied
 */
export type LoginUser400 = unknown;

export type LoginUserQueryResponse = LoginUser200;

export type LoginUserQuery = {
  Response: LoginUser200;
  QueryParams: LoginUserQueryParams;
  Errors: LoginUser400;
};
