import express from "express";

import { createUser, getAllUsers, getStats, getUserById, searchUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/stats", getStats);
router.get("/search/:query", searchUsers);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

router.post("/", createUser);

export default router;