import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { findPetsByStatus } from '../../api/pet/findPetsByStatus.ts';
import type {
  FindPetsByStatus400,
  FindPetsByStatusQueryParams,
  FindPetsByStatusQueryResponse,
} from '../../model/pet/FindPetsByStatus.ts';

export const findPetsByStatusQueryKey = (params: FindPetsByStatusQueryParams) =>
  [{ url: '/pet/findByStatus' }, ...(params ? [params] : [])] as const;

export type FindPetsByStatusQueryKey = ReturnType<typeof findPetsByStatusQueryKey>;

export function findPetsByStatusQueryOptions(
  params: FindPetsByStatusQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = findPetsByStatusQueryKey(params);
  return queryOptions<
    FindPetsByStatusQueryResponse,
    ResponseErrorConfig<FindPetsByStatus400>,
    FindPetsByStatusQueryResponse,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return findPetsByStatus(params, config);
    },
  });
}

/**
 * @description Multiple status values can be provided with comma separated strings
 * @summary Finds Pets by status
 * {@link /pet/findByStatus}
 */
export function useFindPetsByStatus<
  TData = FindPetsByStatusQueryResponse,
  TQueryData = FindPetsByStatusQueryResponse,
  TQueryKey extends QueryKey = FindPetsByStatusQueryKey,
>(
  params: FindPetsByStatusQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FindPetsByStatusQueryResponse,
        ResponseErrorConfig<FindPetsByStatus400>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? findPetsByStatusQueryKey(params);

  const query = useQuery({
    ...(findPetsByStatusQueryOptions(params, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<FindPetsByStatus400>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
