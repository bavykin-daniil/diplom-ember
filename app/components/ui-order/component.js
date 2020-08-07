import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	store: service(),

	firebaseApp: service(),

	actions: {
    async addOrder() {
    	const {
				FIO,
				emailAdress,
				mobileNumber,
				city,
				postOfficeNumber,
				product,
				created,
				dateOrder
			} = this

			if (FIO != null && emailAdress != null && mobileNumber != null && city != null && postOfficeNumber != null) {
				const record = this.store.createRecord('orders', {
					FIO,
					emailAdress,
					mobileNumber,
					city,
					postOfficeNumber,
					'created': new Date(),
					'dateOrder': new Date().toLocaleString("ru")
				})

				
				record.set('product', product)

				await record.save()
				
	     	alert('Замовлення прийнято на обробку, перегляньте свою iсторiю замовлень!')
	     } else {
	     	alert ('Заповніть усі поля!')
	     }

     }
 	}
});
