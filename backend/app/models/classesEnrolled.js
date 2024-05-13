import mongoose from "mongoose";
import validator from 'validator';

const classesEnrolledSchema = new mongoose.Schema({
    classesEnrolledid: Number,

    emailid: {
        type: String, ref: "classesEnrolled",
    },

    emailid: {
        type: String, ref: "classesEnrolled",
    },

    classesName: {
        type: String, ref: "classesEnrolled",
    },

    classesStartDate: {
        type: String, ref: "classesEnrolled",
    },

    classesEndDate: {
        type: String, ref: "classesEnrolled",
    },

    classesRating: {
        type: Number, ref: "classesEnrolled",
        validate: [
            function(v) {
              return v >= 0 && v < 6;
            },
            "Rating should be between 0 to 5"
        ]
    },

    classesComment: {
        type: String, ref: "classesEnrolled",
        validate: [
            (classesComment) => validator.isAlpha(classesComment, "en-US", { ignore: " " }),
            "Comment must be alphanumeric"
        ]
    }
});

const ClassesEnrolled = mongoose.model('Classes Enrolled', classesEnrolledSchema);

export default ClassesEnrolled;