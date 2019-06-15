/**
 * ULTRA - VALIDATION - validate form input & error output
 *
 * - using vee-validate -> http://vee-validate.logaretm.com/
 * > install using documentation
 * > use sweetalert2
 */
 
 <template>
    <div class="row">
        <div class="col-xs-6 col-sm-6 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form @submit.prevent="register">
                        <div class="form-group">
                            <input name="name" v-validate="'required|alpha'" data-vv-delay="500" class="form-control" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name" v-model="user.name">
                            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
                        </div>
                        <div class="form-group">
                            <input name="email" v-validate="'required|email'" data-vv-delay="1000" class="form-control" :class="{'input': true, 'is-danger': errors.has('email') }" type="email" placeholder="Email" v-model="user.email">
                            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
                        </div>
                        <div class="form-group">
                            <input name="password" v-validate="'required|min:6'" data-vv-delay="1000" class="form-control" :class="{'input': true, 'is-danger': errors.has('password') }" type="password" placeholder="Password" v-model="user.password">
                            <span v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</span>
                        </div>
                        <div class="form-group">
                            <input name="password_confirmation" v-validate="'required|confirmed:password|min:6'" data-vv-delay="1000" class="form-control" :class="{'input': true, 'is-danger': errors.has('password_confirmation') }" type="password" placeholder="Confirm Password" v-model="user.password_confirmation">
                            <span v-show="errors.has('password_confirmation')" class="help is-danger">{{ errors.first('password_confirmation') }}</span>
                        </div>
                        <button class="button is-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

/*EXTRA - ELEMENT IO*/
<el-input name="userName"
v-model="form.userName"
v-validate="'required|alpha_dash|max:50'"
data-vv-name="userName"
data-vv-as="User Name"
icon="fa-user"
size="large"
placeholder="User Name"
@blur="$validator.validate('userName', form.userName)"
autofocus></el-input>


<script>
    export default {
        data() {
            return {
                user: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null
                }
            }
        },
        methods: {
            register() {
                this.$validator.validateAll()
                        .then((result) => {
                            if(result) {
                                var data = {
                                    name: this.user.name,
                                    email: this.user.email,
                                    password: this.user.password,
                                    password_confirmation: this.user.password_confirmation
                                }
                                this.$store.dispatch('registerUser', data);
                            }
                        });
            }

        }
    }
</script>

<style>
    /**
     * > red input border
     * > red help text
     * > helt text styling
     * > green focud area
     */
    .input.is-danger, .textarea.is-danger {
        border-color: red;
    }
    .help.is-danger {
        color: red;
    }
    .help {
        display: block;
        margin-top: 8px;
        font-size: 12px;
    }
    .input.is-active, .input:active, .input:focus, .textarea.is-active, .textarea:active, .textarea:focus {
        border-color: #00d1b2;
        outline: none;
    }
</style>


/*Vue Store - Actions*/
registerUser({ commit }, data) {
	axios.post('api/register', data)
			.then((response) => {
				if(response.status == 200) {
					swal({
						type: 'success',
						title: 'Success!',
						showConfirmButton: false,
						timer: 1800
					}).catch(swal.noop)
				}
			})
			.catch((error) => {
				var rawErrors = error.response.data;
				var errors = [];

				for (var key in rawErrors) {
					if (rawErrors.hasOwnProperty(key)) {
						errors.push(rawErrors[key]);
					}
				}
				swal({
					type: 'error',
					title: 'Failure!',
					text: errors,
					showConfirmButton: true,
				}).catch(swal.noop)

			});
}