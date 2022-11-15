const express = require('express');
const consign = require('consign');

const app = express();

consign()
.then('libs/config.js')
.include('db.js')
.then('libs/middlewares.js')
.then('routes')
.then('libs/boot.js')
.into(app);