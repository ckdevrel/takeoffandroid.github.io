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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 7,
        column: 7,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 8,
        column: 7,
        name: "style",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 7,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTitle.dart",
        line: 6,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  components__drawer__DrawerTitle.DrawerTitle = class DrawerTitle extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__text.Text.new("CHANDRASEKAR K", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.w100}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
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
  dart.setLibraryUri(components__drawer__DrawerTitle.DrawerTitle, "package:takeoffandroid_portfolio/components/drawer/DrawerTitle.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerTitle", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerTitle.dart": components__drawer__DrawerTitle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DrawerTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAW,iCACT,0BACO,yDACS,kBACF,aACI,gDACS,kCACN;IAEzB;;;;;;EACF","file":"DrawerTitle.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerTitle: components__drawer__DrawerTitle
  };
});

//# sourceMappingURL=DrawerTitle.ddc.js.map
