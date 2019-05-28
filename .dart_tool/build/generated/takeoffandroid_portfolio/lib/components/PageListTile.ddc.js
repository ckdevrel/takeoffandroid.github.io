define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/ResponsiveWidget', 'packages/takeoffandroid_portfolio/components/space/Width16', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, ResponsiveWidget, Width16, animation$, AppColors, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const components__space__Width16 = Width16.components__space__Width16;
  const src__painting__text_style = animation$.src__painting__text_style;
  const AppColors$ = AppColors.AppColors;
  const ui$ = ui.ui;
  const components__PageListTile = Object.create(dart.library);
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
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
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
      return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(16.0, 0.0, 16.0, 0.0), width: 291.0, height: 100.0, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context)) ? new src__widgets__image.Image.asset(this.image, {width: 50.0, height: 50.0, $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 59, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 65, name: "name"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 72, name: "width"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 83, name: "height"})))], src__widgets__widget_inspector._Location))})))}) : new src__widgets__image.Image.asset(this.image, {width: 36.0, height: 36.0, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 23, name: "name"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 30, name: "width"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 41, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$9 || (const$9 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextBlackPrimary, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600, fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 25, name: "data"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 17, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "padding"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "width"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "height"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,qDACe,mDAAS,MAAI,KAAG,MAAI,aACjC,eACC,cACD,2CACa,gCACC,iDAAc,OAAO,KAAU,oCAAM,oBAAc,cAAY,mtBAC1E,oCAAM,oBAAc,cAAY,otBACtC,0YACA,6CACS,gCAAK,oBACD,oDACc,wDACL,wBACW,+BACb;IAK5B;;wDAxBkB,OAAY;;IAAZ;IAAY;AAA9B;;EAAoC","file":"PageListTile.ddc.js"}');
  // Exports:
  return {
    components__PageListTile: components__PageListTile
  };
});

//# sourceMappingURL=PageListTile.ddc.js.map
