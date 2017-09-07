let path = require("path");

let glob = require("glob");
let _ = require("lodash");
let config = require("config");
let sequelize = require("sequelize");
let seq = config.sequelize;

let sequelizes = new sequelize(seq.database, seq.username, seq.password, seq.options);

let models: any = {};

let defines = glob.sync("*.js", {
    root: "",
    cwd: "dist/model/"
});
console.log("defines: ", defines);
defines.forEach(function (define: any) {
    var model = sequelizes.import(path.resolve("dist/model/" + define));

    models[model.name] = model;
});

sequelize.models = models;
_.forIn(models, function (model: any) {
    if (model.associate) {
        model.associate(models);
    }
});
module.exports = function () {
    return sequelizes.sync();
    // return sequelize.sync({ force: true });// 清空数据
};
