define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/takeoffandroid_portfolio/ResponsiveWidget', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, AppColors, ResponsiveWidget, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__text_style = animation$.src__painting__text_style;
  const AppColors$ = AppColors.AppColors;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const ui$ = ui.ui;
  const components__PageSubTitle = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 17,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 9,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageSubTitle.dart",
        line: 13,
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
  components__PageSubTitle.PageSubTitle = class PageSubTitle extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextGreyPrimary, fontSize: dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context)) ? 15.0 : 13.0, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__PageSubTitle.PageSubTitle.new = function(title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$] = title;
    components__PageSubTitle.PageSubTitle.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageSubTitle.PageSubTitle.prototype;
  dart.addTypeTests(components__PageSubTitle.PageSubTitle);
  const title$ = Symbol("PageSubTitle.title");
  dart.setMethodSignature(components__PageSubTitle.PageSubTitle, () => ({
    __proto__: dart.getMethods(components__PageSubTitle.PageSubTitle.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__PageSubTitle.PageSubTitle, "package:takeoffandroid_portfolio/components/PageSubTitle.dart");
  dart.setFieldSignature(components__PageSubTitle.PageSubTitle, () => ({
    __proto__: dart.getFields(components__PageSubTitle.PageSubTitle.__proto__),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageSubTitle", {
    "package:takeoffandroid_portfolio/components/PageSubTitle.dart": components__PageSubTitle
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["PageSubTitle.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;UAKmB;AACxB,YAAO,iCAAK,oBACD,oDAA2B,+DACH,iDAAc,OAAO,KAAI,OAAK,kBAC7C,wBACW;IACjC;;wDATkB;;;AAAlB;;EAAwB","file":"PageSubTitle.ddc.js"}');
  // Exports:
  return {
    components__PageSubTitle: components__PageSubTitle
  };
});

//# sourceMappingURL=PageSubTitle.ddc.js.map
