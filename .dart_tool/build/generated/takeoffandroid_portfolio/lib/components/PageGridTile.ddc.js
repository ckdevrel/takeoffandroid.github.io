define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/PageSection'], function(dart_sdk, animation, material, PageSection) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__material__icon_button = material.src__material__icon_button;
  const components__PageSection = PageSection.components__PageSection;
  const components__PageGridTile = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
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
  components__PageGridTile.PageGridTile = class PageGridTile extends src__widgets__framework.StatelessWidget {
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
      return new src__widgets__basic.Column.new({children: JSArrayOfWidget().of([new src__material__icon_button.IconButton.new({iconSize: 50.0, icon: new src__widgets__image.Image.asset(this.image, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 46, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 52, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
            }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 20, name: "iconSize"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 34, name: "icon"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 60, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 18, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSection.PageSection.new(this.title, {$creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__PageGridTile.PageGridTile.new = function(image, title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[title$] = title;
    components__PageGridTile.PageGridTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageGridTile.PageGridTile.prototype;
  dart.addTypeTests(components__PageGridTile.PageGridTile);
  const image$ = Symbol("PageGridTile.image");
  const title$ = Symbol("PageGridTile.title");
  dart.setMethodSignature(components__PageGridTile.PageGridTile, () => ({
    __proto__: dart.getMethods(components__PageGridTile.PageGridTile.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__PageGridTile.PageGridTile, () => ({
    __proto__: dart.getFields(components__PageGridTile.PageGridTile.__proto__),
    image: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageGridTile", {
    "package:takeoffandroid_portfolio/components/PageGridTile.dart": components__PageGridTile
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageGridTile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,+CACa,sBAChB,yDAAqB,YAAgB,oCAAM,2eAAmB;ivBAC9D,8CAAiB,4dACjB,4CAAY;IAGlB;;wDAXkB,OAAY;;IAAZ;IAAY;AAA9B;;EAAoC","file":"PageGridTile.ddc.js"}');
  // Exports:
  return {
    components__PageGridTile: components__PageGridTile
  };
});

//# sourceMappingURL=PageGridTile.ddc.js.map
