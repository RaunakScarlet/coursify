import { Course } from "../models/course.js";

export const create = async (req, res) => {
    try {
        const { title, description, price, duration, category, createdBy } =
            req.body;
      
console.log(req.body)
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
        console.log(newCourse);
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
