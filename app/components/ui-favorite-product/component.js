import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	store: service(),

	actions: {
	    deleteFavoriteProduct(){
	    	const favoriteProduct = this.store.peekRecord('favorites', this.id)
	    	favoriteProduct.destroyRecord();
	    	alert('Товар видалено з бажаних товарів')
	    }
	  }
});