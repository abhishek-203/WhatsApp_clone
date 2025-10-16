import express from "express";
import { addUser, getUsers } from "../controller/userController.js";
import newconversation from "../controller/conversationController.js";

const route = express.Router();

route.post("/add", addUser);
route.get('/users', getUsers)
route.post('/conversation/add', newconversation)

export default route;
