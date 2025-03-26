import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  GetUserByName400,
  GetUserByName404,
  GetUserByNamePathParams,
  GetUserByNameQueryResponse,
} from '../../model/user/GetUserByName.ts';

export function getGetUserByNameUrl({
  username,
}: { username: GetUserByNamePathParams['username'] }) {
  return `/user/${username}` as const;
}

/**
 * @summary Get user by user name
 * {@link /user/:username}
 */
export async function getUserByName(
  { username }: { username: GetUserByNamePathParams['username'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetUserByNameQueryResponse,
    ResponseErrorConfig<GetUserByName400 | GetUserByName404>,
    unknown
  >({
    method: 'GET',
    url: getGetUserByNameUrl({ username }).toString(),
    ...requestConfig,
  });
  return res.data;
}
