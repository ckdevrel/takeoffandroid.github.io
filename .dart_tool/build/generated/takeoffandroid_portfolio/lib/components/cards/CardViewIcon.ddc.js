define(['dart_sdk', 'packages/takeoffandroid_portfolio/ResponsiveWidget', 'packages/flutter_web/material', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageListTile'], function(dart_sdk, ResponsiveWidget, material, animation, PageListTile) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const src__material__card = material.src__material__card;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageListTile = PageListTile.components__PageListTile;
  const components__cards__CardViewIcon = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 67,
        name: "image",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 73,
        name: "title",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 15,
        column: 54,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 47,
        name: "child",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 15,
        column: 40,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 19,
        name: "elevation",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 33,
        name: "child",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10], src__widgets__widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 15,
        column: 14,
        name: null,
        parameterLocations: C8 || CT.C8
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 67,
        name: "image",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 73,
        name: "title",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.constList([C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 17,
        column: 54,
        name: null,
        parameterLocations: C12 || CT.C12
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 47,
        name: "child",
        parameterLocations: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17], src__widgets__widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 17,
        column: 40,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 19,
        name: "elevation",
        parameterLocations: null
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 33,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart",
        line: 17,
        column: 14,
        name: null,
        parameterLocations: C19 || CT.C19
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C9;
  let C10;
  let C8;
  let C7;
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
  components__cards__CardViewIcon.CardViewIcon = class CardViewIcon extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    build(context) {
      if (dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context))) {
        return new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(this.icon, this.text, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7});
      } else {
        return new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(this.icon, this.text, {$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), $creationLocationd_0dea112b090073317d4: C18 || CT.C18});
      }
    }
  };
  (components__cards__CardViewIcon.CardViewIcon.new = function(icon, text, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    this[text$] = text;
    components__cards__CardViewIcon.CardViewIcon.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__cards__CardViewIcon.CardViewIcon.prototype;
  dart.addTypeTests(components__cards__CardViewIcon.CardViewIcon);
  const icon$ = Symbol("CardViewIcon.icon");
  const text$ = Symbol("CardViewIcon.text");
  dart.setMethodSignature(components__cards__CardViewIcon.CardViewIcon, () => ({
    __proto__: dart.getMethods(components__cards__CardViewIcon.CardViewIcon.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__cards__CardViewIcon.CardViewIcon, "package:takeoffandroid_portfolio/components/cards/CardViewIcon.dart");
  dart.setFieldSignature(components__cards__CardViewIcon.CardViewIcon, () => ({
    __proto__: dart.getFields(components__cards__CardViewIcon.CardViewIcon.__proto__),
    icon: dart.fieldType(core.String),
    text: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/CardViewIcon", {
    "package:takeoffandroid_portfolio/components/cards/CardViewIcon.dart": components__cards__CardViewIcon
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["CardViewIcon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAM;;;;;;UAKa;AACxB,oBAAoB,iDAAc,OAAO;AACvC,cAAO,8CAAgB,YAAU,2CAAc,8CAAa,WAAM;;AAElE,cAAO,8CAAgB,YAAU,2CAAc,8CAAa,WAAM;;IAEtE;;+DATkB,MAAW;;IAAX;IAAW;AAA7B;;EAAkC","file":"CardViewIcon.ddc.js"}');
  // Exports:
  return {
    components__cards__CardViewIcon: components__cards__CardViewIcon
  };
});

//# sourceMappingURL=CardViewIcon.ddc.js.map
