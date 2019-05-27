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
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  components__drawer__DrawerSubTitle.DrawerSubTitle = class DrawerSubTitle extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__text.Text.new("Mobile Developer", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 12.0, color: new ui$.Color.fromRGBO(193, 191, 203, 1.0)}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 21, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 9, name: "style"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart": components__drawer__DrawerSubTitle
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAW,iCAAK,4BACL,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,mBACpB;IAC3B;;;;;;EACF","file":"DrawerSubTitle.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerSubTitle: components__drawer__DrawerSubTitle
  };
});

//# sourceMappingURL=DrawerSubTitle.ddc.js.map
