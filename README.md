# javascript_promise
javascript promises tests

links and info about promises on JavaScript (also with React and NodeJS -> ES5, ES6 code posible), simple code samples

==============================================

Event options:

1. Poll
   -> nodeJS pool: http://docs.libuv.org/en/v1.x/threadpool.html
	
2. Callback
   -> CallbackHell ( http://callbackhell.com/ )

3. EventListener (like JavaSE button listener on JFrame (anonymoys/actionPerformed) )

4. Promise
   -> Asynchronous operation
   -> "bluebird"-promise working with knex on hemmo-backend
   -> standart Promise test on normal Javascript (for Promise beginers)
      like : https://scotch.io/tutorials/javascript-promises-for-dummies 
       and other materials ...	

==============================================

Promise can have function inside it. This function getting two functions inside it resolve and rejected. Resolve function happen when Promise success and reject when fail.

Asynchronous programming link
http://www.i-programmer.info/programming/theory/6040-what-is-asynchronous-programming.html

==============================================

For example JavaScript fetch is Promise :
host = "http://127.0.0.1:6060"
link = "/endpoint_link1"
postData = "...." also getData with query string

fetch(host + link, postData)
.then(resp => { return resp.json; /* allow handle json data request and response */  } )
.then(http_response_from_server_success => { /* server return data */ })
.catch(err => { /* http-connection failed */ } )

==============================================

Hemmo-backend use Bluebird-promise with knex-query (NodeJS + Postgresql)

(search bluebird)
https://gist.github.com/isaacs/76df78e3f67dcb58e27d#gistcomment-1688635

Also bluebird is used at NodeJS other implementation for example check if server connection success or fail.

hemmo-backend/src/backend_kit.js (modified file look like this)





==============================================

other Promise data ... 
 



