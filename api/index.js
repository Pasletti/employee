require('dotenv').config()

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express')
const fs = require('fs');
const httpResponse = require("./helpers/httpHelper");
const moment = require('moment');
const morganBody = require('morgan-body');
const path = require('path');
const routes = require('./routes')
const writeLog = require("./helpers/writeLog.js");

const app = express()
const port = process.env.NODE_PORT

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cors());

// log http requests
if (process.env.FILE_DEBUG === "true") {
    writeLog.write('Servidor está rodando com o DEBUG ativado');

    app.use(bodyParser.json());

    const log = fs.createWriteStream(
        path.join(__dirname, "./logs", `requests${moment().format('YYYYMMDD')}.log`), { flags: "a" }
    );

    morganBody(app, {
        noColors: true,
        stream: log
    });
}

routes(app)

app.listen(port, () => console.log(`Servidor está rodando na porta ${port}`))

module.exports = app
