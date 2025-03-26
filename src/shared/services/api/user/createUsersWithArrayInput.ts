import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  CreateUsersWithArrayInputMutationRequest,
  CreateUsersWithArrayInputMutationResponse,
} from '../../model/user/CreateUsersWithArrayInput.ts';

export function getCreateUsersWithArrayInputUrl() {
  return '/user/createWithArray' as const;
}

/**
 * @summary Creates list of users with given input array
 * {@link /user/createWithArray}
 */
export async function createUsersWithArrayInput(
  data?: CreateUsersWithArrayInputMutationRequest,
  config: Partial<RequestConfig<CreateUsersWithArrayInputMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateUsersWithArrayInputMutationResponse,
    ResponseErrorConfig<Error>,
    CreateUsersWithArrayInputMutationRequest
  >({
    method: 'POST',
    url: getCreateUsersWithArrayInputUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
