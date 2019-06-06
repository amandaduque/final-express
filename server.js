"use strict";
const express = require ('express');
const app = express();
const routes = require('./routes/user-routes');
const port = 8888;

app.use(express.json());
app.use('/', routes);

app.listen(port, () => console.log(`Sucessfully connected on port: ${port}`));
