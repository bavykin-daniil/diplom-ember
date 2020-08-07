import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	password: computed.reads('session.currentUser.password'),

	actions: {
		async updatePassword(){
			const {
				password,
				repeatPassword,
				session
			} = this

			if (password == repeatPassword) {
				session.currentUser.updatePassword(password)
				.then(function() {
					alert('Пароль успiшно змiненно')
				})
				.catch(function(error) {
				});
			}
			else alert('Введенi паролi не спiвпадають!')
		}
	}
});