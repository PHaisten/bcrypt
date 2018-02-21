import { Router } from "express";
import { tokenMiddleware, isLoggedIn } from "../middleware/auth.mw";
import Table from "../table";
import { generateHash } from "../../lib/utils/security";

let router = Router();
let classTable = new Table("Users");

router.get("/me", tokenMiddleware, isLoggedIn, (req, res) => {
  res.json(req.user);
});

router.post("/", (req, res) => {
  generateHash(req.body.password).then(hash => {
    console.log(req.body);
    classTable
      .insert({
        name: req.body.name,
        email: req.body.email,
        hash: hash
      })
      .then(results => {
        res.json(results);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(500);
      });
  });
});

export default router;
