import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	session: service(),
	
	store: service(),

	firebaseApp: service(),

	actions: {
	    	async updateProduct(){

	    	const images = this.images

	    	let picture = ''

			if (images && images.length) {
				const storage = await this.firebaseApp.storage()
				
				const ref = storage.ref().child(this.name)

				const response = await ref.put(images[0])

				picture = await response.ref.getDownloadURL()
			}

	    	const product = this.store.peekRecord('product', this.id)
			product.setProperties({
				'name': this.name,
				'purpose': this.purpose,
				'fabricator': this.fabricator,
				'size': this.size,
				'upperDeck': this.upperDeck,
				'loverDeck': this.loverDeck, 
				'vulture': this.vulture,
				'fingerBoard': this.fingerBoard,
				'color': this.color,
				'price': this.price,
				'guarantie': this.guarantie,
				'quantityOfStruns': this.quantityOfStruns,
				'bodyMaterial': this.bodyMaterial,
				'neckDesign': this.neckDesign,
				'numberOfFrets': this.numberOfFrets,
				'menzura': this.menzura,
				'deckForm': this.deckForm,
				'pickupType': this.pickupType,
				'bodyShape': this.bodyShape,
				'bridge': this.bridge,
				'electronics': this.electronics,
				'picture': picture || this.picture
			})
			product.save()
			alert('Запис про товар оновлено!')
	    }
	  }
});
