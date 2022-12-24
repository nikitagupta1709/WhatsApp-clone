import express from 'express';
import configureExpressApp from './config/index.js';
import connectDB from './dbConnection/index.js';
import applyRoutes from './routes/index.js';

const app = new express();

configureExpressApp(app);
const PORT = 3001;

const startServer = () => {
    Promise.all([connectDB()]).then(() => {
        app.listen(PORT);;
        console.log(`Server started on port ${PORT}`);
        applyRoutes(app);
    });
};

startServer();