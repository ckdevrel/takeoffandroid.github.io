define(['dart_sdk', 'packages/flutter_web/animation', 'packages/takeoffandroid_portfolio/ResponsiveWidget'], function(dart_sdk, animation, ResponsiveWidget) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__framework = animation.src__widgets__framework;
  const ResponsiveWidget$ = ResponsiveWidget.ResponsiveWidget;
  const components__PageListView = Object.create(dart.library);
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 14,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 15,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2, C3 || CT.C3], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListView.dart",
        line: 13,
        column: 12,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    }
  });
  let C2;
  let C3;
  let C1;
  let C0;
  components__PageListView.PageListView = class PageListView extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      this[child$] = value;
    }
    build(context) {
      return new src__widgets__basic.Padding.new({padding: dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context)) ? new src__painting__edge_insets.EdgeInsets.all(48.0) : new src__painting__edge_insets.EdgeInsets.all(24.0), child: this.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0});
    }
  };
  (components__PageListView.PageListView.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    components__PageListView.PageListView.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = components__PageListView.PageListView.prototype;
  dart.addTypeTests(components__PageListView.PageListView);
  const child$ = Symbol("PageListView.child");
  dart.setMethodSignature(components__PageListView.PageListView, () => ({
    __proto__: dart.getMethods(components__PageListView.PageListView.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(components__PageListView.PageListView, "package:takeoffandroid_portfolio/components/PageListView.dart");
  dart.setFieldSignature(components__PageListView.PageListView, () => ({
    __proto__: dart.getFields(components__PageListView.PageListView.__proto__),
    child: dart.fieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageListView", {
    "package:takeoffandroid_portfolio/components/PageListView.dart": components__PageListView
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["PageListView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAMS;;;;;;UAKmB;AACxB,YAAO,yDACqB,iDAAc,OAAO,KAAe,8CAAI,QAAmB,8CAAI,cAClF;IAEX;;;QARmB;;;AAAnB;;EAA0B","file":"PageListView.ddc.js"}');
  // Exports:
  return {
    components__PageListView: components__PageListView
  };
});

//# sourceMappingURL=PageListView.ddc.js.map
