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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 22,
        name: "icon",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 29,
        name: "text",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 20,
        column: 9,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 21,
        column: 9,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 22,
        name: "icon",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 29,
        name: "text",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], src__widgets__widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 22,
        column: 9,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 23,
        column: 9,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 22,
        name: "icon",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 29,
        name: "text",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 24,
        column: 9,
        name: null,
        parameterLocations: C12 || CT.C12
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 18,
        name: "children",
        parameterLocations: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], src__widgets__widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 19,
        column: 14,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 7,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.constList([C20 || CT.C20, C21 || CT.C21], src__widgets__widget_inspector._Location);
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart",
        line: 17,
        column: 12,
        name: null,
        parameterLocations: C19 || CT.C19
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  let C5;
  let C4;
  let C8;
  let C9;
  let C7;
  let C6;
  let C10;
  let C13;
  let C14;
  let C12;
  let C11;
  let C17;
  let C16;
  let C15;
  let C20;
  let C21;
  let C19;
  let C18;
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
      return new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(this.icon1, this.text1, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new components__cards__CardViewIcon.CardViewIcon.new(this.icon2, this.text2, {$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new components__cards__CardViewIcon.CardViewIcon.new(this.icon3, this.text3, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11})]), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
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
  dart.setLibraryUri(components__cards__ThreeRowCardView.ThreeRowCardView, "package:takeoffandroid_portfolio/components/cards/ThreeRowCardView.dart");
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
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ThreeRowCardView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAQS;;;;;;IAAO;;;;;;IAAO;;;;;;IAEd;;;;;;IAAO;;;;;;IAAO;;;;;;UAKK;AACxB,YAAO,wFACiB,mDACf,2CAAsB,sBAC3B,qDAAa,YAAO,oEACpB,mGACA,qDAAa,YAAO,oEACpB,qGACA,qDAAa,YAAO;IAG1B;;uEAduB,OAAY,OAAY,OAAY,OAAY,OAAY;;IAA5D;IAAY;IAAY;IAAY;IAAY;IAAY;AAAnF;;EAAyF","file":"ThreeRowCardView.ddc.js"}');
  // Exports:
  return {
    components__cards__ThreeRowCardView: components__cards__ThreeRowCardView
  };
});

//# sourceMappingURL=ThreeRowCardView.ddc.js.map
