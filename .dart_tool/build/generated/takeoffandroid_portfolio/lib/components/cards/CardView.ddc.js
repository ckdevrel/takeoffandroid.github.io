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
  components__cards__CardView.CardView = class CardView extends src__widgets__framework.StatelessWidget {
    get text() {
      return this[text$];
    }
    set text(value) {
      this[text$] = value;
    }
    build(context) {
      return new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageParagraph.PageParagraph.new(this.text, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 93, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 107, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 79, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 86, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 53, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 58, name: "elevation"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 72, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 21, name: "width"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 33, name: "height"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 46, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(components__cards__CardView.CardView, () => ({
    __proto__: dart.getFields(components__cards__CardView.CardView.__proto__),
    text: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/CardView", {
    "package:takeoffandroid_portfolio/components/cards/CardView.dart": components__cards__CardView
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;UAKmB;AACxB,YAAO,8CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,gDAAc;IACxG;;uDALc;;;AAAd;;EAAmB","file":"CardView.ddc.js"}');
  // Exports:
  return {
    components__cards__CardView: components__cards__CardView
  };
});

//# sourceMappingURL=CardView.ddc.js.map
