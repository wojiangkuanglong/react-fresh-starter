import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { placeOrder } from '../../api/store/placeOrder.ts';
import type {
  PlaceOrder400,
  PlaceOrderMutationRequest,
  PlaceOrderMutationResponse,
} from '../../model/store/PlaceOrder.ts';

export const placeOrderMutationKey = () => [{ url: '/store/order' }] as const;

export type PlaceOrderMutationKey = ReturnType<typeof placeOrderMutationKey>;

/**
 * @summary Place an order for a pet
 * {@link /store/order}
 */
export function usePlaceOrder<TContext>(
  options: {
    mutation?: UseMutationOptions<
      PlaceOrderMutationResponse,
      ResponseErrorConfig<PlaceOrder400>,
      { data?: PlaceOrderMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<PlaceOrderMutationRequest>> & { client?: typeof client };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? placeOrderMutationKey();

  return useMutation<
    PlaceOrderMutationResponse,
    ResponseErrorConfig<PlaceOrder400>,
    { data?: PlaceOrderMutationRequest },
    TContext
  >({
    mutationFn: async ({ data }) => {
      return placeOrder(data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
