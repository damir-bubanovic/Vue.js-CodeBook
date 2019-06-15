/*

!! BASIC - DATA - SYNTAX - FILTERS !!

> used to apply common text formatting
	- call the at the end of JavaScript expression

EXAMPLE:

1) in mustaches
2) in v-bind
3) chaining filters
4) custom filters
*/
{{ message | capitalize }}

<div v-bind:id="rawId | formatId"></div>

{{ message | filterA | filterB }}

new Vue({
	filters: {
		capitalize: function (value) {
			if (!value) return ''
			value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	}
})