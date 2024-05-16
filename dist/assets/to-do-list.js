'use strict';



;define("to-do-list/app", ["exports", "@ember/application", "ember-resolver", "ember-load-initializers", "to-do-list/config/environment"], function (_exports, _application, _emberResolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/application",0,"ember-resolver",0,"ember-load-initializers",0,"to-do-list/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class App extends _application.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "modulePrefix", _environment.default.modulePrefix);
      _defineProperty(this, "podModulePrefix", _environment.default.podModulePrefix);
      _defineProperty(this, "Resolver", _emberResolver.default);
    }
  }
  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("to-do-list/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component/-private/ember-component-manager"eaimeta@70e063a35619d71f
});
;define("to-do-list/components/button-thing", ["exports", "@ember/component", "@ember/component/template-only", "@ember/template-factory"], function (_exports, _component, _templateOnly, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/template-only",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <!--<button
    type="button"
    class="buttonT"
    id={{@thing.id}}
    {{on "click" (fn @thing.changeStatus thing.id)}}
    {{on "click" @thing.conditional}}
    {{on "click" @thing.print}}
  >
    <input type="checkbox" name="" id="input" checked={{@thing.status}} />
    <p class="{{if @thing.status 'through'}}">{{@thing.name}}</p>
  </button>-->
  <button
    type="button"
    class="buttonT"
    id={{@thing.id}}
    {{on "click" (fn @onDoThing @thing.id)}}
  ><input type="checkbox" name="" id="input" checked={{@thing.status}} />
    <p class="{{if @thing.status 'through'}}">{{@thing.name}}</p></button>
  */
  {
    "id": "stcwh7TU",
    "block": "[[[3,\"<button\\n  type=\\\"button\\\"\\n  class=\\\"buttonT\\\"\\n  id={{@thing.id}}\\n  {{on \\\"click\\\" (fn @thing.changeStatus thing.id)}}\\n  {{on \\\"click\\\" @thing.conditional}}\\n  {{on \\\"click\\\" @thing.print}}\\n>\\n  <input type=\\\"checkbox\\\" name=\\\"\\\" id=\\\"input\\\" checked={{@thing.status}} />\\n  <p class=\\\"{{if @thing.status 'through'}}\\\">{{@thing.name}}</p>\\n</button>\"],[1,\"\\n\"],[11,\"button\"],[24,0,\"buttonT\"],[16,1,[30,1,[\"id\"]]],[24,4,\"button\"],[4,[38,1],[\"click\",[28,[37,2],[[30,2],[30,1,[\"id\"]]],null]],null],[12],[10,\"input\"],[14,3,\"\"],[14,1,\"input\"],[15,\"checked\",[30,1,[\"status\"]]],[14,4,\"checkbox\"],[12],[13],[1,\"\\n  \"],[10,2],[15,0,[29,[[52,[30,1,[\"status\"]],\"through\"]]]],[12],[1,[30,1,[\"name\"]]],[13],[13]],[\"@thing\",\"@onDoThing\"],false,[\"button\",\"on\",\"fn\",\"input\",\"p\",\"if\"]]",
    "moduleName": "to-do-list/components/button-thing.hbs",
    "isStrictMode": false
  });
  var _default = _exports.default = (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, (0, _templateOnly.default)());
});
;define("to-do-list/components/list-copy", ["exports", "@glimmer/component", "@glimmer/tracking", "@ember/object", "to-do-list/objects/thing"], function (_exports, _component, _tracking, _object, _thing) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"to-do-list/objects/thing"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ListComponent = _exports.default = (_class = class ListComponent extends _component.default {
    //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
    // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
    //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

    constructor(owner, args) {
      super(owner, args);
      _defineProperty(this, "debugger", void 0);
      _defineProperty(this, "hola", 'hola');
      _initializerDefineProperty(this, "arrThing", _descriptor, this);
      _initializerDefineProperty(this, "query", _descriptor2, this);
      _initializerDefineProperty(this, "thing", _descriptor3, this);
      _initializerDefineProperty(this, "status", _descriptor4, this);
      _initializerDefineProperty(this, "statusCkd", _descriptor5, this);
      this.conditional();
      this.print();
    }
    conditional() {
      let local = JSON.parse(localStorage.getItem('listOfThing'));
      console.log('esto es local', local);
      if (local != null) {
        this.arrThing = [...local];
        console.log('esto es conditional', this.arrThing);
      } else {
        this.arrThing = []; //este else no me vale para nada, ya que le doy el valor que ya traia al array
      }
      console.log('esto es arrThing', this.arrThing);
    }
    //para que se ejecute desde el template la funcion
    print() {
      if (this.query != null) {
        console.log('esto es query', this.query);
        this.thing.name = this.query;
        console.log('esto es thing', this.thing); //uso var por que let solo me lo reconoce dentro del bloque if
      }
      if (this.arrThing.length != 0) {
        if (this.thing.name != null && this.thing.name != '') {
          this.arrThing = [...this.arrThing, this.thing];
          console.log('esto es thingel array tiene ya un elemento');
        }
      } else {
        console.log('ha entrado', this.arrThing.length);
        if (this.thing.name != null && this.thing.name != '') {
          console.log('esto es thing nombre', this.thing.name);
          this.arrThing = [this.thing];
        }
      }
      localStorage.setItem('listOfThing', JSON.stringify(this.arrThing));
    }
    changeStatus() {
      this.statusCkd = !this.statusCkd;
      this.status = this.statusCkd;
      //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
      let objIndex = this.arrThing.findIndex(x => x.name == this.thing.name);
      console.log('este deberia ser el objeto', this.arrThing[objIndex]);
      console.log('este es el status que deberia actualizar la variable this.status en el template', this.thing); //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo

      console.log('este es el input checked', this.statusCkd);
      return this.status;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "arrThing", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "query", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "thing", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _thing.default(this.query, false);
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "status", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return this.thing.status;
    }
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "statusCkd", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return document.getElementById('input').checked;
    }
  }), _applyDecoratedDescriptor(_class.prototype, "conditional", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "conditional"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "print", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "print"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeStatus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeStatus"), _class.prototype)), _class);
});
;define("to-do-list/components/list", ["exports", "@ember/component", "@glimmer/component", "@glimmer/tracking", "@ember/object", "to-do-list/objects/thing", "@ember/service", "tracked-built-ins", "@ember/template-factory"], function (_exports, _component, _component2, _tracking, _object, _thing, _service, _trackedBuiltIns, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
  0; //eaimeta@70e063a35619d71f0,"@glimmer/component",0,"@glimmer/tracking",0,"@ember/object",0,"to-do-list/objects/thing",0,"@ember/service",0,"tracked-built-ins",0,"@ember/template-factory",0,"@ember/component"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  const __COLOCATED_TEMPLATE__ = (0, _templateFactory.createTemplateFactory)(
  /*
    <div>
    <span>What have to you do?</span>
    <span>You have to do {{this.numberOfThings2}} things</span>
    <div class="search">
      <Input
        @value={{this.query}}
        class="light"
        maxlength="250"
        {{on "keydown" this.enter}}
      />
      <button {{on "click" this.createThing}} type="button">submit</button>
  
    </div>
  
  </div>
  
  <div class="block">
    {{#each this.myTrackedArray as |thing|}}
      {{log thing}}
      <ButtonThing @thing={{thing}} @onDoThing={{this.toggleThing}} />
    {{/each}}
  </div>
  <div class="blockH">
    <button type="button" class="buttonT" {{on "click" this.removeAll}}>Delete All</button>
    <button
      type="button"
      class="buttonT"
      {{on "click" this.fillTrackedArray}}
    >vamo a verlo</button>
  
  </div>
  */
  {
    "id": "Xsl9+yRK",
    "block": "[[[10,0],[12],[1,\"\\n  \"],[10,1],[12],[1,\"What have to you do?\"],[13],[1,\"\\n  \"],[10,1],[12],[1,\"You have to do \"],[1,[30,0,[\"numberOfThings2\"]]],[1,\" things\"],[13],[1,\"\\n  \"],[10,0],[14,0,\"search\"],[12],[1,\"\\n    \"],[8,[39,2],[[24,0,\"light\"],[24,\"maxlength\",\"250\"],[4,[38,3],[\"keydown\",[30,0,[\"enter\"]]],null]],[[\"@value\"],[[30,0,[\"query\"]]]],null],[1,\"\\n    \"],[11,\"button\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"createThing\"]]],null],[12],[1,\"submit\"],[13],[1,\"\\n\\n  \"],[13],[1,\"\\n\\n\"],[13],[1,\"\\n\\n\"],[10,0],[14,0,\"block\"],[12],[1,\"\\n\"],[42,[28,[37,6],[[28,[37,6],[[30,0,[\"myTrackedArray\"]]],null]],null],null,[[[1,\"    \"],[1,[54,[[30,1]]]],[1,\"\\n    \"],[8,[39,8],null,[[\"@thing\",\"@onDoThing\"],[[30,1],[30,0,[\"toggleThing\"]]]],null],[1,\"\\n\"]],[1]],null],[13],[1,\"\\n\"],[10,0],[14,0,\"blockH\"],[12],[1,\"\\n  \"],[11,\"button\"],[24,0,\"buttonT\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"removeAll\"]]],null],[12],[1,\"Delete All\"],[13],[1,\"\\n  \"],[11,\"button\"],[24,0,\"buttonT\"],[24,4,\"button\"],[4,[38,3],[\"click\",[30,0,[\"fillTrackedArray\"]]],null],[12],[1,\"vamo a verlo\"],[13],[1,\"\\n\\n\"],[13]],[\"thing\"],false,[\"div\",\"span\",\"input\",\"on\",\"button\",\"each\",\"-track-array\",\"log\",\"button-thing\"]]",
    "moduleName": "to-do-list/components/list.hbs",
    "isStrictMode": false
  });
  let ListComponent = _exports.default = (_class = class ListComponent extends _component2.default {
    //cosas para el Lunes, creo que deberia refactorizar el código, pese a que los objretos se crean bien y se guardan y demás después no puedo indentificarlo
    // array con lo que se me hace dificil el cambiar el estado y guardarlo en el localstorage para que sea persistente
    //  no tengo forma de que se actualice el elemento que quiero del local. actualizo el status pero de una thing nueva.

    constructor(owner, args) {
      super(owner, args);
      _initializerDefineProperty(this, "myTrackedArray", _descriptor, this);
      _initializerDefineProperty(this, "local", _descriptor2, this);
      _defineProperty(this, "hola", "hola");
      _initializerDefineProperty(this, "arrThing", _descriptor3, this);
      _initializerDefineProperty(this, "query", _descriptor4, this);
      //Quuiero vaciar después la query, como?? otra vez seleccionando el id del input y vaciandolo?
      _initializerDefineProperty(this, "numberOfThings2", _descriptor5, this);
      this.arrThing = this.args.model;
      this.myTrackedArray = this.args.model;
      this.fillArray();
      this.calculateNumOfThings();
    }
    createThing() {
      this.fillArray();
      this.fillTrackedArray();
      this.calculateNumOfThings();
    }
    toggleThing(idThing) {
      //this.changeStatus(idThing);
      this.changeStatusTrack(idThing);
      this.calculateNumOfThings();
    }
    enter(event) {
      if (event.code === "Enter") {
        this.createThing();
      }
    }
    //para que se ejecute desde el template la funcion
    fillArray() {
      var thing = new _thing.default(this.query, false);
      if (this.query != null) {
        thing.name = this.query;
        //uso var por que let solo me lo reconoce dentro del bloque if
        this.query = "";
      }
      if (this.arrThing.length != 0) {
        if (thing.name != null && thing.name != "") {
          this.arrThing = [...this.arrThing, thing];
        }
      } else {
        if (thing.name != null && thing.name != "") {
          this.arrThing = [thing];
        }
      }
      this.local.setStorage(this.arrThing);
    }
    //para que se ejecute desde el template la funcion
    fillTrackedArray() {
      var thing = new _thing.default(this.query, false);
      if (this.query != null) {
        thing.name = this.query;
        //uso var por que let solo me lo reconoce dentro del bloque if
        this.query = "";
      }
      if (this.myTrackedArray.length != 0) {
        if (thing.name != null && thing.name != "") {
          this.myTrackedArray = [...this.myTrackedArray, thing];
        }
      } else {
        if (thing.name != null && thing.name != "") {
          this.myTrackedArray = [thing];
        }
      }
      console.log('EL TRACKED', this.myTrackedArray);
      console.log('EL ARRAY', this.arrThing);
      this.local.setStorageTrack(this.myTrackedArray);
    }
    changeStatus(idThing) {
      //localizamos el elemento con event.target
      const index = this.arrThing.findIndex(x => x.id === idThing);
      this.arrThing[index].status = !this.arrThing[index].status;
      this.arrThing = this.arrThing.map(x => {
        return {
          ...x
        };
      });
      //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
      //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo
      this.local.setStorage(this.arrThing);
    }
    changeStatusTrack(idThing) {
      //localizamos el elemento con event.target
      const index = this.myTrackedArray.findIndex(x => x.id === idThing);
      this.myTrackedArray[index].status = !this.myTrackedArray[index].status;
      //console.log(this.myTrackedArray[index])

      // this.myTrackedArray = this.myTrackedArray.map((x) => {
      //   return { ...x };
      // });
      //cunando coge los estados del boton y demas es por que coge las propiedades del último thing creado
      //este thing no es el thing que al pulsar en el boton quiero, tengo que aberiguar como obtenerlo
      this.local.setStorageTrack(this.myTrackedArray);
    }
    removeAll() {
      this.query = "";
      this.arrThing = [];
      this.local.setStorage(this.arrThing);
      this.calculateNumOfThings();
      console.log("remove");
    }
    calculateNumOfThings() {
      var numberOfThings = this.arrThing.length;
      let i = 0;
      this.arrThing.forEach(x => {
        if (x.status == true) {
          i++;
        }
      });
      console.log(i);
      this.numberOfThings2 = numberOfThings - i;
      return this.numberOfThings2;
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "myTrackedArray", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _trackedBuiltIns.TrackedArray();
    }
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "local", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "arrThing", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [_thing.default];
    }
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "query", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "numberOfThings2", [_tracking.tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _applyDecoratedDescriptor(_class.prototype, "createThing", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "createThing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "toggleThing", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "toggleThing"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "enter", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "enter"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fillArray", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "fillArray"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "fillTrackedArray", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "fillTrackedArray"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeStatus", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeStatus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeStatusTrack", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "changeStatusTrack"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "removeAll", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "removeAll"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "calculateNumOfThings", [_object.action], Object.getOwnPropertyDescriptor(_class.prototype, "calculateNumOfThings"), _class.prototype)), _class);
  (0, _component.setComponentTemplate)(__COLOCATED_TEMPLATE__, ListComponent);
});
;define("to-do-list/components/welcome-page", ["exports", "ember-welcome-page/components/welcome-page"], function (_exports, _welcomePage) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-welcome-page/components/welcome-page"eaimeta@70e063a35619d71f
});
;define("to-do-list/container-debug-adapter", ["exports", "ember-resolver/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _containerDebugAdapter.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-resolver/container-debug-adapter"eaimeta@70e063a35619d71f
});
;define("to-do-list/data-adapter", ["exports", "@ember-data/debug"], function (_exports, _debug) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _debug.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember-data/debug"eaimeta@70e063a35619d71f
});
;define("to-do-list/helpers/app-version", ["exports", "@ember/component/helper", "to-do-list/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _helper, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/component/helper",0,"to-do-list/config/environment",0,"ember-cli-app-version/utils/regexp"eaimeta@70e063a35619d71f
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;
    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }
    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }
    return match ? match[0] : version;
  }
  var _default = _exports.default = (0, _helper.helper)(appVersion);
});
;define("to-do-list/helpers/page-title", ["exports", "ember-page-title/helpers/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/helpers/page-title"eaimeta@70e063a35619d71f
});
;define("to-do-list/helpers/pluralize", ["exports", "ember-inflector/lib/helpers/pluralize"], function (_exports, _pluralize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/pluralize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _pluralize.default;
});
;define("to-do-list/helpers/singularize", ["exports", "ember-inflector/lib/helpers/singularize"], function (_exports, _singularize) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-inflector/lib/helpers/singularize"eaimeta@70e063a35619d71f
  var _default = _exports.default = _singularize.default;
});
;define("to-do-list/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "to-do-list/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"ember-cli-app-version/initializer-factory",0,"to-do-list/config/environment"eaimeta@70e063a35619d71f
  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }
  var _default = _exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define("to-do-list/initializers/ember-data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  /*
    This code initializes EmberData in an Ember application.
  */
  var _default = _exports.default = {
    name: 'ember-data',
    initialize(application) {
      application.registerOptionsForType('serializer', {
        singleton: false
      });
      application.registerOptionsForType('adapter', {
        singleton: false
      });
    }
  };
});
;define("to-do-list/objects/thing", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71feaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Thing {
    constructor(name, status) {
      _defineProperty(this, "id", void 0);
      _defineProperty(this, "name", void 0);
      _defineProperty(this, "status", void 0);
      this.id = self.crypto.randomUUID();
      this.name = name;
      this.status = status;
    }
  }
  _exports.default = Thing;
});
;define("to-do-list/router", ["exports", "@ember/routing/router", "to-do-list/config/environment"], function (_exports, _router, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/router",0,"to-do-list/config/environment"eaimeta@70e063a35619d71f
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  class Router extends _router.default {
    constructor(...args) {
      super(...args);
      _defineProperty(this, "location", _environment.default.locationType);
      _defineProperty(this, "rootURL", _environment.default.rootURL);
    }
  }
  _exports.default = Router;
  Router.map(function () {});
});
;define("to-do-list/routes/application", ["exports", "@ember/routing/route", "@ember/service"], function (_exports, _route, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _class, _descriptor;
  0; //eaimeta@70e063a35619d71f0,"@ember/routing/route",0,"@ember/service"eaimeta@70e063a35619d71f
  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }
  function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
  function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
  function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }
  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }
  let ApplicationRoute = _exports.default = (_class = class ApplicationRoute extends _route.default {
    constructor(...args) {
      super(...args);
      _initializerDefineProperty(this, "local", _descriptor, this);
    }
    model() {
      return this.local.getStorage(); //el model solo devuelve, no hace el set aqui, es para que si fuese una llamada a un endpoint, solo se hiciese una.
    }
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "local", [_service.inject], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class);
});
;define("to-do-list/services/local", ["exports", "@ember/service"], function (_exports, _service) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/service"eaimeta@70e063a35619d71f
  class LocalService extends _service.default {
    getStorage() {
      return JSON.parse(localStorage.getItem("listOfThing"));
    }
    setStorage(arrThing) {
      localStorage.setItem("listOfThing", JSON.stringify(arrThing));
    }
    setStorageTrack(arrThing) {
      localStorage.setItem("listOfThing", JSON.stringify(arrThing));
    }
  }
  _exports.default = LocalService;
});
;define("to-do-list/services/page-title", ["exports", "ember-page-title/services/page-title"], function (_exports, _pageTitle) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _pageTitle.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"ember-page-title/services/page-title"eaimeta@70e063a35619d71f
});
;define("to-do-list/services/store", ["exports", "@ember/debug", "ember-data/store"], function (_exports, _debug, _store) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _store.default;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"ember-data/store"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the store service. Use `export { default } from 'ember-data/store';` in app/services/store.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("to-do-list/templates/application", ["exports", "@ember/template-factory"], function (_exports, _templateFactory) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  0; //eaimeta@70e063a35619d71f0,"@ember/template-factory"eaimeta@70e063a35619d71f
  var _default = _exports.default = (0, _templateFactory.createTemplateFactory)(
  /*
    {{page-title "ToDoList"}}
  
  {{! The following component displays Ember's default welcome message. }}
  
  <div class="container">
    <List @model={{@model}} />
  </div>
  
  {{! Feel free to remove this! }}
  
  {{outlet}}
  */
  {
    "id": "IR2eLWMz",
    "block": "[[[1,[28,[35,0],[\"ToDoList\"],null]],[1,\"\\n\\n\"],[1,\"\\n\"],[10,0],[14,0,\"container\"],[12],[1,\"\\n  \"],[8,[39,2],null,[[\"@model\"],[[30,1]]],null],[1,\"\\n\"],[13],[1,\"\\n\\n\"],[1,\"\\n\"],[46,[28,[37,4],null,null],null,null,null]],[\"@model\"],false,[\"page-title\",\"div\",\"list\",\"component\",\"-outlet\"]]",
    "moduleName": "to-do-list/templates/application.hbs",
    "isStrictMode": false
  });
});
;define("to-do-list/transforms/boolean", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.BooleanTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the BooleanTransform. Use `export { BooleanTransform as default } from '@ember-data/serializer/transform';` in app/transforms/boolean.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("to-do-list/transforms/date", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.DateTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the DateTransform. Use `export { DateTransform as default } from '@ember-data/serializer/transform';` in app/transforms/date.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("to-do-list/transforms/number", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.NumberTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the NumberTransform. Use `export { NumberTransform as default } from '@ember-data/serializer/transform';` in app/transforms/number.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;define("to-do-list/transforms/string", ["exports", "@ember/debug", "@ember-data/serializer/-private"], function (_exports, _debug, _private) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _private.StringTransform;
    }
  });
  0; //eaimeta@70e063a35619d71f0,"@ember/debug",0,"@ember-data/serializer/-private"eaimeta@70e063a35619d71f
  (true && !(false) && (0, _debug.deprecate)("You are relying on ember-data auto-magically installing the StringTransform. Use `export { StringTransform as default } from '@ember-data/serializer/transform';` in app/transforms/string.js instead", false, {
    id: 'ember-data:deprecate-legacy-imports',
    for: 'ember-data',
    until: '6.0',
    since: {
      enabled: '5.2',
      available: '5.2'
    }
  }));
});
;

;define('to-do-list/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("to-do-list/app")["default"].create({"name":"to-do-list","version":"0.0.0+00237143"});
          }
        
//# sourceMappingURL=to-do-list.map
