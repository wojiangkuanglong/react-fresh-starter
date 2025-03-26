import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { getInventory } from '../../api/store/getInventory.ts';
import type { GetInventoryQueryResponse } from '../../model/store/GetInventory.ts';

export const getInventoryQueryKey = () => [{ url: '/store/inventory' }] as const;

export type GetInventoryQueryKey = ReturnType<typeof getInventoryQueryKey>;

export function getInventoryQueryOptions(
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = getInventoryQueryKey();
  return queryOptions<
    GetInventoryQueryResponse,
    ResponseErrorConfig<Error>,
    GetInventoryQueryResponse,
    typeof queryKey
  >({
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getInventory(config);
    },
  });
}

/**
 * @description Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 * {@link /store/inventory}
 */
export function useGetInventory<
  TData = GetInventoryQueryResponse,
  TQueryData = GetInventoryQueryResponse,
  TQueryKey extends QueryKey = GetInventoryQueryKey,
>(
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetInventoryQueryResponse,
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
  const queryKey = queryOptions?.queryKey ?? getInventoryQueryKey();

  const query = useQuery({
    ...(getInventoryQueryOptions(config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<Error>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
