define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageThumbnail', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/PageSubTitle', 'packages/takeoffandroid_portfolio/components/PageParagraph', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material'], function(dart_sdk, animation, PageThumbnail, PageTitle, PageSubTitle, PageParagraph, animation$, material) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__image = animation.src__widgets__image;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageThumbnail = PageThumbnail.components__PageThumbnail;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__PageSubTitle = PageSubTitle.components__PageSubTitle;
  const components__PageParagraph = PageParagraph.components__PageParagraph;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__material__icon_button = material.src__material__icon_button;
  const AboutPage = Object.create(dart.library);
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
  let const$54;
  let const$55;
  let const$56;
  let const$57;
  let const$58;
  let const$59;
  let const$60;
  let const$61;
  let const$62;
  let const$63;
  let const$64;
  let const$65;
  let const$66;
  let const$67;
  let const$68;
  let const$69;
  let const$70;
  let const$71;
  let const$72;
  let const$73;
  let const$74;
  AboutPage.AboutPage = class AboutPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/about_thumbnail.png", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 25, name: "image"})))], src__widgets__widget_inspector._Location))})))}), new components__PageTitle.PageTitle.new("CHANDRASEKAR K", {$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSubTitle.PageSubTitle.new("Chennai, India", {$creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageParagraph.PageParagraph.new("I am a Android Techie geek with 6+ years of experience in programming, blogging and open source contributions. " + "\nI have authored 15+ open sources and 20+ articles and spoken at chicago roboto 2018 Android conference. " + "\nIf you’d like to get in touch, feel free to say hello through any of the social links below.", {$creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 24, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 36.0, $creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__container.Container.new({height: 50.0, child: new src__widgets__scroll_view.ListView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, children: JSArrayOfWidget().of([new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/about_medium.png", {$creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: null, $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 26, name: "iconSize"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 19, name: "padding"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 19, name: "icon"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/about_linkedin.png", {$creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: null, $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 26, name: "iconSize"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 19, name: "padding"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 19, name: "icon"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/about_twitter.png", {$creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: null, $creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 26, name: "iconSize"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 19, name: "padding"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 19, name: "icon"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__icon_button.IconButton.new({iconSize: 40.0, padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 10.0, 0.0), icon: new src__widgets__image.Image.asset("images/about_github.png", {$creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 31, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 37, name: "name"})))], src__widgets__widget_inspector._Location))})))}), onPressed: null, $creationLocationd_0dea112b090073317d4: const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$55 || (const$55 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 26, name: "iconSize"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 19, name: "padding"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 19, name: "icon"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 19, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$59 || (const$59 = dart.constList([const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 15, name: "scrollDirection"}))), const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 49, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$63 || (const$63 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "height"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "mainAxisAlignment"}))), const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "mainAxisSize"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "crossAxisAlignment"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart", parameterLocations: const$73 || (const$73 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "padding"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (AboutPage.AboutPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    AboutPage.AboutPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AboutPage.AboutPage.prototype;
  dart.addTypeTests(AboutPage.AboutPage);
  dart.setMethodSignature(AboutPage.AboutPage, () => ({
    __proto__: dart.getMethods(AboutPage.AboutPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/AboutPage", {
    "package:takeoffandroid_portfolio/AboutPage.dart": AboutPage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAU4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,uDAC4B,4DACV,2DACY,yDACrB,sBAChB,gDAAc,ueACd,wCAAU,2dACV,8CAAiB,8cACjB,8CAAa,+dACb,8CAAiB,qdACjB,gDACI,oHACI,+GACA,ijBACR,8CAAiB,qdACjB,mDACU,aACD,6DACiB,sDAA8B,sBACpD,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,ofACP,s1BACf,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,sfACP,s1BACf,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,qfACP,s1BACf,yDAAqB,eACG,mDAAS,KAAG,KAAG,MAAI,YAC3B,oCAAM,ofACP;IAM3B;;;;;;EACF","file":"AboutPage.ddc.js"}');
  // Exports:
  return {
    AboutPage: AboutPage
  };
});

//# sourceMappingURL=AboutPage.ddc.js.map
