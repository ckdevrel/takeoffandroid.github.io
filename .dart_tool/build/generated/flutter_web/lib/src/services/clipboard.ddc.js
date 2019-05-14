define(['dart_sdk', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web_ui/ui', 'packages/flutter_web/io'], function(dart_sdk, assertions, ui, io) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const typed_data = dart_sdk.typed_data;
  const _js_helper = dart_sdk._js_helper;
  const convert = dart_sdk.convert;
  const _interceptors = dart_sdk._interceptors;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__serialization = assertions.src__foundation__serialization;
  const ui$ = ui.ui;
  const io$ = io.io;
  const src__services__system_navigator = Object.create(dart.library);
  const src__services__system_channels = Object.create(dart.library);
  const src__services__platform_channel = Object.create(dart.library);
  const src__services__platform_messages = Object.create(dart.library);
  const src__services__message_codecs = Object.create(dart.library);
  const src__services__message_codec = Object.create(dart.library);
  const src__services__text_editing = Object.create(dart.library);
  const src__services__text_input = Object.create(dart.library);
  const src__services__system_chrome = Object.create(dart.library);
  const src__services__system_sound = Object.create(dart.library);
  const src__services__raw_keyboard = Object.create(dart.library);
  const src__services__raw_keyboard_fuschia = Object.create(dart.library);
  const src__services__raw_keyboard_android = Object.create(dart.library);
  const src__services__platform_views = Object.create(dart.library);
  const src__services__text_formatter = Object.create(dart.library);
  const src__services__haptic_feedback = Object.create(dart.library);
  const src__services__clipboard = Object.create(dart.library);
  const $cast = dartx.cast;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $remove = dartx.remove;
  const $_set = dartx._set;
  const $buffer = dartx.buffer;
  const $asUint8List = dartx.asUint8List;
  const $asByteData = dartx.asByteData;
  const $length = dartx.length;
  const $forEach = dartx.forEach;
  const $lengthInBytes = dartx.lengthInBytes;
  const $runtimeType = dartx.runtimeType;
  const $substring = dartx.substring;
  const $hashCode = dartx.hashCode;
  const $contains = dartx.contains;
  const $add = dartx.add;
  const $isEmpty = dartx.isEmpty;
  const $map = dartx.map;
  const $toList = dartx.toList;
  const $replaceAll = dartx.replaceAll;
  const $runes = dartx.runes;
  const $allMatches = dartx.allMatches;
  const $join = dartx.join;
  let BasicMessageChannelOfString = () => (BasicMessageChannelOfString = dart.constFn(src__services__platform_channel.BasicMessageChannel$(core.String)))();
  let FutureOfByteData = () => (FutureOfByteData = dart.constFn(async.Future$(typed_data.ByteData)))();
  let ByteDataToFutureOfByteData = () => (ByteDataToFutureOfByteData = dart.constFn(dart.fnType(FutureOfByteData(), [typed_data.ByteData])))();
  let FutureOrOfByteData = () => (FutureOrOfByteData = dart.constFn(async.FutureOr$(typed_data.ByteData)))();
  let FutureOfNull = () => (FutureOfNull = dart.constFn(async.Future$(core.Null)))();
  let VoidToFutureOfNull = () => (VoidToFutureOfNull = dart.constFn(dart.fnType(FutureOfNull(), [])))();
  let CompleterOfByteData = () => (CompleterOfByteData = dart.constFn(async.Completer$(typed_data.ByteData)))();
  let ByteDataToNull = () => (ByteDataToNull = dart.constFn(dart.fnType(core.Null, [typed_data.ByteData])))();
  let IdentityMapOfString$ByteDataToFutureOfByteData = () => (IdentityMapOfString$ByteDataToFutureOfByteData = dart.constFn(_js_helper.IdentityMap$(core.String, ByteDataToFutureOfByteData())))();
  let IdentityMapOfString$dynamic = () => (IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))();
  let dynamicAnddynamicToNull = () => (dynamicAnddynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic, dart.dynamic])))();
  let MapOfString$dynamic = () => (MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfString = () => (JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))();
  let LinkedMapOfModifierKey$KeyboardSide = () => (LinkedMapOfModifierKey$KeyboardSide = dart.constFn(_js_helper.LinkedMap$(src__services__raw_keyboard.ModifierKey, src__services__raw_keyboard.KeyboardSide)))();
  let RawKeyEventTovoid = () => (RawKeyEventTovoid = dart.constFn(dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])))();
  let JSArrayOfRawKeyEventTovoid = () => (JSArrayOfRawKeyEventTovoid = dart.constFn(_interceptors.JSArray$(RawKeyEventTovoid())))();
  let ListOfRawKeyEventTovoid = () => (ListOfRawKeyEventTovoid = dart.constFn(core.List$(RawKeyEventTovoid())))();
  let intAndintAndintToKeyboardSide = () => (intAndintAndintToKeyboardSide = dart.constFn(dart.fnType(src__services__raw_keyboard.KeyboardSide, [core.int, core.int, core.int])))();
  let intAndintToKeyboardSide = () => (intAndintToKeyboardSide = dart.constFn(dart.fnType(src__services__raw_keyboard.KeyboardSide, [core.int, core.int])))();
  let JSArrayOfint = () => (JSArrayOfint = dart.constFn(_interceptors.JSArray$(core.int)))();
  let JSArrayOfdouble = () => (JSArrayOfdouble = dart.constFn(_interceptors.JSArray$(core.double)))();
  let ListOfint = () => (ListOfint = dart.constFn(core.List$(core.int)))();
  let AndroidPointerPropertiesToListOfint = () => (AndroidPointerPropertiesToListOfint = dart.constFn(dart.fnType(ListOfint(), [src__services__platform_views.AndroidPointerProperties])))();
  let ListOfdouble = () => (ListOfdouble = dart.constFn(core.List$(core.double)))();
  let AndroidPointerCoordsToListOfdouble = () => (AndroidPointerCoordsToListOfdouble = dart.constFn(dart.fnType(ListOfdouble(), [src__services__platform_views.AndroidPointerCoords])))();
  let StringToString = () => (StringToString = dart.constFn(dart.fnType(core.String, [core.String])))();
  let MatchToString = () => (MatchToString = dart.constFn(dart.fnType(core.String, [core.Match])))();
  src__services__system_navigator.SystemNavigator = class SystemNavigator extends core.Object {
    static pop() {
      return async.async(dart.void, function* pop() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemNavigator.pop");
      });
    }
  };
  (src__services__system_navigator.SystemNavigator.__ = function() {
    ;
  }).prototype = src__services__system_navigator.SystemNavigator.prototype;
  dart.addTypeTests(src__services__system_navigator.SystemNavigator);
  src__services__system_channels.SystemChannels = class SystemChannels extends core.Object {};
  (src__services__system_channels.SystemChannels.__ = function() {
    ;
  }).prototype = src__services__system_channels.SystemChannels.prototype;
  dart.addTypeTests(src__services__system_channels.SystemChannels);
  dart.defineLazy(src__services__system_channels.SystemChannels, {
    /*src__services__system_channels.SystemChannels.navigation*/get navigation() {
      return dart.const(new src__services__platform_channel.MethodChannel.new("flutter/navigation", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.platform*/get platform() {
      return dart.const(new src__services__platform_channel.OptionalMethodChannel.new("flutter/platform", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.textInput*/get textInput() {
      return dart.const(new src__services__platform_channel.OptionalMethodChannel.new("flutter/textinput", dart.const(new src__services__message_codecs.JSONMethodCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.keyEvent*/get keyEvent() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/keyevent", dart.const(new src__services__message_codecs.JSONMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.lifecycle*/get lifecycle() {
      return dart.const(new (BasicMessageChannelOfString()).new("flutter/lifecycle", dart.const(new src__services__message_codecs.StringCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.system*/get system() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/system", dart.const(new src__services__message_codecs.JSONMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.accessibility*/get accessibility() {
      return dart.const(new src__services__platform_channel.BasicMessageChannel.new("flutter/accessibility", dart.const(new src__services__message_codecs.StandardMessageCodec.new())));
    },
    /*src__services__system_channels.SystemChannels.platform_views*/get platform_views() {
      return dart.const(new src__services__platform_channel.MethodChannel.new("flutter/platform_views", dart.const(new src__services__message_codecs.StandardMethodCodec.new())));
    }
  });
  const _is_BasicMessageChannel_default = Symbol('_is_BasicMessageChannel_default');
  src__services__platform_channel.BasicMessageChannel$ = dart.generic(T => {
    let FutureOfT = () => (FutureOfT = dart.constFn(async.Future$(T)))();
    let TToFutureOfT = () => (TToFutureOfT = dart.constFn(dart.fnType(FutureOfT(), [T])))();
    class BasicMessageChannel extends core.Object {
      get name() {
        return this[name$];
      }
      set name(value) {
        super.name = value;
      }
      get codec() {
        return this[codec$];
      }
      set codec(value) {
        super.codec = value;
      }
      send(message) {
        T._check(message);
        return async.async(T, (function* send() {
          return this.codec.decodeMessage(yield src__services__platform_messages.BinaryMessages.send(this.name, this.codec.encodeMessage(message)));
        }).bind(this));
      }
      setMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, null);
        } else {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
      setMockMessageHandler(handler) {
        TToFutureOfT()._check(handler);
        if (handler == null) {
          src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, null);
        } else {
          src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, dart.fn(message => async.async(typed_data.ByteData, (function*() {
            return this.codec.encodeMessage(yield handler(this.codec.decodeMessage(message)));
          }).bind(this)), ByteDataToFutureOfByteData()));
        }
      }
    }
    (BasicMessageChannel.new = function(name, codec) {
      this[name$] = name;
      this[codec$] = codec;
      ;
    }).prototype = BasicMessageChannel.prototype;
    dart.addTypeTests(BasicMessageChannel);
    BasicMessageChannel.prototype[_is_BasicMessageChannel_default] = true;
    const name$ = Symbol("BasicMessageChannel.name");
    const codec$ = Symbol("BasicMessageChannel.codec");
    dart.setMethodSignature(BasicMessageChannel, () => ({
      __proto__: dart.getMethods(BasicMessageChannel.__proto__),
      send: dart.fnType(async.Future$(T), [core.Object]),
      setMessageHandler: dart.fnType(dart.void, [core.Object]),
      setMockMessageHandler: dart.fnType(dart.void, [core.Object])
    }));
    dart.setFieldSignature(BasicMessageChannel, () => ({
      __proto__: dart.getFields(BasicMessageChannel.__proto__),
      name: dart.finalFieldType(core.String),
      codec: dart.finalFieldType(src__services__message_codec.MessageCodec$(T))
    }));
    return BasicMessageChannel;
  });
  src__services__platform_channel.BasicMessageChannel = src__services__platform_channel.BasicMessageChannel$();
  dart.addTypeTests(src__services__platform_channel.BasicMessageChannel, _is_BasicMessageChannel_default);
  let const$;
  const _handleAsMethodCall = dart.privateName(src__services__platform_channel, "_handleAsMethodCall");
  src__services__platform_channel.MethodChannel = class MethodChannel extends core.Object {
    get name() {
      return this[name$];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$];
    }
    set codec(value) {
      super.codec = value;
    }
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod() {
        if (!(method != null)) dart.assertFailed();
        let result = (yield src__services__platform_messages.BinaryMessages.send(this.name, this.codec.encodeMethodCall(new src__services__message_codec.MethodCall.new(method, arguments$0))));
        if (result == null) {
          dart.throw(new src__services__message_codec.MissingPluginException.new("No implementation found for method " + dart.str(method) + " on channel " + dart.str(this.name)));
        }
        let typedResult = T._check(this.codec.decodeEnvelope(result));
        return typedResult;
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return result[$cast](K, V);
      }).bind(this));
    }
    setMethodCallHandler(handler) {
      src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    setMockMethodCallHandler(handler) {
      src__services__platform_messages.BinaryMessages.setMockMessageHandler(this.name, handler == null ? null : dart.fn(message => this[_handleAsMethodCall](message, handler), ByteDataToFutureOfByteData()));
    }
    [_handleAsMethodCall](message, handler) {
      return async.async(typed_data.ByteData, (function* _handleAsMethodCall() {
        let call = this.codec.decodeMethodCall(message);
        try {
          return this.codec.encodeSuccessEnvelope(yield handler(call));
        } catch (e$) {
          let ex = dart.getThrown(e$);
          if (src__services__message_codec.PlatformException.is(ex)) {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: e.code, message: e.message, details: e.details});
          } else if (src__services__message_codec.MissingPluginException.is(ex)) {
            return null;
          } else {
            let e = ex;
            return this.codec.encodeErrorEnvelope({code: "error", message: dart.toString(e), details: null});
          }
        }
      }).bind(this));
    }
  };
  (src__services__platform_channel.MethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$ || (const$ = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    this[name$] = name;
    this[codec$] = codec;
    ;
  }).prototype = src__services__platform_channel.MethodChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.MethodChannel);
  const name$ = Symbol("MethodChannel.name");
  const codec$ = Symbol("MethodChannel.codec");
  dart.setMethodSignature(src__services__platform_channel.MethodChannel, () => ({
    __proto__: dart.getMethods(src__services__platform_channel.MethodChannel.__proto__),
    invokeMethod: dart.gFnType(T => [async.Future$(T), [core.String], [dart.dynamic]]),
    invokeListMethod: dart.gFnType(T => [async.Future$(core.List$(T)), [core.String], [dart.dynamic]]),
    invokeMapMethod: dart.gFnType((K, V) => [async.Future$(core.Map$(K, V)), [core.String], [dart.dynamic]]),
    setMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [src__services__message_codec.MethodCall])]),
    setMockMethodCallHandler: dart.fnType(dart.void, [dart.fnType(async.Future, [src__services__message_codec.MethodCall])]),
    [_handleAsMethodCall]: dart.fnType(async.Future$(typed_data.ByteData), [typed_data.ByteData, dart.fnType(async.Future, [src__services__message_codec.MethodCall])])
  }));
  dart.setFieldSignature(src__services__platform_channel.MethodChannel, () => ({
    __proto__: dart.getFields(src__services__platform_channel.MethodChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(src__services__message_codec.MethodCodec)
  }));
  let const$0;
  const invokeMethod = Symbol("invokeMethod");
  src__services__platform_channel.OptionalMethodChannel = class OptionalMethodChannel extends src__services__platform_channel.MethodChannel {
    invokeMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(T, (function* invokeMethod$() {
        try {
          let result = (yield this[invokeMethod](T, method, arguments$0));
          return result;
        } catch (e) {
          let ex = dart.getThrown(e);
          if (src__services__message_codec.MissingPluginException.is(ex)) {
            return null;
          } else
            throw e;
        }
      }).bind(this));
    }
    invokeListMethod(T, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.List$(T), (function* invokeListMethod() {
        let result = (yield this.invokeMethod(core.List, method, arguments$0));
        return result[$cast](T);
      }).bind(this));
    }
    invokeMapMethod(K, V, method, arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      return async.async(core.Map$(K, V), (function* invokeMapMethod() {
        let result = (yield this.invokeMethod(core.Map, method, arguments$0));
        return result[$cast](K, V);
      }).bind(this));
    }
    [invokeMethod](T, method, arguments$0) {
      return super.invokeMethod(T, method, arguments$0);
    }
  };
  (src__services__platform_channel.OptionalMethodChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$0 || (const$0 = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    src__services__platform_channel.OptionalMethodChannel.__proto__.new.call(this, name, codec);
    ;
  }).prototype = src__services__platform_channel.OptionalMethodChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.OptionalMethodChannel);
  let const$1;
  src__services__platform_channel.EventChannel = class EventChannel extends core.Object {
    get name() {
      return this[name$0];
    }
    set name(value) {
      super.name = value;
    }
    get codec() {
      return this[codec$0];
    }
    set codec(value) {
      super.codec = value;
    }
    receiveBroadcastStream(arguments$0) {
      if (arguments$0 === void 0) arguments$0 = null;
      let methodChannel = new src__services__platform_channel.MethodChannel.new(this.name, this.codec);
      let controller = null;
      controller = async.StreamController.broadcast({onListen: dart.fn(() => async.async(core.Null, (function*() {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, dart.fn(reply => async.async(typed_data.ByteData, (function*() {
            if (reply == null) {
              controller.close();
            } else {
              try {
                controller.add(this.codec.decodeEnvelope(reply));
              } catch (e$) {
                let e = dart.getThrown(e$);
                if (src__services__message_codec.PlatformException.is(e)) {
                  controller.addError(e);
                } else
                  throw e$;
              }
            }
            return FutureOrOfByteData()._check(async.Future.value(null));
          }).bind(this)), ByteDataToFutureOfByteData()));
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "listen", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "while activating platform stream on channel " + dart.str(this.name)}));
          }
        }).bind(this)), VoidToFutureOfNull()), onCancel: dart.fn(() => async.async(core.Null, (function*() {
          src__services__platform_messages.BinaryMessages.setMessageHandler(this.name, null);
          try {
            yield methodChannel.invokeMethod(dart.dynamic, "cancel", arguments$0);
          } catch (e) {
            let exception = dart.getThrown(e);
            let stack = dart.stackTrace(e);
            src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "while de-activating platform stream on channel " + dart.str(this.name)}));
          }
        }).bind(this)), VoidToFutureOfNull())});
      return controller.stream;
    }
  };
  (src__services__platform_channel.EventChannel.new = function(name, codec) {
    if (codec === void 0) codec = const$1 || (const$1 = dart.const(new src__services__message_codecs.StandardMethodCodec.new()));
    this[name$0] = name;
    this[codec$0] = codec;
    ;
  }).prototype = src__services__platform_channel.EventChannel.prototype;
  dart.addTypeTests(src__services__platform_channel.EventChannel);
  const name$0 = Symbol("EventChannel.name");
  const codec$0 = Symbol("EventChannel.codec");
  dart.setMethodSignature(src__services__platform_channel.EventChannel, () => ({
    __proto__: dart.getMethods(src__services__platform_channel.EventChannel.__proto__),
    receiveBroadcastStream: dart.fnType(async.Stream, [], [dart.dynamic])
  }));
  dart.setFieldSignature(src__services__platform_channel.EventChannel, () => ({
    __proto__: dart.getFields(src__services__platform_channel.EventChannel.__proto__),
    name: dart.finalFieldType(core.String),
    codec: dart.finalFieldType(src__services__message_codec.MethodCodec)
  }));
  src__services__platform_messages.BinaryMessages = class BinaryMessages extends core.Object {
    static _sendPlatformMessage(channel, message) {
      let completer = CompleterOfByteData().new();
      ui$.window.sendPlatformMessage(channel, message, dart.fn(reply => {
        try {
          completer.complete(reply);
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "during a platform message response callback"}));
        }
      }, ByteDataToNull()));
      return completer.future;
    }
    static handlePlatformMessage(channel, data, callback) {
      return async.async(dart.void, function* handlePlatformMessage() {
        let response = null;
        try {
          let handler = src__services__platform_messages.BinaryMessages._handlers[$_get](channel);
          if (handler != null) {
            response = (yield handler(data));
          }
        } catch (e) {
          let exception = dart.getThrown(e);
          let stack = dart.stackTrace(e);
          src__foundation__assertions.FlutterError.reportError(new src__foundation__assertions.FlutterErrorDetails.new({exception: exception, stack: stack, library: "services library", context: "during a platform message callback"}));
        } finally {
          callback(response);
        }
      });
    }
    static send(channel, message) {
      let handler = src__services__platform_messages.BinaryMessages._mockHandlers[$_get](channel);
      if (handler != null) return handler(message);
      return src__services__platform_messages.BinaryMessages._sendPlatformMessage(channel, message);
    }
    static setMessageHandler(channel, handler) {
      if (handler == null)
        src__services__platform_messages.BinaryMessages._handlers[$remove](channel);
      else
        src__services__platform_messages.BinaryMessages._handlers[$_set](channel, handler);
    }
    static setMockMessageHandler(channel, handler) {
      if (handler == null)
        src__services__platform_messages.BinaryMessages._mockHandlers[$remove](channel);
      else
        src__services__platform_messages.BinaryMessages._mockHandlers[$_set](channel, handler);
    }
  };
  (src__services__platform_messages.BinaryMessages.__ = function() {
    ;
  }).prototype = src__services__platform_messages.BinaryMessages.prototype;
  dart.addTypeTests(src__services__platform_messages.BinaryMessages);
  dart.defineLazy(src__services__platform_messages.BinaryMessages, {
    /*src__services__platform_messages.BinaryMessages._handlers*/get _handlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    },
    /*src__services__platform_messages.BinaryMessages._mockHandlers*/get _mockHandlers() {
      return new (IdentityMapOfString$ByteDataToFutureOfByteData()).new();
    }
  });
  src__services__message_codecs.BinaryCodec = class BinaryCodec extends core.Object {
    decodeMessage(message) {
      return message;
    }
    encodeMessage(message) {
      typed_data.ByteData._check(message);
      return message;
    }
  };
  (src__services__message_codecs.BinaryCodec.new = function() {
    ;
  }).prototype = src__services__message_codecs.BinaryCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.BinaryCodec);
  src__services__message_codecs.BinaryCodec[dart.implements] = () => [src__services__message_codec.MessageCodec$(typed_data.ByteData)];
  dart.setMethodSignature(src__services__message_codecs.BinaryCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.BinaryCodec.__proto__),
    decodeMessage: dart.fnType(typed_data.ByteData, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  src__services__message_codecs.StringCodec = class StringCodec extends core.Object {
    decodeMessage(message) {
      if (message == null) return null;
      return convert.utf8.decoder.convert(message[$buffer][$asUint8List]());
    }
    encodeMessage(message) {
      core.String._check(message);
      if (message == null) return null;
      let encoded = typed_data.Uint8List._check(convert.utf8.encoder.convert(message));
      return encoded[$buffer][$asByteData]();
    }
  };
  (src__services__message_codecs.StringCodec.new = function() {
    ;
  }).prototype = src__services__message_codecs.StringCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StringCodec);
  src__services__message_codecs.StringCodec[dart.implements] = () => [src__services__message_codec.MessageCodec$(core.String)];
  dart.setMethodSignature(src__services__message_codecs.StringCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StringCodec.__proto__),
    decodeMessage: dart.fnType(core.String, [typed_data.ByteData]),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object])
  }));
  let const$2;
  let const$3;
  src__services__message_codecs.JSONMessageCodec = class JSONMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      return (const$2 || (const$2 = dart.const(new src__services__message_codecs.StringCodec.new()))).encodeMessage(convert.json.encode(message));
    }
    decodeMessage(message) {
      if (message == null) return message;
      return convert.json.decode((const$3 || (const$3 = dart.const(new src__services__message_codecs.StringCodec.new()))).decodeMessage(message));
    }
  };
  (src__services__message_codecs.JSONMessageCodec.new = function() {
    ;
  }).prototype = src__services__message_codecs.JSONMessageCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.JSONMessageCodec);
  src__services__message_codecs.JSONMessageCodec[dart.implements] = () => [src__services__message_codec.MessageCodec];
  dart.setMethodSignature(src__services__message_codecs.JSONMessageCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.JSONMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  let const$8;
  src__services__message_codecs.JSONMethodCodec = class JSONMethodCodec extends core.Object {
    encodeMethodCall(call) {
      return (const$4 || (const$4 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage(new (IdentityMapOfString$dynamic()).from(["method", call.method, "args", call.arguments]));
    }
    decodeMethodCall(methodCall) {
      let decoded = (const$5 || (const$5 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).decodeMessage(methodCall);
      if (!core.Map.is(decoded)) dart.throw(new core.FormatException.new("Expected method call Map, got " + dart.str(decoded)));
      let method = dart.dsend(decoded, '_get', ["method"]);
      let arguments$0 = dart.dsend(decoded, '_get', ["args"]);
      if (typeof method == 'string') return new src__services__message_codec.MethodCall.new(method, arguments$0);
      dart.throw(new core.FormatException.new("Invalid method call: " + dart.str(decoded)));
    }
    decodeEnvelope(envelope) {
      let decoded = (const$6 || (const$6 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).decodeMessage(envelope);
      if (!core.List.is(decoded)) dart.throw(new core.FormatException.new("Expected envelope List, got " + dart.str(decoded)));
      if (dart.equals(dart.dload(decoded, 'length'), 1)) return dart.dsend(decoded, '_get', [0]);
      if (dart.equals(dart.dload(decoded, 'length'), 3) && typeof dart.dsend(decoded, '_get', [0]) == 'string' && (dart.dsend(decoded, '_get', [1]) == null || typeof dart.dsend(decoded, '_get', [1]) == 'string')) dart.throw(new src__services__message_codec.PlatformException.new({code: core.String._check(dart.dsend(decoded, '_get', [0])), message: core.String._check(dart.dsend(decoded, '_get', [1])), details: dart.dsend(decoded, '_get', [2])}));
      dart.throw(new core.FormatException.new("Invalid envelope: " + dart.str(decoded)));
    }
    encodeSuccessEnvelope(result) {
      return (const$7 || (const$7 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage([result]);
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      if (!(code != null)) dart.assertFailed();
      return (const$8 || (const$8 = dart.const(new src__services__message_codecs.JSONMessageCodec.new()))).encodeMessage([code, message, details]);
    }
  };
  (src__services__message_codecs.JSONMethodCodec.new = function() {
    ;
  }).prototype = src__services__message_codecs.JSONMethodCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.JSONMethodCodec);
  src__services__message_codecs.JSONMethodCodec[dart.implements] = () => [src__services__message_codec.MethodCodec];
  dart.setMethodSignature(src__services__message_codecs.JSONMethodCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.JSONMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [src__services__message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(src__services__message_codec.MethodCall, [typed_data.ByteData]),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String})
  }));
  let const$9;
  let const$10;
  let const$11;
  src__services__message_codecs.StandardMessageCodec = class StandardMessageCodec extends core.Object {
    encodeMessage(message) {
      if (message == null) return null;
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      this.writeValue(buffer, message);
      return buffer.done();
    }
    decodeMessage(message) {
      if (message == null) return null;
      let buffer = new src__foundation__serialization.ReadBuffer.new(message);
      let result = this.readValue(buffer);
      if (dart.test(buffer.hasRemaining)) dart.throw(const$9 || (const$9 = dart.const(new core.FormatException.new("Message corrupted"))));
      return result;
    }
    writeValue(buffer, value) {
      if (value == null) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueNull);
      } else if (typeof value == 'boolean') {
        buffer.putUint8(dart.test(value) ? src__services__message_codecs.StandardMessageCodec._valueTrue : src__services__message_codecs.StandardMessageCodec._valueFalse);
      } else if (typeof value == 'number') {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueFloat64);
        buffer.putFloat64(value);
      } else if (core.int.is(value)) {
        if (-2147483647 - 1 <= dart.notNull(value) && dart.notNull(value) <= 2147483647) {
          buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueInt32);
          buffer.putInt32(value);
        } else {
          buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueInt64);
          buffer.putInt64(value);
        }
      } else if (typeof value == 'string') {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueString);
        let bytes = convert.utf8.encoder.convert(value);
        this.writeSize(buffer, bytes[$length]);
        buffer.putUint8List(typed_data.Uint8List._check(bytes));
      } else if (typed_data.Uint8List.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueUint8List);
        this.writeSize(buffer, value[$length]);
        buffer.putUint8List(value);
      } else if (typed_data.Int32List.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueInt32List);
        this.writeSize(buffer, value[$length]);
        buffer.putInt32List(value);
      } else if (typed_data.Int64List.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueInt64List);
        this.writeSize(buffer, value[$length]);
        buffer.putInt64List(value);
      } else if (typed_data.Float64List.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueFloat64List);
        this.writeSize(buffer, value[$length]);
        buffer.putFloat64List(value);
      } else if (core.List.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueList);
        this.writeSize(buffer, value[$length]);
        for (let item of value) {
          this.writeValue(buffer, item);
        }
      } else if (core.Map.is(value)) {
        buffer.putUint8(src__services__message_codecs.StandardMessageCodec._valueMap);
        this.writeSize(buffer, value[$length]);
        value[$forEach](dart.fn((key, value) => {
          this.writeValue(buffer, key);
          this.writeValue(buffer, value);
        }, dynamicAnddynamicToNull()));
      } else {
        dart.throw(new core.ArgumentError.value(value));
      }
    }
    readValue(buffer) {
      if (!dart.test(buffer.hasRemaining)) dart.throw(const$10 || (const$10 = dart.const(new core.FormatException.new("Message corrupted"))));
      let type = buffer.getUint8();
      return this.readValueOfType(type, buffer);
    }
    readValueOfType(type, buffer) {
      let result = null;
      switch (type) {
        case src__services__message_codecs.StandardMessageCodec._valueNull:
        {
          result = null;
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueTrue:
        {
          result = true;
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueFalse:
        {
          result = false;
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueInt32:
        {
          result = buffer.getInt32();
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueInt64:
        {
          result = buffer.getInt64();
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueLargeInt:
        {
          let length = this.readSize(buffer);
          let hex = convert.utf8.decoder.convert(buffer.getUint8List(length));
          result = core.int.parse(hex, {radix: 16});
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueFloat64:
        {
          result = buffer.getFloat64();
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueString:
        {
          let length = this.readSize(buffer);
          result = convert.utf8.decoder.convert(buffer.getUint8List(length));
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueUint8List:
        {
          let length = this.readSize(buffer);
          result = buffer.getUint8List(length);
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueInt32List:
        {
          let length = this.readSize(buffer);
          result = buffer.getInt32List(length);
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueInt64List:
        {
          let length = this.readSize(buffer);
          result = buffer.getInt64List(length);
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueFloat64List:
        {
          let length = this.readSize(buffer);
          result = buffer.getFloat64List(length);
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueList:
        {
          let length = this.readSize(buffer);
          result = core.List.new(length);
          for (let i = 0; i < dart.notNull(length); i = i + 1) {
            dart.dsend(result, '_set', [i, this.readValue(buffer)]);
          }
          break;
        }
        case src__services__message_codecs.StandardMessageCodec._valueMap:
        {
          let length = this.readSize(buffer);
          result = new _js_helper.LinkedMap.new();
          for (let i = 0; i < dart.notNull(length); i = i + 1) {
            dart.dsend(result, '_set', [this.readValue(buffer), this.readValue(buffer)]);
          }
          break;
        }
        default:
        {
          dart.throw(const$11 || (const$11 = dart.const(new core.FormatException.new("Message corrupted"))));
        }
      }
      return result;
    }
    writeSize(buffer, value) {
      if (!(0 <= dart.notNull(value) && dart.notNull(value) <= 4294967295)) dart.assertFailed();
      if (dart.notNull(value) < 254) {
        buffer.putUint8(value);
      } else if (dart.notNull(value) <= 65535) {
        buffer.putUint8(254);
        buffer.putUint16(value);
      } else {
        buffer.putUint8(255);
        buffer.putUint32(value);
      }
    }
    readSize(buffer) {
      let value = buffer.getUint8();
      switch (value) {
        case 254:
        {
          return buffer.getUint16();
        }
        case 255:
        {
          return buffer.getUint32();
        }
        default:
        {
          return value;
        }
      }
    }
  };
  (src__services__message_codecs.StandardMessageCodec.new = function() {
    ;
  }).prototype = src__services__message_codecs.StandardMessageCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StandardMessageCodec);
  src__services__message_codecs.StandardMessageCodec[dart.implements] = () => [src__services__message_codec.MessageCodec];
  dart.setMethodSignature(src__services__message_codecs.StandardMessageCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StandardMessageCodec.__proto__),
    encodeMessage: dart.fnType(typed_data.ByteData, [core.Object]),
    decodeMessage: dart.fnType(dart.dynamic, [typed_data.ByteData]),
    writeValue: dart.fnType(dart.void, [src__foundation__serialization.WriteBuffer, dart.dynamic]),
    readValue: dart.fnType(dart.dynamic, [src__foundation__serialization.ReadBuffer]),
    readValueOfType: dart.fnType(dart.dynamic, [core.int, src__foundation__serialization.ReadBuffer]),
    writeSize: dart.fnType(dart.void, [src__foundation__serialization.WriteBuffer, core.int]),
    readSize: dart.fnType(core.int, [src__foundation__serialization.ReadBuffer])
  }));
  dart.defineLazy(src__services__message_codecs.StandardMessageCodec, {
    /*src__services__message_codecs.StandardMessageCodec._valueNull*/get _valueNull() {
      return 0;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueTrue*/get _valueTrue() {
      return 1;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFalse*/get _valueFalse() {
      return 2;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt32*/get _valueInt32() {
      return 3;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt64*/get _valueInt64() {
      return 4;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueLargeInt*/get _valueLargeInt() {
      return 5;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFloat64*/get _valueFloat64() {
      return 6;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueString*/get _valueString() {
      return 7;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueUint8List*/get _valueUint8List() {
      return 8;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt32List*/get _valueInt32List() {
      return 9;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueInt64List*/get _valueInt64List() {
      return 10;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueFloat64List*/get _valueFloat64List() {
      return 11;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueList*/get _valueList() {
      return 12;
    },
    /*src__services__message_codecs.StandardMessageCodec._valueMap*/get _valueMap() {
      return 13;
    }
  });
  let const$12;
  let const$13;
  let const$14;
  let const$15;
  src__services__message_codecs.StandardMethodCodec = class StandardMethodCodec extends core.Object {
    get messageCodec() {
      return this[messageCodec$];
    }
    set messageCodec(value) {
      super.messageCodec = value;
    }
    encodeMethodCall(call) {
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      this.messageCodec.writeValue(buffer, call.method);
      this.messageCodec.writeValue(buffer, call.arguments);
      return buffer.done();
    }
    decodeMethodCall(methodCall) {
      let buffer = new src__foundation__serialization.ReadBuffer.new(methodCall);
      let method = this.messageCodec.readValue(buffer);
      let arguments$0 = this.messageCodec.readValue(buffer);
      if (typeof method == 'string' && !dart.test(buffer.hasRemaining))
        return new src__services__message_codec.MethodCall.new(method, arguments$0);
      else
        dart.throw(const$13 || (const$13 = dart.const(new core.FormatException.new("Invalid method call"))));
    }
    encodeSuccessEnvelope(result) {
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      buffer.putUint8(0);
      this.messageCodec.writeValue(buffer, result);
      return buffer.done();
    }
    encodeErrorEnvelope(opts) {
      let code = opts && 'code' in opts ? opts.code : null;
      let message = opts && 'message' in opts ? opts.message : null;
      let details = opts && 'details' in opts ? opts.details : null;
      let buffer = new src__foundation__serialization.WriteBuffer.new();
      buffer.putUint8(1);
      this.messageCodec.writeValue(buffer, code);
      this.messageCodec.writeValue(buffer, message);
      this.messageCodec.writeValue(buffer, details);
      return buffer.done();
    }
    decodeEnvelope(envelope) {
      if (envelope[$lengthInBytes] === 0) dart.throw(const$14 || (const$14 = dart.const(new core.FormatException.new("Expected envelope, got nothing"))));
      let buffer = new src__foundation__serialization.ReadBuffer.new(envelope);
      if (buffer.getUint8() === 0) return this.messageCodec.readValue(buffer);
      let errorCode = this.messageCodec.readValue(buffer);
      let errorMessage = this.messageCodec.readValue(buffer);
      let errorDetails = this.messageCodec.readValue(buffer);
      if (typeof errorCode == 'string' && (errorMessage == null || typeof errorMessage == 'string') && !dart.test(buffer.hasRemaining))
        dart.throw(new src__services__message_codec.PlatformException.new({code: errorCode, message: core.String._check(errorMessage), details: errorDetails}));
      else
        dart.throw(const$15 || (const$15 = dart.const(new core.FormatException.new("Invalid envelope"))));
    }
  };
  (src__services__message_codecs.StandardMethodCodec.new = function(messageCodec) {
    if (messageCodec === void 0) messageCodec = const$12 || (const$12 = dart.const(new src__services__message_codecs.StandardMessageCodec.new()));
    this[messageCodec$] = messageCodec;
    ;
  }).prototype = src__services__message_codecs.StandardMethodCodec.prototype;
  dart.addTypeTests(src__services__message_codecs.StandardMethodCodec);
  const messageCodec$ = Symbol("StandardMethodCodec.messageCodec");
  src__services__message_codecs.StandardMethodCodec[dart.implements] = () => [src__services__message_codec.MethodCodec];
  dart.setMethodSignature(src__services__message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getMethods(src__services__message_codecs.StandardMethodCodec.__proto__),
    encodeMethodCall: dart.fnType(typed_data.ByteData, [src__services__message_codec.MethodCall]),
    decodeMethodCall: dart.fnType(src__services__message_codec.MethodCall, [typed_data.ByteData]),
    encodeSuccessEnvelope: dart.fnType(typed_data.ByteData, [dart.dynamic]),
    encodeErrorEnvelope: dart.fnType(typed_data.ByteData, [], {code: core.String, details: dart.dynamic, message: core.String}),
    decodeEnvelope: dart.fnType(dart.dynamic, [typed_data.ByteData])
  }));
  dart.setFieldSignature(src__services__message_codecs.StandardMethodCodec, () => ({
    __proto__: dart.getFields(src__services__message_codecs.StandardMethodCodec.__proto__),
    messageCodec: dart.finalFieldType(src__services__message_codecs.StandardMessageCodec)
  }));
  const _is_MessageCodec_default = Symbol('_is_MessageCodec_default');
  src__services__message_codec.MessageCodec$ = dart.generic(T => {
    class MessageCodec extends core.Object {}
    (MessageCodec.new = function() {
      ;
    }).prototype = MessageCodec.prototype;
    dart.addTypeTests(MessageCodec);
    MessageCodec.prototype[_is_MessageCodec_default] = true;
    return MessageCodec;
  });
  src__services__message_codec.MessageCodec = src__services__message_codec.MessageCodec$();
  dart.addTypeTests(src__services__message_codec.MessageCodec, _is_MessageCodec_default);
  src__services__message_codec.MethodCall = class MethodCall extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get arguments() {
      return this[arguments$];
    }
    set arguments(value) {
      super.arguments = value;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + dart.str(this.method) + ", " + dart.str(this.arguments) + ")";
    }
  };
  (src__services__message_codec.MethodCall.new = function(method, arguments$0) {
    if (arguments$0 === void 0) arguments$0 = null;
    this[method$] = method;
    this[arguments$] = arguments$0;
    if (!(method != null)) dart.assertFailed();
    ;
  }).prototype = src__services__message_codec.MethodCall.prototype;
  dart.addTypeTests(src__services__message_codec.MethodCall);
  const method$ = Symbol("MethodCall.method");
  const arguments$ = Symbol("MethodCall.arguments");
  dart.setFieldSignature(src__services__message_codec.MethodCall, () => ({
    __proto__: dart.getFields(src__services__message_codec.MethodCall.__proto__),
    method: dart.finalFieldType(core.String),
    arguments: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__services__message_codec.MethodCall, ['toString']);
  src__services__message_codec.MethodCodec = class MethodCodec extends core.Object {};
  (src__services__message_codec.MethodCodec.new = function() {
    ;
  }).prototype = src__services__message_codec.MethodCodec.prototype;
  dart.addTypeTests(src__services__message_codec.MethodCodec);
  src__services__message_codec.PlatformException = class PlatformException extends core.Object {
    get code() {
      return this[code$];
    }
    set code(value) {
      super.code = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get details() {
      return this[details$];
    }
    set details(value) {
      super.details = value;
    }
    toString() {
      return "PlatformException(" + dart.str(this.code) + ", " + dart.str(this.message) + ", " + dart.str(this.details) + ")";
    }
  };
  (src__services__message_codec.PlatformException.new = function(opts) {
    let code = opts && 'code' in opts ? opts.code : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let details = opts && 'details' in opts ? opts.details : null;
    this[code$] = code;
    this[message$] = message;
    this[details$] = details;
    if (!(code != null)) dart.assertFailed();
    ;
  }).prototype = src__services__message_codec.PlatformException.prototype;
  dart.addTypeTests(src__services__message_codec.PlatformException);
  const code$ = Symbol("PlatformException.code");
  const message$ = Symbol("PlatformException.message");
  const details$ = Symbol("PlatformException.details");
  src__services__message_codec.PlatformException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__services__message_codec.PlatformException, () => ({
    __proto__: dart.getFields(src__services__message_codec.PlatformException.__proto__),
    code: dart.finalFieldType(core.String),
    message: dart.finalFieldType(core.String),
    details: dart.finalFieldType(dart.dynamic)
  }));
  dart.defineExtensionMethods(src__services__message_codec.PlatformException, ['toString']);
  src__services__message_codec.MissingPluginException = class MissingPluginException extends core.Object {
    get message() {
      return this[message$0];
    }
    set message(value) {
      super.message = value;
    }
    toString() {
      return "MissingPluginException(" + dart.str(this.message) + ")";
    }
  };
  (src__services__message_codec.MissingPluginException.new = function(message) {
    if (message === void 0) message = null;
    this[message$0] = message;
    ;
  }).prototype = src__services__message_codec.MissingPluginException.prototype;
  dart.addTypeTests(src__services__message_codec.MissingPluginException);
  const message$0 = Symbol("MissingPluginException.message");
  src__services__message_codec.MissingPluginException[dart.implements] = () => [core.Exception];
  dart.setFieldSignature(src__services__message_codec.MissingPluginException, () => ({
    __proto__: dart.getFields(src__services__message_codec.MissingPluginException.__proto__),
    message: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__message_codec.MissingPluginException, ['toString']);
  src__services__text_editing.TextRange = class TextRange extends core.Object {
    get start() {
      return this[start$];
    }
    set start(value) {
      super.start = value;
    }
    get end() {
      return this[end$];
    }
    set end(value) {
      super.end = value;
    }
    get isValid() {
      return dart.notNull(this.start) >= 0 && dart.notNull(this.end) >= 0;
    }
    get isCollapsed() {
      return this.start == this.end;
    }
    get isNormalized() {
      return dart.notNull(this.end) >= dart.notNull(this.start);
    }
    textBefore(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](0, this.start);
    }
    textAfter(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](this.end);
    }
    textInside(text) {
      if (!dart.test(this.isNormalized)) dart.assertFailed();
      return text[$substring](this.start, this.end);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_editing.TextRange.is(other)) return false;
      let typedOther = src__services__text_editing.TextRange._check(other);
      return typedOther.start == this.start && typedOther.end == this.end;
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.start), dart.hashCode(this.end));
    }
    toString() {
      return "TextRange(start: " + dart.str(this.start) + ", end: " + dart.str(this.end) + ")";
    }
  };
  (src__services__text_editing.TextRange.new = function(opts) {
    let start = opts && 'start' in opts ? opts.start : null;
    let end = opts && 'end' in opts ? opts.end : null;
    this[start$] = start;
    this[end$] = end;
    if (!(start != null && dart.notNull(start) >= -1)) dart.assertFailed();
    if (!(end != null && dart.notNull(end) >= -1)) dart.assertFailed();
    ;
  }).prototype = src__services__text_editing.TextRange.prototype;
  (src__services__text_editing.TextRange.collapsed = function(offset) {
    if (!(offset != null && dart.notNull(offset) >= -1)) dart.assertFailed();
    this[start$] = offset;
    this[end$] = offset;
    ;
  }).prototype = src__services__text_editing.TextRange.prototype;
  dart.addTypeTests(src__services__text_editing.TextRange);
  const start$ = Symbol("TextRange.start");
  const end$ = Symbol("TextRange.end");
  dart.setMethodSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getMethods(src__services__text_editing.TextRange.__proto__),
    textBefore: dart.fnType(core.String, [core.String]),
    textAfter: dart.fnType(core.String, [core.String]),
    textInside: dart.fnType(core.String, [core.String])
  }));
  dart.setGetterSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getGetters(src__services__text_editing.TextRange.__proto__),
    isValid: core.bool,
    isCollapsed: core.bool,
    isNormalized: core.bool
  }));
  dart.setFieldSignature(src__services__text_editing.TextRange, () => ({
    __proto__: dart.getFields(src__services__text_editing.TextRange.__proto__),
    start: dart.finalFieldType(core.int),
    end: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__text_editing.TextRange, ['_equals', 'toString']);
  dart.defineExtensionAccessors(src__services__text_editing.TextRange, ['hashCode']);
  dart.defineLazy(src__services__text_editing.TextRange, {
    /*src__services__text_editing.TextRange.empty*/get empty() {
      return dart.const(new src__services__text_editing.TextRange.new({start: -1, end: -1}));
    }
  });
  src__services__text_editing.TextSelection = class TextSelection extends src__services__text_editing.TextRange {
    get baseOffset() {
      return this[baseOffset$];
    }
    set baseOffset(value) {
      super.baseOffset = value;
    }
    get extentOffset() {
      return this[extentOffset$];
    }
    set extentOffset(value) {
      super.extentOffset = value;
    }
    get affinity() {
      return this[affinity$];
    }
    set affinity(value) {
      super.affinity = value;
    }
    get isDirectional() {
      return this[isDirectional$];
    }
    set isDirectional(value) {
      super.isDirectional = value;
    }
    get base() {
      return new ui$.TextPosition.new({offset: this.baseOffset, affinity: this.affinity});
    }
    get extent() {
      return new ui$.TextPosition.new({offset: this.extentOffset, affinity: this.affinity});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(baseOffset: " + dart.str(this.baseOffset) + ", extentOffset: " + dart.str(this.extentOffset) + ", affinity: " + dart.str(this.affinity) + ", isDirectional: " + dart.str(this.isDirectional) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_editing.TextSelection.is(other)) return false;
      let typedOther = src__services__text_editing.TextSelection._check(other);
      return typedOther.baseOffset == this.baseOffset && typedOther.extentOffset == this.extentOffset && dart.equals(typedOther.affinity, this.affinity) && dart.equals(typedOther.isDirectional, this.isDirectional);
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.baseOffset), dart.hashCode(this.extentOffset), dart.hashCode(this.affinity), dart.hashCode(this.isDirectional));
    }
    copyWith(opts) {
      let t9, t9$, t9$0, t9$1;
      let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
      let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
      let affinity = opts && 'affinity' in opts ? opts.affinity : null;
      let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : null;
      return new src__services__text_editing.TextSelection.new({baseOffset: (t9 = baseOffset, t9 == null ? this.baseOffset : t9), extentOffset: (t9$ = extentOffset, t9$ == null ? this.extentOffset : t9$), affinity: (t9$0 = affinity, t9$0 == null ? this.affinity : t9$0), isDirectional: (t9$1 = isDirectional, t9$1 == null ? this.isDirectional : t9$1)});
    }
  };
  (src__services__text_editing.TextSelection.new = function(opts) {
    let baseOffset = opts && 'baseOffset' in opts ? opts.baseOffset : null;
    let extentOffset = opts && 'extentOffset' in opts ? opts.extentOffset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : ui$.TextAffinity.downstream;
    let isDirectional = opts && 'isDirectional' in opts ? opts.isDirectional : false;
    this[baseOffset$] = baseOffset;
    this[extentOffset$] = extentOffset;
    this[affinity$] = affinity;
    this[isDirectional$] = isDirectional;
    src__services__text_editing.TextSelection.__proto__.new.call(this, {start: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? baseOffset : extentOffset, end: dart.notNull(baseOffset) < dart.notNull(extentOffset) ? extentOffset : baseOffset});
    ;
  }).prototype = src__services__text_editing.TextSelection.prototype;
  (src__services__text_editing.TextSelection.collapsed = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let affinity = opts && 'affinity' in opts ? opts.affinity : ui$.TextAffinity.downstream;
    this[affinity$] = affinity;
    this[baseOffset$] = offset;
    this[extentOffset$] = offset;
    this[isDirectional$] = false;
    src__services__text_editing.TextSelection.__proto__.collapsed.call(this, offset);
    ;
  }).prototype = src__services__text_editing.TextSelection.prototype;
  (src__services__text_editing.TextSelection.fromPosition = function(position) {
    this[baseOffset$] = position.offset;
    this[extentOffset$] = position.offset;
    this[affinity$] = position.affinity;
    this[isDirectional$] = false;
    src__services__text_editing.TextSelection.__proto__.collapsed.call(this, position.offset);
    ;
  }).prototype = src__services__text_editing.TextSelection.prototype;
  dart.addTypeTests(src__services__text_editing.TextSelection);
  const baseOffset$ = Symbol("TextSelection.baseOffset");
  const extentOffset$ = Symbol("TextSelection.extentOffset");
  const affinity$ = Symbol("TextSelection.affinity");
  const isDirectional$ = Symbol("TextSelection.isDirectional");
  dart.setMethodSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getMethods(src__services__text_editing.TextSelection.__proto__),
    copyWith: dart.fnType(src__services__text_editing.TextSelection, [], {affinity: ui$.TextAffinity, baseOffset: core.int, extentOffset: core.int, isDirectional: core.bool})
  }));
  dart.setGetterSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getGetters(src__services__text_editing.TextSelection.__proto__),
    base: ui$.TextPosition,
    extent: ui$.TextPosition
  }));
  dart.setFieldSignature(src__services__text_editing.TextSelection, () => ({
    __proto__: dart.getFields(src__services__text_editing.TextSelection.__proto__),
    baseOffset: dart.finalFieldType(core.int),
    extentOffset: dart.finalFieldType(core.int),
    affinity: dart.finalFieldType(ui$.TextAffinity),
    isDirectional: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__services__text_editing.TextSelection, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_editing.TextSelection, ['hashCode']);
  const _name$ = dart.privateName(src__services__text_input, "_name");
  src__services__text_input.TextInputType = class TextInputType extends core.Object {
    get index() {
      return this[index$];
    }
    set index(value) {
      super.index = value;
    }
    get signed() {
      return this[signed$];
    }
    set signed(value) {
      super.signed = value;
    }
    get decimal() {
      return this[decimal$];
    }
    set decimal(value) {
      super.decimal = value;
    }
    get [_name$]() {
      return "TextInputType." + dart.str(src__services__text_input.TextInputType._names[$_get](this.index));
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["name", this[_name$], "signed", this.signed, "decimal", this.decimal]);
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(" + "name: " + dart.str(this[_name$]) + ", " + "signed: " + dart.str(this.signed) + ", " + "decimal: " + dart.str(this.decimal) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (!src__services__text_input.TextInputType.is(other)) return false;
      let typedOther = src__services__text_input.TextInputType._check(other);
      return typedOther.index == this.index && dart.equals(typedOther.signed, this.signed) && dart.equals(typedOther.decimal, this.decimal);
    }
    get hashCode() {
      return ui$.hashValues(this.index, this.signed, this.decimal);
    }
  };
  (src__services__text_input.TextInputType.__ = function(index) {
    this[index$] = index;
    this[signed$] = null;
    this[decimal$] = null;
    ;
  }).prototype = src__services__text_input.TextInputType.prototype;
  (src__services__text_input.TextInputType.numberWithOptions = function(opts) {
    let signed = opts && 'signed' in opts ? opts.signed : false;
    let decimal = opts && 'decimal' in opts ? opts.decimal : false;
    this[signed$] = signed;
    this[decimal$] = decimal;
    this[index$] = 2;
    ;
  }).prototype = src__services__text_input.TextInputType.prototype;
  dart.addTypeTests(src__services__text_input.TextInputType);
  const index$ = Symbol("TextInputType.index");
  const signed$ = Symbol("TextInputType.signed");
  const decimal$ = Symbol("TextInputType.decimal");
  dart.setMethodSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputType.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setGetterSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getGetters(src__services__text_input.TextInputType.__proto__),
    [_name$]: core.String
  }));
  dart.setFieldSignature(src__services__text_input.TextInputType, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputType.__proto__),
    index: dart.finalFieldType(core.int),
    signed: dart.finalFieldType(core.bool),
    decimal: dart.finalFieldType(core.bool)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextInputType, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_input.TextInputType, ['hashCode']);
  dart.defineLazy(src__services__text_input.TextInputType, {
    /*src__services__text_input.TextInputType.text*/get text() {
      return dart.const(new src__services__text_input.TextInputType.__(0));
    },
    /*src__services__text_input.TextInputType.multiline*/get multiline() {
      return dart.const(new src__services__text_input.TextInputType.__(1));
    },
    /*src__services__text_input.TextInputType.number*/get number() {
      return dart.const(new src__services__text_input.TextInputType.numberWithOptions());
    },
    /*src__services__text_input.TextInputType.phone*/get phone() {
      return dart.const(new src__services__text_input.TextInputType.__(3));
    },
    /*src__services__text_input.TextInputType.datetime*/get datetime() {
      return dart.const(new src__services__text_input.TextInputType.__(4));
    },
    /*src__services__text_input.TextInputType.emailAddress*/get emailAddress() {
      return dart.const(new src__services__text_input.TextInputType.__(5));
    },
    /*src__services__text_input.TextInputType.url*/get url() {
      return dart.const(new src__services__text_input.TextInputType.__(6));
    },
    /*src__services__text_input.TextInputType.values*/get values() {
      return dart.constList([src__services__text_input.TextInputType.text, src__services__text_input.TextInputType.multiline, src__services__text_input.TextInputType.number, src__services__text_input.TextInputType.phone, src__services__text_input.TextInputType.datetime, src__services__text_input.TextInputType.emailAddress, src__services__text_input.TextInputType.url], src__services__text_input.TextInputType);
    },
    /*src__services__text_input.TextInputType._names*/get _names() {
      return dart.constList(["text", "multiline", "number", "phone", "datetime", "emailAddress", "url"], core.String);
    }
  });
  src__services__text_input.TextInputAction = class TextInputAction extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__services__text_input.TextInputAction.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__services__text_input.TextInputAction.prototype;
  dart.addTypeTests(src__services__text_input.TextInputAction);
  dart.setFieldSignature(src__services__text_input.TextInputAction, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputAction.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextInputAction, ['toString']);
  src__services__text_input.TextInputAction.none = dart.const(new src__services__text_input.TextInputAction.new(0, "TextInputAction.none"));
  src__services__text_input.TextInputAction.unspecified = dart.const(new src__services__text_input.TextInputAction.new(1, "TextInputAction.unspecified"));
  src__services__text_input.TextInputAction.done = dart.const(new src__services__text_input.TextInputAction.new(2, "TextInputAction.done"));
  src__services__text_input.TextInputAction.go = dart.const(new src__services__text_input.TextInputAction.new(3, "TextInputAction.go"));
  src__services__text_input.TextInputAction.search = dart.const(new src__services__text_input.TextInputAction.new(4, "TextInputAction.search"));
  src__services__text_input.TextInputAction.send = dart.const(new src__services__text_input.TextInputAction.new(5, "TextInputAction.send"));
  src__services__text_input.TextInputAction.next = dart.const(new src__services__text_input.TextInputAction.new(6, "TextInputAction.next"));
  src__services__text_input.TextInputAction.previous = dart.const(new src__services__text_input.TextInputAction.new(7, "TextInputAction.previous"));
  src__services__text_input.TextInputAction.continueAction = dart.const(new src__services__text_input.TextInputAction.new(8, "TextInputAction.continueAction"));
  src__services__text_input.TextInputAction.join = dart.const(new src__services__text_input.TextInputAction.new(9, "TextInputAction.join"));
  src__services__text_input.TextInputAction.route = dart.const(new src__services__text_input.TextInputAction.new(10, "TextInputAction.route"));
  src__services__text_input.TextInputAction.emergencyCall = dart.const(new src__services__text_input.TextInputAction.new(11, "TextInputAction.emergencyCall"));
  src__services__text_input.TextInputAction.newline = dart.const(new src__services__text_input.TextInputAction.new(12, "TextInputAction.newline"));
  src__services__text_input.TextInputAction.values = dart.constList([src__services__text_input.TextInputAction.none, src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.previous, src__services__text_input.TextInputAction.continueAction, src__services__text_input.TextInputAction.join, src__services__text_input.TextInputAction.route, src__services__text_input.TextInputAction.emergencyCall, src__services__text_input.TextInputAction.newline], src__services__text_input.TextInputAction);
  src__services__text_input.TextCapitalization = class TextCapitalization extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__services__text_input.TextCapitalization.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__services__text_input.TextCapitalization.prototype;
  dart.addTypeTests(src__services__text_input.TextCapitalization);
  dart.setFieldSignature(src__services__text_input.TextCapitalization, () => ({
    __proto__: dart.getFields(src__services__text_input.TextCapitalization.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextCapitalization, ['toString']);
  src__services__text_input.TextCapitalization.words = dart.const(new src__services__text_input.TextCapitalization.new(0, "TextCapitalization.words"));
  src__services__text_input.TextCapitalization.sentences = dart.const(new src__services__text_input.TextCapitalization.new(1, "TextCapitalization.sentences"));
  src__services__text_input.TextCapitalization.characters = dart.const(new src__services__text_input.TextCapitalization.new(2, "TextCapitalization.characters"));
  src__services__text_input.TextCapitalization.none = dart.const(new src__services__text_input.TextCapitalization.new(3, "TextCapitalization.none"));
  src__services__text_input.TextCapitalization.values = dart.constList([src__services__text_input.TextCapitalization.words, src__services__text_input.TextCapitalization.sentences, src__services__text_input.TextCapitalization.characters, src__services__text_input.TextCapitalization.none], src__services__text_input.TextCapitalization);
  src__services__text_input.TextInputConfiguration = class TextInputConfiguration extends core.Object {
    get inputType() {
      return this[inputType$];
    }
    set inputType(value) {
      super.inputType = value;
    }
    get obscureText() {
      return this[obscureText$];
    }
    set obscureText(value) {
      super.obscureText = value;
    }
    get autocorrect() {
      return this[autocorrect$];
    }
    set autocorrect(value) {
      super.autocorrect = value;
    }
    get actionLabel() {
      return this[actionLabel$];
    }
    set actionLabel(value) {
      super.actionLabel = value;
    }
    get inputAction() {
      return this[inputAction$];
    }
    set inputAction(value) {
      super.inputAction = value;
    }
    get textCapitalization() {
      return this[textCapitalization$];
    }
    set textCapitalization(value) {
      super.textCapitalization = value;
    }
    get keyboardAppearance() {
      return this[keyboardAppearance$];
    }
    set keyboardAppearance(value) {
      super.keyboardAppearance = value;
    }
    toJson() {
      return new (IdentityMapOfString$dynamic()).from(["inputType", this.inputType.toJson(), "obscureText", this.obscureText, "autocorrect", this.autocorrect, "actionLabel", this.actionLabel, "inputAction", dart.toString(this.inputAction), "textCapitalization", dart.toString(this.textCapitalization), "keyboardAppearance", dart.toString(this.keyboardAppearance)]);
    }
  };
  (src__services__text_input.TextInputConfiguration.new = function(opts) {
    let inputType = opts && 'inputType' in opts ? opts.inputType : src__services__text_input.TextInputType.text;
    let obscureText = opts && 'obscureText' in opts ? opts.obscureText : false;
    let autocorrect = opts && 'autocorrect' in opts ? opts.autocorrect : true;
    let actionLabel = opts && 'actionLabel' in opts ? opts.actionLabel : null;
    let inputAction = opts && 'inputAction' in opts ? opts.inputAction : src__services__text_input.TextInputAction.done;
    let keyboardAppearance = opts && 'keyboardAppearance' in opts ? opts.keyboardAppearance : ui$.Brightness.light;
    let textCapitalization = opts && 'textCapitalization' in opts ? opts.textCapitalization : src__services__text_input.TextCapitalization.none;
    this[inputType$] = inputType;
    this[obscureText$] = obscureText;
    this[autocorrect$] = autocorrect;
    this[actionLabel$] = actionLabel;
    this[inputAction$] = inputAction;
    this[keyboardAppearance$] = keyboardAppearance;
    this[textCapitalization$] = textCapitalization;
    if (!(inputType != null)) dart.assertFailed();
    if (!(obscureText != null)) dart.assertFailed();
    if (!(autocorrect != null)) dart.assertFailed();
    if (!(keyboardAppearance != null)) dart.assertFailed();
    if (!(inputAction != null)) dart.assertFailed();
    if (!(textCapitalization != null)) dart.assertFailed();
    ;
  }).prototype = src__services__text_input.TextInputConfiguration.prototype;
  dart.addTypeTests(src__services__text_input.TextInputConfiguration);
  const inputType$ = Symbol("TextInputConfiguration.inputType");
  const obscureText$ = Symbol("TextInputConfiguration.obscureText");
  const autocorrect$ = Symbol("TextInputConfiguration.autocorrect");
  const actionLabel$ = Symbol("TextInputConfiguration.actionLabel");
  const inputAction$ = Symbol("TextInputConfiguration.inputAction");
  const textCapitalization$ = Symbol("TextInputConfiguration.textCapitalization");
  const keyboardAppearance$ = Symbol("TextInputConfiguration.keyboardAppearance");
  dart.setMethodSignature(src__services__text_input.TextInputConfiguration, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputConfiguration.__proto__),
    toJson: dart.fnType(core.Map$(core.String, dart.dynamic), [])
  }));
  dart.setFieldSignature(src__services__text_input.TextInputConfiguration, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputConfiguration.__proto__),
    inputType: dart.finalFieldType(src__services__text_input.TextInputType),
    obscureText: dart.finalFieldType(core.bool),
    autocorrect: dart.finalFieldType(core.bool),
    actionLabel: dart.finalFieldType(core.String),
    inputAction: dart.finalFieldType(src__services__text_input.TextInputAction),
    textCapitalization: dart.finalFieldType(src__services__text_input.TextCapitalization),
    keyboardAppearance: dart.finalFieldType(ui$.Brightness)
  }));
  src__services__text_input.FloatingCursorDragState = class FloatingCursorDragState extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__services__text_input.FloatingCursorDragState.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__services__text_input.FloatingCursorDragState.prototype;
  dart.addTypeTests(src__services__text_input.FloatingCursorDragState);
  dart.setFieldSignature(src__services__text_input.FloatingCursorDragState, () => ({
    __proto__: dart.getFields(src__services__text_input.FloatingCursorDragState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__text_input.FloatingCursorDragState, ['toString']);
  src__services__text_input.FloatingCursorDragState.Start = dart.const(new src__services__text_input.FloatingCursorDragState.new(0, "FloatingCursorDragState.Start"));
  src__services__text_input.FloatingCursorDragState.Update = dart.const(new src__services__text_input.FloatingCursorDragState.new(1, "FloatingCursorDragState.Update"));
  src__services__text_input.FloatingCursorDragState.End = dart.const(new src__services__text_input.FloatingCursorDragState.new(2, "FloatingCursorDragState.End"));
  src__services__text_input.FloatingCursorDragState.values = dart.constList([src__services__text_input.FloatingCursorDragState.Start, src__services__text_input.FloatingCursorDragState.Update, src__services__text_input.FloatingCursorDragState.End], src__services__text_input.FloatingCursorDragState);
  src__services__text_input.RawFloatingCursorPoint = class RawFloatingCursorPoint extends core.Object {
    get offset() {
      return this[offset$];
    }
    set offset(value) {
      super.offset = value;
    }
    get state() {
      return this[state$];
    }
    set state(value) {
      super.state = value;
    }
  };
  (src__services__text_input.RawFloatingCursorPoint.new = function(opts) {
    let offset = opts && 'offset' in opts ? opts.offset : null;
    let state = opts && 'state' in opts ? opts.state : null;
    this[offset$] = offset;
    this[state$] = state;
    if (!(state != null)) dart.assertFailed();
    if (!(dart.equals(state, src__services__text_input.FloatingCursorDragState.Update) ? offset != null : true)) dart.assertFailed();
    ;
  }).prototype = src__services__text_input.RawFloatingCursorPoint.prototype;
  dart.addTypeTests(src__services__text_input.RawFloatingCursorPoint);
  const offset$ = Symbol("RawFloatingCursorPoint.offset");
  const state$ = Symbol("RawFloatingCursorPoint.state");
  dart.setFieldSignature(src__services__text_input.RawFloatingCursorPoint, () => ({
    __proto__: dart.getFields(src__services__text_input.RawFloatingCursorPoint.__proto__),
    offset: dart.finalFieldType(ui$.Offset),
    state: dart.finalFieldType(src__services__text_input.FloatingCursorDragState)
  }));
  let const$16;
  src__services__text_input.TextEditingValue = class TextEditingValue extends core.Object {
    get text() {
      return this[text$];
    }
    set text(value) {
      super.text = value;
    }
    get selection() {
      return this[selection$];
    }
    set selection(value) {
      super.selection = value;
    }
    get composing() {
      return this[composing$];
    }
    set composing(value) {
      super.composing = value;
    }
    static fromJSON(encoded) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      return new src__services__text_input.TextEditingValue.new({text: core.String._check(encoded[$_get]("text")), selection: new src__services__text_editing.TextSelection.new({baseOffset: core.int._check((t9 = encoded[$_get]("selectionBase"), t9 == null ? -1 : t9)), extentOffset: core.int._check((t9$ = encoded[$_get]("selectionExtent"), t9$ == null ? -1 : t9$)), affinity: (t9$0 = src__services__text_input._toTextAffinity(core.String._check(encoded[$_get]("selectionAffinity"))), t9$0 == null ? ui$.TextAffinity.downstream : t9$0), isDirectional: core.bool._check((t9$1 = encoded[$_get]("selectionIsDirectional"), t9$1 == null ? false : t9$1))}), composing: new src__services__text_editing.TextRange.new({start: core.int._check((t9$2 = encoded[$_get]("composingBase"), t9$2 == null ? -1 : t9$2)), end: core.int._check((t9$3 = encoded[$_get]("composingExtent"), t9$3 == null ? -1 : t9$3))})});
    }
    toJSON() {
      return new (IdentityMapOfString$dynamic()).from(["text", this.text, "selectionBase", this.selection.baseOffset, "selectionExtent", this.selection.extentOffset, "selectionAffinity", dart.toString(this.selection.affinity), "selectionIsDirectional", this.selection.isDirectional, "composingBase", this.composing.start, "composingExtent", this.composing.end]);
    }
    copyWith(opts) {
      let t9, t9$, t9$0;
      let text = opts && 'text' in opts ? opts.text : null;
      let selection = opts && 'selection' in opts ? opts.selection : null;
      let composing = opts && 'composing' in opts ? opts.composing : null;
      return new src__services__text_input.TextEditingValue.new({text: (t9 = text, t9 == null ? this.text : t9), selection: (t9$ = selection, t9$ == null ? this.selection : t9$), composing: (t9$0 = composing, t9$0 == null ? this.composing : t9$0)});
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(text: ┤" + dart.str(this.text) + "├, selection: " + dart.str(this.selection) + ", composing: " + dart.str(this.composing) + ")";
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) return true;
      if (!src__services__text_input.TextEditingValue.is(other)) return false;
      let typedOther = src__services__text_input.TextEditingValue._check(other);
      return typedOther.text == this.text && dart.equals(typedOther.selection, this.selection) && dart.equals(typedOther.composing, this.composing);
    }
    get hashCode() {
      return ui$.hashValues(dart.hashCode(this.text), dart.hashCode(this.selection), dart.hashCode(this.composing));
    }
  };
  (src__services__text_input.TextEditingValue.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : "";
    let selection = opts && 'selection' in opts ? opts.selection : const$16 || (const$16 = dart.const(new src__services__text_editing.TextSelection.collapsed({offset: -1})));
    let composing = opts && 'composing' in opts ? opts.composing : src__services__text_editing.TextRange.empty;
    this[text$] = text;
    this[selection$] = selection;
    this[composing$] = composing;
    if (!(text != null)) dart.assertFailed();
    if (!(selection != null)) dart.assertFailed();
    if (!(composing != null)) dart.assertFailed();
    ;
  }).prototype = src__services__text_input.TextEditingValue.prototype;
  dart.addTypeTests(src__services__text_input.TextEditingValue);
  const text$ = Symbol("TextEditingValue.text");
  const selection$ = Symbol("TextEditingValue.selection");
  const composing$ = Symbol("TextEditingValue.composing");
  dart.setMethodSignature(src__services__text_input.TextEditingValue, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextEditingValue.__proto__),
    toJSON: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(src__services__text_input.TextEditingValue, [], {composing: src__services__text_editing.TextRange, selection: src__services__text_editing.TextSelection, text: core.String})
  }));
  dart.setFieldSignature(src__services__text_input.TextEditingValue, () => ({
    __proto__: dart.getFields(src__services__text_input.TextEditingValue.__proto__),
    text: dart.finalFieldType(core.String),
    selection: dart.finalFieldType(src__services__text_editing.TextSelection),
    composing: dart.finalFieldType(src__services__text_editing.TextRange)
  }));
  dart.defineExtensionMethods(src__services__text_input.TextEditingValue, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__text_input.TextEditingValue, ['hashCode']);
  dart.defineLazy(src__services__text_input.TextEditingValue, {
    /*src__services__text_input.TextEditingValue.empty*/get empty() {
      return dart.const(new src__services__text_input.TextEditingValue.new());
    }
  });
  src__services__text_input.TextSelectionDelegate = class TextSelectionDelegate extends core.Object {};
  (src__services__text_input.TextSelectionDelegate.new = function() {
    ;
  }).prototype = src__services__text_input.TextSelectionDelegate.prototype;
  dart.addTypeTests(src__services__text_input.TextSelectionDelegate);
  src__services__text_input.TextInputClient = class TextInputClient extends core.Object {};
  (src__services__text_input.TextInputClient.new = function() {
    ;
  }).prototype = src__services__text_input.TextInputClient.prototype;
  dart.addTypeTests(src__services__text_input.TextInputClient);
  const _client$ = dart.privateName(src__services__text_input, "_client");
  const _id = dart.privateName(src__services__text_input, "_id");
  const _currentConnection = dart.privateName(src__services__text_input, "_currentConnection");
  const _scheduleHide = dart.privateName(src__services__text_input, "_scheduleHide");
  src__services__text_input.TextInputConnection = class TextInputConnection extends core.Object {
    get attached() {
      return dart.equals(src__services__text_input._clientHandler[_currentConnection], this);
    }
    show() {
      if (!dart.test(this.attached)) dart.assertFailed();
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.show");
    }
    setEditingState(value) {
      if (!dart.test(this.attached)) dart.assertFailed();
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setEditingState", value.toJSON());
    }
    close() {
      let t9;
      if (dart.test(this.attached)) {
        src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.clearClient");
        t9 = src__services__text_input._clientHandler;
        t9[_currentConnection] = null;
        t9[_scheduleHide]();
        t9;
      }
      if (!!dart.test(this.attached)) dart.assertFailed();
    }
  };
  (src__services__text_input.TextInputConnection.__ = function(_client) {
    let t9;
    this[_client$] = _client;
    if (!(_client != null)) dart.assertFailed();
    this[_id] = (t9 = src__services__text_input.TextInputConnection._nextId, src__services__text_input.TextInputConnection._nextId = dart.notNull(t9) + 1, t9);
    ;
  }).prototype = src__services__text_input.TextInputConnection.prototype;
  dart.addTypeTests(src__services__text_input.TextInputConnection);
  dart.setMethodSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getMethods(src__services__text_input.TextInputConnection.__proto__),
    show: dart.fnType(dart.void, []),
    setEditingState: dart.fnType(dart.void, [src__services__text_input.TextEditingValue]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getGetters(src__services__text_input.TextInputConnection.__proto__),
    attached: core.bool
  }));
  dart.setFieldSignature(src__services__text_input.TextInputConnection, () => ({
    __proto__: dart.getFields(src__services__text_input.TextInputConnection.__proto__),
    [_id]: dart.finalFieldType(core.int),
    [_client$]: dart.finalFieldType(src__services__text_input.TextInputClient)
  }));
  dart.defineLazy(src__services__text_input.TextInputConnection, {
    /*src__services__text_input.TextInputConnection._nextId*/get _nextId() {
      return 1;
    },
    set _nextId(_) {}
  });
  const _hidePending = dart.privateName(src__services__text_input, "_hidePending");
  const _handleTextInputInvocation = dart.privateName(src__services__text_input, "_handleTextInputInvocation");
  src__services__text_input._TextInputClientHandler = class _TextInputClientHandler extends core.Object {
    [_handleTextInputInvocation](methodCall) {
      return async.async(dart.dynamic, (function* _handleTextInputInvocation() {
        if (this[_currentConnection] == null) return;
        let method = methodCall.method;
        let args = core.List._check(methodCall.arguments);
        let client = core.int._check(args[$_get](0));
        if (client != this[_currentConnection][_id]) return;
        switch (method) {
          case "TextInputClient.updateEditingState":
          {
            this[_currentConnection][_client$].updateEditingValue(src__services__text_input.TextEditingValue.fromJSON(MapOfString$dynamic()._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.performAction":
          {
            this[_currentConnection][_client$].performAction(src__services__text_input._toTextInputAction(core.String._check(args[$_get](1))));
            break;
          }
          case "TextInputClient.updateFloatingCursor":
          {
            this[_currentConnection][_client$].updateFloatingCursor(src__services__text_input._toTextPoint(src__services__text_input._toTextCursorAction(core.String._check(args[$_get](1))), MapOfString$dynamic()._check(args[$_get](2))));
            break;
          }
          default:
          {
            dart.throw(new src__services__message_codec.MissingPluginException.new());
          }
        }
      }).bind(this));
    }
    [_scheduleHide]() {
      if (dart.test(this[_hidePending])) return;
      this[_hidePending] = true;
      async.scheduleMicrotask(dart.fn(() => {
        this[_hidePending] = false;
        if (this[_currentConnection] == null) src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.hide");
      }, VoidToNull()));
    }
  };
  (src__services__text_input._TextInputClientHandler.new = function() {
    this[_currentConnection] = null;
    this[_hidePending] = false;
    src__services__system_channels.SystemChannels.textInput.setMethodCallHandler(dart.bind(this, _handleTextInputInvocation));
  }).prototype = src__services__text_input._TextInputClientHandler.prototype;
  dart.addTypeTests(src__services__text_input._TextInputClientHandler);
  dart.setMethodSignature(src__services__text_input._TextInputClientHandler, () => ({
    __proto__: dart.getMethods(src__services__text_input._TextInputClientHandler.__proto__),
    [_handleTextInputInvocation]: dart.fnType(async.Future, [src__services__message_codec.MethodCall]),
    [_scheduleHide]: dart.fnType(dart.void, [])
  }));
  dart.setFieldSignature(src__services__text_input._TextInputClientHandler, () => ({
    __proto__: dart.getFields(src__services__text_input._TextInputClientHandler.__proto__),
    [_currentConnection]: dart.fieldType(src__services__text_input.TextInputConnection),
    [_hidePending]: dart.fieldType(core.bool)
  }));
  src__services__text_input.TextInput = class TextInput extends core.Object {
    static attach(client, configuration) {
      if (!(client != null)) dart.assertFailed();
      if (!(configuration != null)) dart.assertFailed();
      if (!dart.test(src__services__text_input.TextInput._debugEnsureInputActionWorksOnPlatform(configuration.inputAction))) dart.assertFailed();
      let connection = new src__services__text_input.TextInputConnection.__(client);
      src__services__text_input._clientHandler[_currentConnection] = connection;
      src__services__system_channels.SystemChannels.textInput.invokeMethod(dart.dynamic, "TextInput.setClient", [connection[_id], configuration.toJson()]);
      return connection;
    }
    static _debugEnsureInputActionWorksOnPlatform(inputAction) {
      if (!dart.test(dart.fn(() => {
        if (dart.test(io$.Platform.isIOS)) {
          if (!dart.test(src__services__text_input.TextInput._iOSSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on iOS.");
        } else if (dart.test(io$.Platform.isAndroid)) {
          if (!dart.test(src__services__text_input.TextInput._androidSupportedInputActions[$contains](inputAction))) dart.assertFailed("The requested TextInputAction \"" + dart.str(inputAction) + "\" is not supported on Android.");
        }
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return true;
    }
  };
  (src__services__text_input.TextInput.__ = function() {
    ;
  }).prototype = src__services__text_input.TextInput.prototype;
  dart.addTypeTests(src__services__text_input.TextInput);
  dart.defineLazy(src__services__text_input.TextInput, {
    /*src__services__text_input.TextInput._androidSupportedInputActions*/get _androidSupportedInputActions() {
      return dart.constList([src__services__text_input.TextInputAction.none, src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.previous, src__services__text_input.TextInputAction.newline], src__services__text_input.TextInputAction);
    },
    /*src__services__text_input.TextInput._iOSSupportedInputActions*/get _iOSSupportedInputActions() {
      return dart.constList([src__services__text_input.TextInputAction.unspecified, src__services__text_input.TextInputAction.done, src__services__text_input.TextInputAction.send, src__services__text_input.TextInputAction.go, src__services__text_input.TextInputAction.search, src__services__text_input.TextInputAction.next, src__services__text_input.TextInputAction.newline, src__services__text_input.TextInputAction.continueAction, src__services__text_input.TextInputAction.join, src__services__text_input.TextInputAction.route, src__services__text_input.TextInputAction.emergencyCall], src__services__text_input.TextInputAction);
    }
  });
  let const$17;
  src__services__text_input._toTextAffinity = function(affinity) {
    switch (affinity) {
      case "TextAffinity.downstream":
      {
        return ui$.TextAffinity.downstream;
      }
      case "TextAffinity.upstream":
      {
        return ui$.TextAffinity.upstream;
      }
    }
    return null;
  };
  src__services__text_input._toTextInputAction = function(action) {
    switch (action) {
      case "TextInputAction.none":
      {
        return src__services__text_input.TextInputAction.none;
      }
      case "TextInputAction.unspecified":
      {
        return src__services__text_input.TextInputAction.unspecified;
      }
      case "TextInputAction.go":
      {
        return src__services__text_input.TextInputAction.go;
      }
      case "TextInputAction.search":
      {
        return src__services__text_input.TextInputAction.search;
      }
      case "TextInputAction.send":
      {
        return src__services__text_input.TextInputAction.send;
      }
      case "TextInputAction.next":
      {
        return src__services__text_input.TextInputAction.next;
      }
      case "TextInputAction.previuos":
      {
        return src__services__text_input.TextInputAction.previous;
      }
      case "TextInputAction.continue_action":
      {
        return src__services__text_input.TextInputAction.continueAction;
      }
      case "TextInputAction.join":
      {
        return src__services__text_input.TextInputAction.join;
      }
      case "TextInputAction.route":
      {
        return src__services__text_input.TextInputAction.route;
      }
      case "TextInputAction.emergencyCall":
      {
        return src__services__text_input.TextInputAction.emergencyCall;
      }
      case "TextInputAction.done":
      {
        return src__services__text_input.TextInputAction.done;
      }
      case "TextInputAction.newline":
      {
        return src__services__text_input.TextInputAction.newline;
      }
    }
    dart.throw(new src__foundation__assertions.FlutterError.new("Unknown text input action: " + dart.str(action)));
  };
  src__services__text_input._toTextCursorAction = function(state) {
    switch (state) {
      case "FloatingCursorDragState.start":
      {
        return src__services__text_input.FloatingCursorDragState.Start;
      }
      case "FloatingCursorDragState.update":
      {
        return src__services__text_input.FloatingCursorDragState.Update;
      }
      case "FloatingCursorDragState.end":
      {
        return src__services__text_input.FloatingCursorDragState.End;
      }
    }
    dart.throw(new src__foundation__assertions.FlutterError.new("Unknown text cursor action: " + dart.str(state)));
  };
  src__services__text_input._toTextPoint = function(state, encoded) {
    if (!(state != null)) dart.assertFailed("You must provide a state to set a new editing point.");
    if (!(encoded[$_get]("X") != null)) dart.assertFailed("You must provide a value for the horizontal location of the floating cursor.");
    if (!(encoded[$_get]("Y") != null)) dart.assertFailed("You must provide a value for the vertical location of the floating cursor.");
    let offset = dart.equals(state, src__services__text_input.FloatingCursorDragState.Update) ? new ui$.Offset.new(core.double._check(encoded[$_get]("X")), core.double._check(encoded[$_get]("Y"))) : const$17 || (const$17 = dart.const(new ui$.Offset.new(0.0, 0.0)));
    return new src__services__text_input.RawFloatingCursorPoint.new({offset: offset, state: state});
  };
  dart.defineLazy(src__services__text_input, {
    /*src__services__text_input._clientHandler*/get _clientHandler() {
      return new src__services__text_input._TextInputClientHandler.new();
    }
  });
  const _name$0 = dart.privateName(src__services__system_chrome, "_name");
  src__services__system_chrome.DeviceOrientation = class DeviceOrientation extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__services__system_chrome.DeviceOrientation.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__services__system_chrome.DeviceOrientation.prototype;
  dart.addTypeTests(src__services__system_chrome.DeviceOrientation);
  dart.setFieldSignature(src__services__system_chrome.DeviceOrientation, () => ({
    __proto__: dart.getFields(src__services__system_chrome.DeviceOrientation.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.DeviceOrientation, ['toString']);
  src__services__system_chrome.DeviceOrientation.portraitUp = dart.const(new src__services__system_chrome.DeviceOrientation.new(0, "DeviceOrientation.portraitUp"));
  src__services__system_chrome.DeviceOrientation.landscapeLeft = dart.const(new src__services__system_chrome.DeviceOrientation.new(1, "DeviceOrientation.landscapeLeft"));
  src__services__system_chrome.DeviceOrientation.portraitDown = dart.const(new src__services__system_chrome.DeviceOrientation.new(2, "DeviceOrientation.portraitDown"));
  src__services__system_chrome.DeviceOrientation.landscapeRight = dart.const(new src__services__system_chrome.DeviceOrientation.new(3, "DeviceOrientation.landscapeRight"));
  src__services__system_chrome.DeviceOrientation.values = dart.constList([src__services__system_chrome.DeviceOrientation.portraitUp, src__services__system_chrome.DeviceOrientation.landscapeLeft, src__services__system_chrome.DeviceOrientation.portraitDown, src__services__system_chrome.DeviceOrientation.landscapeRight], src__services__system_chrome.DeviceOrientation);
  src__services__system_chrome.ApplicationSwitcherDescription = class ApplicationSwitcherDescription extends core.Object {
    get label() {
      return this[label$];
    }
    set label(value) {
      super.label = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
  };
  (src__services__system_chrome.ApplicationSwitcherDescription.new = function(opts) {
    let label = opts && 'label' in opts ? opts.label : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    this[label$] = label;
    this[primaryColor$] = primaryColor;
    ;
  }).prototype = src__services__system_chrome.ApplicationSwitcherDescription.prototype;
  dart.addTypeTests(src__services__system_chrome.ApplicationSwitcherDescription);
  const label$ = Symbol("ApplicationSwitcherDescription.label");
  const primaryColor$ = Symbol("ApplicationSwitcherDescription.primaryColor");
  dart.setFieldSignature(src__services__system_chrome.ApplicationSwitcherDescription, () => ({
    __proto__: dart.getFields(src__services__system_chrome.ApplicationSwitcherDescription.__proto__),
    label: dart.finalFieldType(core.String),
    primaryColor: dart.finalFieldType(core.int)
  }));
  src__services__system_chrome.SystemUiOverlay = class SystemUiOverlay extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__services__system_chrome.SystemUiOverlay.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__services__system_chrome.SystemUiOverlay.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemUiOverlay);
  dart.setFieldSignature(src__services__system_chrome.SystemUiOverlay, () => ({
    __proto__: dart.getFields(src__services__system_chrome.SystemUiOverlay.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.SystemUiOverlay, ['toString']);
  src__services__system_chrome.SystemUiOverlay.top = dart.const(new src__services__system_chrome.SystemUiOverlay.new(0, "SystemUiOverlay.top"));
  src__services__system_chrome.SystemUiOverlay.bottom = dart.const(new src__services__system_chrome.SystemUiOverlay.new(1, "SystemUiOverlay.bottom"));
  src__services__system_chrome.SystemUiOverlay.values = dart.constList([src__services__system_chrome.SystemUiOverlay.top, src__services__system_chrome.SystemUiOverlay.bottom], src__services__system_chrome.SystemUiOverlay);
  const _toMap = dart.privateName(src__services__system_chrome, "_toMap");
  src__services__system_chrome.SystemUiOverlayStyle = class SystemUiOverlayStyle extends core.Object {
    get systemNavigationBarColor() {
      return this[systemNavigationBarColor$];
    }
    set systemNavigationBarColor(value) {
      super.systemNavigationBarColor = value;
    }
    get systemNavigationBarDividerColor() {
      return this[systemNavigationBarDividerColor$];
    }
    set systemNavigationBarDividerColor(value) {
      super.systemNavigationBarDividerColor = value;
    }
    get systemNavigationBarIconBrightness() {
      return this[systemNavigationBarIconBrightness$];
    }
    set systemNavigationBarIconBrightness(value) {
      super.systemNavigationBarIconBrightness = value;
    }
    get statusBarColor() {
      return this[statusBarColor$];
    }
    set statusBarColor(value) {
      super.statusBarColor = value;
    }
    get statusBarBrightness() {
      return this[statusBarBrightness$];
    }
    set statusBarBrightness(value) {
      super.statusBarBrightness = value;
    }
    get statusBarIconBrightness() {
      return this[statusBarIconBrightness$];
    }
    set statusBarIconBrightness(value) {
      super.statusBarIconBrightness = value;
    }
    [_toMap]() {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      return new (IdentityMapOfString$dynamic()).from(["systemNavigationBarColor", (t9 = this.systemNavigationBarColor, t9 == null ? null : t9.value), "systemNavigationBarDividerColor", (t9$ = this.systemNavigationBarDividerColor, t9$ == null ? null : t9$.value), "statusBarColor", (t9$0 = this.statusBarColor, t9$0 == null ? null : t9$0.value), "statusBarBrightness", (t9$1 = this.statusBarBrightness, t9$1 == null ? null : dart.toString(t9$1)), "statusBarIconBrightness", (t9$2 = this.statusBarIconBrightness, t9$2 == null ? null : dart.toString(t9$2)), "systemNavigationBarIconBrightness", (t9$3 = this.systemNavigationBarIconBrightness, t9$3 == null ? null : dart.toString(t9$3))]);
    }
    toString() {
      return dart.toString(this[_toMap]());
    }
    copyWith(opts) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3;
      let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
      let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
      let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
      let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
      let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
      let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
      return new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: (t9 = systemNavigationBarColor, t9 == null ? this.systemNavigationBarColor : t9), systemNavigationBarDividerColor: (t9$ = systemNavigationBarDividerColor, t9$ == null ? this.systemNavigationBarDividerColor : t9$), statusBarColor: (t9$0 = statusBarColor, t9$0 == null ? this.statusBarColor : t9$0), statusBarIconBrightness: (t9$1 = statusBarIconBrightness, t9$1 == null ? this.statusBarIconBrightness : t9$1), statusBarBrightness: (t9$2 = statusBarBrightness, t9$2 == null ? this.statusBarBrightness : t9$2), systemNavigationBarIconBrightness: (t9$3 = systemNavigationBarIconBrightness, t9$3 == null ? this.systemNavigationBarIconBrightness : t9$3)});
    }
    get hashCode() {
      return ui$.hashValues(this.systemNavigationBarColor, this.systemNavigationBarDividerColor, this.statusBarColor, this.statusBarBrightness, this.statusBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) return false;
      let typedOther = src__services__system_chrome.SystemUiOverlayStyle._check(other);
      return dart.equals(typedOther.systemNavigationBarColor, this.systemNavigationBarColor) && dart.equals(typedOther.systemNavigationBarDividerColor, this.systemNavigationBarDividerColor) && dart.equals(typedOther.statusBarColor, this.statusBarColor) && dart.equals(typedOther.statusBarIconBrightness, this.statusBarIconBrightness) && dart.equals(typedOther.statusBarBrightness, this.statusBarBrightness) && dart.equals(typedOther.systemNavigationBarIconBrightness, this.systemNavigationBarIconBrightness);
    }
  };
  (src__services__system_chrome.SystemUiOverlayStyle.new = function(opts) {
    let systemNavigationBarColor = opts && 'systemNavigationBarColor' in opts ? opts.systemNavigationBarColor : null;
    let systemNavigationBarDividerColor = opts && 'systemNavigationBarDividerColor' in opts ? opts.systemNavigationBarDividerColor : null;
    let systemNavigationBarIconBrightness = opts && 'systemNavigationBarIconBrightness' in opts ? opts.systemNavigationBarIconBrightness : null;
    let statusBarColor = opts && 'statusBarColor' in opts ? opts.statusBarColor : null;
    let statusBarBrightness = opts && 'statusBarBrightness' in opts ? opts.statusBarBrightness : null;
    let statusBarIconBrightness = opts && 'statusBarIconBrightness' in opts ? opts.statusBarIconBrightness : null;
    this[systemNavigationBarColor$] = systemNavigationBarColor;
    this[systemNavigationBarDividerColor$] = systemNavigationBarDividerColor;
    this[systemNavigationBarIconBrightness$] = systemNavigationBarIconBrightness;
    this[statusBarColor$] = statusBarColor;
    this[statusBarBrightness$] = statusBarBrightness;
    this[statusBarIconBrightness$] = statusBarIconBrightness;
    ;
  }).prototype = src__services__system_chrome.SystemUiOverlayStyle.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemUiOverlayStyle);
  const systemNavigationBarColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarColor");
  const systemNavigationBarDividerColor$ = Symbol("SystemUiOverlayStyle.systemNavigationBarDividerColor");
  const systemNavigationBarIconBrightness$ = Symbol("SystemUiOverlayStyle.systemNavigationBarIconBrightness");
  const statusBarColor$ = Symbol("SystemUiOverlayStyle.statusBarColor");
  const statusBarBrightness$ = Symbol("SystemUiOverlayStyle.statusBarBrightness");
  const statusBarIconBrightness$ = Symbol("SystemUiOverlayStyle.statusBarIconBrightness");
  dart.setMethodSignature(src__services__system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getMethods(src__services__system_chrome.SystemUiOverlayStyle.__proto__),
    [_toMap]: dart.fnType(core.Map$(core.String, dart.dynamic), []),
    copyWith: dart.fnType(src__services__system_chrome.SystemUiOverlayStyle, [], {statusBarBrightness: ui$.Brightness, statusBarColor: ui$.Color, statusBarIconBrightness: ui$.Brightness, systemNavigationBarColor: ui$.Color, systemNavigationBarDividerColor: ui$.Color, systemNavigationBarIconBrightness: ui$.Brightness})
  }));
  dart.setFieldSignature(src__services__system_chrome.SystemUiOverlayStyle, () => ({
    __proto__: dart.getFields(src__services__system_chrome.SystemUiOverlayStyle.__proto__),
    systemNavigationBarColor: dart.finalFieldType(ui$.Color),
    systemNavigationBarDividerColor: dart.finalFieldType(ui$.Color),
    systemNavigationBarIconBrightness: dart.finalFieldType(ui$.Brightness),
    statusBarColor: dart.finalFieldType(ui$.Color),
    statusBarBrightness: dart.finalFieldType(ui$.Brightness),
    statusBarIconBrightness: dart.finalFieldType(ui$.Brightness)
  }));
  dart.defineExtensionMethods(src__services__system_chrome.SystemUiOverlayStyle, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__services__system_chrome.SystemUiOverlayStyle, ['hashCode']);
  dart.defineLazy(src__services__system_chrome.SystemUiOverlayStyle, {
    /*src__services__system_chrome.SystemUiOverlayStyle.light*/get light() {
      return dart.const(new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: dart.const(new ui$.Color.new(4278190080)), systemNavigationBarDividerColor: null, statusBarColor: null, systemNavigationBarIconBrightness: ui$.Brightness.light, statusBarIconBrightness: ui$.Brightness.light, statusBarBrightness: ui$.Brightness.dark}));
    },
    /*src__services__system_chrome.SystemUiOverlayStyle.dark*/get dark() {
      return dart.const(new src__services__system_chrome.SystemUiOverlayStyle.new({systemNavigationBarColor: dart.const(new ui$.Color.new(4278190080)), systemNavigationBarDividerColor: null, statusBarColor: null, systemNavigationBarIconBrightness: ui$.Brightness.light, statusBarIconBrightness: ui$.Brightness.dark, statusBarBrightness: ui$.Brightness.light}));
    }
  });
  src__services__system_chrome.SystemChrome = class SystemChrome extends core.Object {
    static setPreferredOrientations(orientations) {
      return async.async(dart.void, function* setPreferredOrientations() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setPreferredOrientations", src__services__system_chrome._stringify(orientations));
      });
    }
    static setApplicationSwitcherDescription(description) {
      return async.async(dart.void, function* setApplicationSwitcherDescription() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setApplicationSwitcherDescription", new (IdentityMapOfString$dynamic()).from(["label", description.label, "primaryColor", description.primaryColor]));
      });
    }
    static setEnabledSystemUIOverlays(overlays) {
      return async.async(dart.void, function* setEnabledSystemUIOverlays() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setEnabledSystemUIOverlays", src__services__system_chrome._stringify(overlays));
      });
    }
    static restoreSystemUIOverlays() {
      return async.async(dart.void, function* restoreSystemUIOverlays() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.restoreSystemUIOverlays", null);
      });
    }
    static setSystemUIOverlayStyle(style) {
      if (!(style != null)) dart.assertFailed();
      if (src__services__system_chrome.SystemChrome._pendingStyle != null) {
        src__services__system_chrome.SystemChrome._pendingStyle = style;
        return;
      }
      if (dart.equals(style, src__services__system_chrome.SystemChrome._latestStyle)) {
        return;
      }
      src__services__system_chrome.SystemChrome._pendingStyle = style;
      async.scheduleMicrotask(dart.fn(() => {
        if (!(src__services__system_chrome.SystemChrome._pendingStyle != null)) dart.assertFailed();
        if (!dart.equals(src__services__system_chrome.SystemChrome._pendingStyle, src__services__system_chrome.SystemChrome._latestStyle)) {
          src__services__system_channels.SystemChannels.platform.invokeMethod(dart.void, "SystemChrome.setSystemUIOverlayStyle", src__services__system_chrome.SystemChrome._pendingStyle[_toMap]());
          src__services__system_chrome.SystemChrome._latestStyle = src__services__system_chrome.SystemChrome._pendingStyle;
        }
        src__services__system_chrome.SystemChrome._pendingStyle = null;
      }, VoidToNull()));
    }
    static get latestStyle() {
      return src__services__system_chrome.SystemChrome._latestStyle;
    }
  };
  (src__services__system_chrome.SystemChrome.__ = function() {
    ;
  }).prototype = src__services__system_chrome.SystemChrome.prototype;
  dart.addTypeTests(src__services__system_chrome.SystemChrome);
  dart.defineLazy(src__services__system_chrome.SystemChrome, {
    /*src__services__system_chrome.SystemChrome._pendingStyle*/get _pendingStyle() {
      return null;
    },
    set _pendingStyle(_) {},
    /*src__services__system_chrome.SystemChrome._latestStyle*/get _latestStyle() {
      return null;
    },
    set _latestStyle(_) {}
  });
  src__services__system_chrome._stringify = function(list) {
    let result = JSArrayOfString().of([]);
    for (let item of list)
      result[$add](dart.toString(item));
    return result;
  };
  const _name$1 = dart.privateName(src__services__system_sound, "_name");
  src__services__system_sound.SystemSoundType = class SystemSoundType extends core.Object {
    toString() {
      return this[_name$1];
    }
  };
  (src__services__system_sound.SystemSoundType.new = function(index, _name) {
    this.index = index;
    this[_name$1] = _name;
    ;
  }).prototype = src__services__system_sound.SystemSoundType.prototype;
  dart.addTypeTests(src__services__system_sound.SystemSoundType);
  dart.setFieldSignature(src__services__system_sound.SystemSoundType, () => ({
    __proto__: dart.getFields(src__services__system_sound.SystemSoundType.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$1]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__system_sound.SystemSoundType, ['toString']);
  src__services__system_sound.SystemSoundType.click = dart.const(new src__services__system_sound.SystemSoundType.new(0, "SystemSoundType.click"));
  src__services__system_sound.SystemSoundType.values = dart.constList([src__services__system_sound.SystemSoundType.click], src__services__system_sound.SystemSoundType);
  src__services__system_sound.SystemSound = class SystemSound extends core.Object {
    static play(type) {
      return async.async(dart.void, function* play() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "SystemSound.play", dart.toString(type));
      });
    }
  };
  (src__services__system_sound.SystemSound.__ = function() {
    ;
  }).prototype = src__services__system_sound.SystemSound.prototype;
  dart.addTypeTests(src__services__system_sound.SystemSound);
  const _name$2 = dart.privateName(src__services__raw_keyboard, "_name");
  src__services__raw_keyboard.KeyboardSide = class KeyboardSide extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__services__raw_keyboard.KeyboardSide.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__services__raw_keyboard.KeyboardSide.prototype;
  dart.addTypeTests(src__services__raw_keyboard.KeyboardSide);
  dart.setFieldSignature(src__services__raw_keyboard.KeyboardSide, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.KeyboardSide.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard.KeyboardSide, ['toString']);
  src__services__raw_keyboard.KeyboardSide.any = dart.const(new src__services__raw_keyboard.KeyboardSide.new(0, "KeyboardSide.any"));
  src__services__raw_keyboard.KeyboardSide.left = dart.const(new src__services__raw_keyboard.KeyboardSide.new(1, "KeyboardSide.left"));
  src__services__raw_keyboard.KeyboardSide.right = dart.const(new src__services__raw_keyboard.KeyboardSide.new(2, "KeyboardSide.right"));
  src__services__raw_keyboard.KeyboardSide.all = dart.const(new src__services__raw_keyboard.KeyboardSide.new(3, "KeyboardSide.all"));
  src__services__raw_keyboard.KeyboardSide.values = dart.constList([src__services__raw_keyboard.KeyboardSide.any, src__services__raw_keyboard.KeyboardSide.left, src__services__raw_keyboard.KeyboardSide.right, src__services__raw_keyboard.KeyboardSide.all], src__services__raw_keyboard.KeyboardSide);
  src__services__raw_keyboard.ModifierKey = class ModifierKey extends core.Object {
    toString() {
      return this[_name$2];
    }
  };
  (src__services__raw_keyboard.ModifierKey.new = function(index, _name) {
    this.index = index;
    this[_name$2] = _name;
    ;
  }).prototype = src__services__raw_keyboard.ModifierKey.prototype;
  dart.addTypeTests(src__services__raw_keyboard.ModifierKey);
  dart.setFieldSignature(src__services__raw_keyboard.ModifierKey, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.ModifierKey.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$2]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard.ModifierKey, ['toString']);
  src__services__raw_keyboard.ModifierKey.controlModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(0, "ModifierKey.controlModifier"));
  src__services__raw_keyboard.ModifierKey.shiftModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(1, "ModifierKey.shiftModifier"));
  src__services__raw_keyboard.ModifierKey.altModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(2, "ModifierKey.altModifier"));
  src__services__raw_keyboard.ModifierKey.metaModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(3, "ModifierKey.metaModifier"));
  src__services__raw_keyboard.ModifierKey.capsLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(4, "ModifierKey.capsLockModifier"));
  src__services__raw_keyboard.ModifierKey.numLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(5, "ModifierKey.numLockModifier"));
  src__services__raw_keyboard.ModifierKey.scrollLockModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(6, "ModifierKey.scrollLockModifier"));
  src__services__raw_keyboard.ModifierKey.functionModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(7, "ModifierKey.functionModifier"));
  src__services__raw_keyboard.ModifierKey.symbolModifier = dart.const(new src__services__raw_keyboard.ModifierKey.new(8, "ModifierKey.symbolModifier"));
  src__services__raw_keyboard.ModifierKey.values = dart.constList([src__services__raw_keyboard.ModifierKey.controlModifier, src__services__raw_keyboard.ModifierKey.shiftModifier, src__services__raw_keyboard.ModifierKey.altModifier, src__services__raw_keyboard.ModifierKey.metaModifier, src__services__raw_keyboard.ModifierKey.capsLockModifier, src__services__raw_keyboard.ModifierKey.numLockModifier, src__services__raw_keyboard.ModifierKey.scrollLockModifier, src__services__raw_keyboard.ModifierKey.functionModifier, src__services__raw_keyboard.ModifierKey.symbolModifier], src__services__raw_keyboard.ModifierKey);
  src__services__raw_keyboard.RawKeyEventData = class RawKeyEventData extends core.Object {
    get isControlPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.controlModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isShiftPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.shiftModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isAltPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.altModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get isMetaPressed() {
      return this.isModifierPressed(src__services__raw_keyboard.ModifierKey.metaModifier, {side: src__services__raw_keyboard.KeyboardSide.any});
    }
    get modifiersPressed() {
      let result = new (LinkedMapOfModifierKey$KeyboardSide()).new();
      for (let key of src__services__raw_keyboard.ModifierKey.values) {
        if (dart.test(this.isModifierPressed(key))) {
          result[$_set](key, this.getModifierSide(key));
        }
      }
      return result;
    }
  };
  (src__services__raw_keyboard.RawKeyEventData.new = function() {
    ;
  }).prototype = src__services__raw_keyboard.RawKeyEventData.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyEventData);
  dart.setGetterSignature(src__services__raw_keyboard.RawKeyEventData, () => ({
    __proto__: dart.getGetters(src__services__raw_keyboard.RawKeyEventData.__proto__),
    isControlPressed: core.bool,
    isShiftPressed: core.bool,
    isAltPressed: core.bool,
    isMetaPressed: core.bool,
    modifiersPressed: core.Map$(src__services__raw_keyboard.ModifierKey, src__services__raw_keyboard.KeyboardSide)
  }));
  src__services__raw_keyboard.RawKeyEvent = class RawKeyEvent extends core.Object {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    static fromMessage(message) {
      let t9, t9$, t9$0, t9$1, t9$2, t9$3, t9$4, t9$5;
      let data = null;
      let keymap = core.String._check(message[$_get]("keymap"));
      switch (keymap) {
        case "android":
        {
          data = new src__services__raw_keyboard_android.RawKeyEventDataAndroid.new({flags: core.int._check((t9 = message[$_get]("flags"), t9 == null ? 0 : t9)), codePoint: core.int._check((t9$ = message[$_get]("codePoint"), t9$ == null ? 0 : t9$)), keyCode: core.int._check((t9$0 = message[$_get]("keyCode"), t9$0 == null ? 0 : t9$0)), scanCode: core.int._check((t9$1 = message[$_get]("scanCode"), t9$1 == null ? 0 : t9$1)), metaState: core.int._check((t9$2 = message[$_get]("metaState"), t9$2 == null ? 0 : t9$2))});
          break;
        }
        case "fuchsia":
        {
          data = new src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.new({hidUsage: core.int._check((t9$3 = message[$_get]("hidUsage"), t9$3 == null ? 0 : t9$3)), codePoint: core.int._check((t9$4 = message[$_get]("codePoint"), t9$4 == null ? 0 : t9$4)), modifiers: core.int._check((t9$5 = message[$_get]("modifiers"), t9$5 == null ? 0 : t9$5))});
          break;
        }
        default:
        {
          dart.throw(new src__foundation__assertions.FlutterError.new("Unknown keymap for key events: " + dart.str(keymap)));
        }
      }
      let type = core.String._check(message[$_get]("type"));
      switch (type) {
        case "keydown":
        {
          return new src__services__raw_keyboard.RawKeyDownEvent.new({data: data});
        }
        case "keyup":
        {
          return new src__services__raw_keyboard.RawKeyUpEvent.new({data: data});
        }
        default:
        {
          dart.throw(new src__foundation__assertions.FlutterError.new("Unknown key event type: " + dart.str(type)));
        }
      }
    }
  };
  (src__services__raw_keyboard.RawKeyEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    this[data$] = data;
    ;
  }).prototype = src__services__raw_keyboard.RawKeyEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyEvent);
  const data$ = Symbol("RawKeyEvent.data");
  dart.setFieldSignature(src__services__raw_keyboard.RawKeyEvent, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.RawKeyEvent.__proto__),
    data: dart.finalFieldType(src__services__raw_keyboard.RawKeyEventData)
  }));
  src__services__raw_keyboard.RawKeyDownEvent = class RawKeyDownEvent extends src__services__raw_keyboard.RawKeyEvent {};
  (src__services__raw_keyboard.RawKeyDownEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    src__services__raw_keyboard.RawKeyDownEvent.__proto__.new.call(this, {data: data});
    ;
  }).prototype = src__services__raw_keyboard.RawKeyDownEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyDownEvent);
  src__services__raw_keyboard.RawKeyUpEvent = class RawKeyUpEvent extends src__services__raw_keyboard.RawKeyEvent {};
  (src__services__raw_keyboard.RawKeyUpEvent.new = function(opts) {
    let data = opts && 'data' in opts ? opts.data : null;
    src__services__raw_keyboard.RawKeyUpEvent.__proto__.new.call(this, {data: data});
    ;
  }).prototype = src__services__raw_keyboard.RawKeyUpEvent.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyUpEvent);
  const _listeners = dart.privateName(src__services__raw_keyboard, "_listeners");
  const _handleKeyEvent = dart.privateName(src__services__raw_keyboard, "_handleKeyEvent");
  src__services__raw_keyboard.RawKeyboard = class RawKeyboard extends core.Object {
    addListener(listener) {
      this[_listeners][$add](listener);
    }
    removeListener(listener) {
      this[_listeners][$remove](listener);
    }
    [_handleKeyEvent](message) {
      return async.async(dart.dynamic, (function* _handleKeyEvent() {
        if (dart.test(this[_listeners][$isEmpty])) {
          return;
        }
        let event = src__services__raw_keyboard.RawKeyEvent.fromMessage(MapOfString$dynamic()._check(message));
        if (event == null) {
          return;
        }
        for (let listener of ListOfRawKeyEventTovoid().from(this[_listeners])) {
          if (dart.test(this[_listeners][$contains](listener))) {
            listener(event);
          }
        }
      }).bind(this));
    }
  };
  (src__services__raw_keyboard.RawKeyboard.__ = function() {
    this[_listeners] = JSArrayOfRawKeyEventTovoid().of([]);
    src__services__system_channels.SystemChannels.keyEvent.setMessageHandler(dart.bind(this, _handleKeyEvent));
  }).prototype = src__services__raw_keyboard.RawKeyboard.prototype;
  dart.addTypeTests(src__services__raw_keyboard.RawKeyboard);
  dart.setMethodSignature(src__services__raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard.RawKeyboard.__proto__),
    addListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])]),
    removeListener: dart.fnType(dart.void, [dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])]),
    [_handleKeyEvent]: dart.fnType(async.Future, [dart.dynamic])
  }));
  dart.setFieldSignature(src__services__raw_keyboard.RawKeyboard, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard.RawKeyboard.__proto__),
    [_listeners]: dart.finalFieldType(core.List$(dart.fnType(dart.void, [src__services__raw_keyboard.RawKeyEvent])))
  }));
  dart.defineLazy(src__services__raw_keyboard.RawKeyboard, {
    /*src__services__raw_keyboard.RawKeyboard.instance*/get instance() {
      return new src__services__raw_keyboard.RawKeyboard.__();
    }
  });
  const _isLeftRightModifierPressed = dart.privateName(src__services__raw_keyboard_fuschia, "_isLeftRightModifierPressed");
  src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia = class RawKeyEventDataFuchsia extends src__services__raw_keyboard.RawKeyEventData {
    get hidUsage() {
      return this[hidUsage$];
    }
    set hidUsage(value) {
      super.hidUsage = value;
    }
    get codePoint() {
      return this[codePoint$];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get modifiers() {
      return this[modifiers$];
    }
    set modifiers(value) {
      super.modifiers = value;
    }
    [_isLeftRightModifierPressed](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.modifiers) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case src__services__raw_keyboard.KeyboardSide.any:
        {
          return true;
        }
        case src__services__raw_keyboard.KeyboardSide.all:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.left:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(leftMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.right:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : src__services__raw_keyboard.KeyboardSide.any;
      if (!(side != null)) dart.assertFailed();
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return this[_isLeftRightModifierPressed](side, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierControl, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftControl, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightControl);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return this[_isLeftRightModifierPressed](side, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierShift, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftShift, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightShift);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return this[_isLeftRightModifierPressed](side, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierAlt, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftAlt, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightAlt);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return this[_isLeftRightModifierPressed](side, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierMeta, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftMeta, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightMeta);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierCapsLock)) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return false;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask, combinedMask) => {
        let combined = (dart.notNull(this.modifiers) & dart.notNull(combinedMask)) >>> 0;
        if (combined === leftMask) {
          return src__services__raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return src__services__raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintAndintToKeyboardSide());
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return findSide(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftControl, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightControl, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierControl);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return findSide(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftShift, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightShift, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierShift);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return findSide(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftAlt, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightAlt, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierAlt);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return findSide(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftMeta, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightMeta, src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierMeta);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.modifiers) & dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierCapsLock)) === 0 ? null : src__services__raw_keyboard.KeyboardSide.all;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return null;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(hidUsage: " + dart.str(this.hidUsage) + ", codePoint: " + dart.str(this.codePoint) + ", modifiers: " + dart.str(this.modifiers) + ", " + "modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.new = function(opts) {
    let hidUsage = opts && 'hidUsage' in opts ? opts.hidUsage : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let modifiers = opts && 'modifiers' in opts ? opts.modifiers : 0;
    this[hidUsage$] = hidUsage;
    this[codePoint$] = codePoint;
    this[modifiers$] = modifiers;
    if (!(hidUsage != null)) dart.assertFailed();
    if (!(codePoint != null)) dart.assertFailed();
    if (!(modifiers != null)) dart.assertFailed();
    src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__.new.call(this);
    ;
  }).prototype = src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.prototype;
  dart.addTypeTests(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia);
  const hidUsage$ = Symbol("RawKeyEventDataFuchsia.hidUsage");
  const codePoint$ = Symbol("RawKeyEventDataFuchsia.codePoint");
  const modifiers$ = Symbol("RawKeyEventDataFuchsia.modifiers");
  dart.setMethodSignature(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__),
    [_isLeftRightModifierPressed]: dart.fnType(core.bool, [src__services__raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [src__services__raw_keyboard.ModifierKey], {side: src__services__raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(src__services__raw_keyboard.KeyboardSide, [src__services__raw_keyboard.ModifierKey])
  }));
  dart.setFieldSignature(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.__proto__),
    hidUsage: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    modifiers: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, ['toString']);
  dart.defineLazy(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia, {
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierNone*/get modifierNone() {
      return 0;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierCapsLock*/get modifierCapsLock() {
      return 1;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftShift*/get modifierLeftShift() {
      return 2;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightShift*/get modifierRightShift() {
      return 4;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierShift*/get modifierShift() {
      return (dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftShift) | dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightShift)) >>> 0;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftControl*/get modifierLeftControl() {
      return 8;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightControl*/get modifierRightControl() {
      return 16;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierControl*/get modifierControl() {
      return (dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftControl) | dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightControl)) >>> 0;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftAlt*/get modifierLeftAlt() {
      return 32;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightAlt*/get modifierRightAlt() {
      return 64;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierAlt*/get modifierAlt() {
      return (dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftAlt) | dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightAlt)) >>> 0;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftMeta*/get modifierLeftMeta() {
      return 128;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightMeta*/get modifierRightMeta() {
      return 256;
    },
    /*src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierMeta*/get modifierMeta() {
      return (dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierLeftMeta) | dart.notNull(src__services__raw_keyboard_fuschia.RawKeyEventDataFuchsia.modifierRightMeta)) >>> 0;
    }
  });
  const _isLeftRightModifierPressed$ = dart.privateName(src__services__raw_keyboard_android, "_isLeftRightModifierPressed");
  src__services__raw_keyboard_android.RawKeyEventDataAndroid = class RawKeyEventDataAndroid extends src__services__raw_keyboard.RawKeyEventData {
    get flags() {
      return this[flags$];
    }
    set flags(value) {
      super.flags = value;
    }
    get codePoint() {
      return this[codePoint$0];
    }
    set codePoint(value) {
      super.codePoint = value;
    }
    get keyCode() {
      return this[keyCode$];
    }
    set keyCode(value) {
      super.keyCode = value;
    }
    get scanCode() {
      return this[scanCode$];
    }
    set scanCode(value) {
      super.scanCode = value;
    }
    get metaState() {
      return this[metaState$];
    }
    set metaState(value) {
      super.metaState = value;
    }
    [_isLeftRightModifierPressed$](side, anyMask, leftMask, rightMask) {
      if ((dart.notNull(this.metaState) & dart.notNull(anyMask)) === 0) {
        return false;
      }
      switch (side) {
        case src__services__raw_keyboard.KeyboardSide.any:
        {
          return true;
        }
        case src__services__raw_keyboard.KeyboardSide.all:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0 && (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.left:
        {
          return (dart.notNull(this.metaState) & dart.notNull(leftMask)) !== 0;
        }
        case src__services__raw_keyboard.KeyboardSide.right:
        {
          return (dart.notNull(this.metaState) & dart.notNull(rightMask)) !== 0;
        }
      }
      return false;
    }
    isModifierPressed(key, opts) {
      let side = opts && 'side' in opts ? opts.side : src__services__raw_keyboard.KeyboardSide.any;
      if (!(side != null)) dart.assertFailed();
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return this[_isLeftRightModifierPressed$](side, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierControl, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return this[_isLeftRightModifierPressed$](side, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierShift, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return this[_isLeftRightModifierPressed$](side, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return this[_isLeftRightModifierPressed$](side, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        {
          return (dart.notNull(this.metaState) & dart.notNull(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock)) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        {
          return (dart.notNull(this.metaState) & dart.notNull(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock)) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        {
          return (dart.notNull(this.metaState) & dart.notNull(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock)) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        {
          return (dart.notNull(this.metaState) & dart.notNull(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction)) !== 0;
        }
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return (dart.notNull(this.metaState) & dart.notNull(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierSym)) !== 0;
        }
      }
      return false;
    }
    getModifierSide(key) {
      const findSide = (leftMask, rightMask) => {
        let combinedMask = (dart.notNull(leftMask) | dart.notNull(rightMask)) >>> 0;
        let combined = (dart.notNull(this.metaState) & combinedMask) >>> 0;
        if (combined === leftMask) {
          return src__services__raw_keyboard.KeyboardSide.left;
        } else if (combined === rightMask) {
          return src__services__raw_keyboard.KeyboardSide.right;
        } else if (combined === combinedMask) {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
        return null;
      };
      dart.fn(findSide, intAndintToKeyboardSide());
      switch (key) {
        case src__services__raw_keyboard.ModifierKey.controlModifier:
        {
          return findSide(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl);
        }
        case src__services__raw_keyboard.ModifierKey.shiftModifier:
        {
          return findSide(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift);
        }
        case src__services__raw_keyboard.ModifierKey.altModifier:
        {
          return findSide(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt);
        }
        case src__services__raw_keyboard.ModifierKey.metaModifier:
        {
          return findSide(src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta, src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta);
        }
        case src__services__raw_keyboard.ModifierKey.capsLockModifier:
        case src__services__raw_keyboard.ModifierKey.numLockModifier:
        case src__services__raw_keyboard.ModifierKey.scrollLockModifier:
        case src__services__raw_keyboard.ModifierKey.functionModifier:
        case src__services__raw_keyboard.ModifierKey.symbolModifier:
        {
          return src__services__raw_keyboard.KeyboardSide.all;
        }
      }
      if (!false) dart.assertFailed("Not handling " + dart.str(key) + " type properly.");
      return null;
    }
    toString() {
      return dart.str(this[$runtimeType]) + "(flags: " + dart.str(this.flags) + ", codePoint: " + dart.str(this.codePoint) + ", keyCode: " + dart.str(this.keyCode) + ", " + "scanCode: " + dart.str(this.scanCode) + ", metaState: " + dart.str(this.metaState) + ", modifiers down: " + dart.str(this.modifiersPressed) + ")";
    }
  };
  (src__services__raw_keyboard_android.RawKeyEventDataAndroid.new = function(opts) {
    let flags = opts && 'flags' in opts ? opts.flags : 0;
    let codePoint = opts && 'codePoint' in opts ? opts.codePoint : 0;
    let keyCode = opts && 'keyCode' in opts ? opts.keyCode : 0;
    let scanCode = opts && 'scanCode' in opts ? opts.scanCode : 0;
    let metaState = opts && 'metaState' in opts ? opts.metaState : 0;
    this[flags$] = flags;
    this[codePoint$0] = codePoint;
    this[keyCode$] = keyCode;
    this[scanCode$] = scanCode;
    this[metaState$] = metaState;
    if (!(flags != null)) dart.assertFailed();
    if (!(codePoint != null)) dart.assertFailed();
    if (!(keyCode != null)) dart.assertFailed();
    if (!(scanCode != null)) dart.assertFailed();
    if (!(metaState != null)) dart.assertFailed();
    src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__.new.call(this);
    ;
  }).prototype = src__services__raw_keyboard_android.RawKeyEventDataAndroid.prototype;
  dart.addTypeTests(src__services__raw_keyboard_android.RawKeyEventDataAndroid);
  const flags$ = Symbol("RawKeyEventDataAndroid.flags");
  const codePoint$0 = Symbol("RawKeyEventDataAndroid.codePoint");
  const keyCode$ = Symbol("RawKeyEventDataAndroid.keyCode");
  const scanCode$ = Symbol("RawKeyEventDataAndroid.scanCode");
  const metaState$ = Symbol("RawKeyEventDataAndroid.metaState");
  dart.setMethodSignature(src__services__raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getMethods(src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    [_isLeftRightModifierPressed$]: dart.fnType(core.bool, [src__services__raw_keyboard.KeyboardSide, core.int, core.int, core.int]),
    isModifierPressed: dart.fnType(core.bool, [src__services__raw_keyboard.ModifierKey], {side: src__services__raw_keyboard.KeyboardSide}),
    getModifierSide: dart.fnType(src__services__raw_keyboard.KeyboardSide, [src__services__raw_keyboard.ModifierKey])
  }));
  dart.setFieldSignature(src__services__raw_keyboard_android.RawKeyEventDataAndroid, () => ({
    __proto__: dart.getFields(src__services__raw_keyboard_android.RawKeyEventDataAndroid.__proto__),
    flags: dart.finalFieldType(core.int),
    codePoint: dart.finalFieldType(core.int),
    keyCode: dart.finalFieldType(core.int),
    scanCode: dart.finalFieldType(core.int),
    metaState: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__raw_keyboard_android.RawKeyEventDataAndroid, ['toString']);
  dart.defineLazy(src__services__raw_keyboard_android.RawKeyEventDataAndroid, {
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierNone*/get modifierNone() {
      return 0;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierAlt*/get modifierAlt() {
      return 2;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftAlt*/get modifierLeftAlt() {
      return 16;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightAlt*/get modifierRightAlt() {
      return 32;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierShift*/get modifierShift() {
      return 1;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftShift*/get modifierLeftShift() {
      return 64;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightShift*/get modifierRightShift() {
      return 128;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierSym*/get modifierSym() {
      return 4;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierFunction*/get modifierFunction() {
      return 8;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierControl*/get modifierControl() {
      return 4096;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftControl*/get modifierLeftControl() {
      return 8192;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightControl*/get modifierRightControl() {
      return 16384;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierMeta*/get modifierMeta() {
      return 65536;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierLeftMeta*/get modifierLeftMeta() {
      return 131072;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierRightMeta*/get modifierRightMeta() {
      return 262144;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierCapsLock*/get modifierCapsLock() {
      return 1048576;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierNumLock*/get modifierNumLock() {
      return 2097152;
    },
    /*src__services__raw_keyboard_android.RawKeyEventDataAndroid.modifierScrollLock*/get modifierScrollLock() {
      return 4194304;
    }
  });
  const _nextPlatformViewId = dart.privateName(src__services__platform_views, "_nextPlatformViewId");
  src__services__platform_views.PlatformViewsRegistry = class PlatformViewsRegistry extends core.Object {
    getNextPlatformViewId() {
      let t9;
      t9 = this[_nextPlatformViewId];
      this[_nextPlatformViewId] = dart.notNull(t9) + 1;
      return t9;
    }
  };
  (src__services__platform_views.PlatformViewsRegistry._instance = function() {
    this[_nextPlatformViewId] = 0;
    ;
  }).prototype = src__services__platform_views.PlatformViewsRegistry.prototype;
  dart.addTypeTests(src__services__platform_views.PlatformViewsRegistry);
  dart.setMethodSignature(src__services__platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getMethods(src__services__platform_views.PlatformViewsRegistry.__proto__),
    getNextPlatformViewId: dart.fnType(core.int, [])
  }));
  dart.setFieldSignature(src__services__platform_views.PlatformViewsRegistry, () => ({
    __proto__: dart.getFields(src__services__platform_views.PlatformViewsRegistry.__proto__),
    [_nextPlatformViewId]: dart.fieldType(core.int)
  }));
  src__services__platform_views.PlatformViewsService = class PlatformViewsService extends core.Object {
    static initAndroidView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      let onPlatformViewCreated = opts && 'onPlatformViewCreated' in opts ? opts.onPlatformViewCreated : null;
      if (!(id != null)) dart.assertFailed();
      if (!(viewType != null)) dart.assertFailed();
      if (!(layoutDirection != null)) dart.assertFailed();
      if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
      return new src__services__platform_views.AndroidViewController.__(id, viewType, creationParams, creationParamsCodec, layoutDirection, onPlatformViewCreated);
    }
    static initUiKitView(opts) {
      let id = opts && 'id' in opts ? opts.id : null;
      let viewType = opts && 'viewType' in opts ? opts.viewType : null;
      let layoutDirection = opts && 'layoutDirection' in opts ? opts.layoutDirection : null;
      let creationParams = opts && 'creationParams' in opts ? opts.creationParams : null;
      let creationParamsCodec = opts && 'creationParamsCodec' in opts ? opts.creationParamsCodec : null;
      return async.async(src__services__platform_views.UiKitViewController, function* initUiKitView() {
        if (!(id != null)) dart.assertFailed();
        if (!(viewType != null)) dart.assertFailed();
        if (!(layoutDirection != null)) dart.assertFailed();
        if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
        let args = new (IdentityMapOfString$dynamic()).from(["id", id, "viewType", viewType]);
        if (creationParams != null) {
          let paramsByteData = creationParamsCodec.encodeMessage(creationParams);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "create", args);
        return new src__services__platform_views.UiKitViewController.__(id, layoutDirection);
      });
    }
  };
  (src__services__platform_views.PlatformViewsService.__ = function() {
    ;
  }).prototype = src__services__platform_views.PlatformViewsService.prototype;
  dart.addTypeTests(src__services__platform_views.PlatformViewsService);
  const _asList = dart.privateName(src__services__platform_views, "_asList");
  src__services__platform_views.AndroidPointerProperties = class AndroidPointerProperties extends core.Object {
    get id() {
      return this[id$];
    }
    set id(value) {
      super.id = value;
    }
    get toolType() {
      return this[toolType$];
    }
    set toolType(value) {
      super.toolType = value;
    }
    [_asList]() {
      return JSArrayOfint().of([this.id, this.toolType]);
    }
    toString() {
      return "AndroidPointerProperties(id: " + dart.str(this.id) + ", toolType: " + dart.str(this.toolType) + ")";
    }
  };
  (src__services__platform_views.AndroidPointerProperties.new = function(opts) {
    let id = opts && 'id' in opts ? opts.id : null;
    let toolType = opts && 'toolType' in opts ? opts.toolType : null;
    this[id$] = id;
    this[toolType$] = toolType;
    if (!(id != null)) dart.assertFailed();
    if (!(toolType != null)) dart.assertFailed();
    ;
  }).prototype = src__services__platform_views.AndroidPointerProperties.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidPointerProperties);
  const id$ = Symbol("AndroidPointerProperties.id");
  const toolType$ = Symbol("AndroidPointerProperties.toolType");
  dart.setMethodSignature(src__services__platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidPointerProperties.__proto__),
    [_asList]: dart.fnType(core.List$(core.int), [])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidPointerProperties, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidPointerProperties.__proto__),
    id: dart.finalFieldType(core.int),
    toolType: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidPointerProperties, ['toString']);
  dart.defineLazy(src__services__platform_views.AndroidPointerProperties, {
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeUnknown*/get kToolTypeUnknown() {
      return 0;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeFinger*/get kToolTypeFinger() {
      return 1;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeStylus*/get kToolTypeStylus() {
      return 2;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeMouse*/get kToolTypeMouse() {
      return 3;
    },
    /*src__services__platform_views.AndroidPointerProperties.kToolTypeEraser*/get kToolTypeEraser() {
      return 4;
    }
  });
  src__services__platform_views.AndroidPointerCoords = class AndroidPointerCoords extends core.Object {
    get orientation() {
      return this[orientation$];
    }
    set orientation(value) {
      super.orientation = value;
    }
    get pressure() {
      return this[pressure$];
    }
    set pressure(value) {
      super.pressure = value;
    }
    get size() {
      return this[size$];
    }
    set size(value) {
      super.size = value;
    }
    get toolMajor() {
      return this[toolMajor$];
    }
    set toolMajor(value) {
      super.toolMajor = value;
    }
    get toolMinor() {
      return this[toolMinor$];
    }
    set toolMinor(value) {
      super.toolMinor = value;
    }
    get touchMajor() {
      return this[touchMajor$];
    }
    set touchMajor(value) {
      super.touchMajor = value;
    }
    get touchMinor() {
      return this[touchMinor$];
    }
    set touchMinor(value) {
      super.touchMinor = value;
    }
    get x() {
      return this[x$];
    }
    set x(value) {
      super.x = value;
    }
    get y() {
      return this[y$];
    }
    set y(value) {
      super.y = value;
    }
    [_asList]() {
      return JSArrayOfdouble().of([this.orientation, this.pressure, this.size, this.toolMajor, this.toolMinor, this.touchMajor, this.touchMinor, this.x, this.y]);
    }
    toString() {
      return "AndroidPointerCoords(orientation: " + dart.str(this.orientation) + ", pressure: " + dart.str(this.pressure) + ", size: " + dart.str(this.size) + ", toolMajor: " + dart.str(this.toolMajor) + ", toolMinor: " + dart.str(this.toolMinor) + ", touchMajor: " + dart.str(this.touchMajor) + ", touchMinor: " + dart.str(this.touchMinor) + ", x: " + dart.str(this.x) + ", y: " + dart.str(this.y) + ")";
    }
  };
  (src__services__platform_views.AndroidPointerCoords.new = function(opts) {
    let orientation = opts && 'orientation' in opts ? opts.orientation : null;
    let pressure = opts && 'pressure' in opts ? opts.pressure : null;
    let size = opts && 'size' in opts ? opts.size : null;
    let toolMajor = opts && 'toolMajor' in opts ? opts.toolMajor : null;
    let toolMinor = opts && 'toolMinor' in opts ? opts.toolMinor : null;
    let touchMajor = opts && 'touchMajor' in opts ? opts.touchMajor : null;
    let touchMinor = opts && 'touchMinor' in opts ? opts.touchMinor : null;
    let x = opts && 'x' in opts ? opts.x : null;
    let y = opts && 'y' in opts ? opts.y : null;
    this[orientation$] = orientation;
    this[pressure$] = pressure;
    this[size$] = size;
    this[toolMajor$] = toolMajor;
    this[toolMinor$] = toolMinor;
    this[touchMajor$] = touchMajor;
    this[touchMinor$] = touchMinor;
    this[x$] = x;
    this[y$] = y;
    if (!(orientation != null)) dart.assertFailed();
    if (!(pressure != null)) dart.assertFailed();
    if (!(size != null)) dart.assertFailed();
    if (!(toolMajor != null)) dart.assertFailed();
    if (!(toolMinor != null)) dart.assertFailed();
    if (!(touchMajor != null)) dart.assertFailed();
    if (!(touchMinor != null)) dart.assertFailed();
    if (!(x != null)) dart.assertFailed();
    if (!(y != null)) dart.assertFailed();
    ;
  }).prototype = src__services__platform_views.AndroidPointerCoords.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidPointerCoords);
  const orientation$ = Symbol("AndroidPointerCoords.orientation");
  const pressure$ = Symbol("AndroidPointerCoords.pressure");
  const size$ = Symbol("AndroidPointerCoords.size");
  const toolMajor$ = Symbol("AndroidPointerCoords.toolMajor");
  const toolMinor$ = Symbol("AndroidPointerCoords.toolMinor");
  const touchMajor$ = Symbol("AndroidPointerCoords.touchMajor");
  const touchMinor$ = Symbol("AndroidPointerCoords.touchMinor");
  const x$ = Symbol("AndroidPointerCoords.x");
  const y$ = Symbol("AndroidPointerCoords.y");
  dart.setMethodSignature(src__services__platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidPointerCoords.__proto__),
    [_asList]: dart.fnType(core.List$(core.double), [])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidPointerCoords, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidPointerCoords.__proto__),
    orientation: dart.finalFieldType(core.double),
    pressure: dart.finalFieldType(core.double),
    size: dart.finalFieldType(core.double),
    toolMajor: dart.finalFieldType(core.double),
    toolMinor: dart.finalFieldType(core.double),
    touchMajor: dart.finalFieldType(core.double),
    touchMinor: dart.finalFieldType(core.double),
    x: dart.finalFieldType(core.double),
    y: dart.finalFieldType(core.double)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidPointerCoords, ['toString']);
  src__services__platform_views.AndroidMotionEvent = class AndroidMotionEvent extends core.Object {
    get downTime() {
      return this[downTime$];
    }
    set downTime(value) {
      super.downTime = value;
    }
    get eventTime() {
      return this[eventTime$];
    }
    set eventTime(value) {
      super.eventTime = value;
    }
    get action() {
      return this[action$];
    }
    set action(value) {
      super.action = value;
    }
    get pointerCount() {
      return this[pointerCount$];
    }
    set pointerCount(value) {
      super.pointerCount = value;
    }
    get pointerProperties() {
      return this[pointerProperties$];
    }
    set pointerProperties(value) {
      super.pointerProperties = value;
    }
    get pointerCoords() {
      return this[pointerCoords$];
    }
    set pointerCoords(value) {
      super.pointerCoords = value;
    }
    get metaState() {
      return this[metaState$0];
    }
    set metaState(value) {
      super.metaState = value;
    }
    get buttonState() {
      return this[buttonState$];
    }
    set buttonState(value) {
      super.buttonState = value;
    }
    get xPrecision() {
      return this[xPrecision$];
    }
    set xPrecision(value) {
      super.xPrecision = value;
    }
    get yPrecision() {
      return this[yPrecision$];
    }
    set yPrecision(value) {
      super.yPrecision = value;
    }
    get deviceId() {
      return this[deviceId$];
    }
    set deviceId(value) {
      super.deviceId = value;
    }
    get edgeFlags() {
      return this[edgeFlags$];
    }
    set edgeFlags(value) {
      super.edgeFlags = value;
    }
    get source() {
      return this[source$];
    }
    set source(value) {
      super.source = value;
    }
    get flags() {
      return this[flags$0];
    }
    set flags(value) {
      super.flags = value;
    }
    [_asList](viewId) {
      return [viewId, this.downTime, this.eventTime, this.action, this.pointerCount, this.pointerProperties[$map](ListOfint(), dart.fn(p => p[_asList](), AndroidPointerPropertiesToListOfint()))[$toList](), this.pointerCoords[$map](ListOfdouble(), dart.fn(p => p[_asList](), AndroidPointerCoordsToListOfdouble()))[$toList](), this.metaState, this.buttonState, this.xPrecision, this.yPrecision, this.deviceId, this.edgeFlags, this.source, this.flags];
    }
    toString() {
      return "AndroidPointerEvent(downTime: " + dart.str(this.downTime) + ", eventTime: " + dart.str(this.eventTime) + ", action: " + dart.str(this.action) + ", pointerCount: " + dart.str(this.pointerCount) + ", pointerProperties: " + dart.str(this.pointerProperties) + ", pointerCoords: " + dart.str(this.pointerCoords) + ", metaState: " + dart.str(this.metaState) + ", buttonState: " + dart.str(this.buttonState) + ", xPrecision: " + dart.str(this.xPrecision) + ", yPrecision: " + dart.str(this.yPrecision) + ", deviceId: " + dart.str(this.deviceId) + ", edgeFlags: " + dart.str(this.edgeFlags) + ", source: " + dart.str(this.source) + ", flags: " + dart.str(this.flags) + ")";
    }
  };
  (src__services__platform_views.AndroidMotionEvent.new = function(opts) {
    let downTime = opts && 'downTime' in opts ? opts.downTime : null;
    let eventTime = opts && 'eventTime' in opts ? opts.eventTime : null;
    let action = opts && 'action' in opts ? opts.action : null;
    let pointerCount = opts && 'pointerCount' in opts ? opts.pointerCount : null;
    let pointerProperties = opts && 'pointerProperties' in opts ? opts.pointerProperties : null;
    let pointerCoords = opts && 'pointerCoords' in opts ? opts.pointerCoords : null;
    let metaState = opts && 'metaState' in opts ? opts.metaState : null;
    let buttonState = opts && 'buttonState' in opts ? opts.buttonState : null;
    let xPrecision = opts && 'xPrecision' in opts ? opts.xPrecision : null;
    let yPrecision = opts && 'yPrecision' in opts ? opts.yPrecision : null;
    let deviceId = opts && 'deviceId' in opts ? opts.deviceId : null;
    let edgeFlags = opts && 'edgeFlags' in opts ? opts.edgeFlags : null;
    let source = opts && 'source' in opts ? opts.source : null;
    let flags = opts && 'flags' in opts ? opts.flags : null;
    this[downTime$] = downTime;
    this[eventTime$] = eventTime;
    this[action$] = action;
    this[pointerCount$] = pointerCount;
    this[pointerProperties$] = pointerProperties;
    this[pointerCoords$] = pointerCoords;
    this[metaState$0] = metaState;
    this[buttonState$] = buttonState;
    this[xPrecision$] = xPrecision;
    this[yPrecision$] = yPrecision;
    this[deviceId$] = deviceId;
    this[edgeFlags$] = edgeFlags;
    this[source$] = source;
    this[flags$0] = flags;
    if (!(downTime != null)) dart.assertFailed();
    if (!(eventTime != null)) dart.assertFailed();
    if (!(action != null)) dart.assertFailed();
    if (!(pointerCount != null)) dart.assertFailed();
    if (!(pointerProperties != null)) dart.assertFailed();
    if (!(pointerCoords != null)) dart.assertFailed();
    if (!(metaState != null)) dart.assertFailed();
    if (!(buttonState != null)) dart.assertFailed();
    if (!(xPrecision != null)) dart.assertFailed();
    if (!(yPrecision != null)) dart.assertFailed();
    if (!(deviceId != null)) dart.assertFailed();
    if (!(edgeFlags != null)) dart.assertFailed();
    if (!(source != null)) dart.assertFailed();
    if (!(flags != null)) dart.assertFailed();
    if (!(pointerProperties[$length] == pointerCount)) dart.assertFailed();
    if (!(pointerCoords[$length] == pointerCount)) dart.assertFailed();
    ;
  }).prototype = src__services__platform_views.AndroidMotionEvent.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidMotionEvent);
  const downTime$ = Symbol("AndroidMotionEvent.downTime");
  const eventTime$ = Symbol("AndroidMotionEvent.eventTime");
  const action$ = Symbol("AndroidMotionEvent.action");
  const pointerCount$ = Symbol("AndroidMotionEvent.pointerCount");
  const pointerProperties$ = Symbol("AndroidMotionEvent.pointerProperties");
  const pointerCoords$ = Symbol("AndroidMotionEvent.pointerCoords");
  const metaState$0 = Symbol("AndroidMotionEvent.metaState");
  const buttonState$ = Symbol("AndroidMotionEvent.buttonState");
  const xPrecision$ = Symbol("AndroidMotionEvent.xPrecision");
  const yPrecision$ = Symbol("AndroidMotionEvent.yPrecision");
  const deviceId$ = Symbol("AndroidMotionEvent.deviceId");
  const edgeFlags$ = Symbol("AndroidMotionEvent.edgeFlags");
  const source$ = Symbol("AndroidMotionEvent.source");
  const flags$0 = Symbol("AndroidMotionEvent.flags");
  dart.setMethodSignature(src__services__platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidMotionEvent.__proto__),
    [_asList]: dart.fnType(core.List, [core.int])
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidMotionEvent, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidMotionEvent.__proto__),
    downTime: dart.finalFieldType(core.int),
    eventTime: dart.finalFieldType(core.int),
    action: dart.finalFieldType(core.int),
    pointerCount: dart.finalFieldType(core.int),
    pointerProperties: dart.finalFieldType(core.List$(src__services__platform_views.AndroidPointerProperties)),
    pointerCoords: dart.finalFieldType(core.List$(src__services__platform_views.AndroidPointerCoords)),
    metaState: dart.finalFieldType(core.int),
    buttonState: dart.finalFieldType(core.int),
    xPrecision: dart.finalFieldType(core.double),
    yPrecision: dart.finalFieldType(core.double),
    deviceId: dart.finalFieldType(core.int),
    edgeFlags: dart.finalFieldType(core.int),
    source: dart.finalFieldType(core.int),
    flags: dart.finalFieldType(core.int)
  }));
  dart.defineExtensionMethods(src__services__platform_views.AndroidMotionEvent, ['toString']);
  const _name$3 = dart.privateName(src__services__platform_views, "_name");
  src__services__platform_views._AndroidViewState = class _AndroidViewState extends core.Object {
    toString() {
      return this[_name$3];
    }
  };
  (src__services__platform_views._AndroidViewState.new = function(index, _name) {
    this.index = index;
    this[_name$3] = _name;
    ;
  }).prototype = src__services__platform_views._AndroidViewState.prototype;
  dart.addTypeTests(src__services__platform_views._AndroidViewState);
  dart.setFieldSignature(src__services__platform_views._AndroidViewState, () => ({
    __proto__: dart.getFields(src__services__platform_views._AndroidViewState.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$3]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__services__platform_views._AndroidViewState, ['toString']);
  src__services__platform_views._AndroidViewState.waitingForSize = dart.const(new src__services__platform_views._AndroidViewState.new(0, "_AndroidViewState.waitingForSize"));
  src__services__platform_views._AndroidViewState.creating = dart.const(new src__services__platform_views._AndroidViewState.new(1, "_AndroidViewState.creating"));
  src__services__platform_views._AndroidViewState.created = dart.const(new src__services__platform_views._AndroidViewState.new(2, "_AndroidViewState.created"));
  src__services__platform_views._AndroidViewState.createFailed = dart.const(new src__services__platform_views._AndroidViewState.new(3, "_AndroidViewState.createFailed"));
  src__services__platform_views._AndroidViewState.disposed = dart.const(new src__services__platform_views._AndroidViewState.new(4, "_AndroidViewState.disposed"));
  src__services__platform_views._AndroidViewState.values = dart.constList([src__services__platform_views._AndroidViewState.waitingForSize, src__services__platform_views._AndroidViewState.creating, src__services__platform_views._AndroidViewState.created, src__services__platform_views._AndroidViewState.createFailed, src__services__platform_views._AndroidViewState.disposed], src__services__platform_views._AndroidViewState);
  const _textureId = dart.privateName(src__services__platform_views, "_textureId");
  const _viewType = dart.privateName(src__services__platform_views, "_viewType");
  const _creationParams = dart.privateName(src__services__platform_views, "_creationParams");
  const _creationParamsCodec = dart.privateName(src__services__platform_views, "_creationParamsCodec");
  const _layoutDirection = dart.privateName(src__services__platform_views, "_layoutDirection");
  const _onPlatformViewCreated = dart.privateName(src__services__platform_views, "_onPlatformViewCreated");
  const _state = dart.privateName(src__services__platform_views, "_state");
  const _create = dart.privateName(src__services__platform_views, "_create");
  src__services__platform_views.AndroidViewController = class AndroidViewController extends core.Object {
    get id() {
      return this[id$0];
    }
    set id(value) {
      super.id = value;
    }
    get textureId() {
      return this[_textureId];
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        if (dart.equals(this[_state], src__services__platform_views._AndroidViewState.creating) || dart.equals(this[_state], src__services__platform_views._AndroidViewState.created)) yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
        this[_state] = src__services__platform_views._AndroidViewState.disposed;
      }).bind(this));
    }
    setSize(size) {
      return async.async(dart.void, (function* setSize() {
        if (!!dart.equals(this[_state], src__services__platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to size a disposed Android View. View id: " + dart.str(this.id));
        if (!(size != null)) dart.assertFailed();
        if (!!dart.test(size.isEmpty)) dart.assertFailed();
        if (dart.equals(this[_state], src__services__platform_views._AndroidViewState.waitingForSize)) return this[_create](size);
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "resize", new (IdentityMapOfString$dynamic()).from(["id", this.id, "width", size.width, "height", size.height]));
      }).bind(this));
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.equals(this[_state], src__services__platform_views._AndroidViewState.disposed)) dart.assertFailed("trying to set a layout direction for a disposed UIView. View id: " + dart.str(this.id));
        if (dart.equals(layoutDirection, this[_layoutDirection])) return;
        if (!(layoutDirection != null)) dart.assertFailed();
        this[_layoutDirection] = layoutDirection;
        if (dart.equals(this[_state], src__services__platform_views._AndroidViewState.waitingForSize)) return;
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "setDirection", new (IdentityMapOfString$dynamic()).from(["id", this.id, "direction", src__services__platform_views.AndroidViewController._getAndroidDirection(layoutDirection)]));
      }).bind(this));
    }
    static _getAndroidDirection(direction) {
      if (!(direction != null)) dart.assertFailed();
      switch (direction) {
        case ui$.TextDirection.ltr:
        {
          return src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionLtr;
        }
        case ui$.TextDirection.rtl:
        {
          return src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionRtl;
        }
      }
      return null;
    }
    sendMotionEvent(event) {
      return async.async(dart.void, (function* sendMotionEvent() {
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.dynamic, "touch", event[_asList](this.id));
      }).bind(this));
    }
    static pointerAction(pointerId, action) {
      return dart.notNull(pointerId) << 8 & 65280 | dart.notNull(action) & 255;
    }
    [_create](size) {
      return async.async(dart.void, (function* _create() {
        let args = new (IdentityMapOfString$dynamic()).from(["id", this.id, "viewType", this[_viewType], "width", size.width, "height", size.height, "direction", src__services__platform_views.AndroidViewController._getAndroidDirection(this[_layoutDirection])]);
        if (this[_creationParams] != null) {
          let paramsByteData = this[_creationParamsCodec].encodeMessage(this[_creationParams]);
          args[$_set]("params", typed_data.Uint8List.view(paramsByteData[$buffer], 0, paramsByteData[$lengthInBytes]));
        }
        this[_textureId] = (yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(core.int, "create", args));
        if (this[_onPlatformViewCreated] != null) this[_onPlatformViewCreated](this.id);
        this[_state] = src__services__platform_views._AndroidViewState.created;
      }).bind(this));
    }
  };
  (src__services__platform_views.AndroidViewController.__ = function(id, viewType, creationParams, creationParamsCodec, layoutDirection, onPlatformViewCreated) {
    this[_textureId] = null;
    this[id$0] = id;
    if (!(id != null)) dart.assertFailed();
    if (!(viewType != null)) dart.assertFailed();
    if (!(layoutDirection != null)) dart.assertFailed();
    if (!(creationParams == null || creationParamsCodec != null)) dart.assertFailed();
    this[_viewType] = viewType;
    this[_creationParams] = creationParams;
    this[_creationParamsCodec] = creationParamsCodec;
    this[_layoutDirection] = layoutDirection;
    this[_onPlatformViewCreated] = onPlatformViewCreated;
    this[_state] = src__services__platform_views._AndroidViewState.waitingForSize;
    ;
  }).prototype = src__services__platform_views.AndroidViewController.prototype;
  dart.addTypeTests(src__services__platform_views.AndroidViewController);
  const id$0 = Symbol("AndroidViewController.id");
  dart.setMethodSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getMethods(src__services__platform_views.AndroidViewController.__proto__),
    dispose: dart.fnType(async.Future$(dart.void), []),
    setSize: dart.fnType(async.Future$(dart.void), [ui$.Size]),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui$.TextDirection]),
    sendMotionEvent: dart.fnType(async.Future$(dart.void), [src__services__platform_views.AndroidMotionEvent]),
    [_create]: dart.fnType(async.Future$(dart.void), [ui$.Size])
  }));
  dart.setGetterSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getGetters(src__services__platform_views.AndroidViewController.__proto__),
    textureId: core.int
  }));
  dart.setFieldSignature(src__services__platform_views.AndroidViewController, () => ({
    __proto__: dart.getFields(src__services__platform_views.AndroidViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_viewType]: dart.finalFieldType(core.String),
    [_onPlatformViewCreated]: dart.finalFieldType(dart.fnType(dart.void, [core.int])),
    [_textureId]: dart.fieldType(core.int),
    [_layoutDirection]: dart.fieldType(ui$.TextDirection),
    [_state]: dart.fieldType(src__services__platform_views._AndroidViewState),
    [_creationParams]: dart.fieldType(dart.dynamic),
    [_creationParamsCodec]: dart.fieldType(src__services__message_codec.MessageCodec)
  }));
  dart.defineLazy(src__services__platform_views.AndroidViewController, {
    /*src__services__platform_views.AndroidViewController.kActionDown*/get kActionDown() {
      return 0;
    },
    /*src__services__platform_views.AndroidViewController.kActionUp*/get kActionUp() {
      return 1;
    },
    /*src__services__platform_views.AndroidViewController.kActionMove*/get kActionMove() {
      return 2;
    },
    /*src__services__platform_views.AndroidViewController.kActionCancel*/get kActionCancel() {
      return 3;
    },
    /*src__services__platform_views.AndroidViewController.kActionPointerDown*/get kActionPointerDown() {
      return 5;
    },
    /*src__services__platform_views.AndroidViewController.kActionPointerUp*/get kActionPointerUp() {
      return 6;
    },
    /*src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionLtr*/get kAndroidLayoutDirectionLtr() {
      return 0;
    },
    /*src__services__platform_views.AndroidViewController.kAndroidLayoutDirectionRtl*/get kAndroidLayoutDirectionRtl() {
      return 1;
    }
  });
  const _debugDisposed = dart.privateName(src__services__platform_views, "_debugDisposed");
  src__services__platform_views.UiKitViewController = class UiKitViewController extends core.Object {
    get id() {
      return this[id$1];
    }
    set id(value) {
      super.id = value;
    }
    setLayoutDirection(layoutDirection) {
      return async.async(dart.void, (function* setLayoutDirection() {
        if (!!dart.test(this[_debugDisposed])) dart.assertFailed("trying to set a layout direction for a disposed Android View. View id: " + dart.str(this.id));
        if (dart.equals(layoutDirection, this[_layoutDirection])) return;
        if (!(layoutDirection != null)) dart.assertFailed();
        this[_layoutDirection] = layoutDirection;
      }).bind(this));
    }
    acceptGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "acceptGesture", args);
    }
    rejectGesture() {
      let args = new (IdentityMapOfString$dynamic()).from(["id", this.id]);
      return src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "rejectGesture", args);
    }
    dispose() {
      return async.async(dart.void, (function* dispose() {
        this[_debugDisposed] = true;
        yield src__services__system_channels.SystemChannels.platform_views.invokeMethod(dart.void, "dispose", this.id);
      }).bind(this));
    }
  };
  (src__services__platform_views.UiKitViewController.__ = function(id, layoutDirection) {
    this[_debugDisposed] = false;
    this[id$1] = id;
    if (!(id != null)) dart.assertFailed();
    if (!(layoutDirection != null)) dart.assertFailed();
    this[_layoutDirection] = layoutDirection;
    ;
  }).prototype = src__services__platform_views.UiKitViewController.prototype;
  dart.addTypeTests(src__services__platform_views.UiKitViewController);
  const id$1 = Symbol("UiKitViewController.id");
  dart.setMethodSignature(src__services__platform_views.UiKitViewController, () => ({
    __proto__: dart.getMethods(src__services__platform_views.UiKitViewController.__proto__),
    setLayoutDirection: dart.fnType(async.Future$(dart.void), [ui$.TextDirection]),
    acceptGesture: dart.fnType(async.Future$(dart.void), []),
    rejectGesture: dart.fnType(async.Future$(dart.void), []),
    dispose: dart.fnType(async.Future$(dart.void), [])
  }));
  dart.setFieldSignature(src__services__platform_views.UiKitViewController, () => ({
    __proto__: dart.getFields(src__services__platform_views.UiKitViewController.__proto__),
    id: dart.finalFieldType(core.int),
    [_debugDisposed]: dart.fieldType(core.bool),
    [_layoutDirection]: dart.fieldType(ui$.TextDirection)
  }));
  dart.defineLazy(src__services__platform_views, {
    /*src__services__platform_views.platformViewsRegistry*/get platformViewsRegistry() {
      return new src__services__platform_views.PlatformViewsRegistry._instance();
    }
  });
  src__services__text_formatter.TextInputFormatter = class TextInputFormatter extends core.Object {
    static withFunction(formatFunction) {
      return new src__services__text_formatter._SimpleTextInputFormatter.new(formatFunction);
    }
  };
  (src__services__text_formatter.TextInputFormatter.new = function() {
    ;
  }).prototype = src__services__text_formatter.TextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.TextInputFormatter);
  src__services__text_formatter._SimpleTextInputFormatter = class _SimpleTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    formatEditUpdate(oldValue, newValue) {
      return this.formatFunction(oldValue, newValue);
    }
  };
  (src__services__text_formatter._SimpleTextInputFormatter.new = function(formatFunction) {
    this.formatFunction = formatFunction;
    if (!(formatFunction != null)) dart.assertFailed();
    ;
  }).prototype = src__services__text_formatter._SimpleTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter._SimpleTextInputFormatter);
  dart.setMethodSignature(src__services__text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter._SimpleTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter._SimpleTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter._SimpleTextInputFormatter.__proto__),
    formatFunction: dart.finalFieldType(dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue]))
  }));
  src__services__text_formatter.BlacklistingTextInputFormatter = class BlacklistingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get blacklistedPattern() {
      return this[blacklistedPattern$];
    }
    set blacklistedPattern(value) {
      super.blacklistedPattern = value;
    }
    get replacementString() {
      return this[replacementString$];
    }
    set replacementString(value) {
      super.replacementString = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return src__services__text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => substring[$replaceAll](this.blacklistedPattern, this.replacementString), StringToString()));
    }
  };
  (src__services__text_formatter.BlacklistingTextInputFormatter.new = function(blacklistedPattern, opts) {
    let replacementString = opts && 'replacementString' in opts ? opts.replacementString : "";
    this[blacklistedPattern$] = blacklistedPattern;
    this[replacementString$] = replacementString;
    if (!(blacklistedPattern != null)) dart.assertFailed();
    ;
  }).prototype = src__services__text_formatter.BlacklistingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.BlacklistingTextInputFormatter);
  const blacklistedPattern$ = Symbol("BlacklistingTextInputFormatter.blacklistedPattern");
  const replacementString$ = Symbol("BlacklistingTextInputFormatter.replacementString");
  dart.setMethodSignature(src__services__text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.BlacklistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.BlacklistingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.BlacklistingTextInputFormatter.__proto__),
    blacklistedPattern: dart.finalFieldType(core.Pattern),
    replacementString: dart.finalFieldType(core.String)
  }));
  dart.defineLazy(src__services__text_formatter.BlacklistingTextInputFormatter, {
    /*src__services__text_formatter.BlacklistingTextInputFormatter.singleLineFormatter*/get singleLineFormatter() {
      return new src__services__text_formatter.BlacklistingTextInputFormatter.new(core.RegExp.new("\\n"));
    }
  });
  src__services__text_formatter.LengthLimitingTextInputFormatter = class LengthLimitingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get maxLength() {
      return this[maxLength$];
    }
    set maxLength(value) {
      super.maxLength = value;
    }
    formatEditUpdate(oldValue, newValue) {
      if (this.maxLength != null && dart.notNull(this.maxLength) > 0 && dart.notNull(newValue.text[$runes][$length]) > dart.notNull(this.maxLength)) {
        let newSelection = newValue.selection.copyWith({baseOffset: math.min(core.int, newValue.selection.start, this.maxLength), extentOffset: math.min(core.int, newValue.selection.end, this.maxLength)});
        let iterator = new core.RuneIterator.new(newValue.text);
        if (dart.test(iterator.moveNext())) for (let count = 0; count < dart.notNull(this.maxLength); count = count + 1)
          if (!dart.test(iterator.moveNext())) break;
        let truncated = newValue.text[$substring](0, iterator.rawIndex);
        return new src__services__text_input.TextEditingValue.new({text: truncated, selection: newSelection, composing: src__services__text_editing.TextRange.empty});
      }
      return newValue;
    }
  };
  (src__services__text_formatter.LengthLimitingTextInputFormatter.new = function(maxLength) {
    this[maxLength$] = maxLength;
    if (!(maxLength == null || maxLength === -1 || dart.notNull(maxLength) > 0)) dart.assertFailed();
    ;
  }).prototype = src__services__text_formatter.LengthLimitingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.LengthLimitingTextInputFormatter);
  const maxLength$ = Symbol("LengthLimitingTextInputFormatter.maxLength");
  dart.setMethodSignature(src__services__text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.LengthLimitingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.LengthLimitingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.LengthLimitingTextInputFormatter.__proto__),
    maxLength: dart.finalFieldType(core.int)
  }));
  src__services__text_formatter.WhitelistingTextInputFormatter = class WhitelistingTextInputFormatter extends src__services__text_formatter.TextInputFormatter {
    get whitelistedPattern() {
      return this[whitelistedPattern$];
    }
    set whitelistedPattern(value) {
      super.whitelistedPattern = value;
    }
    formatEditUpdate(oldValue, newValue) {
      return src__services__text_formatter._selectionAwareTextManipulation(newValue, dart.fn(substring => this.whitelistedPattern[$allMatches](substring)[$map](core.String, dart.fn(match => match.group(0), MatchToString()))[$join](), StringToString()));
    }
  };
  (src__services__text_formatter.WhitelistingTextInputFormatter.new = function(whitelistedPattern) {
    this[whitelistedPattern$] = whitelistedPattern;
    if (!(whitelistedPattern != null)) dart.assertFailed();
    ;
  }).prototype = src__services__text_formatter.WhitelistingTextInputFormatter.prototype;
  dart.addTypeTests(src__services__text_formatter.WhitelistingTextInputFormatter);
  const whitelistedPattern$ = Symbol("WhitelistingTextInputFormatter.whitelistedPattern");
  dart.setMethodSignature(src__services__text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getMethods(src__services__text_formatter.WhitelistingTextInputFormatter.__proto__),
    formatEditUpdate: dart.fnType(src__services__text_input.TextEditingValue, [src__services__text_input.TextEditingValue, src__services__text_input.TextEditingValue])
  }));
  dart.setFieldSignature(src__services__text_formatter.WhitelistingTextInputFormatter, () => ({
    __proto__: dart.getFields(src__services__text_formatter.WhitelistingTextInputFormatter.__proto__),
    whitelistedPattern: dart.finalFieldType(core.Pattern)
  }));
  dart.defineLazy(src__services__text_formatter.WhitelistingTextInputFormatter, {
    /*src__services__text_formatter.WhitelistingTextInputFormatter.digitsOnly*/get digitsOnly() {
      return new src__services__text_formatter.WhitelistingTextInputFormatter.new(core.RegExp.new("\\d+"));
    }
  });
  let const$18;
  src__services__text_formatter._selectionAwareTextManipulation = function(value, substringManipulation) {
    let t9;
    let selectionStartIndex = value.selection.start;
    let selectionEndIndex = value.selection.end;
    let manipulatedText = null;
    let manipulatedSelection = null;
    if (dart.notNull(selectionStartIndex) < 0 || dart.notNull(selectionEndIndex) < 0) {
      manipulatedText = substringManipulation(value.text);
    } else {
      let beforeSelection = substringManipulation(value.text[$substring](0, selectionStartIndex));
      let inSelection = substringManipulation(value.text[$substring](selectionStartIndex, selectionEndIndex));
      let afterSelection = substringManipulation(value.text[$substring](selectionEndIndex));
      manipulatedText = dart.notNull(beforeSelection) + dart.notNull(inSelection) + dart.notNull(afterSelection);
      if (dart.notNull(value.selection.baseOffset) > dart.notNull(value.selection.extentOffset)) {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length + inSelection.length, extentOffset: beforeSelection.length});
      } else {
        manipulatedSelection = value.selection.copyWith({baseOffset: beforeSelection.length, extentOffset: beforeSelection.length + inSelection.length});
      }
    }
    return new src__services__text_input.TextEditingValue.new({text: manipulatedText, selection: (t9 = manipulatedSelection, t9 == null ? const$18 || (const$18 = dart.const(new src__services__text_editing.TextSelection.collapsed({offset: -1}))) : t9), composing: manipulatedText == value.text ? value.composing : src__services__text_editing.TextRange.empty});
  };
  src__services__haptic_feedback.HapticFeedback = class HapticFeedback extends core.Object {
    static vibrate() {
      return async.async(dart.void, function* vibrate() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate");
      });
    }
    static lightImpact() {
      return async.async(dart.void, function* lightImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.lightImpact");
      });
    }
    static mediumImpact() {
      return async.async(dart.void, function* mediumImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.mediumImpact");
      });
    }
    static heavyImpact() {
      return async.async(dart.void, function* heavyImpact() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.heavyImpact");
      });
    }
    static selectionClick() {
      return async.async(dart.void, function* selectionClick() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "HapticFeedback.vibrate", "HapticFeedbackType.selectionClick");
      });
    }
  };
  (src__services__haptic_feedback.HapticFeedback.__ = function() {
    ;
  }).prototype = src__services__haptic_feedback.HapticFeedback.prototype;
  dart.addTypeTests(src__services__haptic_feedback.HapticFeedback);
  src__services__clipboard.ClipboardData = class ClipboardData extends core.Object {
    get text() {
      return this[text$0];
    }
    set text(value) {
      super.text = value;
    }
  };
  (src__services__clipboard.ClipboardData.new = function(opts) {
    let text = opts && 'text' in opts ? opts.text : null;
    this[text$0] = text;
    ;
  }).prototype = src__services__clipboard.ClipboardData.prototype;
  dart.addTypeTests(src__services__clipboard.ClipboardData);
  const text$0 = Symbol("ClipboardData.text");
  dart.setFieldSignature(src__services__clipboard.ClipboardData, () => ({
    __proto__: dart.getFields(src__services__clipboard.ClipboardData.__proto__),
    text: dart.finalFieldType(core.String)
  }));
  src__services__clipboard.Clipboard = class Clipboard extends core.Object {
    static setData(data) {
      return async.async(dart.void, function* setData() {
        yield src__services__system_channels.SystemChannels.platform.invokeMethod(dart.dynamic, "Clipboard.setData", new (IdentityMapOfString$dynamic()).from(["text", data.text]));
      });
    }
    static getData(format) {
      return async.async(src__services__clipboard.ClipboardData, function* getData() {
        let result = (yield src__services__system_channels.SystemChannels.platform.invokeMethod(MapOfString$dynamic(), "Clipboard.getData", format));
        if (result == null) return null;
        return new src__services__clipboard.ClipboardData.new({text: core.String._check(result[$_get]("text"))});
      });
    }
  };
  (src__services__clipboard.Clipboard.__ = function() {
    ;
  }).prototype = src__services__clipboard.Clipboard.prototype;
  dart.addTypeTests(src__services__clipboard.Clipboard);
  dart.defineLazy(src__services__clipboard.Clipboard, {
    /*src__services__clipboard.Clipboard.kTextPlain*/get kTextPlain() {
      return "text/plain";
    }
  });
  dart.trackLibraries("packages/flutter_web/src/services/clipboard", {
    "package:flutter_web/src/services/system_navigator.dart": src__services__system_navigator,
    "package:flutter_web/src/services/system_channels.dart": src__services__system_channels,
    "package:flutter_web/src/services/platform_channel.dart": src__services__platform_channel,
    "package:flutter_web/src/services/platform_messages.dart": src__services__platform_messages,
    "package:flutter_web/src/services/message_codecs.dart": src__services__message_codecs,
    "package:flutter_web/src/services/message_codec.dart": src__services__message_codec,
    "package:flutter_web/src/services/text_editing.dart": src__services__text_editing,
    "package:flutter_web/src/services/text_input.dart": src__services__text_input,
    "package:flutter_web/src/services/system_chrome.dart": src__services__system_chrome,
    "package:flutter_web/src/services/system_sound.dart": src__services__system_sound,
    "package:flutter_web/src/services/raw_keyboard.dart": src__services__raw_keyboard,
    "package:flutter_web/src/services/raw_keyboard_fuschia.dart": src__services__raw_keyboard_fuschia,
    "package:flutter_web/src/services/raw_keyboard_android.dart": src__services__raw_keyboard_android,
    "package:flutter_web/src/services/platform_views.dart": src__services__platform_views,
    "package:flutter_web/src/services/text_formatter.dart": src__services__text_formatter,
    "package:flutter_web/src/services/haptic_feedback.dart": src__services__haptic_feedback,
    "package:flutter_web/src/services/clipboard.dart": src__services__clipboard
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/services/system_navigator.dart","org-dartlang-app:///packages/flutter_web/src/services/system_channels.dart","org-dartlang-app:///packages/flutter_web/src/services/platform_channel.dart","org-dartlang-app:///packages/flutter_web/src/services/platform_messages.dart","org-dartlang-app:///packages/flutter_web/src/services/message_codecs.dart","org-dartlang-app:///packages/flutter_web/src/services/message_codec.dart","org-dartlang-app:///packages/flutter_web/src/services/text_editing.dart","org-dartlang-app:///packages/flutter_web/src/services/text_input.dart","org-dartlang-app:///packages/flutter_web/src/services/system_chrome.dart","org-dartlang-app:///packages/flutter_web/src/services/system_sound.dart","org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard.dart","org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_fuschia.dart","org-dartlang-app:///packages/flutter_web/src/services/raw_keyboard_android.dart","org-dartlang-app:///packages/flutter_web/src/services/platform_views.dart","org-dartlang-app:///packages/flutter_web/src/services/text_formatter.dart","org-dartlang-app:///packages/flutter_web/src/services/haptic_feedback.dart","org-dartlang-app:///packages/flutter_web/src/services/clipboard.dart"],"names":[],"mappings":"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","file":"clipboard.ddc.js"}');
  // Exports:
  return {
    src__services__system_navigator: src__services__system_navigator,
    src__services__system_channels: src__services__system_channels,
    src__services__platform_channel: src__services__platform_channel,
    src__services__platform_messages: src__services__platform_messages,
    src__services__message_codecs: src__services__message_codecs,
    src__services__message_codec: src__services__message_codec,
    src__services__text_editing: src__services__text_editing,
    src__services__text_input: src__services__text_input,
    src__services__system_chrome: src__services__system_chrome,
    src__services__system_sound: src__services__system_sound,
    src__services__raw_keyboard: src__services__raw_keyboard,
    src__services__raw_keyboard_fuschia: src__services__raw_keyboard_fuschia,
    src__services__raw_keyboard_android: src__services__raw_keyboard_android,
    src__services__platform_views: src__services__platform_views,
    src__services__text_formatter: src__services__text_formatter,
    src__services__haptic_feedback: src__services__haptic_feedback,
    src__services__clipboard: src__services__clipboard
  };
});

//# sourceMappingURL=clipboard.ddc.js.map
