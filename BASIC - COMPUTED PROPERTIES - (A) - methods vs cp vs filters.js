/*

!! BASIC - DIFFERENCE - METHODS VS COMPUTED PROPERTIES VS FILTERS !!

*/

/**
 * COMPUTES PROPERTIES VS METHODS VS FILTERS (DIFFERENCE)
 *
 *
 * - there is much overlap what CP & M use
 *
 * 1) REASON)  only difference is how Vue.js will "Cache" computed property vs method
 *     >> CP automatically caches variable value CP & later on when we create an object, we don't need to
 *     run the function again to get variable value because it is already Cached
 *     (if the variable did not change in the mean time)
 *         >>> only time it run's the function again if the variable values change
 *     >> with method every time we want to show (render) the variable value it has to run the function,
 *     even if variable values have not changed
 *
 * > generally CP are the way to go, unless you want to run the function every single time
 *     >> saves on api requests, unless you want to actually check every single time than use methods
 *
 *
 * 2) REASON) Getting & Setting - computed properties
 *     >> great for getting & setting a value, by default computer properties get values from variable
 *
 *
 *
 * >>> USAGE TIPS <<<
 *
 * 1) Use methods primarily for triggering state alterations. When you call a method, it generally implies some side effect.
 * 2) Use filters primarily for simple text formatting that needs to be reused all across your app.
 * Filters should be pure - no side effects, just data in and data out
 * 3) Use computed properties for local, component-specific data transforms. Similar to filters, computed getters should be pure
 * 4) There is a special case where you want to compute something using a scope variable that is only available in the template
 * (e.g. a v-for alias), in such cases it's okay to use "helper methods" so that you can compute something by passing it arguments
 *
 */
 
/*
EXAMPLE: computed property

- computed property will never update, because Date.now() is not a reactive dependency 
*/
computed: {
	now: function () {
		return Date.now()
	}
}