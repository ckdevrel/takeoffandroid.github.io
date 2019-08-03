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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C1() {
      return C1 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart",
        line: 22,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart",
        line: 24,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart",
        line: 26,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart",
        line: 28,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/ContentFrame.dart",
        line: 30,
        column: 16,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C1;
  let C0;
  let C2;
  let C3;
  let C4;
  let C5;
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
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: C0 || CT.C0});
        }
        case 1:
        {
          return new SpeakingPage$.SpeakingPage.new({$creationLocationd_0dea112b090073317d4: C2 || CT.C2});
        }
        case 2:
        {
          return new OpenSourcePage$.OpenSourcePage.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3});
        }
        case 3:
        {
          return new SkillsPage$.SkillsPage.new({$creationLocationd_0dea112b090073317d4: C4 || CT.C4});
        }
        case 4:
        {
          return new AwardsPage$.AwardsPage.new({$creationLocationd_0dea112b090073317d4: C5 || CT.C5});
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
  dart.setLibraryUri(components__ContentFrame.ContentFrame, "package:takeoffandroid_portfolio/components/ContentFrame.dart");
  dart.setFieldSignature(components__ContentFrame.ContentFrame, () => ({
    __proto__: dart.getFields(components__ContentFrame.ContentFrame.__proto__),
    drawerPosition: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/ContentFrame", {
    "package:takeoffandroid_portfolio/components/ContentFrame.dart": components__ContentFrame
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ContentFrame.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;UAKsB;AACxB,YAAO;IACT;;AAGE,cAAQ;;;AAEJ,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;;AAEP,gBAAO;;;IAEb;;wDApBkB;;;AAAlB;;EAAiC","file":"ContentFrame.ddc.js"}');
  // Exports:
  return {
    components__ContentFrame: components__ContentFrame
  };
});

//# sourceMappingURL=ContentFrame.ddc.js.map
