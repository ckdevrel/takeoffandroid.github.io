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
  main.MyApp = class MyApp extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__material__app.MaterialApp.new({debugShowCheckedModeBanner: false, title: "Flutter Demo", theme: src__material__theme_data.ThemeData.new({primarySwatch: src__material__colors.Colors.indigo}), home: new ResponsiveWidget$.ResponsiveWidget.new({largeScreen: new HomeWebPage$.HomeWebPage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 43, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))}), smallScreen: new HomeMobilePage$.HomeMobilePage.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 71, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))}), mediumScreen: new HomeMobilePage$.HomeMobilePage.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 103, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 30, name: "largeScreen"}))), const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 58, name: "smallScreen"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 89, name: "mediumScreen"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "debugShowCheckedModeBanner"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "title"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 7, name: "theme"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 7, name: "home"})))], src__widgets__widget_inspector._Location))})))});
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
  let const$16;
  let const$17;
  main.main = function() {
    return src__widgets__binding.runApp(new main.MyApp.new({$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart", parameterLocations: const$16 || (const$16 = dart.constList([], src__widgets__widget_inspector._Location))})))}));
  };
  dart.trackLibraries("packages/takeoffandroid_portfolio/main", {
    "package:takeoffandroid_portfolio/main.dart": main
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,qEACuB,cACrB,uBACA,wDACiB,6CAElB,yDAA8B,sXAA4B,+XAAgC;IAEpG;;;;;;EACF;;;;;;;;;AAfe,wCAAO;EAAQ","file":"main.ddc.js"}');
  // Exports:
  return {
    main: main
  };
});

//# sourceMappingURL=main.ddc.js.map
