import express, { urlencoded } from 'express'
import cors from "cors"
import { configuration } from './config.js';
import  RouterBinder  from './router/routes.js';
export default class App {

    initSecurity(app) {
        app.use(cors(configuration.corsOptions));
        console.log(`###### Security Initiated ###########`);
    }

    initRoutes(app) {
        app.use(configuration.apiBaseUri, RouterBinder.bindRoutes())
        console.log(`###### Router Initiated ###########`);
    }

    init () {
        const app = express();
        app.use(express.json())
        app.use(express.urlencoded({extended: true}))
        this.initSecurity(app);
        this.initRoutes(app);
        return app;
    }
}