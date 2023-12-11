import express from 'express'
import { UserController } from '../controller/UserController.js';

export default class RouterBinder {


    static bindRoutes() {
        try {
            const controller = new UserController();
            console.log(`Inisde RouterBinder`);
            const router = express.Router();
            router.post('/auth', controller.authenticate);
            router.post('/create-user', controller.createUser)
            router.get('/user-details', controller.userDetails)
            return router;
        } catch (error) {
            console.log(`[routers] error: ${error}`);
        }
    }
}