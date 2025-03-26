import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  DeleteOrder400,
  DeleteOrder404,
  DeleteOrderMutationResponse,
  DeleteOrderPathParams,
} from '../../model/store/DeleteOrder.ts';

export function getDeleteOrderUrl({ orderId }: { orderId: DeleteOrderPathParams['orderId'] }) {
  return `/store/order/${orderId}` as const;
}

/**
 * @description For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 * {@link /store/order/:orderId}
 */
export async function deleteOrder(
  { orderId }: { orderId: DeleteOrderPathParams['orderId'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DeleteOrderMutationResponse,
    ResponseErrorConfig<DeleteOrder400 | DeleteOrder404>,
    unknown
  >({
    method: 'DELETE',
    url: getDeleteOrderUrl({ orderId }).toString(),
    ...requestConfig,
  });
  return res.data;
}
