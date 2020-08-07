import DS from 'ember-data';
const { Model } = DS;

export default Model.extend({
	name:DS.attr('string'),
	purpose:DS.attr('string'),
	fabricator:DS.attr('string'),
	size:DS.attr('string'),
	upperDeck:DS.attr('string'),
	loverDeck:DS.attr('string'),
	vulture:DS.attr('string'),
	fingerBoard:DS.attr('string'),
	color:DS.attr('string'),
	price:DS.attr('number'),
	guarantie:DS.attr('number'),
	quantityOfStruns:DS.attr('number', {
		defaultValue() {
			return '-'
		}
	}),
	bodyMaterial:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	neckDesign:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	numberOfFrets:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	menzura:DS.attr('number', {
		defaultValue() {
			return '-'
		}
	}),
	deckForm:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	pickupType:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	bodyShape:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	bridge:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	electronics:DS.attr('string', {
		defaultValue() {
			return '-'
		}
	}),
	picture: DS.attr('string', {
		defaultValue() {
			return '/images/1.jpg'
		}
	}),
	raiting:DS.attr('number') 
});
