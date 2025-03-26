import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  AddPet405,
  AddPetMutationRequest,
  AddPetMutationResponse,
} from '../../model/pet/AddPet.ts';

export function getAddPetUrl() {
  return '/pet' as const;
}

/**
 * @summary Add a new pet to the store
 * {@link /pet}
 */
export async function addPet(
  data: AddPetMutationRequest,
  config: Partial<RequestConfig<AddPetMutationRequest>> & { client?: typeof client } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    AddPetMutationResponse,
    ResponseErrorConfig<AddPet405>,
    AddPetMutationRequest
  >({
    method: 'POST',
    url: getAddPetUrl().toString(),
    data,
    ...requestConfig,
  });
  return res.data;
}
