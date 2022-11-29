import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js"
import UserController from "./controllers/users/users-controller.js"
import TuitsController from "./controllers/tuits/tuits-controller.js";
import mongoose from "mongoose";

const username = encodeURIComponent("gowtham7991");
const password = encodeURIComponent("Gowtham11@");
const CONNECTION_STRING = `mongodb+srv://${username}:${password}@cluster0.poglddh.mongodb.net/?retryWrites=true&w=majority` || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(cors())
app.use(express.json());
HelloController(app)
UserController(app)
TuitsController(app);
const port = process.env.PORT || 4000;
app.listen(port);