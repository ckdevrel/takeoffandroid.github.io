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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 23,
        name: "data",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 15,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 32,
        column: 18,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 11,
        name: "title",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 31,
        column: 15,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C8() {
      return C8 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 43,
        column: 13,
        name: null,
        parameterLocations: C8 || CT.C8
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 38,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 44,
        name: "title",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 53,
        name: "icon",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 80,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 44,
        column: 13,
        name: null,
        parameterLocations: C10 || CT.C10
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 47,
        column: 38,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 48,
        column: 15,
        name: "title",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 15,
        name: "icon",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 15,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], src__widgets__widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 47,
        column: 13,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 54,
        column: 38,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 55,
        column: 15,
        name: "title",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 56,
        column: 15,
        name: "icon",
        parameterLocations: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 15,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C22() {
      return C22 = dart.constList([C23 || CT.C23, C24 || CT.C24, C25 || CT.C25, C26 || CT.C26], src__widgets__widget_inspector._Location);
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 54,
        column: 13,
        name: null,
        parameterLocations: C22 || CT.C22
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 61,
        column: 38,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 62,
        column: 15,
        name: "title",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 63,
        column: 15,
        name: "icon",
        parameterLocations: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 64,
        column: 15,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30, C31 || CT.C31, C32 || CT.C32], src__widgets__widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 61,
        column: 13,
        name: null,
        parameterLocations: C28 || CT.C28
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 68,
        column: 38,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 69,
        column: 15,
        name: "title",
        parameterLocations: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 70,
        column: 15,
        name: "icon",
        parameterLocations: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 71,
        column: 15,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36, C37 || CT.C37, C38 || CT.C38], src__widgets__widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 68,
        column: 13,
        name: null,
        parameterLocations: C34 || CT.C34
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 31,
        name: "children",
        parameterLocations: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41], src__widgets__widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 42,
        column: 22,
        name: null,
        parameterLocations: C40 || CT.C40
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 11,
        name: "color",
        parameterLocations: null
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C43() {
      return C43 = dart.constList([C44 || CT.C44, C45 || CT.C45], src__widgets__widget_inspector._Location);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 40,
        column: 16,
        name: null,
        parameterLocations: C43 || CT.C43
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 40,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], src__widgets__widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 39,
        column: 15,
        name: null,
        parameterLocations: C47 || CT.C47
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 78,
        column: 26,
        name: "drawerPosition",
        parameterLocations: null
      });
    },
    get C50() {
      return C50 = dart.constList([C51 || CT.C51], src__widgets__widget_inspector._Location);
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 78,
        column: 13,
        name: null,
        parameterLocations: C50 || CT.C50
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 7,
        name: "appBar",
        parameterLocations: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 7,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 7,
        name: "drawer",
        parameterLocations: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 78,
        column: 7,
        name: "body",
        parameterLocations: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57], src__widgets__widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeMobilePage.dart",
        line: 30,
        column: 12,
        name: null,
        parameterLocations: C53 || CT.C53
      });
    }
  });
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
  dart.setLibraryUri(HomeMobilePage.HomeMobilePage, "package:takeoffandroid_portfolio/HomeMobilePage.dart");
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C5;
  let C4;
  let C8;
  let C7;
  let C11;
  let C12;
  let C13;
  let C14;
  let C10;
  let C9;
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  let C15;
  let C23;
  let C24;
  let C25;
  let C26;
  let C22;
  let C21;
  let C29;
  let C30;
  let C31;
  let C32;
  let C28;
  let C27;
  let C35;
  let C36;
  let C37;
  let C38;
  let C34;
  let C33;
  let C41;
  let C40;
  let C39;
  let C44;
  let C45;
  let C43;
  let C42;
  let C48;
  let C47;
  let C46;
  let C51;
  let C50;
  let C49;
  let C54;
  let C55;
  let C56;
  let C57;
  let C53;
  let C52;
  HomeMobilePage._HomeMobilePageState = class _HomeMobilePageState extends src__widgets__framework.State$(HomeMobilePage.HomeMobilePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({appBar: new src__material__app_bar.AppBar.new({title: new src__widgets__text.Text.new("TakeoffAndroid", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 18.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), backgroundColor: src__material__colors.Colors.white, drawer: new src__material__drawer.Drawer.new({child: new src__widgets__container.Container.new({color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__drawer__DrawerTopBar.DrawerTopBar.new({$creationLocationd_0dea112b090073317d4: C7 || CT.C7}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 0, "About", "images/drawer_about.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 0);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 1, "Speaking", "images/drawer_speaking.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 1);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 2, "Open Source", "images/drawer_open_source.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 2);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C21 || CT.C21}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 3, "Skills", "images/drawer_skills.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 3);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 4, "Awards", "images/drawer_award.png", {onPressed: dart.fn(() => {
                    this.loadPage(context, 4);
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33})]), $creationLocationd_0dea112b090073317d4: C39 || CT.C39}), $creationLocationd_0dea112b090073317d4: C42 || CT.C42}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46}), body: new components__ContentFrame.ContentFrame.new(this.selectedOption, {$creationLocationd_0dea112b090073317d4: C49 || CT.C49}), $creationLocationd_0dea112b090073317d4: C52 || CT.C52});
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
  dart.setLibraryUri(HomeMobilePage._HomeMobilePageState, "package:takeoffandroid_portfolio/HomeMobilePage.dart");
  dart.setFieldSignature(HomeMobilePage._HomeMobilePageState, () => ({
    __proto__: dart.getFields(HomeMobilePage._HomeMobilePageState.__proto__),
    selectedOption: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomeMobilePage", {
    "package:takeoffandroid_portfolio/HomeMobilePage.dart": HomeMobilePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["HomeMobilePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBwC;IAAsB;;;;;;EAC9D;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,mDACG,8CACG,gCAAK,0BACD,yDACS,kBACF,aACI,gDACS,sJACX,4CAChB,6CACC,kDACY,0CACN,sDAA2B,sBACpC,8GACA,gDAAU,AAAe,wBAAG,GAAG,SAAS,uCAAsC;oBAC5E,cAAS,OAAO,EAAE;2FAEpB,gDAAU,AAAe,wBAAG,GAC1B,YACA,0CACW;oBACT,cAAS,OAAO,EAAE;6FAGtB,gDAAU,AAAe,wBAAG,GAC1B,eACA,6CACW;oBACT,cAAS,OAAO,EAAE;6FAGtB,gDAAU,AAAe,wBAAG,GAC1B,UACA,wCACW;oBACT,cAAS,OAAO,EAAE;6FAGtB,gDAAU,AAAe,wBAAG,GAC1B,UACA,uCACW;oBACT,cAAS,OAAO,EAAE;gRAMtB,8CAAa;IAEvB;aAE2B,SAAa;MAC5B,mDAAI,OAAO;MACrB,cAAS;QACF,sBAAiB,cAAc;;IAExC;;;IA7DI,sBAAiB;;;EA8DvB","file":"HomeMobilePage.ddc.js"}');
  // Exports:
  return {
    HomeMobilePage: HomeMobilePage
  };
});

//# sourceMappingURL=HomeMobilePage.ddc.js.map
