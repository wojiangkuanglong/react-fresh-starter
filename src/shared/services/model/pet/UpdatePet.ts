import type { Pet } from '../Pet.ts';

/**
 * @description Invalid ID supplied
 */
export type UpdatePet400 = unknown;

/**
 * @description Pet not found
 */
export type UpdatePet404 = unknown;

/**
 * @description Validation exception
 */
export type UpdatePet405 = unknown;

/**
 * @description Pet object that needs to be added to the store
 */
export type UpdatePetMutationRequest = Pet;

export type UpdatePetMutationResponse = unknown;

export type UpdatePetMutation = {
  Response: any;
  Request: UpdatePetMutationRequest;
  Errors: UpdatePet400 | UpdatePet404 | UpdatePet405;
};
