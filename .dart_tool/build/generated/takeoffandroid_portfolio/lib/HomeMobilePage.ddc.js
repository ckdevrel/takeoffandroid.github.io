define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/takeoffandroid_portfolio/AppColors', 'packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar', 'packages/takeoffandroid_portfolio/components/drawer/DrawerRow', 'packages/takeoffandroid_portfolio/components/ContentFrame'], function(dart_sdk, animation, material, animation$, ui, AppColors, DrawerTopBar, DrawerRow, ContentFrame) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__app_bar = material.src__material__app_bar;
  const src__material__colors = material.src__material__colors;
  const src__material__drawer = material.src__material__drawer;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const AppColors$ = AppColors.AppColors;
  const components__drawer__DrawerTopBar = DrawerTopBar.components__drawer__DrawerTopBar;
  const components__drawer__DrawerRow = DrawerRow.components__drawer__DrawerRow;
  const components__ContentFrame = ContentFrame.components__ContentFrame;
  const HomeMobilePage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  HomeMobilePage.HomeMobilePage = class HomeMobilePage$ extends src__widgets__framework.StatefulWidget {
    createState() {
      return new HomeMobilePage._HomeMobilePageState.new();
    }
  };
  (HomeMobilePage.HomeMobilePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    HomeMobilePage.HomeMobilePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = HomeMobilePage.HomeMobilePage.prototype;
  dart.addTypeTests(HomeMobilePage.HomeMobilePage);
  dart.setMethodSignature(HomeMobilePage.HomeMobilePage, () => ({
    __proto__: dart.getMethods(HomeMobilePage.HomeMobilePage.__proto__),
    createState: dart.fnType(HomeMobilePage._HomeMobilePageState, [])
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
  let const$56;
  HomeMobilePage._HomeMobilePageState = class _HomeMobilePageState extends src__widgets__framework.State$(HomeMobilePage.HomeMobilePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("TakeoffAndroid", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 18.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 23, name: "data"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 11, name: "title"})))], src__widgets__widget_inspector._Location))})))}), backgroundColor: src__material__colors.Colors.white, drawer: new src__material__drawer.Drawer.new({child: new src__widgets__container.Container.new({color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__drawer__DrawerTopBar.DrawerTopBar.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 0, "About", "images/drawer_about.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 0);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 38, name: "isSelected"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 44, name: "title"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 53, name: "icon"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 80, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 1, "Speaking", "images/drawer_speaking.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 1);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 38, name: "isSelected"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, name: "title"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 15, name: "icon"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 2, "Open Source", "images/drawer_open_source.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 2);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 38, name: "isSelected"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 15, name: "title"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 15, name: "icon"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 3, "Skills", "images/drawer_skills.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 3);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 38, name: "isSelected"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 15, name: "title"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 15, name: "icon"}))), const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 4, "Awards", "images/drawer_award.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 4);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$36 || (const$36 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 38, name: "isSelected"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 15, name: "title"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 15, name: "icon"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 15, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 31, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 11, name: "color"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), body: new components__ContentFrame.ContentFrame.new(this.selectedOption, {$creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 26, name: "drawerPosition"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 7, name: "appBar"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 7, name: "backgroundColor"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 7, name: "drawer"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    loadPage(context, drawerPosition) {
      src__widgets__navigator.Navigator.pop(core.Object, context);
      this.setState(dart.fn(() => {
        this.selectedOption = drawerPosition;
      }, VoidToNull()));
    }
  };
  (HomeMobilePage._HomeMobilePageState.new = function() {
    this.selectedOption = 0;
    HomeMobilePage._HomeMobilePageState.__proto__.new.call(this);
    ;
  }).prototype = HomeMobilePage._HomeMobilePageState.prototype;
  dart.addTypeTests(HomeMobilePage._HomeMobilePageState);
  dart.setMethodSignature(HomeMobilePage._HomeMobilePageState, () => ({
    __proto__: dart.getMethods(HomeMobilePage._HomeMobilePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    loadPage: dart.fnType(dart.void, [src__widgets__framework.BuildContext, core.int])
  }));
  dart.setFieldSignature(HomeMobilePage._HomeMobilePageState, () => ({
    __proto__: dart.getFields(HomeMobilePage._HomeMobilePageState.__proto__),
    selectedOption: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomeMobilePage", {
    "package:takeoffandroid_portfolio/HomeMobilePage.dart": HomeMobilePage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBwC;IAAsB;;;;;;EAC9D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,mDACG,8CACG,gCAAK,0BACD,yDACS,kBACF,aACI,gDACS,2jCACX,4CAChB,6CACC,kDACY,0CACN,sDAA2B,sBACpC,0YACA,gDAAU,AAAe,wBAAG,GAAG,SAAS,uCAAsC;oBAC5E,cAAS,OAAO,EAAE;q3BAEpB,gDAAU,AAAe,wBAAG,GAC1B,YACA,0CACW;oBACT,cAAS,OAAO,EAAE;y3BAGtB,gDAAU,AAAe,wBAAG,GAC1B,eACA,6CACW;oBACT,cAAS,OAAO,EAAE;y3BAGtB,gDAAU,AAAe,wBAAG,GAC1B,UACA,wCACW;oBACT,cAAS,OAAO,EAAE;y3BAGtB,gDAAU,AAAe,wBAAG,GAC1B,UACA,uCACW;oBACT,cAAS,OAAO,EAAE;03EAMtB,8CAAa;IAEvB;aAE2B,SAAa;MAC5B,mDAAI,OAAO;MACrB,cAAS;QACF,sBAAiB,cAAc;;IAExC;;;IA7DI,sBAAiB;;;EA8DvB","file":"HomeMobilePage.ddc.js"}');
  // Exports:
  return {
    HomeMobilePage: HomeMobilePage
  };
});

//# sourceMappingURL=HomeMobilePage.ddc.js.map
