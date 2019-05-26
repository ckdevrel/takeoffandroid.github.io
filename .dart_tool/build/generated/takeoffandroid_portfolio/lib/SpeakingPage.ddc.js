define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageThumbnail', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/PageSubTitle', 'packages/takeoffandroid_portfolio/components/PageParagraph', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, PageThumbnail, PageTitle, PageSubTitle, PageParagraph, animation$, material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageThumbnail = PageThumbnail.components__PageThumbnail;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__PageSubTitle = PageSubTitle.components__PageSubTitle;
  const components__PageParagraph = PageParagraph.components__PageParagraph;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__material__icon_button = material.src__material__icon_button;
  const SpeakingPage = Object.create(dart.library);
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
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
  let const$34;
  let const$35;
  let const$36;
  let const$37;
  let const$38;
  let const$39;
  let const$40;
  let const$41;
  let const$42;
  let const$43;
  let const$44;
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  let const$49;
  let const$50;
  let const$51;
  let const$52;
  let const$53;
  SpeakingPage.SpeakingPage = class SpeakingPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/speaking_thumbnail.png", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 25, name: "image"})))], src__widgets__widget_inspector._Location))})))}), new components__PageTitle.PageTitle.new("MASTERING ANDROID STUDIO TEMPLATE CREATION", {$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSubTitle.PageSubTitle.new("Chicago Roboto, Chicago, USA", {$creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageParagraph.PageParagraph.new("Presented at International Android conference to talk about Android studio templates " + "\ncreation, application and its usages.", {$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 36.0, $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: 50.0, child: new src__widgets__scroll_view.ListView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, children: JSArrayOfWidget().of([new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/speaking_youtube.png", {$creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: VoidTovoid()._check(this.openLink("https://www.youtube.com/watch?v=abbXZ20OPRI&index=14&list=PLnD_TKDSaFyXuapaScA3Q616AXvsnlq09&t=0s")), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 26, name: "iconSize"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 19, name: "padding"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 19, name: "icon"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/speaking_speaker_deck.png", {$creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: VoidTovoid()._check(this.openLink("https://speakerdeck.com/TakeoffAndroid")), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 26, name: "iconSize"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 19, name: "padding"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 19, name: "icon"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 15, name: "scrollDirection"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 49, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 13, name: "height"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$48 || (const$48 = dart.constList([const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$52 || (const$52 = dart.constList([const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "padding"}))), const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,sDACS,sBAChB,gDAAc,6eACd,wCAAU,0fACV,8CAAiB,idACjB,8CAAa,gfACb,8CAAiB,wdACjB,gDACI,0FACA,6fACJ,8CAAiB,wdACjB,mDACU,aACD,6DACiB,sDAA8B,sBACpD,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,+gBACP,cAAS,07BACxB,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,ohBACP,cAAS;IAMpC;aAEgB;IAMhB;;;;;;EACF","file":"SpeakingPage.ddc.js"}');
  // Exports:
  return {
    SpeakingPage: SpeakingPage
  };
});

//# sourceMappingURL=SpeakingPage.ddc.js.map
