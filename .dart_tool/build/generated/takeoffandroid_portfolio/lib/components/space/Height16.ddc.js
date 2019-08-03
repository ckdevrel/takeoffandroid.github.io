define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__space__Height16 = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 6,
        column: 21,
        name: "height",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/space/Height16.dart",
        line: 6,
        column: 12,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C2;
  let C1;
  let C0;
  components__space__Height16.Height16 = class Height16 extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__space__Height16.Height16.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__space__Height16.Height16.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__space__Height16.Height16.prototype;
  dart.addTypeTests(components__space__Height16.Height16);
  dart.setMethodSignature(components__space__Height16.Height16, () => ({
    __proto__: dart.getMethods(components__space__Height16.Height16.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__space__Height16.Height16, "package:takeoffandroid_portfolio/components/space/Height16.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/space/Height16", {
    "package:takeoffandroid_portfolio/components/space/Height16.dart": components__space__Height16
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["Height16.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,+CAAiB;IAC1B;;;;;;EACF","file":"Height16.ddc.js"}');
  // Exports:
  return {
    components__space__Height16: components__space__Height16
  };
});

//# sourceMappingURL=Height16.ddc.js.map
