define(['dart_sdk', 'packages/takeoffandroid_portfolio/AboutPage', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/SpeakingPage', 'packages/takeoffandroid_portfolio/OpenSourcePage', 'packages/takeoffandroid_portfolio/SkillsPage', 'packages/takeoffandroid_portfolio/AwardsPage'], function(dart_sdk, AboutPage, animation, SpeakingPage, OpenSourcePage, SkillsPage, AwardsPage) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const AboutPage$ = AboutPage.AboutPage;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const SpeakingPage$ = SpeakingPage.SpeakingPage;
  const OpenSourcePage$ = OpenSourcePage.OpenSourcePage;
  const SkillsPage$ = SkillsPage.SkillsPage;
  const AwardsPage$ = AwardsPage.AwardsPage;
  const components__ContentFrame = Object.create(dart.library);
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
  components__ContentFrame.ContentFrame = class ContentFrame extends src__widgets__framework.StatelessWidget {
    get drawerPosition() {
      return this[drawerPosition$];
    }
    set drawerPosition(value) {
      this[drawerPosition$] = value;
    }
    build(context) {
      return this.getHomeContainer();
    }
    getHomeContainer() {
      switch (this.drawerPosition) {
        case 0:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart", parameterLocations: const$ || (const$ = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 1:
        {
          return new SpeakingPage$.SpeakingPage.new({$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart", parameterLocations: const$1 || (const$1 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 2:
        {
          return new OpenSourcePage$.OpenSourcePage.new({$creationLocationd_0dea112b090073317d4: const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart", parameterLocations: const$3 || (const$3 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 3:
        {
          return new SkillsPage$.SkillsPage.new({$creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart", parameterLocations: const$5 || (const$5 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 4:
        {
          return new AwardsPage$.AwardsPage.new({$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart", parameterLocations: const$7 || (const$7 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
      }
    }
  };
  (components__ContentFrame.ContentFrame.new = function(drawerPosition, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[drawerPosition$] = drawerPosition;
    components__ContentFrame.ContentFrame.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__ContentFrame.ContentFrame.prototype;
  dart.addTypeTests(components__ContentFrame.ContentFrame);
  const drawerPosition$ = Symbol("ContentFrame.drawerPosition");
  dart.setMethodSignature(components__ContentFrame.ContentFrame, () => ({
    __proto__: dart.getMethods(components__ContentFrame.ContentFrame.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    getHomeContainer: dart.fnType(src__widgets__framework.Widget, [])
  }));
  dart.setFieldSignature(components__ContentFrame.ContentFrame, () => ({
    __proto__: dart.getFields(components__ContentFrame.ContentFrame.__proto__),
    drawerPosition: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/ContentFrame", {
    "package:takeoffandroid_portfolio/components/ContentFrame.dart": components__ContentFrame
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;UAKsB;AACxB,YAAO;IACT;;AAGE,cAAQ;YACD;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;;IAEb;;wDApBkB;;;AAAlB;;EAAiC","file":"ContentFrame.ddc.js"}');
  // Exports:
  return {
    components__ContentFrame: components__ContentFrame
  };
});

//# sourceMappingURL=ContentFrame.ddc.js.map
