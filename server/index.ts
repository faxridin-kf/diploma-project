import express, { Request, Response } from "express";
const app = express();

app.get("/auth/twitter", (req: Request, res: Response) => {
  res.send("hello");
});

app.listen(3001, (err?: Error) => {
  if (err) {
    throw new Error("Server startup error: " + err.message);
  }
  console.log("Server running on port 3001");
});
