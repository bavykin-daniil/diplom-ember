import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bass-guitar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bass-guitar');
    assert.ok(route);
  });
});
