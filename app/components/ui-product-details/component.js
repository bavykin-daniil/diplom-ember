import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	store: service(),
	
	session: service(),

	comments: computed(function(){
		return this.store.query('comment',{
			query: (ref) => {
				let query = ref

				const productId = this.product.id

				query = query.where("product","==",productId).orderBy("created","desc")

				return query
			}
		})

		return comments
	}),

	actions: {
    async addComment() {
			const {
				description,
				product,
				dateComment,
				created
			} = this

			if (description != null) {
				const record = this.store.createRecord('comment', {
					description,
					'created': new Date(),
					'dateComment': new Date().toLocaleString("ru")
				})

				record.set('product', product)

				await record.save()

				document.getElementById('commentForm').value = "";
			} else {
				alert('Перед тим як залишати відгук про товар, треба ввести в поле для відгуку текст')
			}
    },

    async addFavorite() {
    	const {
				product,
				session
			} = this

		if (session.isAuthenticated) {
			const record = this.store.createRecord('favorites', {})

				record.set('product', product)

				await record.save()

				alert('Товар було додано до розділу бажаних товарів, перегляньте особисти кабінет')
		} else {
			alert ('Для того, щоб додати товар до розділу "Бажані товари", спочатку треба пройти реєстрацію або авторизуватись')
		} 

    	
    },

    async voteOne() {
    	const {
    		raiting,
    		product
    	} = this

    	// product.(raiting == 1)
    	// product.save()

    }
  }
});
