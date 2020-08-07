import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	actions: {
		async login() {
			const {
				email,
				password,
				session
			} = this

			session.signIn(email, password)
				.catch(function(error){
					alert(error)
				});
		},

		async logout() {
			const {
				session
			} = this

			session.signOut()
				.catch(function(error) {
				});
		}

	}
});
