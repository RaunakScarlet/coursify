import { Course } from "../models/course.js";
import { Lecture } from "../models/lecture.js";

export const createCourse = async (req, res) => {
    try {
        const { title, description, price, duration, category, createdBy } =
            req.body;
        const image = req.file;
        const newCourse = await Course.create({
            title,
            description,
            price,
            duration,
            category,
            createdBy,
            image: image?.path,
        });

        return res.status(201).json({
            message: "course created successfully",
            Course: newCourse,
        });
    } catch (error) {
        return res.json({
            message: "problem in creating course",
        });
    }
};

export const addLecture = async (req, res) => {
    try {
       
        const course = await Course.findById(req.params.id);
        
        if(!course){
            return res.status(400).json({
                message: " course not found"
               
           }) 
        }
        const { title, description } = req.body;
        const video = req.file;

        const newLecture = await Lecture.create({
            title,
            description,
            video: video?.path,
            course: course._id,
        });
        res.status(201).json({
            message: "lecture added successfully",
             lecture:newLecture
        })
    } catch (error) {
         return res.status(400).json({
             message: "lecture added failed",
             error: error.message
         });
    }
}
