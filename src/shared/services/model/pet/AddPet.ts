/**
 * Generated by Kubb (https://kubb.dev/).
 * Do not edit manually.
 */

import type { Pet } from '../Pet.ts';

/**
 * @description Invalid input
 */
export type AddPet405 = unknown;

/**
 * @description Pet object that needs to be added to the store
 */
export type AddPetMutationRequest = Pet;

export type AddPetMutationResponse = unknown;

export type AddPetMutation = {
  Response: any;
  Request: AddPetMutationRequest;
  Errors: AddPet405;
};
