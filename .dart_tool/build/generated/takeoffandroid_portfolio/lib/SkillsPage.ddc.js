define(['dart_sdk', 'packages/takeoffandroid_portfolio/models/SkillsModel', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/components/PageListTile'], function(dart_sdk, SkillsModel, animation, PageTitle, animation$, material, PageListTile) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__SkillsModel = SkillsModel.models__SkillsModel;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageTitle = PageTitle.components__PageTitle;
  const src__painting__basic_types = animation$.src__painting__basic_types;
  const src__material__card = material.src__material__card;
  const components__PageListTile = PageListTile.components__PageListTile;
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
  let const$75;
  let const$76;
  let const$77;
  let const$78;
  let const$79;
  let const$80;
  let const$81;
  let const$82;
  let const$83;
  let const$84;
  let const$85;
  let const$86;
  let const$87;
  let const$88;
  let const$89;
  let const$90;
  let const$91;
  let const$92;
  let const$93;
  let const$94;
  let const$95;
  let const$96;
  let const$97;
  let const$98;
  let const$99;
  let const$100;
  let const$101;
  let const$102;
  let const$103;
  let const$104;
  let const$105;
  let const$106;
  let const$107;
  let const$108;
  let const$109;
  let const$110;
  let const$111;
  let const$112;
  let const$113;
  let const$114;
  let const$115;
  let const$116;
  let const$117;
  let const$118;
  SkillsPage.SkillsPage = class SkillsPage extends src__widgets__framework.StatelessWidget {
    get skillsModel() {
      return this[skillsModel];
    }
    set skillsModel(value) {
      this[skillsModel] = value;
    }
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("SKILLS", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(core.String._check(this.skillsModel[$_get](0).icon), core.String._check(this.skillsModel[$_get](0).text), {$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 96, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$8 || (const$8 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 124, name: "image"}))), const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 145, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 82, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 89, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 56, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 61, name: "elevation"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 75, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 24, name: "width"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 36, name: "height"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 49, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 36.0, $creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 24, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(core.String._check(this.skillsModel[$_get](1).icon), core.String._check(this.skillsModel[$_get](1).text), {$creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 96, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 124, name: "image"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 145, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 82, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$30 || (const$30 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 89, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 56, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 61, name: "elevation"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 75, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 24, name: "width"}))), const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 36, name: "height"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 49, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 36.0, $creationLocationd_0dea112b090073317d4: const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$42 || (const$42 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 24, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(core.String._check(this.skillsModel[$_get](2).icon), core.String._check(this.skillsModel[$_get](2).text), {$creationLocationd_0dea112b090073317d4: const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 96, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$46 || (const$46 = dart.constList([const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 124, name: "image"}))), const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 145, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 82, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 89, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 56, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$53 || (const$53 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 61, name: "elevation"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 75, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 24, name: "width"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 36, name: "height"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 49, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$61 || (const$61 = dart.constList([const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 24, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$65 || (const$65 = dart.constList([const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 13, name: "scrollDirection"}))), const$64 || (const$64 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 37, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__single_child_scroll_view.SingleChildScrollView.new({scrollDirection: src__painting__basic_types.Axis.horizontal, child: new src__widgets__basic.Row.new({children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(core.String._check(this.skillsModel[$_get](3).icon), core.String._check(this.skillsModel[$_get](3).text), {$creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 96, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 124, name: "image"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 145, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 82, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$75 || (const$75 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 89, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 56, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$79 || (const$79 = dart.constList([const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 61, name: "elevation"}))), const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 75, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 24, name: "width"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 36, name: "height"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 49, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 36.0, $creationLocationd_0dea112b090073317d4: const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$87 || (const$87 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 24, name: "width"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({width: 291.0, height: 120.0, child: new src__material__card.Card.new({elevation: 4.0, child: new src__widgets__basic.Center.new({child: new components__PageListTile.PageListTile.new(core.String._check(this.skillsModel[$_get](4).icon), core.String._check(this.skillsModel[$_get](4).text), {$creationLocationd_0dea112b090073317d4: const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 96, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$91 || (const$91 = dart.constList([const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 124, name: "image"}))), const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 145, name: "title"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 82, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 89, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 56, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$98 || (const$98 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 61, name: "elevation"}))), const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 75, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$104 || (const$104 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$103 || (const$103 = dart.constList([const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 24, name: "width"}))), const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 36, name: "height"}))), const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 49, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$106 || (const$106 = dart.constList([const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 24, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$110 || (const$110 = dart.constList([const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 13, name: "scrollDirection"}))), const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 40, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 14, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$113 || (const$113 = dart.constList([const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$117 || (const$117 = dart.constList([const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 7, name: "padding"}))), const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IASM;;;;;;UAUsB;AACxB,YAAO,+CACU,6EAAe,gBACvB,sDACa,sBAChB,wCAAU,odACV,8CAAiB,gdACjB,uFACwB,mDACf,2CAAsB,sBAC3B,6CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,iEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,8zEAC/H,6CAAgB,qdAChB,6CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,iEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,s0EAC/H,6CAAgB,qdAChB,6CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,iEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,i3GAGnI,8CAAiB,sdACjB,uFACwB,mDACf,2CAAsB,sBAC3B,6CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,iEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH,s0EAC/H,6CAAgB,qdAChB,6CAAgB,eAAa,cAAY,6CAAgB,YAAU,2CAAc,iEAAa,AAAW,AAAI,wBAAH,6BAAS,AAAW,AAAI,wBAAH;IAM3I;aAEgB;AAAR;MAMR;;;;;IA/CI,oBAAc,2BAChB,wCAAY,2BAA2B,8BACvC,wCAAY,yBAAyB,4BACrC,wCAAY,0BACR,mDACJ,wCAAY,gCAAgC,sBAC5C,wCAAY,2BAA2B;;;EA0C3C","file":"SkillsPage.ddc.js"}');
  // Exports:
  return {
    SkillsPage: SkillsPage
  };
});

//# sourceMappingURL=SkillsPage.ddc.js.map
