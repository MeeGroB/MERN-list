import express from "express";

import { createUser, getAllUsers, getStats, getUserById, searchUsers, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

router.get("/stats", getStats);
router.get("/search/:query", searchUsers);
router.get("/:id", getUserById);
router.get("/", getAllUsers);

router.post("/", createUser);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser)

export default router;