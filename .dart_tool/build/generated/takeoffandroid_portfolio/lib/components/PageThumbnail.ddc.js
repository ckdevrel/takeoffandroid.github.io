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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 42,
        name: "name",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart",
        line: 15,
        column: 36,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 23,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart",
        line: 15,
        column: 16,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 12,
        column: 32,
        name: "margin",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 9,
        name: "width",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.constList([C8 || CT.C8, C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], src__widgets__widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageThumbnail.dart",
        line: 12,
        column: 22,
        name: null,
        parameterLocations: C7 || CT.C7
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
  let C10;
  let C11;
  let C7;
  let C6;
  components__PageThumbnail.PageThumbnail = class PageThumbnail extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 24.0), width: 1011.0, height: 300.0, child: new src__widgets__basic.Center.new({child: new src__widgets__image.Image.asset(this.image, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C6 || CT.C6});
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
  dart.setLibraryUri(components__PageThumbnail.PageThumbnail, "package:takeoffandroid_portfolio/components/PageThumbnail.dart");
  dart.setFieldSignature(components__PageThumbnail.PageThumbnail, () => ({
    __proto__: dart.getFields(components__PageThumbnail.PageThumbnail.__proto__),
    image: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageThumbnail", {
    "package:takeoffandroid_portfolio/components/PageThumbnail.dart": components__PageThumbnail
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["PageThumbnail.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;UAKmB;AACxB,YAAiB,oDAA6B,mDAAS,KAAG,KAAG,KAAG,cACrD,gBACC,cACD,2CAAoB,oCAAM;IACvC;;0DARmB;;;AAAnB;;EAAyB","file":"PageThumbnail.ddc.js"}');
  // Exports:
  return {
    components__PageThumbnail: components__PageThumbnail
  };
});

//# sourceMappingURL=PageThumbnail.ddc.js.map
