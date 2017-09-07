import {where} from "sequelize"; //  orm
import * as i18n from "i18n";
let _ = require("lodash");
const Sequelize = require("sequelize");


export default class UserService {
  private data: any;
  private model: any;
  private resultData: any;

  constructor(obj: any = null) {
    if (obj) this.data = _.clone(obj);
    this.model = Sequelize.models.user;   // 去索引user的model
  }

  public  add(){
    // return this.model.create(this.data);
  }

  selectUserInfoByUserIds(id:number) {
    console.log("++++++++++++++++");
    console.log(id);
    console.log("++++++++++++++++");
    let sequelize = new Sequelize('erp','root','root',{
      host: "127.0.0.1",
      dialect:'mysql',
      port : '3306',
      define: {
            timestamps: false
        }
    });
    // return sequelize.query(`SELECT * FROM user where id = ${id} limit 1`,{ type: sequelize.QueryTypes.SELECT })
    // return sequelize.query(`SELECT * FROM user where id = ${id} limit 1`);
  }

   updateUserInfoByUserId(id:number,userInfo:any) {
    return this.model.updateOne()
  }

}
