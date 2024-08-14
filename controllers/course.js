import { Course } from "../models/course.js";
import { Lecture } from "../models/lecture.js";
import { User } from "../models/user.js";

export const getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find({});
        res.status(200).json({
            courses,
        });
    } catch (error) {
        return res.status(400).json({
            message: "problem in getting all courses",
        });
    }
};

export const singleCourse = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        console.log(course);
        res.status(200).json({
            course,
        });
    } catch (error) {
        return res.status(400).json({
            message: "problem in getting single courses",
        });
    }
};
export const fetchLectures = async (req, res) => {
    try {
        const lectures = await Lecture.find({ course: req.params.id });

        const user = await User.findById(req.user._id);

        if (user.role === "admin") {
            return res.status(200).json({
                lectures,
            });
        }
        console.log(lectures)
       
        if (!user.subscription.includes(req.params.id)) {
            return res.status(403).json({
                message:"please subscribe to access all lectures",
            });
        }
        return res.status(403).json({
           lectures
        });
        
    } catch (error) {
        return res.status(200).json({
            message: "problem in getting fetch lectures",
        });
    }
};


export const fetchSingleLecture = async (req, res) => {
    try {
        const lecture = await Lecture.findById(req.params.id);

        const user = await User.findById(req.user._id);
        if (user.role === "admin") {
            return res.status(200).json({
                lecture,
            });
        }

        if (!user.subscription.includes(req.params.id)) {
            return res.status(403).json({
                message: "please subscribe to access all lectures",
            });
        }
        return res.status(403).json({
            lecture,
        });
    } catch (error) {
        return res.status(400).json({
            message: "problem in getting fetch  single lecture",
        });
    }
};       