import DS from 'ember-data';
import { inject as service } from '@ember/service';
const { Model } = DS;

export default Model.extend({
	session: service(),

	description:DS.attr('string'),
	username:DS.attr('string', {
		defaultValue(model){
			return model.get('session.currentUser.displayName')
		}
	}),
	product:DS.belongsTo('product'),
	created:DS.attr('number', {
		defaultValue(){
			return Date.parse(new Date())
		}
	}),
	dateComment:DS.attr('string', {
		defaultValue(){
			return (new Date())
		}
	}),
});
