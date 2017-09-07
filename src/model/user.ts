module.exports = function (sequelize: any, dataTypes: any) {
    let model = sequelize.define("user", {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            comment: "用户ID",
            field: 'id',
        },
        idcard: {
            type: dataTypes.STRING,
            comment: "身份证号",
            field: 'idcard'
        },
        nickname: {
            type: dataTypes.STRING,
            field: 'nickname',
            comment: "昵称"
        },
        username: {
            type: dataTypes.STRING,
            field: 'username',
            comment: "用户名称"
        },
        password: {
            type: dataTypes.STRING,
            field: 'password',
            comment: "密码"
        },
        mail: {
            type: dataTypes.INTEGER,
            field: 'mail',
            comment: "邮箱"
        },
        phoneNum: {
            type: dataTypes.STRING,
            field: 'phone_num',
            comment: "手机号"
        }
    }, {
        timestamps: false,
        tableName: "user"
    });
    return model;
};
