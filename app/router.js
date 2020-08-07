import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('catalog');
  this.route('about-us');
  this.route('classic-guitar');
  this.route('electroguitar');
  this.route('acoustic-guitar');
  this.route('bass-guitar');

  this.route('product', { path: '/product/:id' }, function() {
    this.route('order', { path: '/order'});
  });

  this.route('sign-up');
  this.route('user-cabinet', { path: '/user-cabinet' }, function() {
    this.route('update-informartion');
    this.route('update-password');
    this.route('favorites');
    this.route('purchase-history');
    this.route('update-email');
  });

  this.route('admin-panel', function() {
    this.route('add-product');
    this.route('delete-product');
    this.route('update-product');
    this.route('questions');
    this.route('order-history');
  });
  this.route('admin-panel-sign-in');
  this.route('fogiven-password');
});

export default Router;
