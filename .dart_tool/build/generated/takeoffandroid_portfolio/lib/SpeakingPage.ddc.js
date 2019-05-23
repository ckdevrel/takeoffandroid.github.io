define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/material', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, animation$, material, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__material__colors = material.src__material__colors;
  const src__material__material_button = material.src__material__material_button;
  const ui$ = ui.ui;
  const SpeakingPage = Object.create(dart.library);
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
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
  SpeakingPage.SpeakingPage = class SpeakingPage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__text.Text.new("MASTERING ANDROID STUDIO TEMPLATE CREATION", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.pinkAccent, fontSize: 40.0}), $creationLocationd_0dea112b090073317d4: const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$2 || (const$2 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 16, name: "data"}))), const$1 || (const$1 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$5 || (const$5 = dart.constList([const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("CHICAGO ROBOTO (CHICAGO, USA)", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.grey, fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$9 || (const$9 = dart.constList([const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 16, name: "data"}))), const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$12 || (const$12 = dart.constList([const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Speaker Deck", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 104, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$16 || (const$16 = dart.constList([const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 109, name: "data"}))), const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 125, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 26, name: "onPressed"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 19, column: 97, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://www.youtube.com/watch?v=abbXZ20OPRI&index=14&list=PLnD_TKDSaFyXuapaScA3Q616AXvsnlq09&t=0s");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Youtube Link", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 163, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 168, name: "data"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 184, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 26, name: "onPressed"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 20, column: 156, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 16.0, $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Presented at International Android conference to talk about Android studio templates " + "\ncreation, application and its usages.", {style: new src__painting__text_style.TextStyle.new({fontSize: 18.0}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 15, name: "data"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 15, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$41 || (const$41 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 9, name: "mainAxisAlignment"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 9, name: "mainAxisSize"}))), const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 9, name: "crossAxisAlignment"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 6, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart", parameterLocations: const$45 || (const$45 = dart.constList([const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 7, column: 7, name: "padding"}))), const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 8, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    openLink(url) {
      return async.async(dart.dynamic, function* openLink() {
      });
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
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/SpeakingPage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAI4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,uDAC4B,6DACV,2DACY,yDACrB,sBAChB,gCAAK,sDACM,oDAAwB,mDAAsB,8kBACzD,8CAAiB,idACjB,gCAAK,yCACM,oDAAwB,6CAAgB,glBACnD,8CAAiB,wdACjB,kEAA0B;gBAAK,cAAS;uCAAqD,gCAAK,wBAAuB,oDAAwB,mDAAsB,kBAA+B,osCACtM,kEAA0B;gBAAK,cAAS;uCAAgH,gCAAK,wBAAuB,oDAAwB,mDAAsB,kBAA+B,qsCACjQ,8CAAiB,wdACjB,gCACI,0FACA,mDACO,uDAAoB;IAIvC;aAEgB;AAAR;MAMR;;;;;;;EACF","file":"SpeakingPage.ddc.js"}');
  // Exports:
  return {
    SpeakingPage: SpeakingPage
  };
});

//# sourceMappingURL=SpeakingPage.ddc.js.map
