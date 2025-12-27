import { findPetsByStatus } from '@repo/services/api/pet/findPetsByStatus';
import type { FindPetsByStatusQueryParams } from '@repo/services/model/pet/FindPetsByStatus';
import { getQueryKey } from '@repo/utils';
import { useQuery } from '@tanstack/react-query';

export const usePetFindByStatus = (params: FindPetsByStatusQueryParams, enabled?: boolean) => {
  return useQuery({
    queryKey: [getQueryKey('findPetsByStatus'), params],
    queryFn: () => findPetsByStatus(params),
    enabled,
  });
};
