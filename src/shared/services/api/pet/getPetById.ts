import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  GetPetById400,
  GetPetById404,
  GetPetByIdPathParams,
  GetPetByIdQueryResponse,
} from '../../model/pet/GetPetById.ts';

export function getGetPetByIdUrl({ petId }: { petId: GetPetByIdPathParams['petId'] }) {
  return `/pet/${petId}` as const;
}

/**
 * @description Returns a single pet
 * @summary Find pet by ID
 * {@link /pet/:petId}
 */
export async function getPetById(
  { petId }: { petId: GetPetByIdPathParams['petId'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    GetPetByIdQueryResponse,
    ResponseErrorConfig<GetPetById400 | GetPetById404>,
    unknown
  >({
    method: 'GET',
    url: getGetPetByIdUrl({ petId }).toString(),
    ...requestConfig,
  });
  return res.data;
}
