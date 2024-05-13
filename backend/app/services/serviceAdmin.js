import Admin from "../models/admin.js";
import bcrypt from "bcrypt";

export const addAdmin = async (newDetails) => {
    const admin = new Admin(newDetails);
    return admin.save();
}

export const getAllAdminDetails = async (query) => {
    const params = {...query};
    return Admin.find(params).exec();
}

export const removeAdmin = async (id) => {
    Admin.findByIdAndDelete(id).exec();
}

export const updateAdmin = async (updatedDetails) => {
    let update = {fullname: updatedDetails.fullname, password: updatedDetails.password};
    return Admin.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await Admin.findOne({emailid: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return false;
    } else {
        return {name: account.fullname};
    }
}