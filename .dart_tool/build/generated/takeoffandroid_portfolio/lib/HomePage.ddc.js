define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/material', 'packages/takeoffandroid_portfolio/AppColors', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/takeoffandroid_portfolio/components/space/Height24', 'packages/takeoffandroid_portfolio/components/space/Height4', 'packages/takeoffandroid_portfolio/components/space/Width16', 'packages/takeoffandroid_portfolio/AboutPage', 'packages/takeoffandroid_portfolio/SpeakingPage', 'packages/takeoffandroid_portfolio/OpenSourcePage', 'packages/takeoffandroid_portfolio/SkillsPage', 'packages/takeoffandroid_portfolio/AwardsPage'], function(dart_sdk, animation, material, AppColors, animation$, ui, Height24, Height4, Width16, AboutPage, SpeakingPage, OpenSourcePage, SkillsPage, AwardsPage) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__container = animation.src__widgets__container;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__image = animation.src__widgets__image;
  const src__material__scaffold = material.src__material__scaffold;
  const src__material__colors = material.src__material__colors;
  const src__material__circle_avatar = material.src__material__circle_avatar;
  const src__material__material_button = material.src__material__material_button;
  const AppColors$ = AppColors.AppColors;
  const src__painting__box_shadow = animation$.src__painting__box_shadow;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const components__space__Height24 = Height24.components__space__Height24;
  const components__space__Height4 = Height4.components__space__Height4;
  const components__space__Width16 = Width16.components__space__Width16;
  const AboutPage$ = AboutPage.AboutPage;
  const SpeakingPage$ = SpeakingPage.SpeakingPage;
  const OpenSourcePage$ = OpenSourcePage.OpenSourcePage;
  const SkillsPage$ = SkillsPage.SkillsPage;
  const AwardsPage$ = AwardsPage.AwardsPage;
  const HomePage = Object.create(dart.library);
  let JSArrayOfBoxShadow = () => (JSArrayOfBoxShadow = dart.constFn(_interceptors.JSArray$(src__painting__box_shadow.BoxShadow)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  HomePage.HomePage = class HomePage$ extends src__widgets__framework.StatefulWidget {
    createState() {
      return new HomePage._HomePageState.new();
    }
  };
  (HomePage.HomePage.new = function(opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    HomePage.HomePage.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = HomePage.HomePage.prototype;
  dart.addTypeTests(HomePage.HomePage);
  dart.setMethodSignature(HomePage.HomePage, () => ({
    __proto__: dart.getMethods(HomePage.HomePage.__proto__),
    createState: dart.fnType(HomePage._HomePageState, [])
  }));
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
  let const$119;
  let const$120;
  let const$121;
  let const$122;
  let const$123;
  let const$124;
  let const$125;
  let const$126;
  let const$127;
  let const$128;
  let const$129;
  let const$130;
  let const$131;
  let const$132;
  let const$133;
  let const$134;
  let const$135;
  let const$136;
  let const$137;
  let const$138;
  let const$139;
  let const$140;
  let const$141;
  let const$142;
  let const$143;
  let const$144;
  let const$145;
  let const$146;
  let const$147;
  let const$148;
  let const$149;
  let const$150;
  let const$151;
  let const$152;
  let const$153;
  let const$154;
  let const$155;
  let const$156;
  let const$157;
  let const$158;
  let const$159;
  let const$160;
  let const$161;
  let const$162;
  let const$163;
  let const$164;
  let const$165;
  let const$166;
  let const$167;
  HomePage._HomePageState = class _HomePageState extends src__widgets__framework.State$(HomePage.HomePage) {
    build(context) {
      return new src__material__scaffold.Scaffold.new({backgroundColor: src__material__colors.Colors.white, body: new src__widgets__basic.Row.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: JSArrayOfWidget().of([new src__widgets__container.Container.new({width: 250.0, height: core.double.infinity, color: AppColors$.AppColors.colorPrimary, child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: AppColors$.AppColors.colorSecondary, boxShadow: JSArrayOfBoxShadow().of([new src__painting__box_shadow.BoxShadow.new({color: new ui$.Color.fromRGBO(2, 4, 16, 1.0)})])}), margin: new src__painting__edge_insets.EdgeInsets.fromLTRB(0.0, 0.0, 0.0, 16.0), child: new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(36.0))), child: new src__widgets__basic.Column.new({mainAxisAlignment: src__rendering__flex.MainAxisAlignment.center, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, children: JSArrayOfWidget().of([new src__widgets__basic.SizedBox.new({width: 90.0, height: 90.0, child: new src__material__circle_avatar.CircleAvatar.new({backgroundImage: new src__painting__image_provider.NetworkImage.new("https://i.imgur.com/R0Rzcsv.png"), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 36, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 31, name: "backgroundImage"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 49, column: 29, name: "width"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 50, column: 29, name: "height"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 29, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height24.Height24.new({$creationLocationd_0dea112b090073317d4: const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 55, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$8 || (const$8 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("CHANDRASEKAR K", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: src__material__colors.Colors.white, fontWeight: ui$.FontWeight.w100}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 27, name: "data"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 27, name: "style"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 27, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Height4.Height4.new({$creationLocationd_0dea112b090073317d4: const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 65, column: 25, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$15 || (const$15 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Mobile Developer", {style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 12.0, color: new ui$.Color.fromRGBO(193, 191, 203, 1.0)}), textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$20 || (const$20 = dart.constList([const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 66, column: 34, name: "data"}))), const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 67, column: 29, name: "style"}))), const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 71, column: 29, name: "textAlign"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$25 || (const$25 = dart.constList([const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 45, column: 23, name: "mainAxisAlignment"}))), const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 46, column: 23, name: "crossAxisAlignment"}))), const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 23, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 26, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$29 || (const$29 = dart.constList([const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 21, name: "padding"}))), const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 44, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 35, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$34 || (const$34 = dart.constList([const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 36, column: 19, name: "decoration"}))), const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 41, column: 19, name: "margin"}))), const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/about.png", {$creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 35, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$39 || (const$39 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("About", {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 27, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$44 || (const$44 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 83, column: 32, name: "data"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 27, name: "textAlign"}))), const$43 || (const$43 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$49 || (const$49 = dart.constList([const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 21, name: "crossAxisAlignment"}))), const$47 || (const$47 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 21, name: "mainAxisAlignment"}))), const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 0;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 75, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$51 || (const$51 = dart.const(new src__widgets__widget_inspector._Location.new({line: 76, column: 17, name: "padding"}))), const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 17, name: "child"}))), const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/speaking.png", {$creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 103, column: 35, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$59 || (const$59 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Speaking", {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 27, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 32, name: "data"}))), const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 106, column: 27, name: "textAlign"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$69 || (const$69 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 21, name: "crossAxisAlignment"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 101, column: 21, name: "mainAxisAlignment"}))), const$68 || (const$68 = dart.const(new src__widgets__widget_inspector._Location.new({line: 102, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 1;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$74 || (const$74 = dart.constList([const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 98, column: 17, name: "padding"}))), const$72 || (const$72 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 17, name: "child"}))), const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/opensource.png", {$creationLocationd_0dea112b090073317d4: const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$77 || (const$77 = dart.constList([const$76 || (const$76 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 35, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$80 || (const$80 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$79 || (const$79 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Open Source", {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 27, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 32, name: "data"}))), const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 27, name: "textAlign"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$89 || (const$89 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 21, name: "crossAxisAlignment"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 21, name: "mainAxisAlignment"}))), const$88 || (const$88 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 2;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 119, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$94 || (const$94 = dart.constList([const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 120, column: 17, name: "padding"}))), const$92 || (const$92 = dart.const(new src__widgets__widget_inspector._Location.new({line: 121, column: 17, name: "child"}))), const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/skills.png", {$creationLocationd_0dea112b090073317d4: const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$97 || (const$97 = dart.constList([const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 147, column: 35, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$100 || (const$100 = dart.const(new src__widgets__widget_inspector._Location.new({line: 148, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$99 || (const$99 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Skills", {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 27, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$104 || (const$104 = dart.constList([const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 32, name: "data"}))), const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 27, name: "textAlign"}))), const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 151, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$109 || (const$109 = dart.constList([const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 21, name: "crossAxisAlignment"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 21, name: "mainAxisAlignment"}))), const$108 || (const$108 = dart.const(new src__widgets__widget_inspector._Location.new({line: 146, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 3;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$114 || (const$114 = dart.constList([const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 142, column: 17, name: "padding"}))), const$112 || (const$112 = dart.const(new src__widgets__widget_inspector._Location.new({line: 143, column: 17, name: "child"}))), const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 157, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({padding: new src__painting__edge_insets.EdgeInsets.fromLTRB(36.0, 0.0, 0.0, 0.0), child: new src__widgets__basic.Row.new({crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.center, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([new src__widgets__image.Image.asset("images/award.png", {$creationLocationd_0dea112b090073317d4: const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 29, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$117 || (const$117 = dart.constList([const$116 || (const$116 = dart.const(new src__widgets__widget_inspector._Location.new({line: 169, column: 35, name: "name"})))], src__widgets__widget_inspector._Location))})))}), new components__space__Width16.Width16.new({$creationLocationd_0dea112b090073317d4: const$120 || (const$120 = dart.const(new src__widgets__widget_inspector._Location.new({line: 170, column: 23, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$119 || (const$119 = dart.constList([], src__widgets__widget_inspector._Location))})))}), new src__widgets__text.Text.new("Awards", {textAlign: ui$.TextAlign.start, style: new src__painting__text_style.TextStyle.new({fontFamily: "Lato", fontSize: 14.0, color: new ui$.Color.fromRGBO(207, 209, 233, 1.0), fontWeight: ui$.FontWeight.w100}), $creationLocationd_0dea112b090073317d4: const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 27, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$124 || (const$124 = dart.constList([const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 32, name: "data"}))), const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 27, name: "textAlign"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 173, column: 27, name: "style"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 28, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$129 || (const$129 = dart.constList([const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 166, column: 21, name: "crossAxisAlignment"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 21, name: "mainAxisAlignment"}))), const$128 || (const$128 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 21, name: "children"})))], src__widgets__widget_inspector._Location))})))}), onPressed: dart.fn(() => {
                      this.setState(dart.fn(() => {
                        this.drawerPosition = 4;
                      }, VoidToNull()));
                    }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 163, column: 15, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$134 || (const$134 = dart.constList([const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 164, column: 17, name: "padding"}))), const$132 || (const$132 = dart.const(new src__widgets__widget_inspector._Location.new({line: 165, column: 17, name: "child"}))), const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 179, column: 17, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 24, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$137 || (const$137 = dart.constList([const$136 || (const$136 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 33, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$143 || (const$143 = dart.constList([const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 31, column: 13, name: "width"}))), const$140 || (const$140 = dart.const(new src__widgets__widget_inspector._Location.new({line: 32, column: 13, name: "height"}))), const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 13, name: "color"}))), const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Expanded.new({child: this.getHomeContainer(), $creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 187, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 188, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 13, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$152 || (const$152 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 9, name: "mainAxisAlignment"}))), const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 9, name: "mainAxisSize"}))), const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 9, name: "crossAxisAlignment"}))), const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 23, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$156 || (const$156 = dart.constList([const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 24, column: 7, name: "backgroundColor"}))), const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 25, column: 7, name: "body"})))], src__widgets__widget_inspector._Location))})))});
    }
    getHomeContainer() {
      switch (this.drawerPosition) {
        case 0:
        {
          return new AboutPage$.AboutPage.new({$creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 199, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$158 || (const$158 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 1:
        {
          return new SpeakingPage$.SpeakingPage.new({$creationLocationd_0dea112b090073317d4: const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 201, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$160 || (const$160 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 2:
        {
          return new OpenSourcePage$.OpenSourcePage.new({$creationLocationd_0dea112b090073317d4: const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 203, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$162 || (const$162 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 3:
        {
          return new SkillsPage$.SkillsPage.new({$creationLocationd_0dea112b090073317d4: const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$164 || (const$164 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
        case 4:
        {
          return new AwardsPage$.AwardsPage.new({$creationLocationd_0dea112b090073317d4: const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 16, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart", parameterLocations: const$166 || (const$166 = dart.constList([], src__widgets__widget_inspector._Location))})))});
        }
      }
    }
  };
  (HomePage._HomePageState.new = function() {
    this.drawerPosition = 0;
    HomePage._HomePageState.__proto__.new.call(this);
    ;
  }).prototype = HomePage._HomePageState.prototype;
  dart.addTypeTests(HomePage._HomePageState);
  dart.setMethodSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getMethods(HomePage._HomePageState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]),
    getHomeContainer: dart.fnType(src__widgets__framework.Widget, [])
  }));
  dart.setFieldSignature(HomePage._HomePageState, () => ({
    __proto__: dart.getFields(HomePage._HomePageState.__proto__),
    drawerPosition: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/HomePage", {
    "package:takeoffandroid_portfolio/HomePage.dart": HomePage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/HomePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAckC;IAAgB;;;;;;EAClD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAM4B;AACxB,YAAO,4DACmB,0CAClB,oDACiC,4DACV,2DACY,2DACrB,sBAChB,kDACS,eACQ,6BACE,0CACN,sDAA2B,sBACpC,uDACgB,4DACS,gDACN,yBACT,oDAAuB,uBAAS,GAAG,GAAG,IAAI,oBAE7B,mDAAS,KAAG,KAAG,KAAG,cAC9B,8CACU,6EAAe,gBACvB,uDACgC,mEACE,0DACrB,sBAChB,6CACW,cACC,aACD,oEACY,mDACb,qrCAEV,2XACI,gCACF,0BACO,yDACS,kBACF,aACI,gDACS,kCACN,kuBAEvB,6XACI,gCAAK,4BACE,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,mBACpB,quFAInC,gEACsB,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,ieACZ,6XACI,gCAAK,qBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,q9CAE1B;sBACT,cAAS;wBACP,sBAAiB;;qvBAIvB,gEACsB,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,seACZ,8XACI,gCAAK,wBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,49CAE1B;sBACT,cAAS;wBACP,sBAAiB;;svBAIvB,gEACsB,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,weACZ,8XACI,gCAAK,2BACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,69CAE1B;sBACT,cAAS;wBACP,sBAAiB;;yvBAIvB,gEACsB,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,oeACZ,gYACI,gCAAK,sBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,i/CAE1B;sBACT,cAAS;wBACP,sBAAiB;;mwBAIvB,gEACsB,mDAAS,MAAI,KAAG,KAAG,aAC5B,qDACgC,mEACF,wDACnB,sBACV,oCAAM,yeACZ,kYACI,gCAAK,sBACgB,4BACd,yDACS,kBACF,aACG,uBAAS,KAAK,KAAK,KAAK,kBACd,i/CAE1B;sBACT,cAAS;wBACP,sBAAiB;;+iEAM3B,6CACS;IAKjB;;AAIE,cAAQ;YACD;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;YACJ;;AACH,gBAAO;;;IAEb;;;IA9LI,sBAAiB;;;EA+LvB","file":"HomePage.ddc.js"}');
  // Exports:
  return {
    HomePage: HomePage
  };
});

//# sourceMappingURL=HomePage.ddc.js.map
