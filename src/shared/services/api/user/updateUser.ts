import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  UpdateUser400,
  UpdateUser404,
  UpdateUserMutationRequest,
  UpdateUserMutationResponse,
  UpdateUserPathParams,
} from '../../model/user/UpdateUser.ts';

export function getUpdateUserUrl({ username }: { username: UpdateUserPathParams['username'] }) {
  return `/user/${username}` as const;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Updated user
 * {@link /user/:username}
 */
export async function updateUser(
  { username }: { username: UpdateUserPathParams['username'] },
  data?: UpdateUserMutationRequest,
  config: Partial<RequestConfig<UpdateUserMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UpdateUserMutationResponse,
    ResponseErrorConfig<UpdateUser400 | UpdateUser404>,
    UpdateUserMutationRequest
  >({
    method: 'PUT',
    url: getUpdateUserUrl({ username }).toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
