import type client from '@kubb/plugin-client/clients/axios';
import type { RequestConfig, ResponseErrorConfig } from '@kubb/plugin-client/clients/axios';
import type { QueryKey, QueryObserverOptions, UseQueryResult } from '@tanstack/react-query';
import { queryOptions, useQuery } from '@tanstack/react-query';
import { findPetsByTags } from '../../api/pet/findPetsByTags.ts';
import type {
  FindPetsByTags400,
  FindPetsByTagsQueryParams,
  FindPetsByTagsQueryResponse,
} from '../../model/pet/FindPetsByTags.ts';

export const findPetsByTagsQueryKey = (params: FindPetsByTagsQueryParams) =>
  [{ url: '/pet/findByTags' }, ...(params ? [params] : [])] as const;

export type FindPetsByTagsQueryKey = ReturnType<typeof findPetsByTagsQueryKey>;

export function findPetsByTagsQueryOptions(
  params: FindPetsByTagsQueryParams,
  config: Partial<RequestConfig> & { client?: typeof client } = {},
) {
  const queryKey = findPetsByTagsQueryKey(params);
  return queryOptions<
    FindPetsByTagsQueryResponse,
    ResponseErrorConfig<FindPetsByTags400>,
    FindPetsByTagsQueryResponse,
    typeof queryKey
  >({
    enabled: !!params,
    queryKey,
    queryFn: async ({ signal }) => {
      config.signal = signal;
      return findPetsByTags(params, config);
    },
  });
}

/**
 * @description Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
 * @summary Finds Pets by tags
 * {@link /pet/findByTags}
 * @deprecated
 */
export function useFindPetsByTags<
  TData = FindPetsByTagsQueryResponse,
  TQueryData = FindPetsByTagsQueryResponse,
  TQueryKey extends QueryKey = FindPetsByTagsQueryKey,
>(
  params: FindPetsByTagsQueryParams,
  options: {
    query?: Partial<
      QueryObserverOptions<
        FindPetsByTagsQueryResponse,
        ResponseErrorConfig<FindPetsByTags400>,
        TData,
        TQueryData,
        TQueryKey
      >
    >;
    client?: Partial<RequestConfig> & { client?: typeof client };
  } = {},
) {
  const { query: queryOptions, client: config = {} } = options ?? {};
  const queryKey = queryOptions?.queryKey ?? findPetsByTagsQueryKey(params);

  const query = useQuery({
    ...(findPetsByTagsQueryOptions(params, config) as unknown as QueryObserverOptions),
    queryKey,
    ...(queryOptions as unknown as Omit<QueryObserverOptions, 'queryKey'>),
  }) as UseQueryResult<TData, ResponseErrorConfig<FindPetsByTags400>> & { queryKey: TQueryKey };

  query.queryKey = queryKey as TQueryKey;

  return query;
}
