import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
	session: service(),

	beforeModel() {
		if (!this.session.isAuthenticated) {
			alert ('Для того, щоб користуватись особистим кабiнетом, треба спочатку пройти реєстрацію')
			return this.transitionTo('sign-up')
		}
	}
});
