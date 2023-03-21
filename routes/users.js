import express from "express";
import {
    getUser,
    getUserFriend,
    addRemoveFriend,
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();
// READ
router.get("/:id", verifyToken, getUser);
router.get("/:id/friend", verifyToken, getUserFriend);

// UPDATE
router.get("/:id/:friendId", verifyToken, addRemoveFriend);
export default router;
