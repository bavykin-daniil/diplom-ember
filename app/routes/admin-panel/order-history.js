import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
  session: service(),

  beforeModel() {
    if (!this.session.isAdmin) {
      this.transitionTo('/')
    }
  },

  model() {
		return this.store.query( 'orders',{
			query: (ref) => {

				let query = ref

				query = query.orderBy("created","desc").limit(100)

				return query
			}
		} )
	}

});
