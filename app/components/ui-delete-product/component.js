import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	session: service(),

	store: service(),

	actions: {
	    deleteProduct(){
	    	if (confirm("Ви точно хочете видалити данний товар?")) {
	    		const product = this.store.peekRecord('product', this.id)
		    	product.destroyRecord();
		    	alert('Товар видалено з каталогу!')
	    	}
	    }
	}
});
