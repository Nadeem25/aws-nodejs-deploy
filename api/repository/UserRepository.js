import User from "../models/User.js";
export class UserRepository {

    authenticate = async (username, password) => {
        try {
            return await User.findOne({
                where: {
                    username,
                    password
                }
            })
        } catch (error) {
            console.log(`[UserRepository][authentication] error: ${error}`);
        }
    }

    getAllUser = async () => {
        try {
            // return await User.findAll({
            //     attributes: ['id', 'name', 'username', 'password']
            // });
        } catch (error) {
            console.log(`[UserRepository][getAllUser] error: ${error}`);
        }
    }

    create = async (userDetails) => {
        try {
            return await User.create(userDetails);
        } catch (error) {
            console.log(`[UserRepository][createUser] error: ${error}`);
        }
    }

}