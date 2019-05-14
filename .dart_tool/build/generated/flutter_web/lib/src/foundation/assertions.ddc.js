define(['dart_sdk', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io', 'packages/typed_data/typed_buffers'], function(dart_sdk, ui, io, typed_buffers) {
  'use strict';
  const core = dart_sdk.core;
  const developer = dart_sdk.developer;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const ui$ = ui.ui;
  const io$ = io.io;
  const typed_buffers$ = typed_buffers.typed_buffers;
  const src__foundation__bitfield = Object.create(dart.library);
  const src__foundation__binding = Object.create(dart.library);
  const src__foundation__print = Object.create(dart.library);
  const src__foundation__platform = Object.create(dart.library);
  const src__foundation__debug = Object.create(dart.library);
  const src__foundation__assertions = Object.create(dart.library);
  const src__foundation__basic_types = Object.create(dart.library);
  const src__foundation__constants = Object.create(dart.library);
  const src__foundation__synchronous_future = Object.create(dart.library);
  const src__foundation__unicode = Object.create(dart.library);
  const src__foundation__key = Object.create(dart.library);
  const src__foundation__profile = Object.create(dart.library);
  const src__foundation__collections = Object.create(dart.library);
  const src__foundation__licenses = Object.create(dart.library);
  const src__foundation__observer_list = Object.create(dart.library);
  const src__foundation__change_notifier = Object.create(dart.library);
  const src__foundation__diagnostics = Object.create(dart.library);
  const src__util = Object.create(dart.library);
  const src__foundation__isolates = Object.create(dart.library);
  const src__foundation__node = Object.create(dart.library);
  const src__foundation__serialization = Object.create(dart.library);
  const $leftShift = dartx['<<'];
  const $containsKey = dartx.containsKey;
  const $_get = dartx._get;
  const $substring = dartx.substring;
  const $toString = dartx.toString;
  const $_set = dartx._set;
  const $runtimeType = dartx.runtimeType;
  const $split = dartx.split;
  const $expand = dartx.expand;
  const $join = dartx.join;
  const $isNotEmpty = dartx.isNotEmpty;
  const $trimLeft = dartx.trimLeft;
  const $matchAsPrefix = dartx.matchAsPrefix;
  const $times = dartx['*'];
  const $lastIndexOf = dartx.lastIndexOf;
  const $trimRight = dartx.trimRight;
  const $isEmpty = dartx.isEmpty;
  const $toUpperCase = dartx.toUpperCase;
  const $startsWith = dartx.startsWith;
  const $take = dartx.take;
  const $toList = dartx.toList;
  const $length = dartx.length;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $single = dartx.single;
  const $sort = dartx.sort;
  const $last = dartx.last;
  const $skip = dartx.skip;
  const $iterator = dartx.iterator;
  const $map = dartx.map;
  const $where = dartx.where;
  const $takeWhile = dartx.takeWhile;
  const $skipWhile = dartx.skipWhile;
  const $_equals = dartx._equals;
  const $clear = dartx.clear;
  const $truncate = dartx.truncate;
  const $remove = dartx.remove;
  const $endsWith = dartx.endsWith;
  const $first = dartx.first;
  const $indexOf = dartx.indexOf;
  const $replaceAll = dartx.replaceAll;
  const $toStringAsFixed = dartx.toStringAsFixed;
  const $clamp = dartx.clamp;
  const $hashCode = dartx.hashCode;
  const $toUnsigned = dartx.toUnsigned;
  const $toRadixString = dartx.toRadixString;
  const $padLeft = dartx.padLeft;
  const $floor = dartx.floor;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $setUint16 = dartx.setUint16;
  const $setUint32 = dartx.setUint32;
  const $setInt32 = dartx.setInt32;
  const $setInt64 = dartx.setInt64;
  const $setFloat64 = dartx.setFloat64;
  const $offsetInBytes = dartx.offsetInBytes;
  const $modulo = dartx['%'];
  const $asByteData = dartx.asByteData;
  const $lengthInBytes = dartx.lengthInBytes;
  const $getUint8 = dartx.getUint8;
  const $getUint16 = dartx.getUint16;
  const $getUint32 = dartx.getUint32;
  const $getInt32 = dartx.getInt32;
  const $getInt64 = dartx.getInt64;
  const $getFloat64 = dartx.getFloat64;
  const $asInt32List = dartx.asInt32List;
  const $asInt64List = dartx.asInt64List;
  const $asFloat64List = dartx.asFloat64List;
  let IdentityMapOfString$String = () => (IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let FutureOfvoid = () => (FutureOfvoid = dart.constFn(async.Future$(dart.void)))();
  let VoidToFutureOfvoid = () => (VoidToFutureOfvoid = dart.constFn(dart.fnType(FutureOfvoid(), [])))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let FutureOfMapOfString$dynamic = () => (FutureOfMapOfString$dynamic = dart.constFn(async.Future$(MapOfString$dynamic())))();
  let MapOfString$String = () => (MapOfString$String = dart.constFn(core.Map$(core.String, core.String)))();
  let MapOfString$StringToFutureOfMapOfString$dynamic = () => (MapOfString$StringToFutureOfMapOfString$dynamic = dart.constFn(dart.fnType(FutureOfMapOfString$dynamic(), [MapOfString$String()])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let FutureOfServiceExtensionResponse = () => (FutureOfServiceExtensionResponse = dart.constFn(async.Future$(developer.ServiceExtensionResponse)))();
  let StringAndMapOfString$StringToFutureOfServiceExtensionResponse = () => (StringAndMapOfString$StringToFutureOfServiceExtensionResponse = dart.constFn(dart.fnType(FutureOfServiceExtensionResponse(), [core.String, MapOfString$String()])))();
  let IterableOfString = () => (IterableOfString = dart.constFn(core.Iterable$(core.String)))();
  let StringToIterableOfString = () => (StringToIterableOfString = dart.constFn(dart.fnType(IterableOfString(), [core.String])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let CompleterOfvoid = () => (CompleterOfvoid = dart.constFn(async.Completer$(dart.void)))();
  let SyncIterableOfString = () => (SyncIterableOfString = dart.constFn(_js_helper.SyncIterable$(core.String)))();
  let String__Tovoid = () => (String__Tovoid = dart.constFn(dart.fnType(dart.void, [core.String], {wrapWidth: core.int})))();
  let ListQueueOfString = () => (ListQueueOfString = dart.constFn(collection.ListQueue$(core.String)))();
  let LinkedHashSetOfString = () => (LinkedHashSetOfString = dart.constFn(collection.LinkedHashSet$(core.String)))();
  let FlutterErrorDetails__Tovoid = () => (FlutterErrorDetails__Tovoid = dart.constFn(dart.fnType(dart.void, [src__foundation__assertions.FlutterErrorDetails], {forceReport: core.bool})))();
  let VoidTodynamic = () => (VoidTodynamic = dart.constFn(dart.fnType(dart.dynamic, [])))();
  let VoidToLicenseParagraph = () => (VoidToLicenseParagraph = dart.constFn(dart.fnType(src__foundation__licenses.LicenseParagraph, [])))();
  let SyncIterableOfLicenseParagraph = () => (SyncIterableOfLicenseParagraph = dart.constFn(_js_helper.SyncIterable$(src__foundation__licenses.LicenseParagraph)))();
  let StreamOfLicenseEntry = () => (StreamOfLicenseEntry = dart.constFn(async.Stream$(src__foundation__licenses.LicenseEntry)))();
  let VoidToStreamOfLicenseEntry = () => (VoidToStreamOfLicenseEntry = dart.constFn(dart.fnType(StreamOfLicenseEntry(), [])))();
  let JSArrayOfVoidToStreamOfLicenseEntry = () => (JSArrayOfVoidToStreamOfLicenseEntry = dart.constFn(_interceptors.JSArray$(VoidToStreamOfLicenseEntry())))();
  let _AsyncStarImplOfLicenseEntry = () => (_AsyncStarImplOfLicenseEntry = dart.constFn(async._AsyncStarImpl$(src__foundation__licenses.LicenseEntry)))();
  let ObserverListOfVoidTovoid = () => (ObserverListOfVoidTovoid = dart.constFn(src__foundation__observer_list.ObserverList$(VoidTovoid())))();
  let ListOfVoidTovoid = () => (ListOfVoidTovoid = dart.constFn(core.List$(VoidTovoid())))();
  let StringBufferToNull = () => (StringBufferToNull = dart.constFn(dart.fnType(core.Null, [core.StringBuffer])))();
  let DiagnosticsPropertyOfNull = () => (DiagnosticsPropertyOfNull = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(core.Null)))();
  let IdentityMapOfString$Object = () => (IdentityMapOfString$Object = dart.constFn(_js_helper.IdentityMap$(core.String, core.Object)))();
  let DiagnosticsNodeTobool = () => (DiagnosticsNodeTobool = dart.constFn(dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticsNode])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let DiagnosticableNodeOfDiagnosticable = () => (DiagnosticableNodeOfDiagnosticable = dart.constFn(src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.Diagnosticable)))();
  const _length$ = dart.privateName(src__foundation__bitfield, "_length");
  const _bits = dart.privateName(src__foundation__bitfield, "_bits");
  const _is_BitField_default = Symbol('_is_BitField_default');
  src__foundation__bitfield.BitField$ = dart.generic(T => {
    class BitField extends core.Object {
      _get(index) {
        T._check(index);
        if (!dart.test(core.bool._check(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed();
        return (dart.notNull(this[_bits]) & (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0 > 0;
      }
      _set(index, value$) {
        let value = value$;
        T._check(index);
        if (!dart.test(core.bool._check(dart.dsend(dart.dload(index, 'index'), '<', [this[_length$]])))) dart.assertFailed();
        if (dart.test(value))
          this[_bits] = (dart.notNull(this[_bits]) | (1)[$leftShift](core.int._check(dart.dload(index, 'index')))) >>> 0;
        else
          this[_bits] = (dart.notNull(this[_bits]) & ~(1)[$leftShift](core.int._check(dart.dload(index, 'index'))) >>> 0) >>> 0;
        return value$;
      }
      reset(value) {
        if (value === void 0) value = false;
        this[_bits] = dart.test(value) ? src__foundation__bitfield.BitField._allOnes : src__foundation__bitfield.BitField._allZeros;
      }
    }
    (BitField.new = function(_length) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= dart.notNull(src__foundation__bitfield.BitField._smiBits))) dart.assertFailed();
      this[_bits] = src__foundation__bitfield.BitField._allZeros;
      ;
    }).prototype = BitField.prototype;
    (BitField.filled = function(_length, value) {
      this[_length$] = _length;
      if (!(dart.notNull(_length) <= dart.notNull(src__foundation__bitfield.BitField._smiBits))) dart.assertFailed();
      this[_bits] = dart.test(value) ? src__foundation__bitfield.BitField._allOnes : src__foundation__bitfield.BitField._allZeros;
      ;
    }).prototype = BitField.prototype;
    dart.addTypeTests(BitField);
    BitField.prototype[_is_BitField_default] = true;
    dart.setMethodSignature(BitField, () => ({
      __proto__: dart.getMethods(BitField.__proto__),
      _get: dart.fnType(core.bool, [core.Object]),
      _set: dart.fnType(dart.void, [core.Object, core.bool]),
      reset: dart.fnType(dart.void, [], [core.bool])
    }));
    dart.setFieldSignature(BitField, () => ({
      __proto__: dart.getFields(BitField.__proto__),
      [_length$]: dart.finalFieldType(core.int),
      [_bits]: dart.fieldType(core.int)
    }));
    return BitField;
  });
  src__foundation__bitfield.BitField = src__foundation__bitfield.BitField$();
  dart.defineLazy(src__foundation__bitfield.BitField, {
    /*src__foundation__bitfield.BitField._smiBits*/get _smiBits() {
      return 62;
    },
    /*src__foundation__bitfield.BitField._allZeros*/get _allZeros() {
      return 0;
    },
    /*src__foundation__bitfield.BitField._allOnes*/get _allOnes() {
      return src__foundation__bitfield.kMaxUnsignedSMI;
    }
  });
  dart.addTypeTests(src__foundation__bitfield.BitField, _is_BitField_default);
  dart.defineLazy(src__foundation__bitfield, {
    /*src__foundation__bitfield.kMaxUnsignedSMI*/get kMaxUnsignedSMI() {
      return ui$.kMaxUnsignedSMI;
    }
  });
  const _lockCount = dart.privateName(src__foundation__binding, "_lockCount");
  const _postExtensionStateChangedEvent = dart.privateName(src__foundation__binding, "_postExtensionStateChangedEvent");
  src__foundation__binding.BindingBase = class BindingBase extends core.Object {
    get window() {
      return ui$.window;
    }
    initInstances() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugInitialized = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    initServiceExtensions() {
      if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        this.registerSignalServiceExtension({name: "reassemble", callback: dart.bind(this, 'reassembleApplication')});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!dart.test(src__foundation__constants.kReleaseMode) && !dart.test(ui$.isWeb)) {
        this.registerSignalServiceExtension({name: "exit", callback: dart.fn(src__foundation__binding._exitApplication, VoidToFutureOfvoid())});
        this.registerServiceExtension({name: "saveCompilationTrace", callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
            return new (IdentityMapOfString$dynamic()).from(["value", ui$.saveCompilationTrace()]);
          }), MapOfString$StringToFutureOfMapOfString$dynamic())});
      }
      if (!dart.test(dart.fn(() => {
        if (dart.test(ui$.isWeb)) return true;
        let platformOverrideExtensionName = "platformOverride";
        this.registerServiceExtension({name: platformOverrideExtensionName, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
            if (dart.test(parameters[$containsKey]("value"))) {
              switch (parameters[$_get]("value")) {
                case "android":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.android;
                  break;
                }
                case "iOS":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.iOS;
                  break;
                }
                case "fuchsia":
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = src__foundation__platform.TargetPlatform.fuchsia;
                  break;
                }
                case "default":
                default:
                {
                  src__foundation__platform.debugDefaultTargetPlatformOverride = null;
                }
              }
              this[_postExtensionStateChangedEvent](platformOverrideExtensionName, dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length));
              yield this.reassembleApplication();
            }
            return new (IdentityMapOfString$dynamic()).from(["value", dart.toString(src__foundation__platform.defaultTargetPlatform)[$substring]((dart.str(dart.wrapType(src__foundation__platform.TargetPlatform)) + ".").length)]);
          }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        src__foundation__binding.BindingBase._debugServiceExtensionsRegistered = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
    }
    get locked() {
      return dart.notNull(this[_lockCount]) > 0;
    }
    lockEvents(callback) {
      developer.Timeline.startSync("Lock events");
      if (!(callback != null)) dart.assertFailed();
      this[_lockCount] = dart.notNull(this[_lockCount]) + 1;
      let future = callback();
      if (!(future != null)) dart.assertFailed("The lockEvents() callback returned null; it should return a Future<void> that completes when the lock is to expire.");
      future.whenComplete(dart.fn(() => {
        this[_lockCount] = dart.notNull(this[_lockCount]) - 1;
        if (!dart.test(this.locked)) {
          developer.Timeline.finishSync();
          this.unlocked();
        }
      }, VoidToNull()));
      return future;
    }
    unlocked() {
      if (!!dart.test(this.locked)) dart.assertFailed();
    }
    reassembleApplication() {
      return this.lockEvents(dart.bind(this, 'performReassemble'));
    }
    performReassemble() {
      src__foundation__assertions.FlutterError.resetErrorCount();
      return FutureOfvoid().value();
    }
    registerSignalServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed();
      if (!(callback != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), function*() {
          yield callback();
          return new (IdentityMapOfString$dynamic()).new();
        }), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerBoolServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("enabled"))) {
            yield setter(parameters[$_get]("enabled") === "true");
            this[_postExtensionStateChangedEvent](name, dart.test(yield getter()) ? "true" : "false");
          }
          return new (IdentityMapOfString$dynamic()).from(["enabled", dart.test(yield getter()) ? "true" : "false"]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerNumericServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey](name))) {
            yield setter(core.double.parse(parameters[$_get](name)));
            this[_postExtensionStateChangedEvent](name, dart.toString(yield getter()));
          }
          return new (IdentityMapOfString$dynamic()).from([name, dart.toString(yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    [_postExtensionStateChangedEvent](name, value) {
      this.postEvent("Flutter.ServiceExtensionStateChanged", new (IdentityMapOfString$dynamic()).from(["extension", "ext.flutter." + dart.str(name), "value", value]));
    }
    postEvent(eventKind, eventData) {
      developer.postEvent(eventKind, eventData);
    }
    registerStringServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let getter = opts && 'getter' in opts ? opts.getter : null;
      let setter = opts && 'setter' in opts ? opts.setter : null;
      if (!(name != null)) dart.assertFailed();
      if (!(getter != null)) dart.assertFailed();
      if (!(setter != null)) dart.assertFailed();
      this.registerServiceExtension({name: name, callback: dart.fn(parameters => async.async(MapOfString$dynamic(), (function*() {
          if (dart.test(parameters[$containsKey]("value"))) {
            yield setter(parameters[$_get]("value"));
            this[_postExtensionStateChangedEvent](name, yield getter());
          }
          return new (IdentityMapOfString$dynamic()).from(["value", (yield getter())]);
        }).bind(this)), MapOfString$StringToFutureOfMapOfString$dynamic())});
    }
    registerServiceExtension(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let callback = opts && 'callback' in opts ? opts.callback : null;
      if (!(name != null)) dart.assertFailed();
      if (!(callback != null)) dart.assertFailed();
      let methodName = "ext.flutter." + dart.str(name);
      developer.registerExtension(methodName, dart.fn((method, parameters) => async.async(developer.ServiceExtensionResponse, function*() {
        if (!(method === methodName)) dart.assertFailed();
        if (!dart.test(dart.fn(() => {
          if (dart.test(src__foundation__debug.debugInstrumentationEnabled)) src__foundation__print.debugPrint("service extension method received: " + dart.str(method) + "(" + dart.str(parameters) + ")");
          return true;
        }, VoidTobool())())) dart.assertFailed();
        yield src__foundation__debug.debugInstrumentAction(dart.void, "Wait for outer event loop", dart.fn(() => FutureOfvoid().delayed(core.Duration.zero), VoidToFutureOfvoid()));
        let caughtException = null;
        let caughtStack = null;
        let result = null;
        try {
          result = (yield callback(parameters));
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          caughtException = exception;
          caughtStack = stack;
        }
        if (caughtException == null) {
          result[$_set]("type", "_extensionType");
          result[$_set]("method", method);
          return new developer.ServiceExtensionResponse.result(convert.json.encode(result));
        } else {
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: caughtException, stack: caughtStack, context: "during a service extension callback for \"" + dart.str(method) + "\""}));
          return new developer.ServiceExtensionResponse.error(developer.ServiceExtensionResponse.extensionError, convert.json.encode(new (IdentityMapOfString$String()).from(["exception", dart.toString(caughtException), "stack", dart.toString(caughtStack), "method", method])));
        }
      }), StringAndMapOfString$StringToFutureOfServiceExtensionResponse()));
    }
    toString() {
      return "<" + dart.str(this[$runtimeType]) + ">";
    }
  };
  (src__foundation__binding.BindingBase.new = function() {
    this[_lockCount] = 0;
    developer.Timeline.startSync("Framework initialization");
    if (!!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
    this.initInstances();
    if (!dart.test(src__foundation__binding.BindingBase._debugInitialized)) dart.assertFailed();
    if (!!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
    this.initServiceExtensions();
    if (!dart.test(src__foundation__binding.BindingBase._debugServiceExtensionsRegistered)) dart.assertFailed();
    developer.postEvent("Flutter.FrameworkInitialization", new (IdentityMapOfString$String()).new());
    developer.Timeline.finishSync();
  }).prototype = src__foundation__binding.BindingBase.prototype;
  dart.addTypeTests(src__foundation__binding.BindingBase);
  dart.setMethodSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getMethods(src__foundation__binding.BindingBase.__proto__),
    initInstances: dart.fnType(dart.void, []),
    initServiceExtensions: dart.fnType(dart.void, []),
    lockEvents: dart.fnType(async.Future$(dart.void), [dart.fnType(async.Future$(dart.void), [])]),
    unlocked: dart.fnType(dart.void, []),
    reassembleApplication: dart.fnType(async.Future$(dart.void), []),
    performReassemble: dart.fnType(async.Future$(dart.void), []),
    registerSignalServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(dart.void), []), name: core.String}),
    registerBoolServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.bool), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.bool])}),
    registerNumericServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.double), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.double])}),
    [_postExtensionStateChangedEvent]: dart.fnType(dart.void, [core.String, dart.dynamic]),
    postEvent: dart.fnType(dart.void, [core.String, core.Map$(core.String, dart.dynamic)]),
    registerStringServiceExtension: dart.fnType(dart.void, [], {getter: dart.fnType(async.Future$(core.String), []), name: core.String, setter: dart.fnType(async.Future$(dart.void), [core.String])}),
    registerServiceExtension: dart.fnType(dart.void, [], {callback: dart.fnType(async.Future$(core.Map$(core.String, dart.dynamic)), [core.Map$(core.String, core.String)]), name: core.String})
  }));
  dart.setGetterSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getGetters(src__foundation__binding.BindingBase.__proto__),
    window: ui$.Window,
    locked: core.bool
  }));
  dart.setFieldSignature(src__foundation__binding.BindingBase, () => ({
    __proto__: dart.getFields(src__foundation__binding.BindingBase.__proto__),
    [_lockCount]: dart.fieldType(core.int)
  }));
  dart.defineExtensionMethods(src__foundation__binding.BindingBase, ['toString']);
  dart.defineLazy(src__foundation__binding.BindingBase, {
    /*src__foundation__binding.BindingBase._debugInitialized*/get _debugInitialized() {
      return false;
    },
    set _debugInitialized(_) {},
    /*src__foundation__binding.BindingBase._debugServiceExtensionsRegistered*/get _debugServiceExtensionsRegistered() {
      return false;
    },
    set _debugServiceExtensionsRegistered(_) {}
  });
  src__foundation__binding._exitApplication = function() {
    return async.async(dart.void, function* _exitApplication() {
      io$.exit(0);
    });
  };
  const _name$ = dart.privateName(src__foundation__print, "_name");
  src__foundation__print._WordWrapParseMode = class _WordWrapParseMode extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__foundation__print._WordWrapParseMode.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__foundation__print._WordWrapParseMode.prototype;
  dart.addTypeTests(src__foundation__print._WordWrapParseMode);
  dart.setFieldSignature(src__foundation__print._WordWrapParseMode, () => ({
    __proto__: dart.getFields(src__foundation__print._WordWrapParseMode.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__print._WordWrapParseMode, ['toString']);
  src__foundation__print._WordWrapParseMode.inSpace = dart.const(new src__foundation__print._WordWrapParseMode.new(0, "_WordWrapParseMode.inSpace"));
  src__foundation__print._WordWrapParseMode.inWord = dart.const(new src__foundation__print._WordWrapParseMode.new(1, "_WordWrapParseMode.inWord"));
  src__foundation__print._WordWrapParseMode.atBreak = dart.const(new src__foundation__print._WordWrapParseMode.new(2, "_WordWrapParseMode.atBreak"));
  src__foundation__print._WordWrapParseMode.values = dart.constList([src__foundation__print._WordWrapParseMode.inSpace, src__foundation__print._WordWrapParseMode.inWord, src__foundation__print._WordWrapParseMode.atBreak], src__foundation__print._WordWrapParseMode);
  src__foundation__print.debugPrintSynchronously = function(message, opts) {
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    if (wrapWidth != null) {
      core.print(message[$split]("\n")[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString()))[$join]("\n"));
    } else {
      core.print(message);
    }
  };
  src__foundation__print.debugPrintThrottled = function(message, opts) {
    let t1, t1$;
    let wrapWidth = opts && 'wrapWidth' in opts ? opts.wrapWidth : null;
    let messageLines = (t1$ = (t1 = message, t1 == null ? null : t1[$split]("\n")), t1$ == null ? JSArrayOfString().of(["null"]) : t1$);
    if (wrapWidth != null) {
      src__foundation__print._debugPrintBuffer.addAll(messageLines[$expand](core.String, dart.fn(line => src__foundation__print.debugWordWrap(line, wrapWidth), StringToIterableOfString())));
    } else {
      src__foundation__print._debugPrintBuffer.addAll(messageLines);
    }
    if (!dart.test(src__foundation__print._debugPrintScheduled)) src__foundation__print._debugPrintTask();
  };
  src__foundation__print._debugPrintTask = function() {
    let t1;
    src__foundation__print._debugPrintScheduled = false;
    if (dart.test(src__foundation__print._debugPrintStopwatch.elapsed['>'](src__foundation__print._kDebugPrintPauseTime))) {
      src__foundation__print._debugPrintStopwatch.stop();
      src__foundation__print._debugPrintStopwatch.reset();
      src__foundation__print._debugPrintedCharacters = 0;
    }
    while (dart.notNull(src__foundation__print._debugPrintedCharacters) < dart.notNull(src__foundation__print._kDebugPrintCapacity) && dart.test(src__foundation__print._debugPrintBuffer[$isNotEmpty])) {
      let line = src__foundation__print._debugPrintBuffer.removeFirst();
      src__foundation__print._debugPrintedCharacters = dart.notNull(src__foundation__print._debugPrintedCharacters) + line.length;
      core.print(line);
    }
    if (dart.test(src__foundation__print._debugPrintBuffer[$isNotEmpty])) {
      src__foundation__print._debugPrintScheduled = true;
      src__foundation__print._debugPrintedCharacters = 0;
      async.Timer.new(src__foundation__print._kDebugPrintPauseTime, dart.fn(src__foundation__print._debugPrintTask, VoidTovoid()));
      src__foundation__print._debugPrintCompleter == null ? src__foundation__print._debugPrintCompleter = CompleterOfvoid().new() : null;
    } else {
      src__foundation__print._debugPrintStopwatch.start();
      t1 = src__foundation__print._debugPrintCompleter;
      t1 == null ? null : t1.complete();
      src__foundation__print._debugPrintCompleter = null;
    }
  };
  src__foundation__print.debugWordWrap = function(message, width, opts) {
    let wrapIndent = opts && 'wrapIndent' in opts ? opts.wrapIndent : "";
    return new (SyncIterableOfString()).new(function* debugWordWrap() {
      if (message.length < dart.notNull(width) || message[$trimLeft]()[$_get](0) === "#") {
        yield message;
        return;
      }
      let prefixMatch = src__foundation__print._indentPattern[$matchAsPrefix](message);
      let prefix = dart.notNull(wrapIndent) + " "[$times](prefixMatch.group(0).length);
      let start = 0;
      let startForLengthCalculations = 0;
      let addPrefix = false;
      let index = prefix.length;
      let mode = src__foundation__print._WordWrapParseMode.inSpace;
      let lastWordStart = null;
      let lastWordEnd = null;
      while (true) {
        switch (mode) {
          case src__foundation__print._WordWrapParseMode.inSpace:
          {
            while (index < message.length && message[$_get](index) === " ")
              index = index + 1;
            lastWordStart = index;
            mode = src__foundation__print._WordWrapParseMode.inWord;
            break;
          }
          case src__foundation__print._WordWrapParseMode.inWord:
          {
            while (index < message.length && message[$_get](index) !== " ")
              index = index + 1;
            mode = src__foundation__print._WordWrapParseMode.atBreak;
            break;
          }
          case src__foundation__print._WordWrapParseMode.atBreak:
          {
            if (index - startForLengthCalculations > dart.notNull(width) || index === message.length) {
              if (index - startForLengthCalculations <= dart.notNull(width) || lastWordEnd == null) {
                lastWordEnd = index;
              }
              if (addPrefix) {
                yield prefix + message[$substring](start, lastWordEnd);
              } else {
                yield message[$substring](start, lastWordEnd);
                addPrefix = true;
              }
              if (dart.notNull(lastWordEnd) >= message.length) return;
              if (lastWordEnd === index) {
                while (index < message.length && message[$_get](index) === " ")
                  index = index + 1;
                start = index;
                mode = src__foundation__print._WordWrapParseMode.inWord;
              } else {
                if (!(dart.notNull(lastWordStart) > dart.notNull(lastWordEnd))) dart.assertFailed();
                start = lastWordStart;
                mode = src__foundation__print._WordWrapParseMode.atBreak;
              }
              startForLengthCalculations = dart.notNull(start) - prefix.length;
              if (!addPrefix) dart.assertFailed();
              lastWordEnd = null;
            } else {
              lastWordEnd = index;
              mode = src__foundation__print._WordWrapParseMode.inSpace;
            }
            break;
          }
        }
      }
    });
  };
  dart.copyProperties(src__foundation__print, {
    get debugPrintDone() {
      let t1, t1$;
      t1$ = (t1 = src__foundation__print._debugPrintCompleter, t1 == null ? null : t1.future);
      return t1$ == null ? FutureOfvoid().value() : t1$;
    }
  });
  dart.defineLazy(src__foundation__print, {
    /*src__foundation__print.debugPrint*/get debugPrint() {
      return dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    },
    set debugPrint(_) {},
    /*src__foundation__print._debugPrintedCharacters*/get _debugPrintedCharacters() {
      return 0;
    },
    set _debugPrintedCharacters(_) {},
    /*src__foundation__print._kDebugPrintCapacity*/get _kDebugPrintCapacity() {
      return 12 * 1024;
    },
    /*src__foundation__print._kDebugPrintPauseTime*/get _kDebugPrintPauseTime() {
      return dart.const(new core.Duration.new({seconds: 1}));
    },
    /*src__foundation__print._debugPrintBuffer*/get _debugPrintBuffer() {
      return new (ListQueueOfString()).new();
    },
    /*src__foundation__print._debugPrintStopwatch*/get _debugPrintStopwatch() {
      return new core.Stopwatch.new();
    },
    /*src__foundation__print._debugPrintCompleter*/get _debugPrintCompleter() {
      return null;
    },
    set _debugPrintCompleter(_) {},
    /*src__foundation__print._debugPrintScheduled*/get _debugPrintScheduled() {
      return false;
    },
    set _debugPrintScheduled(_) {},
    /*src__foundation__print._indentPattern*/get _indentPattern() {
      return core.RegExp.new("^ *(?:[-+*] |[0-9]+[.):] )?");
    }
  });
  const _name$0 = dart.privateName(src__foundation__platform, "_name");
  src__foundation__platform.TargetPlatform = class TargetPlatform extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__foundation__platform.TargetPlatform.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__foundation__platform.TargetPlatform.prototype;
  dart.addTypeTests(src__foundation__platform.TargetPlatform);
  dart.setFieldSignature(src__foundation__platform.TargetPlatform, () => ({
    __proto__: dart.getFields(src__foundation__platform.TargetPlatform.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__platform.TargetPlatform, ['toString']);
  src__foundation__platform.TargetPlatform.android = dart.const(new src__foundation__platform.TargetPlatform.new(0, "TargetPlatform.android"));
  src__foundation__platform.TargetPlatform.fuchsia = dart.const(new src__foundation__platform.TargetPlatform.new(1, "TargetPlatform.fuchsia"));
  src__foundation__platform.TargetPlatform.iOS = dart.const(new src__foundation__platform.TargetPlatform.new(2, "TargetPlatform.iOS"));
  src__foundation__platform.TargetPlatform.values = dart.constList([src__foundation__platform.TargetPlatform.android, src__foundation__platform.TargetPlatform.fuchsia, src__foundation__platform.TargetPlatform.iOS], src__foundation__platform.TargetPlatform);
  dart.copyProperties(src__foundation__platform, {
    get defaultTargetPlatform() {
      if (src__foundation__platform.debugDefaultTargetPlatformOverride != null) return src__foundation__platform.debugDefaultTargetPlatformOverride;
      return src__foundation__platform.TargetPlatform.android;
    }
  });
  dart.defineLazy(src__foundation__platform, {
    /*src__foundation__platform.debugDefaultTargetPlatformOverride*/get debugDefaultTargetPlatformOverride() {
      return null;
    },
    set debugDefaultTargetPlatformOverride(_) {}
  });
  src__foundation__debug.debugAssertAllFoundationVarsUnset = function(reason, opts) {
    let debugPrintOverride = opts && 'debugPrintOverride' in opts ? opts.debugPrintOverride : dart.fn(src__foundation__print.debugPrintThrottled, String__Tovoid());
    if (!dart.test(dart.fn(() => {
      if (!dart.equals(src__foundation__print.debugPrint, debugPrintOverride) || src__foundation__platform.debugDefaultTargetPlatformOverride != null) dart.throw(new src__foundation__assertions.FlutterError.new(reason));
      return true;
    }, VoidTobool())())) dart.assertFailed();
    return true;
  };
  src__foundation__debug.debugInstrumentAction = function(T, description, action) {
    let t1;
    let instrument = false;
    if (!dart.test(dart.fn(() => {
      instrument = src__foundation__debug.debugInstrumentationEnabled;
      return true;
    }, VoidTobool())())) dart.assertFailed();
    if (dart.test(instrument)) {
      let stopwatch = (t1 = new core.Stopwatch.new(), t1.start(), t1);
      return action().whenComplete(dart.fn(() => {
        stopwatch.stop();
        src__foundation__print.debugPrint("Action \"" + dart.str(description) + "\" took " + dart.str(stopwatch.elapsed));
      }, VoidToNull()));
    } else {
      return action();
    }
  };
  dart.defineLazy(src__foundation__debug, {
    /*src__foundation__debug.debugInstrumentationEnabled*/get debugInstrumentationEnabled() {
      return false;
    },
    set debugInstrumentationEnabled(_) {},
    /*src__foundation__debug.timelineWhitelistArguments*/get timelineWhitelistArguments() {
      return dart.constMap(core.String, core.String, ["mode", "basic"]);
    }
  });
  src__foundation__assertions.FlutterErrorDetails = class FlutterErrorDetails extends core.Object {
    get exception() {
      return this[exception$];
    }
    set exception(value) {
      super.exception = value;
    }
    get stack() {
      return this[stack$];
    }
    set stack(value) {
      super.stack = value;
    }
    get library() {
      return this[library$];
    }
    set library(value) {
      super.library = value;
    }
    get context() {
      return this[context$];
    }
    set context(value) {
      super.context = value;
    }
    get stackFilter() {
      return this[stackFilter$];
    }
    set stackFilter(value) {
      super.stackFilter = value;
    }
    get informationCollector() {
      return this[informationCollector$];
    }
    set informationCollector(value) {
      super.informationCollector = value;
    }
    get silent() {
      return this[silent$];
    }
    set silent(value) {
      super.silent = value;
    }
    exceptionAsString() {
      let longMessage = null;
      if (core.AssertionError.is(this.exception)) {
        let message = core.String._check(dart.dload(this.exception, 'message'));
        let fullMessage = dart.toString(this.exception);
        if (typeof message == 'string' && message != fullMessage) {
          if (fullMessage.length > message.length) {
            let position = fullMessage[$lastIndexOf](message);
            if (position === fullMessage.length - message.length && position > 2 && fullMessage[$substring](position - 2, position) === ": ") {
              longMessage = message[$trimRight]() + "\n" + fullMessage[$substring](0, position - 2);
            }
          }
        }
        longMessage == null ? longMessage = fullMessage : null;
      } else if (typeof this.exception == 'string') {
        longMessage = core.String._check(this.exception);
      } else if (core.Error.is(this.exception) || core.Exception.is(this.exception)) {
        longMessage = dart.toString(this.exception);
      } else {
        longMessage = "  " + dart.str(dart.toString(this.exception));
      }
      longMessage = longMessage[$trimRight]();
      if (longMessage[$isEmpty]) longMessage = "  <no message available>";
      return longMessage;
    }
    toString() {
      let buffer = new core.StringBuffer.new();
      if (this.library != null && this.library !== "" || this.context != null && this.context !== "") {
        if (this.library != null && this.library !== "") {
          buffer.write("Error caught by " + dart.str(this.library));
          if (this.context != null && this.context !== "") buffer.write(", ");
        } else {
          buffer.writeln("Exception ");
        }
        if (this.context != null && this.context !== "") buffer.write("thrown " + dart.str(this.context));
        buffer.writeln(".");
      } else {
        buffer.write("An error was caught.");
      }
      buffer.writeln(this.exceptionAsString());
      if (this.informationCollector != null) this.informationCollector(buffer);
      if (this.stack != null) {
        let stackLines = dart.toString(this.stack)[$trimRight]()[$split]("\n");
        if (this.stackFilter != null) {
          stackLines = this.stackFilter(stackLines);
        } else {
          stackLines = src__foundation__assertions.FlutterError.defaultStackFilter(stackLines);
        }
        buffer.writeAll(stackLines, "\n");
      }
      return buffer.toString()[$trimRight]();
    }
  };
  (src__foundation__assertions.FlutterErrorDetails.new = function(opts) {
    let exception = opts && 'exception' in opts ? opts.exception : null;
    let stack = opts && 'stack' in opts ? opts.stack : null;
    let library = opts && 'library' in opts ? opts.library : "Flutter framework";
    let context = opts && 'context' in opts ? opts.context : null;
    let stackFilter = opts && 'stackFilter' in opts ? opts.stackFilter : null;
    let informationCollector = opts && 'informationCollector' in opts ? opts.informationCollector : null;
    let silent = opts && 'silent' in opts ? opts.silent : false;
    this[exception$] = exception;
    this[stack$] = stack;
    this[library$] = library;
    this[context$] = context;
    this[stackFilter$] = stackFilter;
    this[informationCollector$] = informationCollector;
    this[silent$] = silent;
    ;
  }).prototype = src__foundation__assertions.FlutterErrorDetails.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterErrorDetails);
  const exception$ = Symbol("FlutterErrorDetails.exception");
  const stack$ = Symbol("FlutterErrorDetails.stack");
  const library$ = Symbol("FlutterErrorDetails.library");
  const context$ = Symbol("FlutterErrorDetails.context");
  const stackFilter$ = Symbol("FlutterErrorDetails.stackFilter");
  const informationCollector$ = Symbol("FlutterErrorDetails.informationCollector");
  const silent$ = Symbol("FlutterErrorDetails.silent");
  dart.setMethodSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getMethods(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exceptionAsString: dart.fnType(core.String, [])
  }));
  dart.setFieldSignature(src__foundation__assertions.FlutterErrorDetails, () => ({
    __proto__: dart.getFields(src__foundation__assertions.FlutterErrorDetails.__proto__),
    exception: dart.finalFieldType(dart.dynamic),
    stack: dart.finalFieldType(core.StackTrace),
    library: dart.finalFieldType(core.String),
    context: dart.finalFieldType(core.String),
    stackFilter: dart.finalFieldType(dart.fnType(core.Iterable$(core.String), [core.Iterable$(core.String)])),
    informationCollector: dart.finalFieldType(dart.fnType(dart.void, [core.StringBuffer])),
    silent: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterErrorDetails, ['toString']);
  let const$;
  let const$0;
  src__foundation__assertions.FlutterError = class FlutterError extends core.AssertionError {
    get message() {
      return core.String._check(super.message);
    }
    toString() {
      return this.message;
    }
    static resetErrorCount() {
      src__foundation__assertions.FlutterError._errorCount = 0;
    }
    static dumpErrorToConsole(details, opts) {
      let forceReport = opts && 'forceReport' in opts ? opts.forceReport : false;
      if (!(details != null)) dart.assertFailed();
      if (!(details.exception != null)) dart.assertFailed();
      let reportError = !dart.equals(details.silent, true);
      if (!dart.test(dart.fn(() => {
        reportError = true;
        return true;
      }, VoidTobool())())) dart.assertFailed();
      if (!reportError && !dart.test(forceReport)) return;
      if (src__foundation__assertions.FlutterError._errorCount === 0 || dart.test(forceReport)) {
        let header = ("══╡ EXCEPTION CAUGHT BY " + dart.str(details.library) + " ╞")[$toUpperCase]();
        let footer = "═"[$times](src__foundation__assertions.FlutterError.wrapWidth);
        src__foundation__print.debugPrint(header + "═"[$times](footer.length - header.length));
        let verb = "thrown" + (details.context != null ? " " + dart.str(details.context) : "");
        if (core.NullThrownError.is(details.exception)) {
          src__foundation__print.debugPrint("The null value was " + verb + ".", {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
        } else if (typeof details.exception == 'number') {
          src__foundation__print.debugPrint("The number " + dart.str(details.exception) + " was " + verb + ".", {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
        } else {
          let errorName = null;
          if (core.AssertionError.is(details.exception)) {
            errorName = "assertion";
          } else if (typeof details.exception == 'string') {
            errorName = "message";
          } else if (core.Error.is(details.exception) || core.Exception.is(details.exception)) {
            errorName = dart.str(dart.runtimeType(details.exception));
          } else {
            errorName = dart.str(dart.runtimeType(details.exception)) + " object";
          }
          let prefix = dart.str(dart.runtimeType(details.exception)) + ": ";
          let message = details.exceptionAsString();
          if (message[$startsWith](prefix)) message = message[$substring](prefix.length);
          src__foundation__print.debugPrint("The following " + dart.str(errorName) + " was " + verb + ":\n" + dart.str(message), {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
        }
        let stackLines = details.stack != null ? dart.toString(details.stack)[$trimRight]()[$split]("\n") : null;
        if (core.AssertionError.is(details.exception) && !src__foundation__assertions.FlutterError.is(details.exception)) {
          let ourFault = true;
          if (stackLines != null) {
            let stackList = stackLines[$take](2)[$toList]();
            if (dart.notNull(stackList[$length]) >= 2) {
              let throwPattern = core.RegExp.new("^#0 +_AssertionError._throwNew \\(dart:.+\\)$");
              let assertPattern = core.RegExp.new("^#1 +[^(]+ \\((.+?):([0-9]+)(?::[0-9]+)?\\)$");
              if (dart.test(throwPattern.hasMatch(stackList[$_get](0)))) {
                let assertMatch = assertPattern.firstMatch(stackList[$_get](1));
                if (assertMatch != null) {
                  if (!(assertMatch.groupCount === 2)) dart.assertFailed();
                  let ourLibraryPattern = core.RegExp.new("^package:flutter/");
                  ourFault = ourLibraryPattern.hasMatch(assertMatch.group(1));
                }
              }
            }
          }
          if (dart.test(ourFault)) {
            src__foundation__print.debugPrint("\nEither the assertion indicates an error in the framework itself, or we should " + "provide substantially more information in this error message to help you determine " + "and fix the underlying cause.", {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
            src__foundation__print.debugPrint("In either case, please report this assertion by filing a bug on GitHub:", {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
            src__foundation__print.debugPrint("  https://github.com/flutter/flutter/issues/new?template=BUG.md");
          }
        }
        if (details.stack != null) {
          src__foundation__print.debugPrint("\nWhen the exception was thrown, this was the stack:", {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
          if (details.stackFilter != null) {
            stackLines = details.stackFilter(stackLines);
          } else {
            stackLines = src__foundation__assertions.FlutterError.defaultStackFilter(stackLines);
          }
          for (let line of stackLines)
            src__foundation__print.debugPrint(line, {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
        }
        if (details.informationCollector != null) {
          let information = new core.StringBuffer.new();
          details.informationCollector(information);
          src__foundation__print.debugPrint("\n" + information.toString()[$trimRight](), {wrapWidth: src__foundation__assertions.FlutterError.wrapWidth});
        }
        src__foundation__print.debugPrint(footer);
      } else {
        src__foundation__print.debugPrint("Another exception was thrown: " + details.exceptionAsString()[$split]("\n")[$_get](0)[$trimLeft]());
      }
      src__foundation__assertions.FlutterError._errorCount = dart.notNull(src__foundation__assertions.FlutterError._errorCount) + 1;
    }
    static defaultStackFilter(frames) {
      let t1;
      let filteredPackages = const$ || (const$ = dart.constList(["dart:async-patch", "dart:async", "package:stack_trace"], core.String));
      let filteredClasses = const$0 || (const$0 = dart.constList(["_AssertionError", "_FakeAsync", "_FrameCallbackEntry"], core.String));
      let stackParser = core.RegExp.new("^#[0-9]+ +([^.]+).* \\(([^/\\\\]*)[/\\\\].+:[0-9]+(?::[0-9]+)?\\)$");
      let packageParser = core.RegExp.new("^([^:]+):(.+)$");
      let result = JSArrayOfString().of([]);
      let skipped = JSArrayOfString().of([]);
      for (let line of frames) {
        let match = stackParser.firstMatch(line);
        if (match != null) {
          if (!(match.groupCount === 2)) dart.assertFailed();
          if (dart.test(filteredPackages[$contains](match.group(2)))) {
            let packageMatch = packageParser.firstMatch(match.group(2));
            if (packageMatch != null && packageMatch.group(1) === "package") {
              skipped[$add]("package " + dart.str(packageMatch.group(2)));
            } else {
              skipped[$add]("package " + dart.str(match.group(2)));
            }
            continue;
          }
          if (dart.test(filteredClasses[$contains](match.group(1)))) {
            skipped[$add]("class " + dart.str(match.group(1)));
            continue;
          }
        }
        result[$add](line);
      }
      if (skipped[$length] === 1) {
        result[$add]("(elided one frame from " + dart.str(skipped[$single]) + ")");
      } else if (dart.notNull(skipped[$length]) > 1) {
        let where = (t1 = LinkedHashSetOfString().from(skipped)[$toList](), t1[$sort](), t1);
        if (dart.notNull(where[$length]) > 1) where[$_set](dart.notNull(where[$length]) - 1, "and " + dart.str(where[$last]));
        if (dart.notNull(where[$length]) > 2) {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](", ")) + ")");
        } else {
          result[$add]("(elided " + dart.str(skipped[$length]) + " frames from " + dart.str(where[$join](" ")) + ")");
        }
      }
      return result;
    }
    static reportError(details) {
      if (!(details != null)) dart.assertFailed();
      if (!(details.exception != null)) dart.assertFailed();
      if (src__foundation__assertions.FlutterError.onError != null) src__foundation__assertions.FlutterError.onError(details);
    }
  };
  (src__foundation__assertions.FlutterError.new = function(message) {
    src__foundation__assertions.FlutterError.__proto__.new.call(this, message);
    ;
  }).prototype = src__foundation__assertions.FlutterError.prototype;
  dart.addTypeTests(src__foundation__assertions.FlutterError);
  dart.setGetterSignature(src__foundation__assertions.FlutterError, () => ({
    __proto__: dart.getGetters(src__foundation__assertions.FlutterError.__proto__),
    message: core.String
  }));
  dart.defineExtensionMethods(src__foundation__assertions.FlutterError, ['toString']);
  dart.defineLazy(src__foundation__assertions.FlutterError, {
    /*src__foundation__assertions.FlutterError.onError*/get onError() {
      return dart.fn(src__foundation__assertions.FlutterError.dumpErrorToConsole, FlutterErrorDetails__Tovoid());
    },
    set onError(_) {},
    /*src__foundation__assertions.FlutterError._errorCount*/get _errorCount() {
      return 0;
    },
    set _errorCount(_) {},
    /*src__foundation__assertions.FlutterError.wrapWidth*/get wrapWidth() {
      return 100;
    }
  });
  src__foundation__assertions.debugPrintStack = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let maxFrames = opts && 'maxFrames' in opts ? opts.maxFrames : null;
    if (label != null) src__foundation__print.debugPrint(label);
    let lines = dart.toString(core.StackTrace.current)[$trimRight]()[$split]("\n");
    if (dart.test(ui$.isWeb)) {
      lines = lines[$skip](1);
    }
    if (maxFrames != null) lines = lines[$take](maxFrames);
    src__foundation__print.debugPrint(src__foundation__assertions.FlutterError.defaultStackFilter(lines)[$join]("\n"));
  };
  const _results = dart.privateName(src__foundation__basic_types, "_results");
  const _prefillIterator$ = dart.privateName(src__foundation__basic_types, "_prefillIterator");
  const _precacheEntireList = dart.privateName(src__foundation__basic_types, "_precacheEntireList");
  const _fillNext = dart.privateName(src__foundation__basic_types, "_fillNext");
  const _is_CachingIterable_default = Symbol('_is_CachingIterable_default');
  src__foundation__basic_types.CachingIterable$ = dart.generic(E => {
    let JSArrayOfE = () => (JSArrayOfE = dart.constFn(_interceptors.JSArray$(E)))();
    let _LazyListIteratorOfE = () => (_LazyListIteratorOfE = dart.constFn(src__foundation__basic_types._LazyListIterator$(E)))();
    let CachingIterableOfE = () => (CachingIterableOfE = dart.constFn(src__foundation__basic_types.CachingIterable$(E)))();
    let ListOfE = () => (ListOfE = dart.constFn(core.List$(E)))();
    class CachingIterable extends collection.IterableBase$(E) {
      get iterator() {
        return new (_LazyListIteratorOfE()).new(this);
      }
      map(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super[$map](T, f)[$iterator]);
      }
      where(test) {
        return new (CachingIterableOfE()).new(super[$where](test)[$iterator]);
      }
      expand(T, f) {
        return new (src__foundation__basic_types.CachingIterable$(T)).new(super[$expand](T, f)[$iterator]);
      }
      take(count) {
        return new (CachingIterableOfE()).new(super[$take](count)[$iterator]);
      }
      takeWhile(test) {
        return new (CachingIterableOfE()).new(super[$takeWhile](test)[$iterator]);
      }
      skip(count) {
        return new (CachingIterableOfE()).new(super[$skip](count)[$iterator]);
      }
      skipWhile(test) {
        return new (CachingIterableOfE()).new(super[$skipWhile](test)[$iterator]);
      }
      get length() {
        this[_precacheEntireList]();
        return this[_results][$length];
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        this[_precacheEntireList]();
        return ListOfE().from(this[_results], {growable: growable});
      }
      [_precacheEntireList]() {
        while (dart.test(this[_fillNext]())) {
        }
      }
      [_fillNext]() {
        if (!dart.test(this[_prefillIterator$].moveNext())) return false;
        this[_results][$add](this[_prefillIterator$].current);
        return true;
      }
    }
    (CachingIterable.new = function(_prefillIterator) {
      this[_results] = JSArrayOfE().of([]);
      this[_prefillIterator$] = _prefillIterator;
      CachingIterable.__proto__.new.call(this);
      ;
    }).prototype = CachingIterable.prototype;
    dart.addTypeTests(CachingIterable);
    CachingIterable.prototype[_is_CachingIterable_default] = true;
    dart.setMethodSignature(CachingIterable, () => ({
      __proto__: dart.getMethods(CachingIterable.__proto__),
      [_precacheEntireList]: dart.fnType(dart.void, []),
      [_fillNext]: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(CachingIterable, () => ({
      __proto__: dart.getGetters(CachingIterable.__proto__),
      iterator: core.Iterator$(E),
      [$iterator]: core.Iterator$(E)
    }));
    dart.setFieldSignature(CachingIterable, () => ({
      __proto__: dart.getFields(CachingIterable.__proto__),
      [_prefillIterator$]: dart.finalFieldType(core.Iterator$(E)),
      [_results]: dart.finalFieldType(core.List$(E))
    }));
    dart.defineExtensionMethods(CachingIterable, [
      'map',
      'where',
      'expand',
      'take',
      'takeWhile',
      'skip',
      'skipWhile',
      'toList'
    ]);
    dart.defineExtensionAccessors(CachingIterable, ['iterator', 'length']);
    return CachingIterable;
  });
  src__foundation__basic_types.CachingIterable = src__foundation__basic_types.CachingIterable$();
  dart.addTypeTests(src__foundation__basic_types.CachingIterable, _is_CachingIterable_default);
  const _owner$ = dart.privateName(src__foundation__basic_types, "_owner");
  const _index = dart.privateName(src__foundation__basic_types, "_index");
  const _is__LazyListIterator_default = Symbol('_is__LazyListIterator_default');
  src__foundation__basic_types._LazyListIterator$ = dart.generic(E => {
    class _LazyListIterator extends core.Object {
      get current() {
        if (!(dart.notNull(this[_index]) >= 0)) dart.assertFailed();
        if (dart.notNull(this[_index]) < 0 || this[_index] == this[_owner$][_results][$length]) return null;
        return this[_owner$][_results][$_get](this[_index]);
      }
      moveNext() {
        if (dart.notNull(this[_index]) >= dart.notNull(this[_owner$][_results][$length])) return false;
        this[_index] = dart.notNull(this[_index]) + 1;
        if (this[_index] == this[_owner$][_results][$length]) return this[_owner$][_fillNext]();
        return true;
      }
    }
    (_LazyListIterator.new = function(_owner) {
      this[_owner$] = _owner;
      this[_index] = -1;
      ;
    }).prototype = _LazyListIterator.prototype;
    dart.addTypeTests(_LazyListIterator);
    _LazyListIterator.prototype[_is__LazyListIterator_default] = true;
    _LazyListIterator[dart.implements] = () => [core.Iterator$(E)];
    dart.setMethodSignature(_LazyListIterator, () => ({
      __proto__: dart.getMethods(_LazyListIterator.__proto__),
      moveNext: dart.fnType(core.bool, [])
    }));
    dart.setGetterSignature(_LazyListIterator, () => ({
      __proto__: dart.getGetters(_LazyListIterator.__proto__),
      current: E
    }));
    dart.setFieldSignature(_LazyListIterator, () => ({
      __proto__: dart.getFields(_LazyListIterator.__proto__),
      [_owner$]: dart.finalFieldType(src__foundation__basic_types.CachingIterable$(E)),
      [_index]: dart.fieldType(core.int)
    }));
    return _LazyListIterator;
  });
  src__foundation__basic_types._LazyListIterator = src__foundation__basic_types._LazyListIterator$();
  dart.addTypeTests(src__foundation__basic_types._LazyListIterator, _is__LazyListIterator_default);
  const _is_Factory_default = Symbol('_is_Factory_default');
  src__foundation__basic_types.Factory$ = dart.generic(T => {
    class Factory extends core.Object {
      get _constructor() {
        return this[constructor$];
      }
      set _constructor(value) {
        super._constructor = value;
      }
      get type() {
        return dart.wrapType(T);
      }
      toString() {
        return "Factory(type: " + dart.str(this.type) + ")";
      }
    }
    (Factory.new = function(constructor) {
      this[constructor$] = constructor;
      if (!(constructor != null)) dart.assertFailed();
      ;
    }).prototype = Factory.prototype;
    dart.addTypeTests(Factory);
    Factory.prototype[_is_Factory_default] = true;
    const constructor$ = Symbol("Factory.constructor");
    dart.setGetterSignature(Factory, () => ({
      __proto__: dart.getGetters(Factory.__proto__),
      type: core.Type
    }));
    dart.setFieldSignature(Factory, () => ({
      __proto__: dart.getFields(Factory.__proto__),
      _constructor: dart.finalFieldType(dart.fnType(T, []))
    }));
    dart.defineExtensionMethods(Factory, ['toString']);
    return Factory;
  });
  src__foundation__basic_types.Factory = src__foundation__basic_types.Factory$();
  dart.addTypeTests(src__foundation__basic_types.Factory, _is_Factory_default);
  dart.defineLazy(src__foundation__constants, {
    /*src__foundation__constants.kReleaseMode*/get kReleaseMode() {
      return false;
    },
    /*src__foundation__constants.kProfileMode*/get kProfileMode() {
      return false;
    },
    /*src__foundation__constants.kDebugMode*/get kDebugMode() {
      return !dart.test(src__foundation__constants.kReleaseMode) && !dart.test(src__foundation__constants.kProfileMode);
    }
  });
  const _value$ = dart.privateName(src__foundation__synchronous_future, "_value");
  const _is_SynchronousFuture_default = Symbol('_is_SynchronousFuture_default');
  src__foundation__synchronous_future.SynchronousFuture$ = dart.generic(T => {
    let StreamControllerOfT = () => (StreamControllerOfT = dart.constFn(async.StreamController$(T)))();
    let CompleterOfT = () => (CompleterOfT = dart.constFn(async.Completer$(T)))();
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let FutureOrOfT = () => (FutureOrOfT = dart.constFn(async.FutureOr$(T)))();
    let VoidToFutureOrOfT = () => (VoidToFutureOrOfT = dart.constFn(dart.fnType(FutureOrOfT(), [])))();
    let dynamicToT = () => (dynamicToT = dart.constFn(dart.fnType(T, [dart.dynamic])))();
    class SynchronousFuture extends core.Object {
      asStream() {
        let controller = StreamControllerOfT().new();
        controller.add(this[_value$]);
        controller.close();
        return controller.stream;
      }
      catchError(onError, opts) {
        let test = opts && 'test' in opts ? opts.test : null;
        return CompleterOfT().new().future;
      }
      then(E, f, opts) {
        let onError = opts && 'onError' in opts ? opts.onError : null;
        let result = f(this[_value$]);
        if (async.Future$(E).is(result)) return result;
        return new (src__foundation__synchronous_future.SynchronousFuture$(E)).new(E._check(result));
      }
      timeout(timeLimit, opts) {
        let onTimeout = opts && 'onTimeout' in opts ? opts.onTimeout : null;
        VoidTodynamic()._check(onTimeout);
        return FutureOfT().value(this[_value$]).timeout(timeLimit, {onTimeout: VoidToFutureOrOfT()._check(onTimeout)});
      }
      whenComplete(action) {
        try {
          let result = action();
          if (async.Future.is(result)) return result.then(T, dart.fn(value => this[_value$], dynamicToT()));
          return this;
        } catch (e$) {
          let e = dart.getThrown(e$);
          let stack = dart.stackTrace(e$);
          return FutureOfT().error(e, stack);
        }
      }
    }
    (SynchronousFuture.new = function(_value) {
      this[_value$] = _value;
      ;
    }).prototype = SynchronousFuture.prototype;
    SynchronousFuture.prototype[dart.isFuture] = true;
    dart.addTypeTests(SynchronousFuture);
    SynchronousFuture.prototype[_is_SynchronousFuture_default] = true;
    SynchronousFuture[dart.implements] = () => [async.Future$(T)];
    dart.setMethodSignature(SynchronousFuture, () => ({
      __proto__: dart.getMethods(SynchronousFuture.__proto__),
      asStream: dart.fnType(async.Stream$(T), []),
      catchError: dart.fnType(async.Future$(T), [core.Function], {test: dart.fnType(core.bool, [dart.dynamic])}),
      then: dart.gFnType(E => [async.Future$(E), [dart.fnType(dart.dynamic, [T])], {onError: core.Function}]),
      timeout: dart.fnType(async.Future$(T), [core.Duration], {onTimeout: core.Object}),
      whenComplete: dart.fnType(async.Future$(T), [dart.fnType(dart.dynamic, [])])
    }));
    dart.setFieldSignature(SynchronousFuture, () => ({
      __proto__: dart.getFields(SynchronousFuture.__proto__),
      [_value$]: dart.finalFieldType(T)
    }));
    return SynchronousFuture;
  });
  src__foundation__synchronous_future.SynchronousFuture = src__foundation__synchronous_future.SynchronousFuture$();
  dart.addTypeTests(src__foundation__synchronous_future.SynchronousFuture, _is_SynchronousFuture_default);
  src__foundation__unicode.Unicode = class Unicode extends core.Object {};
  (src__foundation__unicode.Unicode.__ = function() {
    ;
  }).prototype = src__foundation__unicode.Unicode.prototype;
  dart.addTypeTests(src__foundation__unicode.Unicode);
  dart.defineLazy(src__foundation__unicode.Unicode, {
    /*src__foundation__unicode.Unicode.LRE*/get LRE() {
      return "‪";
    },
    /*src__foundation__unicode.Unicode.RLE*/get RLE() {
      return "‫";
    },
    /*src__foundation__unicode.Unicode.PDF*/get PDF() {
      return "‬";
    },
    /*src__foundation__unicode.Unicode.LRO*/get LRO() {
      return "‭";
    },
    /*src__foundation__unicode.Unicode.RLO*/get RLO() {
      return "‮";
    },
    /*src__foundation__unicode.Unicode.LRI*/get LRI() {
      return "⁦";
    },
    /*src__foundation__unicode.Unicode.RLI*/get RLI() {
      return "⁧";
    },
    /*src__foundation__unicode.Unicode.FSI*/get FSI() {
      return "⁨";
    },
    /*src__foundation__unicode.Unicode.PDI*/get PDI() {
      return "⁩";
    },
    /*src__foundation__unicode.Unicode.LRM*/get LRM() {
      return "‎";
    },
    /*src__foundation__unicode.Unicode.RLM*/get RLM() {
      return "‏";
    },
    /*src__foundation__unicode.Unicode.ALM*/get ALM() {
      return "؜";
    }
  });
  src__foundation__key.Key = class Key extends core.Object {};
  (src__foundation__key.Key.empty = function() {
    ;
  }).prototype = src__foundation__key.Key.prototype;
  dart.addTypeTests(src__foundation__key.Key);
  src__foundation__key.LocalKey = class LocalKey extends src__foundation__key.Key {};
  (src__foundation__key.LocalKey.new = function() {
    src__foundation__key.LocalKey.__proto__.empty.call(this);
    ;
  }).prototype = src__foundation__key.LocalKey.prototype;
  dart.addTypeTests(src__foundation__key.LocalKey);
  const _is_ValueKey_default = Symbol('_is_ValueKey_default');
  src__foundation__key.ValueKey$ = dart.generic(T => {
    let ValueKeyOfT = () => (ValueKeyOfT = dart.constFn(src__foundation__key.ValueKey$(T)))();
    let _TypeLiteralOfValueKeyOfT = () => (_TypeLiteralOfValueKeyOfT = dart.constFn(src__foundation__key._TypeLiteral$(ValueKeyOfT())))();
    class ValueKey extends src__foundation__key.LocalKey {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      _equals(other) {
        if (other == null) return false;
        if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
        let typedOther = ValueKeyOfT()._check(other);
        return dart.equals(this.value, typedOther.value);
      }
      get hashCode() {
        return ui$.hashValues(this[$runtimeType], this.value);
      }
      toString() {
        let valueString = dart.wrapType(T)[$_equals](dart.wrapType(core.String)) ? "<'" + dart.str(this.value) + "'>" : "<" + dart.str(this.value) + ">";
        if (dart.equals(this[$runtimeType], new (_TypeLiteralOfValueKeyOfT()).new().type)) return "[" + valueString + "]";
        return "[" + dart.str(dart.wrapType(T)) + " " + valueString + "]";
      }
    }
    (ValueKey.new = function(value) {
      this[value$] = value;
      ValueKey.__proto__.new.call(this);
      ;
    }).prototype = ValueKey.prototype;
    dart.addTypeTests(ValueKey);
    ValueKey.prototype[_is_ValueKey_default] = true;
    const value$ = Symbol("ValueKey.value");
    dart.setFieldSignature(ValueKey, () => ({
      __proto__: dart.getFields(ValueKey.__proto__),
      value: dart.finalFieldType(T)
    }));
    dart.defineExtensionMethods(ValueKey, ['_equals', 'toString']);
    dart.defineExtensionAccessors(ValueKey, ['hashCode']);
    return ValueKey;
  });
  src__foundation__key.ValueKey = src__foundation__key.ValueKey$();
  dart.addTypeTests(src__foundation__key.ValueKey, _is_ValueKey_default);
  const _is__TypeLiteral_default = Symbol('_is__TypeLiteral_default');
  src__foundation__key._TypeLiteral$ = dart.generic(T => {
    class _TypeLiteral extends core.Object {
      get type() {
        return dart.wrapType(T);
      }
    }
    (_TypeLiteral.new = function() {
      ;
    }).prototype = _TypeLiteral.prototype;
    dart.addTypeTests(_TypeLiteral);
    _TypeLiteral.prototype[_is__TypeLiteral_default] = true;
    dart.setGetterSignature(_TypeLiteral, () => ({
      __proto__: dart.getGetters(_TypeLiteral.__proto__),
      type: core.Type
    }));
    return _TypeLiteral;
  });
  src__foundation__key._TypeLiteral = src__foundation__key._TypeLiteral$();
  dart.addTypeTests(src__foundation__key._TypeLiteral, _is__TypeLiteral_default);
  src__foundation__profile.profile = function(func) {
    if (dart.test(src__foundation__profile._kReleaseMode)) return;
    func();
  };
  dart.defineLazy(src__foundation__profile, {
    /*src__foundation__profile._kReleaseMode*/get _kReleaseMode() {
      return false;
    }
  });
  src__foundation__collections.setEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let value of a) {
      if (!dart.test(b.contains(value))) return false;
    }
    return true;
  };
  src__foundation__collections.listEquals = function(T, a, b) {
    if (a == null) return b == null;
    if (b == null || a[$length] != b[$length]) return false;
    for (let index = 0; index < dart.notNull(a[$length]); index = index + 1) {
      if (!dart.equals(a[$_get](index), b[$_get](index))) return false;
    }
    return true;
  };
  src__foundation__licenses.LicenseParagraph = class LicenseParagraph extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get indent() {
      return this[indent$];
    }
    set indent(value) {
      super.indent = value;
    }
  };
  (src__foundation__licenses.LicenseParagraph.new = function(text, indent) {
    this[text$] = text;
    this[indent$] = indent;
    ;
  }).prototype = src__foundation__licenses.LicenseParagraph.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseParagraph);
  const text$ = Symbol("LicenseParagraph.text");
  const indent$ = Symbol("LicenseParagraph.indent");
  dart.setFieldSignature(src__foundation__licenses.LicenseParagraph, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseParagraph.__proto__),
    text: dart.finalFieldType(core.String),
    indent: dart.finalFieldType(core.int)
  }));
  dart.defineLazy(src__foundation__licenses.LicenseParagraph, {
    /*src__foundation__licenses.LicenseParagraph.centeredIndent*/get centeredIndent() {
      return -1;
    }
  });
  src__foundation__licenses.LicenseEntry = class LicenseEntry extends core.Object {};
  (src__foundation__licenses.LicenseEntry.new = function() {
    ;
  }).prototype = src__foundation__licenses.LicenseEntry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntry);
  const _name$1 = dart.privateName(src__foundation__licenses, "_name");
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState = class _LicenseEntryWithLineBreaksParserState extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.prototype;
  dart.addTypeTests(src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  dart.setFieldSignature(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, () => ({
    __proto__: dart.getFields(src__foundation__licenses._LicenseEntryWithLineBreaksParserState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__licenses._LicenseEntryWithLineBreaksParserState, ['toString']);
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(0, "_LicenseEntryWithLineBreaksParserState.beforeParagraph"));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph = dart.const(new src__foundation__licenses._LicenseEntryWithLineBreaksParserState.new(1, "_LicenseEntryWithLineBreaksParserState.inParagraph"));
  src__foundation__licenses._LicenseEntryWithLineBreaksParserState.values = dart.constList([src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph, src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph], src__foundation__licenses._LicenseEntryWithLineBreaksParserState);
  src__foundation__licenses.LicenseEntryWithLineBreaks = class LicenseEntryWithLineBreaks extends src__foundation__licenses.LicenseEntry {
    get packages() {
      return this[packages$];
    }
    set packages(value) {
      super.packages = value;
    }
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
    get paragraphs() {
      return new (SyncIterableOfLicenseParagraph()).new((function* paragraphs() {
        let lineStart = 0;
        let currentPosition = 0;
        let lastLineIndent = 0;
        let currentLineIndent = 0;
        let currentParagraphIndentation = null;
        let state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
        let lines = JSArrayOfString().of([]);
        const addLine = () => {
          if (!(lineStart < currentPosition)) dart.assertFailed();
          lines[$add](this.text[$substring](lineStart, currentPosition));
        };
        dart.fn(addLine, VoidTovoid());
        function getParagraph() {
          if (!dart.test(lines[$isNotEmpty])) dart.assertFailed();
          if (!(currentParagraphIndentation != null)) dart.assertFailed();
          let result = new src__foundation__licenses.LicenseParagraph.new(lines[$join](" "), currentParagraphIndentation);
          if (!(result.text[$trimLeft]() === result.text)) dart.assertFailed();
          if (!result.text[$isNotEmpty]) dart.assertFailed();
          lines[$clear]();
          return result;
        }
        dart.fn(getParagraph, VoidToLicenseParagraph());
        while (currentPosition < this.text.length) {
          switch (state) {
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
            {
              if (!(lineStart === currentPosition)) dart.assertFailed();
              switch (this.text[$_get](currentPosition)) {
                case " ":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\t":
                {
                  lineStart = currentPosition + 1;
                  currentLineIndent = currentLineIndent + 8;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\n":
                case "\f":
                {
                  if (dart.test(lines[$isNotEmpty])) {
                    yield getParagraph();
                  }
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "[":
                {
                  currentLineIndent = currentLineIndent + 1;
                  // continue to next case
                }
                default:
                {
                  if (dart.test(lines[$isNotEmpty]) && currentLineIndent > lastLineIndent) {
                    yield getParagraph();
                    currentParagraphIndentation = null;
                  }
                  if (currentParagraphIndentation == null) {
                    if (currentLineIndent > 10)
                      currentParagraphIndentation = src__foundation__licenses.LicenseParagraph.centeredIndent;
                    else
                      currentParagraphIndentation = (currentLineIndent / 3)[$truncate]();
                  }
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
            case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
            {
              switch (this.text[$_get](currentPosition)) {
                case "\n":
                {
                  addLine();
                  lastLineIndent = currentLineIndent;
                  currentLineIndent = 0;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                case "\f":
                {
                  addLine();
                  yield getParagraph();
                  lastLineIndent = 0;
                  currentLineIndent = 0;
                  currentParagraphIndentation = null;
                  lineStart = currentPosition + 1;
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph;
                  break;
                }
                default:
                {
                  state = src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph;
                }
              }
              break;
            }
          }
          currentPosition = currentPosition + 1;
        }
        switch (state) {
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.beforeParagraph:
          {
            if (dart.test(lines[$isNotEmpty])) {
              yield getParagraph();
            }
            break;
          }
          case src__foundation__licenses._LicenseEntryWithLineBreaksParserState.inParagraph:
          {
            addLine();
            yield getParagraph();
            break;
          }
        }
      }).bind(this));
    }
  };
  (src__foundation__licenses.LicenseEntryWithLineBreaks.new = function(packages, text) {
    this[packages$] = packages;
    this[text$0] = text;
    src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__licenses.LicenseEntryWithLineBreaks.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseEntryWithLineBreaks);
  const packages$ = Symbol("LicenseEntryWithLineBreaks.packages");
  const text$0 = Symbol("LicenseEntryWithLineBreaks.text");
  dart.setGetterSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getGetters(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    paragraphs: core.Iterable$(src__foundation__licenses.LicenseParagraph)
  }));
  dart.setFieldSignature(src__foundation__licenses.LicenseEntryWithLineBreaks, () => ({
    __proto__: dart.getFields(src__foundation__licenses.LicenseEntryWithLineBreaks.__proto__),
    packages: dart.finalFieldType(core.List$(core.String)),
    text: dart.finalFieldType(core.String)
  }));
  src__foundation__licenses.LicenseRegistry = class LicenseRegistry extends core.Object {
    static addLicense(collector) {
      src__foundation__licenses.LicenseRegistry._collectors == null ? src__foundation__licenses.LicenseRegistry._collectors = JSArrayOfVoidToStreamOfLicenseEntry().of([]) : null;
      src__foundation__licenses.LicenseRegistry._collectors[$add](collector);
    }
    static get licenses() {
      return new (_AsyncStarImplOfLicenseEntry()).new(function* licenses(stream) {
        if (src__foundation__licenses.LicenseRegistry._collectors == null) return;
        for (let collector of src__foundation__licenses.LicenseRegistry._collectors) {
          if (stream.addStream(collector())) return;
          yield;
        }
      }).stream;
    }
  };
  (src__foundation__licenses.LicenseRegistry.__ = function() {
    ;
  }).prototype = src__foundation__licenses.LicenseRegistry.prototype;
  dart.addTypeTests(src__foundation__licenses.LicenseRegistry);
  dart.defineLazy(src__foundation__licenses.LicenseRegistry, {
    /*src__foundation__licenses.LicenseRegistry._collectors*/get _collectors() {
      return null;
    },
    set _collectors(_) {}
  });
  const _list = dart.privateName(src__foundation__observer_list, "_list");
  const _isDirty = dart.privateName(src__foundation__observer_list, "_isDirty");
  const _set = dart.privateName(src__foundation__observer_list, "_set");
  const _is_ObserverList_default = Symbol('_is_ObserverList_default');
  src__foundation__observer_list.ObserverList$ = dart.generic(T => {
    let JSArrayOfT = () => (JSArrayOfT = dart.constFn(_interceptors.JSArray$(T)))();
    let HashSetOfT = () => (HashSetOfT = dart.constFn(collection.HashSet$(T)))();
    class ObserverList extends core.Iterable$(T) {
      add(item) {
        T._check(item);
        this[_isDirty] = true;
        this[_list][$add](item);
      }
      remove(item) {
        T._check(item);
        this[_isDirty] = true;
        return this[_list][$remove](item);
      }
      contains(element) {
        if (dart.notNull(this[_list][$length]) < 15) {
          return this[_list][$contains](element);
        }
        if (dart.test(this[_isDirty])) {
          if (this[_set] == null) {
            this[_set] = HashSetOfT().from(this[_list]);
          } else {
            this[_set].clear();
            this[_set].addAll(this[_list]);
          }
          this[_isDirty] = false;
        }
        return this[_set].contains(element);
      }
      get iterator() {
        return this[_list][$iterator];
      }
      get isEmpty() {
        return this[_list][$isEmpty];
      }
      get isNotEmpty() {
        return this[_list][$isNotEmpty];
      }
    }
    (ObserverList.new = function() {
      this[_list] = JSArrayOfT().of([]);
      this[_isDirty] = false;
      this[_set] = null;
      ObserverList.__proto__.new.call(this);
      ;
    }).prototype = ObserverList.prototype;
    dart.addTypeTests(ObserverList);
    ObserverList.prototype[_is_ObserverList_default] = true;
    dart.setMethodSignature(ObserverList, () => ({
      __proto__: dart.getMethods(ObserverList.__proto__),
      add: dart.fnType(dart.void, [core.Object]),
      remove: dart.fnType(core.bool, [core.Object])
    }));
    dart.setGetterSignature(ObserverList, () => ({
      __proto__: dart.getGetters(ObserverList.__proto__),
      iterator: core.Iterator$(T),
      [$iterator]: core.Iterator$(T)
    }));
    dart.setFieldSignature(ObserverList, () => ({
      __proto__: dart.getFields(ObserverList.__proto__),
      [_list]: dart.finalFieldType(core.List$(T)),
      [_isDirty]: dart.fieldType(core.bool),
      [_set]: dart.fieldType(collection.HashSet$(T))
    }));
    dart.defineExtensionMethods(ObserverList, ['contains']);
    dart.defineExtensionAccessors(ObserverList, ['iterator', 'isEmpty', 'isNotEmpty']);
    return ObserverList;
  });
  src__foundation__observer_list.ObserverList = src__foundation__observer_list.ObserverList$();
  dart.addTypeTests(src__foundation__observer_list.ObserverList, _is_ObserverList_default);
  src__foundation__change_notifier.Listenable = class Listenable extends core.Object {};
  (src__foundation__change_notifier.Listenable.new = function() {
    ;
  }).prototype = src__foundation__change_notifier.Listenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier.Listenable);
  const _is_ValueListenable_default = Symbol('_is_ValueListenable_default');
  src__foundation__change_notifier.ValueListenable$ = dart.generic(T => {
    class ValueListenable extends src__foundation__change_notifier.Listenable {}
    (ValueListenable.new = function() {
      ValueListenable.__proto__.new.call(this);
      ;
    }).prototype = ValueListenable.prototype;
    dart.addTypeTests(ValueListenable);
    ValueListenable.prototype[_is_ValueListenable_default] = true;
    return ValueListenable;
  });
  src__foundation__change_notifier.ValueListenable = src__foundation__change_notifier.ValueListenable$();
  dart.addTypeTests(src__foundation__change_notifier.ValueListenable, _is_ValueListenable_default);
  const _listeners = dart.privateName(src__foundation__change_notifier, "_listeners");
  const _debugAssertNotDisposed = dart.privateName(src__foundation__change_notifier, "_debugAssertNotDisposed");
  src__foundation__change_notifier.ChangeNotifier = class ChangeNotifier extends src__foundation__change_notifier.Listenable {
    [_debugAssertNotDisposed]() {
      if (!dart.test(dart.fn(() => {
        if (this[_listeners] == null) {
          dart.throw(new src__foundation__assertions.FlutterError.new("A " + dart.str(this[$runtimeType]) + " was used after being disposed.\n" + "Once you have called dispose() on a " + dart.str(this[$runtimeType]) + ", it can no longer be used."));
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return true;
    }
    get hasListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      return this[_listeners].isNotEmpty;
    }
    addListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners].add(listener);
    }
    removeListener(listener) {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners].remove(listener);
    }
    dispose() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      this[_listeners] = null;
    }
    notifyListeners() {
      if (!dart.test(this[_debugAssertNotDisposed]())) dart.assertFailed();
      if (this[_listeners] != null) {
        let localListeners = ListOfVoidTovoid().from(this[_listeners]);
        for (let listener of localListeners) {
          try {
            if (dart.test(this[_listeners].contains(listener))) listener();
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "foundation library", context: "while dispatching notifications for " + dart.str(this[$runtimeType]), informationCollector: dart.fn(information => {
                information.writeln("The " + dart.str(this[$runtimeType]) + " sending notification was:");
                information.write("  " + dart.str(this));
              }, StringBufferToNull())}));
          }
        }
      }
    }
  };
  (src__foundation__change_notifier.ChangeNotifier.new = function() {
    this[_listeners] = new (ObserverListOfVoidTovoid()).new();
    src__foundation__change_notifier.ChangeNotifier.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__change_notifier.ChangeNotifier.prototype;
  dart.addTypeTests(src__foundation__change_notifier.ChangeNotifier);
  dart.setMethodSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getMethods(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_debugAssertNotDisposed]: dart.fnType(core.bool, []),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [])]),
    dispose: dart.fnType(dart.void, []),
    notifyListeners: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getGetters(src__foundation__change_notifier.ChangeNotifier.__proto__),
    hasListeners: core.bool
  }));
  dart.setFieldSignature(src__foundation__change_notifier.ChangeNotifier, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier.ChangeNotifier.__proto__),
    [_listeners]: dart.fieldType(src__foundation__observer_list.ObserverList$(dart.fnType(dart.void, [])))
  }));
  const _children$ = dart.privateName(src__foundation__change_notifier, "_children");
  src__foundation__change_notifier._MergingListenable = class _MergingListenable extends src__foundation__change_notifier.ChangeNotifier {
    dispose() {
      let t3;
      for (let child of this[_children$]) {
        t3 = child;
        t3 == null ? null : t3.removeListener(dart.bind(this, 'notifyListeners'));
      }
      super.dispose();
    }
    toString() {
      return "Listenable.merge([" + dart.str(this[_children$][$join](", ")) + "])";
    }
  };
  (src__foundation__change_notifier._MergingListenable.new = function(_children) {
    let t3;
    this[_children$] = _children;
    src__foundation__change_notifier._MergingListenable.__proto__.new.call(this);
    for (let child of this[_children$]) {
      t3 = child;
      t3 == null ? null : t3.addListener(dart.bind(this, 'notifyListeners'));
    }
  }).prototype = src__foundation__change_notifier._MergingListenable.prototype;
  dart.addTypeTests(src__foundation__change_notifier._MergingListenable);
  dart.setFieldSignature(src__foundation__change_notifier._MergingListenable, () => ({
    __proto__: dart.getFields(src__foundation__change_notifier._MergingListenable.__proto__),
    [_children$]: dart.finalFieldType(core.List$(src__foundation__change_notifier.Listenable))
  }));
  dart.defineExtensionMethods(src__foundation__change_notifier._MergingListenable, ['toString']);
  const _value$0 = dart.privateName(src__foundation__change_notifier, "_value");
  const _is_ValueNotifier_default = Symbol('_is_ValueNotifier_default');
  src__foundation__change_notifier.ValueNotifier$ = dart.generic(T => {
    class ValueNotifier extends src__foundation__change_notifier.ChangeNotifier {
      get value() {
        return this[_value$0];
      }
      set value(newValue) {
        T._check(newValue);
        if (dart.equals(this[_value$0], newValue)) return;
        this[_value$0] = newValue;
        this.notifyListeners();
      }
      toString() {
        return dart.str(src__foundation__diagnostics.describeIdentity(this)) + "(" + dart.str(this.value) + ")";
      }
    }
    (ValueNotifier.new = function(_value) {
      this[_value$0] = _value;
      ValueNotifier.__proto__.new.call(this);
      ;
    }).prototype = ValueNotifier.prototype;
    dart.addTypeTests(ValueNotifier);
    ValueNotifier.prototype[_is_ValueNotifier_default] = true;
    ValueNotifier[dart.implements] = () => [src__foundation__change_notifier.ValueListenable$(T)];
    dart.setGetterSignature(ValueNotifier, () => ({
      __proto__: dart.getGetters(ValueNotifier.__proto__),
      value: T
    }));
    dart.setSetterSignature(ValueNotifier, () => ({
      __proto__: dart.getSetters(ValueNotifier.__proto__),
      value: core.Object
    }));
    dart.setFieldSignature(ValueNotifier, () => ({
      __proto__: dart.getFields(ValueNotifier.__proto__),
      [_value$0]: dart.fieldType(T)
    }));
    dart.defineExtensionMethods(ValueNotifier, ['toString']);
    return ValueNotifier;
  });
  src__foundation__change_notifier.ValueNotifier = src__foundation__change_notifier.ValueNotifier$();
  dart.addTypeTests(src__foundation__change_notifier.ValueNotifier, _is_ValueNotifier_default);
  const _name$2 = dart.privateName(src__foundation__diagnostics, "_name");
  src__foundation__diagnostics.DiagnosticLevel = class DiagnosticLevel extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__foundation__diagnostics.DiagnosticLevel.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticLevel.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticLevel);
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticLevel, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticLevel.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticLevel, ['toString']);
  src__foundation__diagnostics.DiagnosticLevel.hidden = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(0, "DiagnosticLevel.hidden"));
  src__foundation__diagnostics.DiagnosticLevel.fine = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(1, "DiagnosticLevel.fine"));
  src__foundation__diagnostics.DiagnosticLevel.debug = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(2, "DiagnosticLevel.debug"));
  src__foundation__diagnostics.DiagnosticLevel.info = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(3, "DiagnosticLevel.info"));
  src__foundation__diagnostics.DiagnosticLevel.warning = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(4, "DiagnosticLevel.warning"));
  src__foundation__diagnostics.DiagnosticLevel.error = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(5, "DiagnosticLevel.error"));
  src__foundation__diagnostics.DiagnosticLevel.off = dart.const(new src__foundation__diagnostics.DiagnosticLevel.new(6, "DiagnosticLevel.off"));
  src__foundation__diagnostics.DiagnosticLevel.values = dart.constList([src__foundation__diagnostics.DiagnosticLevel.hidden, src__foundation__diagnostics.DiagnosticLevel.fine, src__foundation__diagnostics.DiagnosticLevel.debug, src__foundation__diagnostics.DiagnosticLevel.info, src__foundation__diagnostics.DiagnosticLevel.warning, src__foundation__diagnostics.DiagnosticLevel.error, src__foundation__diagnostics.DiagnosticLevel.off], src__foundation__diagnostics.DiagnosticLevel);
  src__foundation__diagnostics.DiagnosticsTreeStyle = class DiagnosticsTreeStyle extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__foundation__diagnostics.DiagnosticsTreeStyle.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticsTreeStyle.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsTreeStyle);
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsTreeStyle, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsTreeStyle.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsTreeStyle, ['toString']);
  src__foundation__diagnostics.DiagnosticsTreeStyle.sparse = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(0, "DiagnosticsTreeStyle.sparse"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.offstage = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(1, "DiagnosticsTreeStyle.offstage"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.dense = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(2, "DiagnosticsTreeStyle.dense"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.transition = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(3, "DiagnosticsTreeStyle.transition"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(4, "DiagnosticsTreeStyle.whitespace"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine = dart.const(new src__foundation__diagnostics.DiagnosticsTreeStyle.new(5, "DiagnosticsTreeStyle.singleLine"));
  src__foundation__diagnostics.DiagnosticsTreeStyle.values = dart.constList([src__foundation__diagnostics.DiagnosticsTreeStyle.sparse, src__foundation__diagnostics.DiagnosticsTreeStyle.offstage, src__foundation__diagnostics.DiagnosticsTreeStyle.dense, src__foundation__diagnostics.DiagnosticsTreeStyle.transition, src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine], src__foundation__diagnostics.DiagnosticsTreeStyle);
  src__foundation__diagnostics.TextTreeConfiguration = class TextTreeConfiguration extends core.Object {
    get prefixLineOne() {
      return this[prefixLineOne$];
    }
    set prefixLineOne(value) {
      super.prefixLineOne = value;
    }
    get prefixOtherLines() {
      return this[prefixOtherLines$];
    }
    set prefixOtherLines(value) {
      super.prefixOtherLines = value;
    }
    get prefixLastChildLineOne() {
      return this[prefixLastChildLineOne$];
    }
    set prefixLastChildLineOne(value) {
      super.prefixLastChildLineOne = value;
    }
    get prefixOtherLinesRootNode() {
      return this[prefixOtherLinesRootNode$];
    }
    set prefixOtherLinesRootNode(value) {
      super.prefixOtherLinesRootNode = value;
    }
    get propertyPrefixIfChildren() {
      return this[propertyPrefixIfChildren$];
    }
    set propertyPrefixIfChildren(value) {
      super.propertyPrefixIfChildren = value;
    }
    get propertyPrefixNoChildren() {
      return this[propertyPrefixNoChildren$];
    }
    set propertyPrefixNoChildren(value) {
      super.propertyPrefixNoChildren = value;
    }
    get linkCharacter() {
      return this[linkCharacter$];
    }
    set linkCharacter(value) {
      super.linkCharacter = value;
    }
    get childLinkSpace() {
      return this[childLinkSpace];
    }
    set childLinkSpace(value) {
      super.childLinkSpace = value;
    }
    get lineBreak() {
      return this[lineBreak$];
    }
    set lineBreak(value) {
      super.lineBreak = value;
    }
    get lineBreakProperties() {
      return this[lineBreakProperties$];
    }
    set lineBreakProperties(value) {
      super.lineBreakProperties = value;
    }
    get afterName() {
      return this[afterName$];
    }
    set afterName(value) {
      super.afterName = value;
    }
    get afterDescriptionIfBody() {
      return this[afterDescriptionIfBody$];
    }
    set afterDescriptionIfBody(value) {
      super.afterDescriptionIfBody = value;
    }
    get beforeProperties() {
      return this[beforeProperties$];
    }
    set beforeProperties(value) {
      super.beforeProperties = value;
    }
    get afterProperties() {
      return this[afterProperties$];
    }
    set afterProperties(value) {
      super.afterProperties = value;
    }
    get propertySeparator() {
      return this[propertySeparator$];
    }
    set propertySeparator(value) {
      super.propertySeparator = value;
    }
    get bodyIndent() {
      return this[bodyIndent$];
    }
    set bodyIndent(value) {
      super.bodyIndent = value;
    }
    get showChildren() {
      return this[showChildren$];
    }
    set showChildren(value) {
      super.showChildren = value;
    }
    get addBlankLineIfNoChildren() {
      return this[addBlankLineIfNoChildren$];
    }
    set addBlankLineIfNoChildren(value) {
      super.addBlankLineIfNoChildren = value;
    }
    get isNameOnOwnLine() {
      return this[isNameOnOwnLine$];
    }
    set isNameOnOwnLine(value) {
      super.isNameOnOwnLine = value;
    }
    get footer() {
      return this[footer$];
    }
    set footer(value) {
      super.footer = value;
    }
    get isBlankLineBetweenPropertiesAndChildren() {
      return this[isBlankLineBetweenPropertiesAndChildren$];
    }
    set isBlankLineBetweenPropertiesAndChildren(value) {
      super.isBlankLineBetweenPropertiesAndChildren = value;
    }
  };
  (src__foundation__diagnostics.TextTreeConfiguration.new = function(opts) {
    let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : null;
    let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
    let prefixLastChildLineOne = opts && 'prefixLastChildLineOne' in opts ? opts.prefixLastChildLineOne : null;
    let prefixOtherLinesRootNode = opts && 'prefixOtherLinesRootNode' in opts ? opts.prefixOtherLinesRootNode : null;
    let linkCharacter = opts && 'linkCharacter' in opts ? opts.linkCharacter : null;
    let propertyPrefixIfChildren = opts && 'propertyPrefixIfChildren' in opts ? opts.propertyPrefixIfChildren : null;
    let propertyPrefixNoChildren = opts && 'propertyPrefixNoChildren' in opts ? opts.propertyPrefixNoChildren : null;
    let lineBreak = opts && 'lineBreak' in opts ? opts.lineBreak : "\n";
    let lineBreakProperties = opts && 'lineBreakProperties' in opts ? opts.lineBreakProperties : true;
    let afterName = opts && 'afterName' in opts ? opts.afterName : ":";
    let afterDescriptionIfBody = opts && 'afterDescriptionIfBody' in opts ? opts.afterDescriptionIfBody : "";
    let beforeProperties = opts && 'beforeProperties' in opts ? opts.beforeProperties : "";
    let afterProperties = opts && 'afterProperties' in opts ? opts.afterProperties : "";
    let propertySeparator = opts && 'propertySeparator' in opts ? opts.propertySeparator : "";
    let bodyIndent = opts && 'bodyIndent' in opts ? opts.bodyIndent : "";
    let footer = opts && 'footer' in opts ? opts.footer : "";
    let showChildren = opts && 'showChildren' in opts ? opts.showChildren : true;
    let addBlankLineIfNoChildren = opts && 'addBlankLineIfNoChildren' in opts ? opts.addBlankLineIfNoChildren : true;
    let isNameOnOwnLine = opts && 'isNameOnOwnLine' in opts ? opts.isNameOnOwnLine : false;
    let isBlankLineBetweenPropertiesAndChildren = opts && 'isBlankLineBetweenPropertiesAndChildren' in opts ? opts.isBlankLineBetweenPropertiesAndChildren : true;
    this[prefixLineOne$] = prefixLineOne;
    this[prefixOtherLines$] = prefixOtherLines;
    this[prefixLastChildLineOne$] = prefixLastChildLineOne;
    this[prefixOtherLinesRootNode$] = prefixOtherLinesRootNode;
    this[linkCharacter$] = linkCharacter;
    this[propertyPrefixIfChildren$] = propertyPrefixIfChildren;
    this[propertyPrefixNoChildren$] = propertyPrefixNoChildren;
    this[lineBreak$] = lineBreak;
    this[lineBreakProperties$] = lineBreakProperties;
    this[afterName$] = afterName;
    this[afterDescriptionIfBody$] = afterDescriptionIfBody;
    this[beforeProperties$] = beforeProperties;
    this[afterProperties$] = afterProperties;
    this[propertySeparator$] = propertySeparator;
    this[bodyIndent$] = bodyIndent;
    this[footer$] = footer;
    this[showChildren$] = showChildren;
    this[addBlankLineIfNoChildren$] = addBlankLineIfNoChildren;
    this[isNameOnOwnLine$] = isNameOnOwnLine;
    this[isBlankLineBetweenPropertiesAndChildren$] = isBlankLineBetweenPropertiesAndChildren;
    if (!(prefixLineOne != null)) dart.assertFailed();
    if (!(prefixOtherLines != null)) dart.assertFailed();
    if (!(prefixLastChildLineOne != null)) dart.assertFailed();
    if (!(prefixOtherLinesRootNode != null)) dart.assertFailed();
    if (!(linkCharacter != null)) dart.assertFailed();
    if (!(propertyPrefixIfChildren != null)) dart.assertFailed();
    if (!(propertyPrefixNoChildren != null)) dart.assertFailed();
    if (!(lineBreak != null)) dart.assertFailed();
    if (!(lineBreakProperties != null)) dart.assertFailed();
    if (!(afterName != null)) dart.assertFailed();
    if (!(afterDescriptionIfBody != null)) dart.assertFailed();
    if (!(beforeProperties != null)) dart.assertFailed();
    if (!(afterProperties != null)) dart.assertFailed();
    if (!(propertySeparator != null)) dart.assertFailed();
    if (!(bodyIndent != null)) dart.assertFailed();
    if (!(footer != null)) dart.assertFailed();
    if (!(showChildren != null)) dart.assertFailed();
    if (!(addBlankLineIfNoChildren != null)) dart.assertFailed();
    if (!(isNameOnOwnLine != null)) dart.assertFailed();
    if (!(isBlankLineBetweenPropertiesAndChildren != null)) dart.assertFailed();
    this[childLinkSpace] = " "[$times](linkCharacter.length);
    ;
  }).prototype = src__foundation__diagnostics.TextTreeConfiguration.prototype;
  dart.addTypeTests(src__foundation__diagnostics.TextTreeConfiguration);
  const prefixLineOne$ = Symbol("TextTreeConfiguration.prefixLineOne");
  const prefixOtherLines$ = Symbol("TextTreeConfiguration.prefixOtherLines");
  const prefixLastChildLineOne$ = Symbol("TextTreeConfiguration.prefixLastChildLineOne");
  const prefixOtherLinesRootNode$ = Symbol("TextTreeConfiguration.prefixOtherLinesRootNode");
  const propertyPrefixIfChildren$ = Symbol("TextTreeConfiguration.propertyPrefixIfChildren");
  const propertyPrefixNoChildren$ = Symbol("TextTreeConfiguration.propertyPrefixNoChildren");
  const linkCharacter$ = Symbol("TextTreeConfiguration.linkCharacter");
  const childLinkSpace = Symbol("TextTreeConfiguration.childLinkSpace");
  const lineBreak$ = Symbol("TextTreeConfiguration.lineBreak");
  const lineBreakProperties$ = Symbol("TextTreeConfiguration.lineBreakProperties");
  const afterName$ = Symbol("TextTreeConfiguration.afterName");
  const afterDescriptionIfBody$ = Symbol("TextTreeConfiguration.afterDescriptionIfBody");
  const beforeProperties$ = Symbol("TextTreeConfiguration.beforeProperties");
  const afterProperties$ = Symbol("TextTreeConfiguration.afterProperties");
  const propertySeparator$ = Symbol("TextTreeConfiguration.propertySeparator");
  const bodyIndent$ = Symbol("TextTreeConfiguration.bodyIndent");
  const showChildren$ = Symbol("TextTreeConfiguration.showChildren");
  const addBlankLineIfNoChildren$ = Symbol("TextTreeConfiguration.addBlankLineIfNoChildren");
  const isNameOnOwnLine$ = Symbol("TextTreeConfiguration.isNameOnOwnLine");
  const footer$ = Symbol("TextTreeConfiguration.footer");
  const isBlankLineBetweenPropertiesAndChildren$ = Symbol("TextTreeConfiguration.isBlankLineBetweenPropertiesAndChildren");
  dart.setFieldSignature(src__foundation__diagnostics.TextTreeConfiguration, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.TextTreeConfiguration.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.finalFieldType(core.String),
    prefixLastChildLineOne: dart.finalFieldType(core.String),
    prefixOtherLinesRootNode: dart.finalFieldType(core.String),
    propertyPrefixIfChildren: dart.finalFieldType(core.String),
    propertyPrefixNoChildren: dart.finalFieldType(core.String),
    linkCharacter: dart.finalFieldType(core.String),
    childLinkSpace: dart.finalFieldType(core.String),
    lineBreak: dart.finalFieldType(core.String),
    lineBreakProperties: dart.finalFieldType(core.bool),
    afterName: dart.finalFieldType(core.String),
    afterDescriptionIfBody: dart.finalFieldType(core.String),
    beforeProperties: dart.finalFieldType(core.String),
    afterProperties: dart.finalFieldType(core.String),
    propertySeparator: dart.finalFieldType(core.String),
    bodyIndent: dart.finalFieldType(core.String),
    showChildren: dart.finalFieldType(core.bool),
    addBlankLineIfNoChildren: dart.finalFieldType(core.bool),
    isNameOnOwnLine: dart.finalFieldType(core.bool),
    footer: dart.finalFieldType(core.String),
    isBlankLineBetweenPropertiesAndChildren: dart.finalFieldType(core.bool)
  }));
  const _buffer = dart.privateName(src__foundation__diagnostics, "_buffer");
  const _atLineStart = dart.privateName(src__foundation__diagnostics, "_atLineStart");
  const _hasMultipleLines = dart.privateName(src__foundation__diagnostics, "_hasMultipleLines");
  src__foundation__diagnostics._PrefixedStringBuilder = class _PrefixedStringBuilder extends core.Object {
    get hasMultipleLines() {
      return this[_hasMultipleLines];
    }
    write(s) {
      let t3;
      if (s[$isEmpty]) return;
      if (s === "\n") {
        if (dart.test(this[_buffer].isEmpty)) {
          this[_buffer].write(this.prefixLineOne[$trimRight]());
        } else if (dart.test(this[_atLineStart])) {
          this[_buffer].write(this.prefixOtherLines[$trimRight]());
          this[_hasMultipleLines] = true;
        }
        this[_buffer].write("\n");
        this[_atLineStart] = true;
        return;
      }
      if (dart.test(this[_buffer].isEmpty)) {
        this[_buffer].write(this.prefixLineOne);
      } else if (dart.test(this[_atLineStart])) {
        this[_buffer].write(this.prefixOtherLines);
        this[_hasMultipleLines] = true;
      }
      let lineTerminated = false;
      if (s[$endsWith]("\n")) {
        s = s[$substring](0, s.length - 1);
        lineTerminated = true;
      }
      let parts = s[$split]("\n");
      this[_buffer].write(parts[$_get](0));
      for (let i = 1; i < dart.notNull(parts[$length]); i = i + 1) {
        t3 = this[_buffer];
        t3.write("\n");
        t3.write(this.prefixOtherLines);
        t3.write(parts[$_get](i));
        t3;
      }
      if (lineTerminated) this[_buffer].write("\n");
      this[_atLineStart] = lineTerminated;
    }
    writeRaw(text) {
      if (text[$isEmpty]) return;
      this[_buffer].write(text);
      this[_atLineStart] = text[$endsWith]("\n");
    }
    writeRawLine(line) {
      if (line[$isEmpty]) return;
      this[_buffer].write(line);
      if (!line[$endsWith]("\n")) this[_buffer].write("\n");
      this[_atLineStart] = true;
    }
    toString() {
      return dart.toString(this[_buffer]);
    }
  };
  (src__foundation__diagnostics._PrefixedStringBuilder.new = function(prefixLineOne, prefixOtherLines) {
    this[_buffer] = new core.StringBuffer.new();
    this[_atLineStart] = true;
    this[_hasMultipleLines] = false;
    this.prefixLineOne = prefixLineOne;
    this.prefixOtherLines = prefixOtherLines;
    ;
  }).prototype = src__foundation__diagnostics._PrefixedStringBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics._PrefixedStringBuilder);
  dart.setMethodSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    write: dart.fnType(dart.void, [core.String]),
    writeRaw: dart.fnType(dart.void, [core.String]),
    writeRawLine: dart.fnType(dart.void, [core.String])
  }));
  dart.setGetterSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    hasMultipleLines: core.bool
  }));
  dart.setFieldSignature(src__foundation__diagnostics._PrefixedStringBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics._PrefixedStringBuilder.__proto__),
    prefixLineOne: dart.finalFieldType(core.String),
    prefixOtherLines: dart.fieldType(core.String),
    [_buffer]: dart.finalFieldType(core.StringBuffer),
    [_atLineStart]: dart.fieldType(core.bool),
    [_hasMultipleLines]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics._PrefixedStringBuilder, ['toString']);
  src__foundation__diagnostics._NoDefaultValue = class _NoDefaultValue extends core.Object {};
  (src__foundation__diagnostics._NoDefaultValue.new = function() {
    ;
  }).prototype = src__foundation__diagnostics._NoDefaultValue.prototype;
  dart.addTypeTests(src__foundation__diagnostics._NoDefaultValue);
  const _separator = dart.privateName(src__foundation__diagnostics, "_separator");
  const _childTextConfiguration = dart.privateName(src__foundation__diagnostics, "_childTextConfiguration");
  src__foundation__diagnostics.DiagnosticsNode = class DiagnosticsNode extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get showSeparator() {
      return this[showSeparator$];
    }
    set showSeparator(value) {
      super.showSeparator = value;
    }
    get showName() {
      return this[showName$];
    }
    set showName(value) {
      super.showName = value;
    }
    get style() {
      return this[style$];
    }
    set style(value) {
      super.style = value;
    }
    static message(message, opts) {
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      return new (DiagnosticsPropertyOfNull()).new("", null, {description: message, style: style, showName: false, level: level});
    }
    isFiltered(minLevel) {
      return dart.notNull(this.level.index) < dart.notNull(minLevel.index);
    }
    get level() {
      return src__foundation__diagnostics.DiagnosticLevel.info;
    }
    get emptyBodyDescription() {
      return null;
    }
    get [_separator]() {
      return dart.test(this.showSeparator) ? ":" : "";
    }
    toJsonMap() {
      let data = new (IdentityMapOfString$Object()).from(["name", this.name, "showSeparator", this.showSeparator, "description", this.toDescription(), "level", src__foundation__diagnostics.describeEnum(this.level), "showName", this.showName, "emptyBodyDescription", this.emptyBodyDescription, "style", src__foundation__diagnostics.describeEnum(this.style), "valueToString", dart.toString(this.value), "type", dart.toString(this[$runtimeType]), "hasChildren", this.getChildren()[$isNotEmpty]]);
      return data;
    }
    toString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(this.style != null)) dart.assertFailed();
      if (!(minLevel != null)) dart.assertFailed();
      if (dart.equals(this.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine)) return this.toStringDeep({parentConfiguration: parentConfiguration, minLevel: minLevel});
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (this.name == null || this.name[$isEmpty] || !dart.test(this.showName)) return description;
      return description[$contains]("\n") ? dart.str(this.name) + dart.str(this[_separator]) + "\n" + dart.str(description) : dart.str(this.name) + dart.str(this[_separator]) + " " + dart.str(description);
    }
    get textTreeConfiguration() {
      if (!(this.style != null)) dart.assertFailed();
      switch (this.style) {
        case src__foundation__diagnostics.DiagnosticsTreeStyle.dense:
        {
          return src__foundation__diagnostics.denseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.sparse:
        {
          return src__foundation__diagnostics.sparseTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.offstage:
        {
          return src__foundation__diagnostics.dashedTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.whitespace:
        {
          return src__foundation__diagnostics.whitespaceTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.transition:
        {
          return src__foundation__diagnostics.transitionTextConfiguration;
        }
        case src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine:
        {
          return src__foundation__diagnostics.singleLineTextConfiguration;
        }
      }
      return null;
    }
    [_childTextConfiguration](child, textStyle) {
      return child != null && !dart.equals(child.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine) ? child.textTreeConfiguration : textStyle;
    }
    toStringDeep(opts) {
      let t3, t3$, t3$0;
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      if (!(minLevel != null)) dart.assertFailed();
      prefixOtherLines == null ? prefixOtherLines = prefixLineOne : null;
      let children = this.getChildren();
      let config = this.textTreeConfiguration;
      if (prefixOtherLines[$isEmpty]) prefixOtherLines = dart.notNull(prefixOtherLines) + dart.notNull(config.prefixOtherLinesRootNode);
      let builder = new src__foundation__diagnostics._PrefixedStringBuilder.new(prefixLineOne, prefixOtherLines);
      let description = this.toDescription({parentConfiguration: parentConfiguration});
      if (description == null || description[$isEmpty]) {
        if (dart.test(this.showName) && this.name != null) builder.write(this.name);
      } else {
        if (this.name != null && this.name[$isNotEmpty] && dart.test(this.showName)) {
          builder.write(this.name);
          if (dart.test(this.showSeparator)) builder.write(config.afterName);
          builder.write(dart.test(config.isNameOnOwnLine) || description[$contains]("\n") ? "\n" : " ");
          if (description[$contains]("\n") && dart.equals(this.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine)) {
            t3 = builder;
            t3.prefixOtherLines = dart.notNull(t3.prefixOtherLines) + "  ";
          }
        }
        t3$ = builder;
        t3$.prefixOtherLines = dart.notNull(t3$.prefixOtherLines) + dart.notNull(dart.test(children[$isEmpty]) ? config.propertyPrefixNoChildren : config.propertyPrefixIfChildren);
        builder.write(description);
      }
      let properties = this.getProperties()[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$toList]();
      if (dart.test(properties[$isNotEmpty]) || dart.test(children[$isNotEmpty]) || this.emptyBodyDescription != null) builder.write(config.afterDescriptionIfBody);
      if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      if (dart.test(properties[$isNotEmpty])) builder.write(config.beforeProperties);
      t3$0 = builder;
      t3$0.prefixOtherLines = dart.notNull(t3$0.prefixOtherLines) + dart.notNull(config.bodyIndent);
      if (this.emptyBodyDescription != null && dart.test(properties[$isEmpty]) && dart.test(children[$isEmpty]) && prefixLineOne[$isNotEmpty]) {
        builder.write(this.emptyBodyDescription);
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      for (let i = 0; i < dart.notNull(properties[$length]); i = i + 1) {
        let property = properties[$_get](i);
        if (i > 0) builder.write(config.propertySeparator);
        let kWrapWidth = 65;
        if (!dart.equals(property.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine)) {
          let propertyStyle = property.textTreeConfiguration;
          builder.writeRaw(property.toStringDeep({prefixLineOne: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.prefixLineOne), prefixOtherLines: dart.str(builder.prefixOtherLines) + dart.str(propertyStyle.linkCharacter) + dart.str(propertyStyle.prefixOtherLines), parentConfiguration: config, minLevel: minLevel}));
          continue;
        }
        if (!dart.equals(property.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine)) dart.assertFailed();
        let message = property.toString({parentConfiguration: config, minLevel: minLevel});
        if (!dart.test(config.lineBreakProperties) || message.length < kWrapWidth) {
          builder.write(message);
        } else {
          let lines = message[$split]("\n");
          for (let j = 0; j < dart.notNull(lines[$length]); j = j + 1) {
            let line = lines[$_get](j);
            if (j > 0) builder.write(config.lineBreak);
            builder.write(src__foundation__print.debugWordWrap(line, kWrapWidth, {wrapIndent: "  "})[$join]("\n"));
          }
        }
        if (dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      }
      if (dart.test(properties[$isNotEmpty])) builder.write(config.afterProperties);
      if (!dart.test(config.lineBreakProperties)) builder.write(config.lineBreak);
      let prefixChildren = dart.str(prefixOtherLines) + dart.str(config.bodyIndent);
      if (dart.test(children[$isEmpty]) && dart.test(config.addBlankLineIfNoChildren) && dart.test(builder.hasMultipleLines)) {
        let prefix = prefixChildren[$trimRight]();
        if (prefix[$isNotEmpty]) builder.writeRaw(prefix + dart.str(config.lineBreak));
      }
      if (dart.test(children[$isNotEmpty]) && dart.test(config.showChildren)) {
        if (dart.test(config.isBlankLineBetweenPropertiesAndChildren) && dart.test(properties[$isNotEmpty]) && dart.test(children[$first].textTreeConfiguration.isBlankLineBetweenPropertiesAndChildren)) {
          builder.write(config.lineBreak);
        }
        for (let i = 0; i < dart.notNull(children[$length]); i = i + 1) {
          let child = children[$_get](i);
          if (!(child != null)) dart.assertFailed();
          let childConfig = this[_childTextConfiguration](child, config);
          if (i === dart.notNull(children[$length]) - 1) {
            let lastChildPrefixLineOne = prefixChildren + dart.str(childConfig.prefixLastChildLineOne);
            builder.writeRawLine(child.toStringDeep({prefixLineOne: lastChildPrefixLineOne, prefixOtherLines: prefixChildren + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.prefixOtherLines), parentConfiguration: config, minLevel: minLevel}));
            if (childConfig.footer[$isNotEmpty]) builder.writeRaw(prefixChildren + dart.str(childConfig.childLinkSpace) + dart.str(childConfig.footer));
          } else {
            let nextChildStyle = this[_childTextConfiguration](children[$_get](i + 1), config);
            let childPrefixLineOne = prefixChildren + dart.str(childConfig.prefixLineOne);
            let childPrefixOtherLines = prefixChildren + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.prefixOtherLines);
            builder.writeRawLine(child.toStringDeep({prefixLineOne: childPrefixLineOne, prefixOtherLines: childPrefixOtherLines, parentConfiguration: config, minLevel: minLevel}));
            if (childConfig.footer[$isNotEmpty]) builder.writeRaw(prefixChildren + dart.str(nextChildStyle.linkCharacter) + dart.str(childConfig.footer));
          }
        }
      }
      return builder.toString();
    }
  };
  (src__foundation__diagnostics.DiagnosticsNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let style = opts && 'style' in opts ? opts.style : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
    this[name$] = name;
    this[style$] = style;
    this[showName$] = showName;
    this[showSeparator$] = showSeparator;
    if (!(showName != null)) dart.assertFailed();
    if (!(showSeparator != null)) dart.assertFailed();
    if (!(name == null || !name[$endsWith](":"))) dart.assertFailed("Names of diagnostic nodes must not end with colons.");
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticsNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsNode);
  const name$ = Symbol("DiagnosticsNode.name");
  const showSeparator$ = Symbol("DiagnosticsNode.showSeparator");
  const showName$ = Symbol("DiagnosticsNode.showName");
  const style$ = Symbol("DiagnosticsNode.style");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    isFiltered: dart.fnType(core.bool, [src__foundation__diagnostics.DiagnosticLevel]),
    toJsonMap: dart.fnType(core.Map$(core.String, core.Object), []),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
    [_childTextConfiguration]: dart.fnType(src__foundation__diagnostics.TextTreeConfiguration, [src__foundation__diagnostics.DiagnosticsNode, src__foundation__diagnostics.TextTreeConfiguration]),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration, prefixLineOne: core.String, prefixOtherLines: core.String})
  }));
  dart.setGetterSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    level: src__foundation__diagnostics.DiagnosticLevel,
    emptyBodyDescription: core.String,
    [_separator]: core.String,
    textTreeConfiguration: src__foundation__diagnostics.TextTreeConfiguration
  }));
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticsNode, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticsNode.__proto__),
    name: dart.finalFieldType(core.String),
    showSeparator: dart.finalFieldType(core.bool),
    showName: dart.finalFieldType(core.bool),
    style: dart.finalFieldType(src__foundation__diagnostics.DiagnosticsTreeStyle)
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.DiagnosticsNode, ['toString']);
  const _exception = dart.privateName(src__foundation__diagnostics, "_exception");
  const _description = dart.privateName(src__foundation__diagnostics, "_description");
  const _valueComputed = dart.privateName(src__foundation__diagnostics, "_valueComputed");
  const _value = dart.privateName(src__foundation__diagnostics, "_value");
  const _computeValue = dart.privateName(src__foundation__diagnostics, "_computeValue");
  const _defaultLevel = dart.privateName(src__foundation__diagnostics, "_defaultLevel");
  const _addTooltip = dart.privateName(src__foundation__diagnostics, "_addTooltip");
  const _maybeCacheValue = dart.privateName(src__foundation__diagnostics, "_maybeCacheValue");
  const _is_DiagnosticsProperty_default = Symbol('_is_DiagnosticsProperty_default');
  src__foundation__diagnostics.DiagnosticsProperty$ = dart.generic(T => {
    class DiagnosticsProperty extends src__foundation__diagnostics.DiagnosticsNode {
      get ifNull() {
        return this[ifNull$];
      }
      set ifNull(value) {
        super.ifNull = value;
      }
      get ifEmpty() {
        return this[ifEmpty$];
      }
      set ifEmpty(value) {
        super.ifEmpty = value;
      }
      get tooltip() {
        return this[tooltip$];
      }
      set tooltip(value) {
        super.tooltip = value;
      }
      get missingIfNull() {
        return this[missingIfNull$];
      }
      set missingIfNull(value) {
        super.missingIfNull = value;
      }
      get defaultValue() {
        return this[defaultValue$];
      }
      set defaultValue(value) {
        super.defaultValue = value;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue)) json[$_set]("defaultValue", dart.toString(this.defaultValue));
        if (this.ifEmpty != null) json[$_set]("ifEmpty", this.ifEmpty);
        if (this.ifNull != null) json[$_set]("ifNull", this.ifNull);
        if (this.tooltip != null) json[$_set]("tooltip", this.tooltip);
        json[$_set]("missingIfNull", this.missingIfNull);
        if (this.exception != null) json[$_set]("exception", dart.toString(this.exception));
        json[$_set]("propertyType", dart.toString(this.propertyType));
        json[$_set]("valueToString", this.valueToString());
        json[$_set]("defaultLevel", src__foundation__diagnostics.describeEnum(this[_defaultLevel]));
        if (src__foundation__diagnostics.Diagnosticable.is(dart.wrapType(T))) json[$_set]("isDiagnosticableValue", true);
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        let v = this.value;
        if (dart.test(ui$.isWeb) && core.Function.is(v)) {
          let desc = dart.toString(v);
          if (desc[$contains]("Closure:") && desc[$contains]("from:")) {
            desc = desc[$substring](0, desc[$indexOf]("from: ") - 1);
          }
          return desc;
        }
        return src__foundation__diagnostics.DiagnosticableTree.is(v) ? v.toStringShort() : dart.toString(v);
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this[_description] != null) return this[_addTooltip](this[_description]);
        if (this.exception != null) return "EXCEPTION (" + dart.str(dart.runtimeType(this.exception)) + ")";
        if (this.ifNull != null && this.value == null) return this[_addTooltip](this.ifNull);
        let result = this.valueToString({parentConfiguration: parentConfiguration});
        if (result[$isEmpty] && this.ifEmpty != null) result = this.ifEmpty;
        return this[_addTooltip](result);
      }
      [_addTooltip](text) {
        if (!(text != null)) dart.assertFailed();
        return this.tooltip == null ? text : dart.str(text) + " (" + dart.str(this.tooltip) + ")";
      }
      get propertyType() {
        return dart.wrapType(T);
      }
      get value() {
        this[_maybeCacheValue]();
        return this[_value];
      }
      get exception() {
        this[_maybeCacheValue]();
        return this[_exception];
      }
      [_maybeCacheValue]() {
        if (dart.test(this[_valueComputed])) return;
        this[_valueComputed] = true;
        if (!(this[_computeValue] != null)) dart.assertFailed();
        try {
          this[_value] = this[_computeValue]();
        } catch (e) {
          let exception = dart.getThrown(e);
          this[_exception] = exception;
          this[_value] = null;
        }
      }
      get level() {
        if (dart.equals(this[_defaultLevel], src__foundation__diagnostics.DiagnosticLevel.hidden)) return this[_defaultLevel];
        if (this.exception != null) return src__foundation__diagnostics.DiagnosticLevel.error;
        if (this.value == null && dart.test(this.missingIfNull)) return src__foundation__diagnostics.DiagnosticLevel.warning;
        if (!dart.equals(this.defaultValue, src__foundation__diagnostics.kNoDefaultValue) && dart.equals(this.value, this.defaultValue)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return this[_defaultLevel];
      }
      getProperties() {
        return JSArrayOfDiagnosticsNode().of([]);
      }
      getChildren() {
        return JSArrayOfDiagnosticsNode().of([]);
      }
    }
    (DiagnosticsProperty.new = function(name, value, opts) {
      let t3;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      if (!(showName != null)) dart.assertFailed();
      if (!(showSeparator != null)) dart.assertFailed();
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[_description] = description;
      this[_valueComputed] = true;
      this[_value] = value;
      this[_computeValue] = null;
      this[ifNull$] = (t3 = ifNull, t3 == null ? dart.test(missingIfNull) ? "MISSING" : null : t3);
      this[_defaultLevel] = level;
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    (DiagnosticsProperty.lazy = function(name, computeValue, opts) {
      let t3;
      let description = opts && 'description' in opts ? opts.description : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let showSeparator = opts && 'showSeparator' in opts ? opts.showSeparator : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let missingIfNull = opts && 'missingIfNull' in opts ? opts.missingIfNull : false;
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[_exception] = null;
      this[ifEmpty$] = ifEmpty;
      this[defaultValue$] = defaultValue;
      this[tooltip$] = tooltip;
      this[missingIfNull$] = missingIfNull;
      if (!(showName != null)) dart.assertFailed();
      if (!(showSeparator != null)) dart.assertFailed();
      if (!(dart.equals(defaultValue, src__foundation__diagnostics.kNoDefaultValue) || T.is(defaultValue))) dart.assertFailed();
      if (!(missingIfNull != null)) dart.assertFailed();
      if (!(style != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[_description] = description;
      this[_valueComputed] = false;
      this[_value] = null;
      this[_computeValue] = computeValue;
      this[_defaultLevel] = level;
      this[ifNull$] = (t3 = ifNull, t3 == null ? dart.test(missingIfNull) ? "MISSING" : null : t3);
      DiagnosticsProperty.__proto__.new.call(this, {name: name, showName: showName, showSeparator: showSeparator, style: style});
      ;
    }).prototype = DiagnosticsProperty.prototype;
    dart.addTypeTests(DiagnosticsProperty);
    DiagnosticsProperty.prototype[_is_DiagnosticsProperty_default] = true;
    const ifNull$ = Symbol("DiagnosticsProperty.ifNull");
    const ifEmpty$ = Symbol("DiagnosticsProperty.ifEmpty");
    const tooltip$ = Symbol("DiagnosticsProperty.tooltip");
    const missingIfNull$ = Symbol("DiagnosticsProperty.missingIfNull");
    const defaultValue$ = Symbol("DiagnosticsProperty.defaultValue");
    dart.setMethodSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getMethods(DiagnosticsProperty.__proto__),
      valueToString: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration}),
      [_addTooltip]: dart.fnType(core.String, [core.String]),
      [_maybeCacheValue]: dart.fnType(dart.void, []),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
    }));
    dart.setGetterSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getGetters(DiagnosticsProperty.__proto__),
      propertyType: core.Type,
      value: T,
      exception: core.Object
    }));
    dart.setFieldSignature(DiagnosticsProperty, () => ({
      __proto__: dart.getFields(DiagnosticsProperty.__proto__),
      [_description]: dart.finalFieldType(core.String),
      ifNull: dart.finalFieldType(core.String),
      ifEmpty: dart.finalFieldType(core.String),
      tooltip: dart.finalFieldType(core.String),
      missingIfNull: dart.finalFieldType(core.bool),
      [_value]: dart.fieldType(T),
      [_valueComputed]: dart.fieldType(core.bool),
      [_exception]: dart.fieldType(core.Object),
      defaultValue: dart.finalFieldType(core.Object),
      [_defaultLevel]: dart.fieldType(src__foundation__diagnostics.DiagnosticLevel),
      [_computeValue]: dart.finalFieldType(dart.fnType(T, []))
    }));
    return DiagnosticsProperty;
  });
  src__foundation__diagnostics.DiagnosticsProperty = src__foundation__diagnostics.DiagnosticsProperty$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticsProperty, _is_DiagnosticsProperty_default);
  src__foundation__diagnostics.MessageProperty = class MessageProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Null) {};
  (src__foundation__diagnostics.MessageProperty.new = function(name, message, opts) {
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(name != null)) dart.assertFailed();
    if (!(message != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.MessageProperty.__proto__.new.call(this, name, null, {description: message, level: level});
    ;
  }).prototype = src__foundation__diagnostics.MessageProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.MessageProperty);
  src__foundation__diagnostics.StringProperty = class StringProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.String) {
    get quoted() {
      return this[quoted$];
    }
    set quoted(value) {
      super.quoted = value;
    }
    toJsonMap() {
      let json = super.toJsonMap();
      json[$_set]("quoted", this.quoted);
      return json;
    }
    valueToString(opts) {
      let t4;
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      let text = (t4 = this[_description], t4 == null ? this.value : t4);
      if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties) && text != null) {
        text = text[$replaceAll]("\n", "\\n");
      }
      if (dart.test(this.quoted) && text != null) {
        if (this.ifEmpty != null && text[$isEmpty]) return this.ifEmpty;
        return "\"" + dart.str(text) + "\"";
      }
      return dart.toString(text);
    }
  };
  (src__foundation__diagnostics.StringProperty.new = function(name, value, opts) {
    let description = opts && 'description' in opts ? opts.description : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let quoted = opts && 'quoted' in opts ? opts.quoted : true;
    let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[quoted$] = quoted;
    if (!(showName != null)) dart.assertFailed();
    if (!(quoted != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.StringProperty.__proto__.new.call(this, name, value, {description: description, defaultValue: defaultValue, tooltip: tooltip, showName: showName, ifEmpty: ifEmpty, level: level});
    ;
  }).prototype = src__foundation__diagnostics.StringProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.StringProperty);
  const quoted$ = Symbol("StringProperty.quoted");
  dart.setFieldSignature(src__foundation__diagnostics.StringProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.StringProperty.__proto__),
    quoted: dart.finalFieldType(core.bool)
  }));
  const _is__NumProperty_default = Symbol('_is__NumProperty_default');
  src__foundation__diagnostics._NumProperty$ = dart.generic(T => {
    class _NumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get unit() {
        return this[unit$];
      }
      set unit(value) {
        super.unit = value;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.unit != null) json[$_set]("unit", this.unit);
        json[$_set]("numberToString", this.numberToString());
        return json;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return this.unit != null ? dart.str(this.numberToString()) + dart.str(this.unit) : this.numberToString();
      }
    }
    (_NumProperty.new = function(name, value, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    (_NumProperty.lazy = function(name, computeValue, opts) {
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let unit = opts && 'unit' in opts ? opts.unit : null;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[unit$] = unit;
      _NumProperty.__proto__.lazy.call(this, name, computeValue, {ifNull: ifNull, showName: showName, defaultValue: defaultValue, tooltip: tooltip, level: level});
      ;
    }).prototype = _NumProperty.prototype;
    dart.addTypeTests(_NumProperty);
    _NumProperty.prototype[_is__NumProperty_default] = true;
    const unit$ = Symbol("_NumProperty.unit");
    dart.setFieldSignature(_NumProperty, () => ({
      __proto__: dart.getFields(_NumProperty.__proto__),
      unit: dart.finalFieldType(core.String)
    }));
    return _NumProperty;
  });
  src__foundation__diagnostics._NumProperty = src__foundation__diagnostics._NumProperty$();
  dart.addTypeTests(src__foundation__diagnostics._NumProperty, _is__NumProperty_default);
  src__foundation__diagnostics.DoubleProperty = class DoubleProperty extends src__foundation__diagnostics._NumProperty$(core.double) {
    numberToString() {
      let t4;
      t4 = this.value;
      return t4 == null ? null : t4[$toStringAsFixed](1);
    }
  };
  (src__foundation__diagnostics.DoubleProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.DoubleProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, showName: showName, level: level});
    ;
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  (src__foundation__diagnostics.DoubleProperty.lazy = function(name, computeValue, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.DoubleProperty.__proto__.lazy.call(this, name, computeValue, {showName: showName, ifNull: ifNull, unit: unit, tooltip: tooltip, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.DoubleProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DoubleProperty);
  dart.setMethodSignature(src__foundation__diagnostics.DoubleProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DoubleProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  src__foundation__diagnostics.IntProperty = class IntProperty extends src__foundation__diagnostics._NumProperty$(core.int) {
    numberToString() {
      return dart.toString(this.value);
    }
  };
  (src__foundation__diagnostics.IntProperty.new = function(name, value, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.IntProperty.__proto__.new.call(this, name, value, {ifNull: ifNull, showName: showName, unit: unit, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.IntProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.IntProperty);
  dart.setMethodSignature(src__foundation__diagnostics.IntProperty, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.IntProperty.__proto__),
    numberToString: dart.fnType(core.String, [])
  }));
  src__foundation__diagnostics.PercentProperty = class PercentProperty extends src__foundation__diagnostics.DoubleProperty {
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (this.value == null) return dart.toString(this.value);
      return this.unit != null ? dart.str(this.numberToString()) + " " + dart.str(this.unit) : this.numberToString();
    }
    numberToString() {
      if (this.value == null) return dart.toString(this.value);
      return (this.value[$clamp](0.0, 1.0) * 100.0)[$toStringAsFixed](1) + "%";
    }
  };
  (src__foundation__diagnostics.PercentProperty.new = function(name, fraction, opts) {
    let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
    let showName = opts && 'showName' in opts ? opts.showName : true;
    let tooltip = opts && 'tooltip' in opts ? opts.tooltip : null;
    let unit = opts && 'unit' in opts ? opts.unit : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    src__foundation__diagnostics.PercentProperty.__proto__.new.call(this, name, fraction, {ifNull: ifNull, showName: showName, tooltip: tooltip, unit: unit, level: level});
    ;
  }).prototype = src__foundation__diagnostics.PercentProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.PercentProperty);
  src__foundation__diagnostics.FlagProperty = class FlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.bool) {
    get ifTrue() {
      return this[ifTrue$];
    }
    set ifTrue(value) {
      super.ifTrue = value;
    }
    get ifFalse() {
      return this[ifFalse$];
    }
    set ifFalse(value) {
      super.ifFalse = value;
    }
    toJsonMap() {
      let json = super.toJsonMap();
      if (this.ifTrue != null) json[$_set]("ifTrue", this.ifTrue);
      if (this.ifFalse != null) json[$_set]("ifFalse", this.ifFalse);
      return json;
    }
    valueToString(opts) {
      let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
      if (dart.equals(this.value, true)) {
        if (this.ifTrue != null) return this.ifTrue;
      } else if (dart.equals(this.value, false)) {
        if (this.ifFalse != null) return this.ifFalse;
      }
      return super.valueToString({parentConfiguration: parentConfiguration});
    }
    get showName() {
      if (this.value == null || dart.equals(this.value, true) && this.ifTrue == null || dart.equals(this.value, false) && this.ifFalse == null) {
        return true;
      }
      return super.showName;
    }
    get level() {
      if (dart.equals(this.value, true)) {
        if (this.ifTrue == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      if (dart.equals(this.value, false)) {
        if (this.ifFalse == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
      }
      return super.level;
    }
  };
  (src__foundation__diagnostics.FlagProperty.new = function(name, opts) {
    let value = opts && 'value' in opts ? opts.value : null;
    let ifTrue = opts && 'ifTrue' in opts ? opts.ifTrue : null;
    let ifFalse = opts && 'ifFalse' in opts ? opts.ifFalse : null;
    let showName = opts && 'showName' in opts ? opts.showName : false;
    let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : null;
    let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
    this[ifTrue$] = ifTrue;
    this[ifFalse$] = ifFalse;
    if (!(showName != null)) dart.assertFailed();
    if (!(level != null)) dart.assertFailed();
    if (!(ifTrue != null || ifFalse != null)) dart.assertFailed();
    src__foundation__diagnostics.FlagProperty.__proto__.new.call(this, name, value, {showName: showName, defaultValue: defaultValue, level: level});
    ;
  }).prototype = src__foundation__diagnostics.FlagProperty.prototype;
  dart.addTypeTests(src__foundation__diagnostics.FlagProperty);
  const ifTrue$ = Symbol("FlagProperty.ifTrue");
  const ifFalse$ = Symbol("FlagProperty.ifFalse");
  dart.setGetterSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getGetters(src__foundation__diagnostics.FlagProperty.__proto__),
    showName: core.bool
  }));
  dart.setFieldSignature(src__foundation__diagnostics.FlagProperty, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.FlagProperty.__proto__),
    ifTrue: dart.finalFieldType(core.String),
    ifFalse: dart.finalFieldType(core.String)
  }));
  const _is_IterableProperty_default = Symbol('_is_IterableProperty_default');
  src__foundation__diagnostics.IterableProperty$ = dart.generic(T => {
    let TToString = () => (TToString = dart.constFn(dart.fnType(core.String, [T])))();
    class IterableProperty extends src__foundation__diagnostics.DiagnosticsProperty$(core.Iterable$(T)) {
      valueToString(opts) {
        let t4;
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        if (dart.test(this.value[$isEmpty])) {
          t4 = this.ifEmpty;
          return t4 == null ? "[]" : t4;
        }
        if (parentConfiguration != null && !dart.test(parentConfiguration.lineBreakProperties)) {
          return "[" + dart.str(this.value[$join](", ")) + "]";
        }
        return this.value[$join](dart.equals(this.style, src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine) ? ", " : "\n");
      }
      get level() {
        if (this.ifEmpty == null && this.value != null && dart.test(this.value[$isEmpty]) && !dart.equals(super.level, src__foundation__diagnostics.DiagnosticLevel.hidden)) return src__foundation__diagnostics.DiagnosticLevel.fine;
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.value != null) {
          json[$_set]("values", this.value[$map](core.String, dart.fn(value => dart.toString(value), TToString()))[$toList]());
        }
        return json;
      }
    }
    (IterableProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let ifEmpty = opts && 'ifEmpty' in opts ? opts.ifEmpty : "[]";
      let style = opts && 'style' in opts ? opts.style : src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine;
      let showName = opts && 'showName' in opts ? opts.showName : true;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(style != null)) dart.assertFailed();
      if (!(showName != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      IterableProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, ifNull: ifNull, ifEmpty: ifEmpty, style: style, showName: showName, level: level});
      ;
    }).prototype = IterableProperty.prototype;
    dart.addTypeTests(IterableProperty);
    IterableProperty.prototype[_is_IterableProperty_default] = true;
    return IterableProperty;
  });
  src__foundation__diagnostics.IterableProperty = src__foundation__diagnostics.IterableProperty$();
  dart.addTypeTests(src__foundation__diagnostics.IterableProperty, _is_IterableProperty_default);
  const _is_EnumProperty_default = Symbol('_is_EnumProperty_default');
  src__foundation__diagnostics.EnumProperty$ = dart.generic(T => {
    class EnumProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value == null) return dart.toString(this.value);
        return src__foundation__diagnostics.describeEnum(this.value);
      }
    }
    (EnumProperty.new = function(name, value, opts) {
      let defaultValue = opts && 'defaultValue' in opts ? opts.defaultValue : src__foundation__diagnostics.kNoDefaultValue;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(level != null)) dart.assertFailed();
      EnumProperty.__proto__.new.call(this, name, value, {defaultValue: defaultValue, level: level});
      ;
    }).prototype = EnumProperty.prototype;
    dart.addTypeTests(EnumProperty);
    EnumProperty.prototype[_is_EnumProperty_default] = true;
    return EnumProperty;
  });
  src__foundation__diagnostics.EnumProperty = src__foundation__diagnostics.EnumProperty$();
  dart.addTypeTests(src__foundation__diagnostics.EnumProperty, _is_EnumProperty_default);
  const _is_ObjectFlagProperty_default = Symbol('_is_ObjectFlagProperty_default');
  src__foundation__diagnostics.ObjectFlagProperty$ = dart.generic(T => {
    class ObjectFlagProperty extends src__foundation__diagnostics.DiagnosticsProperty$(T) {
      get ifPresent() {
        return this[ifPresent$];
      }
      set ifPresent(value) {
        super.ifPresent = value;
      }
      valueToString(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        if (this.value != null) {
          if (this.ifPresent != null) return this.ifPresent;
        } else {
          if (this.ifNull != null) return this.ifNull;
        }
        return super.valueToString({parentConfiguration: parentConfiguration});
      }
      get showName() {
        if (this.value != null && this.ifPresent == null || this.value == null && this.ifNull == null) {
          return true;
        }
        return super.showName;
      }
      get level() {
        if (this.value != null) {
          if (this.ifPresent == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        } else {
          if (this.ifNull == null) return src__foundation__diagnostics.DiagnosticLevel.hidden;
        }
        return super.level;
      }
      toJsonMap() {
        let json = super.toJsonMap();
        if (this.ifPresent != null) json[$_set]("ifPresent", this.ifPresent);
        return json;
      }
    }
    (ObjectFlagProperty.new = function(name, value, opts) {
      let ifPresent = opts && 'ifPresent' in opts ? opts.ifPresent : null;
      let ifNull = opts && 'ifNull' in opts ? opts.ifNull : null;
      let showName = opts && 'showName' in opts ? opts.showName : false;
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      this[ifPresent$] = ifPresent;
      if (!(ifPresent != null || ifNull != null)) dart.assertFailed();
      if (!(showName != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: showName, ifNull: ifNull, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    (ObjectFlagProperty.has = function(name, value, opts) {
      let level = opts && 'level' in opts ? opts.level : src__foundation__diagnostics.DiagnosticLevel.info;
      if (!(name != null)) dart.assertFailed();
      if (!(level != null)) dart.assertFailed();
      this[ifPresent$] = "has " + dart.str(name);
      ObjectFlagProperty.__proto__.new.call(this, name, value, {showName: false, level: level});
      ;
    }).prototype = ObjectFlagProperty.prototype;
    dart.addTypeTests(ObjectFlagProperty);
    ObjectFlagProperty.prototype[_is_ObjectFlagProperty_default] = true;
    const ifPresent$ = Symbol("ObjectFlagProperty.ifPresent");
    dart.setGetterSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getGetters(ObjectFlagProperty.__proto__),
      showName: core.bool
    }));
    dart.setFieldSignature(ObjectFlagProperty, () => ({
      __proto__: dart.getFields(ObjectFlagProperty.__proto__),
      ifPresent: dart.finalFieldType(core.String)
    }));
    return ObjectFlagProperty;
  });
  src__foundation__diagnostics.ObjectFlagProperty = src__foundation__diagnostics.ObjectFlagProperty$();
  dart.addTypeTests(src__foundation__diagnostics.ObjectFlagProperty, _is_ObjectFlagProperty_default);
  const _cachedBuilder = dart.privateName(src__foundation__diagnostics, "_cachedBuilder");
  const _builder = dart.privateName(src__foundation__diagnostics, "_builder");
  let const$1;
  const _is_DiagnosticableNode_default = Symbol('_is_DiagnosticableNode_default');
  src__foundation__diagnostics.DiagnosticableNode$ = dart.generic(T => {
    class DiagnosticableNode extends src__foundation__diagnostics.DiagnosticsNode {
      get value() {
        return this[value$];
      }
      set value(value) {
        super.value = value;
      }
      get [_builder]() {
        let t4;
        if (this[_cachedBuilder] == null) {
          this[_cachedBuilder] = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
          if (dart.test(src__util.assertionsEnabled)) {
            t4 = this.value;
            t4 == null ? null : t4.debugFillProperties(this[_cachedBuilder]);
          }
        }
        return this[_cachedBuilder];
      }
      get style() {
        let t4;
        t4 = super.style;
        return t4 == null ? this[_builder].defaultDiagnosticsTreeStyle : t4;
      }
      get emptyBodyDescription() {
        return this[_builder].emptyBodyDescription;
      }
      getProperties() {
        return this[_builder].properties;
      }
      getChildren() {
        return const$1 || (const$1 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      toDescription(opts) {
        let parentConfiguration = opts && 'parentConfiguration' in opts ? opts.parentConfiguration : null;
        return this.value.toStringShort();
      }
    }
    (DiagnosticableNode.new = function(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let value = opts && 'value' in opts ? opts.value : null;
      let style = opts && 'style' in opts ? opts.style : null;
      this[_cachedBuilder] = null;
      this[value$] = value;
      if (!(value != null)) dart.assertFailed();
      DiagnosticableNode.__proto__.new.call(this, {name: name, style: style});
      ;
    }).prototype = DiagnosticableNode.prototype;
    dart.addTypeTests(DiagnosticableNode);
    DiagnosticableNode.prototype[_is_DiagnosticableNode_default] = true;
    const value$ = Symbol("DiagnosticableNode.value");
    dart.setMethodSignature(DiagnosticableNode, () => ({
      __proto__: dart.getMethods(DiagnosticableNode.__proto__),
      getProperties: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      getChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
      toDescription: dart.fnType(core.String, [], {parentConfiguration: src__foundation__diagnostics.TextTreeConfiguration})
    }));
    dart.setGetterSignature(DiagnosticableNode, () => ({
      __proto__: dart.getGetters(DiagnosticableNode.__proto__),
      [_builder]: src__foundation__diagnostics.DiagnosticPropertiesBuilder,
      style: src__foundation__diagnostics.DiagnosticsTreeStyle
    }));
    dart.setFieldSignature(DiagnosticableNode, () => ({
      __proto__: dart.getFields(DiagnosticableNode.__proto__),
      value: dart.finalFieldType(T),
      [_cachedBuilder]: dart.fieldType(src__foundation__diagnostics.DiagnosticPropertiesBuilder)
    }));
    return DiagnosticableNode;
  });
  src__foundation__diagnostics.DiagnosticableNode = src__foundation__diagnostics.DiagnosticableNode$();
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableNode, _is_DiagnosticableNode_default);
  let const$2;
  let const$3;
  src__foundation__diagnostics.Diagnosticable = class Diagnosticable extends core.Object {
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toString(opts) {
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new (DiagnosticableNodeOfDiagnosticable()).new({name: name, value: this, style: style});
    }
    debugFillProperties(properties) {
    }
  };
  (src__foundation__diagnostics.Diagnosticable.new = function() {
    ;
  }).prototype = src__foundation__diagnostics.Diagnosticable.prototype;
  dart.addTypeTests(src__foundation__diagnostics.Diagnosticable);
  dart.setMethodSignature(src__foundation__diagnostics.Diagnosticable, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.Diagnosticable.__proto__),
    toStringShort: dart.fnType(core.String, []),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  dart.defineExtensionMethods(src__foundation__diagnostics.Diagnosticable, ['toString']);
  src__foundation__diagnostics.DiagnosticableTree = class DiagnosticableTree extends src__foundation__diagnostics.Diagnosticable {
    toStringShallow(opts) {
      let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      let result = new core.StringBuffer.new();
      result.write(this.toString());
      result.write(joiner);
      let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
      if (dart.test(src__util.assertionsEnabled)) {
        this.debugFillProperties(builder);
      }
      result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
      return result.toString();
    }
    toStringDeep(opts) {
      let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
      let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
      let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
      return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
    }
    toStringShort() {
      return src__foundation__diagnostics.describeIdentity(this);
    }
    toDiagnosticsNode(opts) {
      let name = opts && 'name' in opts ? opts.name : null;
      let style = opts && 'style' in opts ? opts.style : null;
      return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
    }
    debugDescribeChildren() {
      return const$3 || (const$3 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics.DiagnosticableTree.new = function() {
    src__foundation__diagnostics.DiagnosticableTree.__proto__.new.call(this);
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticableTree.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTree);
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTree, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTree.__proto__),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), [])
  }));
  src__foundation__diagnostics._DiagnosticableTreeNode = class _DiagnosticableTreeNode extends src__foundation__diagnostics.DiagnosticableNode$(src__foundation__diagnostics.DiagnosticableTree) {
    getChildren() {
      if (this.value != null) return this.value.debugDescribeChildren();
      return const$2 || (const$2 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
    }
  };
  (src__foundation__diagnostics._DiagnosticableTreeNode.new = function(opts) {
    let name = opts && 'name' in opts ? opts.name : null;
    let value = opts && 'value' in opts ? opts.value : null;
    let style = opts && 'style' in opts ? opts.style : null;
    src__foundation__diagnostics._DiagnosticableTreeNode.__proto__.new.call(this, {name: name, value: value, style: style});
    ;
  }).prototype = src__foundation__diagnostics._DiagnosticableTreeNode.prototype;
  dart.addTypeTests(src__foundation__diagnostics._DiagnosticableTreeNode);
  src__foundation__diagnostics.DiagnosticPropertiesBuilder = class DiagnosticPropertiesBuilder extends core.Object {
    get properties() {
      return this[properties];
    }
    set properties(value) {
      super.properties = value;
    }
    get defaultDiagnosticsTreeStyle() {
      return this[defaultDiagnosticsTreeStyle];
    }
    set defaultDiagnosticsTreeStyle(value) {
      this[defaultDiagnosticsTreeStyle] = value;
    }
    get emptyBodyDescription() {
      return this[emptyBodyDescription];
    }
    set emptyBodyDescription(value) {
      this[emptyBodyDescription] = value;
    }
    add(property) {
      this.properties[$add](property);
    }
  };
  (src__foundation__diagnostics.DiagnosticPropertiesBuilder.new = function() {
    this[properties] = JSArrayOfDiagnosticsNode().of([]);
    this[defaultDiagnosticsTreeStyle] = src__foundation__diagnostics.DiagnosticsTreeStyle.sparse;
    this[emptyBodyDescription] = null;
    ;
  }).prototype = src__foundation__diagnostics.DiagnosticPropertiesBuilder.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticPropertiesBuilder);
  const properties = Symbol("DiagnosticPropertiesBuilder.properties");
  const defaultDiagnosticsTreeStyle = Symbol("DiagnosticPropertiesBuilder.defaultDiagnosticsTreeStyle");
  const emptyBodyDescription = Symbol("DiagnosticPropertiesBuilder.emptyBodyDescription");
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    add: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticsNode])
  }));
  dart.setFieldSignature(src__foundation__diagnostics.DiagnosticPropertiesBuilder, () => ({
    __proto__: dart.getFields(src__foundation__diagnostics.DiagnosticPropertiesBuilder.__proto__),
    properties: dart.finalFieldType(core.List$(src__foundation__diagnostics.DiagnosticsNode)),
    defaultDiagnosticsTreeStyle: dart.fieldType(src__foundation__diagnostics.DiagnosticsTreeStyle),
    emptyBodyDescription: dart.fieldType(core.String)
  }));
  let const$4;
  src__foundation__diagnostics.DiagnosticableTreeMixin = class DiagnosticableTreeMixin extends core.Object {};
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinOn] = Object => {
    class DiagnosticableTreeMixin extends Object {
      toString(opts) {
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode({style: src__foundation__diagnostics.DiagnosticsTreeStyle.singleLine}).toString({minLevel: minLevel});
      }
      toStringShallow(opts) {
        let joiner = opts && 'joiner' in opts ? opts.joiner : ", ";
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        let result = new core.StringBuffer.new();
        result.write(this.toStringShort());
        result.write(joiner);
        let builder = new src__foundation__diagnostics.DiagnosticPropertiesBuilder.new();
        if (dart.test(src__util.assertionsEnabled)) {
          this.debugFillProperties(builder);
        }
        result.write(builder.properties[$where](dart.fn(n => !dart.test(n.isFiltered(minLevel)), DiagnosticsNodeTobool()))[$join](joiner));
        return result.toString();
      }
      toStringDeep(opts) {
        let prefixLineOne = opts && 'prefixLineOne' in opts ? opts.prefixLineOne : "";
        let prefixOtherLines = opts && 'prefixOtherLines' in opts ? opts.prefixOtherLines : null;
        let minLevel = opts && 'minLevel' in opts ? opts.minLevel : src__foundation__diagnostics.DiagnosticLevel.debug;
        return this.toDiagnosticsNode().toStringDeep({prefixLineOne: prefixLineOne, prefixOtherLines: prefixOtherLines, minLevel: minLevel});
      }
      toStringShort() {
        return src__foundation__diagnostics.describeIdentity(this);
      }
      toDiagnosticsNode(opts) {
        let name = opts && 'name' in opts ? opts.name : null;
        let style = opts && 'style' in opts ? opts.style : null;
        return new src__foundation__diagnostics._DiagnosticableTreeNode.new({name: name, value: this, style: style});
      }
      debugDescribeChildren() {
        return const$4 || (const$4 = dart.constList([], src__foundation__diagnostics.DiagnosticsNode));
      }
      debugFillProperties(properties) {
      }
    }
    dart.defineExtensionMethods(DiagnosticableTreeMixin, ['toString']);
    return DiagnosticableTreeMixin;
  };
  (src__foundation__diagnostics.DiagnosticableTreeMixin[dart.mixinNew] = function() {
  }).prototype = src__foundation__diagnostics.DiagnosticableTreeMixin.prototype;
  dart.addTypeTests(src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__foundation__diagnostics.DiagnosticableTreeMixin[dart.implements] = () => [src__foundation__diagnostics.DiagnosticableTree, core.Object];
  dart.setMethodSignature(src__foundation__diagnostics.DiagnosticableTreeMixin, () => ({
    __proto__: dart.getMethods(src__foundation__diagnostics.DiagnosticableTreeMixin.__proto__),
    toString: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    [$toString]: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringShallow: dart.fnType(core.String, [], {joiner: core.String, minLevel: src__foundation__diagnostics.DiagnosticLevel}),
    toStringDeep: dart.fnType(core.String, [], {minLevel: src__foundation__diagnostics.DiagnosticLevel, prefixLineOne: core.String, prefixOtherLines: core.String}),
    toStringShort: dart.fnType(core.String, []),
    toDiagnosticsNode: dart.fnType(src__foundation__diagnostics.DiagnosticsNode, [], {name: core.String, style: src__foundation__diagnostics.DiagnosticsTreeStyle}),
    debugDescribeChildren: dart.fnType(core.List$(src__foundation__diagnostics.DiagnosticsNode), []),
    debugFillProperties: dart.fnType(dart.void, [src__foundation__diagnostics.DiagnosticPropertiesBuilder])
  }));
  src__foundation__diagnostics.shortHash = function(object) {
    return dart.hashCode(object)[$toUnsigned](20)[$toRadixString](16)[$padLeft](5, "0");
  };
  src__foundation__diagnostics.describeIdentity = function(object) {
    return dart.str(dart.runtimeType(object)) + "#" + dart.str(src__foundation__diagnostics.shortHash(object));
  };
  src__foundation__diagnostics.describeEnum = function(enumEntry) {
    let description = dart.toString(enumEntry);
    let indexOfDot = description[$indexOf](".");
    if (!(indexOfDot !== -1 && indexOfDot < description.length - 1)) dart.assertFailed();
    return description[$substring](indexOfDot + 1);
  };
  src__foundation__diagnostics.debugPrintDouble = function(value) {
    if (value[$floor]() === value) {
      return dart.str(value) + ".0";
    } else
      return dart.toString(value);
  };
  dart.defineLazy(src__foundation__diagnostics, {
    /*src__foundation__diagnostics.sparseTextConfiguration*/get sparseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "├─", prefixOtherLines: " ", prefixLastChildLineOne: "└─", linkCharacter: "│", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.dashedTextConfiguration*/get dashedTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╎╌", prefixLastChildLineOne: "└╌", prefixOtherLines: " ", linkCharacter: "╎", propertyPrefixIfChildren: "│ ", propertyPrefixNoChildren: "  ", prefixOtherLinesRootNode: " "});
    },
    /*src__foundation__diagnostics.denseTextConfiguration*/get denseTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", lineBreakProperties: false, prefixLineOne: "├", prefixOtherLines: "", prefixLastChildLineOne: "└", linkCharacter: "│", propertyPrefixIfChildren: "│", propertyPrefixNoChildren: " ", prefixOtherLinesRootNode: "", addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.transitionTextConfiguration*/get transitionTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "╞═╦══ ", prefixLastChildLineOne: "╘═╦══ ", prefixOtherLines: " ║ ", footer: " ╚═══════════\n", linkCharacter: "│", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", prefixOtherLinesRootNode: "", afterName: " ═══", afterDescriptionIfBody: ":", bodyIndent: "  ", isNameOnOwnLine: true, addBlankLineIfNoChildren: false, isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.whitespaceTextConfiguration*/get whitespaceTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({prefixLineOne: "", prefixLastChildLineOne: "", prefixOtherLines: " ", prefixOtherLinesRootNode: "  ", bodyIndent: "", propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: " ", addBlankLineIfNoChildren: false, afterDescriptionIfBody: ":", isBlankLineBetweenPropertiesAndChildren: false});
    },
    /*src__foundation__diagnostics.singleLineTextConfiguration*/get singleLineTextConfiguration() {
      return new src__foundation__diagnostics.TextTreeConfiguration.new({propertySeparator: ", ", beforeProperties: "(", afterProperties: ")", prefixLineOne: "", prefixOtherLines: "", prefixLastChildLineOne: "", lineBreak: "", lineBreakProperties: false, addBlankLineIfNoChildren: false, showChildren: false, propertyPrefixIfChildren: "", propertyPrefixNoChildren: "", linkCharacter: "", prefixOtherLinesRootNode: ""});
    },
    /*src__foundation__diagnostics.kNoDefaultValue*/get kNoDefaultValue() {
      return dart.const(new src__foundation__diagnostics._NoDefaultValue.new());
    }
  });
  dart.copyProperties(src__util, {
    get assertionsEnabled() {
      let k = false;
      if (!(k = true)) dart.assertFailed();
      return k;
    }
  });
  dart.defineLazy(src__util, {
    /*src__util.debugIsInTest*/get debugIsInTest() {
      return false;
    },
    set debugIsInTest(_) {}
  });
  src__foundation__isolates.compute = function(Q, R, callback, message, opts) {
    let debugLabel = opts && 'debugLabel' in opts ? opts.debugLabel : null;
    return async.async(R, function* compute() {
      return callback(message);
    });
  };
  const _depth = dart.privateName(src__foundation__node, "_depth");
  const _owner = dart.privateName(src__foundation__node, "_owner");
  const _parent = dart.privateName(src__foundation__node, "_parent");
  src__foundation__node.AbstractNode = class AbstractNode extends core.Object {
    get depth() {
      return this[_depth];
    }
    redepthChild(child) {
      if (!dart.equals(child.owner, this.owner)) dart.assertFailed();
      if (dart.notNull(child[_depth]) <= dart.notNull(this[_depth])) {
        child[_depth] = dart.notNull(this[_depth]) + 1;
        child.redepthChildren();
      }
    }
    redepthChildren() {
    }
    get owner() {
      return this[_owner];
    }
    get attached() {
      return this[_owner] != null;
    }
    attach(owner) {
      if (!(owner != null)) dart.assertFailed();
      if (!(this[_owner] == null)) dart.assertFailed();
      this[_owner] = owner;
    }
    detach() {
      if (!(this[_owner] != null)) dart.assertFailed();
      this[_owner] = null;
      if (!(this.parent == null || dart.equals(this.attached, this.parent.attached))) dart.assertFailed();
    }
    get parent() {
      return this[_parent];
    }
    adoptChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed();
      if (!(child[_parent] == null)) dart.assertFailed();
      if (!dart.test(dart.fn(() => {
        let node = this;
        while (node.parent != null)
          node = node.parent;
        if (!!dart.equals(node, child)) dart.assertFailed();
        return true;
      }, VoidTobool())())) dart.assertFailed();
      child[_parent] = this;
      if (dart.test(this.attached)) {
        child.attach(this[_owner]);
      }
      this.redepthChild(child);
    }
    dropChild(child) {
      src__foundation__node.AbstractNode._check(child);
      if (!(child != null)) dart.assertFailed();
      if (!dart.equals(child[_parent], this)) dart.assertFailed();
      if (!dart.equals(child.attached, this.attached)) dart.assertFailed();
      child[_parent] = null;
      if (dart.test(this.attached)) {
        child.detach();
      }
    }
  };
  (src__foundation__node.AbstractNode.new = function() {
    this[_depth] = 0;
    this[_owner] = null;
    this[_parent] = null;
    ;
  }).prototype = src__foundation__node.AbstractNode.prototype;
  dart.addTypeTests(src__foundation__node.AbstractNode);
  dart.setMethodSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getMethods(src__foundation__node.AbstractNode.__proto__),
    redepthChild: dart.fnType(dart.void, [src__foundation__node.AbstractNode]),
    redepthChildren: dart.fnType(dart.void, []),
    attach: dart.fnType(dart.void, [core.Object]),
    detach: dart.fnType(dart.void, []),
    adoptChild: dart.fnType(dart.void, [core.Object]),
    dropChild: dart.fnType(dart.void, [core.Object])
  }));
  dart.setGetterSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getGetters(src__foundation__node.AbstractNode.__proto__),
    depth: core.int,
    owner: core.Object,
    attached: core.bool,
    parent: src__foundation__node.AbstractNode
  }));
  dart.setFieldSignature(src__foundation__node.AbstractNode, () => ({
    __proto__: dart.getFields(src__foundation__node.AbstractNode.__proto__),
    [_depth]: dart.fieldType(core.int),
    [_owner]: dart.fieldType(core.Object),
    [_parent]: dart.fieldType(src__foundation__node.AbstractNode)
  }));
  const _buffer$ = dart.privateName(src__foundation__serialization, "_buffer");
  const _eightBytes = dart.privateName(src__foundation__serialization, "_eightBytes");
  const _eightBytesAsList = dart.privateName(src__foundation__serialization, "_eightBytesAsList");
  const _alignTo = dart.privateName(src__foundation__serialization, "_alignTo");
  src__foundation__serialization.WriteBuffer = class WriteBuffer extends core.Object {
    putUint8(byte) {
      this[_buffer$].add(byte);
    }
    putUint16(value) {
      this[_eightBytes][$setUint16](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 2);
    }
    putUint32(value) {
      this[_eightBytes][$setUint32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt32(value) {
      this[_eightBytes][$setInt32](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 4);
    }
    putInt64(value) {
      this[_eightBytes][$setInt64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList], 0, 8);
    }
    putFloat64(value) {
      this[_alignTo](8);
      this[_eightBytes][$setFloat64](0, value, typed_data.Endian.host);
      this[_buffer$].addAll(this[_eightBytesAsList]);
    }
    putUint8List(list) {
      this[_buffer$].addAll(list);
    }
    putInt32List(list) {
      this[_alignTo](4);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 4 * dart.notNull(list[$length])));
    }
    putInt64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    putFloat64List(list) {
      this[_alignTo](8);
      this[_buffer$].addAll(list[$buffer][$asUint8List](list[$offsetInBytes], 8 * dart.notNull(list[$length])));
    }
    [_alignTo](alignment) {
      let mod = this[_buffer$].length[$modulo](alignment);
      if (mod !== 0) {
        for (let i = 0; i < dart.notNull(alignment) - mod; i = i + 1)
          this[_buffer$].add(0);
      }
    }
    done() {
      let result = this[_buffer$].buffer[$asByteData](0, this[_buffer$].lengthInBytes);
      this[_buffer$] = null;
      return result;
    }
  };
  (src__foundation__serialization.WriteBuffer.new = function() {
    this[_buffer$] = null;
    this[_eightBytes] = null;
    this[_eightBytesAsList] = null;
    this[_buffer$] = new typed_buffers$.Uint8Buffer.new();
    this[_eightBytes] = _native_typed_data.NativeByteData.new(8);
    this[_eightBytesAsList] = this[_eightBytes][$buffer][$asUint8List]();
  }).prototype = src__foundation__serialization.WriteBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.WriteBuffer);
  dart.setMethodSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.WriteBuffer.__proto__),
    putUint8: dart.fnType(dart.void, [core.int]),
    putUint16: dart.fnType(dart.void, [core.int]),
    putUint32: dart.fnType(dart.void, [core.int]),
    putInt32: dart.fnType(dart.void, [core.int]),
    putInt64: dart.fnType(dart.void, [core.int]),
    putFloat64: dart.fnType(dart.void, [core.double]),
    putUint8List: dart.fnType(dart.void, [typed_data.Uint8List]),
    putInt32List: dart.fnType(dart.void, [typed_data.Int32List]),
    putInt64List: dart.fnType(dart.void, [typed_data.Int64List]),
    putFloat64List: dart.fnType(dart.void, [typed_data.Float64List]),
    [_alignTo]: dart.fnType(dart.void, [core.int]),
    done: dart.fnType(typed_data.ByteData, [])
  }));
  dart.setFieldSignature(src__foundation__serialization.WriteBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.WriteBuffer.__proto__),
    [_buffer$]: dart.fieldType(typed_buffers$.Uint8Buffer),
    [_eightBytes]: dart.fieldType(typed_data.ByteData),
    [_eightBytesAsList]: dart.fieldType(typed_data.Uint8List)
  }));
  const _position = dart.privateName(src__foundation__serialization, "_position");
  src__foundation__serialization.ReadBuffer = class ReadBuffer extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get hasRemaining() {
      return dart.notNull(this[_position]) < dart.notNull(this.data[$lengthInBytes]);
    }
    getUint8() {
      let t4;
      return this.data[$getUint8]((t4 = this[_position], this[_position] = dart.notNull(t4) + 1, t4));
    }
    getUint16() {
      let value = this.data[$getUint16](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 2;
      return value;
    }
    getUint32() {
      let value = this.data[$getUint32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt32() {
      let value = this.data[$getInt32](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 4;
      return value;
    }
    getInt64() {
      let value = this.data[$getInt64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getFloat64() {
      this[_alignTo](8);
      let value = this.data[$getFloat64](this[_position], typed_data.Endian.host);
      this[_position] = dart.notNull(this[_position]) + 8;
      return value;
    }
    getUint8List(length) {
      let list = this.data[$buffer][$asUint8List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + dart.notNull(length);
      return list;
    }
    getInt32List(length) {
      this[_alignTo](4);
      let list = this.data[$buffer][$asInt32List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 4 * dart.notNull(length);
      return list;
    }
    getInt64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asInt64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    getFloat64List(length) {
      this[_alignTo](8);
      let list = this.data[$buffer][$asFloat64List](dart.notNull(this.data[$offsetInBytes]) + dart.notNull(this[_position]), length);
      this[_position] = dart.notNull(this[_position]) + 8 * dart.notNull(length);
      return list;
    }
    [_alignTo](alignment) {
      let mod = this[_position][$modulo](alignment);
      if (mod !== 0) this[_position] = dart.notNull(this[_position]) + (dart.notNull(alignment) - mod);
    }
  };
  (src__foundation__serialization.ReadBuffer.new = function(data) {
    this[_position] = 0;
    this[data$] = data;
    if (!(data != null)) dart.assertFailed();
    ;
  }).prototype = src__foundation__serialization.ReadBuffer.prototype;
  dart.addTypeTests(src__foundation__serialization.ReadBuffer);
  const data$ = Symbol("ReadBuffer.data");
  dart.setMethodSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getMethods(src__foundation__serialization.ReadBuffer.__proto__),
    getUint8: dart.fnType(core.int, []),
    getUint16: dart.fnType(core.int, []),
    getUint32: dart.fnType(core.int, []),
    getInt32: dart.fnType(core.int, []),
    getInt64: dart.fnType(core.int, []),
    getFloat64: dart.fnType(core.double, []),
    getUint8List: dart.fnType(typed_data.Uint8List, [core.int]),
    getInt32List: dart.fnType(typed_data.Int32List, [core.int]),
    getInt64List: dart.fnType(typed_data.Int64List, [core.int]),
    getFloat64List: dart.fnType(typed_data.Float64List, [core.int]),
    [_alignTo]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getGetters(src__foundation__serialization.ReadBuffer.__proto__),
    hasRemaining: core.bool
  }));
  dart.setFieldSignature(src__foundation__serialization.ReadBuffer, () => ({
    __proto__: dart.getFields(src__foundation__serialization.ReadBuffer.__proto__),
    data: dart.finalFieldType(typed_data.ByteData),
    [_position]: dart.fieldType(core.int)
  }));
  dart.trackLibraries("packages/flutter_web/src/foundation/assertions", {
    "package:flutter_web/src/foundation/bitfield.dart": src__foundation__bitfield,
    "package:flutter_web/src/foundation/binding.dart": src__foundation__binding,
    "package:flutter_web/src/foundation/print.dart": src__foundation__print,
    "package:flutter_web/src/foundation/platform.dart": src__foundation__platform,
    "package:flutter_web/src/foundation/debug.dart": src__foundation__debug,
    "package:flutter_web/src/foundation/assertions.dart": src__foundation__assertions,
    "package:flutter_web/src/foundation/basic_types.dart": src__foundation__basic_types,
    "package:flutter_web/src/foundation/constants.dart": src__foundation__constants,
    "package:flutter_web/src/foundation/synchronous_future.dart": src__foundation__synchronous_future,
    "package:flutter_web/src/foundation/unicode.dart": src__foundation__unicode,
    "package:flutter_web/src/foundation/key.dart": src__foundation__key,
    "package:flutter_web/src/foundation/profile.dart": src__foundation__profile,
    "package:flutter_web/src/foundation/collections.dart": src__foundation__collections,
    "package:flutter_web/src/foundation/licenses.dart": src__foundation__licenses,
    "package:flutter_web/src/foundation/observer_list.dart": src__foundation__observer_list,
    "package:flutter_web/src/foundation/change_notifier.dart": src__foundation__change_notifier,
    "package:flutter_web/src/foundation/diagnostics.dart": src__foundation__diagnostics,
    "package:flutter_web/src/util.dart": src__util,
    "package:flutter_web/src/foundation/isolates.dart": src__foundation__isolates,
    "package:flutter_web/src/foundation/node.dart": src__foundation__node,
    "package:flutter_web/src/foundation/serialization.dart": src__foundation__serialization
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/foundation/bitfield.dart","org-dartlang-app:///packages/flutter_web/src/foundation/binding.dart","org-dartlang-app:///packages/flutter_web/src/foundation/print.dart","org-dartlang-app:///packages/flutter_web/src/foundation/platform.dart","org-dartlang-app:///packages/flutter_web/src/foundation/debug.dart","org-dartlang-app:///packages/flutter_web/src/foundation/assertions.dart","org-dartlang-app:///packages/flutter_web/src/foundation/basic_types.dart","org-dartlang-app:///packages/flutter_web/src/foundation/constants.dart","org-dartlang-app:///packages/flutter_web/src/foundation/synchronous_future.dart","org-dartlang-app:///packages/flutter_web/src/foundation/unicode.dart","org-dartlang-app:///packages/flutter_web/src/foundation/key.dart","org-dartlang-app:///packages/flutter_web/src/foundation/profile.dart","org-dartlang-app:///packages/flutter_web/src/foundation/collections.dart","org-dartlang-app:///packages/flutter_web/src/foundation/licenses.dart","org-dartlang-app:///packages/flutter_web/src/foundation/observer_list.dart","org-dartlang-app:///packages/flutter_web/src/foundation/change_notifier.dart","org-dartlang-app:///packages/flutter_web/src/foundation/diagnostics.dart","org-dartlang-app:///packages/flutter_web/src/util.dart","org-dartlang-app:///packages/flutter_web/src/foundation/isolates.dart","org-dartlang-app:///packages/flutter_web/src/foundation/node.dart","org-dartlang-app:///packages/flutter_web/src/foundation/serialization.dart"],"names":[],"mappings":"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","file":"assertions.ddc.js"}');
  // Exports:
  return {
    src__foundation__bitfield: src__foundation__bitfield,
    src__foundation__binding: src__foundation__binding,
    src__foundation__print: src__foundation__print,
    src__foundation__platform: src__foundation__platform,
    src__foundation__debug: src__foundation__debug,
    src__foundation__assertions: src__foundation__assertions,
    src__foundation__basic_types: src__foundation__basic_types,
    src__foundation__constants: src__foundation__constants,
    src__foundation__synchronous_future: src__foundation__synchronous_future,
    src__foundation__unicode: src__foundation__unicode,
    src__foundation__key: src__foundation__key,
    src__foundation__profile: src__foundation__profile,
    src__foundation__collections: src__foundation__collections,
    src__foundation__licenses: src__foundation__licenses,
    src__foundation__observer_list: src__foundation__observer_list,
    src__foundation__change_notifier: src__foundation__change_notifier,
    src__foundation__diagnostics: src__foundation__diagnostics,
    src__util: src__util,
    src__foundation__isolates: src__foundation__isolates,
    src__foundation__node: src__foundation__node,
    src__foundation__serialization: src__foundation__serialization
  };
});

//# sourceMappingURL=assertions.ddc.js.map
