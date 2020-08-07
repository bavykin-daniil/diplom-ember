import DS from 'ember-data';
import { inject as service } from '@ember/service';
const { Model } = DS;

export default Model.extend({
	session: service(),

	FIO:DS.attr('string'),
	emailAdress:DS.attr('string'),
	mobileNumber:DS.attr('number'),
	city:DS.attr('string'),
	postOfficeNumber:DS.attr('string'),
	created:DS.attr('number', {
		defaultValue(){
			return Date.parse(new Date())
		}
	}),
	dateOrder:DS.attr('string', {
		defaultValue(){
			return (new Date())
		}
	}),

	product: DS.belongsTo('product', {
	    subcollection: true
	}),
	
	uid:DS.attr('string',{
		defaultValue(model){
			return model.get('session.currentUser.uid')
		}
	})
});
