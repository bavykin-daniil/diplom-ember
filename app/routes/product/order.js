import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
	session: service(),

	beforeModel() {
		if (!this.session.isAuthenticated) {
			alert ('Для того, щоб замовляти товари, треба спочатку пройти реєстрацію')
			return this.transitionTo('sign-up')
		}
	},

	model() {
		const params = this.paramsFor('product')

    return this.store.findRecord('product', params.id )
	}
});
