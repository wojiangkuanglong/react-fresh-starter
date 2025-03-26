import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  CreateUsersWithListInputMutationRequest,
  CreateUsersWithListInputMutationResponse,
} from '../../model/user/CreateUsersWithListInput.ts';

export function getCreateUsersWithListInputUrl() {
  return '/user/createWithList' as const;
}

/**
 * @summary Creates list of users with given input array
 * {@link /user/createWithList}
 */
export async function createUsersWithListInput(
  data?: CreateUsersWithListInputMutationRequest,
  config: Partial<RequestConfig<CreateUsersWithListInputMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    CreateUsersWithListInputMutationResponse,
    ResponseErrorConfig<Error>,
    CreateUsersWithListInputMutationRequest
  >({
    method: 'POST',
    url: getCreateUsersWithListInputUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
