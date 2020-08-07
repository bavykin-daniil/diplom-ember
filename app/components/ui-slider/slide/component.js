import Component from '@ember/component';

export default Component.extend({
  tagName: '',
  
  registerSlide() {},

  unregisterSlide() {},

  didInsertElement() {
    this._super(...arguments);
    this.registerSlide(this)
  },

  willDestroyElement() {
    this._super(...arguments);
    this.unregisterSlide(this)
  },
});
