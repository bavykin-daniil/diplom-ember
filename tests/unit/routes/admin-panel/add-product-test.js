import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | admin-panel/add-product', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:admin-panel/add-product');
    assert.ok(route);
  });
});
