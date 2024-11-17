import { v4 as uuidv4 } from 'uuid';
import { User } from "./users.interface";

export const users: User[] = [
  { id: uuidv4(), username: "john_doe", email: "john@example.com", password: "1234" },
  { id: uuidv4(), username: "jane_doe", email: "jane@example.com", password: "5678" }
];
