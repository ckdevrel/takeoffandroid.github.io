define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/ResponsiveWidget', 'packages/takeoffandroid_portfolio/components/space/Width16', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, ResponsiveWidget, Width16, animation$, AppColors, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const components__space__Width16 = Width16.components__space__Width16;
  const src__painting__text_style = animation$.src__painting__text_style;
  const AppColors$ = AppColors.AppColors;
  const ui$ = ui.ui;
  const components__PageListTile = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 65,
        name: "name",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 72,
        name: "width",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 83,
        name: "height",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3, C4 || CT.C4], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 20,
        column: 59,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 23,
        name: "name",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 30,
        name: "width",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 41,
        name: "height",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 21,
        column: 17,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C11() {
      return C11 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 22,
        column: 11,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 25,
        name: "data",
        parameterLocations: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 17,
        name: "style",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 24,
        column: 20,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], src__widgets__widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 23,
        column: 11,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], src__widgets__widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 18,
        column: 14,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 7,
        name: "width",
        parameterLocations: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 7,
        name: "height",
        parameterLocations: null
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25, C26 || CT.C26, C27 || CT.C27], src__widgets__widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListTile.dart",
        line: 14,
        column: 12,
        name: null,
        parameterLocations: C23 || CT.C23
      });
    }
  });
  let C2;
  let C3;
  let C4;
  let C1;
  let C0;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C11;
  let C10;
  let C14;
  let C15;
  let C13;
  let C12;
  let C18;
  let C17;
  let C16;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C26;
  let C27;
  let C23;
  let C22;
  components__PageListTile.PageListTile = class PageListTile extends src__widgets__framework.StatelessWidget {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(16.0, 0.0, 16.0, 0.0), width: 291.0, height: 100.0, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context)) ? new src__widgets__image.Image.asset(this.image, {width: 50.0, height: 50.0, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}) : new src__widgets__image.Image.asset(this.image, {width: 36.0, height: 36.0, $creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new src__widgets__basic.Expanded.new({child: new src__widgets__text.Text.new(this.title, {style: new src__painting__text_style.TextStyle.new({color: AppColors$.AppColors.colorTextBlackPrimary, fontFamily: "OpenSans", fontWeight: ui$.FontWeight.w600, fontSize: 14.0}), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), $creationLocationd_0dea112b090073317d4: C16 || CT.C16})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22});
    }
  };
  (components__PageListTile.PageListTile.new = function(image, title, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[image$] = image;
    this[title$] = title;
    components__PageListTile.PageListTile.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageListTile.PageListTile.prototype;
  dart.addTypeTests(components__PageListTile.PageListTile);
  const image$ = Symbol("PageListTile.image");
  const title$ = Symbol("PageListTile.title");
  dart.setMethodSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getMethods(components__PageListTile.PageListTile.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__PageListTile.PageListTile, "package:takeoffandroid_portfolio/components/PageListTile.dart");
  dart.setFieldSignature(components__PageListTile.PageListTile, () => ({
    __proto__: dart.getFields(components__PageListTile.PageListTile.__proto__),
    image: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageListTile", {
    "package:takeoffandroid_portfolio/components/PageListTile.dart": components__PageListTile
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["PageListTile.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAO;;;;;;UAKY;AACxB,YAAO,qDACe,mDAAS,MAAI,KAAG,MAAI,aACjC,eACC,cACD,2CACa,gCACC,iDAAc,OAAO,KAAU,oCAAM,oBAAc,cAAY,8DAC1E,oCAAM,oBAAc,cAAY,6DACtC,qGACA,6CACS,gCAAK,oBACD,oDACc,wDACL,wBACW,+BACb;IAK5B;;wDAxBkB,OAAY;;IAAZ;IAAY;AAA9B;;EAAoC","file":"PageListTile.ddc.js"}');
  // Exports:
  return {
    components__PageListTile: components__PageListTile
  };
});

//# sourceMappingURL=PageListTile.ddc.js.map
