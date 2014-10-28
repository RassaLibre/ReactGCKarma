#ReactJS + Google Closure + Karma
Simple, not production ready (yet!), dev-stack for developing JS apps with ReactJS, Google Closure Library and Karma. This repo has been created to show a tiny bit of how I am trying to combine these libs and see what others think about it.

##Dependencies
In order to use this stack you need to have [Node](http://nodejs.org/), [Grunt](http://gruntjs.com/), [Bower](http://bower.io/), [Karma](http://karma-runner.github.io/0.12/index.html) and [Java](https://java.com/) installed.

##Installation
Clone the repo to your local disk and run:

	npm install
	bower install
	
##Run
To run the application, use three terminal windows one for each command bellow:

	node server.js
	grunt
	karma start karma/karma-unit.conf.js
	
##Directories
The whole app is in the `app/` directory. This folder contains some basic folders such `css/` for stylesheets and `js/` for JavaScript files. Folder `components/` contains bower components so do not make any changes there. `js/` folder contains file `deps.js` which is a JavaScript file with calculated dependencies of each script in the `App/` directory. `App/` directory is where the heart of the application lays.

`App/ui/` is a namespace for all the react components therefore should not be changed directly but via `jsx/` folder in the root directory. The structure of the react components in `jsx/` is kept after the code is preprocessed by the `JSX` preprocessor.

Directory `karma/` contains configuration file for the Karma Test Runner. After you run `grunt` command another folder is created- `coverage/`. This folder contains information about the test coverage in your application.
	