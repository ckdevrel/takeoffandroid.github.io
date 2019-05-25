define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/components/PageTitle', 'packages/takeoffandroid_portfolio/components/PageSection', 'packages/flutter_web/material', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui'], function(dart_sdk, animation, PageTitle, PageSection, material, animation$, ui) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__scroll_view = animation.src__widgets__scroll_view;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__framework = animation.src__widgets__framework;
  const components__PageTitle = PageTitle.components__PageTitle;
  const components__PageSection = PageSection.components__PageSection;
  const src__material__material_button = material.src__material__material_button;
  const src__material__colors = material.src__material__colors;
  const src__painting__text_style = animation$.src__painting__text_style;
  const ui$ = ui.ui;
  const OpenSourcePage = Object.create(dart.library);
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
  let const$168;
  let const$169;
  let const$170;
  let const$171;
  let const$172;
  let const$173;
  let const$174;
  let const$175;
  let const$176;
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  OpenSourcePage.OpenSourcePage = class OpenSourcePage extends src__widgets__framework.StatelessWidget {
    build(context) {
      return new src__widgets__basic.Padding.new({padding: const$ || (const$ = dart.const(new src__painting__edge_insets.EdgeInsets.all(48.0))), child: new src__widgets__scroll_view.ListView.new({children: JSArrayOfWidget().of([new components__PageTitle.PageTitle.new("OPEN SOURCES", {$creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 21, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$4 || (const$4 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSection.PageSection.new("FLUTTER", {$creationLocationd_0dea112b090073317d4: const$8 || (const$8 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$7 || (const$7 = dart.constList([const$6 || (const$6 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 23, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$10 || (const$10 = dart.constList([const$9 || (const$9 = dart.const(new src__widgets__widget_inspector._Location.new({line: 16, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Flutter Examples", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$14 || (const$14 = dart.constList([const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 27, name: "data"}))), const$13 || (const$13 = dart.const(new src__widgets__widget_inspector._Location.new({line: 22, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 17, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$18 || (const$18 = dart.constList([const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 18, column: 15, name: "onPressed"}))), const$17 || (const$17 = dart.const(new src__widgets__widget_inspector._Location.new({line: 21, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$22 || (const$22 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$21 || (const$21 = dart.constList([const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 26, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSection.PageSection.new("ANDROID STUDIO TEMPLATES", {$creationLocationd_0dea112b090073317d4: const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$24 || (const$24 = dart.constList([const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 27, column: 23, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$28 || (const$28 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$27 || (const$27 = dart.constList([const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 28, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Recyclerview Template", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$32 || (const$32 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$31 || (const$31 = dart.constList([const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 27, name: "data"}))), const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 34, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 29, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$35 || (const$35 = dart.constList([const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 30, column: 15, name: "onPressed"}))), const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 33, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Tabs Template", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$39 || (const$39 = dart.constList([const$37 || (const$37 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 27, name: "data"}))), const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 43, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 38, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 39, column: 15, name: "onPressed"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 42, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Login Template", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 27, name: "data"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 52, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 47, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 48, column: 15, name: "onPressed"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 51, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 24.0, $creationLocationd_0dea112b090073317d4: const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$54 || (const$54 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 56, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new components__PageSection.PageSection.new("ANDROID", {$creationLocationd_0dea112b090073317d4: const$58 || (const$58 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$57 || (const$57 = dart.constList([const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 57, column: 23, name: "title"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.SizedBox.new({height: 4.0, $creationLocationd_0dea112b090073317d4: const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$60 || (const$60 = dart.constList([const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 58, column: 20, name: "height"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("App Intro Animation", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$65 || (const$65 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$64 || (const$64 = dart.constList([const$62 || (const$62 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 27, name: "data"}))), const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 64, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 59, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 60, column: 15, name: "onPressed"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 63, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Dialog Searchview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 27, name: "data"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 73, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 68, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$76 || (const$76 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 69, column: 15, name: "onPressed"}))), const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 72, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Dialog Bottomsheet", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$80 || (const$80 = dart.constList([const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 27, name: "data"}))), const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 77, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 15, name: "onPressed"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("URL Linkview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$89 || (const$89 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$88 || (const$88 = dart.constList([const$86 || (const$86 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 27, name: "data"}))), const$87 || (const$87 = dart.const(new src__widgets__widget_inspector._Location.new({line: 91, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$92 || (const$92 = dart.constList([const$90 || (const$90 = dart.const(new src__widgets__widget_inspector._Location.new({line: 87, column: 15, name: "onPressed"}))), const$91 || (const$91 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Seat Booking Recyclerview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$96 || (const$96 = dart.constList([const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 27, name: "data"}))), const$95 || (const$95 = dart.const(new src__widgets__widget_inspector._Location.new({line: 100, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$100 || (const$100 = dart.constList([const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 15, name: "onPressed"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 99, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Video ChatHeads", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$104 || (const$104 = dart.constList([const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 27, name: "data"}))), const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 104, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$108 || (const$108 = dart.constList([const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 105, column: 15, name: "onPressed"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Pager Recycler Gridview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$112 || (const$112 = dart.constList([const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 27, name: "data"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 113, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 114, column: 15, name: "onPressed"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Icon Color Changer", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$120 || (const$120 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 27, name: "data"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 127, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$124 || (const$124 = dart.constList([const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 15, name: "onPressed"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 126, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Percent Drawer", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$128 || (const$128 = dart.constList([const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 27, name: "data"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 136, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 131, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$132 || (const$132 = dart.constList([const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 132, column: 15, name: "onPressed"}))), const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 135, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("SnackBar", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$136 || (const$136 = dart.constList([const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 27, name: "data"}))), const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 145, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 140, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$140 || (const$140 = dart.constList([const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 141, column: 15, name: "onPressed"}))), const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 144, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Material Circle Progressbar", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$144 || (const$144 = dart.constList([const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 27, name: "data"}))), const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 154, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$149 || (const$149 = dart.const(new src__widgets__widget_inspector._Location.new({line: 149, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$148 || (const$148 = dart.constList([const$146 || (const$146 = dart.const(new src__widgets__widget_inspector._Location.new({line: 150, column: 15, name: "onPressed"}))), const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 153, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("MultiSelect Recycler Gallery gridview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$153 || (const$153 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$152 || (const$152 = dart.constList([const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 27, name: "data"}))), const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 163, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 158, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$156 || (const$156 = dart.constList([const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 159, column: 15, name: "onPressed"}))), const$155 || (const$155 = dart.const(new src__widgets__widget_inspector._Location.new({line: 162, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Spannable Textview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$160 || (const$160 = dart.constList([const$158 || (const$158 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 27, name: "data"}))), const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 172, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 167, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$164 || (const$164 = dart.constList([const$162 || (const$162 = dart.const(new src__widgets__widget_inspector._Location.new({line: 168, column: 15, name: "onPressed"}))), const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 171, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Shimmer Contactsview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$168 || (const$168 = dart.constList([const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 27, name: "data"}))), const$167 || (const$167 = dart.const(new src__widgets__widget_inspector._Location.new({line: 181, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 176, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$172 || (const$172 = dart.constList([const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 177, column: 15, name: "onPressed"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 180, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__material__material_button.MaterialButton.new({onPressed: dart.fn(() => {
                this.openLink("https://speakerdeck.com/TakeoffAndroid");
              }, VoidToNull()), child: new src__widgets__text.Text.new("Header Footer Recyclerview", {style: new src__painting__text_style.TextStyle.new({color: src__material__colors.Colors.blueAccent, fontSize: 16.0, decoration: ui$.TextDecoration.underline}), $creationLocationd_0dea112b090073317d4: const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 22, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$176 || (const$176 = dart.constList([const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 27, name: "data"}))), const$175 || (const$175 = dart.const(new src__widgets__widget_inspector._Location.new({line: 190, column: 19, name: "style"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 185, column: 11, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$180 || (const$180 = dart.constList([const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 186, column: 15, name: "onPressed"}))), const$179 || (const$179 = dart.const(new src__widgets__widget_inspector._Location.new({line: 189, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$184 || (const$184 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 18, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$183 || (const$183 = dart.constList([const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 12, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 9, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart", parameterLocations: const$187 || (const$187 = dart.constList([const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 10, column: 7, name: "padding"}))), const$186 || (const$186 = dart.const(new src__widgets__widget_inspector._Location.new({line: 11, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.trackLibraries("packages/takeoffandroid_portfolio/OpenSourcePage", {
    "package:takeoffandroid_portfolio/OpenSourcePage.dart": OpenSourcePage
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/OpenSourcePage.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UAO4B;AACxB,YAAO,+CACU,6EAAe,gBACnB,sDACS,sBAChB,wCAAU,8dACV,8CAAiB,odACjB,4CAAY,ydACZ,8CAAiB,udACjB,kEACe;gBACT,cAAS;uCAEJ,gCAAK,4BACD,oDACW,mDACJ,kBACiB,qsCACvC,8CAAiB,0dACjB,4CAAY,gfACZ,8CAAiB,ydACjB,kEACe;gBACT,cAAS;uCAEJ,gCAAK,iCACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,kCACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,0BACD,oDACW,mDACJ,kBACiB,qsCACvC,8CAAiB,0dACjB,4CAAY,+dACZ,8CAAiB,ydACjB,kEACe;gBACT,cAAS;uCAEJ,gCAAK,+BACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,sCACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,uCACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,wBACD,oDACW,mDACJ,kBACiB,qsCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,qCACD,oDACW,mDACJ,kBACiB,0sCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,2BACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,4CACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,8BACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,mCACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,oBACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,uCACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,iDACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,8BACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,gCACD,oDACW,mDACJ,kBACiB,2tCACvC,kEACe;gBACT,cAAS;uCAEJ,gCAAK,sCACD,oDACW,mDACJ,kBACiB;IAI/C;aAEgB;AAAR;MAMR;;;;;;;EACF","file":"OpenSourcePage.ddc.js"}');
  // Exports:
  return {
    OpenSourcePage: OpenSourcePage
  };
});

//# sourceMappingURL=OpenSourcePage.ddc.js.map
