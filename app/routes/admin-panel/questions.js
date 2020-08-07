import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
	model() {
		return this.store.query( 'question',{
			query: (ref) => {
				let query = ref

				query = query.orderBy("created","desc").limit(30)

				return query
			}
		} )
	}
});
