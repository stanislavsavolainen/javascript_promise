'use strict';

const Hapi = require('hapi');

//import bluebird
var Promise = require("bluebird");

const hapi_server = new Hapi.Server();


hapi_server.connection({ host: 'localhost', port: 8989, routes: { cors: true } });

hapi_server.start((error) => {
    if (error) console.log("error " + error)
    else console.log("connected")
});


var mypromise1 = new Promise((resolve, reject) => {
    hapi_server.start((error) => {
        if (error) reject(error);
        else resolve("Server started");
    });
})

.then( ( init_text ) =>  { console.log(" Init server " + init_text); }  )
.catch( (server_error) => { console.log("Connection problem " + server_error); } );

//hapi_server.start( error) => {  if(error){ throw error; } console.log("Running");  }

//hapi_server.route({});



