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
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  components__SocialIconButton.SocialIconButton = class SocialIconButton extends src__widgets__framework.StatelessWidget {
    get icon() {
      return this[icon$];
    }
    set icon(value) {
      this[icon$] = value;
    }
    build(context) {
      return new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset(this.icon, {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 21, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialIconButton.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 27, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: null, $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialIconButton.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 23, name: "iconSize"}))), const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "padding"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "icon"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(components__SocialIconButton.SocialIconButton, () => ({
    __proto__: dart.getFields(components__SocialIconButton.SocialIconButton.__proto__),
    icon: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/SocialIconButton", {
    "package:takeoffandroid_portfolio/components/SocialIconButton.dart": components__SocialIconButton
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialIconButton.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;IAIS;;;;;;UAKmB;AACxB,YAAO,0DAAqB,eACJ,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,8eACP;IACjB;;gEARsB;;;AAAtB;;EAA2B","file":"SocialIconButton.ddc.js"}');
  // Exports:
  return {
    components__SocialIconButton: components__SocialIconButton
  };
});

//# sourceMappingURL=SocialIconButton.ddc.js.map
