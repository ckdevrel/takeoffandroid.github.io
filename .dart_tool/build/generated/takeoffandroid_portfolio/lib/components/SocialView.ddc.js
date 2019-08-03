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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 9,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 13,
        column: 43,
        name: "children",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialView.dart",
        line: 12,
        column: 14,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 11,
        column: 7,
        name: "height",
        parameterLocations: null
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 12,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C5() {
      return C5 = dart.constList([C6 || CT.C6, C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/SocialView.dart",
        line: 10,
        column: 13,
        name: null,
        parameterLocations: C5 || CT.C5
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  let C6;
  let C7;
  let C5;
  let C4;
  components__SocialView.SocialView = class SocialView extends src__widgets__framework.StatelessWidget {
    get socialIconButtons() {
      return this[socialIconButtons$];
    }
    set socialIconButtons(value) {
      this[socialIconButtons$] = value;
    }
    build(context) {
      return new src__widgets__container.Container.new({height: 50.0, child: new src__widgets__scroll_view.ListView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, children: this.socialIconButtons, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C4 || CT.C4});
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
  dart.setLibraryUri(components__SocialView.SocialView, "package:takeoffandroid_portfolio/components/SocialView.dart");
  dart.setFieldSignature(components__SocialView.SocialView, () => ({
    __proto__: dart.getFields(components__SocialView.SocialView.__proto__),
    socialIconButtons: dart.fieldType(core.List$(src__widgets__framework.Widget))
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/SocialView", {
    "package:takeoffandroid_portfolio/components/SocialView.dart": components__SocialView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["SocialView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAGe;;;;;;UAKa;AACxB,YAAQ,oDACE,aACD,6DACiB,sDAAsB;IAElD;;;QAT2B;;;AAA3B;;EAA8C","file":"SocialView.ddc.js"}');
  // Exports:
  return {
    components__SocialView: components__SocialView
  };
});

//# sourceMappingURL=SocialView.ddc.js.map
