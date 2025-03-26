import type { Pet } from '../Pet.ts';

export const findPetsByStatusQueryParamsStatusEnum = {
  available: 'available',
  pending: 'pending',
  sold: 'sold',
} as const;

export type FindPetsByStatusQueryParamsStatusEnum =
  (typeof findPetsByStatusQueryParamsStatusEnum)[keyof typeof findPetsByStatusQueryParamsStatusEnum];

export type FindPetsByStatusQueryParams = {
  /**
   * @description Status values that need to be considered for filter
   * @type array
   */
  status: FindPetsByStatusQueryParamsStatusEnum[];
};

/**
 * @description successful operation
 */
export type FindPetsByStatus200 = Pet[];

/**
 * @description Invalid status value
 */
export type FindPetsByStatus400 = unknown;

export type FindPetsByStatusQueryResponse = FindPetsByStatus200;

export type FindPetsByStatusQuery = {
  Response: FindPetsByStatus200;
  QueryParams: FindPetsByStatusQueryParams;
  Errors: FindPetsByStatus400;
};
