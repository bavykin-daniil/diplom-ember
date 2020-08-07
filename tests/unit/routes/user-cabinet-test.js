import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user-cabinet', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user-cabinet');
    assert.ok(route);
  });
});
