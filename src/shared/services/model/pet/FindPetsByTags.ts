import type { Pet } from '../Pet.ts';

export type FindPetsByTagsQueryParams = {
  /**
   * @description Tags to filter by
   * @type array
   */
  tags: string[];
};

/**
 * @description successful operation
 */
export type FindPetsByTags200 = Pet[];

/**
 * @description Invalid tag value
 */
export type FindPetsByTags400 = unknown;

export type FindPetsByTagsQueryResponse = FindPetsByTags200;

export type FindPetsByTagsQuery = {
  Response: FindPetsByTags200;
  QueryParams: FindPetsByTagsQueryParams;
  Errors: FindPetsByTags400;
};
