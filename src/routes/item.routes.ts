import { Router } from "express";
import {
  deleteItem,
  deleteItems,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controllers/item.controller";
import { checkjwt } from "../middlewares/session.middleware";
const router = Router();
router.get("/", checkjwt, getItems);
router.get("/:id", getItem);
router.post("/", postItem);
router.put("/:id", updateItem);
router.delete("/", deleteItems);
router.delete("/:id", deleteItem);
export { router };
