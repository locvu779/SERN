import express from "express";
import homeController from "../controllers/homeController";
let router = express.Router();
let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage)
    router.get('/loc', (req, res) => {
        return res.send('Loc Vip Pro');
    })
    return app.use("/", router);
}
module.exports = initWebRoutes;