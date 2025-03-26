import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { createUsersWithArrayInput } from '../../api/user/createUsersWithArrayInput.ts';
import type {
  CreateUsersWithArrayInputMutationRequest,
  CreateUsersWithArrayInputMutationResponse,
} from '../../model/user/CreateUsersWithArrayInput.ts';

export const createUsersWithArrayInputMutationKey = () =>
  [{ url: '/user/createWithArray' }] as const;

export type CreateUsersWithArrayInputMutationKey = ReturnType<
  typeof createUsersWithArrayInputMutationKey
>;

/**
 * @summary Creates list of users with given input array
 * {@link /user/createWithArray}
 */
export function useCreateUsersWithArrayInput<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CreateUsersWithArrayInputMutationResponse,
      ResponseErrorConfig<Error>,
      { data?: CreateUsersWithArrayInputMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<CreateUsersWithArrayInputMutationRequest>> & {
      client?: typeof client;
    };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? createUsersWithArrayInputMutationKey();

  return useMutation<
    CreateUsersWithArrayInputMutationResponse,
    ResponseErrorConfig<Error>,
    { data?: CreateUsersWithArrayInputMutationRequest },
    TContext
  >({
    mutationFn: async ({ data }) => {
      return createUsersWithArrayInput(data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
