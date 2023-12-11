import http, { Server as httpServer } from "http";
import App from "./App.js";
import {configuration } from './config.js'
import  dbConnection  from "./utlity/DbConnection.js";

const application = new App().init();
const server = http.createServer(application);
const {host: HOST, port: PORT} = configuration


const listen = () => {
    server.listen(PORT, () => {
        console.log(`Server is running ${HOST} at port:${PORT}`);
    })
}

const startServer = async () => {
    try {
        //await dbConnection.connect();
        //await dbConnection.authenticate();
        listen();
        console.log(`SQL DB has stablished`);
    } catch (error) {
        console.log(`[Server][start] error: ${error}`);
    }
}

const stopServer = async () => {
    try {
        dbConnection.disConnect().then(() => {
            server.close(() => {
                console.log(`Server is  ${HOST} at port:${PORT} has stopped`);
            })
        });
        console.log(`SQL DB has stablished`);
    } catch (error) {
        console.log(`[Server][stop] error: ${error}`);
    }
}

export {
    startServer
}