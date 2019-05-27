define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/takeoffandroid_portfolio/components/drawer/DrawerImage', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/drawer/DrawerTitle', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle'], function(dart_sdk, animation, AppColors, animation$, ui, DrawerImage, Height24, DrawerTitle, Height4, DrawerSubTitle) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const AppColors$ = AppColors.AppColors;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const ui$ = ui.ui;
  const components__drawer__DrawerImage = DrawerImage.components__drawer__DrawerImage;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__drawer__DrawerTitle = DrawerTitle.components__drawer__DrawerTitle;
  const components__space__Height4 = Height4.components__space__Height4;
  const components__drawer__DrawerSubTitle = DrawerSubTitle.components__drawer__DrawerSubTitle;
  const components__drawer__DrawerTopBar = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
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
  components__drawer__DrawerTopBar.DrawerTopBar = class DrawerTopBar extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: AppColors$.AppColors.colorSecondary, boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: new ui$.Color.fromRGBO(2, 4, 16, 1.0)})])}), margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 16.0), child: new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(36.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new components__drawer__DrawerImage.DrawerImage.new({$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$0 || (const$0 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$2 || (const$2 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerTitle.DrawerTitle.new({$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$4 || (const$4 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerSubTitle.DrawerSubTitle.new({$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$8 || (const$8 = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 13, name: "mainAxisAlignment"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, name: "crossAxisAlignment"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 13, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, name: "padding"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "decoration"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "margin"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__drawer__DrawerTopBar.DrawerTopBar.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__drawer__DrawerTopBar.DrawerTopBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerTopBar.DrawerTopBar.prototype;
  dart.addTypeTests(components__drawer__DrawerTopBar.DrawerTopBar);
  dart.setMethodSignature(components__drawer__DrawerTopBar.DrawerTopBar, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerTopBar.DrawerTopBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart": components__drawer__DrawerTopBar
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,wDACS,4DACS,gDACN,yBAAC,oDAAuB,uBAAS,GAAG,GAAG,IAAI,oBACvC,mDAAS,KAAG,KAAG,KAAG,cAC9B,8CACU,6EAAe,gBACvB,uDACgC,mEACE,0DACrB,sBAChB,wZACA,iZACA,wZACA,+YACA;IAIZ;;;;;;EACF","file":"DrawerTopBar.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerTopBar: components__drawer__DrawerTopBar
  };
});

//# sourceMappingURL=DrawerTopBar.ddc.js.map
