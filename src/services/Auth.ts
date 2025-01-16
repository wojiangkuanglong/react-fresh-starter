/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import type { AuthUserType } from './data-contracts';
import { ContentType, HttpClient, type RequestParams } from './http-client';

export class Auth<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Auth
   * @name Login
   * @request POST:/auth
   * @response `200` `string` Authorize and returns jwt token
   */
  login = (data: AuthUserType, params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/auth`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      format: 'json',
      ...params,
    });
  /**
   * No description
   *
   * @tags Auth
   * @name Refresh
   * @request POST:/auth/refresh
   * @secure
   * @response `200` `string` utilized current token and returns new token
   */
  refresh = (params: RequestParams = {}) =>
    this.request<string, any>({
      path: `/auth/refresh`,
      method: 'POST',
      secure: true,
      format: 'json',
      ...params,
    });
}
