define(['dart_sdk', 'packages/takeoffandroid_portfolio/components/PageListView', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/space/Height16', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/components/cards/CardViewIcon', 'packages/takeoffandroid_portfolio/components/space/Width36', 'packages/takeoffandroid_portfolio/components/space/Height24'], function(dart_sdk, PageListView, animation, PageTitle, Height16, animation$, CardViewIcon, Width36, Height24) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const components__PageListView = PageListView.components__PageListView;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__space__Height16 = Height16.components__space__Height16;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const components__cards__CardViewIcon = CardViewIcon.components__cards__CardViewIcon;
  const components__space__Width36 = Width36.components__space__Width36;
  const components__space__Height24 = Height24.components__space__Height24;
  const AwardsPage = Object.create(dart.library);
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 21,
        name: "title",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 18,
        column: 11,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C4() {
      return C4 = dart.constList([], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 19,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 19,
        name: "icon",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 49,
        name: "text",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7, C8 || CT.C8], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 23,
        column: 15,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 25,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
        column: 28,
        name: "icon",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 27,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 26,
        column: 15,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 28,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 29,
        column: 28,
        name: "icon",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 30,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C16() {
      return C16 = dart.constList([C17 || CT.C17, C18 || CT.C18], src__widgets__widget_inspector._Location);
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 29,
        column: 15,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C20() {
      return C20 = dart.constList([C21 || CT.C21], src__widgets__widget_inspector._Location);
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 22,
        column: 20,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 21,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C23() {
      return C23 = dart.constList([C24 || CT.C24, C25 || CT.C25], src__widgets__widget_inspector._Location);
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 20,
        column: 11,
        name: null,
        parameterLocations: C23 || CT.C23
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 33,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 37,
        column: 28,
        name: "icon",
        parameterLocations: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 19,
        name: "text",
        parameterLocations: null
      });
    },
    get C28() {
      return C28 = dart.constList([C29 || CT.C29, C30 || CT.C30], src__widgets__widget_inspector._Location);
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 37,
        column: 15,
        name: null,
        parameterLocations: C28 || CT.C28
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C32() {
      return C32 = dart.constList([C33 || CT.C33], src__widgets__widget_inspector._Location);
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 36,
        column: 20,
        name: null,
        parameterLocations: C32 || CT.C32
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 36,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C35() {
      return C35 = dart.constList([C36 || CT.C36, C37 || CT.C37], src__widgets__widget_inspector._Location);
    },
    get C34() {
      return C34 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 34,
        column: 11,
        name: null,
        parameterLocations: C35 || CT.C35
      });
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 17,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C39() {
      return C39 = dart.constList([C40 || CT.C40], src__widgets__widget_inspector._Location);
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 16,
        column: 14,
        name: null,
        parameterLocations: C39 || CT.C39
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 16,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C42() {
      return C42 = dart.constList([C43 || CT.C43], src__widgets__widget_inspector._Location);
    },
    get C41() {
      return C41 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/AwardsPage.dart",
        line: 15,
        column: 12,
        name: null,
        parameterLocations: C42 || CT.C42
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C7;
  let C8;
  let C6;
  let C5;
  let C9;
  let C12;
  let C13;
  let C11;
  let C10;
  let C14;
  let C17;
  let C18;
  let C16;
  let C15;
  let C21;
  let C20;
  let C19;
  let C24;
  let C25;
  let C23;
  let C22;
  let C26;
  let C29;
  let C30;
  let C28;
  let C27;
  let C33;
  let C32;
  let C31;
  let C36;
  let C37;
  let C35;
  let C34;
  let C40;
  let C39;
  let C38;
  let C43;
  let C42;
  let C41;
  AwardsPage.AwardsPage = class AwardsPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("AWARDS & CERTIFICATIONS", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new("images/award_certified.png", "Google Certified Developer", {$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new components__cards__CardViewIcon.CardViewIcon.new("images/award_funding.png", "Got a seed contributions and funding for my open sources", {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new components__cards__CardViewIcon.CardViewIcon.new("images/award_topic.png", "First person to propose and present a topic on Android studio templates", {$creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new("images/award_expertise.png", "Expertise in Android, iOS, Flutter mobile and web development", {$creationLocationd_0dea112b090073317d4: C27 || CT.C27})]), $creationLocationd_0dea112b090073317d4: C31 || CT.C31}), $creationLocationd_0dea112b090073317d4: C34 || CT.C34})]), $creationLocationd_0dea112b090073317d4: C38 || CT.C38}), $creationLocationd_0dea112b090073317d4: C41 || CT.C41});
    }
  };
  (AwardsPage.AwardsPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    AwardsPage.AwardsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = AwardsPage.AwardsPage.prototype;
  dart.addTypeTests(AwardsPage.AwardsPage);
  dart.setMethodSignature(AwardsPage.AwardsPage, () => ({
    __proto__: dart.getMethods(AwardsPage.AwardsPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(AwardsPage.AwardsPage, "package:takeoffandroid_portfolio/AwardsPage.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/AwardsPage", {
    "package:takeoffandroid_portfolio/AwardsPage.dart": AwardsPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["AwardsPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAa4B;AACxB,YAAO,uDACE,sDACa,sBAChB,wCAAU,mFACV,qGACA,uFACwB,mDACf,2CAAsB,sBAC3B,qDACI,8BAA8B,sFAClC,mGACA,qDAAa,4BACT,sHACJ,qGACA,qDAAa,0BACT,yPAGR,uGACA,uFACwB,mDACf,2CAAsB,sBAC3B,qDAAa,8BACT;IAMhB;;;;;;EACF","file":"AwardsPage.ddc.js"}');
  // Exports:
  return {
    AwardsPage: AwardsPage
  };
});

//# sourceMappingURL=AwardsPage.ddc.js.map
