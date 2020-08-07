import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	FIO:DS.attr('string'),
	emailAdress:DS.attr('string'),
	mobileNumber:DS.attr('string'),
	message:DS.attr('string'),

	created:DS.attr('number', {
		defaultValue(){
			return Date.parse(new Date())
		}
	}),
	dateQuestion:DS.attr('string', {
		defaultValue(){
			return (new Date())
		}
	})
});
