import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import { A } from '@ember/array';

export default Component.extend({
  classNames: [
    'late-products',
    'ui-slider'
  ],

  stepWidth: 0,

  slides: A([]),

  currentIndex: 0,

  width: computed({
    get() {
      return this.element.querySelector('.late-products-container').offsetWidth
    }
  }).volatile(),

  translateXLimit: computed('width', 'sliderContainerWidth', {
    get() {
      return (this.sliderContainerWidth - this.width) * -1
    }
  }),

  sliderContainerWidth: computed('slides.length', 'stepWidth', {
    get() {
      return this.slides.length * this.stepWidth
    }
  }),

  sliderContainerTranslateX: computed('currentIndex', 'stepWidth', {
    get() {
      return this.currentIndex * this.stepWidth * -1
    }
  }),

  sliderContainerStyle: computed('sliderContainerWidth', 'sliderContainerTranslateX', {
    get() {
      return new htmlSafe(`width: ${this.sliderContainerWidth}px; transform: translateX(${this.sliderContainerTranslateX}px)`)
    }
  }),

  willDestroyElement() {
    this._super(...arguments);
    this.slides.clear()
  },

  actions: {
    registerSlide(slide) {
      this.slides.pushObject(slide)
    },

    unregisterSlide(slide) {
      this.set('slides', this.slides.filter(s => s !== slide))
    },

    next() {
      if (this.translateXLimit >= this.sliderContainerTranslateX) {
        return
      }

      this.set('currentIndex', this.currentIndex + 1)
    },

    prev() {
      if (!this.currentIndex) {
        return
      }

      this.set('currentIndex', this.currentIndex - 1)
    }
  }
});
