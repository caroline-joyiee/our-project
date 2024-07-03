import { userModel } from "../models/user-models.js";

//define details

export const getUser = async(req, res, next) => {
try {
        const allUser = await userModel.find()
        res.status(200).json(allUser)
    
} catch (error) {

    next(error);
    
}    
}
export const postUser = async(req, res, next) => {
    try {
        const newUser = await userModel.create(req.body)
        res.status(200).json(patchUser)
    } catch (error) {
        next(error);
        
    }
}


export const patchUser = async(req, res, next) => {
    try {
        const updateUser = await userModel.create(req.body)
        res.status(200).json(patchUser)
    } catch (error) {
        next(error);
        
    }
}