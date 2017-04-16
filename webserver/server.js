var express = require('express');
var app = require('express')();
var path = require('path');
import http from 'http';

const env = process.env.NODE_ENV || 'production';
var server;

server = http.createServer(app);

server.listen(80, () => {
    console.log(`Node WebServer is listening on port 80!`);
});

const PUBLIC_FOLDER = "../client/public";


app.get('/', (request, response) => {
    response.sendFile(path.resolve(__dirname, PUBLIC_FOLDER, 'index.html'))
})

// app.get('/start', (request, response) => {
//     response.sendFile(path.resolve(__dirname, PUBLIC_FOLDER, 'index.html'))
// })

// // Handles all routes so you do not get a not found error
// app.get('/', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'static/error.html'))
// })

app.use(express.static(path.resolve(__dirname, PUBLIC_FOLDER)));

app.use('*', (request, response) => {
    response.sendFile(path.resolve(__dirname, 'static/error.html'))
});