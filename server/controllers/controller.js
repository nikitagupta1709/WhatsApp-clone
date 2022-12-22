import channelModel from "../models/channels.model.js";
import userModel from "../models/users.model.js";
import { sendResponse, sendError } from "../utility/index.js";


export const createUser = async(req, res) => {
    const userObj = new userModel(req.body);
    await userObj.saveData();
    sendResponse(res, userObj, "User added successfully", true, 200);
}

export const loginUser = async(req, res) => {
    const requestData = req.body;
    const isUserExist = await userModel.findOneData({
        phoneNumber: requestData.phoneNumber,
        password: requestData.password,
    });
    if(!isUserExist)
        return sendError(res, {}, "Invalid Credentials");
    sendResponse(res, isUserExist, "User logged in successfully", true, 200);
}

export const createChannel = async(req, res) => {

}

export const getChannelList = async(req, res) => {

}

export const searchUser = async(req, res) => {

}

export const sendMesage = async(req, res) => {

}
