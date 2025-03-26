import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  PlaceOrder400,
  PlaceOrderMutationRequest,
  PlaceOrderMutationResponse,
} from '../../model/store/PlaceOrder.ts';

export function getPlaceOrderUrl() {
  return '/store/order' as const;
}

/**
 * @summary Place an order for a pet
 * {@link /store/order}
 */
export async function placeOrder(
  data?: PlaceOrderMutationRequest,
  config: Partial<RequestConfig<PlaceOrderMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    PlaceOrderMutationResponse,
    ResponseErrorConfig<PlaceOrder400>,
    PlaceOrderMutationRequest
  >({
    method: 'POST',
    url: getPlaceOrderUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
