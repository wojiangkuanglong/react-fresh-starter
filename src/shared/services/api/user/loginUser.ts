import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  LoginUser400,
  LoginUserQueryParams,
  LoginUserQueryResponse,
} from '../../model/user/LoginUser.ts';

export function getLoginUserUrl() {
  return '/user/login' as const;
}

/**
 * @summary Logs user into the system
 * {@link /user/login}
 */
export async function loginUser(
  params: LoginUserQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<LoginUserQueryResponse, ResponseErrorConfig<LoginUser400>, unknown>({
    method: 'GET',
    url: getLoginUserUrl().toString(),
    params,
    ...requestConfig,
  });
  return res.data;
}
