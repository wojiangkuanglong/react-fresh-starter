import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { loginUser } from '../../api/user/loginUser.ts';
import type {
  LoginUser400,
  LoginUserQueryParams,
  LoginUserQueryResponse,
} from '../../model/user/LoginUser.ts';

export const loginUserQueryKey = (params: LoginUserQueryParams) =>
  [{ url: '/user/login' }, ...(params ? [params] : [])] as const;

export type LoginUserQueryKey = ReturnType<typeof loginUserQueryKey>;

export function loginUserQueryOptions(
  params: LoginUserQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = loginUserQueryKey(params);
  return queryOptions<
    LoginUserQueryResponse,
    ResponseErrorConfig<LoginUser400>,
    LoginUserQueryResponse,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return loginUser(params, config);
    },
  });
}

/**
 * @summary Logs user into the system
 * {@link /user/login}
 */
export function useLoginUser<
  TData = LoginUserQueryResponse,
  TQueryData = LoginUserQueryResponse,
  TQueryKey extends QueryKey = LoginUserQueryKey,
>(
  params: LoginUserQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        LoginUserQueryResponse,
        ResponseErrorConfig<LoginUser400>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? loginUserQueryKey(params);

  const query = useQuery({
    ...(loginUserQueryOptions(params, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<LoginUser400>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
