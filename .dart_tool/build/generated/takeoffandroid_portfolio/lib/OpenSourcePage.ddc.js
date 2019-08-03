define(['dart_sdk', 'packages/takeoffandroid_portfolio/components/PageListView', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/PageSubTitle', 'packages/takeoffandroid_portfolio/components/space/Height16', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/cards/CardView', 'packages/takeoffandroid_portfolio/util/UrlLauncher', 'packages/takeoffandroid_portfolio/components/space/Width36', 'packages/takeoffandroid_portfolio/components/space/Height36'], function(dart_sdk, PageListView, animation, PageTitle, Height24, PageSubTitle, Height16, animation$, material, CardView, UrlLauncher, Width36, Height36) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const components__PageListView = PageListView.components__PageListView;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__PageSubTitle = PageSubTitle.components__PageSubTitle;
  const components__space__Height16 = Height16.components__space__Height16;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__material__ink_well = material.src__material__ink_well;
  const components__cards__CardView = CardView.components__cards__CardView;
  const util__UrlLauncher = UrlLauncher.util__UrlLauncher;
  const components__space__Width36 = Width36.components__space__Width36;
  const components__space__Height36 = Height36.components__space__Height36;
  const OpenSourcePage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 20,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 20,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 21,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 22,
        column: 24,
        name: "title",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.constList([C7 || CT.C7], src__widgets__widget_inspector._Location);
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 22,
        column: 11,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 23,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C11() {
      return C11 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 28,
        column: 33,
        name: "text",
        parameterLocations: null
      });
    },
    get C10() {
      return C10 = dart.constList([C11 || CT.C11], src__widgets__widget_inspector._Location);
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 28,
        column: 24,
        name: null,
        parameterLocations: C10 || CT.C10
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 28,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 29,
        column: 17,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.constList([C14 || CT.C14, C15 || CT.C15], src__widgets__widget_inspector._Location);
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 27,
        column: 15,
        name: null,
        parameterLocations: C13 || CT.C13
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 33,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 39,
        name: "text",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.constList([C19 || CT.C19], src__widgets__widget_inspector._Location);
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 34,
        column: 30,
        name: null,
        parameterLocations: C18 || CT.C18
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 23,
        name: "child",
        parameterLocations: null
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 34,
        column: 59,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C21() {
      return C21 = dart.constList([C22 || CT.C22, C23 || CT.C23], src__widgets__widget_inspector._Location);
    },
    get C20() {
      return C20 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 34,
        column: 15,
        name: null,
        parameterLocations: C21 || CT.C21
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 37,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 39,
        name: "text",
        parameterLocations: null
      });
    },
    get C26() {
      return C26 = dart.constList([C27 || CT.C27], src__widgets__widget_inspector._Location);
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 38,
        column: 30,
        name: null,
        parameterLocations: C26 || CT.C26
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 23,
        name: "child",
        parameterLocations: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 38,
        column: 63,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C29() {
      return C29 = dart.constList([C30 || CT.C30, C31 || CT.C31], src__widgets__widget_inspector._Location);
    },
    get C28() {
      return C28 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 38,
        column: 15,
        name: null,
        parameterLocations: C29 || CT.C29
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34], src__widgets__widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 26,
        column: 20,
        name: null,
        parameterLocations: C33 || CT.C33
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C36() {
      return C36 = dart.constList([C37 || CT.C37, C38 || CT.C38], src__widgets__widget_inspector._Location);
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 24,
        column: 11,
        name: null,
        parameterLocations: C36 || CT.C36
      });
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 43,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 24,
        name: "title",
        parameterLocations: null
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], src__widgets__widget_inspector._Location);
    },
    get C40() {
      return C40 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 44,
        column: 11,
        name: null,
        parameterLocations: C41 || CT.C41
      });
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 45,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C45() {
      return C45 = dart.constList([C46 || CT.C46], src__widgets__widget_inspector._Location);
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 49,
        column: 28,
        name: null,
        parameterLocations: C45 || CT.C45
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 49,
        column: 62,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50], src__widgets__widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 49,
        column: 13,
        name: null,
        parameterLocations: C48 || CT.C48
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 52,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 53,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54], src__widgets__widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 53,
        column: 28,
        name: null,
        parameterLocations: C53 || CT.C53
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 53,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 53,
        column: 64,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.constList([C57 || CT.C57, C58 || CT.C58], src__widgets__widget_inspector._Location);
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 53,
        column: 13,
        name: null,
        parameterLocations: C56 || CT.C56
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 56,
        column: 13,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C61() {
      return C61 = dart.constList([C62 || CT.C62], src__widgets__widget_inspector._Location);
    },
    get C60() {
      return C60 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 57,
        column: 28,
        name: null,
        parameterLocations: C61 || CT.C61
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 57,
        column: 56,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C64() {
      return C64 = dart.constList([C65 || CT.C65, C66 || CT.C66], src__widgets__widget_inspector._Location);
    },
    get C63() {
      return C63 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 57,
        column: 13,
        name: null,
        parameterLocations: C64 || CT.C64
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 48,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C68() {
      return C68 = dart.constList([C69 || CT.C69], src__widgets__widget_inspector._Location);
    },
    get C67() {
      return C67 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 48,
        column: 20,
        name: null,
        parameterLocations: C68 || CT.C68
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 47,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 48,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C71() {
      return C71 = dart.constList([C72 || CT.C72, C73 || CT.C73], src__widgets__widget_inspector._Location);
    },
    get C70() {
      return C70 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 46,
        column: 11,
        name: null,
        parameterLocations: C71 || CT.C71
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 62,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 63,
        column: 24,
        name: "title",
        parameterLocations: null
      });
    },
    get C76() {
      return C76 = dart.constList([C77 || CT.C77], src__widgets__widget_inspector._Location);
    },
    get C75() {
      return C75 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 63,
        column: 11,
        name: null,
        parameterLocations: C76 || CT.C76
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 64,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 68,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81], src__widgets__widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 68,
        column: 28,
        name: null,
        parameterLocations: C80 || CT.C80
      });
    },
    get C84() {
      return C84 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 68,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 68,
        column: 61,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C83() {
      return C83 = dart.constList([C84 || CT.C84, C85 || CT.C85], src__widgets__widget_inspector._Location);
    },
    get C82() {
      return C82 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 68,
        column: 13,
        name: null,
        parameterLocations: C83 || CT.C83
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 71,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89], src__widgets__widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 72,
        column: 28,
        name: null,
        parameterLocations: C88 || CT.C88
      });
    },
    get C92() {
      return C92 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 58,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C91() {
      return C91 = dart.constList([C92 || CT.C92, C93 || CT.C93], src__widgets__widget_inspector._Location);
    },
    get C90() {
      return C90 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 72,
        column: 13,
        name: null,
        parameterLocations: C91 || CT.C91
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 75,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 76,
        column: 37,
        name: "text",
        parameterLocations: null
      });
    },
    get C96() {
      return C96 = dart.constList([C97 || CT.C97], src__widgets__widget_inspector._Location);
    },
    get C95() {
      return C95 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 76,
        column: 28,
        name: null,
        parameterLocations: C96 || CT.C96
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 76,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 76,
        column: 69,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101], src__widgets__widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 76,
        column: 13,
        name: null,
        parameterLocations: C99 || CT.C99
      });
    },
    get C104() {
      return C104 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 67,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C103() {
      return C103 = dart.constList([C104 || CT.C104], src__widgets__widget_inspector._Location);
    },
    get C102() {
      return C102 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 67,
        column: 20,
        name: null,
        parameterLocations: C103 || CT.C103
      });
    },
    get C107() {
      return C107 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 66,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C108() {
      return C108 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 67,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C106() {
      return C106 = dart.constList([C107 || CT.C107, C108 || CT.C108], src__widgets__widget_inspector._Location);
    },
    get C105() {
      return C105 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 65,
        column: 11,
        name: null,
        parameterLocations: C106 || CT.C106
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 19,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C110() {
      return C110 = dart.constList([C111 || CT.C111], src__widgets__widget_inspector._Location);
    },
    get C109() {
      return C109 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 18,
        column: 14,
        name: null,
        parameterLocations: C110 || CT.C110
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 18,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114], src__widgets__widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart",
        line: 17,
        column: 12,
        name: null,
        parameterLocations: C113 || CT.C113
      });
    }
  });
  let C2;
  let C1;
  let C0;
  let C4;
  let C3;
  let C7;
  let C6;
  let C5;
  let C8;
  let C11;
  let C10;
  let C9;
  let C14;
  let C15;
  let C13;
  let C12;
  let C16;
  let C19;
  let C18;
  let C17;
  let C22;
  let C23;
  let C21;
  let C20;
  let C24;
  let C27;
  let C26;
  let C25;
  let C30;
  let C31;
  let C29;
  let C28;
  let C34;
  let C33;
  let C32;
  let C37;
  let C38;
  let C36;
  let C35;
  let C39;
  let C42;
  let C41;
  let C40;
  let C43;
  let C46;
  let C45;
  let C44;
  let C49;
  let C50;
  let C48;
  let C47;
  let C51;
  let C54;
  let C53;
  let C52;
  let C57;
  let C58;
  let C56;
  let C55;
  let C59;
  let C62;
  let C61;
  let C60;
  let C65;
  let C66;
  let C64;
  let C63;
  let C69;
  let C68;
  let C67;
  let C72;
  let C73;
  let C71;
  let C70;
  let C74;
  let C77;
  let C76;
  let C75;
  let C78;
  let C81;
  let C80;
  let C79;
  let C84;
  let C85;
  let C83;
  let C82;
  let C86;
  let C89;
  let C88;
  let C87;
  let C92;
  let C93;
  let C91;
  let C90;
  let C94;
  let C97;
  let C96;
  let C95;
  let C100;
  let C101;
  let C99;
  let C98;
  let C104;
  let C103;
  let C102;
  let C107;
  let C108;
  let C106;
  let C105;
  let C111;
  let C110;
  let C109;
  let C114;
  let C113;
  let C112;
  OpenSourcePage.OpenSourcePage = class OpenSourcePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("OPEN SOURCES", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new components__PageSubTitle.PageSubTitle.new("FLUTTER", {$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: C8 || CT.C8}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Flutter Examples", {$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("http://flutterexamples.com/", "Flutter Examples");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C12 || CT.C12}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C16 || CT.C16}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Feedback Widget", {$creationLocationd_0dea112b090073317d4: C17 || CT.C17}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://pub.dev/packages/feedback_widget", "Feedack widget");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C20 || CT.C20}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C24 || CT.C24}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Authentication View", {$creationLocationd_0dea112b090073317d4: C25 || CT.C25}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://pub.dev/packages/authentication_view", "Authentication View");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C28 || CT.C28})]), $creationLocationd_0dea112b090073317d4: C32 || CT.C32}), $creationLocationd_0dea112b090073317d4: C35 || CT.C35}), new components__space__Height36.Height36.new({$creationLocationd_0dea112b090073317d4: C39 || CT.C39}), new components__PageSubTitle.PageSubTitle.new("ANDROID STUDIO TEMPLATES", {$creationLocationd_0dea112b090073317d4: C40 || CT.C40}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: C43 || CT.C43}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Recylerview Template", {$creationLocationd_0dea112b090073317d4: C44 || CT.C44}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/RecyclerViewTemplate", "Recylerview Template");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C51 || CT.C51}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Material Tabs Template", {$creationLocationd_0dea112b090073317d4: C52 || CT.C52}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/MaterialTabsTemplate", "Material Tabs Template");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C55 || CT.C55}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C59 || CT.C59}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Login Template", {$creationLocationd_0dea112b090073317d4: C60 || CT.C60}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/LoginAndroidStudioTemplate", "Login Template");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C63 || CT.C63})]), $creationLocationd_0dea112b090073317d4: C67 || CT.C67}), $creationLocationd_0dea112b090073317d4: C70 || CT.C70}), new components__space__Height36.Height36.new({$creationLocationd_0dea112b090073317d4: C74 || CT.C74}), new components__PageSubTitle.PageSubTitle.new("ANDROID", {$creationLocationd_0dea112b090073317d4: C75 || CT.C75}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: C78 || CT.C78}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("App Intro Animation", {$creationLocationd_0dea112b090073317d4: C79 || CT.C79}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/AppIntroAnimation", "App Intro Animation");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C82 || CT.C82}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C86 || CT.C86}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Video Chat Heads", {$creationLocationd_0dea112b090073317d4: C87 || CT.C87}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/VideoChatHeads", "Video Chat Heads");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C90 || CT.C90}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C94 || CT.C94}), new src__material__ink_well.InkWell.new({child: new components__cards__CardView.CardView.new("Material Dialog Search view", {$creationLocationd_0dea112b090073317d4: C95 || CT.C95}), onTap: dart.fn(() => {
                      util__UrlLauncher.UrlLauncher.openUrl("https://github.com/TakeoffAndroid/MaterialDialogSearchView", "Material Dialog Search view");
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C98 || CT.C98})]), $creationLocationd_0dea112b090073317d4: C102 || CT.C102}), $creationLocationd_0dea112b090073317d4: C105 || CT.C105})]), $creationLocationd_0dea112b090073317d4: C109 || CT.C109}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112});
    }
    openLink(url) {
      return async.async(dart.dynamic, function* openLink() {
      });
    }
  };
  (OpenSourcePage.OpenSourcePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    OpenSourcePage.OpenSourcePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = OpenSourcePage.OpenSourcePage.prototype;
  dart.addTypeTests(OpenSourcePage.OpenSourcePage);
  dart.setMethodSignature(OpenSourcePage.OpenSourcePage, () => ({
    __proto__: dart.getMethods(OpenSourcePage.OpenSourcePage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    openLink: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setLibraryUri(OpenSourcePage.OpenSourcePage, "package:takeoffandroid_portfolio/OpenSourcePage.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/OpenSourcePage", {
    "package:takeoffandroid_portfolio/OpenSourcePage.dart": OpenSourcePage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["OpenSourcePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAe4B;AACxB,YAAO,uDACE,sDACa,sBAChB,wCAAU,wEACV,qGACA,8CAAa,mEACb,qGACA,uFACwB,mDACf,2CAAsB,sBAC3B,gDACS,6CAAS,mFACT;sBACO,sCAAQ,+BAA+B;+FAGvD,qGACA,gDAAe,6CAAS,oFAA2B;sBACrC,sCAAQ,4CAA4C;+FAElE,qGACA,gDAAe,6CAAS,wFAA+B;sBACzC,sCAAQ,gDAAgD;mNAI1E,uGACA,8CAAa,sFACb,uGACA,uFACwB,mDACf,2CAAsB,sBAC7B,gDAAe,6CAAS,yFAAgC;sBAC1C,sCAAQ,0DAA0D;+FAE9E,qGACF,gDAAe,6CAAS,2FAAkC;sBAC5C,sCAAQ,0DAA0D;+FAEhF,qGACA,gDAAe,6CAAS,mFAA0B;sBACpC,sCAAQ,gEAAgE;mNAIxF,uGACA,8CAAa,qEACb,uGACA,uFACwB,mDACf,2CAAsB,sBAC7B,gDAAe,6CAAS,wFAA+B;sBACvC,sCAAQ,uDAAuD;+FAE7E,qGACF,gDAAe,6CAAS,qFAA4B;sBACtC,sCAAQ,oDAAoD;+FAExE,qGACF,gDAAe,6CAAS,gGAAuC;sBACjD,sCAAQ,8DAA8D;;IAO9F;aAEgB;AAAR;MAMR;;;;;;;EACF","file":"OpenSourcePage.ddc.js"}');
  // Exports:
  return {
    OpenSourcePage: OpenSourcePage
  };
});

//# sourceMappingURL=OpenSourcePage.ddc.js.map
