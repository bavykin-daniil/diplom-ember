import DS from 'ember-data';
import { inject as service } from '@ember/service';
const { Model } = DS;

export default Model.extend({
	session: service(),

	product:DS.belongsTo('product'),
	userId:DS.attr('string', {
		defaultValue(model){
			return model.get('session.currentUser.uid')
		}
	}),
});
