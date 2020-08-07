import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | admin-panel/delete-product', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:admin-panel/delete-product');
    assert.ok(route);
  });
});
