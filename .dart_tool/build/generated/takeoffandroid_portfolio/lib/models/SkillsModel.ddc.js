define(['dart_sdk'], function(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const models__SkillsModel = Object.create(dart.library);
  models__SkillsModel.SkillsModel = class SkillsModel extends core.Object {
    get image() {
      return this[image$];
    }
    set image(value) {
      this[image$] = value;
    }
    get title() {
      return this[title$];
    }
    set title(value) {
      this[title$] = value;
    }
    get icon() {
      return this.image;
    }
    get text() {
      return this.title;
    }
  };
  (models__SkillsModel.SkillsModel.new = function(image, title) {
    this[image$] = image;
    this[title$] = title;
    ;
  }).prototype = models__SkillsModel.SkillsModel.prototype;
  dart.addTypeTests(models__SkillsModel.SkillsModel);
  const image$ = Symbol("SkillsModel.image");
  const title$ = Symbol("SkillsModel.title");
  dart.setGetterSignature(models__SkillsModel.SkillsModel, () => ({
    __proto__: dart.getGetters(models__SkillsModel.SkillsModel.__proto__),
    icon: dart.dynamic,
    text: dart.dynamic
  }));
  dart.setFieldSignature(models__SkillsModel.SkillsModel, () => ({
    __proto__: dart.getFields(models__SkillsModel.SkillsModel.__proto__),
    image: dart.fieldType(core.String),
    title: dart.fieldType(core.String)
  }));
  dart.trackLibraries("packages/takeoffandroid_portfolio/models/SkillsModel", {
    "package:takeoffandroid_portfolio/models/SkillsModel.dart": models__SkillsModel
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/takeoffandroid_portfolio/models/SkillsModel.dart"],"names":[],"mappings":";;;;;;;IACS;;;;;;IAAO;;;;;;;AAIF;IAAK;;AAEL;IAAK;;kDAJA,OAAY;IAAZ;IAAY;;EAAM","file":"SkillsModel.ddc.js"}');
  // Exports:
  return {
    models__SkillsModel: models__SkillsModel
  };
});

//# sourceMappingURL=SkillsModel.ddc.js.map
