define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/space/Width16', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, material, animation, Width16, ui, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__material_button = material.src__material__material_button;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__space__Width16 = Width16.components__space__Width16;
  const ui$ = ui.ui;
  const src__painting__text_style = animation$.src__painting__text_style;
  const components__drawer__DrawerRow = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  components__drawer__DrawerRow.DrawerRow = class DrawerRow extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      this[onPressed$] = value;
    }
    build(context) {
      return new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset(this.icon, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 19, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 25, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart", parameterLocations: const$2 || (const$2 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new(this.title, {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 22, name: "data"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 17, name: "textAlign"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, name: "crossAxisAlignment"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, name: "mainAxisAlignment"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: this.onPressed, $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "padding"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "child"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__drawer__DrawerRow.DrawerRow.new = function(title, icon, opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    this[icon$] = icon;
    this[onPressed$] = onPressed;
    components__drawer__DrawerRow.DrawerRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerRow.DrawerRow.prototype;
  dart.addTypeTests(components__drawer__DrawerRow.DrawerRow);
  const icon$ = Symbol("DrawerRow.icon");
  const title$ = Symbol("DrawerRow.title");
  const onPressed$ = Symbol("DrawerRow.onPressed");
  dart.setMethodSignature(components__drawer__DrawerRow.DrawerRow, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerRow.DrawerRow.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__drawer__DrawerRow.DrawerRow, () => ({
    __proto__: dart.getFields(components__drawer__DrawerRow.DrawerRow.__proto__),
    icon: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    onPressed: dart.fieldType(dart.fnType(dart.dynamic, []))
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerRow", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerRow.dart": components__drawer__DrawerRow
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;IAAM;;;;;;IAEF;;;;;;UAMe;AACxB,YAAO,iEACe,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,meACZ,4YACI,gCAAK,wBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,++CAE1B;IAEf;;0DAtBe,OAAY;QAAY;;IAAxB;IAAY;IAAY;AAAvC;;EAAkD","file":"DrawerRow.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerRow: components__drawer__DrawerRow
  };
});

//# sourceMappingURL=DrawerRow.ddc.js.map
