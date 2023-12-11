
import { UserRepository } from "../repository/UserRepository.js";

export class UserService {
    userRepository = new UserRepository();
    authenticate = async (username, password) => {
        try {
            let response;
            const userDetails = await this.userRepository.authenticate(username, password);
            console.log(`[UserService][authenticate] userDetails: ${JSON.stringify(userDetails)}`);
            if(userDetails) {
                const allUserDetails = await this.userRepository.getAllUser();
                response = { data: allUserDetails, message: 'success', statusCode: 200 }
            } else {
                response = { data: {}, message: 'unatuhorize', statusCode: 401}
            }
            return response;
        } catch (error) {
            console.log(`[UserService][authentication] error: ${error}`);
        }
    }

    getAllUserDetails = async () => {
        try {
            const usersDetails = await this.userRepository.getAllUser();
            console.log(`[UserService][getAllUserDetails] userDetails: ${JSON.stringify(usersDetails)}`);
            return usersDetails;
        } catch (error) {
            console.log(`[UserService][userDetails] error: ${error}`);
            throw error;
        }
    }

    createUser = async (userDetails) => {
        try {
            let response;
            const createdUser = await this.userRepository.create(userDetails);
            if (createdUser) {
                response = { data: createdUser, message: 'user created', statusCode: 200 }
            } else {
                response = { data: {}, message: 'Internal Server Error', statusCode: 500}
            }
            return response;
        } catch (error) {
            console.log(`[UserService][createUser] error: ${error}`);
            throw error;
        }
    }

}
