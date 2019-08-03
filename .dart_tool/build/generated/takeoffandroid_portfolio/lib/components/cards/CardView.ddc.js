define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/PageParagraph'], function(dart_sdk, animation, material, PageParagraph) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__card = material.src__material__card;
  const components__PageParagraph = PageParagraph.components__PageParagraph;
  const components__cards__CardView = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 107,
        name: "title",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart",
        line: 14,
        column: 93,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 86,
        name: "child",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart",
        line: 14,
        column: 79,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 58,
        name: "elevation",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 72,
        name: "child",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9], src__widgets__widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart",
        line: 14,
        column: 53,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 21,
        name: "width",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 33,
        name: "height",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 46,
        name: "child",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart",
        line: 14,
        column: 12,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C8;
  let C9;
  let C7;
  let C6;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  components__cards__CardView.CardView = class CardView extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    build(context) {
      return new src__widgets__basic.SizedBox.new({width: 291.0, height: 100.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageParagraph.PageParagraph.new(this.text, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
  };
  (components__cards__CardView.CardView.new = function(text, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[text$] = text;
    components__cards__CardView.CardView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__cards__CardView.CardView.prototype;
  dart.addTypeTests(components__cards__CardView.CardView);
  const text$ = Symbol("CardView.text");
  dart.setMethodSignature(components__cards__CardView.CardView, () => ({
    __proto__: dart.getMethods(components__cards__CardView.CardView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__cards__CardView.CardView, "package:takeoffandroid_portfolio/components/cards/CardView.dart");
  dart.setFieldSignature(components__cards__CardView.CardView, () => ({
    __proto__: dart.getFields(components__cards__CardView.CardView.__proto__),
    text: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/CardView", {
    "package:takeoffandroid_portfolio/components/cards/CardView.dart": components__cards__CardView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["CardView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;UAKmB;AACxB,YAAO,8CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,gDAAc;IACxG;;uDALc;;;AAAd;;EAAmB","file":"CardView.ddc.js"}');
  // Exports:
  return {
    components__cards__CardView: components__cards__CardView
  };
});

//# sourceMappingURL=CardView.ddc.js.map
