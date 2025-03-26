import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  UpdatePet400,
  UpdatePet404,
  UpdatePet405,
  UpdatePetMutationRequest,
  UpdatePetMutationResponse,
} from '../../model/pet/UpdatePet.ts';

export function getUpdatePetUrl() {
  return '/pet' as const;
}

/**
 * @summary Update an existing pet
 * {@link /pet}
 */
export async function updatePet(
  data: UpdatePetMutationRequest,
  config: Partial<RequestConfig<UpdatePetMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UpdatePetMutationResponse,
    ResponseErrorConfig<UpdatePet400 | UpdatePet404 | UpdatePet405>,
    UpdatePetMutationRequest
  >({
    method: 'PUT',
    url: getUpdatePetUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
