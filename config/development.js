"use strict";
const service = {
    dbHost: "127.0.0.1",
    apiHost: "127.0.0.1"
};
module.exports = {
    sequelize: {
        logging: console.log,
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        database: 'erp',
        username: 'root',
        password: 'root',
        options: {
            host: service.dbHost,
            dialect: 'mysql',
            dialectOptions: {
                // charset: "utf8mb4",
                // collate: "utf8mb4_unicode_ci",
                supportBigNumbers: true,
                bigNumberStrings: true
            }
        }
    },
    app: {
        port: '8000',
        host: service.apiHost,
        session: {
            keys: 'SESSION_KEYS'
        }
    },
};
