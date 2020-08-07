import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';

export default Route.extend({
	queryParams: {
	name: {
    	refreshModel: true
    },
    fabricator: {
    	refreshModel: true
    },
	size: {
		refreshModel: true
	},
	upperDeck: {
		refreshModel: true
	},
	loverDeck: {
		refreshModel: true
	},
	vulture: {
		refreshModel: true
	},
	fingerBoard: {
		refreshModel: true
	},
	color: {
		refreshModel: true
	},
	minPrice: {
		refreshModel: true
	},
	maxPrice: {
		refreshModel: true
	},
	quantityOfStruns: {
		refreshModel: true
	},
	bodyMaterial: {
		refreshModel: true
	},
	neckDesign: {
		refreshModel: true
	},
	numberOfFrets: {
		refreshModel: true
	},
	menzura: {
		refreshModel: true
	},
	pickupType: {
		refreshModel: true
	},
	bodyShape: {
		refreshModel: true
	},
	bridge: {
		refreshModel: true
	},
	electronics: {
		refreshModel: true
	}
  },

  model(params = {}) {
		return this.store.query('product', {

			query: (ref) => {
				let query = ref

				params.purpose = "Електрогітара"

				Object.keys(params).forEach((key) => {
					let operator = '=='

					if (params[key]) {
						let value = params[key]

						if (key === 'minPrice') {
							key = 'price'
							value = value * 1
							operator = '>='
						}

						if (key === 'maxPrice') {
							key = 'price'
							value = value * 1
							operator = '<='
						}
						
						query = query.where(key, operator, value)
					}
				})

				return query
			}
		})
	}
});
