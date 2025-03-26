import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  GetOrderById400,
  GetOrderById404,
  GetOrderByIdPathParams,
  GetOrderByIdQueryResponse,
} from '../../model/store/GetOrderById.ts';

export function getGetOrderByIdUrl({ orderId }: { orderId: GetOrderByIdPathParams['orderId'] }) {
  return `/store/order/${orderId}` as const;
}

/**
 * @description For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 * {@link /store/order/:orderId}
 */
export async function getOrderById(
  { orderId }: { orderId: GetOrderByIdPathParams['orderId'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetOrderByIdQueryResponse,
    ResponseErrorConfig<GetOrderById400 | GetOrderById404>,
    unknown
  >({
    method: 'GET',
    url: getGetOrderByIdUrl({ orderId }).toString(),
    ...requestConfig,
  });
  return res.data;
}
