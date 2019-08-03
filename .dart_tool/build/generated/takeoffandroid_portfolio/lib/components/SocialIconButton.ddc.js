define(['dart_sdk', 'packages/flutter_web/material', 'packages/flutter_web/animation'], function(dart_sdk, material, animation) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__material__icon_button = material.src__material__icon_button;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__SocialIconButton = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 27,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialIconButton.dart",
        line: 13,
        column: 21,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 11,
        column: 23,
        name: "iconSize",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 12,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 9,
        name: "icon",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 9,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6, C7 || CT.C7, C8 || CT.C8], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialIconButton.dart",
        line: 11,
        column: 12,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C7;
  let C8;
  let C4;
  let C3;
  components__SocialIconButton.SocialIconButton = class SocialIconButton extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    build(context) {
      return new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset(this.icon, {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), onPressed: null, $creationLocationd_0dea112b090073317d4: C3 || CT.C3});
    }
  };
  (components__SocialIconButton.SocialIconButton.new = function(icon, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[icon$] = icon;
    components__SocialIconButton.SocialIconButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__SocialIconButton.SocialIconButton.prototype;
  dart.addTypeTests(components__SocialIconButton.SocialIconButton);
  const icon$ = Symbol("SocialIconButton.icon");
  dart.setMethodSignature(components__SocialIconButton.SocialIconButton, () => ({
    __proto__: dart.getMethods(components__SocialIconButton.SocialIconButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__SocialIconButton.SocialIconButton, "package:takeoffandroid_portfolio/components/SocialIconButton.dart");
  dart.setFieldSignature(components__SocialIconButton.SocialIconButton, () => ({
    __proto__: dart.getFields(components__SocialIconButton.SocialIconButton.__proto__),
    icon: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/SocialIconButton", {
    "package:takeoffandroid_portfolio/components/SocialIconButton.dart": components__SocialIconButton
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["SocialIconButton.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;UAKmB;AACxB,YAAO,0DAAqB,eACJ,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,8EACP;IACjB;;gEARsB;;;AAAtB;;EAA2B","file":"SocialIconButton.ddc.js"}');
  // Exports:
  return {
    components__SocialIconButton: components__SocialIconButton
  };
});

//# sourceMappingURL=SocialIconButton.ddc.js.map
