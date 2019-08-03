define(['dart_sdk', 'packages/takeoffandroid_portfolio/models/SkillsModel', 'packages/takeoffandroid_portfolio/components/PageListView', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/space/Height16', 'packages/flutter_web/src/animation/animation', 'packages/takeoffandroid_portfolio/components/cards/CardViewIcon', 'packages/takeoffandroid_portfolio/components/space/Width36', 'packages/takeoffandroid_portfolio/components/space/Height24'], function(dart_sdk, SkillsModel, PageListView, animation, PageTitle, Height16, animation$, CardViewIcon, Width36, Height24) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__SkillsModel = SkillsModel.models__SkillsModel;
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
  const SkillsPage = Object.create(dart.library);
  const $_get = dartx._get;
  let JSArrayOfSkillsModel = () => (JSArrayOfSkillsModel = dart.constFn(_interceptors.JSArray$(models__SkillsModel.SkillsModel)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 26,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 26,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 27,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 43,
        name: "icon",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 31,
        column: 64,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 31,
        column: 15,
        name: null,
        parameterLocations: C6 || CT.C6
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 32,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 43,
        name: "icon",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 33,
        column: 64,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 33,
        column: 15,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 34,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 43,
        name: "icon",
        parameterLocations: null
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 35,
        column: 64,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 35,
        column: 15,
        name: null,
        parameterLocations: C16 || CT.C16
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 30,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 30,
        column: 20,
        name: null,
        parameterLocations: C20 || CT.C20
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 29,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 30,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 28,
        column: 11,
        name: null,
        parameterLocations: C23 || CT.C23
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 38,
        column: 11,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 43,
        name: "icon",
        parameterLocations: null
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 42,
        column: 64,
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
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 42,
        column: 15,
        name: null,
        parameterLocations: C28 || CT.C28
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 43,
        column: 15,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 43,
        name: "icon",
        parameterLocations: null
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 44,
        column: 64,
        name: "text",
        parameterLocations: null
      });
    },
    get C33() {
      return C33 = dart.constList([C34 || CT.C34, C35 || CT.C35], src__widgets__widget_inspector._Location);
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 44,
        column: 15,
        name: null,
        parameterLocations: C33 || CT.C33
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 24,
        name: "children",
        parameterLocations: null
      });
    },
    get C37() {
      return C37 = dart.constList([C38 || CT.C38], src__widgets__widget_inspector._Location);
    },
    get C36() {
      return C36 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 41,
        column: 20,
        name: null,
        parameterLocations: C37 || CT.C37
      });
    },
    get C41() {
      return C41 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 40,
        column: 13,
        name: "scrollDirection",
        parameterLocations: null
      });
    },
    get C42() {
      return C42 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 41,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C40() {
      return C40 = dart.constList([C41 || CT.C41, C42 || CT.C42], src__widgets__widget_inspector._Location);
    },
    get C39() {
      return C39 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 39,
        column: 11,
        name: null,
        parameterLocations: C40 || CT.C40
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 25,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C44() {
      return C44 = dart.constList([C45 || CT.C45], src__widgets__widget_inspector._Location);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 24,
        column: 14,
        name: null,
        parameterLocations: C44 || CT.C44
      });
    },
    get C48() {
      return C48 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 24,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C47() {
      return C47 = dart.constList([C48 || CT.C48], src__widgets__widget_inspector._Location);
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart",
        line: 23,
        column: 12,
        name: null,
        parameterLocations: C47 || CT.C47
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
  let C31;
  let C34;
  let C35;
  let C33;
  let C32;
  let C38;
  let C37;
  let C36;
  let C41;
  let C42;
  let C40;
  let C39;
  let C45;
  let C44;
  let C43;
  let C48;
  let C47;
  let C46;
  SkillsPage.SkillsPage = class SkillsPage extends src__widgets__framework.StatelessWidget {
    get skillsModel() {
      return this[skillsModel];
    }
    set skillsModel(value) {
      this[skillsModel] = value;
    }
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("SKILLS", {$creationLocationd_0dea112b090073317d4: C0 || CT.C0}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: C3 || CT.C3}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](0).icon), core.String._check(this.skillsModel[$_get](0).text), {$creationLocationd_0dea112b090073317d4: C5 || CT.C5}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C9 || CT.C9}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](1).icon), core.String._check(this.skillsModel[$_get](1).text), {$creationLocationd_0dea112b090073317d4: C10 || CT.C10}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C14 || CT.C14}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](2).icon), core.String._check(this.skillsModel[$_get](2).text), {$creationLocationd_0dea112b090073317d4: C15 || CT.C15})]), $creationLocationd_0dea112b090073317d4: C19 || CT.C19}), $creationLocationd_0dea112b090073317d4: C22 || CT.C22}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: C26 || CT.C26}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](3).icon), core.String._check(this.skillsModel[$_get](3).text), {$creationLocationd_0dea112b090073317d4: C27 || CT.C27}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: C31 || CT.C31}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](4).icon), core.String._check(this.skillsModel[$_get](4).text), {$creationLocationd_0dea112b090073317d4: C32 || CT.C32})]), $creationLocationd_0dea112b090073317d4: C36 || CT.C36}), $creationLocationd_0dea112b090073317d4: C39 || CT.C39})]), $creationLocationd_0dea112b090073317d4: C43 || CT.C43}), $creationLocationd_0dea112b090073317d4: C46 || CT.C46});
    }
    openLink(url) {
      return async.async(dart.dynamic, function* openLink() {
      });
    }
  };
  (SkillsPage.SkillsPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[skillsModel] = JSArrayOfSkillsModel().of([new models__SkillsModel.SkillsModel.new("images/skills_agile.png", "Agile Development & Scrum"), new models__SkillsModel.SkillsModel.new("images/skills_tdd.png", "Test Driven Development"), new models__SkillsModel.SkillsModel.new("images/skills_oops.png", "Object Oriented Programming & Solid Principles"), new models__SkillsModel.SkillsModel.new("images/skills_responsive.png", "Responsive Design"), new models__SkillsModel.SkillsModel.new("images/skills_cross.png", "Cross Functional Teams")]);
    SkillsPage.SkillsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SkillsPage.SkillsPage.prototype;
  dart.addTypeTests(SkillsPage.SkillsPage);
  const skillsModel = Symbol("SkillsPage.skillsModel");
  dart.setMethodSignature(SkillsPage.SkillsPage, () => ({
    __proto__: dart.getMethods(SkillsPage.SkillsPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    openLink: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.setLibraryUri(SkillsPage.SkillsPage, "package:takeoffandroid_portfolio/SkillsPage.dart");
  dart.setFieldSignature(SkillsPage.SkillsPage, () => ({
    __proto__: dart.getFields(SkillsPage.SkillsPage.__proto__),
    skillsModel: dart.fieldType(core.List$(models__SkillsModel.SkillsModel))
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/SkillsPage", {
    "package:takeoffandroid_portfolio/SkillsPage.dart": SkillsPage
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["SkillsPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWM;;;;;;UAUsB;AACxB,YAAO,uDACE,sDACa,sBAChB,wCAAU,kEACV,qGACA,uFACwB,mDACf,2CAAsB,sBAC3B,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,kEAC9C,mGACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,oEAC9C,qGACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,wLAGlD,uGACA,uFACwB,mDACf,2CAAsB,sBAC3B,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,oEAC9C,qGACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH;IAM1D;aAEgB;AAAR;MAMR;;;;;IA9CI,oBAAc,2BAChB,wCAAY,2BAA2B,8BACvC,wCAAY,yBAAyB,4BACrC,wCAAY,0BACR,mDACJ,wCAAY,gCAAgC,sBAC5C,wCAAY,2BAA2B;;;EAyC3C","file":"SkillsPage.ddc.js"}');
  // Exports:
  return {
    SkillsPage: SkillsPage
  };
});

//# sourceMappingURL=SkillsPage.ddc.js.map
