import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { UseMutationOptions } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';
import { uploadFile } from '../../api/pet/uploadFile.ts';
import type {
  UploadFileMutationRequest,
  UploadFileMutationResponse,
  UploadFilePathParams,
} from '../../model/pet/UploadFile.ts';

export const uploadFileMutationKey = () => [{ url: '/pet/{petId}/uploadImage' }] as const;

export type UploadFileMutationKey = ReturnType<typeof uploadFileMutationKey>;

/**
 * @summary uploads an image
 * {@link /pet/:petId/uploadImage}
 */
export function useUploadFile<TContext>(
  options: {
    mutation?: UseMutationOptions<
      UploadFileMutationResponse,
      ResponseErrorConfig<Error>,
      { petId: UploadFilePathParams['petId']; data?: UploadFileMutationRequest },
      TContext
    >;
    client?: Partial<RequestConfig<UploadFileMutationRequest>> & { client?: typeof client };
  } = {},
) {
  const { mutation: mutationOptions, client: config = {} } = options ?? {};
  const mutationKey = mutationOptions?.mutationKey ?? uploadFileMutationKey();

  return useMutation<
    UploadFileMutationResponse,
    ResponseErrorConfig<Error>,
    { petId: UploadFilePathParams['petId']; data?: UploadFileMutationRequest },
    TContext
  >({
    mutationFn: async ({ petId, data }) => {
      return uploadFile({ petId }, data, config);
    },
    mutationKey,
    ...mutationOptions,
  });
}
