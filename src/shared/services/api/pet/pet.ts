import { addPet } from './addPet.ts';
import { deletePet } from './deletePet.ts';
import { findPetsByStatus } from './findPetsByStatus.ts';
import { findPetsByTags } from './findPetsByTags.ts';
import { getPetById } from './getPetById.ts';
import { updatePet } from './updatePet.ts';
import { updatePetWithForm } from './updatePetWithForm.ts';
import { uploadFile } from './uploadFile.ts';

export function pet() {
  return {
    getPetById,
    updatePetWithForm,
    deletePet,
    uploadFile,
    addPet,
    updatePet,
    findPetsByStatus,
    findPetsByTags,
  };
}
