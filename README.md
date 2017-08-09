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

==============================================

Asynchonous operation : 
Main program ( or Promise caller ) can have many Promises(asynchonous) wich triggering statement without locking process in main programming. Main not waiting when Promise is done. Just continue working and will be informed, if Promise success or fail. Synchronize operation wait untill process is completed to continue program. When Promise is done inform about it automatically to main or process who called it.


Promise can have function inside it. Function will run if Promise success, if fail, then other one function can be completed.

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

==============================================

other Promise data ... 
 



