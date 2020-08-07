import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
	model() {
		return this.store.query( 'product',{} )
	}
});
