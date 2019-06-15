/*

!! BASIC - INPUT - 2 WAY DATA BINDING !!

> basci usage

*/


/*
EXAMPLE;

1) Text
> in our example the value of v-model is bound to the value of message
	- MVVM (Model - View - View - Model)	
	>> USE -> for example checkbox that immediately displays message
	
2) Multiline text
*/

// View
<h1 class="text-center">{{ message }}</h1>
<input type="text" v-model="message" >
// Model
data: {
	message: 'Hello Vue World!'
}


<span>Multiline message is:</span>
<p style="white-space: pre">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>


/*
EXAMPLE: 

3) Single Checkbox
4) Multiple checkboxes (bound by an array)
*/
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>


<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<label for="jack">Jack</label>
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<label for="john">John</label>
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
<label for="mike">Mike</label>
<br>
<span>Checked names: {{ checkedNames }}</span>

new Vue({
	el: '...',
	data: {
		checkedNames: []
	}
})


/*
EXAMPLE:

5) Radio

6) Select
7) Multiple Select (bound to array)
*/
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>


<select v-model="selected">
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<span>Selected: {{ selected }}</span>
<br>
<span>Picked: {{ picked }}</span>


<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
<br>
<span>Selected: {{ selected }}</span>


/*
EXAMPLE:

8) v-for
*/
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>

new Vue({
	el: '...',
	data: {
		selected: 'A',
		options: [
			{ text: 'One', value: 'A' },
			{ text: 'Two', value: 'B' },
			{ text: 'Three', value: 'C' }
		]
	}
})