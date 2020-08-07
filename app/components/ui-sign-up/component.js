import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	actions:{
		async signUp(){
			const {
				email,
				password,
				repeatPassword,
				session,
				displayName,
				phoneNumber
			} = this

			if (password == repeatPassword) {
				try {
					await session.signUp(email, password)

					await session.currentUser.updateProfile({displayName})

				} catch(error) {
					alert(error)
				}
				alert('Вітаємо, ви успішно пройшли реєстрацію!')
				document.getElementById('nameUser').value = "";
				document.getElementById('emailAdress').value = "";
				document.getElementById('password').value = "";
				document.getElementById('repeatPassword').value = "";
			}
			else {
				alert('Введеннi паролi не спiвпадають')
				document.getElementById('password').value = "";
				document.getElementById('repeatPassword').value = "";
			}
		}
	}

});
