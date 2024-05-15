import { module, test } from 'qunit';
import { setupTest } from 'to-do-list/tests/helpers';

module('Unit | Service | local', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:local');
    assert.ok(service);
  });
});
