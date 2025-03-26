import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { createUser } from '../../api/user/createUser.ts';
import type {
  CreateUserMutationRequest,
  CreateUserMutationResponse,
} from '../../model/user/CreateUser.ts';

export const createUserMutationKey = () => [{ url: '/user' }] as const;

export type CreateUserMutationKey = ReturnType<typeof createUserMutationKey>;

/**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * {@link /user}
 */
export function useCreateUser<TContext>(
  options: {
    mutation?: UseMutationOptions<
      CreateUserMutationResponse,
      ResponseErrorConfig<Error>,
      { data?: CreateUserMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<CreateUserMutationRequest>> & { client?: typeof client };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? createUserMutationKey();

  return useMutation<
    CreateUserMutationResponse,
    ResponseErrorConfig<Error>,
    { data?: CreateUserMutationRequest },
    TContext
  >({
    mutationFn: async ({ data }) => {
      return createUser(data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
