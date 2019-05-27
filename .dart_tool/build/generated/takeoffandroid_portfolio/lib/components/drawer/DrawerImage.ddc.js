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
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  components__drawer__DrawerImage.DrawerImage = class DrawerImage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.SizedBox.new({width: 90.0, height: 90.0, child: new src__material__circle_avatar.CircleAvatar.new({backgroundImage: new src__painting__image_provider.NetworkImage.new("https://i.imgur.com/R0Rzcsv.png"), $creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerImage.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 11, name: "backgroundImage"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerImage.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 9, name: "width"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 9, name: "height"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerImage", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerImage.dart": components__drawer__DrawerImage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerImage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,8CACI,cACC,aACD,oEACY,mDAAa;IAEtC;;;;;;EACF","file":"DrawerImage.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerImage: components__drawer__DrawerImage
  };
});

//# sourceMappingURL=DrawerImage.ddc.js.map
