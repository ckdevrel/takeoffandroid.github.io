define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/gestures/arena', 'packages/vector_math/vector_math_64', 'packages/flutter_web/src/services/clipboard'], function(dart_sdk, animation, ui, animation$, assertions, arena, vector_math_64, clipboard) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__widgets__localizations = animation.src__widgets__localizations;
  const src__widgets__pages = animation.src__widgets__pages;
  const src__painting__decoration = animation.src__painting__decoration;
  const src__widgets__debug = animation.src__widgets__debug;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__rendering__proxy_box = animation.src__rendering__proxy_box;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__routes = animation.src__widgets__routes;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__preferred_size = animation.src__widgets__preferred_size;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__sliver_persistent_header = animation.src__widgets__sliver_persistent_header;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__rendering__paragraph = animation.src__rendering__paragraph;
  const src__widgets__navigation_toolbar = animation.src__widgets__navigation_toolbar;
  const src__widgets__icon_theme = animation.src__widgets__icon_theme;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__value_listenable_builder = animation.src__widgets__value_listenable_builder;
  const src__widgets__annotated_region = animation.src__widgets__annotated_region;
  const src__painting__borders = animation.src__painting__borders;
  const src__widgets__visibility = animation.src__widgets__visibility;
  const ui$ = ui.ui;
  const src__animation__animation = animation$.src__animation__animation;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__animation__animations = animation$.src__animation__animations;
  const src__animation__curves = animation$.src__animation__curves;
  const src__animation__tween = animation$.src__animation__tween;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__widgets__icon_theme_data = animation$.src__widgets__icon_theme_data;
  const src__painting__text_span = animation$.src__painting__text_span;
  const src__widgets__icon_data = animation$.src__widgets__icon_data;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__gestures__monodrag = arena.src__gestures__monodrag;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const src__gestures__events = arena.src__gestures__events;
  const src__gestures__tap = arena.src__gestures__tap;
  const vector_math_64$ = vector_math_64.vector_math_64;
  const src__services__system_chrome = clipboard.src__services__system_chrome;
  const src__cupertino__activity_indicator = Object.create(dart.library);
  const src__cupertino__colors = Object.create(dart.library);
  const src__cupertino__localizations = Object.create(dart.library);
  const src__cupertino__text_theme = Object.create(dart.library);
  const src__cupertino__route = Object.create(dart.library);
  const src__cupertino__theme = Object.create(dart.library);
  const src__cupertino__button = Object.create(dart.library);
  const src__cupertino__page_scaffold = Object.create(dart.library);
  const src__cupertino__nav_bar = Object.create(dart.library);
  const src__cupertino__icons = Object.create(dart.library);
  const $floor = dartx.floor;
  const $modulo = dartx['%'];
  const $clamp = dartx.clamp;
  const $truncate = dartx.truncate;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $padRight = dartx.padRight;
  const $abs = dartx.abs;
  const $runtimeType = dartx.runtimeType;
  const $add = dartx.add;
  const $_equals = dartx._equals;
  const $removeWhere = dartx.removeWhere;
  let SynchronousFutureOfCupertinoLocalizations = () => (SynchronousFutureOfCupertinoLocalizations = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__cupertino__localizations.CupertinoLocalizations)))();
  let ValueNotifierOfString = () => (ValueNotifierOfString = dart.constFn(src__foundation__change_notifier.ValueNotifier$(core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let _HashSetOfPageRoute = () => (_HashSetOfPageRoute = dart.constFn(collection._HashSet$(src__widgets__pages.PageRoute)))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let DiagnosticsPropertyOfLinearGradient = () => (DiagnosticsPropertyOfLinearGradient = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__gradient.LinearGradient)))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(src__animation__tween.Tween$(ui$.Offset)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), src__widgets__framework.Widget])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let EnumPropertyOfBrightness = () => (EnumPropertyOfBrightness = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.Brightness)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Color)))();
  let DiagnosticsPropertyOfCupertinoTextThemeData = () => (DiagnosticsPropertyOfCupertinoTextThemeData = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__cupertino__text_theme.CupertinoTextThemeData)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)))();
  let GlobalKeyOfStateOfStatefulWidget = () => (GlobalKeyOfStateOfStatefulWidget = dart.constFn(src__widgets__framework.GlobalKey$(StateOfStatefulWidget())))();
  let ValueListenableBuilderOfString = () => (ValueListenableBuilderOfString = dart.constFn(src__widgets__value_listenable_builder.ValueListenableBuilder$(core.String)))();
  let ElementTobool = () => (ElementTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__framework.Element])))();
  let BuildContextAndWidgetToWidget = () => (BuildContextAndWidgetToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let WidgetTobool = () => (WidgetTobool = dart.constFn(dart.fnType(core.bool, [src__widgets__framework.Widget])))();
  let TypeMatcherOfRenderAnimatedOpacity = () => (TypeMatcherOfRenderAnimatedOpacity = dart.constFn(src__widgets__framework.TypeMatcher$(src__rendering__proxy_box.RenderAnimatedOpacity)))();
  let AnnotatedRegionOfSystemUiOverlayStyle = () => (AnnotatedRegionOfSystemUiOverlayStyle = dart.constFn(src__widgets__annotated_region.AnnotatedRegion$(src__services__system_chrome.SystemUiOverlayStyle)))();
  let RectAndRectToRectTween = () => (RectAndRectToRectTween = dart.constFn(dart.fnType(src__animation__tween.RectTween, [ui$.Rect, ui$.Rect])))();
  let BuildContextAndWidgetToVisibility = () => (BuildContextAndWidgetToVisibility = dart.constFn(dart.fnType(src__widgets__visibility.Visibility, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])))();
  let BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition = () => (BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition = dart.constFn(dart.fnType(src__cupertino__nav_bar._NavigationBarTransition, [src__widgets__framework.BuildContext, AnimationOfdouble(), src__widgets__heroes.HeroFlightDirection, src__widgets__framework.BuildContext, src__widgets__framework.BuildContext])))();
  src__cupertino__activity_indicator.CupertinoActivityIndicator = class CupertinoActivityIndicator extends src__widgets__framework.StatefulWidget {
    get animating() {
      return this[animating$];
    }
    set animating(value) {
      super.animating = value;
    }
    get radius() {
      return this[radius$];
    }
    set radius(value) {
      super.radius = value;
    }
    createState() {
      return new src__cupertino__activity_indicator._CupertinoActivityIndicatorState.new();
    }
  };
  (src__cupertino__activity_indicator.CupertinoActivityIndicator.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animating = opts && 'animating' in opts ? opts.animating : true;
    let radius = opts && 'radius' in opts ? opts.radius : src__cupertino__activity_indicator._kDefaultIndicatorRadius;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animating$] = animating;
    this[radius$] = radius;
    if (!(animating != null)) dart.assertFailed();
    if (!(radius != null)) dart.assertFailed();
    if (!(dart.notNull(radius) > 0)) dart.assertFailed();
    src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__activity_indicator.CupertinoActivityIndicator.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator.CupertinoActivityIndicator);
  const animating$ = Symbol("CupertinoActivityIndicator.animating");
  const radius$ = Symbol("CupertinoActivityIndicator.radius");
  dart.setMethodSignature(src__cupertino__activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__),
    createState: dart.fnType(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, [])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__),
    animating: dart.finalFieldType(core.bool),
    radius: dart.finalFieldType(core.double)
  }));
  const _controller = dart.privateName(src__cupertino__activity_indicator, "_controller");
  let const$;
  let const$0;
  let const$1;
  let const$2;
  let const$3;
  let const$4;
  let const$5;
  let const$6;
  let const$7;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__activity_indicator.CupertinoActivityIndicator) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator));
  src__cupertino__activity_indicator._CupertinoActivityIndicatorState = class _CupertinoActivityIndicatorState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      super.initState();
      this[_controller] = new src__animation__animation_controller.AnimationController.new({duration: const$ || (const$ = dart.const(new core.Duration.new({seconds: 1}))), vsync: this});
      if (dart.test(this.widget.animating)) this[_controller].repeat();
    }
    didUpdateWidget(oldWidget) {
      src__cupertino__activity_indicator.CupertinoActivityIndicator._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.animating, oldWidget.animating)) {
        if (dart.test(this.widget.animating))
          this[_controller].repeat();
        else
          this[_controller].stop();
      }
    }
    dispose() {
      this[_controller].dispose();
      super.dispose();
    }
    build(context) {
      return new src__widgets__basic.SizedBox.new({height: dart.notNull(this.widget.radius) * 2, width: dart.notNull(this.widget.radius) * 2, child: new src__widgets__basic.CustomPaint.new({painter: new src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.new({position: this[_controller], radius: this.widget.radius}), $creationLocationd_0dea112b090073317d4: const$2 || (const$2 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart", parameterLocations: const$1 || (const$1 = dart.constList([const$0 || (const$0 = dart.const(new src__widgets__widget_inspector._Location.new({line: 82, column: 9, name: "painter"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$7 || (const$7 = dart.const(new src__widgets__widget_inspector._Location.new({line: 78, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart", parameterLocations: const$6 || (const$6 = dart.constList([const$3 || (const$3 = dart.const(new src__widgets__widget_inspector._Location.new({line: 79, column: 7, name: "height"}))), const$4 || (const$4 = dart.const(new src__widgets__widget_inspector._Location.new({line: 80, column: 7, name: "width"}))), const$5 || (const$5 = dart.const(new src__widgets__widget_inspector._Location.new({line: 81, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__activity_indicator._CupertinoActivityIndicatorState.new = function() {
    this[_controller] = null;
    src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__activity_indicator._CupertinoActivityIndicatorState.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator._CupertinoActivityIndicatorState);
  dart.setMethodSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter = class _CupertinoActivityIndicatorPainter extends src__rendering__custom_paint.CustomPainter {
    paint(canvas, size) {
      canvas.save();
      canvas.translate(dart.notNull(size.width) / 2.0, dart.notNull(size.height) / 2.0);
      let activeTick = (dart.notNull(src__cupertino__activity_indicator._kTickCount) * dart.notNull(this.position.value))[$floor]();
      for (let i = 0; i < dart.notNull(src__cupertino__activity_indicator._kTickCount); i = i + 1) {
        let t = ((i + activeTick)[$modulo](src__cupertino__activity_indicator._kTickCount) / dart.notNull(src__cupertino__activity_indicator._kHalfTickCount))[$clamp](0.0, 1.0);
        let paint = new ui$.Paint.new();
        paint.color = ui$.Color.lerp(src__cupertino__activity_indicator._kActiveTickColor, src__cupertino__activity_indicator._kTickColor, t);
        canvas.drawRRect(this.tickFundamentalRRect, paint);
        canvas.rotate(-dart.notNull(src__cupertino__activity_indicator._kTwoPI) / dart.notNull(src__cupertino__activity_indicator._kTickCount));
      }
      canvas.restore();
    }
    shouldRepaint(oldPainter) {
      src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter._check(oldPainter);
      return !dart.equals(oldPainter.position, this.position);
    }
  };
  (src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.new = function(opts) {
    let position = opts && 'position' in opts ? opts.position : null;
    let radius = opts && 'radius' in opts ? opts.radius : null;
    this.position = position;
    this.tickFundamentalRRect = new ui$.RRect.fromLTRBXY(-dart.notNull(radius), 1.0 * dart.notNull(radius) / dart.notNull(src__cupertino__activity_indicator._kDefaultIndicatorRadius), -dart.notNull(radius) / 2.0, -1.0 * dart.notNull(radius) / dart.notNull(src__cupertino__activity_indicator._kDefaultIndicatorRadius), 1.0, 1.0);
    src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__.new.call(this, {repaint: position});
    ;
  }).prototype = src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter);
  dart.setMethodSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    position: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    tickFundamentalRRect: dart.finalFieldType(ui$.RRect)
  }));
  dart.defineLazy(src__cupertino__activity_indicator, {
    /*src__cupertino__activity_indicator._kDefaultIndicatorRadius*/get _kDefaultIndicatorRadius() {
      return 10.0;
    },
    /*src__cupertino__activity_indicator._kTwoPI*/get _kTwoPI() {
      return dart.notNull(math.pi) * 2.0;
    },
    /*src__cupertino__activity_indicator._kTickCount*/get _kTickCount() {
      return 12;
    },
    /*src__cupertino__activity_indicator._kHalfTickCount*/get _kHalfTickCount() {
      return (dart.notNull(src__cupertino__activity_indicator._kTickCount) / 2)[$truncate]();
    },
    /*src__cupertino__activity_indicator._kTickColor*/get _kTickColor() {
      return src__cupertino__colors.CupertinoColors.lightBackgroundGray;
    },
    /*src__cupertino__activity_indicator._kActiveTickColor*/get _kActiveTickColor() {
      return dart.const(new ui$.Color.new(4288519581));
    }
  });
  src__cupertino__colors.CupertinoColors = class CupertinoColors extends core.Object {};
  (src__cupertino__colors.CupertinoColors.__ = function() {
    ;
  }).prototype = src__cupertino__colors.CupertinoColors.prototype;
  dart.addTypeTests(src__cupertino__colors.CupertinoColors);
  dart.defineLazy(src__cupertino__colors.CupertinoColors, {
    /*src__cupertino__colors.CupertinoColors.activeBlue*/get activeBlue() {
      return dart.const(new ui$.Color.new(4278221567));
    },
    /*src__cupertino__colors.CupertinoColors.activeGreen*/get activeGreen() {
      return dart.const(new ui$.Color.new(4283226468));
    },
    /*src__cupertino__colors.CupertinoColors.activeOrange*/get activeOrange() {
      return dart.const(new ui$.Color.new(4294939904));
    },
    /*src__cupertino__colors.CupertinoColors.white*/get white() {
      return dart.const(new ui$.Color.new(4294967295));
    },
    /*src__cupertino__colors.CupertinoColors.black*/get black() {
      return dart.const(new ui$.Color.new(4278190080));
    },
    /*src__cupertino__colors.CupertinoColors.lightBackgroundGray*/get lightBackgroundGray() {
      return dart.const(new ui$.Color.new(4293256682));
    },
    /*src__cupertino__colors.CupertinoColors.extraLightBackgroundGray*/get extraLightBackgroundGray() {
      return dart.const(new ui$.Color.new(4293914612));
    },
    /*src__cupertino__colors.CupertinoColors.darkBackgroundGray*/get darkBackgroundGray() {
      return dart.const(new ui$.Color.new(4279703319));
    },
    /*src__cupertino__colors.CupertinoColors.inactiveGray*/get inactiveGray() {
      return dart.const(new ui$.Color.new(4287532691));
    },
    /*src__cupertino__colors.CupertinoColors.destructiveRed*/get destructiveRed() {
      return dart.const(new ui$.Color.new(4294916912));
    }
  });
  const _name$ = dart.privateName(src__cupertino__localizations, "_name");
  src__cupertino__localizations.DatePickerDateTimeOrder = class DatePickerDateTimeOrder extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__cupertino__localizations.DatePickerDateTimeOrder.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__cupertino__localizations.DatePickerDateTimeOrder.prototype;
  dart.addTypeTests(src__cupertino__localizations.DatePickerDateTimeOrder);
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateTimeOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateTimeOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateTimeOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(0, "DatePickerDateTimeOrder.date_time_dayPeriod"));
  src__cupertino__localizations.DatePickerDateTimeOrder.date_dayPeriod_time = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(1, "DatePickerDateTimeOrder.date_dayPeriod_time"));
  src__cupertino__localizations.DatePickerDateTimeOrder.time_dayPeriod_date = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(2, "DatePickerDateTimeOrder.time_dayPeriod_date"));
  src__cupertino__localizations.DatePickerDateTimeOrder.dayPeriod_time_date = dart.const(new src__cupertino__localizations.DatePickerDateTimeOrder.new(3, "DatePickerDateTimeOrder.dayPeriod_time_date"));
  src__cupertino__localizations.DatePickerDateTimeOrder.values = dart.constList([src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod, src__cupertino__localizations.DatePickerDateTimeOrder.date_dayPeriod_time, src__cupertino__localizations.DatePickerDateTimeOrder.time_dayPeriod_date, src__cupertino__localizations.DatePickerDateTimeOrder.dayPeriod_time_date], src__cupertino__localizations.DatePickerDateTimeOrder);
  src__cupertino__localizations.DatePickerDateOrder = class DatePickerDateOrder extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (src__cupertino__localizations.DatePickerDateOrder.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = src__cupertino__localizations.DatePickerDateOrder.prototype;
  dart.addTypeTests(src__cupertino__localizations.DatePickerDateOrder);
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateOrder.dmy = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(0, "DatePickerDateOrder.dmy"));
  src__cupertino__localizations.DatePickerDateOrder.mdy = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(1, "DatePickerDateOrder.mdy"));
  src__cupertino__localizations.DatePickerDateOrder.ymd = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(2, "DatePickerDateOrder.ymd"));
  src__cupertino__localizations.DatePickerDateOrder.ydm = dart.const(new src__cupertino__localizations.DatePickerDateOrder.new(3, "DatePickerDateOrder.ydm"));
  src__cupertino__localizations.DatePickerDateOrder.values = dart.constList([src__cupertino__localizations.DatePickerDateOrder.dmy, src__cupertino__localizations.DatePickerDateOrder.mdy, src__cupertino__localizations.DatePickerDateOrder.ymd, src__cupertino__localizations.DatePickerDateOrder.ydm], src__cupertino__localizations.DatePickerDateOrder);
  src__cupertino__localizations.CupertinoLocalizations = class CupertinoLocalizations extends core.Object {
    static of(context) {
      return src__widgets__localizations.Localizations.of(src__cupertino__localizations.CupertinoLocalizations, context, dart.wrapType(src__cupertino__localizations.CupertinoLocalizations));
    }
  };
  (src__cupertino__localizations.CupertinoLocalizations.new = function() {
    ;
  }).prototype = src__cupertino__localizations.CupertinoLocalizations.prototype;
  dart.addTypeTests(src__cupertino__localizations.CupertinoLocalizations);
  src__cupertino__localizations._CupertinoLocalizationsDelegate = class _CupertinoLocalizationsDelegate extends src__widgets__localizations.LocalizationsDelegate$(src__cupertino__localizations.CupertinoLocalizations) {
    isSupported(locale) {
      return locale.languageCode === "en";
    }
    load(locale) {
      return src__cupertino__localizations.DefaultCupertinoLocalizations.load(locale);
    }
    shouldReload(old) {
      src__cupertino__localizations._CupertinoLocalizationsDelegate._check(old);
      return false;
    }
    toString() {
      return "DefaultCupertinoLocalizations.delegate(en_US)";
    }
  };
  (src__cupertino__localizations._CupertinoLocalizationsDelegate.new = function() {
    src__cupertino__localizations._CupertinoLocalizationsDelegate.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__localizations._CupertinoLocalizationsDelegate.prototype;
  dart.addTypeTests(src__cupertino__localizations._CupertinoLocalizationsDelegate);
  dart.setMethodSignature(src__cupertino__localizations._CupertinoLocalizationsDelegate, () => ({
    __proto__: dart.getMethods(src__cupertino__localizations._CupertinoLocalizationsDelegate.__proto__),
    isSupported: dart.fnType(core.bool, [ui$.Locale]),
    load: dart.fnType(async.Future$(src__cupertino__localizations.CupertinoLocalizations), [ui$.Locale]),
    shouldReload: dart.fnType(core.bool, [core.Object])
  }));
  dart.defineExtensionMethods(src__cupertino__localizations._CupertinoLocalizationsDelegate, ['toString']);
  let const$8;
  src__cupertino__localizations.DefaultCupertinoLocalizations = class DefaultCupertinoLocalizations extends core.Object {
    datePickerYear(yearIndex) {
      return dart.toString(yearIndex);
    }
    datePickerMonth(monthIndex) {
      return src__cupertino__localizations.DefaultCupertinoLocalizations._months[$_get](dart.notNull(monthIndex) - 1);
    }
    datePickerDayOfMonth(dayIndex) {
      return dart.toString(dayIndex);
    }
    datePickerHour(hour) {
      return dart.toString(hour);
    }
    datePickerHourSemanticsLabel(hour) {
      return dart.toString(hour) + " o'clock";
    }
    datePickerMinute(minute) {
      return dart.toString(minute)[$padLeft](2, "0");
    }
    datePickerMinuteSemanticsLabel(minute) {
      if (minute === 1) return "1 minute";
      return dart.toString(minute) + " minutes";
    }
    datePickerMediumDate(date) {
      return dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays[$_get](dart.notNull(date.weekday) - dart.notNull(core.DateTime.monday))) + " " + dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths[$_get](dart.notNull(date.month) - dart.notNull(core.DateTime.january))) + " " + dart.toString(date.day)[$padRight](2);
    }
    get datePickerDateOrder() {
      return src__cupertino__localizations.DatePickerDateOrder.mdy;
    }
    get datePickerDateTimeOrder() {
      return src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod;
    }
    get anteMeridiemAbbreviation() {
      return "AM";
    }
    get postMeridiemAbbreviation() {
      return "PM";
    }
    get alertDialogLabel() {
      return "Alert";
    }
    timerPickerHour(hour) {
      return dart.toString(hour);
    }
    timerPickerMinute(minute) {
      return dart.toString(minute);
    }
    timerPickerSecond(second) {
      return dart.toString(second);
    }
    timerPickerHourLabel(hour) {
      return hour === 1 ? "hour" : "hours";
    }
    timerPickerMinuteLabel(minute) {
      return "min";
    }
    timerPickerSecondLabel(second) {
      return "sec";
    }
    get cutButtonLabel() {
      return "Cut";
    }
    get copyButtonLabel() {
      return "Copy";
    }
    get pasteButtonLabel() {
      return "Paste";
    }
    get selectAllButtonLabel() {
      return "Select All";
    }
    static load(locale) {
      return new (SynchronousFutureOfCupertinoLocalizations()).new(const$8 || (const$8 = dart.const(new src__cupertino__localizations.DefaultCupertinoLocalizations.new())));
    }
  };
  (src__cupertino__localizations.DefaultCupertinoLocalizations.new = function() {
    ;
  }).prototype = src__cupertino__localizations.DefaultCupertinoLocalizations.prototype;
  dart.addTypeTests(src__cupertino__localizations.DefaultCupertinoLocalizations);
  src__cupertino__localizations.DefaultCupertinoLocalizations[dart.implements] = () => [src__cupertino__localizations.CupertinoLocalizations];
  dart.setMethodSignature(src__cupertino__localizations.DefaultCupertinoLocalizations, () => ({
    __proto__: dart.getMethods(src__cupertino__localizations.DefaultCupertinoLocalizations.__proto__),
    datePickerYear: dart.fnType(core.String, [core.int]),
    datePickerMonth: dart.fnType(core.String, [core.int]),
    datePickerDayOfMonth: dart.fnType(core.String, [core.int]),
    datePickerHour: dart.fnType(core.String, [core.int]),
    datePickerHourSemanticsLabel: dart.fnType(core.String, [core.int]),
    datePickerMinute: dart.fnType(core.String, [core.int]),
    datePickerMinuteSemanticsLabel: dart.fnType(core.String, [core.int]),
    datePickerMediumDate: dart.fnType(core.String, [core.DateTime]),
    timerPickerHour: dart.fnType(core.String, [core.int]),
    timerPickerMinute: dart.fnType(core.String, [core.int]),
    timerPickerSecond: dart.fnType(core.String, [core.int]),
    timerPickerHourLabel: dart.fnType(core.String, [core.int]),
    timerPickerMinuteLabel: dart.fnType(core.String, [core.int]),
    timerPickerSecondLabel: dart.fnType(core.String, [core.int])
  }));
  dart.setGetterSignature(src__cupertino__localizations.DefaultCupertinoLocalizations, () => ({
    __proto__: dart.getGetters(src__cupertino__localizations.DefaultCupertinoLocalizations.__proto__),
    datePickerDateOrder: src__cupertino__localizations.DatePickerDateOrder,
    datePickerDateTimeOrder: src__cupertino__localizations.DatePickerDateTimeOrder,
    anteMeridiemAbbreviation: core.String,
    postMeridiemAbbreviation: core.String,
    alertDialogLabel: core.String,
    cutButtonLabel: core.String,
    copyButtonLabel: core.String,
    pasteButtonLabel: core.String,
    selectAllButtonLabel: core.String
  }));
  dart.defineLazy(src__cupertino__localizations.DefaultCupertinoLocalizations, {
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays*/get _shortWeekdays() {
      return dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths*/get _shortMonths() {
      return dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._months*/get _months() {
      return dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], core.String);
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations.delegate*/get delegate() {
      return dart.const(new src__cupertino__localizations._CupertinoLocalizationsDelegate.new());
    }
  });
  const _primaryColor = dart.privateName(src__cupertino__text_theme, "_primaryColor");
  const _brightness = dart.privateName(src__cupertino__text_theme, "_brightness");
  const _textStyle = dart.privateName(src__cupertino__text_theme, "_textStyle");
  const _actionTextStyle = dart.privateName(src__cupertino__text_theme, "_actionTextStyle");
  const _tabLabelTextStyle = dart.privateName(src__cupertino__text_theme, "_tabLabelTextStyle");
  const _navTitleTextStyle = dart.privateName(src__cupertino__text_theme, "_navTitleTextStyle");
  const _navLargeTitleTextStyle = dart.privateName(src__cupertino__text_theme, "_navLargeTitleTextStyle");
  const _navActionTextStyle = dart.privateName(src__cupertino__text_theme, "_navActionTextStyle");
  const _isLight = dart.privateName(src__cupertino__text_theme, "_isLight");
  src__cupertino__text_theme.CupertinoTextThemeData = class CupertinoTextThemeData extends src__foundation__diagnostics.Diagnosticable {
    get [_isLight]() {
      return !dart.equals(this[_brightness], ui$.Brightness.dark);
    }
    get textStyle() {
      let t0;
      t0 = this[_textStyle];
      return t0 == null ? dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultLightTextStyle : src__cupertino__text_theme._kDefaultDarkTextStyle : t0;
    }
    get actionTextStyle() {
      let t0;
      t0 = this[_actionTextStyle];
      return t0 == null ? src__cupertino__text_theme._kDefaultActionTextStyle.copyWith({color: this[_primaryColor]}) : t0;
    }
    get tabLabelTextStyle() {
      let t0;
      t0 = this[_tabLabelTextStyle];
      return t0 == null ? src__cupertino__text_theme._kDefaultTabLabelTextStyle : t0;
    }
    get navTitleTextStyle() {
      let t0;
      t0 = this[_navTitleTextStyle];
      return t0 == null ? dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultMiddleTitleLightTextStyle : src__cupertino__text_theme._kDefaultMiddleTitleDarkTextStyle : t0;
    }
    get navLargeTitleTextStyle() {
      let t0;
      t0 = this[_navLargeTitleTextStyle];
      return t0 == null ? dart.test(this[_isLight]) ? src__cupertino__text_theme._kDefaultLargeTitleLightTextStyle : src__cupertino__text_theme._kDefaultLargeTitleDarkTextStyle : t0;
    }
    get navActionTextStyle() {
      let t0;
      t0 = this[_navActionTextStyle];
      return t0 == null ? src__cupertino__text_theme._kDefaultActionTextStyle.copyWith({color: this[_primaryColor]}) : t0;
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
      let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
      let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
      let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
      let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
      let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
      return new src__cupertino__text_theme.CupertinoTextThemeData.new({primaryColor: (t0 = primaryColor, t0 == null ? this[_primaryColor] : t0), brightness: (t0$ = brightness, t0$ == null ? this[_brightness] : t0$), textStyle: (t0$0 = textStyle, t0$0 == null ? this[_textStyle] : t0$0), actionTextStyle: (t0$1 = actionTextStyle, t0$1 == null ? this[_actionTextStyle] : t0$1), tabLabelTextStyle: (t0$2 = tabLabelTextStyle, t0$2 == null ? this[_tabLabelTextStyle] : t0$2), navTitleTextStyle: (t0$3 = navTitleTextStyle, t0$3 == null ? this[_navTitleTextStyle] : t0$3), navLargeTitleTextStyle: (t0$4 = navLargeTitleTextStyle, t0$4 == null ? this[_navLargeTitleTextStyle] : t0$4), navActionTextStyle: (t0$5 = navActionTextStyle, t0$5 == null ? this[_navActionTextStyle] : t0$5)});
    }
  };
  (src__cupertino__text_theme.CupertinoTextThemeData.new = function(opts) {
    let t0;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let textStyle = opts && 'textStyle' in opts ? opts.textStyle : null;
    let actionTextStyle = opts && 'actionTextStyle' in opts ? opts.actionTextStyle : null;
    let tabLabelTextStyle = opts && 'tabLabelTextStyle' in opts ? opts.tabLabelTextStyle : null;
    let navTitleTextStyle = opts && 'navTitleTextStyle' in opts ? opts.navTitleTextStyle : null;
    let navLargeTitleTextStyle = opts && 'navLargeTitleTextStyle' in opts ? opts.navLargeTitleTextStyle : null;
    let navActionTextStyle = opts && 'navActionTextStyle' in opts ? opts.navActionTextStyle : null;
    this[_primaryColor] = (t0 = primaryColor, t0 == null ? src__cupertino__colors.CupertinoColors.activeBlue : t0);
    this[_brightness] = brightness;
    this[_textStyle] = textStyle;
    this[_actionTextStyle] = actionTextStyle;
    this[_tabLabelTextStyle] = tabLabelTextStyle;
    this[_navTitleTextStyle] = navTitleTextStyle;
    this[_navLargeTitleTextStyle] = navLargeTitleTextStyle;
    this[_navActionTextStyle] = navActionTextStyle;
    src__cupertino__text_theme.CupertinoTextThemeData.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__text_theme.CupertinoTextThemeData.prototype;
  dart.addTypeTests(src__cupertino__text_theme.CupertinoTextThemeData);
  dart.setMethodSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getMethods(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    copyWith: dart.fnType(src__cupertino__text_theme.CupertinoTextThemeData, [], {actionTextStyle: src__painting__text_style.TextStyle, brightness: ui$.Brightness, navActionTextStyle: src__painting__text_style.TextStyle, navLargeTitleTextStyle: src__painting__text_style.TextStyle, navTitleTextStyle: src__painting__text_style.TextStyle, primaryColor: ui$.Color, tabLabelTextStyle: src__painting__text_style.TextStyle, textStyle: src__painting__text_style.TextStyle})
  }));
  dart.setGetterSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getGetters(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    [_isLight]: core.bool,
    textStyle: src__painting__text_style.TextStyle,
    actionTextStyle: src__painting__text_style.TextStyle,
    tabLabelTextStyle: src__painting__text_style.TextStyle,
    navTitleTextStyle: src__painting__text_style.TextStyle,
    navLargeTitleTextStyle: src__painting__text_style.TextStyle,
    navActionTextStyle: src__painting__text_style.TextStyle
  }));
  dart.setFieldSignature(src__cupertino__text_theme.CupertinoTextThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__text_theme.CupertinoTextThemeData.__proto__),
    [_primaryColor]: dart.finalFieldType(ui$.Color),
    [_brightness]: dart.finalFieldType(ui$.Brightness),
    [_textStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_actionTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_tabLabelTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navTitleTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navLargeTitleTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle),
    [_navActionTextStyle]: dart.finalFieldType(src__painting__text_style.TextStyle)
  }));
  dart.defineLazy(src__cupertino__text_theme, {
    /*src__cupertino__text_theme._kDefaultLightTextStyle*/get _kDefaultLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.black, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultDarkTextStyle*/get _kDefaultDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.white, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultActionTextStyle*/get _kDefaultActionTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.activeBlue, decoration: ui$.TextDecoration.none}));
    },
    /*src__cupertino__text_theme._kDefaultTabLabelTextStyle*/get _kDefaultTabLabelTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 10.0, letterSpacing: -0.24, color: src__cupertino__colors.CupertinoColors.inactiveGray}));
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleLightTextStyle*/get _kDefaultMiddleTitleLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleDarkTextStyle*/get _kDefaultMiddleTitleDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.41, color: src__cupertino__colors.CupertinoColors.white}));
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleLightTextStyle*/get _kDefaultLargeTitleLightTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.41, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleDarkTextStyle*/get _kDefaultLargeTitleDarkTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({inherit: false, fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.41, color: src__cupertino__colors.CupertinoColors.white}));
    }
  });
  const _previousTitle = dart.privateName(src__cupertino__route, "_previousTitle");
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
  const _is_CupertinoPageRoute_default = Symbol('_is_CupertinoPageRoute_default');
  src__cupertino__route.CupertinoPageRoute$ = dart.generic(T => {
    class CupertinoPageRoute extends src__widgets__pages.PageRoute$(T) {
      get builder() {
        return this[builder$];
      }
      set builder(value) {
        super.builder = value;
      }
      get title() {
        return this[title$];
      }
      set title(value) {
        super.title = value;
      }
      get maintainState() {
        return this[maintainState$];
      }
      set maintainState(value) {
        super.maintainState = value;
      }
      get previousTitle() {
        if (!(this[_previousTitle] != null)) dart.assertFailed("Cannot read the previousTitle for a route that has not yet been installed");
        return this[_previousTitle];
      }
      didChangePrevious(previousRoute) {
        let previousTitleString = src__cupertino__route.CupertinoPageRoute.is(previousRoute) ? previousRoute.title : null;
        if (this[_previousTitle] == null) {
          this[_previousTitle] = new (ValueNotifierOfString()).new(previousTitleString);
        } else {
          this[_previousTitle].value = previousTitleString;
        }
        super.didChangePrevious(previousRoute);
      }
      get transitionDuration() {
        return const$9 || (const$9 = dart.const(new core.Duration.new({milliseconds: 350})));
      }
      get barrierColor() {
        return null;
      }
      get barrierLabel() {
        return null;
      }
      canTransitionFrom(previousRoute) {
        return src__cupertino__route.CupertinoPageRoute.is(previousRoute);
      }
      canTransitionTo(nextRoute) {
        return src__cupertino__route.CupertinoPageRoute.is(nextRoute) && !dart.test(nextRoute.fullscreenDialog);
      }
      dispose() {
        src__cupertino__route.CupertinoPageRoute._popGestureInProgress.remove(this);
        super.dispose();
      }
      static isPopGestureInProgress(route) {
        return src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route);
      }
      get popGestureInProgress() {
        return src__cupertino__route.CupertinoPageRoute.isPopGestureInProgress(this);
      }
      get popGestureEnabled() {
        return src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, this);
      }
      static _isPopGestureEnabled(T, route) {
        if (dart.test(route.isFirst)) return false;
        if (dart.test(route.willHandlePopInternally)) return false;
        if (dart.test(route.hasScopedWillPopCallback)) return false;
        if (dart.test(route.fullscreenDialog)) return false;
        if (!dart.equals(route.controller.status, src__animation__animation.AnimationStatus.completed)) return false;
        if (dart.test(src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route))) return false;
        return true;
      }
      buildPage(context, animation, secondaryAnimation) {
        let result = new src__widgets__basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: this.builder(context), $creationLocationd_0dea112b090073317d4: const$14 || (const$14 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 27, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$13 || (const$13 = dart.constList([const$10 || (const$10 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 7, name: "scopesRoute"}))), const$11 || (const$11 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 7, name: "explicitChildNodes"}))), const$12 || (const$12 = dart.const(new src__widgets__widget_inspector._Location.new({line: 238, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        if (!dart.test(dart.fn(() => {
          if (result === null) {
            dart.throw(new src__foundation__assertions.FlutterError.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null.\n" + "Route builders must never return null."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed();
        return result;
      }
      static _startPopGesture(T, route) {
        if (!!dart.test(src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route))) dart.assertFailed();
        if (!dart.test(src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route))) dart.assertFailed();
        src__cupertino__route.CupertinoPageRoute._popGestureInProgress.add(route);
        let backController = null;
        backController = new (src__cupertino__route._CupertinoBackGestureController$(T)).new({navigator: route.navigator, controller: route.controller, onEnded: dart.fn(() => {
            let t0;
            t0 = backController;
            t0 == null ? null : t0.dispose();
            backController = null;
            src__cupertino__route.CupertinoPageRoute._popGestureInProgress.remove(route);
          }, VoidToNull())});
        return backController;
      }
      static buildPageTransitions(T, route, context, animation, secondaryAnimation, child) {
        if (dart.test(route.fullscreenDialog)) {
          return new src__cupertino__route.CupertinoFullscreenDialogTransition.new({animation: animation, child: child, $creationLocationd_0dea112b090073317d4: const$18 || (const$18 = dart.const(new src__widgets__widget_inspector._Location.new({line: 295, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$17 || (const$17 = dart.constList([const$15 || (const$15 = dart.const(new src__widgets__widget_inspector._Location.new({line: 296, column: 9, name: "animation"}))), const$16 || (const$16 = dart.const(new src__widgets__widget_inspector._Location.new({line: 297, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        } else {
          return new src__cupertino__route.CupertinoPageTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: src__cupertino__route.CupertinoPageRoute._popGestureInProgress.contains(route), child: new (src__cupertino__route._CupertinoBackGestureDetector$(T)).new({enabledCallback: dart.fn(() => src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route), VoidTobool()), onStartPopGesture: dart.fn(() => src__cupertino__route.CupertinoPageRoute._startPopGesture(T, route), dart.fnType(src__cupertino__route._CupertinoBackGestureController$(T), [])), child: child, $creationLocationd_0dea112b090073317d4: const$23 || (const$23 = dart.const(new src__widgets__widget_inspector._Location.new({line: 306, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$22 || (const$22 = dart.constList([const$19 || (const$19 = dart.const(new src__widgets__widget_inspector._Location.new({line: 307, column: 11, name: "enabledCallback"}))), const$20 || (const$20 = dart.const(new src__widgets__widget_inspector._Location.new({line: 308, column: 11, name: "onStartPopGesture"}))), const$21 || (const$21 = dart.const(new src__widgets__widget_inspector._Location.new({line: 309, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$29 || (const$29 = dart.const(new src__widgets__widget_inspector._Location.new({line: 300, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$28 || (const$28 = dart.constList([const$24 || (const$24 = dart.const(new src__widgets__widget_inspector._Location.new({line: 301, column: 9, name: "primaryRouteAnimation"}))), const$25 || (const$25 = dart.const(new src__widgets__widget_inspector._Location.new({line: 302, column: 9, name: "secondaryRouteAnimation"}))), const$26 || (const$26 = dart.const(new src__widgets__widget_inspector._Location.new({line: 305, column: 9, name: "linearTransition"}))), const$27 || (const$27 = dart.const(new src__widgets__widget_inspector._Location.new({line: 306, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        }
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return src__cupertino__route.CupertinoPageRoute.buildPageTransitions(T, this, context, animation, secondaryAnimation, child);
      }
      get debugLabel() {
        return dart.str(super.debugLabel) + "(" + dart.str(this.settings.name) + ")";
      }
    }
    (CupertinoPageRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let title = opts && 'title' in opts ? opts.title : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      let maintainState = opts && 'maintainState' in opts ? opts.maintainState : true;
      let fullscreenDialog = opts && 'fullscreenDialog' in opts ? opts.fullscreenDialog : false;
      this[_previousTitle] = null;
      this[builder$] = builder;
      this[title$] = title;
      this[maintainState$] = maintainState;
      if (!(builder != null)) dart.assertFailed();
      if (!(maintainState != null)) dart.assertFailed();
      if (!(fullscreenDialog != null)) dart.assertFailed();
      CupertinoPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      if (!dart.test(this.opaque)) dart.assertFailed();
    }).prototype = CupertinoPageRoute.prototype;
    dart.addTypeTests(CupertinoPageRoute);
    CupertinoPageRoute.prototype[_is_CupertinoPageRoute_default] = true;
    const builder$ = Symbol("CupertinoPageRoute.builder");
    const title$ = Symbol("CupertinoPageRoute.title");
    const maintainState$ = Symbol("CupertinoPageRoute.maintainState");
    dart.setMethodSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getMethods(CupertinoPageRoute.__proto__),
      buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
    }));
    dart.setGetterSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getGetters(CupertinoPageRoute.__proto__),
      previousTitle: src__foundation__change_notifier.ValueListenable$(core.String),
      transitionDuration: core.Duration,
      barrierColor: ui$.Color,
      barrierLabel: core.String,
      popGestureInProgress: core.bool,
      popGestureEnabled: core.bool
    }));
    dart.setFieldSignature(CupertinoPageRoute, () => ({
      __proto__: dart.getFields(CupertinoPageRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])),
      title: dart.finalFieldType(core.String),
      [_previousTitle]: dart.fieldType(src__foundation__change_notifier.ValueNotifier$(core.String)),
      maintainState: dart.finalFieldType(core.bool)
    }));
    return CupertinoPageRoute;
  });
  src__cupertino__route.CupertinoPageRoute = src__cupertino__route.CupertinoPageRoute$();
  dart.defineLazy(src__cupertino__route.CupertinoPageRoute, {
    /*src__cupertino__route.CupertinoPageRoute._popGestureInProgress*/get _popGestureInProgress() {
      return new (_HashSetOfPageRoute()).new();
    }
  });
  dart.addTypeTests(src__cupertino__route.CupertinoPageRoute, _is_CupertinoPageRoute_default);
  const _primaryPositionAnimation = dart.privateName(src__cupertino__route, "_primaryPositionAnimation");
  const _secondaryPositionAnimation = dart.privateName(src__cupertino__route, "_secondaryPositionAnimation");
  const _primaryShadowAnimation = dart.privateName(src__cupertino__route, "_primaryShadowAnimation");
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
  src__cupertino__route.CupertinoPageTransition = class CupertinoPageTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed();
      let textDirection = src__widgets__basic.Directionality.of(context);
      return new src__widgets__transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new src__widgets__transitions.SlideTransition.new({position: this[_primaryPositionAnimation], textDirection: textDirection, child: new src__widgets__transitions.DecoratedBoxTransition.new({decoration: this[_primaryShadowAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: const$33 || (const$33 = dart.const(new src__widgets__widget_inspector._Location.new({line: 385, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$32 || (const$32 = dart.constList([const$30 || (const$30 = dart.const(new src__widgets__widget_inspector._Location.new({line: 386, column: 11, name: "decoration"}))), const$31 || (const$31 = dart.const(new src__widgets__widget_inspector._Location.new({line: 387, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$38 || (const$38 = dart.const(new src__widgets__widget_inspector._Location.new({line: 382, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$37 || (const$37 = dart.constList([const$34 || (const$34 = dart.const(new src__widgets__widget_inspector._Location.new({line: 383, column: 9, name: "position"}))), const$35 || (const$35 = dart.const(new src__widgets__widget_inspector._Location.new({line: 384, column: 9, name: "textDirection"}))), const$36 || (const$36 = dart.const(new src__widgets__widget_inspector._Location.new({line: 385, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$44 || (const$44 = dart.const(new src__widgets__widget_inspector._Location.new({line: 378, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$43 || (const$43 = dart.constList([const$39 || (const$39 = dart.const(new src__widgets__widget_inspector._Location.new({line: 379, column: 7, name: "position"}))), const$40 || (const$40 = dart.const(new src__widgets__widget_inspector._Location.new({line: 380, column: 7, name: "textDirection"}))), const$41 || (const$41 = dart.const(new src__widgets__widget_inspector._Location.new({line: 381, column: 7, name: "transformHitTests"}))), const$42 || (const$42 = dart.const(new src__widgets__widget_inspector._Location.new({line: 382, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__route.CupertinoPageTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    if (!(linearTransition != null)) dart.assertFailed();
    this[_primaryPositionAnimation] = (dart.test(linearTransition) ? primaryRouteAnimation : new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.easeOut, reverseCurve: src__animation__curves.Curves.easeIn})).drive(ui$.Offset, src__cupertino__route._kRightMiddleTween);
    this[_secondaryPositionAnimation] = new src__animation__animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: src__animation__curves.Curves.easeOut, reverseCurve: src__animation__curves.Curves.easeIn}).drive(ui$.Offset, src__cupertino__route._kMiddleLeftTween);
    this[_primaryShadowAnimation] = new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.easeOut}).drive(src__painting__decoration.Decoration, src__cupertino__route._kGradientShadowTween);
    src__cupertino__route.CupertinoPageTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__route.CupertinoPageTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoPageTransition);
  const child$ = Symbol("CupertinoPageTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoPageTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getFields(src__cupertino__route.CupertinoPageTransition.__proto__),
    [_primaryPositionAnimation]: dart.finalFieldType(src__animation__animation.Animation$(ui$.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(src__animation__animation.Animation$(ui$.Offset)),
    [_primaryShadowAnimation]: dart.finalFieldType(src__animation__animation.Animation$(src__painting__decoration.Decoration)),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _positionAnimation = dart.privateName(src__cupertino__route, "_positionAnimation");
  let const$45;
  let const$46;
  let const$47;
  let const$48;
  src__cupertino__route.CupertinoFullscreenDialogTransition = class CupertinoFullscreenDialogTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new src__widgets__transitions.SlideTransition.new({position: this[_positionAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: const$48 || (const$48 = dart.const(new src__widgets__widget_inspector._Location.new({line: 416, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$47 || (const$47 = dart.constList([const$45 || (const$45 = dart.const(new src__widgets__widget_inspector._Location.new({line: 417, column: 7, name: "position"}))), const$46 || (const$46 = dart.const(new src__widgets__widget_inspector._Location.new({line: 418, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__route.CupertinoFullscreenDialogTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$0] = child;
    this[_positionAnimation] = animation.drive(core.double, new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.easeInOut})).drive(ui$.Offset, src__cupertino__route._kBottomUpTween);
    src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__route.CupertinoFullscreenDialogTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoFullscreenDialogTransition);
  const child$0 = Symbol("CupertinoFullscreenDialogTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__route.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getFields(src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__),
    [_positionAnimation]: dart.finalFieldType(src__animation__animation.Animation$(ui$.Offset)),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _is__CupertinoBackGestureDetector_default = Symbol('_is__CupertinoBackGestureDetector_default');
  src__cupertino__route._CupertinoBackGestureDetector$ = dart.generic(T => {
    let _CupertinoBackGestureDetectorStateOfT = () => (_CupertinoBackGestureDetectorStateOfT = dart.constFn(src__cupertino__route._CupertinoBackGestureDetectorState$(T)))();
    class _CupertinoBackGestureDetector extends src__widgets__framework.StatefulWidget {
      createState() {
        return new (_CupertinoBackGestureDetectorStateOfT()).new();
      }
    }
    (_CupertinoBackGestureDetector.new = function(opts) {
      let key = opts && 'key' in opts ? opts.key : null;
      let enabledCallback = opts && 'enabledCallback' in opts ? opts.enabledCallback : null;
      let onStartPopGesture = opts && 'onStartPopGesture' in opts ? opts.onStartPopGesture : null;
      let child = opts && 'child' in opts ? opts.child : null;
      let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
      this.enabledCallback = enabledCallback;
      this.onStartPopGesture = onStartPopGesture;
      this.child = child;
      if (!(enabledCallback != null)) dart.assertFailed();
      if (!(onStartPopGesture != null)) dart.assertFailed();
      if (!(child != null)) dart.assertFailed();
      _CupertinoBackGestureDetector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _CupertinoBackGestureDetector.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetector);
    _CupertinoBackGestureDetector.prototype[_is__CupertinoBackGestureDetector_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetector.__proto__),
      createState: dart.fnType(src__cupertino__route._CupertinoBackGestureDetectorState$(T), [])
    }));
    dart.setFieldSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetector.__proto__),
      child: dart.finalFieldType(src__widgets__framework.Widget),
      enabledCallback: dart.finalFieldType(dart.fnType(core.bool, [])),
      onStartPopGesture: dart.finalFieldType(dart.fnType(src__cupertino__route._CupertinoBackGestureController$(T), []))
    }));
    return _CupertinoBackGestureDetector;
  });
  src__cupertino__route._CupertinoBackGestureDetector = src__cupertino__route._CupertinoBackGestureDetector$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureDetector, _is__CupertinoBackGestureDetector_default);
  const _backGestureController = dart.privateName(src__cupertino__route, "_backGestureController");
  const _recognizer = dart.privateName(src__cupertino__route, "_recognizer");
  const _handleDragStart = dart.privateName(src__cupertino__route, "_handleDragStart");
  const _handleDragUpdate = dart.privateName(src__cupertino__route, "_handleDragUpdate");
  const _handleDragEnd = dart.privateName(src__cupertino__route, "_handleDragEnd");
  const _handleDragCancel = dart.privateName(src__cupertino__route, "_handleDragCancel");
  const _convertToLogical = dart.privateName(src__cupertino__route, "_convertToLogical");
  const _handlePointerDown = dart.privateName(src__cupertino__route, "_handlePointerDown");
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
  const _is__CupertinoBackGestureDetectorState_default = Symbol('_is__CupertinoBackGestureDetectorState_default');
  src__cupertino__route._CupertinoBackGestureDetectorState$ = dart.generic(T => {
    class _CupertinoBackGestureDetectorState extends src__widgets__framework.State$(src__cupertino__route._CupertinoBackGestureDetector$(T)) {
      initState() {
        let t0;
        super.initState();
        this[_recognizer] = (t0 = new src__gestures__monodrag.HorizontalDragGestureRecognizer.new({debugOwner: this}), t0.onStart = dart.bind(this, _handleDragStart), t0.onUpdate = dart.bind(this, _handleDragUpdate), t0.onEnd = dart.bind(this, _handleDragEnd), t0.onCancel = dart.bind(this, _handleDragCancel), t0);
      }
      dispose() {
        this[_recognizer].dispose();
        super.dispose();
      }
      [_handleDragStart](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] == null)) dart.assertFailed();
        this[_backGestureController] = this.widget.onStartPopGesture();
      }
      [_handleDragUpdate](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] != null)) dart.assertFailed();
        this[_backGestureController].dragUpdate(this[_convertToLogical](dart.notNull(details.primaryDelta) / dart.notNull(this.context.size.width)));
      }
      [_handleDragEnd](details) {
        if (!dart.test(this.mounted)) dart.assertFailed();
        if (!(this[_backGestureController] != null)) dart.assertFailed();
        this[_backGestureController].dragEnd(this[_convertToLogical](dart.notNull(details.velocity.pixelsPerSecond.dx) / dart.notNull(this.context.size.width)));
        this[_backGestureController] = null;
      }
      [_handleDragCancel]() {
        let t0;
        if (!dart.test(this.mounted)) dart.assertFailed();
        t0 = this[_backGestureController];
        t0 == null ? null : t0.dragEnd(0.0);
        this[_backGestureController] = null;
      }
      [_handlePointerDown](event) {
        if (dart.test(this.widget.enabledCallback())) this[_recognizer].addPointer(event);
      }
      [_convertToLogical](value) {
        switch (src__widgets__basic.Directionality.of(this.context)) {
          case ui$.TextDirection.rtl:
          {
            return -dart.notNull(value);
          }
          case ui$.TextDirection.ltr:
          {
            return value;
          }
        }
        return null;
      }
      build(context) {
        if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed();
        let dragAreaWidth = dart.equals(src__widgets__basic.Directionality.of(context), ui$.TextDirection.ltr) ? src__widgets__media_query.MediaQuery.of(context).padding.left : src__widgets__media_query.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(core.double, dragAreaWidth, src__cupertino__route._kBackGestureWidth);
        return new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.passthrough, children: JSArrayOfWidget().of([this.widget.child, new src__widgets__basic.PositionedDirectional.new({start: 0.0, width: dragAreaWidth, top: 0.0, bottom: 0.0, child: new src__widgets__basic.Listener.new({onPointerDown: dart.bind(this, _handlePointerDown), behavior: src__rendering__proxy_box.HitTestBehavior.translucent, $creationLocationd_0dea112b090073317d4: const$52 || (const$52 = dart.const(new src__widgets__widget_inspector._Location.new({line: 539, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$51 || (const$51 = dart.constList([const$49 || (const$49 = dart.const(new src__widgets__widget_inspector._Location.new({line: 540, column: 13, name: "onPointerDown"}))), const$50 || (const$50 = dart.const(new src__widgets__widget_inspector._Location.new({line: 541, column: 13, name: "behavior"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$59 || (const$59 = dart.const(new src__widgets__widget_inspector._Location.new({line: 534, column: 9, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$58 || (const$58 = dart.constList([const$53 || (const$53 = dart.const(new src__widgets__widget_inspector._Location.new({line: 535, column: 11, name: "start"}))), const$54 || (const$54 = dart.const(new src__widgets__widget_inspector._Location.new({line: 536, column: 11, name: "width"}))), const$55 || (const$55 = dart.const(new src__widgets__widget_inspector._Location.new({line: 537, column: 11, name: "top"}))), const$56 || (const$56 = dart.const(new src__widgets__widget_inspector._Location.new({line: 538, column: 11, name: "bottom"}))), const$57 || (const$57 = dart.const(new src__widgets__widget_inspector._Location.new({line: 539, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$63 || (const$63 = dart.const(new src__widgets__widget_inspector._Location.new({line: 530, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$62 || (const$62 = dart.constList([const$60 || (const$60 = dart.const(new src__widgets__widget_inspector._Location.new({line: 531, column: 7, name: "fit"}))), const$61 || (const$61 = dart.const(new src__widgets__widget_inspector._Location.new({line: 532, column: 7, name: "children"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (_CupertinoBackGestureDetectorState.new = function() {
      this[_backGestureController] = null;
      this[_recognizer] = null;
      _CupertinoBackGestureDetectorState.__proto__.new.call(this);
      ;
    }).prototype = _CupertinoBackGestureDetectorState.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetectorState);
    _CupertinoBackGestureDetectorState.prototype[_is__CupertinoBackGestureDetectorState_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetectorState.__proto__),
      [_handleDragStart]: dart.fnType(dart.void, [src__gestures__drag_details.DragStartDetails]),
      [_handleDragUpdate]: dart.fnType(dart.void, [src__gestures__drag_details.DragUpdateDetails]),
      [_handleDragEnd]: dart.fnType(dart.void, [src__gestures__drag_details.DragEndDetails]),
      [_handleDragCancel]: dart.fnType(dart.void, []),
      [_handlePointerDown]: dart.fnType(dart.void, [src__gestures__events.PointerDownEvent]),
      [_convertToLogical]: dart.fnType(core.double, [core.double]),
      build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
    }));
    dart.setFieldSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetectorState.__proto__),
      [_backGestureController]: dart.fieldType(src__cupertino__route._CupertinoBackGestureController$(T)),
      [_recognizer]: dart.fieldType(src__gestures__monodrag.HorizontalDragGestureRecognizer)
    }));
    return _CupertinoBackGestureDetectorState;
  });
  src__cupertino__route._CupertinoBackGestureDetectorState = src__cupertino__route._CupertinoBackGestureDetectorState$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureDetectorState, _is__CupertinoBackGestureDetectorState_default);
  const _animating = dart.privateName(src__cupertino__route, "_animating");
  const _handleStatusChanged = dart.privateName(src__cupertino__route, "_handleStatusChanged");
  const _is__CupertinoBackGestureController_default = Symbol('_is__CupertinoBackGestureController_default');
  src__cupertino__route._CupertinoBackGestureController$ = dart.generic(T => {
    class _CupertinoBackGestureController extends core.Object {
      dragUpdate(delta) {
        let t0;
        t0 = this.controller;
        t0.value = dart.notNull(t0.value) - dart.notNull(delta);
      }
      dragEnd(velocity) {
        if (velocity[$abs]() >= dart.notNull(src__cupertino__route._kMinFlingVelocity)) {
          this.controller.fling({velocity: -dart.notNull(velocity)});
        } else if (dart.notNull(this.controller.value) <= 0.5) {
          this.controller.fling({velocity: -1.0});
        } else {
          this.controller.fling({velocity: 1.0});
        }
        if (!dart.test(this.controller.isAnimating)) dart.assertFailed();
        if (!!dart.equals(this.controller.status, src__animation__animation.AnimationStatus.completed)) dart.assertFailed();
        if (!!dart.equals(this.controller.status, src__animation__animation.AnimationStatus.dismissed)) dart.assertFailed();
        this[_animating] = true;
        this.controller.addStatusListener(dart.bind(this, _handleStatusChanged));
      }
      [_handleStatusChanged](status) {
        if (!dart.test(this[_animating])) dart.assertFailed();
        this.controller.removeStatusListener(dart.bind(this, _handleStatusChanged));
        this[_animating] = false;
        if (dart.equals(status, src__animation__animation.AnimationStatus.dismissed)) this.navigator.pop(T);
        this.onEnded();
      }
      dispose() {
        if (dart.test(this[_animating])) this.controller.removeStatusListener(dart.bind(this, _handleStatusChanged));
        this.navigator.didStopUserGesture();
      }
    }
    (_CupertinoBackGestureController.new = function(opts) {
      let navigator = opts && 'navigator' in opts ? opts.navigator : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      let onEnded = opts && 'onEnded' in opts ? opts.onEnded : null;
      this[_animating] = false;
      this.navigator = navigator;
      this.controller = controller;
      this.onEnded = onEnded;
      if (!(navigator != null)) dart.assertFailed();
      if (!(controller != null)) dart.assertFailed();
      if (!(onEnded != null)) dart.assertFailed();
      this.navigator.didStartUserGesture();
    }).prototype = _CupertinoBackGestureController.prototype;
    dart.addTypeTests(_CupertinoBackGestureController);
    _CupertinoBackGestureController.prototype[_is__CupertinoBackGestureController_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureController.__proto__),
      dragUpdate: dart.fnType(dart.void, [core.double]),
      dragEnd: dart.fnType(dart.void, [core.double]),
      [_handleStatusChanged]: dart.fnType(dart.void, [src__animation__animation.AnimationStatus]),
      dispose: dart.fnType(dart.void, [])
    }));
    dart.setFieldSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureController.__proto__),
      navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState),
      controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
      onEnded: dart.finalFieldType(dart.fnType(dart.void, [])),
      [_animating]: dart.fieldType(core.bool)
    }));
    return _CupertinoBackGestureController;
  });
  src__cupertino__route._CupertinoBackGestureController = src__cupertino__route._CupertinoBackGestureController$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureController, _is__CupertinoBackGestureController_default);
  src__cupertino__route._CupertinoEdgeShadowDecoration = class _CupertinoEdgeShadowDecoration extends src__painting__decoration.Decoration {
    static lerp(a, b, t) {
      let t0, t0$;
      if (!(t != null)) dart.assertFailed();
      if (a == null && b == null) return null;
      return new src__cupertino__route._CupertinoEdgeShadowDecoration.new({edgeGradient: src__painting__gradient.LinearGradient.lerp((t0 = a, t0 == null ? null : t0.edgeGradient), (t0$ = b, t0$ == null ? null : t0$.edgeGradient), t)});
    }
    lerpFrom(a, t) {
      if (!src__cupertino__route._CupertinoEdgeShadowDecoration.is(a)) return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(null, this, t);
      return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(src__cupertino__route._CupertinoEdgeShadowDecoration._check(a), this, t);
    }
    lerpTo(b, t) {
      if (!src__cupertino__route._CupertinoEdgeShadowDecoration.is(b)) return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(this, null, t);
      return src__cupertino__route._CupertinoEdgeShadowDecoration.lerp(this, src__cupertino__route._CupertinoEdgeShadowDecoration._check(b), t);
    }
    createBoxPainter(onChanged) {
      if (onChanged === void 0) onChanged = null;
      return new src__cupertino__route._CupertinoEdgeShadowPainter.new(this, onChanged);
    }
    _equals(other) {
      if (other == null) return false;
      if (!dart.equals(this[$runtimeType], dart.runtimeType(other))) return false;
      let typedOther = src__cupertino__route._CupertinoEdgeShadowDecoration._check(other);
      return dart.equals(this.edgeGradient, typedOther.edgeGradient);
    }
    get hashCode() {
      return dart.hashCode(this.edgeGradient);
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new (DiagnosticsPropertyOfLinearGradient()).new("edgeGradient", this.edgeGradient));
    }
  };
  (src__cupertino__route._CupertinoEdgeShadowDecoration.new = function(opts) {
    let edgeGradient = opts && 'edgeGradient' in opts ? opts.edgeGradient : null;
    this.edgeGradient = edgeGradient;
    src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__route._CupertinoEdgeShadowDecoration.prototype;
  dart.addTypeTests(src__cupertino__route._CupertinoEdgeShadowDecoration);
  dart.setMethodSignature(src__cupertino__route._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getMethods(src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__),
    lerpFrom: dart.fnType(src__cupertino__route._CupertinoEdgeShadowDecoration, [src__painting__decoration.Decoration, core.double]),
    lerpTo: dart.fnType(src__cupertino__route._CupertinoEdgeShadowDecoration, [src__painting__decoration.Decoration, core.double]),
    createBoxPainter: dart.fnType(src__cupertino__route._CupertinoEdgeShadowPainter, [], [dart.fnType(dart.void, [])])
  }));
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__),
    edgeGradient: dart.finalFieldType(src__painting__gradient.LinearGradient)
  }));
  dart.defineExtensionMethods(src__cupertino__route._CupertinoEdgeShadowDecoration, ['_equals']);
  dart.defineExtensionAccessors(src__cupertino__route._CupertinoEdgeShadowDecoration, ['hashCode']);
  dart.defineLazy(src__cupertino__route._CupertinoEdgeShadowDecoration, {
    /*src__cupertino__route._CupertinoEdgeShadowDecoration.none*/get none() {
      return dart.const(new src__cupertino__route._CupertinoEdgeShadowDecoration.new());
    }
  });
  const _decoration$ = dart.privateName(src__cupertino__route, "_decoration");
  src__cupertino__route._CupertinoEdgeShadowPainter = class _CupertinoEdgeShadowPainter extends src__painting__decoration.BoxPainter {
    paint(canvas, offset, configuration) {
      let t0;
      let gradient = this[_decoration$].edgeGradient;
      if (gradient == null) return;
      let textDirection = configuration.textDirection;
      if (!(textDirection != null)) dart.assertFailed();
      let deltaX = null;
      switch (textDirection) {
        case ui$.TextDirection.rtl:
        {
          deltaX = configuration.size.width;
          break;
        }
        case ui$.TextDirection.ltr:
        {
          deltaX = -dart.notNull(configuration.size.width);
          break;
        }
      }
      let rect = offset['&'](configuration.size).translate(deltaX, 0.0);
      let paint = (t0 = new ui$.Paint.new(), t0.shader = gradient.createShader(rect, {textDirection: textDirection}), t0);
      canvas.drawRect(rect, paint);
    }
  };
  (src__cupertino__route._CupertinoEdgeShadowPainter.new = function(_decoration, onChange) {
    this[_decoration$] = _decoration;
    if (!(_decoration != null)) dart.assertFailed();
    src__cupertino__route._CupertinoEdgeShadowPainter.__proto__.new.call(this, onChange);
    ;
  }).prototype = src__cupertino__route._CupertinoEdgeShadowPainter.prototype;
  dart.addTypeTests(src__cupertino__route._CupertinoEdgeShadowPainter);
  dart.setMethodSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset, src__painting__image_provider.ImageConfiguration])
  }));
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    [_decoration$]: dart.finalFieldType(src__cupertino__route._CupertinoEdgeShadowDecoration)
  }));
  const _animation = dart.privateName(src__cupertino__route, "_animation");
  const _offsetTween = dart.privateName(src__cupertino__route, "_offsetTween");
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
  const _is__CupertinoModalPopupRoute_default = Symbol('_is__CupertinoModalPopupRoute_default');
  src__cupertino__route._CupertinoModalPopupRoute$ = dart.generic(T => {
    class _CupertinoModalPopupRoute extends src__widgets__routes.PopupRoute$(T) {
      get barrierLabel() {
        return this[barrierLabel$];
      }
      set barrierLabel(value) {
        super.barrierLabel = value;
      }
      get barrierColor() {
        return src__cupertino__route._kModalBarrierColor;
      }
      get barrierDismissible() {
        return true;
      }
      get semanticsDismissible() {
        return false;
      }
      get transitionDuration() {
        return src__cupertino__route._kModalPopupTransitionDuration;
      }
      createAnimation() {
        if (!(this[_animation] == null)) dart.assertFailed();
        this[_animation] = new src__animation__animations.CurvedAnimation.new({parent: super.createAnimation(), curve: src__animation__curves.Curves.ease, reverseCurve: src__animation__curves.Curves.ease.flipped});
        this[_offsetTween] = new (TweenOfOffset()).new({begin: const$64 || (const$64 = dart.const(new ui$.Offset.new(0.0, 1.0))), end: const$65 || (const$65 = dart.const(new ui$.Offset.new(0.0, 0.0)))});
        return this[_animation];
      }
      buildPage(context, animation, secondaryAnimation) {
        return this.builder(context);
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomCenter, child: new src__widgets__basic.FractionalTranslation.new({translation: this[_offsetTween].evaluate(this[_animation]), child: child, $creationLocationd_0dea112b090073317d4: const$69 || (const$69 = dart.const(new src__widgets__widget_inspector._Location.new({line: 807, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$68 || (const$68 = dart.constList([const$66 || (const$66 = dart.const(new src__widgets__widget_inspector._Location.new({line: 808, column: 9, name: "translation"}))), const$67 || (const$67 = dart.const(new src__widgets__widget_inspector._Location.new({line: 809, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$73 || (const$73 = dart.const(new src__widgets__widget_inspector._Location.new({line: 805, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$72 || (const$72 = dart.constList([const$70 || (const$70 = dart.const(new src__widgets__widget_inspector._Location.new({line: 806, column: 7, name: "alignment"}))), const$71 || (const$71 = dart.const(new src__widgets__widget_inspector._Location.new({line: 807, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
    }
    (_CupertinoModalPopupRoute.new = function(opts) {
      let builder = opts && 'builder' in opts ? opts.builder : null;
      let barrierLabel = opts && 'barrierLabel' in opts ? opts.barrierLabel : null;
      let settings = opts && 'settings' in opts ? opts.settings : null;
      this[_animation] = null;
      this[_offsetTween] = null;
      this.builder = builder;
      this[barrierLabel$] = barrierLabel;
      _CupertinoModalPopupRoute.__proto__.new.call(this, {settings: settings});
      ;
    }).prototype = _CupertinoModalPopupRoute.prototype;
    dart.addTypeTests(_CupertinoModalPopupRoute);
    _CupertinoModalPopupRoute.prototype[_is__CupertinoModalPopupRoute_default] = true;
    const barrierLabel$ = Symbol("_CupertinoModalPopupRoute.barrierLabel");
    dart.setMethodSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getMethods(_CupertinoModalPopupRoute.__proto__),
      buildPage: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__animation__animation.Animation$(core.double), src__animation__animation.Animation$(core.double)])
    }));
    dart.setGetterSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getGetters(_CupertinoModalPopupRoute.__proto__),
      barrierColor: ui$.Color,
      barrierDismissible: core.bool,
      transitionDuration: core.Duration
    }));
    dart.setFieldSignature(_CupertinoModalPopupRoute, () => ({
      __proto__: dart.getFields(_CupertinoModalPopupRoute.__proto__),
      builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])),
      barrierLabel: dart.finalFieldType(core.String),
      [_animation]: dart.fieldType(src__animation__animation.Animation$(core.double)),
      [_offsetTween]: dart.fieldType(src__animation__tween.Tween$(ui$.Offset))
    }));
    return _CupertinoModalPopupRoute;
  });
  src__cupertino__route._CupertinoModalPopupRoute = src__cupertino__route._CupertinoModalPopupRoute$();
  dart.addTypeTests(src__cupertino__route._CupertinoModalPopupRoute, _is__CupertinoModalPopupRoute_default);
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
  src__cupertino__route.showCupertinoModalPopup = function(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    return src__widgets__navigator.Navigator.of(context, {rootNavigator: true}).push(T, new (src__cupertino__route._CupertinoModalPopupRoute$(T)).new({builder: builder, barrierLabel: "Dismiss"}));
  };
  src__cupertino__route._buildCupertinoDialogTransitions = function(context, animation, secondaryAnimation, child) {
    let fadeAnimation = new src__animation__animations.CurvedAnimation.new({parent: animation, curve: src__animation__curves.Curves.easeInOut});
    if (dart.equals(animation.status, src__animation__animation.AnimationStatus.reverse)) {
      return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: child, $creationLocationd_0dea112b090073317d4: const$77 || (const$77 = dart.const(new src__widgets__widget_inspector._Location.new({line: 864, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$76 || (const$76 = dart.constList([const$74 || (const$74 = dart.const(new src__widgets__widget_inspector._Location.new({line: 865, column: 7, name: "opacity"}))), const$75 || (const$75 = dart.const(new src__widgets__widget_inspector._Location.new({line: 866, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: new src__widgets__transitions.ScaleTransition.new({child: child, scale: animation.drive(core.double, src__cupertino__route._dialogTween), $creationLocationd_0dea112b090073317d4: const$81 || (const$81 = dart.const(new src__widgets__widget_inspector._Location.new({line: 871, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$80 || (const$80 = dart.constList([const$78 || (const$78 = dart.const(new src__widgets__widget_inspector._Location.new({line: 872, column: 7, name: "child"}))), const$79 || (const$79 = dart.const(new src__widgets__widget_inspector._Location.new({line: 873, column: 7, name: "scale"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$85 || (const$85 = dart.const(new src__widgets__widget_inspector._Location.new({line: 869, column: 10, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", parameterLocations: const$84 || (const$84 = dart.constList([const$82 || (const$82 = dart.const(new src__widgets__widget_inspector._Location.new({line: 870, column: 5, name: "opacity"}))), const$83 || (const$83 = dart.const(new src__widgets__widget_inspector._Location.new({line: 871, column: 5, name: "child"})))], src__widgets__widget_inspector._Location))})))});
  };
  src__cupertino__route.showCupertinoDialog = function(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (!(builder != null)) dart.assertFailed();
    return src__widgets__routes.showGeneralDialog(T, {context: context, barrierDismissible: false, barrierColor: src__cupertino__route._kModalBarrierColor, transitionDuration: const$86 || (const$86 = dart.const(new core.Duration.new({milliseconds: 300}))), pageBuilder: dart.fn((context, animation, secondaryAnimation) => builder(context), BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionBuilder: dart.fn(src__cupertino__route._buildCupertinoDialogTransitions, BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget())});
  };
  dart.defineLazy(src__cupertino__route, {
    /*src__cupertino__route._kBackGestureWidth*/get _kBackGestureWidth() {
      return 20.0;
    },
    /*src__cupertino__route._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 1.0;
    },
    /*src__cupertino__route._kModalBarrierColor*/get _kModalBarrierColor() {
      return dart.const(new ui$.Color.new(1711539215));
    },
    /*src__cupertino__route._kModalPopupTransitionDuration*/get _kModalPopupTransitionDuration() {
      return dart.const(new core.Duration.new({milliseconds: 335}));
    },
    /*src__cupertino__route._kRightMiddleTween*/get _kRightMiddleTween() {
      return new (TweenOfOffset()).new({begin: dart.const(new ui$.Offset.new(1.0, 0.0)), end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kMiddleLeftTween*/get _kMiddleLeftTween() {
      return new (TweenOfOffset()).new({begin: ui$.Offset.zero, end: dart.const(new ui$.Offset.new(-1.0 / 3.0, 0.0))});
    },
    /*src__cupertino__route._kBottomUpTween*/get _kBottomUpTween() {
      return new (TweenOfOffset()).new({begin: dart.const(new ui$.Offset.new(0.0, 1.0)), end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kGradientShadowTween*/get _kGradientShadowTween() {
      return new src__widgets__implicit_animations.DecorationTween.new({begin: src__cupertino__route._CupertinoEdgeShadowDecoration.none, end: dart.const(new src__cupertino__route._CupertinoEdgeShadowDecoration.new({edgeGradient: dart.const(new src__painting__gradient.LinearGradient.new({begin: dart.const(new src__painting__alignment.AlignmentDirectional.new(0.9, 0.0)), end: src__painting__alignment.AlignmentDirectional.centerEnd, colors: dart.constList([dart.const(new ui$.Color.new(0)), dart.const(new ui$.Color.new(67108864)), dart.const(new ui$.Color.new(301989888)), dart.const(new ui$.Color.new(939524096))], ui$.Color), stops: dart.constList([0.0, 0.3, 0.6, 1.0], core.double)}))}))});
    },
    /*src__cupertino__route._dialogTween*/get _dialogTween() {
      return new (TweenOfdouble()).new({begin: 1.2, end: 1.0}).chain(new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.fastOutSlowIn}));
    }
  });
  let const$87;
  src__cupertino__theme.CupertinoTheme = class CupertinoTheme extends src__widgets__framework.InheritedWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    updateShouldNotify(oldWidget) {
      src__cupertino__theme.CupertinoTheme._check(oldWidget);
      return !dart.equals(this.data, oldWidget.data);
    }
    static of(context) {
      let t0, t0$;
      let theme = src__cupertino__theme.CupertinoTheme._check(context.inheritFromWidgetOfExactType(dart.wrapType(src__cupertino__theme.CupertinoTheme)));
      t0$ = (t0 = theme, t0 == null ? null : t0.data);
      return t0$ == null ? const$87 || (const$87 = dart.const(new src__cupertino__theme.CupertinoThemeData.new())) : t0$;
    }
  };
  (src__cupertino__theme.CupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    if (!(child != null)) dart.assertFailed();
    if (!(data != null)) dart.assertFailed();
    src__cupertino__theme.CupertinoTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__theme.CupertinoTheme.prototype;
  dart.addTypeTests(src__cupertino__theme.CupertinoTheme);
  const data$ = Symbol("CupertinoTheme.data");
  dart.setMethodSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getMethods(src__cupertino__theme.CupertinoTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getFields(src__cupertino__theme.CupertinoTheme.__proto__),
    data: dart.finalFieldType(src__cupertino__theme.CupertinoThemeData)
  }));
  const _brightness$ = dart.privateName(src__cupertino__theme, "_brightness");
  const _primaryColor$ = dart.privateName(src__cupertino__theme, "_primaryColor");
  const _primaryContrastingColor$ = dart.privateName(src__cupertino__theme, "_primaryContrastingColor");
  const _textTheme$ = dart.privateName(src__cupertino__theme, "_textTheme");
  const _barBackgroundColor$ = dart.privateName(src__cupertino__theme, "_barBackgroundColor");
  const _scaffoldBackgroundColor$ = dart.privateName(src__cupertino__theme, "_scaffoldBackgroundColor");
  const _isLight$ = dart.privateName(src__cupertino__theme, "_isLight");
  let const$88;
  src__cupertino__theme.CupertinoThemeData = class CupertinoThemeData extends src__foundation__diagnostics.Diagnosticable {
    get [_isLight$]() {
      return dart.equals(this.brightness, ui$.Brightness.light);
    }
    get brightness() {
      let t0;
      t0 = this[_brightness$];
      return t0 == null ? ui$.Brightness.light : t0;
    }
    get primaryColor() {
      let t0;
      t0 = this[_primaryColor$];
      return t0 == null ? dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.activeBlue : src__cupertino__colors.CupertinoColors.activeOrange : t0;
    }
    get primaryContrastingColor() {
      let t0;
      t0 = this[_primaryContrastingColor$];
      return t0 == null ? dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.white : src__cupertino__colors.CupertinoColors.black : t0;
    }
    get textTheme() {
      let t0;
      t0 = this[_textTheme$];
      return t0 == null ? new src__cupertino__text_theme.CupertinoTextThemeData.new({brightness: this.brightness, primaryColor: this.primaryColor}) : t0;
    }
    get barBackgroundColor() {
      let t0;
      t0 = this[_barBackgroundColor$];
      return t0 == null ? dart.test(this[_isLight$]) ? src__cupertino__theme._kDefaultBarLightBackgroundColor : src__cupertino__theme._kDefaultBarDarkBackgroundColor : t0;
    }
    get scaffoldBackgroundColor() {
      let t0;
      t0 = this[_scaffoldBackgroundColor$];
      return t0 == null ? dart.test(this[_isLight$]) ? src__cupertino__colors.CupertinoColors.white : src__cupertino__colors.CupertinoColors.black : t0;
    }
    noDefault() {
      return new src__cupertino__theme._NoDefaultCupertinoThemeData.new(this[_brightness$], this[_primaryColor$], this[_primaryContrastingColor$], this[_textTheme$], this[_barBackgroundColor$], this[_scaffoldBackgroundColor$]);
    }
    copyWith(opts) {
      let t0, t0$, t0$0, t0$1, t0$2, t0$3;
      let brightness = opts && 'brightness' in opts ? opts.brightness : null;
      let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
      let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
      let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
      let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
      let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
      return new src__cupertino__theme.CupertinoThemeData.new({brightness: (t0 = brightness, t0 == null ? this[_brightness$] : t0), primaryColor: (t0$ = primaryColor, t0$ == null ? this[_primaryColor$] : t0$), primaryContrastingColor: (t0$0 = primaryContrastingColor, t0$0 == null ? this[_primaryContrastingColor$] : t0$0), textTheme: (t0$1 = textTheme, t0$1 == null ? this[_textTheme$] : t0$1), barBackgroundColor: (t0$2 = barBackgroundColor, t0$2 == null ? this[_barBackgroundColor$] : t0$2), scaffoldBackgroundColor: (t0$3 = scaffoldBackgroundColor, t0$3 == null ? this[_scaffoldBackgroundColor$] : t0$3)});
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      let defaultData = const$88 || (const$88 = dart.const(new src__cupertino__theme.CupertinoThemeData.new()));
      properties.add(new (EnumPropertyOfBrightness()).new("brightness", this.brightness, {defaultValue: defaultData.brightness}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("primaryColor", this.primaryColor, {defaultValue: defaultData.primaryColor}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("primaryContrastingColor", this.primaryContrastingColor, {defaultValue: defaultData.primaryContrastingColor}));
      properties.add(new (DiagnosticsPropertyOfCupertinoTextThemeData()).new("textTheme", this.textTheme, {defaultValue: defaultData.textTheme}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("barBackgroundColor", this.barBackgroundColor, {defaultValue: defaultData.barBackgroundColor}));
      properties.add(new (DiagnosticsPropertyOfColor()).new("scaffoldBackgroundColor", this.scaffoldBackgroundColor, {defaultValue: defaultData.scaffoldBackgroundColor}));
    }
  };
  (src__cupertino__theme.CupertinoThemeData.new = function(opts) {
    let brightness = opts && 'brightness' in opts ? opts.brightness : null;
    let primaryColor = opts && 'primaryColor' in opts ? opts.primaryColor : null;
    let primaryContrastingColor = opts && 'primaryContrastingColor' in opts ? opts.primaryContrastingColor : null;
    let textTheme = opts && 'textTheme' in opts ? opts.textTheme : null;
    let barBackgroundColor = opts && 'barBackgroundColor' in opts ? opts.barBackgroundColor : null;
    let scaffoldBackgroundColor = opts && 'scaffoldBackgroundColor' in opts ? opts.scaffoldBackgroundColor : null;
    src__cupertino__theme.CupertinoThemeData.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
  }).prototype = src__cupertino__theme.CupertinoThemeData.prototype;
  (src__cupertino__theme.CupertinoThemeData.raw = function(_brightness, _primaryColor, _primaryContrastingColor, _textTheme, _barBackgroundColor, _scaffoldBackgroundColor) {
    this[_brightness$] = _brightness;
    this[_primaryColor$] = _primaryColor;
    this[_primaryContrastingColor$] = _primaryContrastingColor;
    this[_textTheme$] = _textTheme;
    this[_barBackgroundColor$] = _barBackgroundColor;
    this[_scaffoldBackgroundColor$] = _scaffoldBackgroundColor;
    src__cupertino__theme.CupertinoThemeData.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__theme.CupertinoThemeData.prototype;
  dart.addTypeTests(src__cupertino__theme.CupertinoThemeData);
  dart.setMethodSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getMethods(src__cupertino__theme.CupertinoThemeData.__proto__),
    noDefault: dart.fnType(src__cupertino__theme.CupertinoThemeData, []),
    copyWith: dart.fnType(src__cupertino__theme.CupertinoThemeData, [], {barBackgroundColor: ui$.Color, brightness: ui$.Brightness, primaryColor: ui$.Color, primaryContrastingColor: ui$.Color, scaffoldBackgroundColor: ui$.Color, textTheme: src__cupertino__text_theme.CupertinoTextThemeData})
  }));
  dart.setGetterSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getGetters(src__cupertino__theme.CupertinoThemeData.__proto__),
    [_isLight$]: core.bool,
    brightness: ui$.Brightness,
    primaryColor: ui$.Color,
    primaryContrastingColor: ui$.Color,
    textTheme: src__cupertino__text_theme.CupertinoTextThemeData,
    barBackgroundColor: ui$.Color,
    scaffoldBackgroundColor: ui$.Color
  }));
  dart.setFieldSignature(src__cupertino__theme.CupertinoThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__theme.CupertinoThemeData.__proto__),
    [_brightness$]: dart.finalFieldType(ui$.Brightness),
    [_primaryColor$]: dart.finalFieldType(ui$.Color),
    [_primaryContrastingColor$]: dart.finalFieldType(ui$.Color),
    [_textTheme$]: dart.finalFieldType(src__cupertino__text_theme.CupertinoTextThemeData),
    [_barBackgroundColor$]: dart.finalFieldType(ui$.Color),
    [_scaffoldBackgroundColor$]: dart.finalFieldType(ui$.Color)
  }));
  src__cupertino__theme._NoDefaultCupertinoThemeData = class _NoDefaultCupertinoThemeData extends src__cupertino__theme.CupertinoThemeData {
    get brightness() {
      return this[brightness$];
    }
    set brightness(value) {
      super.brightness = value;
    }
    get primaryColor() {
      return this[primaryColor$];
    }
    set primaryColor(value) {
      super.primaryColor = value;
    }
    get primaryContrastingColor() {
      return this[primaryContrastingColor$];
    }
    set primaryContrastingColor(value) {
      super.primaryContrastingColor = value;
    }
    get textTheme() {
      return this[textTheme$];
    }
    set textTheme(value) {
      super.textTheme = value;
    }
    get barBackgroundColor() {
      return this[barBackgroundColor$];
    }
    set barBackgroundColor(value) {
      super.barBackgroundColor = value;
    }
    get scaffoldBackgroundColor() {
      return this[scaffoldBackgroundColor$];
    }
    set scaffoldBackgroundColor(value) {
      super.scaffoldBackgroundColor = value;
    }
  };
  (src__cupertino__theme._NoDefaultCupertinoThemeData.new = function(brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor) {
    this[brightness$] = brightness;
    this[primaryColor$] = primaryColor;
    this[primaryContrastingColor$] = primaryContrastingColor;
    this[textTheme$] = textTheme;
    this[barBackgroundColor$] = barBackgroundColor;
    this[scaffoldBackgroundColor$] = scaffoldBackgroundColor;
    src__cupertino__theme._NoDefaultCupertinoThemeData.__proto__.raw.call(this, brightness, primaryColor, primaryContrastingColor, textTheme, barBackgroundColor, scaffoldBackgroundColor);
    ;
  }).prototype = src__cupertino__theme._NoDefaultCupertinoThemeData.prototype;
  dart.addTypeTests(src__cupertino__theme._NoDefaultCupertinoThemeData);
  const brightness$ = Symbol("_NoDefaultCupertinoThemeData.brightness");
  const primaryColor$ = Symbol("_NoDefaultCupertinoThemeData.primaryColor");
  const primaryContrastingColor$ = Symbol("_NoDefaultCupertinoThemeData.primaryContrastingColor");
  const textTheme$ = Symbol("_NoDefaultCupertinoThemeData.textTheme");
  const barBackgroundColor$ = Symbol("_NoDefaultCupertinoThemeData.barBackgroundColor");
  const scaffoldBackgroundColor$ = Symbol("_NoDefaultCupertinoThemeData.scaffoldBackgroundColor");
  dart.setFieldSignature(src__cupertino__theme._NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__theme._NoDefaultCupertinoThemeData.__proto__),
    brightness: dart.finalFieldType(ui$.Brightness),
    primaryColor: dart.finalFieldType(ui$.Color),
    primaryContrastingColor: dart.finalFieldType(ui$.Color),
    textTheme: dart.finalFieldType(src__cupertino__text_theme.CupertinoTextThemeData),
    barBackgroundColor: dart.finalFieldType(ui$.Color),
    scaffoldBackgroundColor: dart.finalFieldType(ui$.Color)
  }));
  dart.defineLazy(src__cupertino__theme, {
    /*src__cupertino__theme._kDefaultBarLightBackgroundColor*/get _kDefaultBarLightBackgroundColor() {
      return dart.const(new ui$.Color.new(3438868728));
    },
    /*src__cupertino__theme._kDefaultBarDarkBackgroundColor*/get _kDefaultBarDarkBackgroundColor() {
      return dart.const(new ui$.Color.new(3072401697));
    }
  });
  let const$89;
  let const$90;
  src__cupertino__button.CupertinoButton = class CupertinoButton extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    get padding() {
      return this[padding$];
    }
    set padding(value) {
      super.padding = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get disabledColor() {
      return this[disabledColor$];
    }
    set disabledColor(value) {
      super.disabledColor = value;
    }
    get onPressed() {
      return this[onPressed$];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get minSize() {
      return this[minSize$];
    }
    set minSize(value) {
      super.minSize = value;
    }
    get pressedOpacity() {
      return this[pressedOpacity$];
    }
    set pressedOpacity(value) {
      super.pressedOpacity = value;
    }
    get borderRadius() {
      return this[borderRadius$];
    }
    set borderRadius(value) {
      super.borderRadius = value;
    }
    get enabled() {
      return this.onPressed != null;
    }
    createState() {
      return new src__cupertino__button._CupertinoButtonState.new();
    }
    debugFillProperties(properties) {
      super.debugFillProperties(properties);
      properties.add(new src__foundation__diagnostics.FlagProperty.new("enabled", {value: this.enabled, ifFalse: "disabled"}));
    }
  };
  (src__cupertino__button.CupertinoButton.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44.0;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.1;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : const$90 || (const$90 = dart.const(new src__painting__border_radius.BorderRadius.all(const$89 || (const$89 = dart.const(new ui$.Radius.circular(8.0))))));
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    this[padding$] = padding;
    this[color$] = color;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed();
    src__cupertino__button.CupertinoButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__button.CupertinoButton.prototype;
  dart.addTypeTests(src__cupertino__button.CupertinoButton);
  const child$1 = Symbol("CupertinoButton.child");
  const padding$ = Symbol("CupertinoButton.padding");
  const color$ = Symbol("CupertinoButton.color");
  const disabledColor$ = Symbol("CupertinoButton.disabledColor");
  const onPressed$ = Symbol("CupertinoButton.onPressed");
  const minSize$ = Symbol("CupertinoButton.minSize");
  const pressedOpacity$ = Symbol("CupertinoButton.pressedOpacity");
  const borderRadius$ = Symbol("CupertinoButton.borderRadius");
  dart.setMethodSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getMethods(src__cupertino__button.CupertinoButton.__proto__),
    createState: dart.fnType(src__cupertino__button._CupertinoButtonState, [])
  }));
  dart.setGetterSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getGetters(src__cupertino__button.CupertinoButton.__proto__),
    enabled: core.bool
  }));
  dart.setFieldSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getFields(src__cupertino__button.CupertinoButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    color: dart.finalFieldType(ui$.Color),
    disabledColor: dart.finalFieldType(ui$.Color),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    minSize: dart.finalFieldType(core.double),
    pressedOpacity: dart.finalFieldType(core.double),
    borderRadius: dart.finalFieldType(src__painting__border_radius.BorderRadius)
  }));
  const _opacityTween = dart.privateName(src__cupertino__button, "_opacityTween");
  const _animationController = dart.privateName(src__cupertino__button, "_animationController");
  const _opacityAnimation = dart.privateName(src__cupertino__button, "_opacityAnimation");
  const _buttonHeldDown = dart.privateName(src__cupertino__button, "_buttonHeldDown");
  let const$91;
  const _setTween = dart.privateName(src__cupertino__button, "_setTween");
  const _animate = dart.privateName(src__cupertino__button, "_animate");
  const _handleTapDown = dart.privateName(src__cupertino__button, "_handleTapDown");
  const _handleTapUp = dart.privateName(src__cupertino__button, "_handleTapUp");
  const _handleTapCancel = dart.privateName(src__cupertino__button, "_handleTapCancel");
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
  const State_SingleTickerProviderStateMixin$$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__button.CupertinoButton) {};
  (State_SingleTickerProviderStateMixin$$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton));
  src__cupertino__button._CupertinoButtonState = class _CupertinoButtonState extends State_SingleTickerProviderStateMixin$$ {
    initState() {
      super.initState();
      this[_animationController] = new src__animation__animation_controller.AnimationController.new({duration: const$91 || (const$91 = dart.const(new core.Duration.new({milliseconds: 200}))), value: 0.0, vsync: this});
      this[_opacityAnimation] = this[_animationController].drive(core.double, new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.decelerate})).drive(core.double, this[_opacityTween]);
      this[_setTween]();
    }
    didUpdateWidget(old) {
      src__cupertino__button.CupertinoButton._check(old);
      super.didUpdateWidget(old);
      this[_setTween]();
    }
    [_setTween]() {
      let t0;
      this[_opacityTween].end = (t0 = this.widget.pressedOpacity, t0 == null ? 1.0 : t0);
    }
    dispose() {
      this[_animationController].dispose();
      this[_animationController] = null;
      super.dispose();
    }
    [_handleTapDown](event) {
      if (!dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = true;
        this[_animate]();
      }
    }
    [_handleTapUp](event) {
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_handleTapCancel]() {
      if (dart.test(this[_buttonHeldDown])) {
        this[_buttonHeldDown] = false;
        this[_animate]();
      }
    }
    [_animate]() {
      if (dart.test(this[_animationController].isAnimating)) return;
      let wasHeldDown = this[_buttonHeldDown];
      let ticker = dart.test(this[_buttonHeldDown]) ? this[_animationController].animateTo(1.0, {duration: src__cupertino__button._CupertinoButtonState.kFadeOutDuration}) : this[_animationController].animateTo(0.0, {duration: src__cupertino__button._CupertinoButtonState.kFadeInDuration});
      ticker.then(dart.void, dart.fn(value => {
        if (dart.test(this.mounted) && !dart.equals(wasHeldDown, this[_buttonHeldDown])) this[_animate]();
      }, voidToNull()));
    }
    build(context) {
      let t0, t0$;
      let enabled = this.widget.enabled;
      let backgroundColor = this.widget.color;
      return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTapDown: dart.test(enabled) ? dart.bind(this, _handleTapDown) : null, onTapUp: dart.test(enabled) ? dart.bind(this, _handleTapUp) : null, onTapCancel: dart.test(enabled) ? dart.bind(this, _handleTapCancel) : null, onTap: this.widget.onPressed, child: new src__widgets__basic.Semantics.new({button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: this.widget.minSize == null ? const$92 || (const$92 = dart.const(new src__rendering__box.BoxConstraints.new())) : new src__rendering__box.BoxConstraints.new({minWidth: this.widget.minSize, minHeight: this.widget.minSize}), child: new src__widgets__transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: this.widget.borderRadius, color: backgroundColor != null && !dart.test(enabled) ? (t0 = this.widget.disabledColor, t0 == null ? src__cupertino__button._kDisabledBackground : t0) : backgroundColor}), child: new src__widgets__basic.Padding.new({padding: (t0$ = this.widget.padding, t0$ == null ? backgroundColor != null ? src__cupertino__button._kBackgroundButtonPadding : src__cupertino__button._kButtonPadding : t0$), child: new src__widgets__basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: new src__widgets__text.DefaultTextStyle.new({style: backgroundColor != null ? src__cupertino__button._kBackgroundButtonTextStyle : dart.test(enabled) ? src__cupertino__button._kButtonTextStyle : src__cupertino__button._kDisabledButtonTextStyle, child: this.widget.child, $creationLocationd_0dea112b090073317d4: const$96 || (const$96 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 26, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$95 || (const$95 = dart.constList([const$93 || (const$93 = dart.const(new src__widgets__widget_inspector._Location.new({line: 237, column: 21, name: "style"}))), const$94 || (const$94 = dart.const(new src__widgets__widget_inspector._Location.new({line: 242, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$101 || (const$101 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 24, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$100 || (const$100 = dart.constList([const$97 || (const$97 = dart.const(new src__widgets__widget_inspector._Location.new({line: 234, column: 19, name: "widthFactor"}))), const$98 || (const$98 = dart.const(new src__widgets__widget_inspector._Location.new({line: 235, column: 19, name: "heightFactor"}))), const$99 || (const$99 = dart.const(new src__widgets__widget_inspector._Location.new({line: 236, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$105 || (const$105 = dart.const(new src__widgets__widget_inspector._Location.new({line: 228, column: 22, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$104 || (const$104 = dart.constList([const$102 || (const$102 = dart.const(new src__widgets__widget_inspector._Location.new({line: 229, column: 17, name: "padding"}))), const$103 || (const$103 = dart.const(new src__widgets__widget_inspector._Location.new({line: 233, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$109 || (const$109 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$108 || (const$108 = dart.constList([const$106 || (const$106 = dart.const(new src__widgets__widget_inspector._Location.new({line: 222, column: 15, name: "decoration"}))), const$107 || (const$107 = dart.const(new src__widgets__widget_inspector._Location.new({line: 228, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$113 || (const$113 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$112 || (const$112 = dart.constList([const$110 || (const$110 = dart.const(new src__widgets__widget_inspector._Location.new({line: 220, column: 13, name: "opacity"}))), const$111 || (const$111 = dart.const(new src__widgets__widget_inspector._Location.new({line: 221, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$117 || (const$117 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$116 || (const$116 = dart.constList([const$114 || (const$114 = dart.const(new src__widgets__widget_inspector._Location.new({line: 213, column: 11, name: "constraints"}))), const$115 || (const$115 = dart.const(new src__widgets__widget_inspector._Location.new({line: 219, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$121 || (const$121 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$120 || (const$120 = dart.constList([const$118 || (const$118 = dart.const(new src__widgets__widget_inspector._Location.new({line: 211, column: 9, name: "button"}))), const$119 || (const$119 = dart.const(new src__widgets__widget_inspector._Location.new({line: 212, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$129 || (const$129 = dart.const(new src__widgets__widget_inspector._Location.new({line: 204, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", parameterLocations: const$128 || (const$128 = dart.constList([const$122 || (const$122 = dart.const(new src__widgets__widget_inspector._Location.new({line: 205, column: 7, name: "behavior"}))), const$123 || (const$123 = dart.const(new src__widgets__widget_inspector._Location.new({line: 206, column: 7, name: "onTapDown"}))), const$124 || (const$124 = dart.const(new src__widgets__widget_inspector._Location.new({line: 207, column: 7, name: "onTapUp"}))), const$125 || (const$125 = dart.const(new src__widgets__widget_inspector._Location.new({line: 208, column: 7, name: "onTapCancel"}))), const$126 || (const$126 = dart.const(new src__widgets__widget_inspector._Location.new({line: 209, column: 7, name: "onTap"}))), const$127 || (const$127 = dart.const(new src__widgets__widget_inspector._Location.new({line: 210, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__button._CupertinoButtonState.new = function() {
    this[_opacityTween] = new (TweenOfdouble()).new({begin: 1.0});
    this[_animationController] = null;
    this[_opacityAnimation] = null;
    this[_buttonHeldDown] = false;
    src__cupertino__button._CupertinoButtonState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__button._CupertinoButtonState.prototype;
  dart.addTypeTests(src__cupertino__button._CupertinoButtonState);
  dart.setMethodSignature(src__cupertino__button._CupertinoButtonState, () => ({
    __proto__: dart.getMethods(src__cupertino__button._CupertinoButtonState.__proto__),
    [_setTween]: dart.fnType(dart.void, []),
    [_handleTapDown]: dart.fnType(dart.void, [src__gestures__tap.TapDownDetails]),
    [_handleTapUp]: dart.fnType(dart.void, [src__gestures__tap.TapUpDetails]),
    [_handleTapCancel]: dart.fnType(dart.void, []),
    [_animate]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__button._CupertinoButtonState, () => ({
    __proto__: dart.getFields(src__cupertino__button._CupertinoButtonState.__proto__),
    [_opacityTween]: dart.finalFieldType(src__animation__tween.Tween$(core.double)),
    [_animationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_opacityAnimation]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_buttonHeldDown]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__cupertino__button._CupertinoButtonState, {
    /*src__cupertino__button._CupertinoButtonState.kFadeOutDuration*/get kFadeOutDuration() {
      return dart.const(new core.Duration.new({milliseconds: 10}));
    },
    /*src__cupertino__button._CupertinoButtonState.kFadeInDuration*/get kFadeInDuration() {
      return dart.const(new core.Duration.new({milliseconds: 100}));
    }
  });
  dart.defineLazy(src__cupertino__button, {
    /*src__cupertino__button._kDisabledBackground*/get _kDisabledBackground() {
      return dart.const(new ui$.Color.new(4289309097));
    },
    /*src__cupertino__button._kDisabledForeground*/get _kDisabledForeground() {
      return dart.const(new ui$.Color.new(4291085508));
    },
    /*src__cupertino__button._kButtonTextStyle*/get _kButtonTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", inherit: false, fontSize: 17.5, letterSpacing: -0.24, fontWeight: ui$.FontWeight.w400, color: src__cupertino__colors.CupertinoColors.activeBlue, textBaseline: ui$.TextBaseline.alphabetic}));
    },
    /*src__cupertino__button._kDisabledButtonTextStyle*/get _kDisabledButtonTextStyle() {
      return src__cupertino__button._kButtonTextStyle.copyWith({color: src__cupertino__button._kDisabledForeground});
    },
    /*src__cupertino__button._kBackgroundButtonTextStyle*/get _kBackgroundButtonTextStyle() {
      return src__cupertino__button._kButtonTextStyle.copyWith({color: src__cupertino__colors.CupertinoColors.white});
    },
    /*src__cupertino__button._kButtonPadding*/get _kButtonPadding() {
      return dart.const(new src__painting__edge_insets.EdgeInsets.all(16.0));
    },
    /*src__cupertino__button._kBackgroundButtonPadding*/get _kBackgroundButtonPadding() {
      return dart.const(new src__painting__edge_insets.EdgeInsets.symmetric({vertical: 14.0, horizontal: 64.0}));
    }
  });
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
  src__cupertino__page_scaffold.CupertinoPageScaffold = class CupertinoPageScaffold extends src__widgets__framework.StatelessWidget {
    get navigationBar() {
      return this[navigationBar$];
    }
    set navigationBar(value) {
      super.navigationBar = value;
    }
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    get backgroundColor() {
      return this[backgroundColor$];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get resizeToAvoidBottomInset() {
      return this[resizeToAvoidBottomInset$];
    }
    set resizeToAvoidBottomInset(value) {
      super.resizeToAvoidBottomInset = value;
    }
    build(context) {
      let stacked = JSArrayOfWidget().of([]);
      let paddedContent = this.child;
      if (this.navigationBar != null) {
        let existingMediaQuery = src__widgets__media_query.MediaQuery.of(context);
        let topPadding = dart.notNull(this.navigationBar.preferredSize.height) + dart.notNull(existingMediaQuery.padding.top);
        let bottomPadding = dart.test(this.resizeToAvoidBottomInset) ? existingMediaQuery.viewInsets.bottom : 0.0;
        if (dart.test(this.navigationBar.fullObstruction)) {
          paddedContent = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: topPadding, bottom: bottomPadding}), child: this.child, $creationLocationd_0dea112b090073317d4: const$133 || (const$133 = dart.const(new src__widgets__widget_inspector._Location.new({line: 84, column: 25, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$132 || (const$132 = dart.constList([const$130 || (const$130 = dart.const(new src__widgets__widget_inspector._Location.new({line: 85, column: 11, name: "padding"}))), const$131 || (const$131 = dart.const(new src__widgets__widget_inspector._Location.new({line: 86, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        } else {
          paddedContent = new src__widgets__media_query.MediaQuery.new({data: existingMediaQuery.copyWith({padding: existingMediaQuery.padding.copyWith({top: topPadding})}), child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({bottom: bottomPadding}), child: this.child, $creationLocationd_0dea112b090073317d4: const$137 || (const$137 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$136 || (const$136 = dart.constList([const$134 || (const$134 = dart.const(new src__widgets__widget_inspector._Location.new({line: 96, column: 13, name: "padding"}))), const$135 || (const$135 = dart.const(new src__widgets__widget_inspector._Location.new({line: 97, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$141 || (const$141 = dart.const(new src__widgets__widget_inspector._Location.new({line: 89, column: 25, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$140 || (const$140 = dart.constList([const$138 || (const$138 = dart.const(new src__widgets__widget_inspector._Location.new({line: 90, column: 11, name: "data"}))), const$139 || (const$139 = dart.const(new src__widgets__widget_inspector._Location.new({line: 95, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        }
      }
      stacked[$add](paddedContent);
      if (this.navigationBar != null) {
        stacked[$add](new src__widgets__basic.Positioned.new({top: 0.0, left: 0.0, right: 0.0, child: this.navigationBar, $creationLocationd_0dea112b090073317d4: const$147 || (const$147 = dart.const(new src__widgets__widget_inspector._Location.new({line: 107, column: 19, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$146 || (const$146 = dart.constList([const$142 || (const$142 = dart.const(new src__widgets__widget_inspector._Location.new({line: 108, column: 9, name: "top"}))), const$143 || (const$143 = dart.const(new src__widgets__widget_inspector._Location.new({line: 109, column: 9, name: "left"}))), const$144 || (const$144 = dart.const(new src__widgets__widget_inspector._Location.new({line: 110, column: 9, name: "right"}))), const$145 || (const$145 = dart.const(new src__widgets__widget_inspector._Location.new({line: 111, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}));
      }
      return new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this.backgroundColor}), child: new src__widgets__basic.Stack.new({children: stacked, $creationLocationd_0dea112b090073317d4: const$150 || (const$150 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$149 || (const$149 = dart.constList([const$148 || (const$148 = dart.const(new src__widgets__widget_inspector._Location.new({line: 118, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$154 || (const$154 = dart.const(new src__widgets__widget_inspector._Location.new({line: 115, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", parameterLocations: const$153 || (const$153 = dart.constList([const$151 || (const$151 = dart.const(new src__widgets__widget_inspector._Location.new({line: 116, column: 7, name: "decoration"}))), const$152 || (const$152 = dart.const(new src__widgets__widget_inspector._Location.new({line: 117, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__page_scaffold.CupertinoPageScaffold.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigationBar = opts && 'navigationBar' in opts ? opts.navigationBar : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__colors.CupertinoColors.white;
    let resizeToAvoidBottomInset = opts && 'resizeToAvoidBottomInset' in opts ? opts.resizeToAvoidBottomInset : true;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navigationBar$] = navigationBar;
    this[backgroundColor$] = backgroundColor;
    this[resizeToAvoidBottomInset$] = resizeToAvoidBottomInset;
    this[child$2] = child;
    if (!(child != null)) dart.assertFailed();
    if (!(resizeToAvoidBottomInset != null)) dart.assertFailed();
    src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__page_scaffold.CupertinoPageScaffold.prototype;
  dart.addTypeTests(src__cupertino__page_scaffold.CupertinoPageScaffold);
  const navigationBar$ = Symbol("CupertinoPageScaffold.navigationBar");
  const child$2 = Symbol("CupertinoPageScaffold.child");
  const backgroundColor$ = Symbol("CupertinoPageScaffold.backgroundColor");
  const resizeToAvoidBottomInset$ = Symbol("CupertinoPageScaffold.resizeToAvoidBottomInset");
  dart.setMethodSignature(src__cupertino__page_scaffold.CupertinoPageScaffold, () => ({
    __proto__: dart.getMethods(src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__page_scaffold.CupertinoPageScaffold, () => ({
    __proto__: dart.getFields(src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__),
    navigationBar: dart.finalFieldType(src__cupertino__page_scaffold.ObstructingPreferredSizeWidget),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    resizeToAvoidBottomInset: dart.finalFieldType(core.bool)
  }));
  src__cupertino__page_scaffold.ObstructingPreferredSizeWidget = class ObstructingPreferredSizeWidget extends src__widgets__preferred_size.PreferredSizeWidget {};
  (src__cupertino__page_scaffold.ObstructingPreferredSizeWidget.new = function() {
    ;
  }).prototype = src__cupertino__page_scaffold.ObstructingPreferredSizeWidget.prototype;
  dart.addTypeTests(src__cupertino__page_scaffold.ObstructingPreferredSizeWidget);
  src__cupertino__nav_bar._HeroTag = class _HeroTag extends core.Object {
    toString() {
      return "Default Hero tag for Cupertino navigation bars with navigator " + dart.str(this.navigator);
    }
    _equals(other) {
      if (other == null) return false;
      if (this === other) {
        return true;
      }
      if (!dart.equals(dart.runtimeType(other), this[$runtimeType])) {
        return false;
      }
      let otherTag = src__cupertino__nav_bar._HeroTag._check(other);
      return dart.equals(this.navigator, otherTag.navigator);
    }
    get hashCode() {
      return core.identityHashCode(this.navigator);
    }
  };
  (src__cupertino__nav_bar._HeroTag.new = function(navigator) {
    this.navigator = navigator;
    ;
  }).prototype = src__cupertino__nav_bar._HeroTag.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._HeroTag);
  dart.setMethodSignature(src__cupertino__nav_bar._HeroTag, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._HeroTag.__proto__),
    _equals: dart.fnType(core.bool, [core.Object]),
    [$_equals]: dart.fnType(core.bool, [core.Object])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._HeroTag, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._HeroTag.__proto__),
    navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState)
  }));
  dart.defineExtensionMethods(src__cupertino__nav_bar._HeroTag, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__cupertino__nav_bar._HeroTag, ['hashCode']);
  let const$155;
  src__cupertino__nav_bar.CupertinoNavigationBar = class CupertinoNavigationBar extends src__widgets__framework.StatefulWidget {
    get leading() {
      return this[leading$];
    }
    set leading(value) {
      super.leading = value;
    }
    get automaticallyImplyLeading() {
      return this[automaticallyImplyLeading$];
    }
    set automaticallyImplyLeading(value) {
      super.automaticallyImplyLeading = value;
    }
    get automaticallyImplyMiddle() {
      return this[automaticallyImplyMiddle$];
    }
    set automaticallyImplyMiddle(value) {
      super.automaticallyImplyMiddle = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    get middle() {
      return this[middle$];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get backgroundColor() {
      return this[backgroundColor$0];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$0];
    }
    set padding(value) {
      super.padding = value;
    }
    get border() {
      return this[border$];
    }
    set border(value) {
      super.border = value;
    }
    get actionsForegroundColor() {
      return this[actionsForegroundColor$];
    }
    set actionsForegroundColor(value) {
      super.actionsForegroundColor = value;
    }
    get transitionBetweenRoutes() {
      return this[transitionBetweenRoutes$];
    }
    set transitionBetweenRoutes(value) {
      super.transitionBetweenRoutes = value;
    }
    get heroTag() {
      return this[heroTag$];
    }
    set heroTag(value) {
      super.heroTag = value;
    }
    get fullObstruction() {
      return this.backgroundColor.alpha === 255;
    }
    get preferredSize() {
      return const$155 || (const$155 = dart.const(new ui$.Size.fromHeight(src__cupertino__nav_bar._kNavBarPersistentHeight)));
    }
    createState() {
      return new src__cupertino__nav_bar._CupertinoNavigationBarState.new();
    }
  };
  (src__cupertino__nav_bar.CupertinoNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : true;
    let automaticallyImplyMiddle = opts && 'automaticallyImplyMiddle' in opts ? opts.automaticallyImplyMiddle : true;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let border = opts && 'border' in opts ? opts.border : src__cupertino__nav_bar._kDefaultNavBarBorder;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__nav_bar._kDefaultNavBarBackgroundColor;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : src__cupertino__colors.CupertinoColors.activeBlue;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : src__cupertino__nav_bar._defaultHeroTag;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[leading$] = leading;
    this[automaticallyImplyLeading$] = automaticallyImplyLeading;
    this[automaticallyImplyMiddle$] = automaticallyImplyMiddle;
    this[previousPageTitle$] = previousPageTitle;
    this[middle$] = middle;
    this[trailing$] = trailing;
    this[border$] = border;
    this[backgroundColor$0] = backgroundColor;
    this[padding$0] = padding;
    this[actionsForegroundColor$] = actionsForegroundColor;
    this[transitionBetweenRoutes$] = transitionBetweenRoutes;
    this[heroTag$] = heroTag;
    if (!(automaticallyImplyLeading != null)) dart.assertFailed();
    if (!(automaticallyImplyMiddle != null)) dart.assertFailed();
    if (!(transitionBetweenRoutes != null)) dart.assertFailed();
    if (!(heroTag != null)) dart.assertFailed("heroTag cannot be null. Use transitionBetweenRoutes = false to " + "disable Hero transition on this navigation bar.");
    if (!(!dart.test(transitionBetweenRoutes) || core.identical(heroTag, src__cupertino__nav_bar._defaultHeroTag))) dart.assertFailed("Cannot specify a heroTag override if this navigation bar does not " + "transition due to transitionBetweenRoutes = false.");
    src__cupertino__nav_bar.CupertinoNavigationBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoNavigationBar);
  const leading$ = Symbol("CupertinoNavigationBar.leading");
  const automaticallyImplyLeading$ = Symbol("CupertinoNavigationBar.automaticallyImplyLeading");
  const automaticallyImplyMiddle$ = Symbol("CupertinoNavigationBar.automaticallyImplyMiddle");
  const previousPageTitle$ = Symbol("CupertinoNavigationBar.previousPageTitle");
  const middle$ = Symbol("CupertinoNavigationBar.middle");
  const trailing$ = Symbol("CupertinoNavigationBar.trailing");
  const backgroundColor$0 = Symbol("CupertinoNavigationBar.backgroundColor");
  const padding$0 = Symbol("CupertinoNavigationBar.padding");
  const border$ = Symbol("CupertinoNavigationBar.border");
  const actionsForegroundColor$ = Symbol("CupertinoNavigationBar.actionsForegroundColor");
  const transitionBetweenRoutes$ = Symbol("CupertinoNavigationBar.transitionBetweenRoutes");
  const heroTag$ = Symbol("CupertinoNavigationBar.heroTag");
  src__cupertino__nav_bar.CupertinoNavigationBar[dart.implements] = () => [src__cupertino__page_scaffold.ObstructingPreferredSizeWidget];
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    createState: dart.fnType(src__cupertino__nav_bar._CupertinoNavigationBarState, [])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    fullObstruction: core.bool,
    preferredSize: ui$.Size
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoNavigationBar.__proto__),
    leading: dart.finalFieldType(src__widgets__framework.Widget),
    automaticallyImplyLeading: dart.finalFieldType(core.bool),
    automaticallyImplyMiddle: dart.finalFieldType(core.bool),
    previousPageTitle: dart.finalFieldType(core.String),
    middle: dart.finalFieldType(src__widgets__framework.Widget),
    trailing: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    border: dart.finalFieldType(src__painting__box_border.Border),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object)
  }));
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
  src__cupertino__nav_bar._CupertinoNavigationBarState = class _CupertinoNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyMiddle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, userLargeTitle: null, large: false});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.widget.border, backgroundColor: this.widget.backgroundColor, child: new src__cupertino__nav_bar._PersistentNavigationBar.new({components: components, padding: this.widget.padding, $creationLocationd_0dea112b090073317d4: const$159 || (const$159 = dart.const(new src__widgets__widget_inspector._Location.new({line: 414, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$158 || (const$158 = dart.constList([const$156 || (const$156 = dart.const(new src__widgets__widget_inspector._Location.new({line: 415, column: 9, name: "components"}))), const$157 || (const$157 = dart.const(new src__widgets__widget_inspector._Location.new({line: 416, column: 9, name: "padding"})))], src__widgets__widget_inspector._Location))})))})});
      if (!dart.test(this.widget.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.widget.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.widget.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.widget.backgroundColor, actionsForegroundColor: this.widget.actionsForegroundColor, border: this.widget.border, hasUserMiddle: this.widget.middle != null, largeExpanded: false, child: navBar, $creationLocationd_0dea112b090073317d4: const$168 || (const$168 = dart.const(new src__widgets__widget_inspector._Location.new({line: 432, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$167 || (const$167 = dart.constList([const$160 || (const$160 = dart.const(new src__widgets__widget_inspector._Location.new({line: 433, column: 9, name: "componentsKeys"}))), const$161 || (const$161 = dart.const(new src__widgets__widget_inspector._Location.new({line: 434, column: 9, name: "backgroundColor"}))), const$162 || (const$162 = dart.const(new src__widgets__widget_inspector._Location.new({line: 435, column: 9, name: "actionsForegroundColor"}))), const$163 || (const$163 = dart.const(new src__widgets__widget_inspector._Location.new({line: 436, column: 9, name: "border"}))), const$164 || (const$164 = dart.const(new src__widgets__widget_inspector._Location.new({line: 437, column: 9, name: "hasUserMiddle"}))), const$165 || (const$165 = dart.const(new src__widgets__widget_inspector._Location.new({line: 438, column: 9, name: "largeExpanded"}))), const$166 || (const$166 = dart.const(new src__widgets__widget_inspector._Location.new({line: 439, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$176 || (const$176 = dart.const(new src__widgets__widget_inspector._Location.new({line: 424, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$175 || (const$175 = dart.constList([const$169 || (const$169 = dart.const(new src__widgets__widget_inspector._Location.new({line: 425, column: 7, name: "tag"}))), const$170 || (const$170 = dart.const(new src__widgets__widget_inspector._Location.new({line: 428, column: 7, name: "createRectTween"}))), const$171 || (const$171 = dart.const(new src__widgets__widget_inspector._Location.new({line: 429, column: 7, name: "placeholderBuilder"}))), const$172 || (const$172 = dart.const(new src__widgets__widget_inspector._Location.new({line: 430, column: 7, name: "flightShuttleBuilder"}))), const$173 || (const$173 = dart.const(new src__widgets__widget_inspector._Location.new({line: 431, column: 7, name: "transitionOnUserGestures"}))), const$174 || (const$174 = dart.const(new src__widgets__widget_inspector._Location.new({line: 432, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._CupertinoNavigationBarState.new = function() {
    this.keys = null;
    src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__nav_bar._CupertinoNavigationBarState.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._CupertinoNavigationBarState);
  dart.setMethodSignature(src__cupertino__nav_bar._CupertinoNavigationBarState, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._CupertinoNavigationBarState, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._CupertinoNavigationBarState.__proto__),
    keys: dart.fieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys)
  }));
  src__cupertino__nav_bar.CupertinoSliverNavigationBar = class CupertinoSliverNavigationBar extends src__widgets__framework.StatefulWidget {
    get largeTitle() {
      return this[largeTitle$];
    }
    set largeTitle(value) {
      super.largeTitle = value;
    }
    get leading() {
      return this[leading$0];
    }
    set leading(value) {
      super.leading = value;
    }
    get automaticallyImplyLeading() {
      return this[automaticallyImplyLeading$0];
    }
    set automaticallyImplyLeading(value) {
      super.automaticallyImplyLeading = value;
    }
    get automaticallyImplyTitle() {
      return this[automaticallyImplyTitle$];
    }
    set automaticallyImplyTitle(value) {
      super.automaticallyImplyTitle = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$0];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    get middle() {
      return this[middle$0];
    }
    set middle(value) {
      super.middle = value;
    }
    get trailing() {
      return this[trailing$0];
    }
    set trailing(value) {
      super.trailing = value;
    }
    get backgroundColor() {
      return this[backgroundColor$1];
    }
    set backgroundColor(value) {
      super.backgroundColor = value;
    }
    get padding() {
      return this[padding$1];
    }
    set padding(value) {
      super.padding = value;
    }
    get border() {
      return this[border$0];
    }
    set border(value) {
      super.border = value;
    }
    get actionsForegroundColor() {
      return this[actionsForegroundColor$0];
    }
    set actionsForegroundColor(value) {
      super.actionsForegroundColor = value;
    }
    get transitionBetweenRoutes() {
      return this[transitionBetweenRoutes$0];
    }
    set transitionBetweenRoutes(value) {
      super.transitionBetweenRoutes = value;
    }
    get heroTag() {
      return this[heroTag$0];
    }
    set heroTag(value) {
      super.heroTag = value;
    }
    get opaque() {
      return this.backgroundColor.alpha === 255;
    }
    createState() {
      return new src__cupertino__nav_bar._CupertinoSliverNavigationBarState.new();
    }
  };
  (src__cupertino__nav_bar.CupertinoSliverNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let largeTitle = opts && 'largeTitle' in opts ? opts.largeTitle : null;
    let leading = opts && 'leading' in opts ? opts.leading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : true;
    let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : true;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let middle = opts && 'middle' in opts ? opts.middle : null;
    let trailing = opts && 'trailing' in opts ? opts.trailing : null;
    let border = opts && 'border' in opts ? opts.border : src__cupertino__nav_bar._kDefaultNavBarBorder;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : src__cupertino__nav_bar._kDefaultNavBarBackgroundColor;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : src__cupertino__colors.CupertinoColors.activeBlue;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : src__cupertino__nav_bar._defaultHeroTag;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[largeTitle$] = largeTitle;
    this[leading$0] = leading;
    this[automaticallyImplyLeading$0] = automaticallyImplyLeading;
    this[automaticallyImplyTitle$] = automaticallyImplyTitle;
    this[previousPageTitle$0] = previousPageTitle;
    this[middle$0] = middle;
    this[trailing$0] = trailing;
    this[border$0] = border;
    this[backgroundColor$1] = backgroundColor;
    this[padding$1] = padding;
    this[actionsForegroundColor$0] = actionsForegroundColor;
    this[transitionBetweenRoutes$0] = transitionBetweenRoutes;
    this[heroTag$0] = heroTag;
    if (!(automaticallyImplyLeading != null)) dart.assertFailed();
    if (!(automaticallyImplyTitle != null)) dart.assertFailed();
    if (!(dart.equals(automaticallyImplyTitle, true) || largeTitle != null)) dart.assertFailed("No largeTitle has been provided but automaticallyImplyTitle is also " + "false. Either provide a largeTitle or set automaticallyImplyTitle to " + "true.");
    src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoSliverNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoSliverNavigationBar);
  const largeTitle$ = Symbol("CupertinoSliverNavigationBar.largeTitle");
  const leading$0 = Symbol("CupertinoSliverNavigationBar.leading");
  const automaticallyImplyLeading$0 = Symbol("CupertinoSliverNavigationBar.automaticallyImplyLeading");
  const automaticallyImplyTitle$ = Symbol("CupertinoSliverNavigationBar.automaticallyImplyTitle");
  const previousPageTitle$0 = Symbol("CupertinoSliverNavigationBar.previousPageTitle");
  const middle$0 = Symbol("CupertinoSliverNavigationBar.middle");
  const trailing$0 = Symbol("CupertinoSliverNavigationBar.trailing");
  const backgroundColor$1 = Symbol("CupertinoSliverNavigationBar.backgroundColor");
  const padding$1 = Symbol("CupertinoSliverNavigationBar.padding");
  const border$0 = Symbol("CupertinoSliverNavigationBar.border");
  const actionsForegroundColor$0 = Symbol("CupertinoSliverNavigationBar.actionsForegroundColor");
  const transitionBetweenRoutes$0 = Symbol("CupertinoSliverNavigationBar.transitionBetweenRoutes");
  const heroTag$0 = Symbol("CupertinoSliverNavigationBar.heroTag");
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    createState: dart.fnType(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, [])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    opaque: core.bool
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoSliverNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoSliverNavigationBar.__proto__),
    largeTitle: dart.finalFieldType(src__widgets__framework.Widget),
    leading: dart.finalFieldType(src__widgets__framework.Widget),
    automaticallyImplyLeading: dart.finalFieldType(core.bool),
    automaticallyImplyTitle: dart.finalFieldType(core.bool),
    previousPageTitle: dart.finalFieldType(core.String),
    middle: dart.finalFieldType(src__widgets__framework.Widget),
    trailing: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    border: dart.finalFieldType(src__painting__box_border.Border),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object)
  }));
  let const$177;
  let const$178;
  let const$179;
  let const$180;
  src__cupertino__nav_bar._CupertinoSliverNavigationBarState = class _CupertinoSliverNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoSliverNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyTitle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, userLargeTitle: this.widget.largeTitle, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, large: true});
      return new src__widgets__sliver_persistent_header.SliverPersistentHeader.new({pinned: true, delegate: new src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.new({keys: this.keys, components: components, userMiddle: this.widget.middle, backgroundColor: this.widget.backgroundColor, border: this.widget.border, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, transitionBetweenRoutes: this.widget.transitionBetweenRoutes, heroTag: this.widget.heroTag, persistentHeight: dart.notNull(src__cupertino__nav_bar._kNavBarPersistentHeight) + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), alwaysShowMiddle: this.widget.middle != null}), $creationLocationd_0dea112b090073317d4: const$180 || (const$180 = dart.const(new src__widgets__widget_inspector._Location.new({line: 636, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$179 || (const$179 = dart.constList([const$177 || (const$177 = dart.const(new src__widgets__widget_inspector._Location.new({line: 637, column: 7, name: "pinned"}))), const$178 || (const$178 = dart.const(new src__widgets__widget_inspector._Location.new({line: 638, column: 7, name: "delegate"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._CupertinoSliverNavigationBarState.new = function() {
    this.keys = null;
    src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__nav_bar._CupertinoSliverNavigationBarState.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._CupertinoSliverNavigationBarState);
  dart.setMethodSignature(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__),
    keys: dart.fieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys)
  }));
  let const$181;
  let const$182;
  let const$183;
  let const$184;
  let const$185;
  let const$186;
  let const$187;
  let const$188;
  let const$189;
  let const$190;
  let const$191;
  let const$192;
  let const$193;
  let const$194;
  let const$195;
  let const$196;
  let const$197;
  let const$198;
  let const$199;
  let const$200;
  let const$201;
  let const$202;
  let const$203;
  let const$204;
  let const$205;
  let const$206;
  let const$207;
  let const$208;
  let const$209;
  let const$210;
  let const$211;
  let const$212;
  let const$213;
  let const$214;
  let const$215;
  let const$216;
  let const$217;
  let const$218;
  let const$219;
  let const$220;
  let const$221;
  let const$222;
  let const$223;
  let const$224;
  let const$225;
  let const$226;
  let const$227;
  let const$228;
  let const$229;
  let const$230;
  let const$231;
  let const$232;
  let const$233;
  let const$234;
  let const$235;
  let const$236;
  let const$237;
  let const$238;
  let const$239;
  let const$240;
  let const$241;
  let const$242;
  let const$243;
  let const$244;
  let const$245;
  let const$246;
  let const$247;
  let const$248;
  let const$249;
  let const$250;
  let const$251;
  let const$252;
  let const$253;
  const SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$ = class SliverPersistentHeaderDelegate_DiagnosticableTreeMixin extends src__widgets__sliver_persistent_header.SliverPersistentHeaderDelegate {};
  (SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.new = function() {
    SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.__proto__.new.call(this);
  }).prototype = SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$.prototype;
  dart.applyMixin(SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$, src__foundation__diagnostics.DiagnosticableTreeMixin);
  src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate = class _LargeTitleNavigationBarSliverDelegate extends SliverPersistentHeaderDelegate_DiagnosticableTreeMixin$ {
    get minExtent() {
      return this.persistentHeight;
    }
    get maxExtent() {
      return dart.notNull(this.persistentHeight) + dart.notNull(src__cupertino__nav_bar._kNavBarLargeTitleHeightExtension);
    }
    build(context, shrinkOffset, overlapsContent) {
      let showLargeTitle = dart.notNull(shrinkOffset) < dart.notNull(this.maxExtent) - dart.notNull(this.minExtent) - dart.notNull(src__cupertino__nav_bar._kNavBarShowLargeTitleThreshold);
      let persistentNavigationBar = new src__cupertino__nav_bar._PersistentNavigationBar.new({components: this.components, padding: this.padding, middleVisible: dart.test(this.alwaysShowMiddle) ? null : !showLargeTitle, $creationLocationd_0dea112b090073317d4: const$185 || (const$185 = dart.const(new src__widgets__widget_inspector._Location.new({line: 699, column: 9, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$184 || (const$184 = dart.constList([const$181 || (const$181 = dart.const(new src__widgets__widget_inspector._Location.new({line: 700, column: 7, name: "components"}))), const$182 || (const$182 = dart.const(new src__widgets__widget_inspector._Location.new({line: 701, column: 7, name: "padding"}))), const$183 || (const$183 = dart.const(new src__widgets__widget_inspector._Location.new({line: 704, column: 7, name: "middleVisible"})))], src__widgets__widget_inspector._Location))})))});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.border, backgroundColor: this.backgroundColor, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__basic.Positioned.new({top: this.persistentHeight, left: 0.0, right: 0.0, bottom: 0.0, child: new src__widgets__basic.ClipRect.new({child: new src__widgets__basic.OverflowBox.new({minHeight: 0.0, maxHeight: core.double.infinity, alignment: src__painting__alignment.AlignmentDirectional.bottomStart, child: new src__widgets__basic.Padding.new({padding: const$186 || (const$186 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: src__cupertino__nav_bar._kNavBarEdgePadding, bottom: 8.0}))), child: new src__widgets__safe_area.SafeArea.new({top: false, bottom: false, child: new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: showLargeTitle ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: new src__widgets__basic.Semantics.new({header: true, child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: this.components.largeTitle, $creationLocationd_0dea112b090073317d4: const$192 || (const$192 = dart.const(new src__widgets__widget_inspector._Location.new({line: 739, column: 32, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$191 || (const$191 = dart.constList([const$187 || (const$187 = dart.const(new src__widgets__widget_inspector._Location.new({line: 740, column: 27, name: "style"}))), const$188 || (const$188 = dart.const(new src__widgets__widget_inspector._Location.new({line: 741, column: 27, name: "maxLines"}))), const$189 || (const$189 = dart.const(new src__widgets__widget_inspector._Location.new({line: 742, column: 27, name: "overflow"}))), const$190 || (const$190 = dart.const(new src__widgets__widget_inspector._Location.new({line: 743, column: 27, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$196 || (const$196 = dart.const(new src__widgets__widget_inspector._Location.new({line: 737, column: 30, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$195 || (const$195 = dart.constList([const$193 || (const$193 = dart.const(new src__widgets__widget_inspector._Location.new({line: 738, column: 25, name: "header"}))), const$194 || (const$194 = dart.const(new src__widgets__widget_inspector._Location.new({line: 739, column: 25, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$201 || (const$201 = dart.const(new src__widgets__widget_inspector._Location.new({line: 734, column: 28, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$200 || (const$200 = dart.constList([const$197 || (const$197 = dart.const(new src__widgets__widget_inspector._Location.new({line: 735, column: 23, name: "opacity"}))), const$198 || (const$198 = dart.const(new src__widgets__widget_inspector._Location.new({line: 736, column: 23, name: "duration"}))), const$199 || (const$199 = dart.const(new src__widgets__widget_inspector._Location.new({line: 737, column: 23, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$206 || (const$206 = dart.const(new src__widgets__widget_inspector._Location.new({line: 731, column: 26, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$205 || (const$205 = dart.constList([const$202 || (const$202 = dart.const(new src__widgets__widget_inspector._Location.new({line: 732, column: 21, name: "top"}))), const$203 || (const$203 = dart.const(new src__widgets__widget_inspector._Location.new({line: 733, column: 21, name: "bottom"}))), const$204 || (const$204 = dart.const(new src__widgets__widget_inspector._Location.new({line: 734, column: 21, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$210 || (const$210 = dart.const(new src__widgets__widget_inspector._Location.new({line: 726, column: 24, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$209 || (const$209 = dart.constList([const$207 || (const$207 = dart.const(new src__widgets__widget_inspector._Location.new({line: 727, column: 19, name: "padding"}))), const$208 || (const$208 = dart.const(new src__widgets__widget_inspector._Location.new({line: 731, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$216 || (const$216 = dart.const(new src__widgets__widget_inspector._Location.new({line: 722, column: 22, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$215 || (const$215 = dart.constList([const$211 || (const$211 = dart.const(new src__widgets__widget_inspector._Location.new({line: 723, column: 17, name: "minHeight"}))), const$212 || (const$212 = dart.const(new src__widgets__widget_inspector._Location.new({line: 724, column: 17, name: "maxHeight"}))), const$213 || (const$213 = dart.const(new src__widgets__widget_inspector._Location.new({line: 725, column: 17, name: "alignment"}))), const$214 || (const$214 = dart.const(new src__widgets__widget_inspector._Location.new({line: 726, column: 17, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$219 || (const$219 = dart.const(new src__widgets__widget_inspector._Location.new({line: 718, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$218 || (const$218 = dart.constList([const$217 || (const$217 = dart.const(new src__widgets__widget_inspector._Location.new({line: 722, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$226 || (const$226 = dart.const(new src__widgets__widget_inspector._Location.new({line: 713, column: 11, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$225 || (const$225 = dart.constList([const$220 || (const$220 = dart.const(new src__widgets__widget_inspector._Location.new({line: 714, column: 13, name: "top"}))), const$221 || (const$221 = dart.const(new src__widgets__widget_inspector._Location.new({line: 715, column: 13, name: "left"}))), const$222 || (const$222 = dart.const(new src__widgets__widget_inspector._Location.new({line: 716, column: 13, name: "right"}))), const$223 || (const$223 = dart.const(new src__widgets__widget_inspector._Location.new({line: 717, column: 13, name: "bottom"}))), const$224 || (const$224 = dart.const(new src__widgets__widget_inspector._Location.new({line: 718, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), new src__widgets__basic.Positioned.new({left: 0.0, right: 0.0, top: 0.0, child: persistentNavigationBar, $creationLocationd_0dea112b090073317d4: const$232 || (const$232 = dart.const(new src__widgets__widget_inspector._Location.new({line: 752, column: 11, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$231 || (const$231 = dart.constList([const$227 || (const$227 = dart.const(new src__widgets__widget_inspector._Location.new({line: 753, column: 13, name: "left"}))), const$228 || (const$228 = dart.const(new src__widgets__widget_inspector._Location.new({line: 754, column: 13, name: "right"}))), const$229 || (const$229 = dart.const(new src__widgets__widget_inspector._Location.new({line: 755, column: 13, name: "top"}))), const$230 || (const$230 = dart.const(new src__widgets__widget_inspector._Location.new({line: 756, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$236 || (const$236 = dart.const(new src__widgets__widget_inspector._Location.new({line: 710, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$235 || (const$235 = dart.constList([const$233 || (const$233 = dart.const(new src__widgets__widget_inspector._Location.new({line: 711, column: 9, name: "fit"}))), const$234 || (const$234 = dart.const(new src__widgets__widget_inspector._Location.new({line: 712, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))})});
      if (!dart.test(this.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.backgroundColor, actionsForegroundColor: this.actionsForegroundColor, border: this.border, hasUserMiddle: this.userMiddle != null, largeExpanded: showLargeTitle, child: navBar, $creationLocationd_0dea112b090073317d4: const$245 || (const$245 = dart.const(new src__widgets__widget_inspector._Location.new({line: 777, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$244 || (const$244 = dart.constList([const$237 || (const$237 = dart.const(new src__widgets__widget_inspector._Location.new({line: 778, column: 9, name: "componentsKeys"}))), const$238 || (const$238 = dart.const(new src__widgets__widget_inspector._Location.new({line: 779, column: 9, name: "backgroundColor"}))), const$239 || (const$239 = dart.const(new src__widgets__widget_inspector._Location.new({line: 780, column: 9, name: "actionsForegroundColor"}))), const$240 || (const$240 = dart.const(new src__widgets__widget_inspector._Location.new({line: 781, column: 9, name: "border"}))), const$241 || (const$241 = dart.const(new src__widgets__widget_inspector._Location.new({line: 782, column: 9, name: "hasUserMiddle"}))), const$242 || (const$242 = dart.const(new src__widgets__widget_inspector._Location.new({line: 783, column: 9, name: "largeExpanded"}))), const$243 || (const$243 = dart.const(new src__widgets__widget_inspector._Location.new({line: 784, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$253 || (const$253 = dart.const(new src__widgets__widget_inspector._Location.new({line: 766, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$252 || (const$252 = dart.constList([const$246 || (const$246 = dart.const(new src__widgets__widget_inspector._Location.new({line: 767, column: 7, name: "tag"}))), const$247 || (const$247 = dart.const(new src__widgets__widget_inspector._Location.new({line: 770, column: 7, name: "createRectTween"}))), const$248 || (const$248 = dart.const(new src__widgets__widget_inspector._Location.new({line: 771, column: 7, name: "flightShuttleBuilder"}))), const$249 || (const$249 = dart.const(new src__widgets__widget_inspector._Location.new({line: 772, column: 7, name: "placeholderBuilder"}))), const$250 || (const$250 = dart.const(new src__widgets__widget_inspector._Location.new({line: 773, column: 7, name: "transitionOnUserGestures"}))), const$251 || (const$251 = dart.const(new src__widgets__widget_inspector._Location.new({line: 777, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    shouldRebuild(oldDelegate) {
      src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate._check(oldDelegate);
      return !dart.equals(this.components, oldDelegate.components) || !dart.equals(this.userMiddle, oldDelegate.userMiddle) || !dart.equals(this.backgroundColor, oldDelegate.backgroundColor) || !dart.equals(this.border, oldDelegate.border) || !dart.equals(this.padding, oldDelegate.padding) || !dart.equals(this.actionsForegroundColor, oldDelegate.actionsForegroundColor) || !dart.equals(this.transitionBetweenRoutes, oldDelegate.transitionBetweenRoutes) || this.persistentHeight != oldDelegate.persistentHeight || !dart.equals(this.alwaysShowMiddle, oldDelegate.alwaysShowMiddle) || !dart.equals(this.heroTag, oldDelegate.heroTag);
    }
  };
  (src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.new = function(opts) {
    let keys = opts && 'keys' in opts ? opts.keys : null;
    let components = opts && 'components' in opts ? opts.components : null;
    let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : null;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : null;
    let persistentHeight = opts && 'persistentHeight' in opts ? opts.persistentHeight : null;
    let alwaysShowMiddle = opts && 'alwaysShowMiddle' in opts ? opts.alwaysShowMiddle : null;
    this.keys = keys;
    this.components = components;
    this.userMiddle = userMiddle;
    this.backgroundColor = backgroundColor;
    this.border = border;
    this.padding = padding;
    this.actionsForegroundColor = actionsForegroundColor;
    this.transitionBetweenRoutes = transitionBetweenRoutes;
    this.heroTag = heroTag;
    this.persistentHeight = persistentHeight;
    this.alwaysShowMiddle = alwaysShowMiddle;
    if (!(persistentHeight != null)) dart.assertFailed();
    if (!(alwaysShowMiddle != null)) dart.assertFailed();
    if (!(transitionBetweenRoutes != null)) dart.assertFailed();
    src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate);
  dart.setMethodSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.double, core.bool]),
    shouldRebuild: dart.fnType(core.bool, [core.Object])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    minExtent: core.double,
    maxExtent: core.double
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.__proto__),
    keys: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    components: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponents),
    userMiddle: dart.finalFieldType(src__widgets__framework.Widget),
    backgroundColor: dart.finalFieldType(ui$.Color),
    border: dart.finalFieldType(src__painting__box_border.Border),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    transitionBetweenRoutes: dart.finalFieldType(core.bool),
    heroTag: dart.finalFieldType(core.Object),
    persistentHeight: dart.finalFieldType(core.double),
    alwaysShowMiddle: dart.finalFieldType(core.bool)
  }));
  let const$254;
  let const$255;
  let const$256;
  let const$257;
  let const$258;
  let const$259;
  let const$260;
  let const$261;
  let const$262;
  let const$263;
  let const$264;
  let const$265;
  let const$266;
  let const$267;
  let const$268;
  let const$269;
  let const$270;
  let const$271;
  let const$272;
  let const$273;
  let const$274;
  let const$275;
  let const$276;
  let const$277;
  let const$278;
  let const$279;
  let const$280;
  let const$281;
  let const$282;
  let const$283;
  let const$284;
  let const$285;
  let const$286;
  let const$287;
  let const$288;
  let const$289;
  let const$290;
  src__cupertino__nav_bar._PersistentNavigationBar = class _PersistentNavigationBar extends src__widgets__framework.StatelessWidget {
    build(context) {
      let middle = this.components.middle;
      if (middle != null) {
        middle = new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: new src__widgets__basic.Semantics.new({header: true, child: middle, $creationLocationd_0dea112b090073317d4: const$257 || (const$257 = dart.const(new src__widgets__widget_inspector._Location.new({line: 832, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$256 || (const$256 = dart.constList([const$254 || (const$254 = dart.const(new src__widgets__widget_inspector._Location.new({line: 832, column: 26, name: "header"}))), const$255 || (const$255 = dart.const(new src__widgets__widget_inspector._Location.new({line: 832, column: 40, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$261 || (const$261 = dart.const(new src__widgets__widget_inspector._Location.new({line: 830, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$260 || (const$260 = dart.constList([const$258 || (const$258 = dart.const(new src__widgets__widget_inspector._Location.new({line: 831, column: 9, name: "style"}))), const$259 || (const$259 = dart.const(new src__widgets__widget_inspector._Location.new({line: 832, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
        middle = this.middleVisible == null ? middle : new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: dart.test(this.middleVisible) ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: middle, $creationLocationd_0dea112b090073317d4: const$266 || (const$266 = dart.const(new src__widgets__widget_inspector._Location.new({line: 838, column: 13, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$265 || (const$265 = dart.constList([const$262 || (const$262 = dart.const(new src__widgets__widget_inspector._Location.new({line: 839, column: 15, name: "opacity"}))), const$263 || (const$263 = dart.const(new src__widgets__widget_inspector._Location.new({line: 840, column: 15, name: "duration"}))), const$264 || (const$264 = dart.const(new src__widgets__widget_inspector._Location.new({line: 841, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      let leading = this.components.leading;
      let backChevron = this.components.backChevron;
      let backLabel = this.components.backLabel;
      if (leading == null && backChevron != null && backLabel != null) {
        leading = new src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble(backChevron, backLabel, this.components.actionsForegroundColor, {$creationLocationd_0dea112b090073317d4: const$271 || (const$271 = dart.const(new src__widgets__widget_inspector._Location.new({line: 850, column: 50, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$270 || (const$270 = dart.constList([const$267 || (const$267 = dart.const(new src__widgets__widget_inspector._Location.new({line: 851, column: 9, name: "_backChevron"}))), const$268 || (const$268 = dart.const(new src__widgets__widget_inspector._Location.new({line: 852, column: 9, name: "_backLabel"}))), const$269 || (const$269 = dart.const(new src__widgets__widget_inspector._Location.new({line: 853, column: 20, name: "color"})))], src__widgets__widget_inspector._Location))})))});
      }
      let paddedToolbar = new src__widgets__navigation_toolbar.NavigationToolbar.new({leading: leading, middle: middle, trailing: this.components.trailing, centerMiddle: true, middleSpacing: 6.0, $creationLocationd_0dea112b090073317d4: const$278 || (const$278 = dart.const(new src__widgets__widget_inspector._Location.new({line: 857, column: 28, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$277 || (const$277 = dart.constList([const$272 || (const$272 = dart.const(new src__widgets__widget_inspector._Location.new({line: 858, column: 7, name: "leading"}))), const$273 || (const$273 = dart.const(new src__widgets__widget_inspector._Location.new({line: 859, column: 7, name: "middle"}))), const$274 || (const$274 = dart.const(new src__widgets__widget_inspector._Location.new({line: 860, column: 7, name: "trailing"}))), const$275 || (const$275 = dart.const(new src__widgets__widget_inspector._Location.new({line: 861, column: 7, name: "centerMiddle"}))), const$276 || (const$276 = dart.const(new src__widgets__widget_inspector._Location.new({line: 862, column: 7, name: "middleSpacing"})))], src__widgets__widget_inspector._Location))})))});
      if (this.padding != null) {
        paddedToolbar = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: this.padding.top, bottom: this.padding.bottom}), child: paddedToolbar, $creationLocationd_0dea112b090073317d4: const$282 || (const$282 = dart.const(new src__widgets__widget_inspector._Location.new({line: 866, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$281 || (const$281 = dart.constList([const$279 || (const$279 = dart.const(new src__widgets__widget_inspector._Location.new({line: 867, column: 9, name: "padding"}))), const$280 || (const$280 = dart.const(new src__widgets__widget_inspector._Location.new({line: 871, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return new src__widgets__basic.SizedBox.new({height: dart.notNull(src__cupertino__nav_bar._kNavBarPersistentHeight) + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), child: new src__widgets__safe_area.SafeArea.new({bottom: false, child: paddedToolbar, $creationLocationd_0dea112b090073317d4: const$286 || (const$286 = dart.const(new src__widgets__widget_inspector._Location.new({line: 877, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$285 || (const$285 = dart.constList([const$283 || (const$283 = dart.const(new src__widgets__widget_inspector._Location.new({line: 878, column: 9, name: "bottom"}))), const$284 || (const$284 = dart.const(new src__widgets__widget_inspector._Location.new({line: 879, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$290 || (const$290 = dart.const(new src__widgets__widget_inspector._Location.new({line: 875, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$289 || (const$289 = dart.constList([const$287 || (const$287 = dart.const(new src__widgets__widget_inspector._Location.new({line: 876, column: 7, name: "height"}))), const$288 || (const$288 = dart.const(new src__widgets__widget_inspector._Location.new({line: 877, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._PersistentNavigationBar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let components = opts && 'components' in opts ? opts.components : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let middleVisible = opts && 'middleVisible' in opts ? opts.middleVisible : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.components = components;
    this.padding = padding;
    this.middleVisible = middleVisible;
    src__cupertino__nav_bar._PersistentNavigationBar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._PersistentNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._PersistentNavigationBar);
  dart.setMethodSignature(src__cupertino__nav_bar._PersistentNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._PersistentNavigationBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._PersistentNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._PersistentNavigationBar.__proto__),
    components: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponents),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsDirectional),
    middleVisible: dart.finalFieldType(core.bool)
  }));
  src__cupertino__nav_bar._NavigationBarStaticComponentsKeys = class _NavigationBarStaticComponentsKeys extends core.Object {};
  (src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new = function() {
    this.navBarBoxKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Navigation bar render box"});
    this.leadingKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Leading"});
    this.backChevronKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Back chevron"});
    this.backLabelKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Back label"});
    this.middleKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Middle"});
    this.trailingKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Trailing"});
    this.largeTitleKey = GlobalKeyOfStateOfStatefulWidget().new({debugLabel: "Large title"});
    ;
  }).prototype = src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys);
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.__proto__),
    navBarBoxKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    leadingKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    backChevronKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    backLabelKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    middleKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    trailingKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))),
    largeTitleKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)))
  }));
  let const$291;
  let const$292;
  let const$293;
  let const$294;
  let const$295;
  let const$296;
  let const$297;
  let const$298;
  let const$299;
  let const$300;
  let const$301;
  let const$302;
  let const$303;
  let const$304;
  let const$305;
  let const$306;
  let const$307;
  let const$308;
  let const$309;
  let const$310;
  let const$311;
  let const$312;
  let const$313;
  let const$314;
  let const$315;
  let const$316;
  let const$317;
  let const$318;
  let const$319;
  let const$320;
  let const$321;
  let const$322;
  let const$323;
  let const$324;
  let const$325;
  let const$326;
  let const$327;
  let const$328;
  let const$329;
  let const$330;
  let const$331;
  let const$332;
  let const$333;
  let const$334;
  let const$335;
  let const$336;
  let const$337;
  let const$338;
  let const$339;
  let const$340;
  let const$341;
  let const$342;
  let const$343;
  let const$344;
  let const$345;
  let const$346;
  let const$347;
  let const$348;
  let const$349;
  src__cupertino__nav_bar._NavigationBarStaticComponents = class _NavigationBarStaticComponents extends core.Object {
    static _derivedTitle(opts) {
      let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
      let currentRoute = opts && 'currentRoute' in opts ? opts.currentRoute : null;
      if (dart.test(automaticallyImplyTitle) && src__cupertino__route.CupertinoPageRoute.is(currentRoute) && currentRoute.title != null) {
        return new src__widgets__text.Text.new(currentRoute.title, {$creationLocationd_0dea112b090073317d4: const$293 || (const$293 = dart.const(new src__widgets__widget_inspector._Location.new({line: 981, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$292 || (const$292 = dart.constList([const$291 || (const$291 = dart.const(new src__widgets__widget_inspector._Location.new({line: 981, column: 32, name: "data"})))], src__widgets__widget_inspector._Location))})))});
      }
      return null;
    }
    static createLeading(opts) {
      let t0, t0$;
      let leadingKey = opts && 'leadingKey' in opts ? opts.leadingKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
      let leadingContent = null;
      if (userLeading != null) {
        leadingContent = userLeading;
      } else if (dart.test(automaticallyImplyLeading) && src__widgets__pages.PageRoute.is(route) && dart.test(route.canPop) && dart.test(route.fullscreenDialog)) {
        leadingContent = new src__cupertino__button.CupertinoButton.new({child: const$297 || (const$297 = dart.const(new src__widgets__text.Text.new("Close", {$creationLocationd_0dea112b090073317d4: const$296 || (const$296 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1006, column: 22, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$295 || (const$295 = dart.constList([const$294 || (const$294 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1006, column: 27, name: "data"})))], src__widgets__widget_inspector._Location))})))}))), padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
            route.navigator.maybePop(core.Object);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$302 || (const$302 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1005, column: 24, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$301 || (const$301 = dart.constList([const$298 || (const$298 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1006, column: 9, name: "child"}))), const$299 || (const$299 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1007, column: 9, name: "padding"}))), const$300 || (const$300 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1008, column: 9, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))});
      }
      if (leadingContent == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: leadingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({start: (t0$ = (t0 = padding, t0 == null ? null : t0.start), t0$ == null ? src__cupertino__nav_bar._kNavBarEdgePadding : t0$)}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: leadingContent}), $creationLocationd_0dea112b090073317d4: const$306 || (const$306 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1024, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$305 || (const$305 = dart.constList([const$303 || (const$303 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1025, column: 11, name: "style"}))), const$304 || (const$304 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1026, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$310 || (const$310 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1020, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$309 || (const$309 = dart.constList([const$307 || (const$307 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1021, column: 9, name: "padding"}))), const$308 || (const$308 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1024, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$314 || (const$314 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1018, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$313 || (const$313 = dart.constList([const$311 || (const$311 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1019, column: 7, name: "key"}))), const$312 || (const$312 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1020, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    static createBackChevron(opts) {
      let backChevronKey = opts && 'backChevronKey' in opts ? opts.backChevronKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      if (userLeading != null || !dart.test(automaticallyImplyLeading) || route == null || !dart.test(route.canPop) || src__widgets__pages.PageRoute.is(route) && dart.test(route.fullscreenDialog)) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: backChevronKey, child: const$317 || (const$317 = dart.const(new src__cupertino__nav_bar._BackChevron.new({$creationLocationd_0dea112b090073317d4: const$316 || (const$316 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1053, column: 59, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$315 || (const$315 = dart.constList([], src__widgets__widget_inspector._Location))})))}))), $creationLocationd_0dea112b090073317d4: const$321 || (const$321 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1053, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$320 || (const$320 = dart.constList([const$318 || (const$318 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1053, column: 25, name: "key"}))), const$319 || (const$319 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1053, column: 46, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    static createBackLabel(opts) {
      let backLabelKey = opts && 'backLabelKey' in opts ? opts.backLabelKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
      if (userLeading != null || !dart.test(automaticallyImplyLeading) || route == null || !dart.test(route.canPop) || src__widgets__pages.PageRoute.is(route) && dart.test(route.fullscreenDialog)) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: backLabelKey, child: new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: previousPageTitle, route: route, $creationLocationd_0dea112b090073317d4: const$325 || (const$325 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1076, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$324 || (const$324 = dart.constList([const$322 || (const$322 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1077, column: 9, name: "specifiedPreviousTitle"}))), const$323 || (const$323 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1078, column: 9, name: "route"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$329 || (const$329 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1074, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$328 || (const$328 = dart.constList([const$326 || (const$326 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1075, column: 7, name: "key"}))), const$327 || (const$327 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1076, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    static createMiddle(opts) {
      let middleKey = opts && 'middleKey' in opts ? opts.middleKey : null;
      let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
      let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
      let large = opts && 'large' in opts ? opts.large : null;
      let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let middleContent = userMiddle;
      if (dart.test(large)) {
        middleContent == null ? middleContent = userLargeTitle : null;
      }
      middleContent == null ? middleContent = src__cupertino__nav_bar._NavigationBarStaticComponents._derivedTitle({automaticallyImplyTitle: automaticallyImplyTitle, currentRoute: route}) : null;
      if (middleContent == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: middleKey, child: middleContent, $creationLocationd_0dea112b090073317d4: const$333 || (const$333 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1109, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$332 || (const$332 = dart.constList([const$330 || (const$330 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1110, column: 7, name: "key"}))), const$331 || (const$331 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1111, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    static createTrailing(opts) {
      let t0, t0$;
      let trailingKey = opts && 'trailingKey' in opts ? opts.trailingKey : null;
      let userTrailing = opts && 'userTrailing' in opts ? opts.userTrailing : null;
      let padding = opts && 'padding' in opts ? opts.padding : null;
      let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
      if (userTrailing == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: trailingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({end: (t0$ = (t0 = padding, t0 == null ? null : t0.end), t0$ == null ? src__cupertino__nav_bar._kNavBarEdgePadding : t0$)}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: userTrailing}), $creationLocationd_0dea112b090073317d4: const$337 || (const$337 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1132, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$336 || (const$336 = dart.constList([const$334 || (const$334 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1133, column: 11, name: "style"}))), const$335 || (const$335 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1134, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$341 || (const$341 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1128, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$340 || (const$340 = dart.constList([const$338 || (const$338 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1129, column: 9, name: "padding"}))), const$339 || (const$339 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1132, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$345 || (const$345 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1126, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$344 || (const$344 = dart.constList([const$342 || (const$342 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1127, column: 7, name: "key"}))), const$343 || (const$343 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1128, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    static createLargeTitle(opts) {
      let t0;
      let largeTitleKey = opts && 'largeTitleKey' in opts ? opts.largeTitleKey : null;
      let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
      let large = opts && 'large' in opts ? opts.large : null;
      let automaticImplyTitle = opts && 'automaticImplyTitle' in opts ? opts.automaticImplyTitle : null;
      let route = opts && 'route' in opts ? opts.route : null;
      if (!dart.test(large)) {
        return null;
      }
      let largeTitleContent = (t0 = userLargeTitle, t0 == null ? src__cupertino__nav_bar._NavigationBarStaticComponents._derivedTitle({automaticallyImplyTitle: automaticImplyTitle, currentRoute: route}) : t0);
      if (!(largeTitleContent != null)) dart.assertFailed("largeTitle was not provided and there was no title from the route.");
      return new src__widgets__basic.KeyedSubtree.new({key: largeTitleKey, child: largeTitleContent, $creationLocationd_0dea112b090073317d4: const$349 || (const$349 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1171, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$348 || (const$348 = dart.constList([const$346 || (const$346 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1172, column: 7, name: "key"}))), const$347 || (const$347 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1173, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._NavigationBarStaticComponents.new = function(opts) {
    let keys = opts && 'keys' in opts ? opts.keys : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
    let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
    let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let userMiddle = opts && 'userMiddle' in opts ? opts.userMiddle : null;
    let userTrailing = opts && 'userTrailing' in opts ? opts.userTrailing : null;
    let userLargeTitle = opts && 'userLargeTitle' in opts ? opts.userLargeTitle : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let large = opts && 'large' in opts ? opts.large : null;
    this.actionsForegroundColor = actionsForegroundColor;
    this.leading = src__cupertino__nav_bar._NavigationBarStaticComponents.createLeading({leadingKey: keys.leadingKey, userLeading: userLeading, route: route, automaticallyImplyLeading: automaticallyImplyLeading, padding: padding, actionsForegroundColor: actionsForegroundColor});
    this.backChevron = src__cupertino__nav_bar._NavigationBarStaticComponents.createBackChevron({backChevronKey: keys.backChevronKey, userLeading: userLeading, route: route, automaticallyImplyLeading: automaticallyImplyLeading});
    this.backLabel = src__cupertino__nav_bar._NavigationBarStaticComponents.createBackLabel({backLabelKey: keys.backLabelKey, userLeading: userLeading, route: route, previousPageTitle: previousPageTitle, automaticallyImplyLeading: automaticallyImplyLeading});
    this.middle = src__cupertino__nav_bar._NavigationBarStaticComponents.createMiddle({middleKey: keys.middleKey, userMiddle: userMiddle, userLargeTitle: userLargeTitle, route: route, automaticallyImplyTitle: automaticallyImplyTitle, large: large});
    this.trailing = src__cupertino__nav_bar._NavigationBarStaticComponents.createTrailing({trailingKey: keys.trailingKey, userTrailing: userTrailing, padding: padding, actionsForegroundColor: actionsForegroundColor});
    this.largeTitle = src__cupertino__nav_bar._NavigationBarStaticComponents.createLargeTitle({largeTitleKey: keys.largeTitleKey, userLargeTitle: userLargeTitle, route: route, automaticImplyTitle: automaticallyImplyTitle, large: large});
    ;
  }).prototype = src__cupertino__nav_bar._NavigationBarStaticComponents.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarStaticComponents);
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarStaticComponents, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarStaticComponents.__proto__),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    leading: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    backChevron: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    backLabel: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    middle: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    trailing: dart.finalFieldType(src__widgets__basic.KeyedSubtree),
    largeTitle: dart.finalFieldType(src__widgets__basic.KeyedSubtree)
  }));
  const _backChevron$ = dart.privateName(src__cupertino__nav_bar, "_backChevron");
  const _backLabel$ = dart.privateName(src__cupertino__nav_bar, "_backLabel");
  let const$350;
  let const$351;
  let const$352;
  let const$353;
  let const$354;
  let const$355;
  let const$356;
  let const$357;
  let const$358;
  let const$359;
  let const$360;
  let const$361;
  let const$362;
  let const$363;
  let const$364;
  let const$365;
  let const$366;
  let const$367;
  let const$368;
  let const$369;
  let const$370;
  let const$371;
  let const$372;
  let const$373;
  let const$374;
  let const$375;
  let const$376;
  let const$377;
  let const$378;
  let const$379;
  let const$380;
  let const$381;
  let const$382;
  let const$383;
  let const$384;
  let const$385;
  let const$386;
  let const$387;
  let const$388;
  let const$389;
  let const$390;
  let const$391;
  let const$392;
  let const$393;
  let const$394;
  let const$395;
  src__cupertino__nav_bar.CupertinoNavigationBarBackButton = class CupertinoNavigationBarBackButton extends src__widgets__framework.StatelessWidget {
    get color() {
      return this[color$0];
    }
    set color(value) {
      super.color = value;
    }
    get previousPageTitle() {
      return this[previousPageTitle$1];
    }
    set previousPageTitle(value) {
      super.previousPageTitle = value;
    }
    build(context) {
      let t0, t0$;
      let currentRoute = src__widgets__routes.ModalRoute.of(core.Object, context);
      if (!dart.test(currentRoute.canPop)) dart.assertFailed("CupertinoNavigationBarBackButton should only be used in routes that can be popped");
      return new src__cupertino__button.CupertinoButton.new({child: new src__widgets__basic.Semantics.new({container: true, excludeSemantics: true, label: "Back", button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: const$350 || (const$350 = dart.const(new src__rendering__box.BoxConstraints.new({minWidth: src__cupertino__nav_bar._kNavBarBackButtonTapWidth}))), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(this.color), child: new src__widgets__basic.Row.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([const$355 || (const$355 = dart.const(new src__widgets__basic.Padding.new({padding: const$351 || (const$351 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: 8.0}))), $creationLocationd_0dea112b090073317d4: const$354 || (const$354 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1245, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$353 || (const$353 = dart.constList([const$352 || (const$352 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1245, column: 31, name: "padding"})))], src__widgets__widget_inspector._Location))})))}))), (t0 = this[_backChevron$], t0 == null ? const$358 || (const$358 = dart.const(new src__cupertino__nav_bar._BackChevron.new({$creationLocationd_0dea112b090073317d4: const$357 || (const$357 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1246, column: 39, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$356 || (const$356 = dart.constList([], src__widgets__widget_inspector._Location))})))}))) : t0), const$363 || (const$363 = dart.const(new src__widgets__basic.Padding.new({padding: const$359 || (const$359 = dart.const(new src__painting__edge_insets.EdgeInsetsDirectional.only({start: 6.0}))), $creationLocationd_0dea112b090073317d4: const$362 || (const$362 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1247, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$361 || (const$361 = dart.constList([const$360 || (const$360 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1247, column: 31, name: "padding"})))], src__widgets__widget_inspector._Location))})))}))), new src__widgets__basic.Flexible.new({child: (t0$ = this[_backLabel$], t0$ == null ? new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: this.previousPageTitle, route: currentRoute, $creationLocationd_0dea112b090073317d4: const$367 || (const$367 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1250, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$366 || (const$366 = dart.constList([const$364 || (const$364 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1251, column: 25, name: "specifiedPreviousTitle"}))), const$365 || (const$365 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1252, column: 25, name: "route"})))], src__widgets__widget_inspector._Location))})))}) : t0$), $creationLocationd_0dea112b090073317d4: const$370 || (const$370 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1248, column: 17, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$369 || (const$369 = dart.constList([const$368 || (const$368 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1249, column: 19, name: "child"})))], src__widgets__widget_inspector._Location))})))})]), $creationLocationd_0dea112b090073317d4: const$375 || (const$375 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1241, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$374 || (const$374 = dart.constList([const$371 || (const$371 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1242, column: 15, name: "mainAxisSize"}))), const$372 || (const$372 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1243, column: 15, name: "mainAxisAlignment"}))), const$373 || (const$373 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1244, column: 15, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$379 || (const$379 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1239, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$378 || (const$378 = dart.constList([const$376 || (const$376 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1240, column: 13, name: "style"}))), const$377 || (const$377 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1241, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$383 || (const$383 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1236, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$382 || (const$382 = dart.constList([const$380 || (const$380 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1237, column: 11, name: "constraints"}))), const$381 || (const$381 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1239, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$390 || (const$390 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1231, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$389 || (const$389 = dart.constList([const$384 || (const$384 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1232, column: 9, name: "container"}))), const$385 || (const$385 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1233, column: 9, name: "excludeSemantics"}))), const$386 || (const$386 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1234, column: 9, name: "label"}))), const$387 || (const$387 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1235, column: 9, name: "button"}))), const$388 || (const$388 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1236, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
          src__widgets__navigator.Navigator.maybePop(core.Object, context);
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: const$395 || (const$395 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1230, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$394 || (const$394 = dart.constList([const$391 || (const$391 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1231, column: 7, name: "child"}))), const$392 || (const$392 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1260, column: 7, name: "padding"}))), const$393 || (const$393 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1261, column: 7, name: "onPressed"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$0] = color;
    this[previousPageTitle$1] = previousPageTitle;
    this[_backChevron$] = null;
    this[_backLabel$] = null;
    if (!(color != null)) dart.assertFailed();
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble = function(_backChevron, _backLabel, color, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_backChevron$] = _backChevron;
    this[_backLabel$] = _backLabel;
    this[color$0] = color;
    this[previousPageTitle$1] = null;
    if (!(color != null)) dart.assertFailed();
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoNavigationBarBackButton);
  const color$0 = Symbol("CupertinoNavigationBarBackButton.color");
  const previousPageTitle$1 = Symbol("CupertinoNavigationBarBackButton.previousPageTitle");
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    color: dart.finalFieldType(ui$.Color),
    previousPageTitle: dart.finalFieldType(core.String),
    [_backChevron$]: dart.finalFieldType(src__widgets__framework.Widget),
    [_backLabel$]: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  let const$396;
  let const$397;
  let const$398;
  let const$399;
  let const$400;
  let const$401;
  let const$402;
  let const$403;
  let const$404;
  src__cupertino__nav_bar._BackChevron = class _BackChevron extends src__widgets__framework.StatelessWidget {
    build(context) {
      let t0;
      let textDirection = src__widgets__basic.Directionality.of(context);
      let textStyle = src__widgets__text.DefaultTextStyle.of(context).style;
      let iconWidget = new src__widgets__text.Text.rich(new src__painting__text_span.TextSpan.new({text: core.String.fromCharCode(src__cupertino__icons.CupertinoIcons.back.codePoint), style: new src__painting__text_style.TextStyle.new({inherit: false, color: textStyle.color, fontSize: 34.0, fontFamily: src__cupertino__icons.CupertinoIcons.back.fontFamily, package: src__cupertino__icons.CupertinoIcons.back.fontPackage})}), {$creationLocationd_0dea112b090073317d4: const$398 || (const$398 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1278, column: 30, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$397 || (const$397 = dart.constList([const$396 || (const$396 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1279, column: 7, name: "textSpan"})))], src__widgets__widget_inspector._Location))})))});
      switch (textDirection) {
        case ui$.TextDirection.rtl:
        {
          iconWidget = new src__widgets__basic.Transform.new({transform: (t0 = vector_math_64$.Matrix4.identity(), t0.scale(-1.0, 1.0, 1.0), t0), alignment: src__painting__alignment.Alignment.center, transformHitTests: false, child: iconWidget, $creationLocationd_0dea112b090073317d4: const$404 || (const$404 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1292, column: 22, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$403 || (const$403 = dart.constList([const$399 || (const$399 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1293, column: 11, name: "transform"}))), const$400 || (const$400 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1294, column: 11, name: "alignment"}))), const$401 || (const$401 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1295, column: 11, name: "transformHitTests"}))), const$402 || (const$402 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1296, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))});
          break;
        }
        case ui$.TextDirection.ltr:
        {
          break;
        }
      }
      return iconWidget;
    }
  };
  (src__cupertino__nav_bar._BackChevron.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    src__cupertino__nav_bar._BackChevron.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._BackChevron.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._BackChevron);
  dart.setMethodSignature(src__cupertino__nav_bar._BackChevron, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._BackChevron.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  let const$405;
  let const$406;
  let const$407;
  let const$408;
  let const$409;
  let const$410;
  let const$411;
  let const$412;
  let const$413;
  let const$414;
  let const$415;
  let const$416;
  let const$417;
  let const$418;
  let const$419;
  let const$420;
  let const$421;
  let const$422;
  let const$423;
  const _buildPreviousTitleWidget = dart.privateName(src__cupertino__nav_bar, "_buildPreviousTitleWidget");
  let const$424;
  let const$425;
  let const$426;
  let const$427;
  let const$428;
  let const$429;
  let const$430;
  let const$431;
  let const$432;
  src__cupertino__nav_bar._BackLabel = class _BackLabel extends src__widgets__framework.StatelessWidget {
    [_buildPreviousTitleWidget](context, previousTitle, child) {
      if (previousTitle == null) {
        return const$409 || (const$409 = dart.const(new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: const$408 || (const$408 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1325, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$407 || (const$407 = dart.constList([const$405 || (const$405 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1325, column: 29, name: "height"}))), const$406 || (const$406 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1325, column: 42, name: "width"})))], src__widgets__widget_inspector._Location))})))})));
      }
      let textWidget = new src__widgets__text.Text.new(previousTitle, {maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: const$414 || (const$414 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1328, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$413 || (const$413 = dart.constList([const$410 || (const$410 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1329, column: 7, name: "data"}))), const$411 || (const$411 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1330, column: 7, name: "maxLines"}))), const$412 || (const$412 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1331, column: 7, name: "overflow"})))], src__widgets__widget_inspector._Location))})))});
      if (previousTitle.length > 12) {
        textWidget = const$418 || (const$418 = dart.const(new src__widgets__text.Text.new("Back", {$creationLocationd_0dea112b090073317d4: const$417 || (const$417 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1335, column: 26, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$416 || (const$416 = dart.constList([const$415 || (const$415 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1335, column: 31, name: "data"})))], src__widgets__widget_inspector._Location))})))})));
      }
      return new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, widthFactor: 1.0, child: textWidget, $creationLocationd_0dea112b090073317d4: const$423 || (const$423 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1338, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$422 || (const$422 = dart.constList([const$419 || (const$419 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1339, column: 7, name: "alignment"}))), const$420 || (const$420 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1340, column: 7, name: "widthFactor"}))), const$421 || (const$421 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1341, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    build(context) {
      if (this.specifiedPreviousTitle != null) {
        return this[_buildPreviousTitleWidget](context, this.specifiedPreviousTitle, null);
      } else if (src__cupertino__route.CupertinoPageRoute.is(this.route)) {
        let cupertinoRoute = src__cupertino__route.CupertinoPageRoute._check(this.route);
        return new (ValueListenableBuilderOfString()).new({valueListenable: cupertinoRoute.previousTitle, builder: dart.bind(this, _buildPreviousTitleWidget), $creationLocationd_0dea112b090073317d4: const$427 || (const$427 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1354, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$426 || (const$426 = dart.constList([const$424 || (const$424 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1355, column: 9, name: "valueListenable"}))), const$425 || (const$425 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1356, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))});
      } else {
        return const$432 || (const$432 = dart.const(new src__widgets__basic.SizedBox.new({height: 0.0, width: 0.0, $creationLocationd_0dea112b090073317d4: const$431 || (const$431 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1359, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$430 || (const$430 = dart.constList([const$428 || (const$428 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1359, column: 29, name: "height"}))), const$429 || (const$429 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1359, column: 42, name: "width"})))], src__widgets__widget_inspector._Location))})))})));
      }
    }
  };
  (src__cupertino__nav_bar._BackLabel.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let specifiedPreviousTitle = opts && 'specifiedPreviousTitle' in opts ? opts.specifiedPreviousTitle : null;
    let route = opts && 'route' in opts ? opts.route : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.specifiedPreviousTitle = specifiedPreviousTitle;
    this.route = route;
    if (!(route != null)) dart.assertFailed();
    src__cupertino__nav_bar._BackLabel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._BackLabel.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._BackLabel);
  dart.setMethodSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._BackLabel.__proto__),
    [_buildPreviousTitleWidget]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.String, src__widgets__framework.Widget]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._BackLabel.__proto__),
    specifiedPreviousTitle: dart.finalFieldType(core.String),
    route: dart.finalFieldType(src__widgets__routes.ModalRoute)
  }));
  src__cupertino__nav_bar._TransitionableNavigationBar = class _TransitionableNavigationBar extends src__widgets__framework.StatelessWidget {
    get renderBox() {
      let box = src__rendering__box.RenderBox._check(this.componentsKeys.navBarBoxKey.currentContext.findRenderObject());
      if (!dart.test(box.attached)) dart.assertFailed("_TransitionableNavigationBar.renderBox should be called when building " + "hero flight shuttles when the from and the to nav bar boxes are already " + "laid out and painted.");
      return box;
    }
    build(context) {
      if (!dart.test(dart.fn(() => {
        let inHero = null;
        context.visitAncestorElements(dart.fn(ancestor => {
          if (src__widgets__framework.ComponentElement.is(ancestor)) {
            if (!!dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__cupertino__nav_bar._NavigationBarTransition))) dart.assertFailed("_TransitionableNavigationBar should never re-appear inside " + "_NavigationBarTransition. Keyed _TransitionableNavigationBar should " + "only serve as anchor points in routes rather than appearing inside " + "Hero flights themselves.");
            if (dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__widgets__heroes.Hero))) {
              inHero = true;
            }
          }
          inHero == null ? inHero = false : null;
          return true;
        }, ElementTobool()));
        if (!dart.equals(inHero, true)) dart.assertFailed("_TransitionableNavigationBar should only be added as the immediate " + "child of Hero widgets.");
        return true;
      }, VoidTobool())())) dart.assertFailed();
      return this.child;
    }
  };
  (src__cupertino__nav_bar._TransitionableNavigationBar.new = function(opts) {
    let componentsKeys = opts && 'componentsKeys' in opts ? opts.componentsKeys : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : null;
    let border = opts && 'border' in opts ? opts.border : null;
    let hasUserMiddle = opts && 'hasUserMiddle' in opts ? opts.hasUserMiddle : null;
    let largeExpanded = opts && 'largeExpanded' in opts ? opts.largeExpanded : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.componentsKeys = componentsKeys;
    this.backgroundColor = backgroundColor;
    this.actionsForegroundColor = actionsForegroundColor;
    this.border = border;
    this.hasUserMiddle = hasUserMiddle;
    this.largeExpanded = largeExpanded;
    this.child = child;
    if (!(componentsKeys != null)) dart.assertFailed();
    if (!(largeExpanded != null)) dart.assertFailed();
    src__cupertino__nav_bar._TransitionableNavigationBar.__proto__.new.call(this, {key: componentsKeys.navBarBoxKey, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._TransitionableNavigationBar.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._TransitionableNavigationBar);
  dart.setMethodSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    renderBox: src__rendering__box.RenderBox
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._TransitionableNavigationBar, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._TransitionableNavigationBar.__proto__),
    componentsKeys: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    backgroundColor: dart.finalFieldType(ui$.Color),
    actionsForegroundColor: dart.finalFieldType(ui$.Color),
    border: dart.finalFieldType(src__painting__box_border.Border),
    hasUserMiddle: dart.finalFieldType(core.bool),
    largeExpanded: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  let const$433;
  let const$434;
  let const$435;
  let const$436;
  let const$437;
  let const$438;
  let const$439;
  let const$440;
  let const$441;
  let const$442;
  let const$443;
  let const$444;
  let const$445;
  let const$446;
  let const$447;
  let const$448;
  src__cupertino__nav_bar._NavigationBarTransition = class _NavigationBarTransition extends src__widgets__framework.StatelessWidget {
    build(context) {
      let componentsTransition = new src__cupertino__nav_bar._NavigationBarComponentsTransition.new({animation: this.animation, bottomNavBar: this.bottomNavBar, topNavBar: this.topNavBar, directionality: src__widgets__basic.Directionality.of(context)});
      let children = JSArrayOfWidget().of([new src__widgets__transitions.AnimatedBuilder.new({animation: this.animation, builder: dart.fn((context, child) => src__cupertino__nav_bar._wrapWithBackground({updateSystemUiOverlay: false, backgroundColor: this.backgroundTween.evaluate(this.animation), border: this.borderTween.evaluate(this.animation), child: new src__widgets__basic.SizedBox.new({height: this.heightTween.evaluate(this.animation), width: core.double.infinity, $creationLocationd_0dea112b090073317d4: const$436 || (const$436 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1498, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$435 || (const$435 = dart.constList([const$433 || (const$433 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1499, column: 15, name: "height"}))), const$434 || (const$434 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1500, column: 15, name: "width"})))], src__widgets__widget_inspector._Location))})))})}), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: const$440 || (const$440 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1490, column: 7, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$439 || (const$439 = dart.constList([const$437 || (const$437 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1491, column: 9, name: "animation"}))), const$438 || (const$438 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1492, column: 9, name: "builder"})))], src__widgets__widget_inspector._Location))})))}), componentsTransition.bottomBackChevron, componentsTransition.bottomBackLabel, componentsTransition.bottomLeading, componentsTransition.bottomMiddle, componentsTransition.bottomLargeTitle, componentsTransition.bottomTrailing, componentsTransition.topLeading, componentsTransition.topBackChevron, componentsTransition.topBackLabel, componentsTransition.topMiddle, componentsTransition.topLargeTitle, componentsTransition.topTrailing]);
      children[$removeWhere](dart.fn(child => child == null, WidgetTobool()));
      return new src__widgets__basic.SizedBox.new({height: math.max(core.double, this.heightTween.begin, this.heightTween.end) + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), width: core.double.infinity, child: new src__widgets__basic.Stack.new({children: children, $creationLocationd_0dea112b090073317d4: const$443 || (const$443 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1531, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$442 || (const$442 = dart.constList([const$441 || (const$441 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1532, column: 9, name: "children"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$448 || (const$448 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1527, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$447 || (const$447 = dart.constList([const$444 || (const$444 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1528, column: 7, name: "height"}))), const$445 || (const$445 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1530, column: 7, name: "width"}))), const$446 || (const$446 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1531, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._NavigationBarTransition.new = function(opts) {
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let topNavBar = opts && 'topNavBar' in opts ? opts.topNavBar : null;
    let bottomNavBar = opts && 'bottomNavBar' in opts ? opts.bottomNavBar : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.animation = animation;
    this.topNavBar = topNavBar;
    this.bottomNavBar = bottomNavBar;
    this.heightTween = new (TweenOfdouble()).new({begin: bottomNavBar.renderBox.size.height, end: topNavBar.renderBox.size.height});
    this.backgroundTween = new src__animation__tween.ColorTween.new({begin: bottomNavBar.backgroundColor, end: topNavBar.backgroundColor});
    this.borderTween = new src__widgets__implicit_animations.BorderTween.new({begin: bottomNavBar.border, end: topNavBar.border});
    src__cupertino__nav_bar._NavigationBarTransition.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._NavigationBarTransition.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarTransition);
  dart.setMethodSignature(src__cupertino__nav_bar._NavigationBarTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._NavigationBarTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarTransition, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarTransition.__proto__),
    animation: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    topNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    bottomNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    heightTween: dart.finalFieldType(src__animation__tween.Tween$(core.double)),
    backgroundTween: dart.finalFieldType(src__animation__tween.ColorTween),
    borderTween: dart.finalFieldType(src__widgets__implicit_animations.BorderTween)
  }));
  let const$449;
  let const$450;
  let const$451;
  let const$452;
  let const$453;
  let const$454;
  let const$455;
  let const$456;
  let const$457;
  let const$458;
  let const$459;
  let const$460;
  let const$461;
  let const$462;
  let const$463;
  let const$464;
  let const$465;
  let const$466;
  let const$467;
  let const$468;
  let const$469;
  let const$470;
  let const$471;
  let const$472;
  let const$473;
  let const$474;
  let const$475;
  let const$476;
  let const$477;
  let const$478;
  let const$479;
  let const$480;
  let const$481;
  let const$482;
  let const$483;
  let const$484;
  let const$485;
  let const$486;
  let const$487;
  let const$488;
  let const$489;
  let const$490;
  let const$491;
  let const$492;
  let const$493;
  let const$494;
  let const$495;
  let const$496;
  let const$497;
  let const$498;
  let const$499;
  let const$500;
  let const$501;
  let const$502;
  let const$503;
  let const$504;
  let const$505;
  let const$506;
  let const$507;
  let const$508;
  let const$509;
  let const$510;
  let const$511;
  let const$512;
  let const$513;
  let const$514;
  let const$515;
  let const$516;
  let const$517;
  let const$518;
  let const$519;
  let const$520;
  let const$521;
  let const$522;
  let const$523;
  let const$524;
  let const$525;
  let const$526;
  let const$527;
  let const$528;
  let const$529;
  let const$530;
  let const$531;
  let const$532;
  let const$533;
  let const$534;
  let const$535;
  let const$536;
  let const$537;
  let const$538;
  let const$539;
  let const$540;
  let const$541;
  let const$542;
  let const$543;
  let const$544;
  let const$545;
  let const$546;
  let const$547;
  let const$548;
  let const$549;
  let const$550;
  let const$551;
  let const$552;
  let const$553;
  let const$554;
  let const$555;
  let const$556;
  let const$557;
  let const$558;
  let const$559;
  let const$560;
  let const$561;
  let const$562;
  let const$563;
  let const$564;
  let const$565;
  let const$566;
  let const$567;
  let const$568;
  let const$569;
  let const$570;
  let const$571;
  let const$572;
  let const$573;
  let const$574;
  let const$575;
  let const$576;
  let const$577;
  let const$578;
  let const$579;
  let const$580;
  let const$581;
  let const$582;
  let const$583;
  let const$584;
  let const$585;
  let const$586;
  let const$587;
  let const$588;
  let const$589;
  let const$590;
  let const$591;
  let const$592;
  let const$593;
  let const$594;
  let const$595;
  let const$596;
  let const$597;
  let const$598;
  let const$599;
  let const$600;
  let const$601;
  let const$602;
  let const$603;
  let const$604;
  let const$605;
  let const$606;
  let const$607;
  let const$608;
  let const$609;
  let const$610;
  let const$611;
  let const$612;
  let const$613;
  let const$614;
  let const$615;
  let const$616;
  let const$617;
  let const$618;
  let const$619;
  let const$620;
  let const$621;
  let const$622;
  let const$623;
  let const$624;
  let const$625;
  let const$626;
  let const$627;
  src__cupertino__nav_bar._NavigationBarComponentsTransition = class _NavigationBarComponentsTransition extends core.Object {
    positionInTransitionBox(key, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let componentBox = src__rendering__box.RenderBox._check(key.currentContext.findRenderObject());
      if (!dart.test(componentBox.attached)) dart.assertFailed();
      return src__rendering__stack.RelativeRect.fromRect(componentBox.localToGlobal(ui$.Offset.zero, {ancestor: from})['&'](componentBox.size), this.transitionBox);
    }
    slideFromLeadingEdge(opts) {
      let fromKey = opts && 'fromKey' in opts ? opts.fromKey : null;
      let fromNavBarBox = opts && 'fromNavBarBox' in opts ? opts.fromNavBarBox : null;
      let toKey = opts && 'toKey' in opts ? opts.toKey : null;
      let toNavBarBox = opts && 'toNavBarBox' in opts ? opts.toNavBarBox : null;
      let fromRect = this.positionInTransitionBox(fromKey, {from: fromNavBarBox});
      let fromBox = src__rendering__box.RenderBox._check(fromKey.currentContext.findRenderObject());
      let toBox = src__rendering__box.RenderBox._check(toKey.currentContext.findRenderObject());
      let toRect = toBox.localToGlobal(ui$.Offset.zero, {ancestor: toNavBarBox}).translate(0.0, -dart.notNull(fromBox.size.height) / 2 + dart.notNull(toBox.size.height) / 2)['&'](fromBox.size);
      if (dart.notNull(this.forwardDirection) < 0) {
        toRect = toRect.translate(-dart.notNull(fromBox.size.width) + dart.notNull(toBox.size.width), 0.0);
      }
      return new src__widgets__transitions.RelativeRectTween.new({begin: fromRect, end: src__rendering__stack.RelativeRect.fromRect(toRect, this.transitionBox)});
    }
    fadeInFrom(t, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.easeIn;
      return this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeIn.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(t, 1.0, {curve: curve})})));
    }
    fadeOutBy(t, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : src__animation__curves.Curves.easeOut;
      return this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeOut.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(0.0, t, {curve: curve})})));
    }
    get bottomLeading() {
      let bottomLeading = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.leadingKey.currentWidget);
      if (bottomLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.leadingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: bottomLeading.child, $creationLocationd_0dea112b090073317d4: const$452 || (const$452 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1700, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$451 || (const$451 = dart.constList([const$449 || (const$449 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1701, column: 9, name: "opacity"}))), const$450 || (const$450 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1702, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$456 || (const$456 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1697, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$455 || (const$455 = dart.constList([const$453 || (const$453 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1698, column: 7, name: "rect"}))), const$454 || (const$454 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1700, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get bottomBackChevron() {
      let bottomBackChevron = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backChevronKey.currentWidget);
      if (bottomBackChevron == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.backChevronKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackChevron.child, $creationLocationd_0dea112b090073317d4: const$460 || (const$460 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1720, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$459 || (const$459 = dart.constList([const$457 || (const$457 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1721, column: 11, name: "style"}))), const$458 || (const$458 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1722, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$464 || (const$464 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1718, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$463 || (const$463 = dart.constList([const$461 || (const$461 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1719, column: 9, name: "opacity"}))), const$462 || (const$462 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1720, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$468 || (const$468 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1715, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$467 || (const$467 = dart.constList([const$465 || (const$465 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1716, column: 7, name: "rect"}))), const$466 || (const$466 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1718, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get bottomBackLabel() {
      let bottomBackLabel = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backLabelKey.currentWidget);
      if (bottomBackLabel == null) {
        return null;
      }
      let from = this.positionInTransitionBox(this.bottomComponents.backLabelKey, {from: this.bottomNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * (-dart.notNull(this.bottomNavBarBox.size.width) / 2.0), 0.0))});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.2), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackLabel.child, $creationLocationd_0dea112b090073317d4: const$472 || (const$472 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1755, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$471 || (const$471 = dart.constList([const$469 || (const$469 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1756, column: 11, name: "style"}))), const$470 || (const$470 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1757, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$476 || (const$476 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1753, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$475 || (const$475 = dart.constList([const$473 || (const$473 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1754, column: 9, name: "opacity"}))), const$474 || (const$474 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1755, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$480 || (const$480 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1751, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$479 || (const$479 = dart.constList([const$477 || (const$477 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1752, column: 7, name: "rect"}))), const$478 || (const$478 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1753, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get bottomMiddle() {
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (!dart.test(this.bottomHasUserMiddle) && dart.test(this.bottomLargeExpanded)) {
        return null;
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle})), child: bottomMiddle.child, $creationLocationd_0dea112b090073317d4: const$484 || (const$484 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1790, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$483 || (const$483 = dart.constList([const$481 || (const$481 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1791, column: 15, name: "style"}))), const$482 || (const$482 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1795, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$488 || (const$488 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1786, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$487 || (const$487 = dart.constList([const$485 || (const$485 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1789, column: 13, name: "alignment"}))), const$486 || (const$486 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1790, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$492 || (const$492 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1783, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$491 || (const$491 = dart.constList([const$489 || (const$489 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1785, column: 11, name: "opacity"}))), const$490 || (const$490 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1786, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$496 || (const$496 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1776, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$495 || (const$495 = dart.constList([const$493 || (const$493 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1777, column: 9, name: "rect"}))), const$494 || (const$494 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1783, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      if (bottomMiddle != null && topLeading != null) {
        return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.middleKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: bottomMiddle.child, $creationLocationd_0dea112b090073317d4: const$500 || (const$500 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1812, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$499 || (const$499 = dart.constList([const$497 || (const$497 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1813, column: 13, name: "style"}))), const$498 || (const$498 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1814, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$504 || (const$504 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1809, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$503 || (const$503 = dart.constList([const$501 || (const$501 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1810, column: 11, name: "opacity"}))), const$502 || (const$502 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1812, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$508 || (const$508 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1806, column: 25, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$507 || (const$507 = dart.constList([const$505 || (const$505 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1807, column: 9, name: "rect"}))), const$506 || (const$506 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1809, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return null;
    }
    get bottomLargeTitle() {
      let bottomLargeTitle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.largeTitleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (bottomLargeTitle == null || !dart.test(this.bottomLargeExpanded)) {
        return null;
      }
      if (bottomLargeTitle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle})), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: bottomLargeTitle.child, $creationLocationd_0dea112b090073317d4: const$514 || (const$514 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1848, column: 20, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$513 || (const$513 = dart.constList([const$509 || (const$509 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1849, column: 15, name: "style"}))), const$510 || (const$510 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1853, column: 15, name: "maxLines"}))), const$511 || (const$511 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1854, column: 15, name: "overflow"}))), const$512 || (const$512 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1855, column: 15, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$518 || (const$518 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1844, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$517 || (const$517 = dart.constList([const$515 || (const$515 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1847, column: 13, name: "alignment"}))), const$516 || (const$516 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1848, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$522 || (const$522 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1842, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$521 || (const$521 = dart.constList([const$519 || (const$519 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1843, column: 11, name: "opacity"}))), const$520 || (const$520 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1844, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$526 || (const$526 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1835, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$525 || (const$525 = dart.constList([const$523 || (const$523 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1836, column: 9, name: "rect"}))), const$524 || (const$524 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1842, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      if (bottomLargeTitle != null && topLeading != null) {
        let from = this.positionInTransitionBox(this.bottomComponents.largeTitleKey, {from: this.bottomNavBarBox});
        let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.bottomNavBarBox.size.width) / 4.0, 0.0))});
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, child: bottomLargeTitle.child, $creationLocationd_0dea112b090073317d4: const$530 || (const$530 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1886, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$529 || (const$529 = dart.constList([const$527 || (const$527 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1887, column: 13, name: "style"}))), const$528 || (const$528 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1888, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$534 || (const$534 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1883, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$533 || (const$533 = dart.constList([const$531 || (const$531 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1884, column: 11, name: "opacity"}))), const$532 || (const$532 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1886, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$538 || (const$538 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1881, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$537 || (const$537 = dart.constList([const$535 || (const$535 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1882, column: 9, name: "rect"}))), const$536 || (const$536 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1883, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return null;
    }
    get bottomTrailing() {
      let bottomTrailing = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.trailingKey.currentWidget);
      if (bottomTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.trailingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: bottomTrailing.child, $creationLocationd_0dea112b090073317d4: const$542 || (const$542 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1908, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$541 || (const$541 = dart.constList([const$539 || (const$539 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1909, column: 9, name: "opacity"}))), const$540 || (const$540 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1910, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$546 || (const$546 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1905, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$545 || (const$545 = dart.constList([const$543 || (const$543 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1906, column: 7, name: "rect"}))), const$544 || (const$544 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1908, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get topLeading() {
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (topLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.leadingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.6), child: topLeading.child, $creationLocationd_0dea112b090073317d4: const$550 || (const$550 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1925, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$549 || (const$549 = dart.constList([const$547 || (const$547 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1926, column: 9, name: "opacity"}))), const$548 || (const$548 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1927, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$554 || (const$554 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1922, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$553 || (const$553 = dart.constList([const$551 || (const$551 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1923, column: 7, name: "rect"}))), const$552 || (const$552 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1925, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get topBackChevron() {
      let topBackChevron = src__widgets__basic.KeyedSubtree._check(this.topComponents.backChevronKey.currentWidget);
      let bottomBackChevron = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backChevronKey.currentWidget);
      if (topBackChevron == null) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.backChevronKey, {from: this.topNavBarBox});
      let from = to;
      if (bottomBackChevron == null) {
        let topBackChevronBox = src__rendering__box.RenderBox._check(this.topComponents.backChevronKey.currentContext.findRenderObject());
        from = to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(topBackChevronBox.size.width) * 2.0, 0.0));
      }
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(bottomBackChevron == null ? 0.7 : 0.4), child: new src__widgets__text.DefaultTextStyle.new({style: this.topActionsStyle, child: topBackChevron.child, $creationLocationd_0dea112b090073317d4: const$558 || (const$558 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1969, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$557 || (const$557 = dart.constList([const$555 || (const$555 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1970, column: 11, name: "style"}))), const$556 || (const$556 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1971, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$562 || (const$562 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1967, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$561 || (const$561 = dart.constList([const$559 || (const$559 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1968, column: 9, name: "opacity"}))), const$560 || (const$560 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1969, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$566 || (const$566 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1965, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$565 || (const$565 = dart.constList([const$563 || (const$563 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1966, column: 7, name: "rect"}))), const$564 || (const$564 = dart.const(new src__widgets__widget_inspector._Location.new({line: 1967, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get topBackLabel() {
      let t0, t0$, t0$0;
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let bottomLargeTitle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.largeTitleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      if (topBackLabel == null) {
        return null;
      }
      let topBackLabelOpacity = src__rendering__proxy_box.RenderAnimatedOpacity._check((t0 = this.topComponents.backLabelKey.currentContext, t0 == null ? null : t0.ancestorRenderObjectOfType(const$567 || (const$567 = dart.const(new (TypeMatcherOfRenderAnimatedOpacity()).new())))));
      let midClickOpacity = null;
      if (topBackLabelOpacity != null && dart.notNull(topBackLabelOpacity.opacity.value) < 1.0) {
        midClickOpacity = this.animation.drive(core.double, new (TweenOfdouble()).new({begin: 0.0, end: topBackLabelOpacity.opacity.value}));
      }
      if (bottomLargeTitle != null && topBackLabel != null && dart.test(this.bottomLargeExpanded)) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: (t0$ = midClickOpacity, t0$ == null ? this.fadeInFrom(0.4) : t0$), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle})), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topBackLabel.child, $creationLocationd_0dea112b090073317d4: const$573 || (const$573 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2017, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$572 || (const$572 = dart.constList([const$568 || (const$568 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2018, column: 13, name: "style"}))), const$569 || (const$569 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2022, column: 13, name: "maxLines"}))), const$570 || (const$570 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2023, column: 13, name: "overflow"}))), const$571 || (const$571 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2024, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$577 || (const$577 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2015, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$576 || (const$576 = dart.constList([const$574 || (const$574 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2016, column: 11, name: "opacity"}))), const$575 || (const$575 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2017, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$581 || (const$581 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2008, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$580 || (const$580 = dart.constList([const$578 || (const$578 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2009, column: 9, name: "rect"}))), const$579 || (const$579 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2015, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: (t0$0 = midClickOpacity, t0$0 == null ? this.fadeInFrom(0.3) : t0$0), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle})), child: topBackLabel.child, $creationLocationd_0dea112b090073317d4: const$585 || (const$585 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2042, column: 18, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$584 || (const$584 = dart.constList([const$582 || (const$582 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2043, column: 13, name: "style"}))), const$583 || (const$583 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2047, column: 13, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$589 || (const$589 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2040, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$588 || (const$588 = dart.constList([const$586 || (const$586 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2041, column: 11, name: "opacity"}))), const$587 || (const$587 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2042, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$593 || (const$593 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2033, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$592 || (const$592 = dart.constList([const$590 || (const$590 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2034, column: 9, name: "rect"}))), const$591 || (const$591 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2040, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }
      return null;
    }
    get topMiddle() {
      let topMiddle = src__widgets__basic.KeyedSubtree._check(this.topComponents.middleKey.currentWidget);
      if (topMiddle == null) {
        return null;
      }
      if (!dart.test(this.topHasUserMiddle) && dart.test(this.topLargeExpanded)) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.middleKey, {from: this.topNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.topNavBarBox.size.width) / 2.0, 0.0)), end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.25), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: topMiddle.child, $creationLocationd_0dea112b090073317d4: const$597 || (const$597 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2087, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$596 || (const$596 = dart.constList([const$594 || (const$594 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2088, column: 11, name: "style"}))), const$595 || (const$595 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2089, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$601 || (const$601 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2085, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$600 || (const$600 = dart.constList([const$598 || (const$598 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2086, column: 9, name: "opacity"}))), const$599 || (const$599 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2087, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$605 || (const$605 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2083, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$604 || (const$604 = dart.constList([const$602 || (const$602 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2084, column: 7, name: "rect"}))), const$603 || (const$603 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2085, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get topTrailing() {
      let topTrailing = src__widgets__basic.KeyedSubtree._check(this.topComponents.trailingKey.currentWidget);
      if (topTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.trailingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.4), child: topTrailing.child, $creationLocationd_0dea112b090073317d4: const$609 || (const$609 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2105, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$608 || (const$608 = dart.constList([const$606 || (const$606 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2106, column: 9, name: "opacity"}))), const$607 || (const$607 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2107, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$613 || (const$613 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2102, column: 23, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$612 || (const$612 = dart.constList([const$610 || (const$610 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2103, column: 7, name: "rect"}))), const$611 || (const$611 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2105, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    get topLargeTitle() {
      let topLargeTitle = src__widgets__basic.KeyedSubtree._check(this.topComponents.largeTitleKey.currentWidget);
      if (topLargeTitle == null || !dart.test(this.topLargeExpanded)) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.largeTitleKey, {from: this.topNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.topNavBarBox.size.width), 0.0)), end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.3), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topLargeTitle.child, $creationLocationd_0dea112b090073317d4: const$619 || (const$619 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2138, column: 16, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$618 || (const$618 = dart.constList([const$614 || (const$614 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2139, column: 11, name: "style"}))), const$615 || (const$615 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2140, column: 11, name: "maxLines"}))), const$616 || (const$616 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2141, column: 11, name: "overflow"}))), const$617 || (const$617 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2142, column: 11, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$623 || (const$623 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2136, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$622 || (const$622 = dart.constList([const$620 || (const$620 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2137, column: 9, name: "opacity"}))), const$621 || (const$621 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2138, column: 9, name: "child"})))], src__widgets__widget_inspector._Location))})))}), $creationLocationd_0dea112b090073317d4: const$627 || (const$627 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2134, column: 12, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$626 || (const$626 = dart.constList([const$624 || (const$624 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2135, column: 7, name: "rect"}))), const$625 || (const$625 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2136, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
  };
  (src__cupertino__nav_bar._NavigationBarComponentsTransition.new = function(opts) {
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let bottomNavBar = opts && 'bottomNavBar' in opts ? opts.bottomNavBar : null;
    let topNavBar = opts && 'topNavBar' in opts ? opts.topNavBar : null;
    let directionality = opts && 'directionality' in opts ? opts.directionality : null;
    this.animation = animation;
    this.bottomComponents = bottomNavBar.componentsKeys;
    this.topComponents = topNavBar.componentsKeys;
    this.bottomNavBarBox = bottomNavBar.renderBox;
    this.topNavBarBox = topNavBar.renderBox;
    this.bottomActionsStyle = src__cupertino__nav_bar._navBarItemStyle(bottomNavBar.actionsForegroundColor);
    this.topActionsStyle = src__cupertino__nav_bar._navBarItemStyle(topNavBar.actionsForegroundColor);
    this.bottomHasUserMiddle = bottomNavBar.hasUserMiddle;
    this.topHasUserMiddle = topNavBar.hasUserMiddle;
    this.bottomLargeExpanded = bottomNavBar.largeExpanded;
    this.topLargeExpanded = topNavBar.largeExpanded;
    this.transitionBox = bottomNavBar.renderBox.paintBounds.expandToInclude(topNavBar.renderBox.paintBounds);
    this.forwardDirection = dart.equals(directionality, ui$.TextDirection.ltr) ? 1.0 : -1.0;
    ;
  }).prototype = src__cupertino__nav_bar._NavigationBarComponentsTransition.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._NavigationBarComponentsTransition);
  dart.setMethodSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    positionInTransitionBox: dart.fnType(src__rendering__stack.RelativeRect, [src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget))], {from: src__rendering__box.RenderBox}),
    slideFromLeadingEdge: dart.fnType(src__widgets__transitions.RelativeRectTween, [], {fromKey: src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)), fromNavBarBox: src__rendering__box.RenderBox, toKey: src__widgets__framework.GlobalKey$(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)), toNavBarBox: src__rendering__box.RenderBox}),
    fadeInFrom: dart.fnType(src__animation__animation.Animation$(core.double), [core.double], {curve: src__animation__curves.Curve}),
    fadeOutBy: dart.fnType(src__animation__animation.Animation$(core.double), [core.double], {curve: src__animation__curves.Curve})
  }));
  dart.setGetterSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getGetters(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    bottomLeading: src__widgets__framework.Widget,
    bottomBackChevron: src__widgets__framework.Widget,
    bottomBackLabel: src__widgets__framework.Widget,
    bottomMiddle: src__widgets__framework.Widget,
    bottomLargeTitle: src__widgets__framework.Widget,
    bottomTrailing: src__widgets__framework.Widget,
    topLeading: src__widgets__framework.Widget,
    topBackChevron: src__widgets__framework.Widget,
    topBackLabel: src__widgets__framework.Widget,
    topMiddle: src__widgets__framework.Widget,
    topTrailing: src__widgets__framework.Widget,
    topLargeTitle: src__widgets__framework.Widget
  }));
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarComponentsTransition, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarComponentsTransition.__proto__),
    animation: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    bottomComponents: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    topComponents: dart.finalFieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys),
    bottomNavBarBox: dart.finalFieldType(src__rendering__box.RenderBox),
    topNavBarBox: dart.finalFieldType(src__rendering__box.RenderBox),
    bottomActionsStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    topActionsStyle: dart.finalFieldType(src__painting__text_style.TextStyle),
    bottomHasUserMiddle: dart.finalFieldType(core.bool),
    topHasUserMiddle: dart.finalFieldType(core.bool),
    bottomLargeExpanded: dart.finalFieldType(core.bool),
    topLargeExpanded: dart.finalFieldType(core.bool),
    transitionBox: dart.finalFieldType(ui$.Rect),
    forwardDirection: dart.finalFieldType(core.double)
  }));
  dart.defineLazy(src__cupertino__nav_bar._NavigationBarComponentsTransition, {
    /*src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeOut*/get fadeOut() {
      return new (TweenOfdouble()).new({begin: 1.0, end: 0.0});
    },
    /*src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeIn*/get fadeIn() {
      return new (TweenOfdouble()).new({begin: 0.0, end: 1.0});
    }
  });
  let const$628;
  let const$629;
  let const$630;
  let const$631;
  let const$632;
  let const$633;
  let const$634;
  let const$635;
  let const$636;
  src__cupertino__nav_bar._navBarItemStyle = function(color) {
    return new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", fontSize: 17.0, letterSpacing: -0.24, color: color});
  };
  src__cupertino__nav_bar._wrapWithBackground = function(opts) {
    let border = opts && 'border' in opts ? opts.border : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let updateSystemUiOverlay = opts && 'updateSystemUiOverlay' in opts ? opts.updateSystemUiOverlay : true;
    let result = child;
    if (dart.test(updateSystemUiOverlay)) {
      let darkBackground = dart.notNull(backgroundColor.computeLuminance()) < 0.179;
      let overlayStyle = darkBackground ? src__services__system_chrome.SystemUiOverlayStyle.light : src__services__system_chrome.SystemUiOverlayStyle.dark;
      result = new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: overlayStyle, sized: true, child: result, $creationLocationd_0dea112b090073317d4: const$632 || (const$632 = dart.const(new src__widgets__widget_inspector._Location.new({line: 122, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$631 || (const$631 = dart.constList([const$628 || (const$628 = dart.const(new src__widgets__widget_inspector._Location.new({line: 123, column: 7, name: "value"}))), const$629 || (const$629 = dart.const(new src__widgets__widget_inspector._Location.new({line: 124, column: 7, name: "sized"}))), const$630 || (const$630 = dart.const(new src__widgets__widget_inspector._Location.new({line: 125, column: 7, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    }
    let childWithBackground = new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: border, color: backgroundColor}), child: result, $creationLocationd_0dea112b090073317d4: const$636 || (const$636 = dart.const(new src__widgets__widget_inspector._Location.new({line: 128, column: 44, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$635 || (const$635 = dart.constList([const$633 || (const$633 = dart.const(new src__widgets__widget_inspector._Location.new({line: 129, column: 5, name: "decoration"}))), const$634 || (const$634 = dart.const(new src__widgets__widget_inspector._Location.new({line: 133, column: 5, name: "child"})))], src__widgets__widget_inspector._Location))})))});
    if (backgroundColor.alpha === 255) return childWithBackground;
    return childWithBackground;
  };
  src__cupertino__nav_bar._isTransitionable = function(context) {
    let route = src__widgets__routes.ModalRoute.of(core.Object, context);
    return src__widgets__pages.PageRoute.is(route) && !dart.test(route.fullscreenDialog);
  };
  let const$637;
  let const$638;
  let const$639;
  let const$640;
  let const$641;
  let const$642;
  let const$643;
  let const$644;
  let const$645;
  let const$646;
  let const$647;
  let const$648;
  let const$649;
  let const$650;
  let const$651;
  let const$652;
  let const$653;
  dart.defineLazy(src__cupertino__nav_bar, {
    /*src__cupertino__nav_bar._kNavBarPersistentHeight*/get _kNavBarPersistentHeight() {
      return 44.0;
    },
    /*src__cupertino__nav_bar._kNavBarLargeTitleHeightExtension*/get _kNavBarLargeTitleHeightExtension() {
      return 52.0;
    },
    /*src__cupertino__nav_bar._kNavBarShowLargeTitleThreshold*/get _kNavBarShowLargeTitleThreshold() {
      return 10.0;
    },
    /*src__cupertino__nav_bar._kNavBarEdgePadding*/get _kNavBarEdgePadding() {
      return 16.0;
    },
    /*src__cupertino__nav_bar._kNavBarBackButtonTapWidth*/get _kNavBarBackButtonTapWidth() {
      return 50.0;
    },
    /*src__cupertino__nav_bar._kNavBarTitleFadeDuration*/get _kNavBarTitleFadeDuration() {
      return dart.const(new core.Duration.new({milliseconds: 150}));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBackgroundColor*/get _kDefaultNavBarBackgroundColor() {
      return dart.const(new ui$.Color.new(3438868728));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorderColor*/get _kDefaultNavBarBorderColor() {
      return dart.const(new ui$.Color.new(1275068416));
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorder*/get _kDefaultNavBarBorder() {
      return dart.const(new src__painting__box_border.Border.new({bottom: dart.const(new src__painting__borders.BorderSide.new({color: src__cupertino__nav_bar._kDefaultNavBarBorderColor, width: 0.0, style: src__painting__borders.BorderStyle.solid}))}));
    },
    /*src__cupertino__nav_bar._kMiddleTitleTextStyle*/get _kMiddleTitleTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", fontSize: 17.0, fontWeight: ui$.FontWeight.w600, letterSpacing: -0.08, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__nav_bar._kLargeTitleTextStyle*/get _kLargeTitleTextStyle() {
      return dart.const(new src__painting__text_style.TextStyle.new({fontFamily: ".SF Pro Display", fontSize: 34.0, fontWeight: ui$.FontWeight.w700, letterSpacing: 0.24, color: src__cupertino__colors.CupertinoColors.black}));
    },
    /*src__cupertino__nav_bar._defaultHeroTag*/get _defaultHeroTag() {
      return dart.const(new src__cupertino__nav_bar._HeroTag.new(null));
    },
    /*src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween*/get _linearTranslateWithLargestRectSizeTween() {
      return dart.fn((begin, end) => {
        let largestSize = new ui$.Size.new(math.max(core.double, begin.size.width, end.size.width), math.max(core.double, begin.size.height, end.size.height));
        return new src__animation__tween.RectTween.new({begin: begin.topLeft['&'](largestSize), end: end.topLeft['&'](largestSize)});
      }, RectAndRectToRectTween());
    },
    set _linearTranslateWithLargestRectSizeTween(_) {},
    /*src__cupertino__nav_bar._navBarHeroLaunchPadBuilder*/get _navBarHeroLaunchPadBuilder() {
      return dart.fn((context, child) => {
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(child)) dart.assertFailed();
        return new src__widgets__visibility.Visibility.new({maintainSize: true, maintainAnimation: true, maintainState: true, visible: false, child: child, $creationLocationd_0dea112b090073317d4: const$643 || (const$643 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2179, column: 10, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$642 || (const$642 = dart.constList([const$637 || (const$637 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2180, column: 5, name: "maintainSize"}))), const$638 || (const$638 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2181, column: 5, name: "maintainAnimation"}))), const$639 || (const$639 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2182, column: 5, name: "maintainState"}))), const$640 || (const$640 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2183, column: 5, name: "visible"}))), const$641 || (const$641 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2184, column: 5, name: "child"})))], src__widgets__widget_inspector._Location))})))});
      }, BuildContextAndWidgetToVisibility());
    },
    /*src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder*/get _navBarHeroFlightShuttleBuilder() {
      return dart.fn((flightContext, animation, flightDirection, fromHeroContext, toHeroContext) => {
        if (!(animation != null)) dart.assertFailed();
        if (!(flightDirection != null)) dart.assertFailed();
        if (!(fromHeroContext != null)) dart.assertFailed();
        if (!(toHeroContext != null)) dart.assertFailed();
        if (!src__widgets__heroes.Hero.is(fromHeroContext.widget)) dart.assertFailed();
        if (!src__widgets__heroes.Hero.is(toHeroContext.widget)) dart.assertFailed();
        let fromHeroWidget = src__widgets__heroes.Hero._check(fromHeroContext.widget);
        let toHeroWidget = src__widgets__heroes.Hero._check(toHeroContext.widget);
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(fromHeroWidget.child)) dart.assertFailed();
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(toHeroWidget.child)) dart.assertFailed();
        let fromNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(fromHeroWidget.child);
        let toNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(toHeroWidget.child);
        if (!(fromNavBar.componentsKeys != null)) dart.assertFailed();
        if (!(toNavBar.componentsKeys != null)) dart.assertFailed();
        if (!(fromNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The from nav bar to Hero must have been mounted in the previous frame");
        if (!(toNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The to nav bar to Hero must have been mounted in the previous frame");
        switch (flightDirection) {
          case src__widgets__heroes.HeroFlightDirection.push:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: fromNavBar, topNavBar: toNavBar, $creationLocationd_0dea112b090073317d4: const$648 || (const$648 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2226, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$647 || (const$647 = dart.constList([const$644 || (const$644 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2227, column: 9, name: "animation"}))), const$645 || (const$645 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2228, column: 9, name: "bottomNavBar"}))), const$646 || (const$646 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2229, column: 9, name: "topNavBar"})))], src__widgets__widget_inspector._Location))})))});
            break;
          }
          case src__widgets__heroes.HeroFlightDirection.pop:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: toNavBar, topNavBar: fromNavBar, $creationLocationd_0dea112b090073317d4: const$653 || (const$653 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2233, column: 14, file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", parameterLocations: const$652 || (const$652 = dart.constList([const$649 || (const$649 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2234, column: 9, name: "animation"}))), const$650 || (const$650 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2235, column: 9, name: "bottomNavBar"}))), const$651 || (const$651 = dart.const(new src__widgets__widget_inspector._Location.new({line: 2236, column: 9, name: "topNavBar"})))], src__widgets__widget_inspector._Location))})))});
          }
        }
      }, BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition());
    }
  });
  src__cupertino__icons.CupertinoIcons = class CupertinoIcons extends core.Object {};
  (src__cupertino__icons.CupertinoIcons.__ = function() {
    ;
  }).prototype = src__cupertino__icons.CupertinoIcons.prototype;
  dart.addTypeTests(src__cupertino__icons.CupertinoIcons);
  dart.defineLazy(src__cupertino__icons.CupertinoIcons, {
    /*src__cupertino__icons.CupertinoIcons.iconFont*/get iconFont() {
      return "CupertinoIcons";
    },
    /*src__cupertino__icons.CupertinoIcons.iconFontPackage*/get iconFontPackage() {
      return "cupertino_icons";
    },
    /*src__cupertino__icons.CupertinoIcons.left_chevron*/get left_chevron() {
      return dart.const(new src__widgets__icon_data.IconData.new(62418, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage, matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.right_chevron*/get right_chevron() {
      return dart.const(new src__widgets__icon_data.IconData.new(62419, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage, matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.share*/get share() {
      return dart.const(new src__widgets__icon_data.IconData.new(62666, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.share_solid*/get share_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62667, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.book*/get book() {
      return dart.const(new src__widgets__icon_data.IconData.new(62439, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.book_solid*/get book_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62440, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark*/get bookmark() {
      return dart.const(new src__widgets__icon_data.IconData.new(62441, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark_solid*/get bookmark_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62442, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.info*/get info() {
      return dart.const(new src__widgets__icon_data.IconData.new(62540, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply*/get reply() {
      return dart.const(new src__widgets__icon_data.IconData.new(62662, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.conversation_bubble*/get conversation_bubble() {
      return dart.const(new src__widgets__icon_data.IconData.new(62459, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.profile_circled*/get profile_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62489, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.plus_circled*/get plus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62602, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.minus_circled*/get minus_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62563, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.flag*/get flag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62508, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.search*/get search() {
      return dart.const(new src__widgets__icon_data.IconData.new(62629, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark*/get check_mark() {
      return dart.const(new src__widgets__icon_data.IconData.new(62461, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled*/get check_mark_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62462, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled_solid*/get check_mark_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62463, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.back*/get back() {
      return dart.const(new src__widgets__icon_data.IconData.new(62415, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage, matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.forward*/get forward() {
      return dart.const(new src__widgets__icon_data.IconData.new(62417, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage, matchTextDirection: true}));
    },
    /*src__cupertino__icons.CupertinoIcons.home*/get home() {
      return dart.const(new src__widgets__icon_data.IconData.new(62535, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.shopping_cart*/get shopping_cart() {
      return dart.const(new src__widgets__icon_data.IconData.new(62455, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.ellipsis*/get ellipsis() {
      return dart.const(new src__widgets__icon_data.IconData.new(62570, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.phone*/get phone() {
      return dart.const(new src__widgets__icon_data.IconData.new(62648, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.phone_solid*/get phone_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62649, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.down_arrow*/get down_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62301, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.up_arrow*/get up_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62310, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_charging*/get battery_charging() {
      return dart.const(new src__widgets__icon_data.IconData.new(61713, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_empty*/get battery_empty() {
      return dart.const(new src__widgets__icon_data.IconData.new(61714, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_full*/get battery_full() {
      return dart.const(new src__widgets__icon_data.IconData.new(61715, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_75_percent*/get battery_75_percent() {
      return dart.const(new src__widgets__icon_data.IconData.new(61716, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.battery_25_percent*/get battery_25_percent() {
      return dart.const(new src__widgets__icon_data.IconData.new(61717, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.bluetooth*/get bluetooth() {
      return dart.const(new src__widgets__icon_data.IconData.new(61718, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.restart*/get restart() {
      return dart.const(new src__widgets__icon_data.IconData.new(61980, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply_all*/get reply_all() {
      return dart.const(new src__widgets__icon_data.IconData.new(61981, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.reply_thick_solid*/get reply_thick_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(61982, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.share_up*/get share_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(61984, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.shuffle_thick*/get shuffle_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(61985, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera*/get photo_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62453, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera_solid*/get photo_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62454, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera*/get video_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62668, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera_solid*/get video_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62669, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera*/get switch_camera() {
      return dart.const(new src__widgets__icon_data.IconData.new(62622, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera_solid*/get switch_camera_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62623, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.collections*/get collections() {
      return dart.const(new src__widgets__icon_data.IconData.new(62409, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.collections_solid*/get collections_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62410, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder*/get folder() {
      return dart.const(new src__widgets__icon_data.IconData.new(62516, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder_solid*/get folder_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62517, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.folder_open*/get folder_open() {
      return dart.const(new src__widgets__icon_data.IconData.new(62346, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete*/get delete() {
      return dart.const(new src__widgets__icon_data.IconData.new(62660, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete_solid*/get delete_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62661, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.delete_simple*/get delete_simple() {
      return dart.const(new src__widgets__icon_data.IconData.new(62335, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.pen*/get pen() {
      return dart.const(new src__widgets__icon_data.IconData.new(62143, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.pencil*/get pencil() {
      return dart.const(new src__widgets__icon_data.IconData.new(62334, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.create*/get create() {
      return dart.const(new src__widgets__icon_data.IconData.new(62487, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.create_solid*/get create_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62487, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh*/get refresh() {
      return dart.const(new src__widgets__icon_data.IconData.new(62618, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled*/get refresh_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62619, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled_solid*/get refresh_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62620, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thin*/get refresh_thin() {
      return dart.const(new src__widgets__icon_data.IconData.new(62621, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thick*/get refresh_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62376, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_bold*/get refresh_bold() {
      return dart.const(new src__widgets__icon_data.IconData.new(61980, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick*/get clear_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62167, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick_circled*/get clear_thick_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62318, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear*/get clear() {
      return dart.const(new src__widgets__icon_data.IconData.new(62468, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled*/get clear_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62469, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled_solid*/get clear_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62470, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.add*/get add() {
      return dart.const(new src__widgets__icon_data.IconData.new(62601, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled*/get add_circled() {
      return dart.const(new src__widgets__icon_data.IconData.new(62602, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled_solid*/get add_circled_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62603, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear*/get gear() {
      return dart.const(new src__widgets__icon_data.IconData.new(62524, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear_solid*/get gear_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62525, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.gear_big*/get gear_big() {
      return dart.const(new src__widgets__icon_data.IconData.new(62199, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.settings*/get settings() {
      return dart.const(new src__widgets__icon_data.IconData.new(62481, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.settings_solid*/get settings_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62482, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.music_note*/get music_note() {
      return dart.const(new src__widgets__icon_data.IconData.new(62571, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow*/get play_arrow() {
      return dart.const(new src__widgets__icon_data.IconData.new(62599, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow_solid*/get play_arrow_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62600, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.pause*/get pause() {
      return dart.const(new src__widgets__icon_data.IconData.new(62583, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.pause_solid*/get pause_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62584, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.loop*/get loop() {
      return dart.const(new src__widgets__icon_data.IconData.new(62537, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.loop_thick*/get loop_thick() {
      return dart.const(new src__widgets__icon_data.IconData.new(62538, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_down*/get volume_down() {
      return dart.const(new src__widgets__icon_data.IconData.new(62391, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_mute*/get volume_mute() {
      return dart.const(new src__widgets__icon_data.IconData.new(62392, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_off*/get volume_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(62393, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.volume_up*/get volume_up() {
      return dart.const(new src__widgets__icon_data.IconData.new(62394, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen*/get fullscreen() {
      return dart.const(new src__widgets__icon_data.IconData.new(62342, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen_exit*/get fullscreen_exit() {
      return dart.const(new src__widgets__icon_data.IconData.new(62333, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic_off*/get mic_off() {
      return dart.const(new src__widgets__icon_data.IconData.new(62559, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic*/get mic() {
      return dart.const(new src__widgets__icon_data.IconData.new(62560, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.mic_solid*/get mic_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62561, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clock*/get clock() {
      return dart.const(new src__widgets__icon_data.IconData.new(62654, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.clock_solid*/get clock_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62655, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.time*/get time() {
      return dart.const(new src__widgets__icon_data.IconData.new(62466, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.time_solid*/get time_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62467, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.padlock*/get padlock() {
      return dart.const(new src__widgets__icon_data.IconData.new(62664, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.padlock_solid*/get padlock_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62665, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.eye*/get eye() {
      return dart.const(new src__widgets__icon_data.IconData.new(62500, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.eye_solid*/get eye_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62501, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.person*/get person() {
      return dart.const(new src__widgets__icon_data.IconData.new(62589, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_solid*/get person_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62590, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_add*/get person_add() {
      return dart.const(new src__widgets__icon_data.IconData.new(62591, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.person_add_solid*/get person_add_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62592, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.group*/get group() {
      return dart.const(new src__widgets__icon_data.IconData.new(62587, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.group_solid*/get group_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62588, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.mail*/get mail() {
      return dart.const(new src__widgets__icon_data.IconData.new(62498, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.mail_solid*/get mail_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62499, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.location*/get location() {
      return dart.const(new src__widgets__icon_data.IconData.new(62549, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.location_solid*/get location_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62550, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.tag*/get tag() {
      return dart.const(new src__widgets__icon_data.IconData.new(62604, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.tag_solid*/get tag_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62605, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.tags*/get tags() {
      return dart.const(new src__widgets__icon_data.IconData.new(62606, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    },
    /*src__cupertino__icons.CupertinoIcons.tags_solid*/get tags_solid() {
      return dart.const(new src__widgets__icon_data.IconData.new(62607, {fontFamily: src__cupertino__icons.CupertinoIcons.iconFont, fontPackage: src__cupertino__icons.CupertinoIcons.iconFontPackage}));
    }
  });
  dart.trackLibraries("packages/flutter_web/src/cupertino/activity_indicator", {
    "package:flutter_web/src/cupertino/activity_indicator.dart": src__cupertino__activity_indicator,
    "package:flutter_web/src/cupertino/colors.dart": src__cupertino__colors,
    "package:flutter_web/src/cupertino/localizations.dart": src__cupertino__localizations,
    "package:flutter_web/src/cupertino/text_theme.dart": src__cupertino__text_theme,
    "package:flutter_web/src/cupertino/route.dart": src__cupertino__route,
    "package:flutter_web/src/cupertino/theme.dart": src__cupertino__theme,
    "package:flutter_web/src/cupertino/button.dart": src__cupertino__button,
    "package:flutter_web/src/cupertino/page_scaffold.dart": src__cupertino__page_scaffold,
    "package:flutter_web/src/cupertino/nav_bar.dart": src__cupertino__nav_bar,
    "package:flutter_web/src/cupertino/icons.dart": src__cupertino__icons
  }, '{"version":3,"sourceRoot":"","sources":["org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/colors.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/localizations.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/text_theme.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart","org-dartlang-app:///packages/flutter_web/src/cupertino/icons.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IA+Ba;;;;;;IAKE;;;;;;;AAIT;IAAkC;;;QApBhC;QACC,2DAAY;QACZ,kDAAS;;IADT;IACA;UACM,SAAS,IAAI;UACb,MAAM,IAAI;UACH,aAAP,MAAM,IAAG;AAChB,iGAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAuBb;MACN,oBAAc,4EACI,+DAAkB,cAC3B;AAGT,oBAAI,AAAO,wBAAW,AAAY;IACpC;oBAGgD;;MACxC,sBAAgB,SAAS;AAC/B,uBAAI,AAAO,uBAAa,AAAU,SAAD;AAC/B,sBAAI,AAAO;UACT,AAAY;;UAEZ,AAAY;;IAElB;;MAIE,AAAY;MACN;IACR;UAG0B;AACxB,YAAO,+CACiB,aAAd,AAAO,sBAAS,UACH,aAAd,AAAO,sBAAS,UAChB,kDACI,yFACG,2BACF,AAAO;IAIvB;;;IA1CoB;;;EA2CtB;;;;;;;;;;;UAyBoB,QAAa;MAC7B,AAAO,MAAD;MACN,AAAO,MAAD,WAAsB,aAAX,AAAK,IAAD,UAAS,KAAiB,aAAZ,AAAK,IAAD,WAAU;AAEvC,uBAA4C,CAAlB,aAAZ,+DAAc,AAAS;AAE/C,eAAS,IAAI,GAAG,AAAE,CAAD,gBAAG,iDAAe,IAAF,AAAE,CAAC,GAAH;AAClB,gBAC4C,CAAlC,AAAe,CAA/B,AAAE,CAAD,GAAG,UAAU,WAAI,+DAAe,6DAAuB,KAAK;AACxD,oBAAQ;QACpB,AAAM,KAAD,SAAe,eAAK,sDAAmB,gDAAa,CAAC;QAC1D,AAAO,MAAD,WAAW,2BAAsB,KAAK;QAC5C,AAAO,MAAD,QAAQ,AAAS,cAAR,2DAAU;;MAG3B,AAAO,MAAD;IACR;kBAGsD;;AACpD,0BAAO,AAAW,UAAD,WAAa;IAChC;;;QApCO;QACE;IADF;IAEoB,4BAAQ,yBACzB,cAAC,MAAM,GACP,AAAI,AAAS,mBAAP,MAAM,iBAAG,8DACf,AAAQ,cAAP,MAAM,IAAG,KACV,AAAK,AAAS,CAAb,mBAAM,MAAM,iBAAG,8DAChB,KACA;AACJ,6GAAe,QAAQ;;EAAC;;;;;;;;;;;;;MAjGnB,2DAAwB;YAAG;;MAgF3B,0CAAO;YAAW,cAAH,WAAK;;MACvB,8CAAW;YAAG;;MACd,kDAAe;YAAe,eAAZ,kDAAe;;MAC/B,8CAAW;YAAmB;;MAC9B,oDAAiB;YAAG,8BAAM;;;;;;ECrFjB;;;MAMA,iDAAU;YAAG,8BAAM;;MAOnB,kDAAW;YAAG,8BAAM;;MAMpB,mDAAY;YAAG,8BAAM;;MAUrB,4CAAK;YAAG,8BAAM;;MAUd,4CAAK;YAAG,8BAAM;;MAKd,0DAAmB;YAAG,8BAAM;;MAK5B,+DAAwB;YAAG,8BAAM;;MAKjC,yDAAkB;YAAG,8BAAM;;MAQ3B,mDAAY;YAAG,8BAAM;;MASrB,qDAAc;YAAG,8BAAM;;;;;;;ICjD5C;;+EApBK;;;;EAoBL;;;;;;;;;;;;;;;;IAuBA;;2EApBK;;;;EAoBL;;;;;;;;;;;;;;cAuJgD;AAC5C,YAAqB,oGACjB,OAAO,EAAE;IACf;;;;EACF;;;gBAO0B;AAAW,YAAA,AAAO,AAAa,OAAd,kBAAiB;IAAI;SAGnB;AACvC,YAA8B,kEAAK,MAAM;IAAC;iBAGI;;AAAQ;IAAK;;AAG1C;IAA+C;;;AAb9D;;EAAiC;;;;;;;;;;;mBAkEb;AAAc,YAAU,eAAV,SAAS;IAAW;oBAGjC;AAAe,YAAA,AAAO,4EAAY,aAAX,UAAU,IAAG;IAAE;yBAGjC;AAAa,YAAS,eAAT,QAAQ;IAAW;mBAGtC;AAAS,YAAK,eAAL,IAAI;IAAW;iCAGV;AAAS,YAAK,AAAW,eAAhB,IAAI,IAAc;IAAU;qBAGjD;AAAW,YAAO,AAAW,eAAlB,MAAM,YAAoB,GAAG;IAAI;mCAG9B;AACxC,UAAI,AAAO,MAAD,KAAI,GAAG,MAAO;AACxB,YAAc,AAAW,eAAlB,MAAM,IAAc;IAC7B;yBAGqC;AACnC,sBAAU,AAAc,kFAAc,aAAb,AAAK,IAAD,yBAAoB,0BAAQ,eAClD,AAAY,gFAAY,aAAX,AAAK,IAAD,uBAAkB,2BAAS,MACnC,AAAW,cAApB,AAAK,IAAD,iBAAyB;IACtC;;AAG+C,YAAoB;IAAG;;AAIlE,YAAwB;IAAmB;;AAGR;IAAI;;AAGJ;IAAI;;AAGZ;IAAO;oBAGX;AAAS,YAAK,eAAL,IAAI;IAAW;sBAGtB;AAAW,YAAO,eAAP,MAAM;IAAW;sBAG5B;AAAW,YAAO,eAAP,MAAM;IAAW;yBAGzB;AAAS,YAAA,AAAK,KAAD,KAAI,IAAI,SAAS;IAAO;2BAGnC;AAAW;IAAK;2BAGhB;AAAW;IAAK;;AAGrB;IAAK;;AAGJ;IAAM;;AAGL;IAAO;;AAGH;IAAY;gBAQG;AAChD,YAAO,uDACG;IACZ;;;;EAhIqC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEX,0EAAc;YAAW,iBACjD,OACA,OACA,OACA,OACA,OACA,OACA;;MAGwB,wEAAY;YAAW,iBAC/C,OACA,OACA,OACA,OACA,OACA,OACA,OACA,OACA,OACA,OACA,OACA;;MAGwB,mEAAO;YAAW,iBAC1C,WACA,YACA,SACA,SACA,OACA,QACA,QACA,UACA,aACA,WACA,YACA;;MA6FyD,oEAAQ;YAC/D;;;;;;;;;;;;;;AC5PiB,6CAA0B;IAAI;;;AAM/C;mBAAW,iBACV,kBAAW,qDAA0B;IAAuB;;;AAM/D,WAAO;mBAAiB,OACpB,AAAyB,qEAChB;IAEf;;;AAMI;mBAAmB,OAAG;IAA0B;;;AAMlD,WAAO;mBAAmB,iBACrB,kBACK,gEACA;IACZ;;;AAME,WAAO;mBAAwB,iBAC1B,kBACK,+DACA;IACZ;;;AAME,WAAO;mBAAoB,OACvB,AAAyB,qEAChB;IAEf;;;UAKQ;UACK;UACD;UACA;UACA;UACA;UACA;UACA;AAEV,YAAO,2EACsB,KAAb,YAAY,QAAC,OAAG,wCACP,MAAX,UAAU,SAAC,OAAG,sCACL,OAAV,SAAS,UAAC,OAAG,4CACS,OAAhB,eAAe,UAAC,OAAG,oDACC,OAAlB,iBAAiB,UAAC,OAAG,sDACH,OAAlB,iBAAiB,UAAC,OAAG,2DACO,OAAvB,sBAAsB,UAAC,OAAG,4DACX,OAAnB,kBAAkB,UAAC,OAAG;IAE9C;;;;QAhGQ;QACK;QACD;QACA;QACA;QACA;QACA;QACA;IACQ,uBAAe,KAAb,YAAY,QAAC,OAAmB;IACpC,oBAAE,UAAU;IACb,mBAAE,SAAS;IACL,yBAAE,eAAe;IACf,2BAAE,iBAAiB;IACnB,2BAAE,iBAAiB;IACd,gCAAE,sBAAsB;IAC5B,4BAAE,kBAAkB;AAhBxC;;EAgBwC;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAtGhC,kDAAuB;YAAG,kEAC/B,mBACG,0BACF,qBACK,CAAC,aACO,0DACI;;MAIb,iDAAsB;YAAG,kEAC9B,mBACG,0BACF,qBACK,CAAC,aACO,0DACI;;MAIb,mDAAwB;YAAG,kEAChC,mBACG,0BACF,qBACK,CAAC,aACO,+DACI;;MAIb,qDAA0B;YAAG,kEAClC,mBACG,0BACF,qBACK,CAAC,aACO;;MAGT,6DAAkC;YAAG,kEAC1C,mBACG,0BACF,kBACa,oCACR,CAAC,aACO;;MAGT,4DAAiC;YAAG,kEACzC,mBACG,0BACF,kBACa,oCACR,CAAC,aACO;;MAGT,4DAAiC;YAAG,kEACzC,mBACG,6BACF,kBACa,oCACR,aACQ;;MAGT,2DAAgC;YAAG,kEACxC,mBACG,6BACF,kBACa,oCACR,aACQ;;;;;;;;;;;;;;;;;;;;;;;;;;;;MCsBH;;;;;;MAOP;;;;;;MAuCF;;;;;;;cAnBP,wBAAkB,yBAClB;AAEF,cAAO;MACT;wBAGsC;AACvB,kCACK,4CAAd,aAAa,IAAyB,AAAc,aAAD,SAAS;AAChE,YAAI,AAAe,wBAAG;UACpB,uBAAiB,kCAAsB,mBAAmB;;UAE1D,AAAe,6BAAQ,mBAAmB;;QAEtC,wBAAkB,aAAa;MACvC;;AAMmC,cAAM,uEAAuB;MAAI;;AAG1C;MAAI;;AAGH;MAAI;wBAGiB;AAC9C,cAAqB,6CAAd,aAAa;MACtB;sBAG8C;AAE5C,cAAiB,AAAsB,6CAAhC,SAAS,gBAA2B,AAAU,SAAD;MACtD;;QAIE,AAAsB,sEAAO;QACvB;MACR;oCAQsD;AAClD,cAAA,AAAsB,yEAAS,KAAK;MAAC;;AAYR,+EAAuB;MAAK;;AAW/B,gFAAqB;MAAK;qCAEP;AAG/C,sBAAI,AAAM,KAAD,WAAU,MAAO;AAG1B,sBAAI,AAAM,KAAD,2BAA0B,MAAO;AAG1C,sBAAI,AAAM,KAAD,4BAA2B,MAAO;AAE3C,sBAAI,AAAM,KAAD,oBAAmB,MAAO;AAEnC,yBAAI,AAAM,AAAW,KAAZ,oBAAsC,sDAAW,MAAO;AAEjE,sBAAI,AAAsB,wEAAS,KAAK,IAAG,MAAO;AAGlD,cAAO;MACT;gBAG8B,SAA2B,WACnC;AACP,qBAAS,oDACP,0BACO,aACb,aAAQ,OAAO;uBAEjB,AAON;AANC,cAAI,AAAO,MAAD,KAAI;YACZ,WAAM,iDACF,sCAA0B,AAAS,sBAAK,wBACxC;;AAEN,gBAAO;;AAET,cAAO,OAAM;MACf;iCAMiB;aACR,WAAC,AAAsB,wEAAS,KAAK;uBACrC,iEAAqB,KAAK;QACjC,AAAsB,mEAAI,KAAK;AAEI;QACnC,iBAAiB,gFACJ,AAAM,KAAD,wBACJ,AAAM,KAAD,sBACR;;iBACP,cAAc;gCAAE;YAChB,iBAAiB;YACjB,AAAsB,sEAAO,KAAK;;AAGtC,cAAO,eAAc;MACvB;qCAiBe,OACA,SACK,WACA,oBACX;AAEP,sBAAI,AAAM,KAAD;AACP,gBAAO,+EACM,SAAS,SACb,KAAK;;AAGd,gBAAO,+EACkB,SAAS,2BACP,kBAAkB,oBAGzB,AAAsB,wEAAS,KAAK,UAC/C,oFACY,cAAM,iEAAwB,KAAK,qCACjC,cAAM,6DAAoB,KAAK,uFAC3C,KAAK;;MAIpB;uBAGqC,SAA2B,WAC1C,oBAA2B;AAC/C,cAAO,kEACH,MAAM,OAAO,EAAE,SAAS,EAAE,kBAAkB,EAAE,KAAK;MACzD;;AAGyB,cAAuC,UAA9B,oBAAW,eAAG,AAAS,sBAAK;MAAE;;;UAxO/C;UACV;UACS;UACT,uEAAgB;UAChB,gFAAmB;MAmBJ;MAvBL;MACV;MAEA;YAEM,OAAO,IAAI;YACX,aAAa,IAAI;YACjB,gBAAgB,IAAI;AAC3B,6DAAgB,QAAQ,oBAAoB,gBAAgB;qBAEzD;IACT;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAqFqC,8DAAqB;YACtD;;;;;;;;;;;;;;;;;;;;;;;IAwLS;;;;;;UAGa;qBACjB,gDAA4B,OAAO;AACtB,0BAA+B,sCAAG,OAAO;AAC7D,YAAO,8DACK,kDACK,aAAa,qBACT,cACZ,6DACK,gDACK,aAAa,SACrB,sEACO,sCACL;IAIf;;;QAnDM;QACwB;QACA;QACb;QACA;;IADA;UAEJ,gBAAgB,IAAI;IACD,kCAOrB,WAPwB,gBAAgB,IACnC,qBAAqB,GACrB,4DACU,qBAAqB,SACf,qDACO,0DAEtB;IACiB,oCAAE,AAI5B,4DAHQ,uBAAuB,SACjB,qDACO,yDACf;IACgB,gCAAE,AAGxB,4DAFQ,qBAAqB,SACf,oFACR;AACR,iFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;IAiDR;;;;;;UAGa;AACxB,YAAO,8DACK,iCACH;IAEX;;;QAnBM;QACwB;QACb;;;IACQ,2BAAE,AAChB,AACA,SAFyB,oBACnB,iDAAyB,6DACzB;AACX,6FAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;AA8CjB;MAAuC;;;UAjBrC;UACW;UACA;UACA;;MAFA;MACA;MACA;YACJ,eAAe,IAAI;YACnB,iBAAiB,IAAI;YACrB,KAAK,IAAI;AAChB,mEAAW,GAAG;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAqBb;QACN,0BAAc,6EAA4C,QACtD,uBAAU,yBACV,wBAAW,0BACX,qBAAQ,uBACR,wBAAW;MACjB;;QAIE,AAAY;QACN;MACR;yBAEuC;uBAC9B;cACA,AAAuB,gCAAG;QACjC,+BAAyB,AAAO;MAClC;0BAEyC;uBAChC;cACA,gCAA0B;QACjC,AAAuB,wCACnB,wBAAuC,aAArB,AAAQ,OAAD,8BAAgB,AAAQ,AAAK;MAC5D;uBAEmC;uBAC1B;cACA,gCAA0B;QACjC,AAAuB,qCAAQ,wBACS,aAApC,AAAQ,AAAS,AAAgB,OAA1B,6CAA+B,AAAQ,AAAK;QACvD,+BAAyB;MAC3B;;;uBAGS;aAGP;4BAAwB,WAAQ;QAChC,+BAAyB;MAC3B;2BAEyC;AACvC,sBAAI,AAAO,gCAAmB,AAAY,6BAAW,KAAK;MAC5D;0BAEgC;AAC9B,gBAAuB,sCAAG;cACL;;AACjB,kBAAO,eAAC,KAAK;;cACI;;AACjB,kBAAO,MAAK;;;AAEhB,cAAO;MACT;YAG0B;uBACjB,gDAA4B,OAAO;AAGnC,4BAA2C,YAAZ,sCAAG,OAAO,GAAmB,yBAClD,AAAY,AAAQ,wCAAjB,OAAO,iBACV,AAAY,AAAQ,wCAAjB,OAAO;QAC3B,gBAAgB,sBAAI,aAAa,EAAE;AACnC,cAAO,yCACS,sDACI,sBAChB,AAAO,mBACP,0DACS,YACA,aAAa,OACf,aACG,YACD,+DACU,qCACW;MAKpC;;;MAxFmC;MAEH;;;IAuFlC;;;;;;;;;;;;;;;;;;;;;;;;;;;iBAyCyB;;aACrB;QAAW,WAAM,aAAN,yBAAS,KAAK;MAC3B;cAIoB;AAIlB,YAAI,AAAS,AAAM,QAAP,yBAAU;UACpB,AAAW,iCAAgB,cAAC,QAAQ;cAC/B,KAAqB,aAAjB,AAAW,0BAAS;UAC7B,AAAW,iCAAgB,CAAC;;UAE5B,AAAW,iCAAgB;;uBAEtB,AAAW;0BACX,AAAW,wBAA0B;0BACrC,AAAW,wBAA0B;QAG5C,mBAAa;QACb,AAAW,4CAAkB;MAC/B;6BAE0C;uBACjC;QACP,AAAW,+CAAqB;QAChC,mBAAa;AACb,YAAW,YAAP,MAAM,EAAoB,sDAC5B,AAAU;QAEZ;MACF;;AAGE,sBAAI,mBAAY,AAAW,+CAAqB;QAChD,AAAU;MACZ;;;UA7DiB;UACA;UACA;MAgBZ,mBAAa;MAlBD;MACA;MACA;YACJ,SAAS,IAAI;YACb,UAAU,IAAI;YACd,OAAO,IAAI;MACtB,AAAU;IACZ;;;;;;;;;;;;;;;;;;;;;;gBAiGiC,GACA,GACxB;;YAEA,CAAC,IAAI;AACZ,UAAI,AAAE,CAAD,IAAI,QAAQ,AAAE,CAAD,IAAI,MAAM,MAAO;AACnC,YAAO,6EACwB,6CAAQ,KAAH,CAAC,sBAAE,mBAAiB,MAAH,CAAC,uBAAE,mBAAc,CAAC;IAEzE;aAGmD,GAAU;AAC3D,WAAM,wDAAF,CAAC,GACH,MAAsC,2DAAK,MAAM,MAAM,CAAC;AAC1D,YAAsC,uHAAK,CAAC,GAAE,MAAM,CAAC;IACvD;WAGiD,GAAU;AACzD,WAAM,wDAAF,CAAC,GACH,MAAsC,2DAAK,MAAM,MAAM,CAAC;AAC1D,YAAsC,2DAAK,kEAAM,CAAC,GAAE,CAAC;IACvD;qBAG2D;;AACzD,YAAO,2DAA4B,MAAM,SAAS;IACpD;;UAGyB;AACvB,uBAAI,oBAAqB,iBAAN,KAAK,IAAc,MAAO;AACR,mFAAa,KAAK;AACvD,YAAoB,aAAb,mBAAgB,AAAW,UAAD;IACnC;;AAGoB,YAAa,eAAb;IAAqB;wBAGY;MAC7C,0BAAoB,UAAU;MACpC,AACK,UADK,KACD,gDAAoC,gBAAgB;IAC/D;;;QA3E2C;;AAArC;;EAAmD;;;;;;;;;;;;;;;MAIb,yDAAI;YAC5C;;;;;UAoFc,QAAe,QAA2B;;AACrC,qBAAW,AAAY;AAC5C,UAAI,AAAS,QAAD,IAAI,MAAM;AAGF,0BAAgB,AAAc,aAAD;YAC1C,aAAa,IAAI;AACjB;cACC,aAAa;YACA;;UACjB,SAAS,AAAc,AAAK,aAAN;AACtB;;YACiB;;UACjB,SAAS,cAAC,AAAc,AAAK,aAAN;AACvB;;;AAEO,iBAAQ,AAAO,AAAsB,MAAvB,MAAG,AAAc,aAAD,iBAAiB,MAAM,EAAE;AACtD,wBAAQ,qBAChB,YAAS,AAAS,QAAD,cAAc,IAAI,kBAAiB,aAAa;MAErE,AAAO,MAAD,UAAU,IAAI,EAAE,KAAK;IAC7B;;oEA7BO,aACQ;IADR;UAEM,WAAW,IAAI;AACtB,+EAAM,QAAQ;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;MAuCR;;;;;;;AAGa;MAAmB;;AAGd;MAAI;;AAGF;MAAK;;AAGH;MAA8B;;cAQxD,AAAW,oBAAG;QACrB,mBAAa,4DACG,gCACA,kDACO,AAAK;QAE5B,qBAAe,kCACA,sDAAO,KAAK,aACd,sDAAO,KAAK;AAEzB,cAAO;MACT;gBAG8B,SAA2B,WACnC;AACpB,cAAO,cAAQ,OAAO;MACxB;uBAGqC,SAA2B,WAC1C,oBAA2B;AAC/C,cAAO,+CACgB,wDACd,gEACQ,AAAa,4BAAS,0BAC5B,KAAK;MAGlB;;;UAzDO;UACA;UACS;MAoBE;MAEJ;MAxBP;MACA;AAEF,oEAAgB,QAAQ;;IAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;QAkFP;QACC;AAExB,UAAiB,AAAiC,sCAA9B,OAAO,kBAAiB,eAC1C,wEACW,OAAO,gBACF;EAGpB;oEAMiB,SACK,WACA,oBACX;AACa,wBAAgB,4DAC5B,SAAS,SACH;AAEhB,QAAqB,YAAjB,AAAU,SAAD,SAA2B;AACtC,YAAO,4DACI,aAAa,SACf,KAAK;;AAGhB,UAAO,4DACI,aAAa,SACf,0DACE,KAAK,SACL,AAAU,SAAD,oBAAO;EAG7B;;QAgCyB;QACC;UAEjB,OAAO,IAAI;AAClB,UAAO,qDACI,OAAO,sBACI,qBACN,+DACY,wEAAuB,sBACpC,SAAc,SAA2B,WAChC,uBACb,AAAO,OAAA,CAAC,OAAO,uFAEL;EAEvB;;MA94Ba,wCAAkB;YAAG;;MACrB,wCAAkB;YAAG;;MAGtB,yCAAmB;YAAG,8BAAM;;MAGzB,oDAA8B;YAAG,iDAAuB;;MAG9C,wCAAkB;YAAG,mCAC/B,8BAAO,KAAK,YACb;;MAIW,uCAAiB;YAAG,mCAC7B,sBACH,8BAAO,AAAK,CAAJ,MAAM,KAAK;;MAIP,qCAAe;YAAG,mCAC5B,8BAAO,KAAK,YACb;;MAKQ,2CAAqB;YAAG,mEACN,gEAC3B,uFACK,kEAEL,iEAAqB,KAAM,YACR,iEAEX,gBACb,6BAAM,KACN,6BAAM,YACN,6BAAM,aACN,6BAAM,iCAEO,gBAAC,KAAK,KAAK,KAAK;;MA2xBZ,kCAAY;YAAG,AACnC,mCADwD,UAAU,YAC5D,iDAAyB;;;;;ICtyBT;;;;;;uBAGc;;AAAc,qCAAQ,AAAU,SAAD;IAAK;cAMjC;;AACnB,8DACjB,AAAQ,OAAD,8BAA8B;AACzC,aAAc,KAAP,KAAK,sBAAE;oBAAK,OAAS;IAC9B;;;QArBM;QACW;QACE;;IADF;UAEJ,KAAK,IAAI;UACT,IAAI,IAAI;AACf,wEAAW,GAAG,SAAS,KAAK;;EAAC;;;;;;;;;;;;;;;;;;;;;AAsEd,YAAW,aAAX,iBAAyB;IAAK;;;AAStB;mBAAY,OAAc;IAAK;;;AAe1D,WAAO;mBAAc,iBAChB,mBAA2B,oDAA6B;IAC/D;;;AAYE,WAAO;mBAAyB,iBAC3B,mBAA2B,+CAAwB;IAC1D;;;AAUE,WAAO;mBAAW,OACd,uEACc,+BACE;IAEtB;;;AASE,WAAO;mBAAoB,iBACtB,mBACK,yDACA;IACZ;;;AAQE,WAAO;mBAAyB,iBAC3B,mBAA2B,+CAAwB;IAC1D;;AAUE,YAAO,4DACL,oBACA,sBACA,iCACA,mBACA,4BACA;IAEJ;;;UAUa;UACL;UACA;UACiB;UACjB;UACA;AAEN,YAAO,gEACkB,KAAX,UAAU,QAAC,OAAG,yCACC,MAAb,YAAY,SAAC,OAAG,uDAEF,OAAxB,uBAAuB,UAAC,OAAG,qDACV,OAAV,SAAS,UAAC,OAAG,gDACe,OAAnB,kBAAkB,UAAC,OAAG,8DAEd,OAAxB,uBAAuB,UAAC,OAAG;IAEnC;wBAGqD;MAC7C,0BAAoB,UAAU;AACX,wBAAc;MACvC,AAAW,UAAD,KAAK,qCAAyB,cAAc,gCACpC,AAAY,WAAD;MAC7B,AAAW,UAAD,KAAK,uCAA2B,gBAAgB,kCACxC,AAAY,WAAD;MAC7B,AAAW,UAAD,KAAK,uCACX,2BAA2B,6CACb,AAAY,WAAD;MAC7B,AAAW,UAAD,KAAK,wDACX,aAAa,+BACC,AAAY,WAAD;MAC7B,AAAW,UAAD,KAAK,uCACX,sBAAsB,wCACR,AAAY,WAAD;MAC7B,AAAW,UAAD,KAAK,uCACX,2BAA2B,6CACb,AAAY,WAAD;IAC/B;;;QA9Ka;QACL;QACA;QACiB;QACjB;QACA;4DAEA,UAAU,EACV,YAAY,EACZ,uBAAuB,EACvB,SAAS,EACT,kBAAkB,EAClB,uBAAuB;EACxB;2DAQA,aACA,eACA,0BACA,YACA,qBACA;IALA;IACA;IACA;IACA;IACA;IACA;AAND;;EAOL;;;;;;;;;;;;;;;;;;;;;;;;;;;IAwKgB;;;;;;IAEL;;;;;;IAEA;;;;;;IAEiB;;;;;;IAEjB;;;;;;IAEA;;;;;;;qEA1BL,YACA,cACA,yBACA,WACA,oBACA;IALA;IACA;IACA;IACA;IACA;IACA;AACG,gFACF,UAAU,EACV,YAAY,EACZ,uBAAuB,EACvB,SAAS,EACT,kBAAkB,EAClB,uBAAuB;;EACxB;;;;;;;;;;;;;;;;;;MArQG,sDAAgC;YAAG,8BAAM;;MACzC,qDAA+B;YAAG,8BAAM;;;;;;IC8CrC;;;;;;IAKY;;;;;;IAKb;;;;;;IAQA;;;;;;IAKO;;;;;;IAUN;;;;;;IAOA;;;;;;IAKM;;;;;;;AAIC,+BAAa;IAAI;;AAGE;IAAuB;wBAGT;MAC7C,0BAAoB,UAAU;MACpC,AACK,UADK,KACD,kDAAa,mBAAkB,uBAAkB;IAC5D;;;QAzEiB;QACV;QACA;QACA;QACA,qDAAU;QACV,0EAAiB;QACjB,oEAAqB,qFAAwB,2DAAS;QAC5C;;IAPA;IACV;IACA;IACA;IACA;IACA;IACA;IACU;UACL,AAAe,AAAQ,cAAT,IAAI,QACJ,aAAf,cAAc,KAAI,OAAsB,aAAf,cAAc,KAAI;AAVhD;;EAUqD;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MA+EnD;MACN,6BAAuB,4EACL,wEAAuB,gBAChC,YACA;MAET,0BAAoB,AACf,AACA,8CADM,iDAAyB,+DACzB;MACX;IACF;oBAGqC;;MAC7B,sBAAgB,GAAG;MACzB;IACF;;;MAGE,AAAc,2BAA4B,KAAtB,AAAO,kCAAe,OAAG;IAC/C;;MAIE,AAAqB;MACrB,6BAAuB;MACjB;IACR;qBAImC;AACjC,qBAAK;QACH,wBAAkB;QAClB;;IAEJ;mBAE+B;AAC7B,oBAAI;QACF,wBAAkB;QAClB;;IAEJ;;AAGE,oBAAI;QACF,wBAAkB;QAClB;;IAEJ;;AAGE,oBAAI,AAAqB,yCAAa;AAC3B,wBAAc;AACN,6BAAS,yBACtB,AAAqB,qCAAU,gBAAe,kEAC9C,AAAqB,qCAAU,gBAAe;MACpD,AAAO,MAAD,iBAAY,QAAM;AACtB,sBAAI,8BAAW,WAAW,EAAI,wBAAiB;;IAEnD;UAG0B;;AACb,oBAAU,AAAO;AAChB,4BAAkB,AAAO;AAErC,YAAO,mEACqB,uEACf,OAAO,cAAG,wBAAiB,yBAC7B,OAAO,cAAG,sBAAe,6BACrB,OAAO,cAAG,0BAAmB,aACnC,AAAO,8BACP,+CACG,aACD,yDACQ,AAAO,AAAQ,uBAAG,OACnB,oFACN,sDACY,AAAO,gCACN,AAAO,8BAEnB,2DACI,gCACF,0DACO,mEACI,AAAO,iCACd,AAAwB,eAAT,IAAI,mBAAS,OAAO,KACf,KAArB,AAAO,iCAAc,OAAG,oDACxB,eAAe,WAEhB,+CACmB,MAAf,AAAO,4BAAQ,OACnB,AACG,eADY,IAAI,OACd,mDACA,sDACH,iDACQ,mBACC,YACP,oDACE,AACH,eADkB,IAAI,OACpB,+DACA,OAAO,IACH,2CACA,yDACH,AAAO;IAShC;;;IA1HoB,sBAAgB,kCAAqB;IAErC;IACF;IAiCb,wBAAkB;;;EAuFzB;;;;;;;;;;;;;;;;;;;MA7HwB,6DAAgB;YAAG,iDAAuB;;MAC1C,4DAAe;YAAG,iDAAuB;;;;MAtHrD,2CAAoB;YAAG,8BAAM;;MAC7B,2CAAoB;YAAG,8BAAM;;MAEzB,wCAAiB;YAAG,qEACtB,wBACH,iBACC,qBACK,CAAC,kBACO,4BACA,iEACI;;MAGb,gDAAyB;YAAG,AAAkB,2DACrD;;MAGO,kDAA2B;YAAG,AAAkB,2DACvC;;MAGR,sCAAe;YAAc,0DAAI;;MACjC,gDAAyB;YAAc,2EAC5C,kBACE;;;;;;;;;;;;;;;;;;;;;;;;;;;;;ICKyB;;;;;;IAQxB;;;;;;IAKD;;;;;;IASD;;;;;;UAGe;AACL,oBAAkB;AAE9B,0BAAgB;AACvB,UAAI,sBAAiB;AACE,iCAAgC,wCAAG,OAAO;AAIlD,yBAC0B,aAAnC,AAAc,AAAc,wDAAS,AAAmB,AAAQ,kBAAT;AAG9C,sCACT,iCAA2B,AAAmB,AAAW,kBAAZ,qBAAqB;AAKtE,sBAAI,AAAc;UAChB,gBAAgB,8CACM,qDAAU,UAAU,UAAU,aAAa,WACxD;;UAGT,gBAAgB,oDACR,AAAmB,kBAAD,oBACb,AAAmB,AAAQ,kBAAT,wBACpB,UAAU,aAGZ,8CACe,wDAAa,aAAa,WACvC;;;MAOf,AAAQ,OAAD,OAAK,aAAa;AAEzB,UAAI,sBAAiB;QACnB,AAAQ,OAAD,OAAK,6CACL,WACC,YACC,YACA;;AAIX,YAAO,2DACO,4DAAqB,+BAC1B,6CACK,OAAO;IAGvB;;;QAnGM;QACC;QACA,6EAAkC;QAClC,wGAA2B;QACjB;;IAHV;IACA;IACA;IACU;UACJ,KAAK,IAAI;UACT,wBAAwB,IAAI;AACnC,uFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;EA0GvB;;;;AC1DM,YAAA,AAA0E,6EAAV;IAAU;;UAGtD;AACtB,UAAI,AAAU,SAAM,KAAK;AACvB,cAAO;;AAET,uBAAU,iBAAN,KAAK,GAAgB;AACvB,cAAO;;AAEM,6DAAW,KAAK;AAC/B,YAAiB,aAAV,gBAAa,AAAS,QAAD;IAC9B;;AAIE,YAAO,uBAAiB;IAC1B;;;IAxBoB;;EAAU;;;;;;;;;;;;;;;IAqKjB;;;;;;IAmBF;;;;;;IASA;;;;;;IAaE;;;;;;IAQA;;;;;;IAMA;;;;;;IASD;;;;;;IAegB;;;;;;IAOf;;;;;;IAOD;;;;;;IAmBD;;;;;;IAiBE;;;;;;;AAIe,YAAA,AAAgB,AAAM,gCAAG;IAAI;;AAIvD,YAAa,8DAAgB;IAC/B;;AAIE,YAAO;IACT;;;QAhLM;QACC;QACA,2GAA4B;QAC5B,wGAA2B;QAC3B;QACA;QACA;QACA,kDAAS;QACT,6EAAkB;QAClB;QACA,kGAAyC;QACzC,qGAA0B;QAC1B,qDAAU;;IAXV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,yBAAyB,IAAI;UAC7B,wBAAwB,IAAI;UAC5B,uBAAuB,IAAI;UAE9B,OAAO,IAAI,yBACX,oEACA;UAEyB,WAAxB,uBAAuB,KAAI,eAAU,OAAO,EAAE,6DAC/C,uEACA;AACJ,kFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAmKb;MACN,YAAO;IACT;UAG0B;AACa,uBACjC,sEACI,kBACY,gDAAG,OAAO,gBACf,AAAO,gDACO,AAAO,gEACT,AAAO,yDACb,AAAO,2CACd,AAAO,kCACL,AAAO,+BACZ,AAAO,6CACQ,AAAO,oDACf,aACT;AAGI,mBAAS,qDACZ,AAAO,qCACE,AAAO,oCACjB,sEACO,UAAU,WACb,AAAO;AAIpB,qBAAK,AAAO,mDAA4B,0CAAkB,OAAO;AAC/D,cAAO,OAAM;;AAGf,YAAO,yCACe,YAAf,AAAO,qBAAW,2CACjB,yCAAmB,qCAAG,OAAO,KAC7B,AAAO,sCACI,sFACG,2EACE,mFACI,aACnB,8EACW,4BACC,AAAO,qDACA,AAAO,4CACvB,AAAO,mCACA,AAAO,sBAAU,qBACjB,cACR,MAAM;IAGnB;;;IAzDmC;;;EA0DrC;;;;;;;;;;;IAiGe;;;;;;IAKA;;;;;;IAGF;;;;;;IASA;;;;;;IAGE;;;;;;IAQA;;;;;;IAKA;;;;;;IAGD;;;;;;IAGgB;;;;;;IAGf;;;;;;IAOD;;;;;;IAGD;;;;;;IAGE;;;;;;;AAGM,YAAA,AAAgB,AAAM,gCAAG;IAAI;;AAI5C;IAAoC;;;QA1GlC;QACC;QACA;QACA,2GAA4B;QAC5B,qGAA0B;QAC1B;QACA;QACA;QACA,kDAAS;QACT,6EAAkB;QAClB;QACA,kGAAyC;QACzC,qGAA0B;QAC1B,qDAAU;;IAZV;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACM,yBAAyB,IAAI;UAC7B,uBAAuB,IAAI;UAEN,AAAQ,YAAhC,uBAAuB,EAAI,SAAQ,UAAU,IAAI,yBACjD,yEACA,0EACA;AACJ,wFAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAiGb;MACN,YAAO;IACT;UAG0B;AACa,uBACjC,sEACI,kBACY,gDAAG,OAAO,gBACf,AAAO,gDACO,AAAO,gEACT,AAAO,wDACb,AAAO,2CACd,AAAO,kCACL,AAAO,sCACL,AAAO,iCACd,AAAO,6CACQ,AAAO,2CACxB;AAGT,YAAO,gFACG,gBACE,8EACF,uBACM,UAAU,cACV,AAAO,qCACF,AAAO,qCAChB,AAAO,6BACN,AAAO,6CACQ,AAAO,6DACN,AAAO,8CACvB,AAAO,uCAEa,aAAzB,iEAAsC,AAAY,AAAQ,wCAAjB,OAAO,kCAClC,AAAO,sBAAU;IAGzC;;;IA3CmC;;;EA4CrC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAiC0B;IAAgB;;AAGhB,YAAiB,cAAjB,sCAAmB;IAAiC;UAI3D,SAAgB,cAAmB;AACvC,2BACM,aAAb,YAAY,IAAa,AAAY,aAAtB,+BAAY,+BAAY;AAEZ,oCAC3B,sEACU,0BACH,uCAGM,yBAAmB,OAAO,CAAC,cAAc;AAG7C,mBAAS,qDACZ,8BACS,6BACV,wCACS,iDACI,sBAChB,6CACO,6BACC,YACC,aACC,YACD,6CAIE,oDACM,gBACO,iCACc,kEACzB,8CACU,uGACN,qDACC,gBAEH,+CACA,eACG,cACD,oEACI,cAAc,GAAG,MAAM,eACtB,0DACH,+CACG,aACD,oDACE,yDACG,aACa,wDAChB,AAAW,2uLASlC,8CACQ,YACC,UACF,YACE,uBAAuB;AAMtC,qBAAK,4CAA4B,0CAAkB,OAAO;AACxD,cAAO,OAAM;;AAGf,YAAO,yCACQ,YAAR,cAAW,2CACV,yCAAmB,qCAAG,OAAO,KAC7B,+BACW,wFACK,6EACF,+EACM,aAInB,8EACW,4BACC,8CACO,qCAChB,4BACO,mBAAc,qBACd,cAAc,SACtB,MAAM;IAGnB;kBAG0D;;AACxD,YAQqD,cAR9C,iBAAc,AAAY,WAAD,6BAC5B,iBAAc,AAAY,WAAD,6BACzB,sBAAmB,AAAY,WAAD,kCAC9B,aAAU,AAAY,WAAD,yBACrB,cAAW,AAAY,WAAD,0BACtB,6BAA0B,AAAY,WAAD,yCACrC,8BAA2B,AAAY,WAAD,6BACtC,yBAAoB,AAAY,WAAD,kCAC/B,uBAAoB,AAAY,WAAD,mCAC/B,cAAW,AAAY,WAAD;IAC5B;;;QA9IiB;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;QACA;IAVA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;IACA;UACJ,gBAAgB,IAAI;UACpB,gBAAgB,IAAI;UACpB,uBAAuB,IAAI;AAdxC;;EAc6C;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA0JnB;AACjB,mBAAS,AAAW;AAE3B,UAAI,MAAM,IAAI;QACZ,SAAS,oDACA,uDACA,+CAAkB,aAAa,MAAM;QAI9C,SAAS,AAAc,sBAAG,OACpB,MAAM,GACN,8EACW,sBAAgB,MAAM,eACrB,0DACH,MAAM;;AAIhB,oBAAU,AAAW;AACf,wBAAc,AAAW;AACzB,sBAAY,AAAW;AAEpC,UAAI,AAAQ,OAAD,IAAI,QAAQ,WAAW,IAAI,QAAQ,SAAS,IAAI;QACzD,UAA2C,uEACzC,WAAW,EACX,SAAS,EACT,AAAW;;AAIR,0BAAgB,qEACZ,OAAO,UACR,MAAM,YACJ,AAAW,wCACP,qBACC;AAGjB,UAAI,gBAAW;QACb,gBAAgB,8CACM,qDACb,AAAQ,0BACL,AAAQ,8BAEX,aAAa;;AAIxB,YAAO,+CAC4B,aAAzB,iEAAsC,AAAY,AAAQ,wCAAjB,OAAO,uBACjD,kDACG,cACD,aAAa;IAG1B;;;QAvEM;QACC;QACA;QACA;;IAFA;IACA;IACA;AACF,oFAAW,GAAG;;EAAC;;;;;;;;;;;;;;IA+ED,oBAAE,oDAAsB;IAC1B,kBAAE,oDAAsB;IACpB,sBAAE,oDAAsB;IAC1B,oBAAE,oDAAsB;IAC3B,iBAAE,oDAAsB;IACtB,mBAAE,oDAAsB;IACtB,qBAAE,oDAAsB;;EAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA0EnD;UACe;AAGpB,oBAAI,uBAAuB,KACV,4CAAb,YAAY,KACZ,AAAa,YAAD,UAAU;AACxB,cAAO,iCAAK,AAAa,YAAD;;AAG1B,YAAO;IACT;;;UAMyB;UACJ;UACa;UACf;UACiB;UAChB;AACX;AAEP,UAAI,WAAW,IAAI;QACjB,iBAAiB,WAAW;YACvB,eAAI,yBAAyB,KAC1B,iCAAN,KAAK,eACL,AAAM,KAAD,sBACL,AAAM,KAAD;QACP,iBAAiB,uDACF,qEAAK,2eACE,uDACT;YACT,AAAM,AAAU,KAAX;;;AAKX,UAAI,AAAe,cAAD,IAAI;AACpB,cAAO;;AAGT,YAAO,gDACA,UAAU,SACR,8CAC0B,mEACP,OAAN,KAAT,OAAO,sBAAE,kBAAM,OAAG,6DAEpB,oDACE,yCAAiB,sBAAsB,UAC7B,gDACT,4DACG,sBAAsB,QACvB,eAED,cAAc;IAK/B;;UAIsB;UACH;UACa;UACf;AAEf,UAAI,WAAW,IAAI,mBACd,yBAAyB,KAC1B,AAAM,KAAD,IAAI,mBACR,AAAM,KAAD,YACC,iCAAN,KAAK,eAAiB,AAAM,KAAD;AAC9B,cAAO;;AAGT,YAAO,gDAAkB,cAAc,SAAe;IACxD;;UAMsB;UACH;UACa;UACf;UACE;AAEjB,UAAI,WAAW,IAAI,mBACd,yBAAyB,KAC1B,AAAM,KAAD,IAAI,mBACR,AAAM,KAAD,YACC,iCAAN,KAAK,eAAiB,AAAM,KAAD;AAC9B,cAAO;;AAGT,YAAO,gDACA,YAAY,SACV,oEACmB,iBAAiB,SAClC,KAAK;IAGlB;;UAMsB;UACH;UACA;UACF;UACA;UACe;AAEvB,0BAAgB,UAAU;AAEjC,oBAAI,KAAK;QACP,AAAc,aAAD,IAAC,OAAd,gBAAkB,cAAc,GAAlB;;MAGhB,AAAc,aAAD,IAAC,OAAd,gBAAkB,+FACS,uBAAuB,gBAClC,KAAK,KAFP;AAKd,UAAI,AAAc,aAAD,IAAI;AACnB,cAAO;;AAGT,YAAO,gDACA,SAAS,SACP,aAAa;IAExB;;;UAIsB;UACH;UACe;UAChB;AAEhB,UAAI,AAAa,YAAD,IAAI;AAClB,cAAO;;AAGT,YAAO,gDACA,WAAW,SACT,8CAC0B,iEACX,OAAJ,KAAT,OAAO,sBAAE,gBAAI,OAAG,6DAEhB,oDACE,yCAAiB,sBAAsB,UAC7B,gDACT,4DACG,sBAAsB,QACvB,eAED,YAAY;IAK7B;;;UAMsB;UACH;UACF;UACA;UACe;AAE9B,qBAAK,KAAK;AACR,cAAO;;AAGI,+BAAmC,KAAf,cAAc,QAAC,OAC5C,+FAC2B,mBAAmB,gBAC9B,KAAK;YAIvB,iBAAiB,IAAI,yBACrB;AAGF,YAAO,gDACA,aAAa,SACX,iBAAiB;IAE5B;;;QAjQ+C;QACf;QACb;QACF;QACA;QACE;QACA;QACA;QACA;QACe;QACjB;QACA;IADA;IAEH,eAAE,kFACI,AAAK,IAAD,0BACH,WAAW,SACjB,KAAK,6BACe,yBAAyB,WAC3C,OAAO,0BACQ,sBAAsB;IAEpC,mBAAE,0FACI,AAAK,IAAD,8BACP,WAAW,SACjB,KAAK,6BACe,yBAAyB;IAE5C,iBAAE,sFACI,AAAK,IAAD,4BACL,WAAW,SACjB,KAAK,qBACO,iBAAiB,6BACT,yBAAyB;IAE/C,cAAE,gFACI,AAAK,IAAD,wBACH,UAAU,kBACN,cAAc,SACvB,KAAK,2BACa,uBAAuB,SACzC,KAAK;IAEL,gBAAE,oFACI,AAAK,IAAD,4BACH,YAAY,WACjB,OAAO,0BACQ,sBAAsB;IAErC,kBAAE,wFACI,AAAK,IAAD,gCACH,cAAc,SACvB,KAAK,uBACS,uBAAuB,SACrC,KAAK;;EACb;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAgPK;;;;;;IAKC;;;;;;UAOa;;AACE,yBAA0B,gDAAG,OAAO;qBAE5D,AAAa,YAAD,4BACZ;AAGF,YAAO,wDACE,kDACM,wBACO,aACX,gBACC,aACD,yDAEK,2FAAyB,+DAC5B,oDACE,yCAAiB,oBACjB,+CACsB,0DACU,wDACnB,sBACV,mFAAuC,uGAAY,qeAC5C,KAAb,2BAAa,OAAS,kbAChB,mFAAuC,uGAAY,oeACzD,8CACoB,MAAX,0BAAW,OACd,oEAC0B,+BACjB,YAAY,w+HAQjB,uDACT;UACC,wDAAS,OAAO;;IAGhC;;;QAxEiB;QACV;;IADU;IACV;IACY,sBAAE;IACJ,oBAAE;UACN,KAAK,IAAI;AALhB;;EAKqB;iFAKpB,cACA,YACA;;IAFA;IACA;IACA;IACiB,4BAAE;UACb,KAAK,IAAI;AALhB;;EAKqB;;;;;;;;;;;;;;;;;;;;;;;;;UAkED;;AACJ,0BAA+B,sCAAG,OAAO;AAC7C,sBAA6B,AAAY,uCAAT,OAAO;AAIhD,uBAAkB,iCACvB,iDACe,yBAA4B,AAAK,6DACvC,sDACI,cACF,AAAU,SAAD,kBACN,kBACiB,AAAK,+DACR,AAAK;cAI3B,aAAa;YACA;;UACjB,aAAa,wDACQ,oCAAY,SAAM,CAAC,KAAK,KAAK,sBAC3B,8DACF,cACZ,UAAU;AAEnB;;YACiB;;AACjB;;;AAGJ,YAAO,WAAU;IACnB;;;QAnCwB;;AAAQ,wEAAW,GAAG;;EAAC;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;gCAsD9B,SAAgB,eAAsB;AACrD,UAAI,AAAc,aAAD,IAAI;AACnB,cAAa,oFAAiB,YAAY;;AAGvC,uBAAa,gCAChB,aAAa,aACH,aACa;AAGzB,UAAI,AAAc,AAAO,aAAR,UAAU;QACzB,aAAmB,qEAAK;;AAG1B,YAAO,+CAC2B,wEACnB,YACN,UAAU;IAErB;UAG0B;AACxB,UAAI,+BAA0B;AAC5B,cAAO,iCAA0B,OAAO,EAAE,6BAAwB;YAC7D,KAAU,4CAAN;AACyB,6EAAiB;AAInD,cAAO,8DACY,AAAe,cAAD,mCACtB;;AAGX,cAAa,oFAAiB,YAAY;;IAE9C;;;QAlDM;QACW;QACA;;IADA;IACA;UACJ,KAAK,IAAI;AAChB,sEAAW,GAAG;;EAAC;;;;;;;;;;;;;;AA+EH,qDACZ,AAAe,AAAa,AAAe;qBAE7C,AAAI,GAAD,8BACH,2EACA,6EACA;AAEF,YAAO,IAAG;IACZ;UAG0B;qBACjB,AAwBN;AAvBM;QACL,AAAQ,OAAD,uBAAuB,QAAS;AACrC,cAAa,4CAAT,QAAQ;8BAEQ,iBAAhB,AAAS,QAAD,UAAuB,oFAC/B,gEACA,yEACA,wEACA;AAEF,gBAAgC,YAAZ,iBAAhB,AAAS,QAAD,UAAuB;cACjC,SAAS;;;UAGb,AAAO,MAAD,IAAC,OAAP,SAAW,QAAJ;AACP,gBAAO;;aAGA,YAAP,MAAM,EAAI,yBACV,wEACA;AAEF,cAAO;;AAET,YAAO;IACT;;;QA3DiB;QACA;QACA;QACA;QACA;QACA;QACA;;IANA;IACA;IACA;IACA;IACA;IACA;IACA;UACJ,cAAc,IAAI;UAClB,aAAa,IAAI;AACxB,wFAAW,AAAe,cAAD;;EAAc;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;UA+FnB;AACiB,iCACrC,+EACS,8BACG,8BACH,gCACoB,sCAAG,OAAO;AAGxB,qBAAmB,sBAGpC,8DACa,yBACF,SAAc,SAAgB,UAC9B,oEAEkB,wBACN,AAAgB,8BAAS,yBAClC,AAAY,0BAAS,wBACtB,8CACG,AAAY,0BAAS,wBACf,gvCAMtB,AAAqB,oBAAD,oBACpB,AAAqB,oBAAD,kBACpB,AAAqB,oBAAD,gBACpB,AAAqB,oBAAD,eACpB,AAAqB,oBAAD,mBACpB,AAAqB,oBAAD,iBAEpB,AAAqB,oBAAD,aACpB,AAAqB,oBAAD,iBACpB,AAAqB,oBAAD,eACpB,AAAqB,oBAAD,YACpB,AAAqB,oBAAD,gBACpB,AAAqB,oBAAD;MAGtB,AAAS,QAAD,eAAa,QAAQ,SAAU,AAAM,KAAD,IAAI;AAMhD,YAAO,+CACG,AAA6C,sBAApC,AAAY,wBAAO,AAAY,qCACjC,AAAY,AAAQ,wCAAjB,OAAO,uBACX,6BACP,6CACK,QAAQ;IAGxB;;;QAlFiB;QACA;QACA;;IAFA;IACA;IACA;IACC,mBAAE,kCACL,AAAa,AAAU,AAAK,YAAhB,6BACd,AAAU,AAAU,AAAK,SAAhB;IAEA,uBAAE,iDACT,AAAa,YAAD,uBACd,AAAU,SAAD;IAEJ,mBAAE,8DACL,AAAa,YAAD,cACd,AAAU,SAAD;AAdtB;;EAeO;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4BAwJK;UACU;AAEJ,8DAAe,AAAI,AAAe,GAAhB;qBAC3B,AAAa,YAAD;AAEnB,YAAoB,6CAClB,AAAa,AAA2C,YAA5C,eAAsB,4BAAgB,IAAI,QAClD,AAAa,YAAD,QAChB;IAEJ;;UAasB;UACA;UACA;UACA;AAED,qBACf,6BAAwB,OAAO,SAAQ,aAAa;AAExC,yDAAU,AAAQ,AAAe,OAAhB;AACjB,uDAAQ,AAAM,AAAe,KAAhB;AAKxB,mBAAS,AACL,AAIA,AAAiE,KALvD,eAEF,4BACG,WAAW,aAEZ,KAAK,AAAqB,AAAI,cAAxB,AAAQ,AAAK,OAAN,gBAAe,IAAsB,aAAlB,AAAM,AAAK,KAAN,gBAAe,QACnE,AAAQ,OAAD;AAEX,UAAqB,aAAjB,yBAAmB;QAGrB,SAAS,AAAO,MAAD,WAAW,AAAoB,cAAnB,AAAQ,AAAK,OAAN,4BAAc,AAAM,AAAK,KAAN,cAAa;;AAGpE,YAAO,6DACE,QAAQ,OACG,4CAAS,MAAM,EAAE;IAEvC;eAEoC;UAAU,+CAAe;AAC3D,YAAO,AAAU,mCAAM,AAAO,wEAC5B,iDAAkB,wCAAS,CAAC,EAAE,aAAY,KAAK;IAEnD;cAEmC;UAAU,+CAAe;AAC1D,YAAO,AAAU,mCAAM,AAAQ,yEAC7B,iDAAkB,wCAAS,KAAK,CAAC,UAAS,KAAK;IAEnD;;AAGqB,kEACf,AAAiB,AAAW;AAEhC,UAAI,AAAc,aAAD,IAAI;AACnB,cAAO;;AAGT,YAAkB,4DACV,6BAAwB,AAAiB,yCACrC,+BACH,2DACI,eAAU,aACZ,AAAc,aAAD;IAG1B;;AAGqB,sEACf,AAAiB,AAAe;AAEpC,UAAI,AAAkB,iBAAD,IAAI;AACvB,cAAO;;AAGT,YAAkB,4DACV,6BAAwB,AAAiB,6CACrC,+BACH,2DACI,eAAU,aACZ,oDACE,gCACA,AAAkB,iBAAD;IAIhC;;AAGqB,oEACf,AAAiB,AAAa;AAElC,UAAI,AAAgB,eAAD,IAAI;AACrB,cAAO;;AAGU,iBAAO,6BACtB,AAAiB,2CACX;AAGc,0BAAgB,4DAC/B,IAAI,OACN,AAAK,IAAD,OACP,mBACmB,aAAjB,0BAAoB,AAA4B,cAA3B,AAAgB,AAAK,mCAAQ,MAClD;AAKN,YAAO,+DACC,AAAU,yDAAM,aAAa,UAC5B,2DACI,eAAU,aACZ,oDACE,gCACA,AAAgB,eAAD;IAI9B;;AAGqB,iEAAe,AAAiB,AAAU;AAC1C,iEAAe,AAAc,AAAa;AAC1C,+DAAa,AAAc,AAAW;AAIzD,qBAAK,uCAAuB;AAC1B,cAAO;;AAGT,UAAI,YAAY,IAAI,QAAQ,YAAY,IAAI;AAE1C,cAAO,+DACC,AAAU,yDAAM,oCACX,AAAiB,gDACX,6BACR,AAAc,8CACR,6BAER,2DAEI,yBAAU,4BAAsB,MAAM,aACxC,8CAG2B,kEACzB,qEACE,AAAU,0DAAM,iEACd,qDACF,gCAEA,AAAa,YAAD;;AAU7B,UAAI,YAAY,IAAI,QAAQ,UAAU,IAAI;AACxC,cAAkB,4DACV,6BAAwB,AAAiB,wCACrC,+BACH,2DACI,yBAAU,4BAAsB,MAAM,aAExC,oDACE,uDACA,AAAa,YAAD;;AAM3B,YAAO;IACT;;AAGqB,qEACf,AAAiB,AAAc;AAChB,iEAAe,AAAc,AAAa;AAC1C,+DAAa,AAAc,AAAW;AAEzD,UAAI,AAAiB,gBAAD,IAAI,mBAAS;AAC/B,cAAO;;AAGT,UAAI,gBAAgB,IAAI,QAAQ,YAAY,IAAI;AAE9C,cAAO,+DACC,AAAU,yDAAM,oCACX,AAAiB,oDACX,6BACR,AAAc,8CACR,6BAER,2DACI,eAAU,aACZ,8CAG2B,kEACzB,qEACE,AAAU,0DAAM,iEACd,oDACF,mCAEG,aACa,wDAChB,AAAiB,gBAAD;;AAOjC,UAAI,gBAAgB,IAAI,QAAQ,UAAU,IAAI;AAGzB,mBAAO,6BACtB,AAAiB,4CACX;AAEc,4BAAgB,4DAC/B,IAAI,OACN,AAAK,IAAD,OACP,mBACmB,AAA6B,aAA9C,sCAAmB,AAAgB,AAAK,mCAAQ,KAChD;AAON,cAAO,+DACC,AAAU,yDAAM,aAAa,UAC5B,2DACI,eAAU,aAEZ,oDACE,sDACA,AAAiB,gBAAD;;AAM/B,YAAO;IACT;;AAGqB,mEACf,AAAiB,AAAY;AAEjC,UAAI,AAAe,cAAD,IAAI;AACpB,cAAO;;AAGT,YAAkB,4DACV,6BAAwB,AAAiB,0CACrC,+BACH,2DACI,eAAU,aACZ,AAAe,cAAD;IAG3B;;AAGqB,+DAAa,AAAc,AAAW;AAEzD,UAAI,AAAW,UAAD,IAAI;AAChB,cAAO;;AAGT,YAAkB,4DAEZ,6BAAwB,AAAc,sCAAkB,4BACrD,2DACI,gBAAW,aACb,AAAW,UAAD;IAGvB;;AAGqB,mEACf,AAAc,AAAe;AACd,sEACf,AAAiB,AAAe;AAEpC,UAAI,AAAe,cAAD,IAAI;AACpB,cAAO;;AAGU,eAAK,6BACpB,AAAc,0CACR;AACG,iBAAO,EAAE;AAItB,UAAI,AAAkB,iBAAD,IAAI;AACP,qEACZ,AAAc,AAAe,AAAe;QAChD,OAAO,AAAG,EAAD,OACP,mBACmB,AAA+B,aAAhD,sCAAmB,AAAkB,AAAK,iBAAN,eAAc,KAClD;;AAKkB,0BAAgB,4DAC/B,IAAI,OACN,EAAE;AAGT,YAAO,+DACC,AAAU,yDAAM,aAAa,UAC5B,2DACI,gBAAW,AAAkB,iBAAD,IAAI,OAAO,MAAM,aAC/C,oDACE,6BACA,AAAe,cAAD;IAI7B;;;AAGqB,iEAAe,AAAiB,AAAU;AAC1C,qEACf,AAAiB,AAAc;AAChB,iEAAe,AAAc,AAAa;AAE7D,UAAI,AAAa,YAAD,IAAI;AAClB,cAAO;;AAGmB,wFACmB,KAA3C,AAAc,AAAa,oEAAgB,8BACjC;AAEI;AAClB,UAAI,mBAAmB,IAAI,QACW,aAAlC,AAAoB,AAAQ,mBAAT,kBAAiB;QACtC,kBAAkB,AAAU,kCAAM,kCACzB,UACF,AAAoB,AAAQ,mBAAT;;AAS5B,UAAI,gBAAgB,IAAI,QACpB,YAAY,IAAI,kBAChB;AACF,cAAO,+DACC,AAAU,yDAAM,oCACX,AAAiB,oDACX,6BACR,AAAc,8CACR,6BAER,4DACoB,MAAhB,eAAe,SAAC,OAAG,gBAAW,oBAChC,qEACE,AAAU,0DAAM,iEACd,oDACF,mCAEG,aACa,wDAChB,AAAa,YAAD;;AAQ3B,UAAI,YAAY,IAAI,QAAQ,YAAY,IAAI;AAC1C,cAAO,+DACC,AAAU,yDAAM,oCACX,AAAiB,gDACX,6BACR,AAAc,8CACR,6BAER,4DACoB,OAAhB,eAAe,UAAC,OAAG,gBAAW,qBAChC,qEACE,AAAU,0DAAM,iEACd,qDACF,gCAEA,AAAa,YAAD;;AAM3B,YAAO;IACT;;AAGqB,8DAAY,AAAc,AAAU;AAEvD,UAAI,AAAU,SAAD,IAAI;AACf,cAAO;;AAKT,qBAAK,oCAAoB;AACvB,cAAO;;AAGU,eACf,6BAAwB,AAAc,qCAAiB;AAGnC,0BAAgB,4DAC/B,AAAG,EAAD,OACP,mBACmB,AAA0B,aAA3C,sCAAmB,AAAa,AAAK,gCAAQ,KAC7C,YAGC,EAAE;AAGT,YAAO,+DACC,AAAU,yDAAM,aAAa,UAC5B,2DACI,gBAAW,cACb,oDACE,uDACA,AAAU,SAAD;IAIxB;;AAGqB,gEAAc,AAAc,AAAY;AAE3D,UAAI,AAAY,WAAD,IAAI;AACjB,cAAO;;AAGT,YAAkB,4DACV,6BAAwB,AAAc,uCAClC,4BACH,2DACI,gBAAW,aACb,AAAY,WAAD;IAGxB;;AAGqB,kEACf,AAAc,AAAc;AAEhC,UAAI,AAAc,aAAD,IAAI,mBAAS;AAC5B,cAAO;;AAGU,eAAK,6BAAwB,AAAc,yCACpD;AAGc,0BAAgB,4DAC/B,AAAG,EAAD,OACP,mBACmB,aAAjB,sCAAmB,AAAa,AAAK,+BACrC,YAGC,EAAE;AAGT,YAAO,+DACC,AAAU,yDAAM,aAAa,UAC5B,2DACI,gBAAW,aACb,oDACE,yDACG,aACa,wDAChB,AAAc,aAAD;IAI5B;;;QAxkBiB;QACwB;QACA;QACf;IAHT;IAIM,wBAAE,AAAa,YAAD;IACjB,qBAAE,AAAU,SAAD;IACT,uBAAE,AAAa,YAAD;IACjB,oBAAE,AAAU,SAAD;IACL,0BACf,yCAAiB,AAAa,YAAD;IACjB,uBAAE,yCAAiB,AAAU,SAAD;IACxB,2BAAE,AAAa,YAAD;IACjB,wBAAE,AAAU,SAAD;IACR,2BAAE,AAAa,YAAD;IACjB,wBAAE,AAAU,SAAD;IACd,qBAEV,AAAa,AAAU,AAClB,YADO,uCACS,AAAU,AAAU,SAAX;IACjB,wBAAiB,YAAf,cAAc,EAAkB,yBAAM,MAAM,CAAC;;EAAG;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;MAEzC,kEAAO;YAAG,mCACjC,UACF;;MAEyB,iEAAM;YAAG,mCAChC,UACF;;;;;;;;;;;;sDAp9CwB;AAC/B,UAAO,0DACO,yBACF,qBACK,CAAC,aACT,KAAK;EAEhB;;QAQS;QACD;QACC;QACF,+FAAwB;AAEtB,iBAAS,KAAK;AACrB,kBAAI,qBAAqB;AACZ,2BAAoD,aAAnC,AAAgB,eAAD,uBAAsB;AACtC,yBACvB,cAAc,GAAwB,0DAA6B;MACvE,SAAS,0DACA,YAAY,SACZ,aACA,MAAM;;AAGE,8BAAsB,0DAC3B,6DACF,MAAM,SACP,eAAe,WAEjB,MAAM;AAGf,QAAI,AAAgB,AAAM,eAAP,WAAU,KAAM,MAAO,oBAAmB;AAE7D,UAAO,oBAAmB;EAQ5B;uDAGoC;AACR,gBAAmB,gDAAG,OAAO;AAKvD,UAAa,AAAa,kCAAnB,KAAK,gBAAkB,AAAM,KAAD;EACrC;;;;;;;;;;;;;;;;;;;MAvIa,gDAAwB;YAAG;;MAI3B,yDAAiC;YAAG;;MAIpC,uDAA+B;YAAG;;MAElC,2CAAmB;YAAG;;MAEtB,kDAA0B;YAAG;;MAG3B,iDAAyB;YAAG,iDAAuB;;MAEtD,sDAA8B;YAAG,8BAAM;;MACvC,kDAA0B;YAAG,8BAAM;;MAElC,6CAAqB;YAAG,8DAC3B,6DACC,2DACA,YACY;;MAIP,8CAAsB;YAAG,qEAC3B,yBACF,kBACa,oCACR,CAAC,aACO;;MAGT,6CAAqB;YAAG,qEAC1B,6BACF,kBACa,oCACR,aACQ;;MAKV,uCAAe;YAAG,qDAAS;;MAoiE1B,gEAAwC;YACpD,UAAM,OAAY;AACT,0BAAc,iBACvB,sBAAS,AAAM,AAAK,KAAN,aAAa,AAAI,AAAK,GAAN,cAC9B,sBAAS,AAAM,AAAK,KAAN,cAAc,AAAI,AAAK,GAAN;AAEjC,cAAO,iDACE,AAAM,AAAQ,KAAT,cAAW,WAAW,QAC7B,AAAI,AAAQ,GAAT,cAAW,WAAW;;;;MAIV,mDAA2B;YAAG,UACvC,SACN;aAEM,wDAAN,KAAK;AAYZ,cAAO,4DACS,yBACK,qBACJ,eACN,cACF,KAAK;;;MAKe,uDAA+B;YAAG,UAClD,eACK,WACE,iBACP,iBACA;cAEN,SAAS,IAAI;cACb,eAAe,IAAI;cACnB,eAAe,IAAI;cACnB,aAAa,IAAI;aACM,6BAAvB,AAAgB,eAAD;aACM,6BAArB,AAAc,aAAD;AAET,8DAAiB,AAAgB,eAAD;AAChC,4DAAe,AAAc,aAAD;aAEX,wDAArB,AAAe,cAAD;aACK,wDAAnB,AAAa,YAAD;AAEgB,qFAAa,AAAe,cAAD;AAC3B,mFAAW,AAAa,YAAD;cAEnD,AAAW,UAAD,mBAAmB;cAC7B,AAAS,QAAD,mBAAmB;cAGhC,AAAW,AAAe,AAAa,AAAe,UAA5C,qDAAqD,yBAC/D;cAGA,AAAS,AAAe,AAAa,AAAe,QAA5C,qDAAqD,yBAC7D;gBAGM,eAAe;cACI;;AACvB,kBAAO,sEACM,SAAS,gBACN,UAAU,aACb,QAAQ;AAErB;;cACuB;;AACvB,kBAAO,sEACM,SAAS,gBACN,QAAQ,aACX,UAAU;;;;;;;;;EC/pET;;;MAGE,6CAAQ;YAAG;;MAGX,oDAAe;YAAG;;MAKhB,iDAAY;YAAG,qDAAS,oBAC9B,4DACC,0EACO;;MAGF,kDAAa;YAAG,qDAAS,oBAC/B,4DACC,0EACO;;MAQF,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAQlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAOlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAOlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAOlC,mDAAc;YAChC,qDAAS,oBAAoB,4DAAuB;;MAGlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAKlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAGlC,wDAAmB;YACrC,qDAAS,oBAAoB,4DAAuB;;MAGlC,oDAAe;YACjC,qDAAS,oBAAoB,4DAAuB;;MAGlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAGlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAGlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAGlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAQlC,uDAAkB;YACpC,qDAAS,oBAAoB,4DAAuB;;MAOlC,6DAAwB;YAC1C,qDAAS,oBAAoB,4DAAuB;;MAGlC,yCAAI;YAAG,qDAAS,oBACtB,4DACC,0EACO;;MAGF,4CAAO;YAAG,qDAAS,oBACzB,4DACC,0EACO;;MAGF,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAGlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAGlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAGlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAGlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAGlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAGlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAGlC,qDAAgB;YAClC,qDAAS,oBAAoB,4DAAuB;;MAGlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAGlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAGlC,uDAAkB;YACpC,qDAAS,oBAAoB,4DAAuB;;MAGlC,uDAAkB;YACpC,qDAAS,oBAAoB,4DAAuB;;MAGlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MAGlC,4CAAO;YACzB,qDAAS,oBAAoB,4DAAuB;;MAGlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MAKlC,sDAAiB;YACnC,qDAAS,oBAAoB,4DAAuB;;MAKlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAGlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAQlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAQlC,uDAAkB;YACpC,qDAAS,oBAAoB,4DAAuB;;MAQlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAQlC,uDAAkB;YACpC,qDAAS,oBAAoB,4DAAuB;;MAOlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAOlC,wDAAmB;YACrC,qDAAS,oBAAoB,4DAAuB;;MAOlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAOlC,sDAAiB;YACnC,qDAAS,oBAAoB,4DAAuB;;MAQlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MAQlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAOlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAOlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MAOlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAOlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAOlC,wCAAG;YACrB,qDAAS,oBAAoB,4DAAuB;;MAOlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MASlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MASlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAUlC,4CAAO;YACzB,qDAAS,oBAAoB,4DAAuB;;MAQlC,oDAAe;YACjC,qDAAS,oBAAoB,4DAAuB;;MAQlC,0DAAqB;YACvC,qDAAS,oBAAoB,4DAAuB;;MAOlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAQlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAQlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MAQlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAQlC,wDAAmB;YACrC,qDAAS,oBAAoB,4DAAuB;;MAQlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAQlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAOlC,wDAAmB;YACrC,qDAAS,oBAAoB,4DAAuB;;MAQlC,wCAAG;YACrB,qDAAS,oBAAoB,4DAAuB;;MAQlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAQlC,sDAAiB;YACnC,qDAAS,oBAAoB,4DAAuB;;MASlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAQlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAQlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAQlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAQlC,mDAAc;YAChC,qDAAS,oBAAoB,4DAAuB;;MAGlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAOlC,qDAAgB;YAClC,qDAAS,oBAAoB,4DAAuB;;MAOlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAOlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAOlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MASlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MASlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MASlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MASlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAOlC,oDAAe;YACjC,qDAAS,oBAAoB,4DAAuB;;MAQlC,4CAAO;YACzB,qDAAS,oBAAoB,4DAAuB;;MAQlC,wCAAG;YACrB,qDAAS,oBAAoB,4DAAuB;;MAQlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MASlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MASlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MASlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MASlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAOlC,4CAAO;YACzB,qDAAS,oBAAoB,4DAAuB;;MAOlC,kDAAa;YAC/B,qDAAS,oBAAoB,4DAAuB;;MAOlC,wCAAG;YACrB,qDAAS,oBAAoB,4DAAuB;;MAOlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MASlC,2CAAM;YACxB,qDAAS,oBAAoB,4DAAuB;;MASlC,iDAAY;YAC9B,qDAAS,oBAAoB,4DAAuB;;MASlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MASlC,qDAAgB;YAClC,qDAAS,oBAAoB,4DAAuB;;MAQlC,0CAAK;YACvB,qDAAS,oBAAoB,4DAAuB;;MAQlC,gDAAW;YAC7B,qDAAS,oBAAoB,4DAAuB;;MAGlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAGlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB;;MAGlC,6CAAQ;YAC1B,qDAAS,oBAAoB,4DAAuB;;MAGlC,mDAAc;YAChC,qDAAS,oBAAoB,4DAAuB;;MAOlC,wCAAG;YACrB,qDAAS,oBAAoB,4DAAuB;;MAOlC,8CAAS;YAC3B,qDAAS,oBAAoB,4DAAuB;;MAOlC,yCAAI;YACtB,qDAAS,oBAAoB,4DAAuB;;MAOlC,+CAAU;YAC5B,qDAAS,oBAAoB,4DAAuB","file":"activity_indicator.ddc.js"}');
  // Exports:
  return {
    src__cupertino__activity_indicator: src__cupertino__activity_indicator,
    src__cupertino__colors: src__cupertino__colors,
    src__cupertino__localizations: src__cupertino__localizations,
    src__cupertino__text_theme: src__cupertino__text_theme,
    src__cupertino__route: src__cupertino__route,
    src__cupertino__theme: src__cupertino__theme,
    src__cupertino__button: src__cupertino__button,
    src__cupertino__page_scaffold: src__cupertino__page_scaffold,
    src__cupertino__nav_bar: src__cupertino__nav_bar,
    src__cupertino__icons: src__cupertino__icons
  };
});

//# sourceMappingURL=activity_indicator.ddc.js.map
