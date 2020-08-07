import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	email: computed.reads('session.currentUser.email'),

	actions: {
		async updateUserEmail() {
			const{
				email,
				session
			} = this

			session.currentUser.updateEmail(email)
			.then(function() {
				alert('Електронну пошту було успiшно змiненно!')
			})
			.catch(function(error) {
			});
		}
	}
});