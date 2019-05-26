define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/PageSection'], function(dart_sdk, animation, material, PageSection) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__list_tile = material.src__material__list_tile;
  const components__PageSection = PageSection.components__PageSection;
  const components__PageListTile = Object.create(dart.library);
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
  components__PageListTile.PageListTile = class PageListTile extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({child: new src__material__list_tile.ListTile.new({leading: new src__widgets__image.Image.asset(this.image, {width: 50.0, height: 50.0, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 26, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 32, name: "name"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 39, name: "width"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 50, name: "height"})))], src__widgets__widget_inspector._Location))})))}), title: new components__PageSection.PageSection.new(this.title, {$creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 30, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 11, name: "leading"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__PageListTile.PageListTile.new = function(image, title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[title$] = title;
    components__PageListTile.PageListTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageListTile.PageListTile.prototype;
  dart.addTypeTests(components__PageListTile.PageListTile);
  const image$ = Symbol("PageListTile.image");
  const title$ = Symbol("PageListTile.title");
  dart.setMethodSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getMethods(components__PageListTile.PageListTile.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getFields(components__PageListTile.PageListTile.__proto__),
    image: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageListTile", {
    "package:takeoffandroid_portfolio/components/PageListTile.dart": components__PageListTile
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,mDACE,oDACY,oCAAM,oBAAc,cAAY,ytBACxC,4CAAY;IAG3B;;wDAVkB,OAAY;;IAAZ;IAAY;AAA9B;;EAAoC","file":"PageListTile.ddc.js"}');
  // Exports:
  return {
    components__PageListTile: components__PageListTile
  };
});

//# sourceMappingURL=PageListTile.ddc.js.map
