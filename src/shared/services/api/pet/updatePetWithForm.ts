import client from '@/shared/lib/client';
import type { RequestConfig, ResponseErrorConfig } from '@/shared/lib/client';
import type {
  UpdatePetWithForm405,
  UpdatePetWithFormMutationRequest,
  UpdatePetWithFormMutationResponse,
  UpdatePetWithFormPathParams,
} from '../../model/pet/UpdatePetWithForm.ts';

export function getUpdatePetWithFormUrl({
  petId,
}: { petId: UpdatePetWithFormPathParams['petId'] }) {
  return `/pet/${petId}` as const;
}

/**
 * @summary Updates a pet in the store with form data
 * {@link /pet/:petId}
 */
export async function updatePetWithForm(
  { petId }: { petId: UpdatePetWithFormPathParams['petId'] },
  data?: UpdatePetWithFormMutationRequest,
  config: Partial<RequestConfig<UpdatePetWithFormMutationRequest>> & {
    client?: typeof client;
  } = {},
) {
  const { client: request = client, ...requestConfig } = config;

  const res = await request<
    UpdatePetWithFormMutationResponse,
    ResponseErrorConfig<UpdatePetWithForm405>,
    UpdatePetWithFormMutationRequest
  >({
    method: 'POST',
    url: getUpdatePetWithFormUrl({ petId }).toString(),
    data,
    ...requestConfig,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...requestConfig.headers },
  });
  return res.data;
}
