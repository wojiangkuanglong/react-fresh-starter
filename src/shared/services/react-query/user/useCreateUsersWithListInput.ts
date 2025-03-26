import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { createUsersWithListInput } from '../../api/user/createUsersWithListInput.ts';
import type {
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
} from '../../model/user/CreateUsersWithListInput.ts';

export const createUsersWithListInputMutationKey = () => [{ url: '/user/createWithList' }] as const;

export type CreateUsersWithListInputMutationKey = ReturnType<
  typeof createUsersWithListInputMutationKey
>;

/**
 * @summary Creates list of users with given input array
 * {@link /user/createWithList}
 */
export function useCreateUsersWithListInput<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CreateUsersWithListInputMutationResponse,
      ResponseErrorConfig<Error>,
      { data?: CreateUsersWithListInputMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<CreateUsersWithListInputMutationRequest>> & {
      client?: typeof client;
    };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? createUsersWithListInputMutationKey();

  return useMutation<
    CreateUsersWithListInputMutationResponse,
    ResponseErrorConfig<Error>,
    { data?: CreateUsersWithListInputMutationRequest },
    TContext
  >({
    mutationFn: async ({ data }) => {
      return createUsersWithListInput(data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
