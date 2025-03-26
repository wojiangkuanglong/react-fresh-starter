export type UpdatePetWithFormPathParams = {
  /**
   * @description ID of pet that needs to be updated
   * @type integer, int64
   */
  petId: number;
};

/**
 * @description Invalid input
 */
export type UpdatePetWithForm405 = unknown;

export type UpdatePetWithFormMutationRequest = {
  /**
   * @description Updated name of the pet
   * @type string | undefined
   */
  name?: string;
  /**
   * @description Updated status of the pet
   * @type string | undefined
   */
  status?: string;
};

export type UpdatePetWithFormMutationResponse = unknown;

export type UpdatePetWithFormMutation = {
  Response: any;
  Request: UpdatePetWithFormMutationRequest;
  PathParams: UpdatePetWithFormPathParams;
  Errors: UpdatePetWithForm405;
};
