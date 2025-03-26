export type DeletePetPathParams = {
  /**
   * @description Pet id to delete
   * @type integer, int64
   */
  petId: number;
};

export type DeletePetHeaderParams = {
  /**
   * @type string | undefined
   */
  api_key?: string;
};

/**
 * @description Invalid ID supplied
 */
export type DeletePet400 = unknown;

/**
 * @description Pet not found
 */
export type DeletePet404 = unknown;

export type DeletePetMutationResponse = unknown;

export type DeletePetMutation = {
  Response: any;
  PathParams: DeletePetPathParams;
  HeaderParams: DeletePetHeaderParams;
  Errors: DeletePet400 | DeletePet404;
};
