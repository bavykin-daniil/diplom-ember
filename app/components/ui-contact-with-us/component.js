import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	store: service(),

	firebaseApp: service(),

	actions: {
    async addQuestion() {
    	const {
				FIO,
				emailAdress,
				mobileNumber,
				message,
				created,
				dateQuestion
			} = this

			if (FIO != null && emailAdress != null && mobileNumber != null && message != null) {
				this.store.createRecord('question', {
					FIO,
					emailAdress,
					mobileNumber,
					message,
					'created': new Date(),
					'dateQuestion': new Date().toLocaleString("ru")
				}).save()

				alert('Повідомлення прийнято, вам напишуть листа на вказану електронну адресу або зателефонують за вказаним телефонним номером')
				document.getElementById('PIB').value="";
				document.getElementById('emailAdress').value="";
				document.getElementById('phoneNumber').value="";
				document.getElementById('messages').value="";
			}
			else {
				alert('Заповніть усі поля')
			}
     }
 	}
});
