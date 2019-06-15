/**
 * 	INTER - GENERATOR - RADNOM NUMBER/LETTER
 */

data() {
	return {
		uniqHead: this.idGenerator(6),
		uniqCollapse: this.idGenerator(6)
	}
},
methods: {
	/**
	 * UNIQUE NUMBER/LETTER GENERATOR
	 * - neccessary for linking panel-title & pannel-body (for accordian functionality)
	 */
	idGenerator(len) {
		var number = "";
		var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

		for(var i=0; i < len; i++)
			number += charset.charAt(Math.floor(Math.random() * charset.length));

		return number;
	}

},