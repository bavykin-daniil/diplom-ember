import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	displayName: computed.reads('session.currentUser.displayName'),

	actions: {
		async updateUserInformation() {
			const{
				displayName,
				session
			} = this

			session.currentUser.updateProfile({
			  displayName
			})
			.then(function() {
				alert('Контактну iнформацiю було успiшно змiненно!')
			})
			.catch((error) => {
				alert(error)
			});
		}
	}
});