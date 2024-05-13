import { module, test } from 'qunit';
import { setupRenderingTest } from 'to-do-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | list-of-t', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ListOfT />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ListOfT>
        template block text
      </ListOfT>
    `);

    assert.dom().hasText('template block text');
  });
});
