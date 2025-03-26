import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { updatePetWithForm } from '../../api/pet/updatePetWithForm.ts';
import type {
  UpdatePetWithForm405,
  UpdatePetWithFormMutationRequest,
  UpdatePetWithFormMutationResponse,
  UpdatePetWithFormPathParams,
} from '../../model/pet/UpdatePetWithForm.ts';

export const updatePetWithFormMutationKey = () => [{ url: '/pet/{petId}' }] as const;

export type UpdatePetWithFormMutationKey = ReturnType<typeof updatePetWithFormMutationKey>;

/**
 * @summary Updates a pet in the store with form data
 * {@link /pet/:petId}
 */
export function useUpdatePetWithForm<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UpdatePetWithFormMutationResponse,
      ResponseErrorConfig<UpdatePetWithForm405>,
      { petId: UpdatePetWithFormPathParams['petId']; data?: UpdatePetWithFormMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<UpdatePetWithFormMutationRequest>> & { client?: typeof client };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? updatePetWithFormMutationKey();

  return useMutation<
    UpdatePetWithFormMutationResponse,
    ResponseErrorConfig<UpdatePetWithForm405>,
    { petId: UpdatePetWithFormPathParams['petId']; data?: UpdatePetWithFormMutationRequest },
    TContext
  >({
    mutationFn: async ({ petId, data }) => {
      return updatePetWithForm({ petId }, data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
