#ReactJS + Google Closure + Karma
Simple, not really production ready (yet!), dev-stack for developing JS apps with ReactJS, Google Closure Library and Karma. This repo has been created to show a tiny bit of how I am trying to combine these libs and see what others think about it.

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
	

	