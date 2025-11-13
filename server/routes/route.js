import express from "express";
import { addUser, getUsers } from "../controller/userController.js";
import newconversation, { getConversation } from "../controller/conversationController.js";
import { getMessages, newMessage } from "../controller/messageController.js";
import { uploadFile } from "../controller/imageController.js";

import upload from '../middleware/upload.js'

const route = express.Router();


route.post("/add", addUser);
route.get('/users', getUsers)

route.post('/conversation/add', newconversation)
route.post('/conversation/get', getConversation)

route.post('/message/add', newMessage)
route.get('/message/get/:id', getMessages)

route.post("/file/upload",upload.single("file"), uploadFile)

export default route;


// localhost