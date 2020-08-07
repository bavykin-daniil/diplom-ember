import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
	session: service(),

	beforeModel() {
		if (!this.session.isAuthenticated) {
			alert ('Для того, щоб користуватись особистим кабiнетом, треба спочатку пройти реєстрацію')
			return this.transitionTo('sign-up')
		}
	},

	model() {
		return this.store.query( 'orders',{
			query: (ref) => {
				let query = ref

				const uid = this.session.currentUser.uid

				query = query.orderBy("created","desc").where("uid","==",uid)

				return query
			}
		} )
	}

});
