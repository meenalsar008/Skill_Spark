import Classes from "../models/classes.js";
import bcrypt from "bcrypt";

export const addClasses = async (newDetails) => {
    const classes = new Classes(newDetails);
    console.log("classes service",classes.save());
    return classes.save();
}

export const getAllClassesDetails = async (query) => {
    const params = {...query};
    return Classes.find(params).exec();
}

export const removeClasses = async (id) => {
    Classes.findByIdAndDelete(id).exec();
}

export const updateClasses = async (updatedDetails) => {
    let update = {fullname: updatedDetails.fullname, password: updatedDetails.password};
    return Classes.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await Classes.findOne({email: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return {name: account.fullname};
    } else {
        return false;
    }
}