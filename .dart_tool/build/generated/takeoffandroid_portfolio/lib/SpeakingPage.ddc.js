define(['dart_sdk', 'packages/takeoffandroid_portfolio/components/PageListView', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageThumbnail', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/PageSubTitle', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/PageParagraph', 'packages/takeoffandroid_portfolio/components/space/Height36', 'packages/takeoffandroid_portfolio/components/SocialView', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/SocialIconButton', 'packages/takeoffandroid_portfolio/util/UrlLauncher'], function(dart_sdk, PageListView, animation, PageThumbnail, PageTitle, Height4, PageSubTitle, Height24, PageParagraph, Height36, SocialView, material, SocialIconButton, UrlLauncher) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const components__PageListView = PageListView.components__PageListView;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageThumbnail = PageThumbnail.components__PageThumbnail;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__space__Height4 = Height4.components__space__Height4;
  const components__PageSubTitle = PageSubTitle.components__PageSubTitle;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__PageParagraph = PageParagraph.components__PageParagraph;
  const components__space__Height36 = Height36.components__space__Height36;
  const components__SocialView = SocialView.components__SocialView;
  const src__material__ink_well = material.src__material__ink_well;
  const components__SocialIconButton = SocialIconButton.components__SocialIconButton;
  const util__UrlLauncher = UrlLauncher.util__UrlLauncher;
  const SpeakingPage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 25,
        name: "image",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 21,
        column: 11,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 21,
        name: "title",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 22,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 23,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 24,
        name: "title",
        parameterLocations: null
      });
    },
    get C9() {
      return C9 = dart.constList([C10 || CT.C10], src__widgets__widget_inspector._Location);
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 24,
        column: 11,
        name: null,
        parameterLocations: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 25,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
        column: 24,
        name: "title",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14], src__widgets__widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 26,
        column: 11,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 29,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 45,
        name: "icon",
        parameterLocations: null
      });
    },
    get C17() {
      return C17 = dart.constList([C18 || CT.C18], src__widgets__widget_inspector._Location);
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 31,
        column: 28,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 77,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21, C22 || CT.C22], src__widgets__widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 31,
        column: 13,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 45,
        name: "icon",
        parameterLocations: null
      });
    },
    get C24() {
      return C24 = dart.constList([C25 || CT.C25], src__widgets__widget_inspector._Location);
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 34,
        column: 28,
        name: null,
        parameterLocations: C24 || CT.C24
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 82,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C27() {
      return C27 = dart.constList([C28 || CT.C28, C29 || CT.C29], src__widgets__widget_inspector._Location);
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 34,
        column: 13,
        name: null,
        parameterLocations: C27 || CT.C27
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 30,
        column: 22,
        name: "socialIconButtons",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], src__widgets__widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 30,
        column: 11,
        name: null,
        parameterLocations: C31 || CT.C31
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35], src__widgets__widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 19,
        column: 14,
        name: null,
        parameterLocations: C34 || CT.C34
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], src__widgets__widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart",
        line: 18,
        column: 12,
        name: null,
        parameterLocations: C37 || CT.C37
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C5;
  let C4;
  let C3;
  let C7;
  let C6;
  let C10;
  let C9;
  let C8;
  let C11;
  let C14;
  let C13;
  let C12;
  let C15;
  let C18;
  let C17;
  let C16;
  let C21;
  let C22;
  let C20;
  let C19;
  let C25;
  let C24;
  let C23;
  let C28;
  let C29;
  let C27;
  let C26;
  let C32;
  let C31;
  let C30;
  let C35;
  let C34;
  let C33;
  let C38;
  let C37;
  let C36;
  SpeakingPage.SpeakingPage = class SpeakingPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/speaking_thumbnail.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__PageTitle.PageTitle.new("MASTERING ANDROID STUDIO TEMPLATE CREATION", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new components__PageSubTitle.PageSubTitle.new("Chicago Roboto, Chicago, USA", {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new components__PageParagraph.PageParagraph.new("Presented at International Android conference to talk about Android studio templates " + "\ncreation, application and its usages.", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new components__space__Height36.Height36.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new components__SocialView.SocialView.new({socialIconButtons: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/speaking_youtube.png", {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://www.youtube.com/watch?v=abbXZ20OPRI&t=12s", "Chicago Roboto 2018");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/speaking_speaker_deck.png", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://speakerdeck.com/takeoffandroid/mastering-android-studio-template-creation", "Speaker Deck");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26})]), $creationLocationd_0dea112b090073317d4: C30 || CT.C30})]), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), $creationLocationd_0dea112b090073317d4: C36 || CT.C36});
    }
  };
  (SpeakingPage.SpeakingPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    SpeakingPage.SpeakingPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SpeakingPage.SpeakingPage.prototype;
  dart.addTypeTests(SpeakingPage.SpeakingPage);
  dart.setMethodSignature(SpeakingPage.SpeakingPage, () => ({
    __proto__: dart.getMethods(SpeakingPage.SpeakingPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(SpeakingPage.SpeakingPage, "package:takeoffandroid_portfolio/SpeakingPage.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/SpeakingPage", {
    "package:takeoffandroid_portfolio/SpeakingPage.dart": SpeakingPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["SpeakingPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAgB4B;AACxB,YAAO,uDACE,sDACa,sBAChB,gDAAc,yFACd,wCAAU,sGACV,mGACA,8CAAa,wFACb,uGACA,gDACI,0FACA,qGACJ,uGACA,8DAAsC,sBACpC,gDAAe,sDAAiB,gGAAuC;oBACzD,sCAAQ,qDAAqD;6FAE3E,gDAAe,sDAAiB,qGAA4C;oBAC9D,sCAAQ,qFAAqF;;IAMrH;;;;;;EACF","file":"SpeakingPage.ddc.js"}');
  // Exports:
  return {
    SpeakingPage: SpeakingPage
  };
});

//# sourceMappingURL=SpeakingPage.ddc.js.map
