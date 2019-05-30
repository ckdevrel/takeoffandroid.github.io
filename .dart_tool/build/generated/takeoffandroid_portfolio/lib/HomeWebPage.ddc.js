define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/AppColors', 'packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar', 'packages/takeoffandroid_portfolio/components/drawer/DrawerRow', 'packages/takeoffandroid_portfolio/components/ContentFrame'], function(dart_sdk, animation, material, AppColors, DrawerTopBar, DrawerRow, ContentFrame) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const AppColors$ = AppColors.AppColors;
  const components__drawer__DrawerTopBar = DrawerTopBar.components__drawer__DrawerTopBar;
  const components__drawer__DrawerRow = DrawerRow.components__drawer__DrawerRow;
  const components__ContentFrame = ContentFrame.components__ContentFrame;
  const HomeWebPage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  HomeWebPage.HomeWebPage = class HomeWebPage$ extends src__widgets__framework.StatefulWidget {
    createState() {
      return new HomeWebPage._HomeWebPageState.new();
    }
  };
  (HomeWebPage.HomeWebPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    HomeWebPage.HomeWebPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = HomeWebPage.HomeWebPage.prototype;
  dart.addTypeTests(HomeWebPage.HomeWebPage);
  dart.setMethodSignature(HomeWebPage.HomeWebPage, () => ({
    __proto__: dart.getMethods(HomeWebPage.HomeWebPage.__proto__),
    createState: dart.fnType(HomeWebPage._HomeWebPageState, [])
  }));
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
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  let const$54;
  let const$55;
  HomeWebPage._HomeWebPageState = class _HomeWebPageState extends src__widgets__framework.State$(HomeWebPage.HomeWebPage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white, body: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: 250.0, height: core.double.infinity, color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__drawer__DrawerTopBar.DrawerTopBar.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 0, "About", "images/drawer_about.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 0;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 40, name: "isSelected"}))), const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 46, name: "title"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 55, name: "icon"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 82, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 1, "Speaking", "images/drawer_speaking.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 1;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 40, name: "isSelected"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 17, name: "title"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 17, name: "icon"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 2, "Open Source", "images/drawer_open_source.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 2;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 40, name: "isSelected"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 17, name: "title"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 17, name: "icon"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 3, "Skills", "images/drawer_skills.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 3;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 40, name: "isSelected"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 17, name: "title"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 17, name: "icon"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 4, "Awards", "images/drawer_award.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 4;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 40, name: "isSelected"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 17, name: "title"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 17, name: "icon"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 24, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 33, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$38 || (const$38 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 13, name: "width"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "height"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "color"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new components__ContentFrame.ContentFrame.new(this.selectedOption, {$creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 33, name: "drawerPosition"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 9, name: "mainAxisAlignment"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 9, name: "mainAxisSize"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 9, name: "crossAxisAlignment"}))), const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "backgroundColor"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (HomeWebPage._HomeWebPageState.new = function() {
    this.selectedOption = 0;
    HomeWebPage._HomeWebPageState.__proto__.new.call(this);
    ;
  }).prototype = HomeWebPage._HomeWebPageState.prototype;
  dart.addTypeTests(HomeWebPage._HomeWebPageState);
  dart.setMethodSignature(HomeWebPage._HomeWebPageState, () => ({
    __proto__: dart.getMethods(HomeWebPage._HomeWebPageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(HomeWebPage._HomeWebPageState, () => ({
    __proto__: dart.getFields(HomeWebPage._HomeWebPageState.__proto__),
    selectedOption: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomeWebPage", {
    "package:takeoffandroid_portfolio/HomeWebPage.dart": HomeWebPage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;AAqBqC;IAAmB;;;;;;EACxD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,4DACmB,0CAClB,oDACiC,4DACV,2DACY,2DACrB,sBAChB,kDACS,eACQ,6BACE,0CACN,sDAA2B,sBACpC,qYACA,gDAAU,AAAe,wBAAG,GAAG,SAAS,uCAAsC;sBAC5E,cAAS;wBACP,sBAAiB;;42BAGrB,gDAAU,AAAe,wBAAG,GAC1B,YACA,0CACW;sBACT,cAAS;wBACP,sBAAiB;;k3BAIvB,gDAAU,AAAe,wBAAG,GAC1B,eACA,6CACW;sBACT,cAAS;wBACP,sBAAiB;;w3BAIvB,gDAAU,AAAe,wBAAG,GAC1B,UACA,wCACW;sBACT,cAAS;wBACP,sBAAiB;;w3BAIvB,gDAAU,AAAe,wBAAG,GAC1B,UACA,uCACW;sBACT,cAAS;wBACP,sBAAiB;;wpEAM3B,6CACS,8CAAa;IAK9B;;;IAlEI,sBAAiB;;;EAmEvB","file":"HomeWebPage.ddc.js"}');
  // Exports:
  return {
    HomeWebPage: HomeWebPage
  };
});

//# sourceMappingURL=HomeWebPage.ddc.js.map
