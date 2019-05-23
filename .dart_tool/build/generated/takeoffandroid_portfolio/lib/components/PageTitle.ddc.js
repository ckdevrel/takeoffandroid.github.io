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
  const components__PageTitle = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  components__PageTitle.PageTitle = class PageTitle extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorPrimary, fontSize: 36.0, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.bold}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageTitle.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "style"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__PageTitle.PageTitle.new = function(title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    components__PageTitle.PageTitle.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageTitle.PageTitle.prototype;
  dart.addTypeTests(components__PageTitle.PageTitle);
  const title$ = Symbol("PageTitle.title");
  dart.setMethodSignature(components__PageTitle.PageTitle, () => ({
    __proto__: dart.getMethods(components__PageTitle.PageTitle.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__PageTitle.PageTitle, () => ({
    __proto__: dart.getFields(components__PageTitle.PageTitle.__proto__),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageTitle", {
    "package:takeoffandroid_portfolio/components/PageTitle.dart": components__PageTitle
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;IAKS;;;;;;UAKmB;AACxB,YAAO,iCACH,oBACO,oDACc,6CACP,kBACE,wBACW;IAEjC;;kDAZe;;;AAAf;;EAAqB","file":"PageTitle.ddc.js"}');
  // Exports:
  return {
    components__PageTitle: components__PageTitle
  };
});

//# sourceMappingURL=PageTitle.ddc.js.map
