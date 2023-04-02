/* import * as dotenv from 'dotenv'
dotenv.config() */
const express = require("express");
const app = express();
const route = require( "./routes/user.routes.js");
require('./config/mongosee.config')
const cors = require("cors");


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(route)


app.listen(8000, () => console.log('server on port ' + 8000))