import { Request, Response, Router } from "express";
import { UsersService } from "./user.service";
import { User } from "./users.interface";

const router = Router();
const usersService = new UsersService();

router.get("/", (req: Request, res: Response) => {
  res.json(usersService.findAll());
});

router.get("/:id", (req: Request, res: Response) => {
  const user = usersService.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

router.post("/", (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Missing fields" });
  }

  const newUser = usersService.createUser({ username, email, password });
  res.status(201).json(newUser);
});

router.put("/:id", (req: Request, res: Response) => {
  const updatedUser: User = req.body;
  const result = usersService.updateUser(req.params.id, updatedUser);
  if (!result) return res.status(404).json({ message: "User not found" });
  res.json(result);
});

router.delete("/:id", (req: Request, res: Response) => {
  const success = usersService.deleteUser(req.params.id);
  if (!success) return res.status(404).json({ message: "User not found" });
  res.status(204).send();
});

export default router;
