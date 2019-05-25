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
  let const$;
  let const$0;
  let const$1;
  let const$2;
  components__OpenSourceHeader.OpenSourceHeader = class OpenSourceHeader extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextBlackPrimary, fontSize: 20.0, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/OpenSourceHeader.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "style"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(components__OpenSourceHeader.OpenSourceHeader, () => ({
    __proto__: dart.getFields(components__OpenSourceHeader.OpenSourceHeader.__proto__),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/OpenSourceHeader", {
    "package:takeoffandroid_portfolio/components/OpenSourceHeader.dart": components__OpenSourceHeader
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/OpenSourceHeader.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAKS;;;;;;UAKmB;AACxB,YAAO,iCACL,oBACO,oDACY,sDACP,kBACE,wBACW;IAG7B;;gEAbsB;;;AAAtB;;EAA4B","file":"OpenSourceHeader.ddc.js"}');
  // Exports:
  return {
    components__OpenSourceHeader: components__OpenSourceHeader
  };
});

//# sourceMappingURL=OpenSourceHeader.ddc.js.map
