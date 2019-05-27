define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/PageListTile'], function(dart_sdk, animation, material, PageListTile) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__card = material.src__material__card;
  const components__PageListTile = PageListTile.components__PageListTile;
  const components__cards__CardViewIcon = Object.create(dart.library);
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
      return new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(this.icon, this.text, {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 93, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 106, name: "image"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 112, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 79, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 86, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 53, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 58, name: "elevation"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 72, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 21, name: "width"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 33, name: "height"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 46, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(components__cards__CardViewIcon.CardViewIcon, () => ({
    __proto__: dart.getFields(components__cards__CardViewIcon.CardViewIcon.__proto__),
    icon: dart.fieldType(core.String),
    text: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/cards/CardViewIcon", {
    "package:takeoffandroid_portfolio/components/cards/CardViewIcon.dart": components__cards__CardViewIcon
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/cards/CardViewIcon.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;IAAM;;;;;;UAKa;AACxB,YAAO,8CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,8CAAa,WAAM;IAC7G;;+DALkB,MAAW;;IAAX;IAAW;AAA7B;;EAAkC","file":"CardViewIcon.ddc.js"}');
  // Exports:
  return {
    components__cards__CardViewIcon: components__cards__CardViewIcon
  };
});

//# sourceMappingURL=CardViewIcon.ddc.js.map
