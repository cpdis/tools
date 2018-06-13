// Next, we need to create an index file which will initialize various high-level components. 
// In our example, we’re going to initialize the web server. However, as your project grows, 
// you can also initialize other components such as configuration, database, logger, etc.

import WebServer from './web.server'
let webServer = new WebServer();
webServer.start()
  .then(() => {
    console.log('Web server started!')
  })
  .catch(err => {
    console.error(err)
    console.error('Failed to start web server')
  });
