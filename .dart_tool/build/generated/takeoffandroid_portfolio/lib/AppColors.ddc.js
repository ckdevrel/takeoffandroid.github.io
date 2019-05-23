define(['dart_sdk', 'packages/flutter_web_ui/ui'], function(dart_sdk, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const AppColors = Object.create(dart.library);
  AppColors.AppColors = class AppColors extends core.Object {};
  (AppColors.AppColors.new = function() {
    ;
  }).prototype = AppColors.AppColors.prototype;
  dart.addTypeTests(AppColors.AppColors);
  dart.defineLazy(AppColors.AppColors, {
    /*AppColors.AppColors.colorPrimary*/get colorPrimary() {
      return dart.const(new ui$.Color.fromRGBO(52, 64, 230, 1.0));
    },
    /*AppColors.AppColors.colorSecondary*/get colorSecondary() {
      return dart.const(new ui$.Color.fromRGBO(50, 61, 222, 1.0));
    },
    /*AppColors.AppColors.colorTextGreyPrimary*/get colorTextGreyPrimary() {
      return dart.const(new ui$.Color.fromRGBO(129, 129, 136, 1.0));
    },
    /*AppColors.AppColors.colorTextGreySecondary*/get colorTextGreySecondary() {
      return dart.const(new ui$.Color.fromRGBO(96, 97, 115, 1.0));
    },
    /*AppColors.AppColors.colorTextBlackPrimary*/get colorTextBlackPrimary() {
      return dart.const(new ui$.Color.fromRGBO(32, 34, 65, 1.0));
    }
  });
  dart.trackLibraries("packages/takeoffandroid_portfolio/AppColors", {
    "package:takeoffandroid_portfolio/AppColors.dart": AppColors
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/AppColors.dart"],"names":[],"mappings":";;;;;;;;;;EAQA;;;MALqB,gCAAY;YAAS,mCAAS,IAAI,IAAI,KAAK;;MAC3C,kCAAc;YAAS,mCAAS,IAAI,IAAI,KAAK;;MAC7C,wCAAoB;YAAS,mCAAS,KAAK,KAAK,KAAK;;MACrD,0CAAsB;YAAS,mCAAS,IAAI,IAAI,KAAK;;MACrD,yCAAqB;YAAS,mCAAS,IAAI,IAAI,IAAI","file":"AppColors.ddc.js"}');
  // Exports:
  return {
    AppColors: AppColors
  };
});

//# sourceMappingURL=AppColors.ddc.js.map
