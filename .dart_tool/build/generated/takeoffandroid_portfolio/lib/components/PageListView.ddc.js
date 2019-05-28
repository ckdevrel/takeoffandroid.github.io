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
  let const$;
  let const$0;
  let const$1;
  let const$2;
  components__PageListView.PageListView = class PageListView extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      this[child$] = value;
    }
    build(context) {
      return new src__widgets__basic.Padding.new({padding: dart.test(ResponsiveWidget$.ResponsiveWidget.isLargeScreen(context)) ? new src__painting__edge_insets.EdgeInsets.all(48.0) : new src__painting__edge_insets.EdgeInsets.all(24.0), child: this.child, $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 13, column: 12, file: "org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListView.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$ || (const$ = dart.const(new src__widgets__widget_inspector._Location.new({line: 14, column: 7, name: "padding"}))), const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 15, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
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
  dart.setFieldSignature(components__PageListView.PageListView, () => ({
    __proto__: dart.getFields(components__PageListView.PageListView.__proto__),
    child: dart.fieldType(src__widgets__framework.Widget)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/components/PageListView", {
    "package:takeoffandroid_portfolio/components/PageListView.dart": components__PageListView
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/components/PageListView.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;IAMS;;;;;;UAKmB;AACxB,YAAO,yDACqB,iDAAc,OAAO,KAAe,8CAAI,QAAmB,8CAAI,cAClF;IAEX;;;QARmB;;;AAAnB;;EAA0B","file":"PageListView.ddc.js"}');
  // Exports:
  return {
    components__PageListView: components__PageListView
  };
});

//# sourceMappingURL=PageListView.ddc.js.map
