define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, material, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__circle_avatar = material.src__material__circle_avatar;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const components__drawer__DrawerImage = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 10,
        column: 11,
        name: "backgroundImage",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerImage.dart",
        line: 9,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 7,
        column: 9,
        name: "width",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 8,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 9,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerImage.dart",
        line: 6,
        column: 12,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C4;
  let C3;
  components__drawer__DrawerImage.DrawerImage = class DrawerImage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.SizedBox.new({width: 90.0, height: 90.0, child: new src__material__circle_avatar.CircleAvatar.new({backgroundImage: new src__painting__image_provider.NetworkImage.new("https://i.imgur.com/R0Rzcsv.png"), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (components__drawer__DrawerImage.DrawerImage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__drawer__DrawerImage.DrawerImage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerImage.DrawerImage.prototype;
  dart.addTypeTests(components__drawer__DrawerImage.DrawerImage);
  dart.setMethodSignature(components__drawer__DrawerImage.DrawerImage, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerImage.DrawerImage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__drawer__DrawerImage.DrawerImage, "package:takeoffandroid_portfolio/components/drawer/DrawerImage.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerImage", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerImage.dart": components__drawer__DrawerImage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DrawerImage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,8CACI,cACC,aACD,oEACY,mDAAa;IAEtC;;;;;;EACF","file":"DrawerImage.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerImage: components__drawer__DrawerImage
  };
});

//# sourceMappingURL=DrawerImage.ddc.js.map
