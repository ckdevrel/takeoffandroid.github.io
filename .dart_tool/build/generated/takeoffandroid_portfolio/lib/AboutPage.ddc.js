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
  const AboutPage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 22,
        column: 11,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 23,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 23,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 24,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 25,
        column: 11,
        name: null,
        parameterLocations: C9 || CT.C9
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 26,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 27,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 27,
        column: 11,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 31,
        column: 11,
        name: null,
        parameterLocations: C7 || CT.C7
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 33,
        column: 28,
        name: null,
        parameterLocations: C17 || CT.C17
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 73,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 33,
        column: 13,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 36,
        column: 28,
        name: null,
        parameterLocations: C24 || CT.C24
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 75,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 36,
        column: 13,
        name: null,
        parameterLocations: C27 || CT.C27
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 45,
        name: "icon",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.constList([C32 || CT.C32], src__widgets__widget_inspector._Location);
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 39,
        column: 28,
        name: null,
        parameterLocations: C31 || CT.C31
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 39,
        column: 74,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C34() {
      return C34 = dart.constList([C35 || CT.C35, C36 || CT.C36], src__widgets__widget_inspector._Location);
    },
    get C33() {
      return C33 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 39,
        column: 13,
        name: null,
        parameterLocations: C34 || CT.C34
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 45,
        name: "icon",
        parameterLocations: null
      });
    },
    get C38() {
      return C38 = dart.constList([C39 || CT.C39], src__widgets__widget_inspector._Location);
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 42,
        column: 28,
        name: null,
        parameterLocations: C38 || CT.C38
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 73,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42, C43 || CT.C43], src__widgets__widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 42,
        column: 13,
        name: null,
        parameterLocations: C41 || CT.C41
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 32,
        column: 22,
        name: "socialIconButtons",
        parameterLocations: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], src__widgets__widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 32,
        column: 11,
        name: null,
        parameterLocations: C45 || CT.C45
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49], src__widgets__widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 20,
        column: 14,
        name: null,
        parameterLocations: C48 || CT.C48
      });
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C51() {
      return C51 = dart.constList([C52 || CT.C52], src__widgets__widget_inspector._Location);
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AboutPage.dart",
        line: 19,
        column: 12,
        name: null,
        parameterLocations: C51 || CT.C51
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
  let C36;
  let C34;
  let C33;
  let C39;
  let C38;
  let C37;
  let C42;
  let C43;
  let C41;
  let C40;
  let C46;
  let C45;
  let C44;
  let C49;
  let C48;
  let C47;
  let C52;
  let C51;
  let C50;
  AboutPage.AboutPage = class AboutPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/about_thumbnail.png", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__PageTitle.PageTitle.new("CHANDRASEKAR K", {$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: C6 || CT.C6}), new components__PageSubTitle.PageSubTitle.new("Chennai, India", {$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C11 || CT.C11}), new components__PageParagraph.PageParagraph.new("I am a Android Techie geek with 6+ years of experience in programming, blogging and open source contributions. " + "\nI have authored 15+ open sources and 20+ articles and spoken at chicago roboto 2018 Android conference. " + "\nIf you’d like to get in touch, feel free to say hello through any of the social links below.", {$creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new components__space__Height36.Height36.new({$creationLocationd_0dea112b090073317d4: C15 || CT.C15}), new components__SocialView.SocialView.new({socialIconButtons: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/about_medium.png", {$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://medium.com/@takeoffandroid", "Medium");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/about_linkedin.png", {$creationLocationd_0dea112b090073317d4: C23 || CT.C23}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://www.linkedin.com/in/chandrasekar-kuppusamy-64696472/", "Linkedin");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/about_twitter.png", {$creationLocationd_0dea112b090073317d4: C30 || CT.C30}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://twitter.com/takeoffandroid", "Twitter");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C33 || CT.C33}), new src__material__ink_well.InkWell.new({child: new components__SocialIconButton.SocialIconButton.new("images/about_github.png", {$creationLocationd_0dea112b090073317d4: C37 || CT.C37}), onTap: dart.fn(() => {
                    util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid", "Github");
                  }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C40 || CT.C40})]), $creationLocationd_0dea112b090073317d4: C44 || CT.C44})]), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), $creationLocationd_0dea112b090073317d4: C50 || CT.C50});
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
  dart.setLibraryUri(AboutPage.AboutPage, "package:takeoffandroid_portfolio/AboutPage.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/AboutPage", {
    "package:takeoffandroid_portfolio/AboutPage.dart": AboutPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["AboutPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAiB4B;AACxB,YAAO,uDACE,sDACa,sBAChB,gDAAc,sFACd,wCAAU,0EACV,mGACA,8CAAa,0EACb,uGACA,gDACI,oHACI,+GACA,4JACR,uGACA,8DAAsC,sBACpC,gDAAe,sDAAiB,4FAAmC;oBACrD,sCAAQ,sCAAsC;6FAE5D,gDAAe,sDAAiB,8FAAqC;oBACvD,sCAAQ,gEAAgE;6FAEtF,gDAAe,sDAAiB,6FAAoC;oBACtD,sCAAQ,sCAAsC;6FAE5D,gDAAe,sDAAiB,4FAAmC;oBACrD,sCAAQ,qCAAqC;;IAMrE;;;;;;EACF","file":"AboutPage.ddc.js"}');
  // Exports:
  return {
    AboutPage: AboutPage
  };
});

//# sourceMappingURL=AboutPage.ddc.js.map
