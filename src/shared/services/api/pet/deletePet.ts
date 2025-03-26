import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  DeletePet400,
  DeletePet404,
  DeletePetHeaderParams,
  DeletePetMutationResponse,
  DeletePetPathParams,
} from '../../model/pet/DeletePet.ts';

export function getDeletePetUrl({ petId }: { petId: DeletePetPathParams['petId'] }) {
  return `/pet/${petId}` as const;
}

/**
 * @summary Deletes a pet
 * {@link /pet/:petId}
 */
export async function deletePet(
  { petId }: { petId: DeletePetPathParams['petId'] },
  headers?: DeletePetHeaderParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    DeletePetMutationResponse,
    ResponseErrorConfig<DeletePet400 | DeletePet404>,
    unknown
  >({
    method: 'DELETE',
    url: getDeletePetUrl({ petId }).toString(),
    ...requestConfig,
    headers: { ...headers, ...requestConfig.headers },
  });
  return res.data;
}
