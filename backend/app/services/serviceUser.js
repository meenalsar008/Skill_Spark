import User from "../models/user.js";
import bcrypt from "bcrypt";

export const addUser = async (newDetails) => {
    const user = new User(newDetails);
    return user.save();
}

export const getAllUserDetails = async (query) => {
    const params = {...query};
    return User.find(params).exec();
}

export const removeUser = async (id) => {
    User.findByIdAndDelete(id).exec();
}

export const updateUser = async (updatedDetails) => {
    let update = {firstname: updatedDetails.firstname, lastname: updatedDetails.lastname, password: updatedDetails.password};
    return User.findByIdAndUpdate(updatedDetails.id, update).exec();  
}

export const authenticate = async ( email, password ) => {
    const account = await User.findOne({email: email}).exec();
    if (!account || !bcrypt.compareSync(password, account.password)) {
        return false;
    } else {
        return {name: account.fullname};
    }
}