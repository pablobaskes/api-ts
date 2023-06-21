import { Router } from "express";
import { handleChat } from "../controllers/gpt.controller";
const router = Router();
router.post("/", handleChat);
export { router };
