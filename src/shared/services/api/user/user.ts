import { createUser } from './createUser.ts';
import { createUsersWithArrayInput } from './createUsersWithArrayInput.ts';
import { createUsersWithListInput } from './createUsersWithListInput.ts';
import { deleteUser } from './deleteUser.ts';
import { getUserByName } from './getUserByName.ts';
import { loginUser } from './loginUser.ts';
import { logoutUser } from './logoutUser.ts';
import { updateUser } from './updateUser.ts';

export function user() {
  return {
    createUsersWithListInput,
    getUserByName,
    updateUser,
    deleteUser,
    loginUser,
    logoutUser,
    createUsersWithArrayInput,
    createUser,
  };
}
