define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageThumbnail', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/PageGridTile'], function(dart_sdk, animation, PageThumbnail, PageTitle, PageGridTile) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__rendering__sliver_grid = animation.src__rendering__sliver_grid;
  const components__PageThumbnail = PageThumbnail.components__PageThumbnail;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__PageGridTile = PageGridTile.components__PageGridTile;
  const SkillsPage = Object.create(dart.library);
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
  SkillsPage.SkillsPage = class SkillsPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new components__PageThumbnail.PageThumbnail.new("images/award_thumbnail.png", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 25, name: "image"})))], src__widgets__widget_inspector._Location))})))}), new components__PageTitle.PageTitle.new("SKILLS", {$creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: new src__widgets__scroll_view.GridView.new({shrinkWrap: true, children: JSArrayOfWidget().of([new components__PageGridTile.PageGridTile.new("images/award_expertise.png", "Agile Development & Scrum", {$creationLocationd_0dea112b090073317d4: const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$11 || (const$11 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 21, name: "image"}))), const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 51, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__PageGridTile.PageGridTile.new("images/award_certified.png", "Test Driven Development", {$creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$15 || (const$15 = dart.constList([const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 21, name: "image"}))), const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 51, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__PageGridTile.PageGridTile.new("images/award_funding.png", "Object Oriented Programming & Solid Principles", {$creationLocationd_0dea112b090073317d4: const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$19 || (const$19 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 30, name: "image"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__PageGridTile.PageGridTile.new("images/award_topic.png", "Responsive Design", {$creationLocationd_0dea112b090073317d4: const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$23 || (const$23 = dart.constList([const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 30, name: "image"}))), const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 56, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new components__PageGridTile.PageGridTile.new("images/award_expertise.png", "Cross Functional Teams", {$creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 17, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 21, name: "image"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 51, name: "title"})))], src__widgets__widget_inspector._Location))})))})]), gridDelegate: new src__rendering__sliver_grid.SliverGridDelegateWithFixedCrossAxisCount.new({crossAxisCount: 2, mainAxisSpacing: 3.0, crossAxisSpacing: 2.0}), $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 20, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 15, name: "shrinkWrap"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 15, name: "children"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 15, name: "gridDelegate"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 9, name: "mainAxisAlignment"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 9, name: "mainAxisSize"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 9, name: "crossAxisAlignment"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 7, name: "padding"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    openLink(url) {
      return async.async(dart.dynamic, function* openLink() {
      });
    }
  };
  (SkillsPage.SkillsPage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    SkillsPage.SkillsPage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = SkillsPage.SkillsPage.prototype;
  dart.addTypeTests(SkillsPage.SkillsPage);
  dart.setMethodSignature(SkillsPage.SkillsPage, () => ({
    __proto__: dart.getMethods(SkillsPage.SkillsPage.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    openLink: dart.fnType(dart.dynamic, [core.String])
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/SkillsPage", {
    "package:takeoffandroid_portfolio/SkillsPage.dart": SkillsPage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SkillsPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAS4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,uDAC4B,4DACV,2DACY,yDACrB,sBAChB,gDAAc,weACd,wCAAU,odACV,8CAAiB,gdACjB,6CACS,wDACO,gBACM,sBAChB,8CACI,8BAA8B,ymBAClC,8CACI,8BAA8B,ymBAClC,8CAAa,4BACT,goBACJ,8CAAa,0BAA0B,mmBACvC,8CACI,8BAA8B,wnBAElB,+FACE,oBAAoB,uBAAqB;IAMzE;aAEgB;AAAR;MAMR;;;;;;;EACF","file":"SkillsPage.ddc.js"}');
  // Exports:
  return {
    SkillsPage: SkillsPage
  };
});

//# sourceMappingURL=SkillsPage.ddc.js.map
