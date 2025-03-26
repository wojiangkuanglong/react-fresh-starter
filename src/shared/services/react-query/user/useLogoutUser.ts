import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { logoutUser } from '../../api/user/logoutUser.ts';
import type { LogoutUserQueryResponse } from '../../model/user/LogoutUser.ts';

export const logoutUserQueryKey = () => [{ url: '/user/logout' }] as const;

export type LogoutUserQueryKey = ReturnType<typeof logoutUserQueryKey>;

export function logoutUserQueryOptions(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = logoutUserQueryKey();
  return queryOptions<
    LogoutUserQueryResponse,
    ResponseErrorConfig<Error>,
    LogoutUserQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return logoutUser(config);
    },
  });
}

/**
 * @summary Logs out current logged in user session
 * {@link /user/logout}
 */
export function useLogoutUser<
  TData = LogoutUserQueryResponse,
  TQueryData = LogoutUserQueryResponse,
  TQueryKey extends QueryKey = LogoutUserQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        LogoutUserQueryResponse,
        ResponseErrorConfig<Error>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? logoutUserQueryKey();

  const query = useQuery({
    ...(logoutUserQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
