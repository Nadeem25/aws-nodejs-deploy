import { Sequelize, DataTypes } from "sequelize";
import { configuration } from '../config.js';
import initModels from "../models/User.js";
import { initiateModels } from "./InitiateModels.js";

const dbConnection = (() => {
    let database = {};

    const connect = async () => {
        try {
            console.log(`Inside connect`);
            console.log(`connection URL: ${configuration.mysql.connectionUri}${configuration.mysql.sqlDBName}`);
            database = new Sequelize(`${configuration.mysql.connectionUri}${configuration.mysql.sqlDBName}`, configuration.mysql.options);
            return database;
        } catch (error) {
            console.log(`[DbConnection][connect] error: ${error}`);
        }
    }

    const authenticate = async () => {
        console.log(`Inside authenticate`);
        await database.authenticate();
        console.log("Connection has been established successfully.");
        initiateModels(database);
        //database.sync({ force: false });
    }

    const disConnect = async () => {
        try {
            console.log(`Inside disConnect`);
            return await database.close();
        } catch (error) {
            console.log(`Error while disconnecting MYSQL ${JSON.stringify(error)}`);
        }
    }

    const getConnection = () => {
        return database;
    };

    return {
        connect,
        disConnect,
        authenticate,
        getConnection
    };

})();

export default dbConnection;