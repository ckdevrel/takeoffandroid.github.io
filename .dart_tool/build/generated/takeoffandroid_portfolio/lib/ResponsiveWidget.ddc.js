define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__layout_builder = animation.src__widgets__layout_builder;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const ResponsiveWidget = Object.create(dart.library);
  let BuildContextAndBoxConstraintsToWidget = () => (BuildContextAndBoxConstraintsToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__rendering__box.BoxConstraints])))();
  let const$;
  let const$0;
  let const$1;
  ResponsiveWidget.ResponsiveWidget = class ResponsiveWidget extends src__widgets__framework.StatelessWidget {
    get largeScreen() {
      return this[largeScreen$];
    }
    set largeScreen(value) {
      super.largeScreen = value;
    }
    get mediumScreen() {
      return this[mediumScreen$];
    }
    set mediumScreen(value) {
      super.mediumScreen = value;
    }
    get smallScreen() {
      return this[smallScreen$];
    }
    set smallScreen(value) {
      super.smallScreen = value;
    }
    static isSmallScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) < 800;
    }
    static isLargeScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) > 800;
    }
    static isMediumScreen(context) {
      return dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) > 800 && dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) < 1200;
    }
    build(context) {
      return new src__widgets__layout_builder.LayoutBuilder.new({builder: dart.fn((context, constraints) => {
          let t0, t0$;
          if (dart.notNull(constraints.maxWidth) > 800) {
            return this.largeScreen;
          } else if (dart.notNull(constraints.maxWidth) < 1200 && dart.notNull(constraints.maxWidth) > 800) {
            t0 = this.mediumScreen;
            return t0 == null ? this.largeScreen : t0;
          } else {
            t0$ = this.smallScreen;
            return t0$ == null ? this.largeScreen : t0$;
          }
        }, BuildContextAndBoxConstraintsToWidget()), $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/ResponsiveWidget.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (ResponsiveWidget.ResponsiveWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeScreen = opts && 'largeScreen' in opts ? opts.largeScreen : null;
    let mediumScreen = opts && 'mediumScreen' in opts ? opts.mediumScreen : null;
    let smallScreen = opts && 'smallScreen' in opts ? opts.smallScreen : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeScreen$] = largeScreen;
    this[mediumScreen$] = mediumScreen;
    this[smallScreen$] = smallScreen;
    ResponsiveWidget.ResponsiveWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = ResponsiveWidget.ResponsiveWidget.prototype;
  dart.addTypeTests(ResponsiveWidget.ResponsiveWidget);
  const largeScreen$ = Symbol("ResponsiveWidget.largeScreen");
  const mediumScreen$ = Symbol("ResponsiveWidget.mediumScreen");
  const smallScreen$ = Symbol("ResponsiveWidget.smallScreen");
  dart.setMethodSignature(ResponsiveWidget.ResponsiveWidget, () => ({
    __proto__: dart.getMethods(ResponsiveWidget.ResponsiveWidget.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(ResponsiveWidget.ResponsiveWidget, () => ({
    __proto__: dart.getFields(ResponsiveWidget.ResponsiveWidget.__proto__),
    largeScreen: dart.finalFieldType(src__widgets__framework.Widget),
    mediumScreen: dart.finalFieldType(src__widgets__framework.Widget),
    smallScreen: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/ResponsiveWidget", {
    "package:takeoffandroid_portfolio/ResponsiveWidget.dart": ResponsiveWidget
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/ResponsiveWidget.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAGe;;;;;;IACA;;;;;;IACA;;;;;;yBAS0B;AACrC,YAAyC,cAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC7C;yBAEuC;AACrC,YAAyC,cAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC7C;0BAEwC;AACtC,YAAyC,AAAM,cAA7B,AAAY,AAAK,wCAAd,OAAO,gBAAe,OACL,aAAvB,AAAY,AAAK,wCAAd,OAAO,gBAAe;IAC1C;UAG0B;AACxB,YAAO,8DACI,SAAC,SAAS;;AACjB,cAAyB,aAArB,AAAY,WAAD,aAAY;AACzB,kBAAO;gBACF,KAAyB,aAArB,AAAY,WAAD,aAAY,QAA6B,aAArB,AAAY,WAAD,aAAY;AAC/D,iBAAO;yBAAa,OAAG;;AAEvB,kBAAO;0BAAY,OAAG;;;IAI9B;;;QAhCS;QACY;QACV;QACA;;IAFU;IACV;IACA;AACL,qEAAW,GAAG;;EAAC","file":"ResponsiveWidget.ddc.js"}');
  // Exports:
  return {
    ResponsiveWidget: ResponsiveWidget
  };
});

//# sourceMappingURL=ResponsiveWidget.ddc.js.map
