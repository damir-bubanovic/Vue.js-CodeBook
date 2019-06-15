/**
 * ULTRA - DATA - dynamically add data
 *
 * - dynamically add new contact & output each contact as a object in array, or remove specific contact
 */
 
<form role="form" v-on:submit.prevent="postContact()">
	<div class="panel-body">
		<h1>Add Contacts</h1>
		<hr>
		<p v-for="contact in contacts">
			<input type="text" placeholder="Enter Name" v-model="contact.name">
			<input type="text" placeholder="Enter Phone Number" v-model="contact.phone">
			<a v-on:click="removeContact(contact)">Remove</a>
		</p>
		<button class="button btn-primary" v-on:click="addContact">Add Contact</button>
	</div>
	<button type="submit" class="btn btn-primary submit-button">Submit</button>
</form>


data() {
	return {
		contacts: [
			{ name: '', phone: '' }
		]
	}
},
methods: {
	addContact() {
		this.contacts.push({ name: '', phone: '' });
	},
	postContact() {
		// console.log('Contacts are: ' + this.contacts);
		console.log('Contacts are: ' + JSON.stringify(this.contacts));
	},
	removeContact(contact) {
		// console.log(contact);
		this.contacts.splice(contact, 1);
	}
}