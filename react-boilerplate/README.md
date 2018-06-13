# React-Boilerplate
This is my react-boilerplate as of 6/12/18.

## Setup
npm install
npm run build
npm start

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see the output of your static HTML file. You can stop the web server by pressing Ctrl+C.

This application is set up to serve a static HTML file via an Express web server. We have integrated Babel to enable ES6 and Jest for unit testing.

## Testing
Unit tests are introduced from the beginning using the [Jest Testing Framework](https://facebook.github.io/jest/). Jest will scan the src folder for all files containing .test in the filename, you can keep your test cases under the same folder as the files they’re testing. Run `npm test` to run the tests.
