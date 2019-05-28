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
  SkillsPage.SkillsPage = class SkillsPage extends src__widgets__framework.StatelessWidget {
    get skillsModel() {
      return this[skillsModel];
    }
    set skillsModel(value) {
      this[skillsModel] = value;
    }
    build(context) {
      return new components__PageListView.PageListView.new({child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("SKILLS", {$creationLocationd_0dea112b090073317d4: const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$0 || (const$0 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height16.Height16.new({$creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$2 || (const$2 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](0).icon), core.String._check(this.skillsModel[$_get](0).text), {$creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 43, name: "icon"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 64, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$8 || (const$8 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](1).icon), core.String._check(this.skillsModel[$_get](1).text), {$creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 43, name: "icon"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 64, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$14 || (const$14 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](2).icon), core.String._check(this.skillsModel[$_get](2).text), {$creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 43, name: "icon"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 64, name: "text"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 24, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "scrollDirection"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$27 || (const$27 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](3).icon), core.String._check(this.skillsModel[$_get](3).text), {$creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 43, name: "icon"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 64, name: "text"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width36.Width36.new({$creationLocationd_0dea112b090073317d4: const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$33 || (const$33 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new components__cards__CardViewIcon.CardViewIcon.new(core.String._check(this.skillsModel[$_get](4).icon), core.String._check(this.skillsModel[$_get](4).text), {$creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 43, name: "icon"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 64, name: "text"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$40 || (const$40 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 24, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "scrollDirection"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$50 || (const$50 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(SkillsPage.SkillsPage, () => ({
    __proto__: dart.getFields(SkillsPage.SkillsPage.__proto__),
    skillsModel: dart.fieldType(core.List$(models__SkillsModel.SkillsModel))
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/SkillsPage", {
    "package:takeoffandroid_portfolio/SkillsPage.dart": SkillsPage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAWM;;;;;;UAUsB;AACxB,YAAO,uDACE,sDACa,sBAChB,wCAAU,kdACV,6XACA,uFACwB,mDACf,2CAAsB,sBAC3B,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,8kBAC9C,2XACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,slBAC9C,+XACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,ioDAGlD,iYACA,uFACwB,mDACf,2CAAsB,sBAC3B,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,slBAC9C,+XACA,wEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH;IAM1D;aAEgB;AAAR;MAMR;;;;;IA9CI,oBAAc,2BAChB,wCAAY,2BAA2B,8BACvC,wCAAY,yBAAyB,4BACrC,wCAAY,0BACR,mDACJ,wCAAY,gCAAgC,sBAC5C,wCAAY,2BAA2B;;;EAyC3C","file":"SkillsPage.ddc.js"}');
  // Exports:
  return {
    SkillsPage: SkillsPage
  };
});

//# sourceMappingURL=SkillsPage.ddc.js.map
