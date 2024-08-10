import { Course } from "../models/course.js";

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({
            courses
        })
    } catch (error) {
         return res.status(400).json({
             message:"problem in getting all courses",
         });
    }
}

export const singleCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        console.log(course)
        res.status(200).json({
            course,
        });
    } catch (error) {
        return res.status(400).json({
            message: "problem in getting single courses",
        });
    }
};