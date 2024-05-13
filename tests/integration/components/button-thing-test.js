import { module, test } from 'qunit';
import { setupRenderingTest } from 'to-do-list/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | button-thing', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<ButtonThing />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <ButtonThing>
        template block text
      </ButtonThing>
    `);

    assert.dom().hasText('template block text');
  });
});
