import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  DeleteUser400,
  DeleteUser404,
  DeleteUserMutationResponse,
  DeleteUserPathParams,
} from '../../model/user/DeleteUser.ts';

export function getDeleteUserUrl({ username }: { username: DeleteUserPathParams['username'] }) {
  return `/user/${username}` as const;
}

/**
 * @description This can only be done by the logged in user.
 * @summary Delete user
 * {@link /user/:username}
 */
export async function deleteUser(
  { username }: { username: DeleteUserPathParams['username'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DeleteUserMutationResponse,
    ResponseErrorConfig<DeleteUser400 | DeleteUser404>,
    unknown
  >({
    method: 'DELETE',
    url: getDeleteUserUrl({ username }).toString(),
    ...requestConfig,
  });
  return res.data;
}
