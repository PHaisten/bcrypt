import { Router } from "express";
import blogsRouter from "./blog";
import authRouter from "./auth";
import usersRouter from "./users";
import contactRouter from "./contactform";
import { isLoggedIn, tokenMiddleware } from "../middleware/auth.mw";

let router = Router();

router.use("/auth", authRouter);
router.use("/contact", contactRouter);

router
  .route("*")
  .post(tokenMiddleware, isLoggedIn)
  .put(tokenMiddleware, isLoggedIn)
  .delete(tokenMiddleware, isLoggedIn);
// .get(tokenMiddleware, isLoggedIn);

router.use("/blog", blogsRouter);
router.use("/users", usersRouter);

export default router;
