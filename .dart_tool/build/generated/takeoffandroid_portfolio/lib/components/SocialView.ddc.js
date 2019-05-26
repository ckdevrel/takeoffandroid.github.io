define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation'], function(dart_sdk, animation, animation$) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const components__SocialView = Object.create(dart.library);
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  components__SocialView.SocialView = class SocialView extends src__widgets__framework.StatelessWidget {
    get socialIconButtons() {
      return this[socialIconButtons$];
    }
    set socialIconButtons(value) {
      this[socialIconButtons$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({height: 50.0, child: new src__widgets__scroll_view.ListView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, children: this.socialIconButtons, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialView.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 9, name: "scrollDirection"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 43, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialView.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "height"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (components__SocialView.SocialView.new = function(opts) {
    let socialIconButtons = opts && 'socialIconButtons' in opts ? opts.socialIconButtons : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[socialIconButtons$] = socialIconButtons;
    components__SocialView.SocialView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__SocialView.SocialView.prototype;
  dart.addTypeTests(components__SocialView.SocialView);
  const socialIconButtons$ = Symbol("SocialView.socialIconButtons");
  dart.setMethodSignature(components__SocialView.SocialView, () => ({
    __proto__: dart.getMethods(components__SocialView.SocialView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(components__SocialView.SocialView, () => ({
    __proto__: dart.getFields(components__SocialView.SocialView.__proto__),
    socialIconButtons: dart.fieldType(core.List$(src__widgets__framework.Widget))
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/SocialView", {
    "package:takeoffandroid_portfolio/components/SocialView.dart": components__SocialView
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;IAGe;;;;;;UAKa;AACxB,YAAQ,oDACE,aACD,6DACiB,sDAAsB;IAElD;;;QAT2B;;;AAA3B;;EAA8C","file":"SocialView.ddc.js"}');
  // Exports:
  return {
    components__SocialView: components__SocialView
  };
});

//# sourceMappingURL=SocialView.ddc.js.map
