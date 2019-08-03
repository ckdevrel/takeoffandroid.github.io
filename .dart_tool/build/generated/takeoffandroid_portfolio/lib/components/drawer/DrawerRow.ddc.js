define(['dart_sdk', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/space/Width16', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, material, AppColors, animation, Width16, ui, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__material_button = material.src__material__material_button;
  const AppColors$ = AppColors.AppColors;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__space__Width16 = Width16.components__space__Width16;
  const ui$ = ui.ui;
  const src__painting__text_style = animation$.src__painting__text_style;
  const components__drawer__DrawerRow = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 25,
        name: "name",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart",
        line: 25,
        column: 19,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart",
        line: 26,
        column: 13,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 27,
        column: 22,
        name: "data",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 28,
        column: 17,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 29,
        column: 17,
        name: "style",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8, C9 || CT.C9], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart",
        line: 27,
        column: 17,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 11,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 23,
        column: 11,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 11,
        name: "children",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13, C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart",
        line: 21,
        column: 18,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 7,
        name: "color",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 7,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/drawer/DrawerRow.dart",
        line: 18,
        column: 12,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C7;
  let C8;
  let C9;
  let C6;
  let C5;
  let C12;
  let C13;
  let C14;
  let C11;
  let C10;
  let C17;
  let C18;
  let C19;
  let C20;
  let C16;
  let C15;
  components__drawer__DrawerRow.DrawerRow = class DrawerRow extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      this[onPressed$] = value;
    }
    get isSelected() {
      return this[isSelected$];
    }
    set isSelected(value) {
      this[isSelected$] = value;
    }
    build(context) {
      return new src__material__material_button.MaterialButton.new({color: dart.test(this.isSelected) ? AppColors$.AppColors.colorSecondary : null, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset(this.icon, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new src__widgets__text.Text.new(this.title, {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: C5 || CT.C5})]), $creationLocationd_0dea112b090073317d4: C10 || CT.C10}), onPressed: this.onPressed, $creationLocationd_0dea112b090073317d4: C15 || CT.C15});
    }
  };
  (components__drawer__DrawerRow.DrawerRow.new = function(isSelected, title, icon, opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[isSelected$] = isSelected;
    this[title$] = title;
    this[icon$] = icon;
    this[onPressed$] = onPressed;
    components__drawer__DrawerRow.DrawerRow.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__drawer__DrawerRow.DrawerRow.prototype;
  dart.addTypeTests(components__drawer__DrawerRow.DrawerRow);
  const icon$ = Symbol("DrawerRow.icon");
  const title$ = Symbol("DrawerRow.title");
  const onPressed$ = Symbol("DrawerRow.onPressed");
  const isSelected$ = Symbol("DrawerRow.isSelected");
  dart.setMethodSignature(components__drawer__DrawerRow.DrawerRow, () => ({
    __proto__: dart.getMethods(components__drawer__DrawerRow.DrawerRow.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__drawer__DrawerRow.DrawerRow, "package:takeoffandroid_portfolio/components/drawer/DrawerRow.dart");
  dart.setFieldSignature(components__drawer__DrawerRow.DrawerRow, () => ({
    __proto__: dart.getFields(components__drawer__DrawerRow.DrawerRow.__proto__),
    icon: dart.fieldType(core.String),
    title: dart.fieldType(core.String),
    onPressed: dart.fieldType(dart.fnType(dart.dynamic, [])),
    isSelected: dart.fieldType(core.bool)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/drawer/DrawerRow", {
    "package:takeoffandroid_portfolio/components/drawer/DrawerRow.dart": components__drawer__DrawerRow
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["DrawerRow.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAOS;;;;;;IAAM;;;;;;IAEF;;;;;;IAEN;;;;;;UAKqB;AACxB,YAAO,yEACE,mBAAuB,sCAAiB,eAC3B,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,mEACZ,mGACI,gCAAK,wBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,oJAE1B;IAEf;;0DAvBe,YAAiB,OAAY;QAAa;;IAA1C;IAAiB;IAAY;IAAa;AAAzD;;EAAoE","file":"DrawerRow.ddc.js"}');
  // Exports:
  return {
    components__drawer__DrawerRow: components__drawer__DrawerRow
  };
});

//# sourceMappingURL=DrawerRow.ddc.js.map
