define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/takeoffandroid_portfolio/components/drawer/DrawerImage', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/drawer/DrawerTitle', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/drawer/DrawerSubTitle'], function(dart_sdk, animation, AppColors, animation$, ui, DrawerImage, Height24, DrawerTitle, Height4, DrawerSubTitle) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const AppColors$ = AppColors.AppColors;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const ui$ = ui.ui;
  const components__drawer__DrawerImage = DrawerImage.components__drawer__DrawerImage;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__drawer__DrawerTitle = DrawerTitle.components__drawer__DrawerTitle;
  const components__space__Height4 = Height4.components__space__Height4;
  const components__drawer__DrawerSubTitle = DrawerSubTitle.components__drawer__DrawerSubTitle;
  const components__drawer__DrawerTopBar = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C0() {
      return C0 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 36,
        [_top]: 36,
        [_right]: 36,
        [_bottom]: 36
      });
    },
    get C2() {
      return C2 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C1() {
      return C1 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 24,
        column: 15,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 25,
        column: 15,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 26,
        column: 15,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 27,
        column: 15,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 28,
        column: 15,
        name: null,
        parameterLocations: C2 || CT.C2
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 13,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 13,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 23,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9, C10 || CT.C10, C11 || CT.C11], src__widgets__widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 20,
        column: 18,
        name: null,
        parameterLocations: C8 || CT.C8
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 11,
        name: "padding",
        parameterLocations: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 18,
        column: 16,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 9,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 9,
        name: "margin",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18, C19 || CT.C19, C20 || CT.C20], src__widgets__widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart",
        line: 13,
        column: 12,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    }
  });
  const _left = dart.privateName(src__painting__edge_insets, "_left");
  const _top = dart.privateName(src__painting__edge_insets, "_top");
  const _right = dart.privateName(src__painting__edge_insets, "_right");
  const _bottom = dart.privateName(src__painting__edge_insets, "_bottom");
  let C0;
  let C2;
  let C1;
  let C3;
  let C4;
  let C5;
  let C6;
  let C9;
  let C10;
  let C11;
  let C8;
  let C7;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C19;
  let C20;
  let C17;
  let C16;
  components__drawer__DrawerTopBar.DrawerTopBar = class DrawerTopBar extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: AppColors$.AppColors.colorSecondary, boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: new ui$.Color.fromRGBO(2, 4, 16, 1.0)})])}), margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 16.0), child: new src__widgets__basic.Padding.new({padding: C0 || CT.C0, child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new components__drawer__DrawerImage.DrawerImage.new({$creationLocationd_0dea112b090073317d4: C1 || CT.C1}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new components__drawer__DrawerTitle.DrawerTitle.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__drawer__DrawerSubTitle.DrawerSubTitle.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6})]), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16});
    }
  };
  (components__drawer__DrawerTopBar.DrawerTopBar.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    components__drawer__DrawerTopBar.DrawerTopBar.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerTopBar.DrawerTopBar.prototype;
  dart.addTypeTests(components__drawer__DrawerTopBar.DrawerTopBar);
  dart.setMethodSignature(components__drawer__DrawerTopBar.DrawerTopBar, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerTopBar.DrawerTopBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__drawer__DrawerTopBar.DrawerTopBar, "package:takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerTopBar", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerTopBar.dart": components__drawer__DrawerTopBar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DrawerTopBar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAW4B;AACxB,YAAO,wDACS,4DACS,gDACN,yBAAC,oDAAuB,uBAAS,GAAG,GAAG,IAAI,oBACvC,mDAAS,KAAG,KAAG,KAAG,cAC9B,kEAEE,uDACgC,mEACE,0DACrB,sBAChB,4GACA,qGACA,4GACA,mGACA;IAIZ;;;;;;EACF","file":"DrawerTopBar.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerTopBar: components__drawer__DrawerTopBar
  };
});

//# sourceMappingURL=DrawerTopBar.ddc.js.map
