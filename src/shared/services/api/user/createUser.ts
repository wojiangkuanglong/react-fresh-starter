import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  CreateUserMutationRequest,
  CreateUserMutationResponse,
} from '../../model/user/CreateUser.ts';

export function getCreateUserUrl() {
  return '/user' as const;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Create user
 * {@link /user}
 */
export async function createUser(
  data?: CreateUserMutationRequest,
  config: Partial<RequestConfig<CreateUserMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateUserMutationResponse,
    ResponseErrorConfig<Error>,
    CreateUserMutationRequest
  >({
    method: 'POST',
    url: getCreateUserUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
