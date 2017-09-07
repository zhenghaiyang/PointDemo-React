import * as express from "express";
import * as multer from "multer";
// 导入controller层


import UserController from '../controller/UserController';

let apiUrl: express.Router = express.Router();

apiUrl.post("/user",UserController.post);
apiUrl.post("/selectUserInfoByUserId",UserController.selectUserInfoByUserId);


export default apiUrl;
