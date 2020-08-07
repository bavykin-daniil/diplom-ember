import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | acoustic-guitar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:acoustic-guitar');
    assert.ok(route);
  });
});
