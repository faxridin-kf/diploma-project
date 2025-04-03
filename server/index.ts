import express from "express";
import * as dotenv from "dotenv";
dotenv.config({ path: "./server/.env" });

import { passport } from "./core/passport";

const app = express();
app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/github", passport.authenticate("github"));
app.get(
  "/auth/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login",
  }),
  (req, res) => res.redirect("/"),
);

app.listen(3001, () => {
  console.log("SERVER RUNNED!");
});
