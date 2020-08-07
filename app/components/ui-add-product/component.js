import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	
	session: service(),

	firebaseApp: service(),

	currentImage: computed('images', {
		get() {
			const {
				images = []
			} = this

			if (!images.length) {
				return null
			}

			return URL.createObjectURL(images[0])
		}
	}),

	  actions: {
	    async addProduct() {
				const {
					name,
					purpose,
					fabricator,
					size,
					upperDeck,
					loverDeck,
					vulture,
					fingerBoard,
					color,
					price,
					guarantie,
					quantityOfStruns,
					bodyMaterial,
					neckDesign,
					numberOfFrets,
					menzura,
					deckForm,
					pickupType,
					bodyShape,
					bridge,
					electronics,
					images
				} = this

				let picture = ''

				if (images && images.length) {
					const storage = await this.firebaseApp.storage()
					
					const ref = storage.ref().child(name)

					const response = await ref.put(images[0])

					picture = await response.ref.getDownloadURL()
				}
				if (name != null && purpose != null && size != null && fabricator != null && upperDeck != null && loverDeck != null && vulture != null && fingerBoard != null && color != null && price  != null && guarantie != null) {
					this.store.createRecord('product', {
						name,
						purpose,
						fabricator,
						size,
						upperDeck,
						loverDeck,
						vulture,
						fingerBoard,
						color,
						price,
						guarantie,
						quantityOfStruns,
						bodyMaterial,
						neckDesign,
						numberOfFrets,
						menzura,
						deckForm,
						pickupType,
						bodyShape,
						bridge,
						electronics,
						picture
					}).save()

					alert('Товар додано до каталогу!')

					document.forms.addForm.reset()
				} else {
					alert('Заповніть усі необхідні поля!')
				}
	    }
	  }
});
