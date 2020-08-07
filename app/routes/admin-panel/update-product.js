import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  beforeModel() {
    if (!this.session.isAdmin) {
      this.transitionTo('/')
    }
  },

  model() {
		return this.store.query( 'product',{} )
	}

});
