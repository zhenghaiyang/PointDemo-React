import * as express from "express";
import * as cors from "cors";
import * as timeout from "connect-timeout";
import * as bodyParser from "body-parser";
import * as i18n from "i18n"; // 国际化
import * as sequelize from "sequelize";// sequelize orm
import apiUrl from './route/apiUrl';  //  导入所有apiUrl
import {DriverType, DBClient, DriverOptions} from "sakura-node-3";

const sequelizeM = require("./common/models")();
const jwt = require("jsonwebtoken");
i18n.configure({
    locales: ["zh-Hans", "en"],
    directory: __dirname + "/../locales"
});
i18n.setLocale("zh-Hans");
// let mysqlOption: DriverOptions = {
//     type: DriverType.MYSQL,
//     username: process.env.ZED_MYSQL_USERNAME || "root",
//     password: process.env.ZED_MYSQL_PASSWORD || "root",
//     host: process.env.ZED_MYSQL_HOST || "127.0.0.1",
//     database: process.env.ZED_MYSQL_DATABASE_NAME || "erp",
//     port: Number(process.env.ZED_MYSQL_PORT) || 3306
// };
// let client = DBClient.createClient(mysqlOption);

export let app: express.Application = express();
let route = express.Router();
app.use(timeout("30s"));
app.use(cors());
app.disable("x-powered-by");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use("/api", apiUrl);


sequelizeM.then((db: any) => {
    app.listen(8000);
});
