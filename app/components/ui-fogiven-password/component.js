import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	actions:{
		async updatePasswordWithEmail(){
			const {
				email,
				session
			} = this

			session.updatePasswordWithEmail(email)
			.then(function() {
			  // Email sent.
			}).catch(function(error) {
			  alert(error)
			});
		}
	}

});