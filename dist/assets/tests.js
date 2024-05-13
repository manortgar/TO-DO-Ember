'use strict';

define("to-do-list/tests/helpers/index", ["exports", "ember-qunit"], function (_exports, _emberQunit) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.setupApplicationTest = setupApplicationTest;
  _exports.setupRenderingTest = setupRenderingTest;
  _exports.setupTest = setupTest;
  0; //eaimeta@70e063a35619d71f0,"ember-qunit"eaimeta@70e063a35619d71f
  // This file exists to provide wrappers around ember-qunit's
  // test setup functions. This way, you can easily extend the setup that is
  // needed per test type.

  function setupApplicationTest(hooks, options) {
    (0, _emberQunit.setupApplicationTest)(hooks, options);

    // Additional setup for application tests can be done here.
    //
    // For example, if you need an authenticated session for each
    // application test, you could do:
    //
    // hooks.beforeEach(async function () {
    //   await authenticateSession(); // ember-simple-auth
    // });
    //
    // This is also a good place to call test setup functions coming
    // from other addons:
    //
    // setupIntl(hooks); // ember-intl
    // setupMirage(hooks); // ember-cli-mirage
  }
  function setupRenderingTest(hooks, options) {
    (0, _emberQunit.setupRenderingTest)(hooks, options);

    // Additional setup for rendering tests can be done here.
  }
  function setupTest(hooks, options) {
    (0, _emberQunit.setupTest)(hooks, options);

    // Additional setup for unit tests can be done here.
  }
});
define("to-do-list/tests/integration/components/button-thing-test", ["qunit", "to-do-list/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | button-thing', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ButtonThing />
      */
      {
        "id": "VxrjY437",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"button-thing\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/button-thing-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ButtonThing>
              template block text
            </ButtonThing>
          
      */
      {
        "id": "Qe95Kylk",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"button-thing\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/button-thing-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("to-do-list/tests/integration/components/list-of-t-test", ["qunit", "to-do-list/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | list-of-t', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <ListOfT />
      */
      {
        "id": "UPbXMSqz",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"list-of-t\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/list-of-t-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <ListOfT>
              template block text
            </ListOfT>
          
      */
      {
        "id": "EhVO9nXe",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"list-of-t\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/list-of-t-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("to-do-list/tests/integration/components/list-test", ["qunit", "to-do-list/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | list', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <List />
      */
      {
        "id": "J1r77UEu",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"list\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/list-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <List>
              template block text
            </List>
          
      */
      {
        "id": "U5RLH5jP",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"list\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/list-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("to-do-list/tests/integration/components/search-test", ["qunit", "to-do-list/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | search', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Search />
      */
      {
        "id": "dygcBVWn",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"search\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/search-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Search>
              template block text
            </Search>
          
      */
      {
        "id": "PouGW6jG",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"search\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/search-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("to-do-list/tests/integration/components/thing-test", ["qunit", "to-do-list/tests/helpers", "@ember/test-helpers", "@ember/template-factory"], function (_qunit, _helpers, _testHelpers, _templateFactory) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers",0,"@ember/test-helpers",0,"@ember/template-factory"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Integration | Component | thing', function (hooks) {
    (0, _helpers.setupRenderingTest)(hooks);
    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        <Thing />
      */
      {
        "id": "SRktbrtS",
        "block": "[[[8,[39,0],null,null,null]],[],false,[\"thing\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/thing-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('');

      // Template block usage:
      await (0, _testHelpers.render)((0, _templateFactory.createTemplateFactory)(
      /*
        
            <Thing>
              template block text
            </Thing>
          
      */
      {
        "id": "RsC78QTf",
        "block": "[[[1,\"\\n      \"],[8,[39,0],null,null,[[\"default\"],[[[[1,\"\\n        template block text\\n      \"]],[]]]]],[1,\"\\n    \"]],[],false,[\"thing\"]]",
        "moduleName": "/Users/mortega/Desktop/Ember/TO-DO-Ember/to-do-list/tests/integration/components/thing-test.js",
        "isStrictMode": false
      }));
      assert.dom().hasText('template block text');
    });
  });
});
define("to-do-list/tests/test-helper", ["to-do-list/app", "to-do-list/config/environment", "qunit", "@ember/test-helpers", "qunit-dom", "ember-qunit"], function (_app, _environment, QUnit, _testHelpers, _qunitDom, _emberQunit) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"to-do-list/app",0,"to-do-list/config/environment",0,"qunit",0,"@ember/test-helpers",0,"qunit-dom",0,"ember-qunit"eaimeta@70e063a35619d71f
  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _qunitDom.setup)(QUnit.assert);
  (0, _emberQunit.start)();
});
define("to-do-list/tests/unit/routes/list-test", ["qunit", "to-do-list/tests/helpers"], function (_qunit, _helpers) {
  "use strict";

  0; //eaimeta@70e063a35619d71f0,"qunit",0,"to-do-list/tests/helpers"eaimeta@70e063a35619d71f
  (0, _qunit.module)('Unit | Route | list', function (hooks) {
    (0, _helpers.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:list');
      assert.ok(route);
    });
  });
});
define('to-do-list/config/environment', [], function() {
  var prefix = 'to-do-list';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('to-do-list/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
