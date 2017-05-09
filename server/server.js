'use strict';

let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

let seeds = [
    { id:1, skills:{ 'attack' : 1}},
    { id:2, skills:{ 'defense' : 1}},
    { id:4, skills:{ 'growth' : 1}},
    { id:5, skills:{ 'victory' : 1}}
];

io.on('connection', (socket) => {
    console.log('user connected');

    socket.emit('update-inventory', seeds)

    socket.on('combineSeeds', function(seeds){
        console.log("Combined seeds with IDs : ", seeds);
        socket.emit('combineSeed-callback', [{
            id:4,
            name:'custom seed'
        }]);
    })

    socket.on('disconnect', function(){
        console.log('user disconnected');
    });

    socket.on('add-seed', (seedID) => {
        seeds.splice(0,1);
        socket.emit('update-inventory', seeds);
    });
});

http.listen(3000, () => {
    console.log('started on port 3000');
});