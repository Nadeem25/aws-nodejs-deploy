import User from "../models/User.js"

export const initiateModels = (sequelize) => {
    User.initModels(sequelize);
}