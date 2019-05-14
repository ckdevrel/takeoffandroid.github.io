define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/AboutPage', 'packages/takeoffandroid_portfolio/SpeakingPage', 'packages/takeoffandroid_portfolio/AwardsPage'], function(dart_sdk, animation, material, AboutPage, SpeakingPage, AwardsPage) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__image = animation.src__widgets__image;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__drawer = material.src__material__drawer;
  const src__material__user_accounts_drawer_header = material.src__material__user_accounts_drawer_header;
  const src__material__list_tile = material.src__material__list_tile;
  const AboutPage$ = AboutPage.AboutPage;
  const SpeakingPage$ = SpeakingPage.SpeakingPage;
  const AwardsPage$ = AwardsPage.AwardsPage;
  const HomePage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
  HomePage._HomePageState = class _HomePageState extends src__widgets__framework.State$(HomePage.HomePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({body: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__material__drawer.Drawer.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new src__material__user_accounts_drawer_header.UserAccountsDrawerHeader.new({accountName: new src__widgets__text.Text.new("TakeoffAndroid", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 36, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 41, name: "data"})))], src__widgets__widget_inspector._Location))})))}), accountEmail: new src__widgets__text.Text.new("takeoffandroid@gmail.com", {$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 37, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$3 || (const$3 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 42, name: "data"})))], src__widgets__widget_inspector._Location))})))}), currentAccountPicture: new src__widgets__image.Image.network("https://i.imgur.com/R0Rzcsv.png", {$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 48, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 56, name: "src"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 19, name: "accountName"}))), const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 19, name: "accountEmail"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 19, name: "currentAccountPicture"})))], src__widgets__widget_inspector._Location))})))}), new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new("About", {$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 32, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 37, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 0;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 21, name: "title"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new("Speaking", {$creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 32, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 37, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 1;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 21, name: "title"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new("Open Source", {$creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 32, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 37, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 2;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 21, name: "title"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new("Skills", {$creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 32, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 37, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 3;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 53, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 54, column: 21, name: "title"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))}), new src__material__list_tile.ListTile.new({title: new src__widgets__text.Text.new("Awards", {$creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 32, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 37, name: "data"})))], src__widgets__widget_inspector._Location))})))}), onTap: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 4;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 61, column: 21, name: "title"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 62, column: 21, name: "onTap"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 24, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: this.getHomeContainer(), $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 70, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$61 || (const$61 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 9, name: "mainAxisAlignment"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 9, name: "mainAxisSize"}))), const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 9, name: "crossAxisAlignment"}))), const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    getHomeContainer() {
      switch (this.drawerPosition) {
        case 0:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$66 || (const$66 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 1:
        {
          return new SpeakingPage$.SpeakingPage.new({$creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$68 || (const$68 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 2:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$70 || (const$70 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 3:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$72 || (const$72 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 4:
        {
          return new AwardsPage$.AwardsPage.new({$creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$74 || (const$74 = dart.constList([], src__widgets__widget_inspector._Location))})))});
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;AAQkC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,iDACC,oDACiC,4DACV,2DACY,2DACrB,sBACZ,6CACS,sDACS,sBACZ,0FACe,gCAAK,qeACJ,gCAAK,0fACM,sCAAQ,2sCAEnC,kDACW,gCAAK,6dACT;sBACL,cAAS;wBACP,sBAAiB;;inBAGrB,kDACW,gCAAK,geACT;sBACL,cAAS;wBACP,sBAAiB;;inBAGrB,kDACW,gCAAK,meACT;sBACL,cAAS;wBACP,sBAAiB;;inBAGrB,kDACW,gCAAK,8dACT;sBACL,cAAS;wBACP,sBAAiB;;inBAGrB,kDACW,gCAAK,8dACT;sBACL,cAAS;wBACP,sBAAiB;;ghDAM/B,6CACS;IAKjB;;AAGE,cAAO;YACA;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;;IAEb;;;IA7EI,sBAAiB;;;EA8EvB","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    HomePage: HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
