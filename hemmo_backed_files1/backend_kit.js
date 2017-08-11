#!/usr/bin/env node



// hemmo-backend/src/backend_kit.js


/* eslint-disable no-console */

import Hoek from 'hoek';
import compose from './server';
import initSchedules from './utils/schedules';

initSchedules();

let hapi_server_start = function(server) {
    return new Promise((resolve, reject) => {
      server.start(err => {

        if( err ){
          console.log(">>>>>>>>>>>>>>>>>>>>>>>>");
          reject(err);
        }
        else {
          console.log('Server running at:', server.info.uri);
          resolve("asd");
        }

        //Hoek.assert(!err, err);
      })
    });
}

compose
  .then(server => {
    return hapi_server_start(server)
  })
  .then((param) => {
    console.log("resolved " + param)
  })
  .catch(err => {
    console.log("rejected")
    console.error('Error while starting server:', err);
  });

 //Callback hell
  fs.readFile("file1.txt", (err, data) => {
    if (err) {
      console.log("error: " + err)
      return;
    }
    fs.readFile(data, (err, data) => {
      if (err) {
        console.log("error: " + err)
        return;
      }
      fs.readFile(data, (err, data) => {
        if (err) {
          console.log("error: " + err)
          return;
        }
      })
    })
  });



   
  let read_file_with_promise = function(fileName) {
    return new Promise((resolve, reject) => {
      fs.readFile(fileName, (err, data) => {
        if (err)
          reject(err)
        else
          resolve(data)
      });
    });
  }

  Promise.resolve(read_file_with_promise("file1.txt"))
  .then((data) => read_file_with_promise(data))
  .then((data) => read_file_with_promise(data))
  .catch((err) => {
    console.log("error: " + err)
  })
