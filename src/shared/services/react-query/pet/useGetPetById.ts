/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type {
  QueryClient,
  QueryKey,
  QueryObserverOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { getPetById } from '../../api/pet/getPetById.ts';
import type {
  GetPetById400,
  GetPetById404,
  GetPetByIdPathParams,
  GetPetByIdQueryResponse,
} from '../../model/pet/GetPetById.ts';

export const getPetByIdQueryKey = ({ petId }: { petId: GetPetByIdPathParams['petId'] }) =>
  [{ url: '/pet/:petId', params: { petId: petId } }] as const;

export type GetPetByIdQueryKey = ReturnType<typeof getPetByIdQueryKey>;

export function getPetByIdQueryOptions(
  { petId }: { petId: GetPetByIdPathParams['petId'] },
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = getPetByIdQueryKey({ petId });
  return queryOptions<
    GetPetByIdQueryResponse,
    ResponseErrorConfig<GetPetById400 | GetPetById404>,
    GetPetByIdQueryResponse,
    typeof queryKey
  >({
    enabled: !!petId,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return getPetById({ petId }, config);
    },
  });
}

/**
 * @description Returns a single pet
 * @summary Find pet by ID
 * {@link /pet/:petId}
 */
export function useGetPetById<
  TData = GetPetByIdQueryResponse,
  TQueryData = GetPetByIdQueryResponse,
  TQueryKey extends QueryKey = GetPetByIdQueryKey,
>(
  { petId }: { petId: GetPetByIdPathParams['petId'] },
  options: {
    query?: Partial<
      QueryObserverOptions<
        GetPetByIdQueryResponse,
        ResponseErrorConfig<GetPetById400 | GetPetById404>,
        TData,
        TQueryData,
        TQueryKey
      >
    > & {
      client?: QueryClient;
    };
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const {
    query: { client: queryClient, ...queryOptions } = {},
    client: config = {},
  } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? getPetByIdQueryKey({ petId });

  const query = useQuery(
    {
      ...(getPetByIdQueryOptions({ petId }, config) as unknown as QueryObserverOptions),
      queryKey,
      ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
    },
    queryClient,
  ) as UseQueryResult<TData, ResponseErrorConfig<GetPetById400 | GetPetById404>> & {
    queryKey: TQueryKey;
  };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
