define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/takeoffandroid_portfolio/components/drawer/DrawerImage', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/drawer/DrawerTitle', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle', 'packages/takeoffandroid_portfolio/components/drawer/DrawerRow', 'packages/takeoffandroid_portfolio/AboutPage', 'packages/takeoffandroid_portfolio/SpeakingPage', 'packages/takeoffandroid_portfolio/OpenSourcePage', 'packages/takeoffandroid_portfolio/SkillsPage', 'packages/takeoffandroid_portfolio/AwardsPage'], function(dart_sdk, animation, material, AppColors, animation$, ui, DrawerImage, Height24, DrawerTitle, Height4, DrawerSubTitle, DrawerRow, AboutPage, SpeakingPage, OpenSourcePage, SkillsPage, AwardsPage) {
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
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const AppColors$ = AppColors.AppColors;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const ui$ = ui.ui;
  const components__drawer__DrawerImage = DrawerImage.components__drawer__DrawerImage;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__drawer__DrawerTitle = DrawerTitle.components__drawer__DrawerTitle;
  const components__space__Height4 = Height4.components__space__Height4;
  const components__drawer__DrawerSubTitle = DrawerSubTitle.components__drawer__DrawerSubTitle;
  const components__drawer__DrawerRow = DrawerRow.components__drawer__DrawerRow;
  const AboutPage$ = AboutPage.AboutPage;
  const SpeakingPage$ = SpeakingPage.SpeakingPage;
  const OpenSourcePage$ = OpenSourcePage.OpenSourcePage;
  const SkillsPage$ = SkillsPage.SkillsPage;
  const AwardsPage$ = AwardsPage.AwardsPage;
  const HomePage = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  HomePage.HomePage = class HomePage$ extends src__widgets__framework.StatefulWidget {
    createState() {
      return new HomePage._HomePageState.new();
    }
  };
  (HomePage.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    HomePage.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = HomePage.HomePage.prototype;
  dart.addTypeTests(HomePage.HomePage);
  dart.setMethodSignature(HomePage.HomePage, () => ({
    __proto__: dart.getMethods(HomePage.HomePage.__proto__),
    createState: dart.fnType(HomePage._HomePageState, [])
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
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  HomePage._HomePageState = class _HomePageState extends src__widgets__framework.State$(HomePage.HomePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white, body: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: 250.0, height: core.double.infinity, color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: AppColors$.AppColors.colorSecondary, boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: new ui$.Color.fromRGBO(2, 4, 16, 1.0)})])}), margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 16.0), child: new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(36.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new components__drawer__DrawerImage.DrawerImage.new({$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$0 || (const$0 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$2 || (const$2 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerTitle.DrawerTitle.new({$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$4 || (const$4 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerSubTitle.DrawerSubTitle.new({$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$8 || (const$8 = dart.constList([], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 23, name: "mainAxisAlignment"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 23, name: "crossAxisAlignment"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 26, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 21, name: "padding"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 19, name: "decoration"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 19, name: "margin"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new("About", "images/about.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 0;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 25, name: "title"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 34, name: "icon"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 54, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new("Speaking", "images/speaking.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 1;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 24, name: "title"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 36, name: "icon"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new("Open Source", "images/opensource.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 2;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 23, name: "title"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 38, name: "icon"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 74, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new("Skills", "images/skills.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 3;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 24, name: "title"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 34, name: "icon"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new components__drawer__DrawerRow.DrawerRow.new("Awards", "images/award.png", {onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 4;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 24, name: "title"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 34, name: "icon"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 88, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 24, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 33, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$56 || (const$56 = dart.constList([const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 13, name: "width"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 13, name: "height"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 13, name: "color"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: this.getHomeContainer(), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 9, name: "mainAxisAlignment"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 9, name: "mainAxisSize"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 9, name: "crossAxisAlignment"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 7, name: "backgroundColor"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    getHomeContainer() {
      switch (this.drawerPosition) {
        case 0:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$71 || (const$71 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 1:
        {
          return new SpeakingPage$.SpeakingPage.new({$creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$73 || (const$73 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 2:
        {
          return new OpenSourcePage$.OpenSourcePage.new({$creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 112, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$75 || (const$75 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 3:
        {
          return new SkillsPage$.SkillsPage.new({$creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$77 || (const$77 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 4:
        {
          return new AwardsPage$.AwardsPage.new({$creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$79 || (const$79 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
      }
    }
  };
  (HomePage._HomePageState.new = function() {
    this.drawerPosition = 0;
    HomePage._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = HomePage._HomePageState.prototype;
  dart.addTypeTests(HomePage._HomePageState);
  dart.setMethodSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getMethods(HomePage._HomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    getHomeContainer: dart.fnType(src__widgets__framework.Widget, [])
  }));
  dart.setFieldSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getFields(HomePage._HomePageState.__proto__),
    drawerPosition: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomePage", {
    "package:takeoffandroid_portfolio/HomePage.dart": HomePage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmBkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,4DACmB,0CAClB,oDACiC,4DACV,2DACY,2DACrB,sBAChB,kDACS,eACQ,6BACE,0CACN,sDAA2B,sBACpC,uDACgB,4DACS,gDACN,yBACT,oDAAuB,uBAAS,GAAG,GAAG,IAAI,oBAE7B,mDAAS,KAAG,KAAG,KAAG,cAC9B,8CACU,6EAAe,gBACvB,uDACgC,mEACE,0DACrB,sBAChB,kYACA,2XACA,kYACA,yXACA,24EAIV,gDAAU,SAAS,gCAA+B;sBAChD,cAAS;wBACP,sBAAiB;;kvBAGtB,gDAAU,YAAY,mCACR;sBACT,cAAS;wBACP,sBAAiB;;kvBAIzB,gDAAU,eAAe,qCACV;sBACT,cAAS;wBACP,sBAAiB;;kvBAIxB,gDAAU,UAAU,iCACN;sBACT,cAAS;wBACP,sBAAiB;;kvBAIxB,gDAAU,UAAU,gCACN;sBACT,cAAS;wBACP,sBAAiB;;4gEAM3B,6CACS;IAKjB;;AAIE,cAAQ;YACD;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;;IAEb;;;IA9FI,sBAAiB;;;EA+FvB","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    HomePage: HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
