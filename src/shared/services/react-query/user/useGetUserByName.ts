import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { getUserByName } from '../../api/user/getUserByName.ts';
import type {
  GetUserByName400,
  GetUserByName404,
  GetUserByNamePathParams,
  GetUserByNameQueryResponse,
} from '../../model/user/GetUserByName.ts';

export const getUserByNameQueryKey = ({
  username,
}: { username: GetUserByNamePathParams['username'] }) =>
  [{ url: '/user/:username', params: { username: username } }] as const;

export type GetUserByNameQueryKey = ReturnType<typeof getUserByNameQueryKey>;

export function getUserByNameQueryOptions(
  { username }: { username: GetUserByNamePathParams['username'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = getUserByNameQueryKey({ username });
  return queryOptions<
    GetUserByNameQueryResponse,
    ResponseErrorConfig<GetUserByName400 | GetUserByName404>,
    GetUserByNameQueryResponse,
    typeof queryKey
  >({
    enabled: !!username,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getUserByName({ username }, config);
    },
  });
}

/**
 * @summary Get user by user name
 * {@link /user/:username}
 */
export function useGetUserByName<
  TData = GetUserByNameQueryResponse,
  TQueryData = GetUserByNameQueryResponse,
  TQueryKey extends QueryKey = GetUserByNameQueryKey,
>(
  { username }: { username: GetUserByNamePathParams['username'] },
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetUserByNameQueryResponse,
        ResponseErrorConfig<GetUserByName400 | GetUserByName404>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getUserByNameQueryKey({ username });

  const query = useQuery({
    ...(getUserByNameQueryOptions({ username }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<GetUserByName400 | GetUserByName404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
