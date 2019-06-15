/*

!! ULTRA - TIPS - PRODUCTION & DEPLOYMENT !!

*/


/*
TIPS:

1) Turn on Production mode
	- great for warning errors
	- in deployment turn it off
	
2) use vue.min.js for production

3) The easiest way to pre-compile templates is using Single-File Components 
	- the associated build setups automatically performs pre-compilation for you, 
	so the built code contains the already compiled render functions instead of raw 
	template strings
	
4) Extracting the CSS across all components into the same file

5) use vue cli

6) track runtime errors
	- If a runtime error occurs during a component’s render, it will be passed to 
	the global Vue.config.errorHandler config function if it has been set. 
	- It might be a good idea to leverage this hook together with an 
	error-tracking service like Sentry, which provides an official integration for Vue
*/