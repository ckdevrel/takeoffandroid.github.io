define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, material, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__material__colors = material.src__material__colors;
  const ui$ = ui.ui;
  const components__drawer__DrawerTitle = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  components__drawer__DrawerTitle.DrawerTitle = class DrawerTitle extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__text.Text.new("CHANDRASEKAR K", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.w100}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTitle.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 7, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 7, name: "style"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__drawer__DrawerTitle.DrawerTitle.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__drawer__DrawerTitle.DrawerTitle.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerTitle.DrawerTitle.prototype;
  dart.addTypeTests(components__drawer__DrawerTitle.DrawerTitle);
  dart.setMethodSignature(components__drawer__DrawerTitle.DrawerTitle, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerTitle.DrawerTitle.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerTitle", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerTitle.dart": components__drawer__DrawerTitle
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAW,iCACT,0BACO,yDACS,kBACF,aACI,gDACS,kCACN;IAEzB;;;;;;EACF","file":"DrawerTitle.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerTitle: components__drawer__DrawerTitle
  };
});

//# sourceMappingURL=DrawerTitle.ddc.js.map
