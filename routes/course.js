import express from "express";
import {
    fetchLectures,
    getAllCourses,
    singleCourse,
    fetchSingleLecture,
    
} from "../controllers/course.js";

import { isAuth } from '../middlewares/isAuth.js';

const router = express.Router();

router.get("/getAllCourses", getAllCourses);
router.get("/:id", singleCourse);
router.get("/lectures/:id", isAuth, fetchLectures);
router.get("/single-lecture/:id", isAuth, fetchSingleLecture);


export default router;
