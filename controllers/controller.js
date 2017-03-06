const express = require('express');
const app = express();
const path = require('path');

const router =  express.Router();

module.exports = (router) => {
    router.get('/', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    })
};
