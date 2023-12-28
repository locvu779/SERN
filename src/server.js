import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDb from './config/connectDB';
require('dotenv').config();
let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);
connectDb();

let port = process.env.PORT || 1770;

app.listen(port, () => {
    console.log("backend nodejs is running on the port : " + port);
});