export const configuration = {
    apiBaseUri: "/api/v1",
    corsOptions: {
        origin: "http://localhost:4200",
        methods: "GET,POST",
        credentials: true,
        allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token,x-client-secret, Authorization"
    },
    port: 8080,
    host: "localhost",
    mysql: {
        sqlDBName: "company",
        connectionUri: "mysql://root:root@localhost:3306/",
        options: {
            dialect: "mysql",
            logging: true,
            pool: {
                max: 70,
                min: 1,
                acquire: 60000,
                idle: 30000
            }
        }
    },
    httpStatus: {
        ok: 200
    },
}