import express from "express"
import { isAuth } from "../middlewares/isAuth.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { addLecture, createCourse } from "../controllers/admin.js";
import {  uploadFiles } from "../middlewares/multer.js";

const router = express.Router();

router.post("/newCourse", isAuth, isAdmin, uploadFiles, createCourse);
router.post("/addLecture/:id", isAuth, isAdmin, uploadFiles, addLecture);
export default router;