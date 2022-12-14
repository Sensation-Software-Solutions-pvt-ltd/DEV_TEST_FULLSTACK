import express from "express";
const router = express.Router();

import { signin, signup } from "@controllers/user.controller.js";

router.post("/login", signin);
router.post("/signup", signup);

export default router;