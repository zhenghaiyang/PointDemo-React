import * as express from "express";
import {ResponseSuccess, ResponseParamsError, ResponseServiceError} from "../base/baseresponse";
import UserService from '../service/UserService';

export default class UserController {

  public static async post(request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> {
      console.log(request.body);
      const userService = new UserService(request.body);
      try {
          let result = await userService.add();
          response.json(new ResponseSuccess(result));
      } catch (err) {
          console.dir(err);
          response.json(new ResponseServiceError(err));
      }
  }

  public static async selectUserInfoByUserId (request: express.Request, response: express.Response, next: express.NextFunction): Promise<void> {
    console.log("-------------------------");

    // console.log(request);
    // let data=JSON.parse(request.body)
    // console.log(JSON.parse(request.body).id);
    // const data=JSON.parse(JSON.stringify(request.body));
    // console.log(data);
    let id:number = request.body["id"];
    console.log("-------------------------");
    // JSON.parse(JSON.stringify(result));
    const userService = new UserService();
    try {
        let result = await userService.selectUserInfoByUserIds(id);
        response.json(new ResponseSuccess(result));
    } catch (err) {
        console.dir(err);
        response.json(new ResponseServiceError(err));
    }
  }

}
