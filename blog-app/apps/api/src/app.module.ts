import express from "express";
import usersModule from "./modules/users/users.module";

export class AppModule {
  public app = express();

  constructor() {
    this.app.use(express.json());
    this.app.use("/users", usersModule);
  }

  listen(port: number) {
    this.app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  }
}
