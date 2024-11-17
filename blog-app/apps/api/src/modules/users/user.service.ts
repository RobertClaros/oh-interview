import { users } from "./users.data";
import { User } from "./users.interface";
import { v4 as uuidv4 } from "uuid"; // Usaremos esta librería para generar un UUID

export class UsersService {
  findAll(): User[] {
    return users;
  }

  findById(id: string): User | undefined {
    return users.find((user) => user.id === id);
  }

  createUser(user: Omit<User, "id">): User {
    const newUser: User = {
      id: uuidv4(), // Generar un ID automáticamente
      ...user,
    };
    users.push(newUser);
    return newUser;
  }

  updateUser(id: string, updatedUser: User): User | null {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users[index] = { ...users[index], ...updatedUser };
      return users[index];
    }
    return null;
  }

  deleteUser(id: string): boolean {
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
      return true;
    }
    return false;
  }
}
