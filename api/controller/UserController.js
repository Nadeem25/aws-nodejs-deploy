import { UserService } from "../service/UserService.js";
import CreateResponse from "../utlity/CreateResponse.js";

export class UserController {
    userSerice = new UserService();
    authenticate = async (req, res, next) => {
        try {
            const createResponse = new CreateResponse();
            const { username, password } = req.body;
            const responseObj = await this.userSerice.authenticate(username, password);
            createResponse.sendResponse(res, responseObj);
        } catch (error) {
            console.log(`[UserController][authentication] error: ${error}`);
            next(error);
        }
    }

    userDetails = async (req, res, next) => {
        try {
            const createResponse = new CreateResponse();
            var response = await this.userSerice.getAllUserDetails();
            response = [
                { id: 1, name: "Zohn Cena", username: "20JohnCena", password: "JohnCena@Pass"},
                { id: 2, name: "Rahul Kelask", username: "Rahul20", password: "R@hul@134"},
                { id: 3, name: "Mark Hennery", username: "Hennery20", password: "Pass@Hennery"},
                { id: 4, name: "Zohn Cena", username: "20JohnCena", password: "JohnCena@Pass"},
                { id: 1, name: "Zohn Cena", username: "20JohnCena", password: "JohnCena@Pass"},
                { id: 1, name: "Zohn Cena", username: "20JohnCena", password: "JohnCena@Pass"}
            ]
            createResponse.sendResponse(res, response);
        } catch (error) {
            console.log(`[UserController][userDetails] error: ${error}`);
            next(error);
        }
    }

    createUser = async (req, res, next) => {
        try {
            const createResponse = new CreateResponse();
            const userDetails = {
                name: req.body.name,
                username: req.body.username,
                password: req.body.password
            }
            console.log(`User details: ${JSON.stringify(userDetails)}`);
            const response = await this.userSerice.createUser(userDetails);
            createResponse.sendResponse(res, response);
        } catch (error) {
            console.log(`[UserController][createUser] error: ${error}`);
            next(error);
        }
    }

}