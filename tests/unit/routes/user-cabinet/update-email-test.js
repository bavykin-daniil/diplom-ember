import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | user-cabinet/update-email', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:user-cabinet/update-email');
    assert.ok(route);
  });
});
