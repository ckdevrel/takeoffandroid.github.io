define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const util__UrlLauncher = Object.create(dart.library);
  const $open = dartx.open;
  const CT = Object.create(null);
  util__UrlLauncher.UrlLauncher = class UrlLauncher extends core.Object {
    static openUrl(url, name) {
      html.window[$open](url, name);
    }
  };
  (util__UrlLauncher.UrlLauncher.new = function() {
    ;
  }).prototype = util__UrlLauncher.UrlLauncher.prototype;
  dart.addTypeTests(util__UrlLauncher.UrlLauncher);
  dart.setLibraryUri(util__UrlLauncher.UrlLauncher, "package:takeoffandroid_portfolio/util/UrlLauncher.dart");
  dart.trackLibraries("packages/takeoffandroid_portfolio/util/UrlLauncher", {
    "package:takeoffandroid_portfolio/util/UrlLauncher.dart": util__UrlLauncher
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["UrlLauncher.dart"],"names":[],"mappings":";;;;;;;;;;mBAI+B,KAAY;MACjC,AAAO,mBAAK,GAAG,EAAE,IAAI;IAC5B;;;;EACH","file":"UrlLauncher.ddc.js"}');
  // Exports:
  return {
    util__UrlLauncher: util__UrlLauncher
  };
});

//# sourceMappingURL=UrlLauncher.ddc.js.map
