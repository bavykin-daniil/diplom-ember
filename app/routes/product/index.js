import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    const params = this.paramsFor('product')
    
    const model = this.store.findRecord('product', params.id )

    return model
  }
});
