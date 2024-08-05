import express from "express"
import { isAuth } from "../middlewares/isAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { create } from "../controllers/admin.js";
import {  uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post("/newCourse", isAuth, isAdmin, uploadFiles,create);
export default router;