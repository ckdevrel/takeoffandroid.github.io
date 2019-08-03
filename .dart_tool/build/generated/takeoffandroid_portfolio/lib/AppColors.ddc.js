define(['dart_sdk', 'packages/flutter_web_ui/ui'], function(dart_sdk, ui) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const AppColors = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4281614566.0
      });
    },
    get C1() {
      return C1 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4281482718.0
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4286677384.0
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4284506483.0
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4280296001.0
      });
    }
  });
  const _value = dart.privateName(ui$, "_value");
  let C0;
  let C1;
  let C2;
  let C3;
  let C4;
  AppColors.AppColors = class AppColors extends core.Object {};
  (AppColors.AppColors.new = function() {
    ;
  }).prototype = AppColors.AppColors.prototype;
  dart.addTypeTests(AppColors.AppColors);
  dart.setLibraryUri(AppColors.AppColors, "package:takeoffandroid_portfolio/AppColors.dart");
  dart.defineLazy(AppColors.AppColors, {
    /*AppColors.AppColors.colorPrimary*/get colorPrimary() {
      return C0 || CT.C0;
    },
    /*AppColors.AppColors.colorSecondary*/get colorSecondary() {
      return C1 || CT.C1;
    },
    /*AppColors.AppColors.colorTextGreyPrimary*/get colorTextGreyPrimary() {
      return C2 || CT.C2;
    },
    /*AppColors.AppColors.colorTextGreySecondary*/get colorTextGreySecondary() {
      return C3 || CT.C3;
    },
    /*AppColors.AppColors.colorTextBlackPrimary*/get colorTextBlackPrimary() {
      return C4 || CT.C4;
    }
  });
  dart.trackLibraries("packages/takeoffandroid_portfolio/AppColors", {
    "package:takeoffandroid_portfolio/AppColors.dart": AppColors
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["AppColors.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAQA;;;;MALqB,gCAAY;;;MACZ,kCAAc;;;MACd,wCAAoB;;;MACpB,0CAAsB;;;MACtB,yCAAqB","file":"AppColors.ddc.js"}');
  // Exports:
  return {
    AppColors: AppColors
  };
});

//# sourceMappingURL=AppColors.ddc.js.map
