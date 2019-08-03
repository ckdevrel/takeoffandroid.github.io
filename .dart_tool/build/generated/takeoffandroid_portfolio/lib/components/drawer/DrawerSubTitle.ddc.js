define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const components__drawer__DrawerSubTitle = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 6,
        column: 21,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 7,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 11,
        column: 9,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart",
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
  components__drawer__DrawerSubTitle.DrawerSubTitle = class DrawerSubTitle extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__text.Text.new("Mobile Developer", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 12.0, color: new ui$.Color.fromRGBO(193, 191, 203, 1.0)}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__drawer__DrawerSubTitle.DrawerSubTitle.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__drawer__DrawerSubTitle.DrawerSubTitle.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerSubTitle.DrawerSubTitle.prototype;
  dart.addTypeTests(components__drawer__DrawerSubTitle.DrawerSubTitle);
  dart.setMethodSignature(components__drawer__DrawerSubTitle.DrawerSubTitle, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerSubTitle.DrawerSubTitle.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__drawer__DrawerSubTitle.DrawerSubTitle, "package:takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart": components__drawer__DrawerSubTitle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DrawerSubTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAW,iCAAK,4BACL,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,mBACpB;IAC3B;;;;;;EACF","file":"DrawerSubTitle.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerSubTitle: components__drawer__DrawerSubTitle
  };
});

//# sourceMappingURL=DrawerSubTitle.ddc.js.map
