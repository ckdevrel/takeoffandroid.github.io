define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, AppColors, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__text_style = animation$.src__painting__text_style;
  const AppColors$ = AppColors.AppColors;
  const ui$ = ui.ui;
  const components__OpenSourceHeader = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 7,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 7,
        name: "style",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/OpenSourceHeader.dart",
        line: 12,
        column: 12,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  components__OpenSourceHeader.OpenSourceHeader = class OpenSourceHeader extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextBlackPrimary, fontSize: 20.0, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__OpenSourceHeader.OpenSourceHeader.new = function(title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    components__OpenSourceHeader.OpenSourceHeader.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__OpenSourceHeader.OpenSourceHeader.prototype;
  dart.addTypeTests(components__OpenSourceHeader.OpenSourceHeader);
  const title$ = Symbol("OpenSourceHeader.title");
  dart.setMethodSignature(components__OpenSourceHeader.OpenSourceHeader, () => ({
    __proto__: dart.getMethods(components__OpenSourceHeader.OpenSourceHeader.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__OpenSourceHeader.OpenSourceHeader, "package:takeoffandroid_portfolio/components/OpenSourceHeader.dart");
  dart.setFieldSignature(components__OpenSourceHeader.OpenSourceHeader, () => ({
    __proto__: dart.getFields(components__OpenSourceHeader.OpenSourceHeader.__proto__),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/OpenSourceHeader", {
    "package:takeoffandroid_portfolio/components/OpenSourceHeader.dart": components__OpenSourceHeader
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["OpenSourceHeader.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAKS;;;;;;UAKmB;AACxB,YAAO,iCACL,oBACO,oDACY,sDACP,kBACE,wBACW;IAG7B;;gEAbsB;;;AAAtB;;EAA4B","file":"OpenSourceHeader.ddc.js"}');
  // Exports:
  return {
    components__OpenSourceHeader: components__OpenSourceHeader
  };
});

//# sourceMappingURL=OpenSourceHeader.ddc.js.map
