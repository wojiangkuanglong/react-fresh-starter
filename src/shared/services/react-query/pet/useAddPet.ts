import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { addPet } from '../../api/pet/addPet.ts';
import type {
  AddPet405,
  AddPetMutationRequest,
  AddPetMutationResponse,
} from '../../model/pet/AddPet.ts';

export const addPetMutationKey = () => [{ url: '/pet' }] as const;

export type AddPetMutationKey = ReturnType<typeof addPetMutationKey>;

/**
 * @summary Add a new pet to the store
 * {@link /pet}
 */
export function useAddPet<TContext>(
  options: {
    mutation?: UseMutationOptions<
      AddPetMutationResponse,
      ResponseErrorConfig<AddPet405>,
      { data: AddPetMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<AddPetMutationRequest>> & { client?: typeof client };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? addPetMutationKey();

  return useMutation<
    AddPetMutationResponse,
    ResponseErrorConfig<AddPet405>,
    { data: AddPetMutationRequest },
    TContext
  >({
    mutationFn: async ({ data }) => {
      return addPet(data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
