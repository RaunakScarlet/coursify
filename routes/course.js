import express from "express";
import { getAllCourses, singleCourse } from "../controllers/course.js";

const router = express.Router();

router.get("/getAllCourses", getAllCourses);
router.get("/:id", singleCourse);

export default router;
