define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/components/cards/CardViewIcon', 'packages/takeoffandroid_portfolio/components/space/Width36'], function(dart_sdk, animation, animation$, CardViewIcon, Width36) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const components__cards__CardViewIcon = CardViewIcon.components__cards__CardViewIcon;
  const components__space__Width36 = Width36.components__space__Width36;
  const components__cards__TwoRowCardView = Object.create(dart.library);
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
  components__cards__TwoRowCardView.TwoRowCardView = class TwoRowCardView extends src__widgets__framework.StatelessWidget {
    get text1() {
      return this[text1$];
    }
    set text1(value) {
      this[text1$] = value;
    }
    get text2() {
      return this[text2$];
    }
    set text2(value) {
      this[text2$] = value;
    }
    get icon1() {
      return this[icon1$];
    }
    set icon1(value) {
      this[icon1$] = value;
    }
    get icon2() {
      return this[icon2$];
    }
    set icon2(value) {
      this[icon2$] = value;
    }
    build(context) {
      return new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(this.icon1, this.text1, {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 22, name: "icon"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 29, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(this.icon2, this.text2, {$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 22, name: "icon"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 29, name: "text"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 18, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "scrollDirection"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__cards__TwoRowCardView.TwoRowCardView.new = function(icon1, text1, icon2, text2, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon1$] = icon1;
    this[text1$] = text1;
    this[icon2$] = icon2;
    this[text2$] = text2;
    components__cards__TwoRowCardView.TwoRowCardView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__cards__TwoRowCardView.TwoRowCardView.prototype;
  dart.addTypeTests(components__cards__TwoRowCardView.TwoRowCardView);
  const text1$ = Symbol("TwoRowCardView.text1");
  const text2$ = Symbol("TwoRowCardView.text2");
  const icon1$ = Symbol("TwoRowCardView.icon1");
  const icon2$ = Symbol("TwoRowCardView.icon2");
  dart.setMethodSignature(components__cards__TwoRowCardView.TwoRowCardView, () => ({
    __proto__: dart.getMethods(components__cards__TwoRowCardView.TwoRowCardView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__cards__TwoRowCardView.TwoRowCardView, () => ({
    __proto__: dart.getFields(components__cards__TwoRowCardView.TwoRowCardView.__proto__),
    text1: dart.fieldType(core.String),
    text2: dart.fieldType(core.String),
    icon1: dart.fieldType(core.String),
    icon2: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/TwoRowCardView", {
    "package:takeoffandroid_portfolio/components/cards/TwoRowCardView.dart": components__cards__TwoRowCardView
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/TwoRowCardView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQS;;;;;;IAAO;;;;;;IAEP;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,wFACiB,mDACf,2CAAsB,sBAC3B,qDAAa,YAAO,kmBACpB,+YACA,qDAAa,YAAO;IAG1B;;mEAZoB,OAAY,OAAY,OAAY;;IAApC;IAAY;IAAY;IAAY;AAAxD;;EAA8D","file":"TwoRowCardView.ddc.js"}');
  // Exports:
  return {
    components__cards__TwoRowCardView: components__cards__TwoRowCardView
  };
});

//# sourceMappingURL=TwoRowCardView.ddc.js.map
