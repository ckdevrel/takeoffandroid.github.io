define(['dart_sdk', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/ResponsiveWidget', 'packages/takeoffandroid_portfolio/HomeWebPage', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/HomeMobilePage'], function(dart_sdk, material, ResponsiveWidget, HomeWebPage, animation, HomeMobilePage) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__app = material.src__material__app;
  const src__material__theme_data = material.src__material__theme_data;
  const src__material__colors = material.src__material__colors;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const HomeWebPage$ = HomeWebPage.HomeWebPage;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__binding = animation.src__widgets__binding;
  const HomeMobilePage$ = HomeMobilePage.HomeMobilePage;
  const main = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 19,
        column: 43,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 19,
        column: 71,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 19,
        column: 103,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 30,
        name: "largeScreen",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 58,
        name: "smallScreen",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 89,
        name: "mediumScreen",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 19,
        column: 13,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 7,
        name: "debugShowCheckedModeBanner",
        parameterLocations: null
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 7,
        name: "title",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 7,
        name: "theme",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 7,
        name: "home",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11, C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 13,
        column: 12,
        name: null,
        parameterLocations: C10 || CT.C10
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart",
        line: 7,
        column: 23,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C1;
  let C0;
  let C2;
  let C3;
  let C6;
  let C7;
  let C8;
  let C5;
  let C4;
  let C11;
  let C12;
  let C13;
  let C14;
  let C10;
  let C9;
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Chandrasekar Portfolio", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.indigo}), home: new ResponsiveWidget$.ResponsiveWidget.new({largeScreen: new HomeWebPage$.HomeWebPage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), smallScreen: new HomeMobilePage$.HomeMobilePage.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2}), mediumScreen: new HomeMobilePage$.HomeMobilePage.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4}), $creationLocationd_0dea112b090073317d4: C9 || CT.C9});
    }
  };
  (main.MyApp.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    main.MyApp.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(main.MyApp, "package:takeoffandroid_portfolio/main.dart");
  let C15;
  main.main = function main$() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}));
  };
  dart.trackLibraries("packages/takeoffandroid_portfolio/main", {
    "package:takeoffandroid_portfolio/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,qEACuB,cACrB,iCACA,wDACiB,6CAElB,yDAA8B,sGAA4B,6GAAgC;IAEpG;;;;;;EACF;;;;;;;;;AAfe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
