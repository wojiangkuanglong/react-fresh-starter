import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { getOrderById } from '../../api/store/getOrderById.ts';
import type {
  GetOrderById400,
  GetOrderById404,
  GetOrderByIdPathParams,
  GetOrderByIdQueryResponse,
} from '../../model/store/GetOrderById.ts';

export const getOrderByIdQueryKey = ({ orderId }: { orderId: GetOrderByIdPathParams['orderId'] }) =>
  [{ url: '/store/order/:orderId', params: { orderId: orderId } }] as const;

export type GetOrderByIdQueryKey = ReturnType<typeof getOrderByIdQueryKey>;

export function getOrderByIdQueryOptions(
  { orderId }: { orderId: GetOrderByIdPathParams['orderId'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = getOrderByIdQueryKey({ orderId });
  return queryOptions<
    GetOrderByIdQueryResponse,
    ResponseErrorConfig<GetOrderById400 | GetOrderById404>,
    GetOrderByIdQueryResponse,
    typeof queryKey
  >({
    enabled: !!orderId,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getOrderById({ orderId }, config);
    },
  });
}

/**
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 * {@link /store/order/:orderId}
 */
export function useGetOrderById<
  TData = GetOrderByIdQueryResponse,
  TQueryData = GetOrderByIdQueryResponse,
  TQueryKey extends QueryKey = GetOrderByIdQueryKey,
>(
  { orderId }: { orderId: GetOrderByIdPathParams['orderId'] },
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetOrderByIdQueryResponse,
        ResponseErrorConfig<GetOrderById400 | GetOrderById404>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getOrderByIdQueryKey({ orderId });

  const query = useQuery({
    ...(getOrderByIdQueryOptions({ orderId }, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<GetOrderById400 | GetOrderById404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
