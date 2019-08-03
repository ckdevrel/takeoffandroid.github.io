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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 42,
        column: 15,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 40,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 46,
        name: "title",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 55,
        name: "icon",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 43,
        column: 82,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.constList([C4 || CT.C4, C5 || CT.C5, C6 || CT.C6, C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 43,
        column: 15,
        name: null,
        parameterLocations: C3 || CT.C3
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 48,
        column: 40,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 17,
        name: "title",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 50,
        column: 17,
        name: "icon",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 51,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10, C11 || CT.C11, C12 || CT.C12, C13 || CT.C13], src__widgets__widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 48,
        column: 15,
        name: null,
        parameterLocations: C9 || CT.C9
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 40,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 58,
        column: 17,
        name: "title",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 59,
        column: 17,
        name: "icon",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 60,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C15() {
      return C15 = dart.constList([C16 || CT.C16, C17 || CT.C17, C18 || CT.C18, C19 || CT.C19], src__widgets__widget_inspector._Location);
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 57,
        column: 15,
        name: null,
        parameterLocations: C15 || CT.C15
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 66,
        column: 40,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 67,
        column: 17,
        name: "title",
        parameterLocations: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 68,
        column: 17,
        name: "icon",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 69,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23, C24 || CT.C24, C25 || CT.C25], src__widgets__widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 66,
        column: 15,
        name: null,
        parameterLocations: C21 || CT.C21
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 75,
        column: 40,
        name: "isSelected",
        parameterLocations: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 76,
        column: 17,
        name: "title",
        parameterLocations: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 77,
        column: 17,
        name: "icon",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 78,
        column: 17,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29, C30 || CT.C30, C31 || CT.C31], src__widgets__widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 75,
        column: 15,
        name: null,
        parameterLocations: C27 || CT.C27
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 33,
        name: "children",
        parameterLocations: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], src__widgets__widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 41,
        column: 24,
        name: null,
        parameterLocations: C33 || CT.C33
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 13,
        name: "width",
        parameterLocations: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 13,
        name: "height",
        parameterLocations: null
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 40,
        column: 13,
        name: "color",
        parameterLocations: null
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38, C39 || CT.C39, C40 || CT.C40], src__widgets__widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 37,
        column: 11,
        name: null,
        parameterLocations: C36 || CT.C36
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 87,
        column: 33,
        name: "drawerPosition",
        parameterLocations: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], src__widgets__widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 87,
        column: 20,
        name: null,
        parameterLocations: C42 || CT.C42
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 87,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], src__widgets__widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 86,
        column: 11,
        name: null,
        parameterLocations: C45 || CT.C45
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 9,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 9,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51, C52 || CT.C52], src__widgets__widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 32,
        column: 13,
        name: null,
        parameterLocations: C48 || CT.C48
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 7,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 7,
        name: "body",
        parameterLocations: null
      });
    },
    get C54() {
      return C54 = dart.constList([C55 || CT.C55, C56 || CT.C56], src__widgets__widget_inspector._Location);
    },
    get C53() {
      return C53 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomeWebPage.dart",
        line: 30,
        column: 12,
        name: null,
        parameterLocations: C54 || CT.C54
      });
    }
  });
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
  dart.setLibraryUri(HomeWebPage.HomeWebPage, "package:takeoffandroid_portfolio/HomeWebPage.dart");
  let C1;
  let C0;
  let C4;
  let C5;
  let C6;
  let C7;
  let C3;
  let C2;
  let C10;
  let C11;
  let C12;
  let C13;
  let C9;
  let C8;
  let C16;
  let C17;
  let C18;
  let C19;
  let C15;
  let C14;
  let C22;
  let C23;
  let C24;
  let C25;
  let C21;
  let C20;
  let C28;
  let C29;
  let C30;
  let C31;
  let C27;
  let C26;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C39;
  let C40;
  let C36;
  let C35;
  let C43;
  let C42;
  let C41;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C51;
  let C52;
  let C48;
  let C47;
  let C55;
  let C56;
  let C54;
  let C53;
  HomeWebPage._HomeWebPageState = class _HomeWebPageState extends src__widgets__framework.State$(HomeWebPage.HomeWebPage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white, body: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: 250.0, height: 1 / 0, color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__drawer__DrawerTopBar.DrawerTopBar.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 0, "About", "images/drawer_about.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 0;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C2 || CT.C2}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 1, "Speaking", "images/drawer_speaking.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 1;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 2, "Open Source", "images/drawer_open_source.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 2;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 3, "Skills", "images/drawer_skills.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 3;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new components__drawer__DrawerRow.DrawerRow.new(this.selectedOption === 4, "Awards", "images/drawer_award.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.selectedOption = 4;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26})]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new src__widgets__basic.Expanded.new({child: new components__ContentFrame.ContentFrame.new(this.selectedOption, {$creationLocationd_0dea112b090073317d4: C41 || CT.C41}), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C53 || CT.C53});
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
  dart.setLibraryUri(HomeWebPage._HomeWebPageState, "package:takeoffandroid_portfolio/HomeWebPage.dart");
  dart.setFieldSignature(HomeWebPage._HomeWebPageState, () => ({
    __proto__: dart.getFields(HomeWebPage._HomeWebPageState.__proto__),
    selectedOption: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomeWebPage", {
    "package:takeoffandroid_portfolio/HomeWebPage.dart": HomeWebPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["HomeWebPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAqBqC;IAAmB;;;;;;EACxD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,4DACmB,0CAClB,oDACiC,4DACV,2DACY,2DACrB,sBAChB,kDACS,6BAEU,0CACN,sDAA2B,sBACpC,8GACA,gDAAU,AAAe,wBAAG,GAAG,SAAS,uCAAsC;sBAC5E,cAAS;wBACP,sBAAiB;;6FAGrB,gDAAU,AAAe,wBAAG,GAC1B,YACA,0CACW;sBACT,cAAS;wBACP,sBAAiB;;6FAIvB,gDAAU,AAAe,wBAAG,GAC1B,eACA,6CACW;sBACT,cAAS;wBACP,sBAAiB;;+FAIvB,gDAAU,AAAe,wBAAG,GAC1B,UACA,wCACW;sBACT,cAAS;wBACP,sBAAiB;;+FAIvB,gDAAU,AAAe,wBAAG,GAC1B,UACA,uCACW;sBACT,cAAS;wBACP,sBAAiB;;mNAM3B,6CACS,8CAAa;IAK9B;;;IAlEI,sBAAiB;;;EAmEvB","file":"HomeWebPage.ddc.js"}');
  // Exports:
  return {
    HomeWebPage: HomeWebPage
  };
});

//# sourceMappingURL=HomeWebPage.ddc.js.map
