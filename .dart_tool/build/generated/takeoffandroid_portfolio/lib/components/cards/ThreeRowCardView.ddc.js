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
  const components__cards__ThreeRowCardView = Object.create(dart.library);
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
  let const$19;
  let const$20;
  let const$21;
  components__cards__ThreeRowCardView.ThreeRowCardView = class ThreeRowCardView extends src__widgets__framework.StatelessWidget {
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
    get text3() {
      return this[text3$];
    }
    set text3(value) {
      this[text3$] = value;
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
    get icon3() {
      return this[icon3$];
    }
    set icon3(value) {
      this[icon3$] = value;
    }
    build(context) {
      return new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(this.icon1, this.text1, {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 22, name: "icon"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 29, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(this.icon2, this.text2, {$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 22, name: "icon"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 29, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$9 || (const$9 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(this.icon3, this.text3, {$creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 22, name: "icon"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 29, name: "text"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 18, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "scrollDirection"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__cards__ThreeRowCardView.ThreeRowCardView.new = function(icon1, text1, icon2, text2, icon3, text3, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon1$] = icon1;
    this[text1$] = text1;
    this[icon2$] = icon2;
    this[text2$] = text2;
    this[icon3$] = icon3;
    this[text3$] = text3;
    components__cards__ThreeRowCardView.ThreeRowCardView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__cards__ThreeRowCardView.ThreeRowCardView.prototype;
  dart.addTypeTests(components__cards__ThreeRowCardView.ThreeRowCardView);
  const text1$ = Symbol("ThreeRowCardView.text1");
  const text2$ = Symbol("ThreeRowCardView.text2");
  const text3$ = Symbol("ThreeRowCardView.text3");
  const icon1$ = Symbol("ThreeRowCardView.icon1");
  const icon2$ = Symbol("ThreeRowCardView.icon2");
  const icon3$ = Symbol("ThreeRowCardView.icon3");
  dart.setMethodSignature(components__cards__ThreeRowCardView.ThreeRowCardView, () => ({
    __proto__: dart.getMethods(components__cards__ThreeRowCardView.ThreeRowCardView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__cards__ThreeRowCardView.ThreeRowCardView, () => ({
    __proto__: dart.getFields(components__cards__ThreeRowCardView.ThreeRowCardView.__proto__),
    text1: dart.fieldType(core.String),
    text2: dart.fieldType(core.String),
    text3: dart.fieldType(core.String),
    icon1: dart.fieldType(core.String),
    icon2: dart.fieldType(core.String),
    icon3: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView", {
    "package:takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart": components__cards__ThreeRowCardView
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQS;;;;;;IAAO;;;;;;IAAO;;;;;;IAEd;;;;;;IAAO;;;;;;IAAO;;;;;;UAKK;AACxB,YAAO,wFACiB,mDACf,2CAAsB,sBAC3B,qDAAa,YAAO,omBACpB,iZACA,qDAAa,YAAO,smBACpB,mZACA,qDAAa,YAAO;IAG1B;;uEAduB,OAAY,OAAY,OAAY,OAAY,OAAY;;IAA5D;IAAY;IAAY;IAAY;IAAY;IAAY;AAAnF;;EAAyF","file":"ThreeRowCardView.ddc.js"}');
  // Exports:
  return {
    components__cards__ThreeRowCardView: components__cards__ThreeRowCardView
  };
});

//# sourceMappingURL=ThreeRowCardView.ddc.js.map
