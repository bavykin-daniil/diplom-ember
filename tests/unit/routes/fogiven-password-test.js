import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | fogiven-password', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:fogiven-password');
    assert.ok(route);
  });
});
