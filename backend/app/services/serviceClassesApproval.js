import Classes from "../models/classesApproval.js";

export const addClassesApproval = async (newDetails) => {
    const classes = new Classes(newDetails);
    return classes.save();
}

export const getAllClassesApprovalDetails = async (query) => {
    const params = {...query};
    return Classes.find(params).exec();
}

export const removeClassesApproval = async (id) => {
    Classes.findByIdAndDelete(id).exec();
}