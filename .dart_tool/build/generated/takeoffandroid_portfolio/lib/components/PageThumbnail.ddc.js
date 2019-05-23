define(['dart_sdk', 'packages/flutter_web/animation'], function(dart_sdk, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageThumbnail = Object.create(dart.library);
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
  components__PageThumbnail.PageThumbnail = class PageThumbnail extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 24.0), width: 1011.0, height: 300.0, child: new src__widgets__basic.Center.new({child: new src__widgets__image.Image.asset(this.image, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 36, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 42, name: "name"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 32, name: "margin"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "width"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "height"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__PageThumbnail.PageThumbnail.new = function(image, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    components__PageThumbnail.PageThumbnail.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageThumbnail.PageThumbnail.prototype;
  dart.addTypeTests(components__PageThumbnail.PageThumbnail);
  const image$ = Symbol("PageThumbnail.image");
  dart.setMethodSignature(components__PageThumbnail.PageThumbnail, () => ({
    __proto__: dart.getMethods(components__PageThumbnail.PageThumbnail.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__PageThumbnail.PageThumbnail, () => ({
    __proto__: dart.getFields(components__PageThumbnail.PageThumbnail.__proto__),
    image: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageThumbnail", {
    "package:takeoffandroid_portfolio/components/PageThumbnail.dart": components__PageThumbnail
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;UAKmB;AACxB,YAAiB,oDAA6B,mDAAS,KAAG,KAAG,KAAG,cACrD,gBACC,cACD,2CAAoB,oCAAM;IACvC;;0DARmB;;;AAAnB;;EAAyB","file":"PageThumbnail.ddc.js"}');
  // Exports:
  return {
    components__PageThumbnail: components__PageThumbnail
  };
});

//# sourceMappingURL=PageThumbnail.ddc.js.map
