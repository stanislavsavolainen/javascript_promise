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


5. Promise
   -> Asynchronous operation
   -> "bluebird"-promise working with knex on hemmo-backend


Asynchonous operation : 
Main program ( or Promise caller ) can have many Promises(asynchonous) wich triggering statement without locking process in main programming. Main not waiting when Promise is done. Just continue working and will be informed, if Promise success or fail. Synchronize operation wait untill process is completed to continue program. When Promise is done inform about it automatically to main or process who called it.


Promise can have function inside it. Function will run if Promise success, if fail, then other one function can be completed. 



