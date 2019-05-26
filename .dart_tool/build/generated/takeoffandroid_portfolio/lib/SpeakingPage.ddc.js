define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageThumbnail', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/PageSubTitle', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/PageParagraph', 'packages/takeoffandroid_portfolio/components/space/Height36', 'packages/takeoffandroid_portfolio/components/SocialView', 'packages/takeoffandroid_portfolio/components/SocialIconButton'], function(dart_sdk, animation, PageThumbnail, PageTitle, Height4, PageSubTitle, Height24, PageParagraph, Height36, SocialView, SocialIconButton) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
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
  const components__SocialIconButton = SocialIconButton.components__SocialIconButton;
  const SpeakingPage = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
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
  let const$9;
  let const$10;
  let const$11;
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  let const$16;
  let const$17;
  let const$18;
  let const$19;
  let const$20;
  let const$21;
  let const$22;
  let const$23;
  let const$24;
  let const$25;
  let const$26;
  let const$27;
  let const$28;
  let const$29;
  let const$30;
  let const$31;
  let const$32;
  let const$33;
  SpeakingPage.SpeakingPage = class SpeakingPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/speaking_thumbnail.png", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 25, name: "image"})))], src__widgets__widget_inspector._Location))})))}), new components__PageTitle.PageTitle.new("MASTERING ANDROID STUDIO TEMPLATE CREATION", {$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$6 || (const$6 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__PageSubTitle.PageSubTitle.new("Chicago Roboto, Chicago, USA", {$creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$11 || (const$11 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__PageParagraph.PageParagraph.new("Presented at International Android conference to talk about Android studio templates " + "\ncreation, application and its usages.", {$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height36.Height36.new({$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$16 || (const$16 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__SocialView.SocialView.new({socialIconButtons: JSArrayOfWidget().of([new components__SocialIconButton.SocialIconButton.new("images/speaking_youtube.png", {$creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 30, name: "icon"})))], src__widgets__widget_inspector._Location))})))}), new components__SocialIconButton.SocialIconButton.new("images/speaking_speaker_deck.png", {$creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 30, name: "icon"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 22, name: "socialIconButtons"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 7, name: "padding"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    openLink(url) {
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
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    openLink: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/SpeakingPage", {
    "package:takeoffandroid_portfolio/SpeakingPage.dart": SpeakingPage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAc4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,sDACS,sBAChB,gDAAc,6eACd,wCAAU,0fACV,6XACA,8CAAa,8eACb,mYACA,gDACI,0FACA,6fACJ,mYACA,8DAAsC,sBACpC,sDAAiB,gfACjB,sDAAiB;IAK3B;aAEgB;IAMhB;;;;;;EACF","file":"SpeakingPage.ddc.js"}');
  // Exports:
  return {
    SpeakingPage: SpeakingPage
  };
});

//# sourceMappingURL=SpeakingPage.ddc.js.map
