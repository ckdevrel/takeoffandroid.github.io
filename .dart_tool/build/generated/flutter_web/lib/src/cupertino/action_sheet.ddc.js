define(['dart_sdk', 'packages/flutter_web/animation', 'packages/flutter_web/src/animation/animation', 'packages/flutter_web_ui/ui', 'packages/flutter_web/src/foundation/assertions', 'packages/flutter_web/src/gestures/arena', 'packages/vector_math/vector_math_64', 'packages/flutter_web/src/services/clipboard'], function(dart_sdk, animation, animation$, ui, assertions, arena, vector_math_64, clipboard) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _js_helper = dart_sdk._js_helper;
  const math = dart_sdk.math;
  const _interceptors = dart_sdk._interceptors;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const src__widgets__framework = animation.src__widgets__framework;
  const src__animation__animation_controller = animation.src__animation__animation_controller;
  const src__widgets__basic = animation.src__widgets__basic;
  const src__widgets__scrollbar = animation.src__widgets__scrollbar;
  const src__widgets__media_query = animation.src__widgets__media_query;
  const src__widgets__scroll_notification = animation.src__widgets__scroll_notification;
  const src__widgets__notification_listener = animation.src__widgets__notification_listener;
  const src__widgets__widget_inspector = animation.src__widgets__widget_inspector;
  const src__widgets__ticker_provider = animation.src__widgets__ticker_provider;
  const src__widgets__navigator = animation.src__widgets__navigator;
  const src__widgets__heroes = animation.src__widgets__heroes;
  const src__widgets__localizations = animation.src__widgets__localizations;
  const src__widgets__scroll_physics = animation.src__widgets__scroll_physics;
  const src__widgets__scroll_configuration = animation.src__widgets__scroll_configuration;
  const src__widgets__app = animation.src__widgets__app;
  const src__widgets__icon = animation.src__widgets__icon;
  const src__painting__edge_insets = animation.src__painting__edge_insets;
  const src__widgets__icon_theme = animation.src__widgets__icon_theme;
  const src__widgets__pages = animation.src__widgets__pages;
  const src__painting__decoration = animation.src__painting__decoration;
  const src__widgets__debug = animation.src__widgets__debug;
  const src__widgets__transitions = animation.src__widgets__transitions;
  const src__rendering__stack = animation.src__rendering__stack;
  const src__rendering__proxy_box = animation.src__rendering__proxy_box;
  const src__widgets__routes = animation.src__widgets__routes;
  const src__widgets__implicit_animations = animation.src__widgets__implicit_animations;
  const src__widgets__gesture_detector = animation.src__widgets__gesture_detector;
  const src__rendering__box = animation.src__rendering__box;
  const src__widgets__container = animation.src__widgets__container;
  const src__painting__box_decoration = animation.src__painting__box_decoration;
  const src__widgets__text = animation.src__widgets__text;
  const src__widgets__preferred_size = animation.src__widgets__preferred_size;
  const src__rendering__custom_paint = animation.src__rendering__custom_paint;
  const src__rendering__flex = animation.src__rendering__flex;
  const src__widgets__safe_area = animation.src__widgets__safe_area;
  const src__widgets__scroll_controller = animation.src__widgets__scroll_controller;
  const src__rendering__object = animation.src__rendering__object;
  const src__rendering__custom_layout = animation.src__rendering__custom_layout;
  const src__widgets__single_child_scroll_view = animation.src__widgets__single_child_scroll_view;
  const src__painting__box_border = animation.src__painting__box_border;
  const src__painting__borders = animation.src__painting__borders;
  const src__widgets__sliver_persistent_header = animation.src__widgets__sliver_persistent_header;
  const src__rendering__paragraph = animation.src__rendering__paragraph;
  const src__widgets__navigation_toolbar = animation.src__widgets__navigation_toolbar;
  const src__widgets__value_listenable_builder = animation.src__widgets__value_listenable_builder;
  const src__widgets__annotated_region = animation.src__widgets__annotated_region;
  const src__widgets__visibility = animation.src__widgets__visibility;
  const src__animation__animations = animation$.src__animation__animations;
  const src__animation__curves = animation$.src__animation__curves;
  const src__animation__animation = animation$.src__animation__animation;
  const src__painting__text_style = animation$.src__painting__text_style;
  const src__widgets__icon_data = animation$.src__widgets__icon_data;
  const src__widgets__icon_theme_data = animation$.src__widgets__icon_theme_data;
  const src__painting__gradient = animation$.src__painting__gradient;
  const src__painting__image_provider = animation$.src__painting__image_provider;
  const src__animation__tween = animation$.src__animation__tween;
  const src__painting__alignment = animation$.src__painting__alignment;
  const src__painting__border_radius = animation$.src__painting__border_radius;
  const src__painting__text_span = animation$.src__painting__text_span;
  const ui$ = ui.ui;
  const src__foundation__diagnostics = assertions.src__foundation__diagnostics;
  const src__foundation__change_notifier = assertions.src__foundation__change_notifier;
  const src__foundation__assertions = assertions.src__foundation__assertions;
  const src__foundation__synchronous_future = assertions.src__foundation__synchronous_future;
  const src__gestures__monodrag = arena.src__gestures__monodrag;
  const src__gestures__drag_details = arena.src__gestures__drag_details;
  const src__gestures__events = arena.src__gestures__events;
  const src__gestures__tap = arena.src__gestures__tap;
  const vector_math_64$ = vector_math_64.vector_math_64;
  const src__services__system_chrome = clipboard.src__services__system_chrome;
  const src__cupertino__scrollbar = Object.create(dart.library);
  const src__cupertino__text_theme = Object.create(dart.library);
  const src__cupertino__colors = Object.create(dart.library);
  const src__cupertino__app = Object.create(dart.library);
  const src__cupertino__theme = Object.create(dart.library);
  const src__cupertino__route = Object.create(dart.library);
  const src__cupertino__localizations = Object.create(dart.library);
  const src__cupertino__icons = Object.create(dart.library);
  const src__cupertino__button = Object.create(dart.library);
  const src__cupertino__page_scaffold = Object.create(dart.library);
  const src__cupertino__activity_indicator = Object.create(dart.library);
  const src__cupertino__action_sheet = Object.create(dart.library);
  const src__cupertino__nav_bar = Object.create(dart.library);
  const $isNotEmpty = dartx.isNotEmpty;
  const $add = dartx.add;
  const $abs = dartx.abs;
  const $floor = dartx.floor;
  const $runtimeType = dartx.runtimeType;
  const $toString = dartx.toString;
  const $_get = dartx._get;
  const $padLeft = dartx.padLeft;
  const $padRight = dartx.padRight;
  const $modulo = dartx['%'];
  const $clamp = dartx.clamp;
  const $isEmpty = dartx.isEmpty;
  const $isFinite = dartx.isFinite;
  const $length = dartx.length;
  const $insert = dartx.insert;
  const $_equals = dartx._equals;
  const $removeWhere = dartx.removeWhere;
  let VoidToNull = () => (VoidToNull = dart.constFn(dart.fnType(core.Null, [])))();
  let NotificationListenerOfScrollNotification = () => (NotificationListenerOfScrollNotification = dart.constFn(src__widgets__notification_listener.NotificationListener$(src__widgets__scroll_notification.ScrollNotification)))();
  let BuildContextToWidget = () => (BuildContextToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])))();
  let ListOfNavigatorObserver = () => (ListOfNavigatorObserver = dart.constFn(core.List$(src__widgets__navigator.NavigatorObserver)))();
  let SyncIterableOfLocalizationsDelegate = () => (SyncIterableOfLocalizationsDelegate = dart.constFn(_js_helper.SyncIterable$(src__widgets__localizations.LocalizationsDelegate)))();
  let StateOfStatefulWidget = () => (StateOfStatefulWidget = dart.constFn(src__widgets__framework.State$(src__widgets__framework.StatefulWidget)))();
  let GlobalObjectKeyOfStateOfStatefulWidget = () => (GlobalObjectKeyOfStateOfStatefulWidget = dart.constFn(src__widgets__framework.GlobalObjectKey$(StateOfStatefulWidget())))();
  let RouteSettingsAndFnToCupertinoPageRouteOfT = () => (RouteSettingsAndFnToCupertinoPageRouteOfT = dart.constFn(dart.gFnType(T => [src__cupertino__route.CupertinoPageRoute$(T), [src__widgets__navigator.RouteSettings, BuildContextToWidget()]])))();
  let VoidTovoid = () => (VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))();
  let BuildContextAndFnToCupertinoButton = () => (BuildContextAndFnToCupertinoButton = dart.constFn(dart.fnType(src__cupertino__button.CupertinoButton, [src__widgets__framework.BuildContext, VoidTovoid()])))();
  let EnumPropertyOfBrightness = () => (EnumPropertyOfBrightness = dart.constFn(src__foundation__diagnostics.EnumProperty$(ui$.Brightness)))();
  let DiagnosticsPropertyOfColor = () => (DiagnosticsPropertyOfColor = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(ui$.Color)))();
  let DiagnosticsPropertyOfCupertinoTextThemeData = () => (DiagnosticsPropertyOfCupertinoTextThemeData = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__cupertino__text_theme.CupertinoTextThemeData)))();
  let ValueNotifierOfString = () => (ValueNotifierOfString = dart.constFn(src__foundation__change_notifier.ValueNotifier$(core.String)))();
  let VoidTobool = () => (VoidTobool = dart.constFn(dart.fnType(core.bool, [])))();
  let JSArrayOfWidget = () => (JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(src__widgets__framework.Widget)))();
  let AnimationStatusToNull = () => (AnimationStatusToNull = dart.constFn(dart.fnType(core.Null, [src__animation__animation.AnimationStatus])))();
  let DiagnosticsPropertyOfLinearGradient = () => (DiagnosticsPropertyOfLinearGradient = dart.constFn(src__foundation__diagnostics.DiagnosticsProperty$(src__painting__gradient.LinearGradient)))();
  let TweenOfOffset = () => (TweenOfOffset = dart.constFn(src__animation__tween.Tween$(ui$.Offset)))();
  let AnimationOfdouble = () => (AnimationOfdouble = dart.constFn(src__animation__animation.Animation$(core.double)))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble()])))();
  let BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = () => (BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget = dart.constFn(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, AnimationOfdouble(), AnimationOfdouble(), src__widgets__framework.Widget])))();
  let TweenOfdouble = () => (TweenOfdouble = dart.constFn(src__animation__tween.Tween$(core.double)))();
  let SynchronousFutureOfCupertinoLocalizations = () => (SynchronousFutureOfCupertinoLocalizations = dart.constFn(src__foundation__synchronous_future.SynchronousFuture$(src__cupertino__localizations.CupertinoLocalizations)))();
  let voidToNull = () => (voidToNull = dart.constFn(dart.fnType(core.Null, [dart.void])))();
  let JSArrayOfDiagnosticsNode = () => (JSArrayOfDiagnosticsNode = dart.constFn(_interceptors.JSArray$(src__foundation__diagnostics.DiagnosticsNode)))();
  let BoxHitTestResultAndOffsetTobool = () => (BoxHitTestResultAndOffsetTobool = dart.constFn(dart.fnType(core.bool, [src__rendering__box.BoxHitTestResult, ui$.Offset])))();
  let TapDownDetailsTovoid = () => (TapDownDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapDownDetails])))();
  let TapUpDetailsTovoid = () => (TapUpDetailsTovoid = dart.constFn(dart.fnType(dart.void, [src__gestures__tap.TapUpDetails])))();
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
  const CT = Object.create(null);
  dart.defineLazy(CT, {
    get C2() {
      return C2 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 144,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C1() {
      return C1 = dart.constList([C2 || CT.C2], src__widgets__widget_inspector._Location);
    },
    get C0() {
      return C0 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/scrollbar.dart",
        line: 143,
        column: 18,
        name: null,
        parameterLocations: C1 || CT.C1
      });
    },
    get C5() {
      return C5 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 142,
        column: 11,
        name: "foregroundPainter",
        parameterLocations: null
      });
    },
    get C6() {
      return C6 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 143,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C4() {
      return C4 = dart.constList([C5 || CT.C5, C6 || CT.C6], src__widgets__widget_inspector._Location);
    },
    get C3() {
      return C3 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/scrollbar.dart",
        line: 141,
        column: 16,
        name: null,
        parameterLocations: C4 || CT.C4
      });
    },
    get C9() {
      return C9 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 141,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C8() {
      return C8 = dart.constList([C9 || CT.C9], src__widgets__widget_inspector._Location);
    },
    get C7() {
      return C7 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/scrollbar.dart",
        line: 140,
        column: 14,
        name: null,
        parameterLocations: C8 || CT.C8
      });
    },
    get C12() {
      return C12 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 139,
        column: 7,
        name: "onNotification",
        parameterLocations: null
      });
    },
    get C13() {
      return C13 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 140,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C11() {
      return C11 = dart.constList([C12 || CT.C12, C13 || CT.C13], src__widgets__widget_inspector._Location);
    },
    get C10() {
      return C10 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/scrollbar.dart",
        line: 138,
        column: 12,
        name: null,
        parameterLocations: C11 || CT.C11
      });
    },
    get C14() {
      return C14 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 2574743415.0
      });
    },
    get C15() {
      return C15 = dart.const({
        __proto__: ui$.Radius.prototype,
        x: 1.25,
        y: 1.25
      });
    },
    get C16() {
      return C16 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 50000
      });
    },
    get C17() {
      return C17 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 250000
      });
    },
    get C19() {
      return C19 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4278190080.0
      });
    },
    get C20() {
      return C20 = dart.const({
        __proto__: ui$.TextDecoration.prototype,
        [_mask]: 0
      });
    },
    get C18() {
      return C18 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C19 || CT.C19,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: null,
        fontStyle: null,
        letterSpacing: -0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: C20 || CT.C20,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C22() {
      return C22 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294967295.0
      });
    },
    get C21() {
      return C21 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C22 || CT.C22,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: null,
        fontStyle: null,
        letterSpacing: -0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: C20 || CT.C20,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C24() {
      return C24 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4278221567.0
      });
    },
    get C23() {
      return C23 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C24 || CT.C24,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: null,
        fontStyle: null,
        letterSpacing: -0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: C20 || CT.C20,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C26() {
      return C26 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4287532691.0
      });
    },
    get C25() {
      return C25 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C26 || CT.C26,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 10,
        fontWeight: null,
        fontStyle: null,
        letterSpacing: -0.24,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C28() {
      return C28 = dart.const({
        __proto__: ui$.FontWeight.prototype,
        index: 5
      });
    },
    get C27() {
      return C27 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C19 || CT.C19,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: C28 || CT.C28,
        fontStyle: null,
        letterSpacing: -0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C29() {
      return C29 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C22 || CT.C22,
        backgroundColor: null,
        fontFamily: ".SF Pro Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: C28 || CT.C28,
        fontStyle: null,
        letterSpacing: -0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C31() {
      return C31 = dart.const({
        __proto__: ui$.FontWeight.prototype,
        index: 6
      });
    },
    get C30() {
      return C30 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C19 || CT.C19,
        backgroundColor: null,
        fontFamily: ".SF Pro Display",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 34,
        fontWeight: C31 || CT.C31,
        fontStyle: null,
        letterSpacing: 0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C32() {
      return C32 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C22 || CT.C22,
        backgroundColor: null,
        fontFamily: ".SF Pro Display",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 34,
        fontWeight: C31 || CT.C31,
        fontStyle: null,
        letterSpacing: 0.41,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C33() {
      return C33 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4283226468.0
      });
    },
    get C34() {
      return C34 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294939904.0
      });
    },
    get C35() {
      return C35 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293256682.0
      });
    },
    get C36() {
      return C36 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293914612.0
      });
    },
    get C37() {
      return C37 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4279703319.0
      });
    },
    get C38() {
      return C38 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4294916912.0
      });
    },
    get C39() {
      return C39 = dart.constMap(core.String, BuildContextToWidget(), []);
    },
    get C40() {
      return C40 = dart.constList([], src__widgets__navigator.NavigatorObserver);
    },
    get C42() {
      return C42 = dart.const({
        __proto__: ui$.Locale.prototype,
        [_languageCode]: "en",
        scriptCode: null,
        [_countryCode]: "US"
      });
    },
    get C41() {
      return C41 = dart.constList([C42 || CT.C42], ui$.Locale);
    },
    get C43() {
      return C43 = dart.const({
        __proto__: src__widgets__scroll_physics.BouncingScrollPhysics.prototype,
        parent: null
      });
    },
    get C44() {
      return C44 = dart.const({
        __proto__: src__cupertino__theme.CupertinoThemeData.prototype,
        [_brightness$]: null,
        [_primaryColor$]: null,
        [_primaryContrastingColor$]: null,
        [_textTheme$]: null,
        [_barBackgroundColor$]: null,
        [_scaffoldBackgroundColor$]: null
      });
    },
    get C46() {
      return C46 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62629,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C45() {
      return C45 = dart.const({
        __proto__: src__widgets__icon.Icon.prototype,
        icon: C46 || CT.C46,
        size: 28,
        color: C22 || CT.C22,
        semanticLabel: null,
        textDirection: null,
        key: null
      });
    },
    get C49() {
      return C49 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 307,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C50() {
      return C50 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 312,
        column: 15,
        name: "padding",
        parameterLocations: null
      });
    },
    get C51() {
      return C51 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 313,
        column: 15,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C48() {
      return C48 = dart.constList([C49 || CT.C49, C50 || CT.C50, C51 || CT.C51], src__widgets__widget_inspector._Location);
    },
    get C47() {
      return C47 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart",
        line: 306,
        column: 36,
        name: null,
        parameterLocations: C48 || CT.C48
      });
    },
    get C54() {
      return C54 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 278,
        column: 11,
        name: "key",
        parameterLocations: null
      });
    },
    get C55() {
      return C55 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 279,
        column: 11,
        name: "navigatorKey",
        parameterLocations: null
      });
    },
    get C56() {
      return C56 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 280,
        column: 11,
        name: "navigatorObservers",
        parameterLocations: null
      });
    },
    get C57() {
      return C57 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 281,
        column: 11,
        name: "pageRouteBuilder",
        parameterLocations: null
      });
    },
    get C58() {
      return C58 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 284,
        column: 11,
        name: "home",
        parameterLocations: null
      });
    },
    get C59() {
      return C59 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 285,
        column: 11,
        name: "routes",
        parameterLocations: null
      });
    },
    get C60() {
      return C60 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 286,
        column: 11,
        name: "initialRoute",
        parameterLocations: null
      });
    },
    get C61() {
      return C61 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 287,
        column: 11,
        name: "onGenerateRoute",
        parameterLocations: null
      });
    },
    get C62() {
      return C62 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 288,
        column: 11,
        name: "onUnknownRoute",
        parameterLocations: null
      });
    },
    get C63() {
      return C63 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 289,
        column: 11,
        name: "builder",
        parameterLocations: null
      });
    },
    get C64() {
      return C64 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 290,
        column: 11,
        name: "title",
        parameterLocations: null
      });
    },
    get C65() {
      return C65 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 291,
        column: 11,
        name: "onGenerateTitle",
        parameterLocations: null
      });
    },
    get C66() {
      return C66 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 292,
        column: 11,
        name: "textStyle",
        parameterLocations: null
      });
    },
    get C67() {
      return C67 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 293,
        column: 11,
        name: "color",
        parameterLocations: null
      });
    },
    get C68() {
      return C68 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 294,
        column: 11,
        name: "locale",
        parameterLocations: null
      });
    },
    get C69() {
      return C69 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 295,
        column: 11,
        name: "localizationsDelegates",
        parameterLocations: null
      });
    },
    get C70() {
      return C70 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 296,
        column: 11,
        name: "localeResolutionCallback",
        parameterLocations: null
      });
    },
    get C71() {
      return C71 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 297,
        column: 11,
        name: "localeListResolutionCallback",
        parameterLocations: null
      });
    },
    get C72() {
      return C72 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 298,
        column: 11,
        name: "supportedLocales",
        parameterLocations: null
      });
    },
    get C73() {
      return C73 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 299,
        column: 11,
        name: "showPerformanceOverlay",
        parameterLocations: null
      });
    },
    get C74() {
      return C74 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 300,
        column: 11,
        name: "checkerboardRasterCacheImages",
        parameterLocations: null
      });
    },
    get C75() {
      return C75 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 301,
        column: 11,
        name: "checkerboardOffscreenLayers",
        parameterLocations: null
      });
    },
    get C76() {
      return C76 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 302,
        column: 11,
        name: "showSemanticsDebugger",
        parameterLocations: null
      });
    },
    get C77() {
      return C77 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 303,
        column: 11,
        name: "debugShowCheckedModeBanner",
        parameterLocations: null
      });
    },
    get C78() {
      return C78 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 304,
        column: 11,
        name: "inspectorSelectButtonBuilder",
        parameterLocations: null
      });
    },
    get C53() {
      return C53 = dart.constList([C54 || CT.C54, C55 || CT.C55, C56 || CT.C56, C57 || CT.C57, C58 || CT.C58, C59 || CT.C59, C60 || CT.C60, C61 || CT.C61, C62 || CT.C62, C63 || CT.C63, C64 || CT.C64, C65 || CT.C65, C66 || CT.C66, C67 || CT.C67, C68 || CT.C68, C69 || CT.C69, C70 || CT.C70, C71 || CT.C71, C72 || CT.C72, C73 || CT.C73, C74 || CT.C74, C75 || CT.C75, C76 || CT.C76, C77 || CT.C77, C78 || CT.C78], src__widgets__widget_inspector._Location);
    },
    get C52() {
      return C52 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart",
        line: 277,
        column: 16,
        name: null,
        parameterLocations: C53 || CT.C53
      });
    },
    get C81() {
      return C81 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 276,
        column: 9,
        name: "data",
        parameterLocations: null
      });
    },
    get C82() {
      return C82 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 277,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C80() {
      return C80 = dart.constList([C81 || CT.C81, C82 || CT.C82], src__widgets__widget_inspector._Location);
    },
    get C79() {
      return C79 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart",
        line: 275,
        column: 14,
        name: null,
        parameterLocations: C80 || CT.C80
      });
    },
    get C85() {
      return C85 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 274,
        column: 7,
        name: "behavior",
        parameterLocations: null
      });
    },
    get C86() {
      return C86 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 275,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C84() {
      return C84 = dart.constList([C85 || CT.C85, C86 || CT.C86], src__widgets__widget_inspector._Location);
    },
    get C83() {
      return C83 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart",
        line: 273,
        column: 12,
        name: null,
        parameterLocations: C84 || CT.C84
      });
    },
    get C89() {
      return C89 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 72,
        column: 11,
        name: "data",
        parameterLocations: null
      });
    },
    get C90() {
      return C90 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 73,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C88() {
      return C88 = dart.constList([C89 || CT.C89, C90 || CT.C90], src__widgets__widget_inspector._Location);
    },
    get C87() {
      return C87 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart",
        line: 71,
        column: 16,
        name: null,
        parameterLocations: C88 || CT.C88
      });
    },
    get C93() {
      return C93 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 70,
        column: 9,
        name: "theme",
        parameterLocations: null
      });
    },
    get C94() {
      return C94 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 71,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C92() {
      return C92 = dart.constList([C93 || CT.C93, C94 || CT.C94], src__widgets__widget_inspector._Location);
    },
    get C91() {
      return C91 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart",
        line: 69,
        column: 12,
        name: null,
        parameterLocations: C92 || CT.C92
      });
    },
    get C95() {
      return C95 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 3438868728.0
      });
    },
    get C96() {
      return C96 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 3072401697.0
      });
    },
    get C97() {
      return C97 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 400000
      });
    },
    get C100() {
      return C100 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 246,
        column: 7,
        name: "scopesRoute",
        parameterLocations: null
      });
    },
    get C101() {
      return C101 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 247,
        column: 7,
        name: "explicitChildNodes",
        parameterLocations: null
      });
    },
    get C102() {
      return C102 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 248,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C99() {
      return C99 = dart.constList([C100 || CT.C100, C101 || CT.C101, C102 || CT.C102], src__widgets__widget_inspector._Location);
    },
    get C98() {
      return C98 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 245,
        column: 27,
        name: null,
        parameterLocations: C99 || CT.C99
      });
    },
    get C105() {
      return C105 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 297,
        column: 9,
        name: "animation",
        parameterLocations: null
      });
    },
    get C106() {
      return C106 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 298,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C104() {
      return C104 = dart.constList([C105 || CT.C105, C106 || CT.C106], src__widgets__widget_inspector._Location);
    },
    get C103() {
      return C103 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 296,
        column: 14,
        name: null,
        parameterLocations: C104 || CT.C104
      });
    },
    get C109() {
      return C109 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 311,
        column: 11,
        name: "enabledCallback",
        parameterLocations: null
      });
    },
    get C110() {
      return C110 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 312,
        column: 11,
        name: "onStartPopGesture",
        parameterLocations: null
      });
    },
    get C111() {
      return C111 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 313,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C108() {
      return C108 = dart.constList([C109 || CT.C109, C110 || CT.C110, C111 || CT.C111], src__widgets__widget_inspector._Location);
    },
    get C107() {
      return C107 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 310,
        column: 16,
        name: null,
        parameterLocations: C108 || CT.C108
      });
    },
    get C114() {
      return C114 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 302,
        column: 9,
        name: "primaryRouteAnimation",
        parameterLocations: null
      });
    },
    get C115() {
      return C115 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 303,
        column: 9,
        name: "secondaryRouteAnimation",
        parameterLocations: null
      });
    },
    get C116() {
      return C116 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 309,
        column: 9,
        name: "linearTransition",
        parameterLocations: null
      });
    },
    get C117() {
      return C117 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 310,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C113() {
      return C113 = dart.constList([C114 || CT.C114, C115 || CT.C115, C116 || CT.C116, C117 || CT.C117], src__widgets__widget_inspector._Location);
    },
    get C112() {
      return C112 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 301,
        column: 14,
        name: null,
        parameterLocations: C113 || CT.C113
      });
    },
    get C120() {
      return C120 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 402,
        column: 11,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C121() {
      return C121 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 403,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C119() {
      return C119 = dart.constList([C120 || CT.C120, C121 || CT.C121], src__widgets__widget_inspector._Location);
    },
    get C118() {
      return C118 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 401,
        column: 16,
        name: null,
        parameterLocations: C119 || CT.C119
      });
    },
    get C124() {
      return C124 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 399,
        column: 9,
        name: "position",
        parameterLocations: null
      });
    },
    get C125() {
      return C125 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 400,
        column: 9,
        name: "textDirection",
        parameterLocations: null
      });
    },
    get C126() {
      return C126 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 401,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C123() {
      return C123 = dart.constList([C124 || CT.C124, C125 || CT.C125, C126 || CT.C126], src__widgets__widget_inspector._Location);
    },
    get C122() {
      return C122 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 398,
        column: 14,
        name: null,
        parameterLocations: C123 || CT.C123
      });
    },
    get C129() {
      return C129 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 395,
        column: 7,
        name: "position",
        parameterLocations: null
      });
    },
    get C130() {
      return C130 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 396,
        column: 7,
        name: "textDirection",
        parameterLocations: null
      });
    },
    get C131() {
      return C131 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 397,
        column: 7,
        name: "transformHitTests",
        parameterLocations: null
      });
    },
    get C132() {
      return C132 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 398,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C128() {
      return C128 = dart.constList([C129 || CT.C129, C130 || CT.C130, C131 || CT.C131, C132 || CT.C132], src__widgets__widget_inspector._Location);
    },
    get C127() {
      return C127 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 394,
        column: 12,
        name: null,
        parameterLocations: C128 || CT.C128
      });
    },
    get C135() {
      return C135 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 437,
        column: 7,
        name: "position",
        parameterLocations: null
      });
    },
    get C136() {
      return C136 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 438,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C134() {
      return C134 = dart.constList([C135 || CT.C135, C136 || CT.C136], src__widgets__widget_inspector._Location);
    },
    get C133() {
      return C133 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 436,
        column: 12,
        name: null,
        parameterLocations: C134 || CT.C134
      });
    },
    get C137() {
      return C137 = dart.const({
        __proto__: ui$.TextDirection.prototype,
        index: 0,
        [_name]: "TextDirection.rtl"
      });
    },
    get C138() {
      return C138 = dart.const({
        __proto__: ui$.TextDirection.prototype,
        index: 1,
        [_name]: "TextDirection.ltr"
      });
    },
    get C141() {
      return C141 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 560,
        column: 13,
        name: "onPointerDown",
        parameterLocations: null
      });
    },
    get C142() {
      return C142 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 561,
        column: 13,
        name: "behavior",
        parameterLocations: null
      });
    },
    get C140() {
      return C140 = dart.constList([C141 || CT.C141, C142 || CT.C142], src__widgets__widget_inspector._Location);
    },
    get C139() {
      return C139 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 559,
        column: 18,
        name: null,
        parameterLocations: C140 || CT.C140
      });
    },
    get C145() {
      return C145 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 555,
        column: 11,
        name: "start",
        parameterLocations: null
      });
    },
    get C146() {
      return C146 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 556,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C147() {
      return C147 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 557,
        column: 11,
        name: "top",
        parameterLocations: null
      });
    },
    get C148() {
      return C148 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 558,
        column: 11,
        name: "bottom",
        parameterLocations: null
      });
    },
    get C149() {
      return C149 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 559,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C144() {
      return C144 = dart.constList([C145 || CT.C145, C146 || CT.C146, C147 || CT.C147, C148 || CT.C148, C149 || CT.C149], src__widgets__widget_inspector._Location);
    },
    get C143() {
      return C143 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 554,
        column: 9,
        name: null,
        parameterLocations: C144 || CT.C144
      });
    },
    get C152() {
      return C152 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 551,
        column: 7,
        name: "fit",
        parameterLocations: null
      });
    },
    get C153() {
      return C153 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 552,
        column: 7,
        name: "children",
        parameterLocations: null
      });
    },
    get C151() {
      return C151 = dart.constList([C152 || CT.C152, C153 || CT.C153], src__widgets__widget_inspector._Location);
    },
    get C150() {
      return C150 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 550,
        column: 12,
        name: null,
        parameterLocations: C151 || CT.C151
      });
    },
    get C154() {
      return C154 = dart.const({
        __proto__: src__animation__curves.Cubic.prototype,
        a: 0.18,
        b: 1,
        c: 0.04,
        d: 1
      });
    },
    get C155() {
      return C155 = dart.const({
        __proto__: src__cupertino__route._CupertinoEdgeShadowDecoration.prototype,
        edgeGradient: null
      });
    },
    get C156() {
      return C156 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: 0,
        [_dy]: 1
      });
    },
    get C157() {
      return C157 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: 0,
        [_dy]: 0
      });
    },
    get C160() {
      return C160 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 848,
        column: 9,
        name: "translation",
        parameterLocations: null
      });
    },
    get C161() {
      return C161 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 849,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C159() {
      return C159 = dart.constList([C160 || CT.C160, C161 || CT.C161], src__widgets__widget_inspector._Location);
    },
    get C158() {
      return C158 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 847,
        column: 14,
        name: null,
        parameterLocations: C159 || CT.C159
      });
    },
    get C164() {
      return C164 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 846,
        column: 7,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C165() {
      return C165 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 847,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C163() {
      return C163 = dart.constList([C164 || CT.C164, C165 || CT.C165], src__widgets__widget_inspector._Location);
    },
    get C162() {
      return C162 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 845,
        column: 12,
        name: null,
        parameterLocations: C163 || CT.C163
      });
    },
    get C168() {
      return C168 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 908,
        column: 7,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C169() {
      return C169 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 909,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C167() {
      return C167 = dart.constList([C168 || CT.C168, C169 || CT.C169], src__widgets__widget_inspector._Location);
    },
    get C166() {
      return C166 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 907,
        column: 12,
        name: null,
        parameterLocations: C167 || CT.C167
      });
    },
    get C172() {
      return C172 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 915,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C173() {
      return C173 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 916,
        column: 7,
        name: "scale",
        parameterLocations: null
      });
    },
    get C171() {
      return C171 = dart.constList([C172 || CT.C172, C173 || CT.C173], src__widgets__widget_inspector._Location);
    },
    get C170() {
      return C170 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 914,
        column: 12,
        name: null,
        parameterLocations: C171 || CT.C171
      });
    },
    get C176() {
      return C176 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 913,
        column: 5,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C177() {
      return C177 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 914,
        column: 5,
        name: "child",
        parameterLocations: null
      });
    },
    get C175() {
      return C175 = dart.constList([C176 || CT.C176, C177 || CT.C177], src__widgets__widget_inspector._Location);
    },
    get C174() {
      return C174 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart",
        line: 912,
        column: 10,
        name: null,
        parameterLocations: C175 || CT.C175
      });
    },
    get C178() {
      return C178 = dart.fn(src__cupertino__route._buildCupertinoDialogTransitions, BuildContextAndAnimationOfdoubleAndAnimationOfdouble__ToWidget());
    },
    get C179() {
      return C179 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 1711539215
      });
    },
    get C180() {
      return C180 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 335000
      });
    },
    get C181() {
      return C181 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: 1,
        [_dy]: 0
      });
    },
    get C182() {
      return C182 = dart.const({
        __proto__: ui$.Offset.prototype,
        [_dx]: -0.3333333333333333,
        [_dy]: 0
      });
    },
    get C185() {
      return C185 = dart.const({
        __proto__: src__painting__alignment.AlignmentDirectional.prototype,
        start: 0.9,
        y: 0
      });
    },
    get C186() {
      return C186 = dart.const({
        __proto__: src__painting__alignment.AlignmentDirectional.prototype,
        start: 1,
        y: 0
      });
    },
    get C187() {
      return C187 = dart.const({
        __proto__: ui$.TileMode.prototype,
        index: 0,
        [_name]: "TileMode.clamp"
      });
    },
    get C189() {
      return C189 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 0
      });
    },
    get C190() {
      return C190 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 67108864
      });
    },
    get C191() {
      return C191 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 301989888
      });
    },
    get C192() {
      return C192 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 939524096
      });
    },
    get C188() {
      return C188 = dart.constList([C189 || CT.C189, C190 || CT.C190, C191 || CT.C191, C192 || CT.C192], ui$.Color);
    },
    get C193() {
      return C193 = dart.constList([0, 0.3, 0.6, 1], core.double);
    },
    get C184() {
      return C184 = dart.const({
        __proto__: src__painting__gradient.LinearGradient.prototype,
        begin: C185 || CT.C185,
        end: C186 || CT.C186,
        tileMode: C187 || CT.C187,
        colors: C188 || CT.C188,
        stops: C193 || CT.C193
      });
    },
    get C183() {
      return C183 = dart.const({
        __proto__: src__cupertino__route._CupertinoEdgeShadowDecoration.prototype,
        edgeGradient: C184 || CT.C184
      });
    },
    get C194() {
      return C194 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateTimeOrder.prototype,
        index: 0,
        [_name$]: "DatePickerDateTimeOrder.date_time_dayPeriod"
      });
    },
    get C195() {
      return C195 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateTimeOrder.prototype,
        index: 1,
        [_name$]: "DatePickerDateTimeOrder.date_dayPeriod_time"
      });
    },
    get C196() {
      return C196 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateTimeOrder.prototype,
        index: 2,
        [_name$]: "DatePickerDateTimeOrder.time_dayPeriod_date"
      });
    },
    get C197() {
      return C197 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateTimeOrder.prototype,
        index: 3,
        [_name$]: "DatePickerDateTimeOrder.dayPeriod_time_date"
      });
    },
    get C198() {
      return C198 = dart.constList([C194 || CT.C194, C195 || CT.C195, C196 || CT.C196, C197 || CT.C197], src__cupertino__localizations.DatePickerDateTimeOrder);
    },
    get C199() {
      return C199 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateOrder.prototype,
        index: 0,
        [_name$]: "DatePickerDateOrder.dmy"
      });
    },
    get C200() {
      return C200 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateOrder.prototype,
        index: 1,
        [_name$]: "DatePickerDateOrder.mdy"
      });
    },
    get C201() {
      return C201 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateOrder.prototype,
        index: 2,
        [_name$]: "DatePickerDateOrder.ymd"
      });
    },
    get C202() {
      return C202 = dart.const({
        __proto__: src__cupertino__localizations.DatePickerDateOrder.prototype,
        index: 3,
        [_name$]: "DatePickerDateOrder.ydm"
      });
    },
    get C203() {
      return C203 = dart.constList([C199 || CT.C199, C200 || CT.C200, C201 || CT.C201, C202 || CT.C202], src__cupertino__localizations.DatePickerDateOrder);
    },
    get C204() {
      return C204 = dart.const({
        __proto__: src__cupertino__localizations.DefaultCupertinoLocalizations.prototype
      });
    },
    get C205() {
      return C205 = dart.constList(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], core.String);
    },
    get C206() {
      return C206 = dart.constList(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], core.String);
    },
    get C207() {
      return C207 = dart.constList(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], core.String);
    },
    get C208() {
      return C208 = dart.const({
        __proto__: src__cupertino__localizations._CupertinoLocalizationsDelegate.prototype
      });
    },
    get C209() {
      return C209 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62418,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: true
      });
    },
    get C210() {
      return C210 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62419,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: true
      });
    },
    get C211() {
      return C211 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62666,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C212() {
      return C212 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62667,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C213() {
      return C213 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62439,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C214() {
      return C214 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62440,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C215() {
      return C215 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62441,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C216() {
      return C216 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62442,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C217() {
      return C217 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62540,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C218() {
      return C218 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62662,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C219() {
      return C219 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62459,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C220() {
      return C220 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62489,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C221() {
      return C221 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62602,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C222() {
      return C222 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62563,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C223() {
      return C223 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62508,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C224() {
      return C224 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62461,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C225() {
      return C225 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62462,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C226() {
      return C226 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62463,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C227() {
      return C227 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62415,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: true
      });
    },
    get C228() {
      return C228 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62417,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: true
      });
    },
    get C229() {
      return C229 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62535,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C230() {
      return C230 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62455,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C231() {
      return C231 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62570,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C232() {
      return C232 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62648,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C233() {
      return C233 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62649,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C234() {
      return C234 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62301,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C235() {
      return C235 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62310,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C236() {
      return C236 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61713,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C237() {
      return C237 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61714,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C238() {
      return C238 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61715,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C239() {
      return C239 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61716,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C240() {
      return C240 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61717,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C241() {
      return C241 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61718,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C242() {
      return C242 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61980,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C243() {
      return C243 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61981,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C244() {
      return C244 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61982,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C245() {
      return C245 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61984,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C246() {
      return C246 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 61985,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C247() {
      return C247 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62453,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C248() {
      return C248 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62454,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C249() {
      return C249 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62668,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C250() {
      return C250 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62669,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C251() {
      return C251 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62622,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C252() {
      return C252 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62623,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C253() {
      return C253 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62409,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C254() {
      return C254 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62410,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C255() {
      return C255 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62516,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C256() {
      return C256 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62517,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C257() {
      return C257 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62346,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C258() {
      return C258 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62660,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C259() {
      return C259 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62661,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C260() {
      return C260 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62335,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C261() {
      return C261 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62143,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C262() {
      return C262 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62334,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C263() {
      return C263 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62487,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C264() {
      return C264 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62618,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C265() {
      return C265 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62619,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C266() {
      return C266 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62620,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C267() {
      return C267 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62621,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C268() {
      return C268 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62376,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C269() {
      return C269 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62167,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C270() {
      return C270 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62318,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C271() {
      return C271 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62468,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C272() {
      return C272 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62469,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C273() {
      return C273 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62470,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C274() {
      return C274 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62601,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C275() {
      return C275 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62603,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C276() {
      return C276 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62524,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C277() {
      return C277 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62525,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C278() {
      return C278 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62199,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C279() {
      return C279 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62481,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C280() {
      return C280 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62482,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C281() {
      return C281 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62571,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C282() {
      return C282 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62599,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C283() {
      return C283 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62600,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C284() {
      return C284 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62583,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C285() {
      return C285 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62584,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C286() {
      return C286 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62537,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C287() {
      return C287 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62538,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C288() {
      return C288 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62391,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C289() {
      return C289 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62392,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C290() {
      return C290 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62393,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C291() {
      return C291 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62394,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C292() {
      return C292 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62342,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C293() {
      return C293 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62333,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C294() {
      return C294 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62559,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C295() {
      return C295 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62560,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C296() {
      return C296 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62561,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C297() {
      return C297 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62654,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C298() {
      return C298 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62655,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C299() {
      return C299 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62466,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C300() {
      return C300 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62467,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C301() {
      return C301 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62664,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C302() {
      return C302 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62665,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C303() {
      return C303 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62500,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C304() {
      return C304 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62501,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C305() {
      return C305 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62589,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C306() {
      return C306 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62590,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C307() {
      return C307 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62591,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C308() {
      return C308 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62592,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C309() {
      return C309 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62587,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C310() {
      return C310 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62588,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C311() {
      return C311 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62498,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C312() {
      return C312 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62499,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C313() {
      return C313 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62549,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C314() {
      return C314 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62550,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C315() {
      return C315 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62604,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C316() {
      return C316 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62605,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C317() {
      return C317 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62606,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C318() {
      return C318 = dart.const({
        __proto__: src__widgets__icon_data.IconData.prototype,
        codePoint: 62607,
        fontFamily: "CupertinoIcons",
        fontPackage: "cupertino_icons",
        matchTextDirection: false
      });
    },
    get C320() {
      return C320 = dart.const({
        __proto__: ui$.Radius.prototype,
        x: 8,
        y: 8
      });
    },
    get C319() {
      return C319 = dart.const({
        __proto__: src__painting__border_radius.BorderRadius.prototype,
        topLeft: C320 || CT.C320,
        topRight: C320 || CT.C320,
        bottomLeft: C320 || CT.C320,
        bottomRight: C320 || CT.C320
      });
    },
    get C321() {
      return C321 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 200000
      });
    },
    get C322() {
      return C322 = dart.const({
        __proto__: src__rendering__box.BoxConstraints.prototype,
        minWidth: 0,
        maxWidth: 1 / 0,
        minHeight: 0,
        maxHeight: 1 / 0
      });
    },
    get C325() {
      return C325 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 261,
        column: 23,
        name: "data",
        parameterLocations: null
      });
    },
    get C326() {
      return C326 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 262,
        column: 23,
        name: "child",
        parameterLocations: null
      });
    },
    get C324() {
      return C324 = dart.constList([C325 || CT.C325, C326 || CT.C326], src__widgets__widget_inspector._Location);
    },
    get C323() {
      return C323 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 260,
        column: 28,
        name: null,
        parameterLocations: C324 || CT.C324
      });
    },
    get C329() {
      return C329 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 259,
        column: 21,
        name: "style",
        parameterLocations: null
      });
    },
    get C330() {
      return C330 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 260,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C328() {
      return C328 = dart.constList([C329 || CT.C329, C330 || CT.C330], src__widgets__widget_inspector._Location);
    },
    get C327() {
      return C327 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 258,
        column: 26,
        name: null,
        parameterLocations: C328 || CT.C328
      });
    },
    get C333() {
      return C333 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 256,
        column: 19,
        name: "widthFactor",
        parameterLocations: null
      });
    },
    get C334() {
      return C334 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 257,
        column: 19,
        name: "heightFactor",
        parameterLocations: null
      });
    },
    get C335() {
      return C335 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 258,
        column: 19,
        name: "child",
        parameterLocations: null
      });
    },
    get C332() {
      return C332 = dart.constList([C333 || CT.C333, C334 || CT.C334, C335 || CT.C335], src__widgets__widget_inspector._Location);
    },
    get C331() {
      return C331 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 255,
        column: 24,
        name: null,
        parameterLocations: C332 || CT.C332
      });
    },
    get C338() {
      return C338 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 251,
        column: 17,
        name: "padding",
        parameterLocations: null
      });
    },
    get C339() {
      return C339 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 255,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C337() {
      return C337 = dart.constList([C338 || CT.C338, C339 || CT.C339], src__widgets__widget_inspector._Location);
    },
    get C336() {
      return C336 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 250,
        column: 22,
        name: null,
        parameterLocations: C337 || CT.C337
      });
    },
    get C342() {
      return C342 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 244,
        column: 15,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C343() {
      return C343 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 250,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C341() {
      return C341 = dart.constList([C342 || CT.C342, C343 || CT.C343], src__widgets__widget_inspector._Location);
    },
    get C340() {
      return C340 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 243,
        column: 20,
        name: null,
        parameterLocations: C341 || CT.C341
      });
    },
    get C346() {
      return C346 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 242,
        column: 13,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C347() {
      return C347 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 243,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C345() {
      return C345 = dart.constList([C346 || CT.C346, C347 || CT.C347], src__widgets__widget_inspector._Location);
    },
    get C344() {
      return C344 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 241,
        column: 18,
        name: null,
        parameterLocations: C345 || CT.C345
      });
    },
    get C350() {
      return C350 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 235,
        column: 11,
        name: "constraints",
        parameterLocations: null
      });
    },
    get C351() {
      return C351 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 241,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C349() {
      return C349 = dart.constList([C350 || CT.C350, C351 || CT.C351], src__widgets__widget_inspector._Location);
    },
    get C348() {
      return C348 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 234,
        column: 16,
        name: null,
        parameterLocations: C349 || CT.C349
      });
    },
    get C354() {
      return C354 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 233,
        column: 9,
        name: "button",
        parameterLocations: null
      });
    },
    get C355() {
      return C355 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 234,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C353() {
      return C353 = dart.constList([C354 || CT.C354, C355 || CT.C355], src__widgets__widget_inspector._Location);
    },
    get C352() {
      return C352 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 232,
        column: 14,
        name: null,
        parameterLocations: C353 || CT.C353
      });
    },
    get C358() {
      return C358 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 227,
        column: 7,
        name: "behavior",
        parameterLocations: null
      });
    },
    get C359() {
      return C359 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 228,
        column: 7,
        name: "onTapDown",
        parameterLocations: null
      });
    },
    get C360() {
      return C360 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 229,
        column: 7,
        name: "onTapUp",
        parameterLocations: null
      });
    },
    get C361() {
      return C361 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 230,
        column: 7,
        name: "onTapCancel",
        parameterLocations: null
      });
    },
    get C362() {
      return C362 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 231,
        column: 7,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C363() {
      return C363 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 232,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C357() {
      return C357 = dart.constList([C358 || CT.C358, C359 || CT.C359, C360 || CT.C360, C361 || CT.C361, C362 || CT.C362, C363 || CT.C363], src__widgets__widget_inspector._Location);
    },
    get C356() {
      return C356 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart",
        line: 226,
        column: 12,
        name: null,
        parameterLocations: C357 || CT.C357
      });
    },
    get C364() {
      return C364 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 10000
      });
    },
    get C365() {
      return C365 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 100000
      });
    },
    get C366() {
      return C366 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4289309097.0
      });
    },
    get C367() {
      return C367 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4291940817.0
      });
    },
    get C368() {
      return C368 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 16,
        [_top]: 16,
        [_right]: 16,
        [_bottom]: 16
      });
    },
    get C369() {
      return C369 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 64,
        [_top]: 14,
        [_right]: 64,
        [_bottom]: 14
      });
    },
    get C372() {
      return C372 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 85,
        column: 11,
        name: "padding",
        parameterLocations: null
      });
    },
    get C373() {
      return C373 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 86,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C371() {
      return C371 = dart.constList([C372 || CT.C372, C373 || CT.C373], src__widgets__widget_inspector._Location);
    },
    get C370() {
      return C370 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 84,
        column: 25,
        name: null,
        parameterLocations: C371 || CT.C371
      });
    },
    get C376() {
      return C376 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 96,
        column: 13,
        name: "padding",
        parameterLocations: null
      });
    },
    get C377() {
      return C377 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 97,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C375() {
      return C375 = dart.constList([C376 || CT.C376, C377 || CT.C377], src__widgets__widget_inspector._Location);
    },
    get C374() {
      return C374 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 95,
        column: 18,
        name: null,
        parameterLocations: C375 || CT.C375
      });
    },
    get C380() {
      return C380 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 90,
        column: 11,
        name: "data",
        parameterLocations: null
      });
    },
    get C381() {
      return C381 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 95,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C379() {
      return C379 = dart.constList([C380 || CT.C380, C381 || CT.C381], src__widgets__widget_inspector._Location);
    },
    get C378() {
      return C378 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 89,
        column: 25,
        name: null,
        parameterLocations: C379 || CT.C379
      });
    },
    get C384() {
      return C384 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 108,
        column: 9,
        name: "top",
        parameterLocations: null
      });
    },
    get C385() {
      return C385 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 109,
        column: 9,
        name: "left",
        parameterLocations: null
      });
    },
    get C386() {
      return C386 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 110,
        column: 9,
        name: "right",
        parameterLocations: null
      });
    },
    get C387() {
      return C387 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 111,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C383() {
      return C383 = dart.constList([C384 || CT.C384, C385 || CT.C385, C386 || CT.C386, C387 || CT.C387], src__widgets__widget_inspector._Location);
    },
    get C382() {
      return C382 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 107,
        column: 19,
        name: null,
        parameterLocations: C383 || CT.C383
      });
    },
    get C390() {
      return C390 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 118,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C389() {
      return C389 = dart.constList([C390 || CT.C390], src__widgets__widget_inspector._Location);
    },
    get C388() {
      return C388 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 117,
        column: 14,
        name: null,
        parameterLocations: C389 || CT.C389
      });
    },
    get C393() {
      return C393 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 116,
        column: 7,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C394() {
      return C394 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 117,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C392() {
      return C392 = dart.constList([C393 || CT.C393, C394 || CT.C394], src__widgets__widget_inspector._Location);
    },
    get C391() {
      return C391 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart",
        line: 115,
        column: 12,
        name: null,
        parameterLocations: C392 || CT.C392
      });
    },
    get C395() {
      return C395 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 1000000
      });
    },
    get C398() {
      return C398 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 82,
        column: 9,
        name: "painter",
        parameterLocations: null
      });
    },
    get C397() {
      return C397 = dart.constList([C398 || CT.C398], src__widgets__widget_inspector._Location);
    },
    get C396() {
      return C396 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart",
        line: 81,
        column: 14,
        name: null,
        parameterLocations: C397 || CT.C397
      });
    },
    get C401() {
      return C401 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 79,
        column: 7,
        name: "height",
        parameterLocations: null
      });
    },
    get C402() {
      return C402 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 80,
        column: 7,
        name: "width",
        parameterLocations: null
      });
    },
    get C403() {
      return C403 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 81,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C400() {
      return C400 = dart.constList([C401 || CT.C401, C402 || CT.C402, C403 || CT.C403], src__widgets__widget_inspector._Location);
    },
    get C399() {
      return C399 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart",
        line: 78,
        column: 12,
        name: null,
        parameterLocations: C400 || CT.C400
      });
    },
    get C404() {
      return C404 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4288519581.0
      });
    },
    get C407() {
      return C407 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 160,
        column: 9,
        name: "title",
        parameterLocations: null
      });
    },
    get C408() {
      return C408 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 161,
        column: 9,
        name: "message",
        parameterLocations: null
      });
    },
    get C409() {
      return C409 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 162,
        column: 9,
        name: "scrollController",
        parameterLocations: null
      });
    },
    get C406() {
      return C406 = dart.constList([C407 || CT.C407, C408 || CT.C408, C409 || CT.C409], src__widgets__widget_inspector._Location);
    },
    get C405() {
      return C405 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 159,
        column: 35,
        name: null,
        parameterLocations: C406 || CT.C406
      });
    },
    get C412() {
      return C412 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 164,
        column: 28,
        name: "child",
        parameterLocations: null
      });
    },
    get C411() {
      return C411 = dart.constList([C412 || CT.C412], src__widgets__widget_inspector._Location);
    },
    get C410() {
      return C410 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 164,
        column: 19,
        name: null,
        parameterLocations: C411 || CT.C411
      });
    },
    get C415() {
      return C415 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 170,
        column: 9,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C416() {
      return C416 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 171,
        column: 9,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C417() {
      return C417 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 172,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C414() {
      return C414 = dart.constList([C415 || CT.C415, C416 || CT.C416, C417 || CT.C417], src__widgets__widget_inspector._Location);
    },
    get C413() {
      return C413 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 169,
        column: 14,
        name: null,
        parameterLocations: C414 || CT.C414
      });
    },
    get C420() {
      return C420 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 168,
        column: 7,
        name: "color",
        parameterLocations: null
      });
    },
    get C421() {
      return C421 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 169,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C419() {
      return C419 = dart.constList([C420 || CT.C420, C421 || CT.C421], src__widgets__widget_inspector._Location);
    },
    get C418() {
      return C418 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 167,
        column: 12,
        name: null,
        parameterLocations: C419 || CT.C419
      });
    },
    get C424() {
      return C424 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 180,
        column: 9,
        name: "height",
        parameterLocations: null
      });
    },
    get C423() {
      return C423 = dart.constList([C424 || CT.C424], src__widgets__widget_inspector._Location);
    },
    get C422() {
      return C422 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 179,
        column: 14,
        name: null,
        parameterLocations: C423 || CT.C423
      });
    },
    get C427() {
      return C427 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 185,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C428() {
      return C428 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 186,
        column: 9,
        name: "scrollController",
        parameterLocations: null
      });
    },
    get C429() {
      return C429 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 187,
        column: 9,
        name: "hasCancelButton",
        parameterLocations: null
      });
    },
    get C426() {
      return C426 = dart.constList([C427 || CT.C427, C428 || CT.C428, C429 || CT.C429], src__widgets__widget_inspector._Location);
    },
    get C425() {
      return C425 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 184,
        column: 14,
        name: null,
        parameterLocations: C426 || CT.C426
      });
    },
    get C432() {
      return C432 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 184,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C431() {
      return C431 = dart.constList([C432 || CT.C432], src__widgets__widget_inspector._Location);
    },
    get C430() {
      return C430 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 183,
        column: 12,
        name: null,
        parameterLocations: C431 || CT.C431
      });
    },
    get C435() {
      return C435 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 200,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C434() {
      return C434 = dart.constList([C435 || CT.C435], src__widgets__widget_inspector._Location);
    },
    get C433() {
      return C433 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 199,
        column: 14,
        name: null,
        parameterLocations: C434 || CT.C434
      });
    },
    get C438() {
      return C438 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 198,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C439() {
      return C439 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 199,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C437() {
      return C437 = dart.constList([C438 || CT.C438, C439 || CT.C439], src__widgets__widget_inspector._Location);
    },
    get C436() {
      return C436 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 197,
        column: 12,
        name: null,
        parameterLocations: C437 || CT.C437
      });
    },
    get C442() {
      return C442 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 217,
        column: 17,
        name: "contentSection",
        parameterLocations: null
      });
    },
    get C443() {
      return C443 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 218,
        column: 17,
        name: "actionsSection",
        parameterLocations: null
      });
    },
    get C441() {
      return C441 = dart.constList([C442 || CT.C442, C443 || CT.C443], src__widgets__widget_inspector._Location);
    },
    get C440() {
      return C440 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 216,
        column: 22,
        name: null,
        parameterLocations: C441 || CT.C441
      });
    },
    get C446() {
      return C446 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 215,
        column: 15,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C447() {
      return C447 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 216,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C445() {
      return C445 = dart.constList([C446 || CT.C446, C447 || CT.C447], src__widgets__widget_inspector._Location);
    },
    get C444() {
      return C444 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 214,
        column: 20,
        name: null,
        parameterLocations: C445 || CT.C445
      });
    },
    get C450() {
      return C450 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 212,
        column: 13,
        name: "filter",
        parameterLocations: null
      });
    },
    get C451() {
      return C451 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 214,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C449() {
      return C449 = dart.constList([C450 || CT.C450, C451 || CT.C451], src__widgets__widget_inspector._Location);
    },
    get C448() {
      return C448 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 211,
        column: 18,
        name: null,
        parameterLocations: C449 || CT.C449
      });
    },
    get C454() {
      return C454 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 210,
        column: 11,
        name: "borderRadius",
        parameterLocations: null
      });
    },
    get C455() {
      return C455 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 211,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C453() {
      return C453 = dart.constList([C454 || CT.C454, C455 || CT.C455], src__widgets__widget_inspector._Location);
    },
    get C452() {
      return C452 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 209,
        column: 16,
        name: null,
        parameterLocations: C453 || CT.C453
      });
    },
    get C458() {
      return C458 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 209,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C457() {
      return C457 = dart.constList([C458 || CT.C458], src__widgets__widget_inspector._Location);
    },
    get C456() {
      return C456 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 208,
        column: 7,
        name: null,
        parameterLocations: C457 || CT.C457
      });
    },
    get C459() {
      return C459 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 8,
        [_top]: 10,
        [_right]: 8,
        [_bottom]: 10
      });
    },
    get C462() {
      return C462 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 255,
        column: 13,
        name: "children",
        parameterLocations: null
      });
    },
    get C463() {
      return C463 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 256,
        column: 13,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C464() {
      return C464 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 257,
        column: 13,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C461() {
      return C461 = dart.constList([C462 || CT.C462, C463 || CT.C463, C464 || CT.C464], src__widgets__widget_inspector._Location);
    },
    get C460() {
      return C460 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 254,
        column: 18,
        name: null,
        parameterLocations: C461 || CT.C461
      });
    },
    get C467() {
      return C467 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 249,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C468() {
      return C468 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 250,
        column: 11,
        name: "margin",
        parameterLocations: null
      });
    },
    get C469() {
      return C469 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 254,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C466() {
      return C466 = dart.constList([C467 || CT.C467, C468 || CT.C468, C469 || CT.C469], src__widgets__widget_inspector._Location);
    },
    get C465() {
      return C465 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 248,
        column: 16,
        name: null,
        parameterLocations: C466 || CT.C466
      });
    },
    get C472() {
      return C472 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 244,
        column: 9,
        name: "namesRoute",
        parameterLocations: null
      });
    },
    get C473() {
      return C473 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 245,
        column: 9,
        name: "scopesRoute",
        parameterLocations: null
      });
    },
    get C474() {
      return C474 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 246,
        column: 9,
        name: "explicitChildNodes",
        parameterLocations: null
      });
    },
    get C475() {
      return C475 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 247,
        column: 9,
        name: "label",
        parameterLocations: null
      });
    },
    get C476() {
      return C476 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 248,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C471() {
      return C471 = dart.constList([C472 || CT.C472, C473 || CT.C473, C474 || CT.C474, C475 || CT.C475, C476 || CT.C476], src__widgets__widget_inspector._Location);
    },
    get C470() {
      return C470 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 243,
        column: 14,
        name: null,
        parameterLocations: C471 || CT.C471
      });
    },
    get C479() {
      return C479 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 243,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C478() {
      return C478 = dart.constList([C479 || CT.C479], src__widgets__widget_inspector._Location);
    },
    get C477() {
      return C477 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 242,
        column: 12,
        name: null,
        parameterLocations: C478 || CT.C478
      });
    },
    get C480() {
      return C480 = dart.const({
        __proto__: src__rendering__box.BoxConstraints.prototype,
        minWidth: 0,
        maxWidth: 1 / 0,
        minHeight: 56,
        maxHeight: 1 / 0
      });
    },
    get C481() {
      return C481 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 10,
        [_top]: 16,
        [_right]: 10,
        [_bottom]: 16
      });
    },
    get C484() {
      return C484 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 331,
        column: 15,
        name: "style",
        parameterLocations: null
      });
    },
    get C485() {
      return C485 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 332,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C486() {
      return C486 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 333,
        column: 15,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C483() {
      return C483 = dart.constList([C484 || CT.C484, C485 || CT.C485, C486 || CT.C486], src__widgets__widget_inspector._Location);
    },
    get C482() {
      return C482 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 330,
        column: 20,
        name: null,
        parameterLocations: C483 || CT.C483
      });
    },
    get C489() {
      return C489 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 325,
        column: 13,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C490() {
      return C490 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 326,
        column: 13,
        name: "padding",
        parameterLocations: null
      });
    },
    get C491() {
      return C491 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 330,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C488() {
      return C488 = dart.constList([C489 || CT.C489, C490 || CT.C490, C491 || CT.C491], src__widgets__widget_inspector._Location);
    },
    get C487() {
      return C487 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 324,
        column: 18,
        name: null,
        parameterLocations: C488 || CT.C488
      });
    },
    get C494() {
      return C494 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 323,
        column: 11,
        name: "button",
        parameterLocations: null
      });
    },
    get C495() {
      return C495 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 324,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C493() {
      return C493 = dart.constList([C494 || CT.C494, C495 || CT.C495], src__widgets__widget_inspector._Location);
    },
    get C492() {
      return C492 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 322,
        column: 16,
        name: null,
        parameterLocations: C493 || CT.C493
      });
    },
    get C498() {
      return C498 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 319,
        column: 9,
        name: "constraints",
        parameterLocations: null
      });
    },
    get C499() {
      return C499 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 322,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C497() {
      return C497 = dart.constList([C498 || CT.C498, C499 || CT.C499], src__widgets__widget_inspector._Location);
    },
    get C496() {
      return C496 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 318,
        column: 14,
        name: null,
        parameterLocations: C497 || CT.C497
      });
    },
    get C502() {
      return C502 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 316,
        column: 7,
        name: "onTap",
        parameterLocations: null
      });
    },
    get C503() {
      return C503 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 317,
        column: 7,
        name: "behavior",
        parameterLocations: null
      });
    },
    get C504() {
      return C504 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 318,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C501() {
      return C501 = dart.constList([C502 || CT.C502, C503 || CT.C503, C504 || CT.C504], src__widgets__widget_inspector._Location);
    },
    get C500() {
      return C500 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 315,
        column: 12,
        name: null,
        parameterLocations: C501 || CT.C501
      });
    },
    get C507() {
      return C507 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 391,
        column: 9,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C508() {
      return C508 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 395,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C506() {
      return C506 = dart.constList([C507 || CT.C507, C508 || CT.C508], src__widgets__widget_inspector._Location);
    },
    get C505() {
      return C505 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 390,
        column: 14,
        name: null,
        parameterLocations: C506 || CT.C506
      });
    },
    get C511() {
      return C511 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 386,
        column: 7,
        name: "excludeFromSemantics",
        parameterLocations: null
      });
    },
    get C512() {
      return C512 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 387,
        column: 7,
        name: "onTapDown",
        parameterLocations: null
      });
    },
    get C513() {
      return C513 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 388,
        column: 7,
        name: "onTapUp",
        parameterLocations: null
      });
    },
    get C514() {
      return C514 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 389,
        column: 7,
        name: "onTapCancel",
        parameterLocations: null
      });
    },
    get C515() {
      return C515 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 390,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C510() {
      return C510 = dart.constList([C511 || CT.C511, C512 || CT.C512, C513 || CT.C513, C514 || CT.C514, C515 || CT.C515], src__widgets__widget_inspector._Location);
    },
    get C509() {
      return C509 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 385,
        column: 12,
        name: null,
        parameterLocations: C510 || CT.C510
      });
    },
    get C516() {
      return C516 = dart.const({
        __proto__: src__cupertino__action_sheet._AlertSections.prototype,
        index: 0,
        [_name$0]: "_AlertSections.contentSection"
      });
    },
    get C517() {
      return C517 = dart.const({
        __proto__: src__cupertino__action_sheet._AlertSections.prototype,
        index: 1,
        [_name$0]: "_AlertSections.actionsSection"
      });
    },
    get C518() {
      return C518 = dart.constList([C516 || CT.C516, C517 || CT.C517], src__cupertino__action_sheet._AlertSections);
    },
    get C519() {
      return C519 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 40,
        [_top]: 14,
        [_right]: 40,
        [_bottom]: 14
      });
    },
    get C522() {
      return C522 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 817,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C523() {
      return C523 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 820,
        column: 11,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C524() {
      return C524 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 821,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C521() {
      return C521 = dart.constList([C522 || CT.C522, C523 || CT.C523, C524 || CT.C524], src__widgets__widget_inspector._Location);
    },
    get C520() {
      return C520 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 816,
        column: 16,
        name: null,
        parameterLocations: C521 || CT.C521
      });
    },
    get C527() {
      return C527 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 810,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C528() {
      return C528 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 816,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C526() {
      return C526 = dart.constList([C527 || CT.C527, C528 || CT.C528], src__widgets__widget_inspector._Location);
    },
    get C525() {
      return C525 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 809,
        column: 29,
        name: null,
        parameterLocations: C526 || CT.C526
      });
    },
    get C531() {
      return C531 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 836,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C532() {
      return C532 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 840,
        column: 13,
        name: "textAlign",
        parameterLocations: null
      });
    },
    get C533() {
      return C533 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 841,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C530() {
      return C530 = dart.constList([C531 || CT.C531, C532 || CT.C532, C533 || CT.C533], src__widgets__widget_inspector._Location);
    },
    get C529() {
      return C529 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 835,
        column: 18,
        name: null,
        parameterLocations: C530 || CT.C530
      });
    },
    get C536() {
      return C536 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 829,
        column: 11,
        name: "padding",
        parameterLocations: null
      });
    },
    get C537() {
      return C537 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 835,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C535() {
      return C535 = dart.constList([C536 || CT.C536, C537 || CT.C537], src__widgets__widget_inspector._Location);
    },
    get C534() {
      return C534 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 828,
        column: 9,
        name: null,
        parameterLocations: C535 || CT.C535
      });
    },
    get C540() {
      return C540 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 851,
        column: 11,
        name: "width",
        parameterLocations: null
      });
    },
    get C541() {
      return C541 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 852,
        column: 11,
        name: "height",
        parameterLocations: null
      });
    },
    get C539() {
      return C539 = dart.constList([C540 || CT.C540, C541 || CT.C541], src__widgets__widget_inspector._Location);
    },
    get C538() {
      return C538 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 850,
        column: 16,
        name: null,
        parameterLocations: C539 || CT.C539
      });
    },
    get C544() {
      return C544 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 849,
        column: 9,
        name: "controller",
        parameterLocations: null
      });
    },
    get C545() {
      return C545 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 850,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C543() {
      return C543 = dart.constList([C544 || CT.C544, C545 || CT.C545], src__widgets__widget_inspector._Location);
    },
    get C542() {
      return C542 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 848,
        column: 14,
        name: null,
        parameterLocations: C543 || CT.C543
      });
    },
    get C547() {
      return C547 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsets.prototype,
        [_left]: 0,
        [_top]: 8,
        [_right]: 0,
        [_bottom]: 0
      });
    },
    get C546() {
      return C546 = dart.const({
        __proto__: src__widgets__basic.Padding.prototype,
        padding: C547 || CT.C547,
        child: null,
        key: null
      });
    },
    get C550() {
      return C550 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 867,
        column: 11,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C551() {
      return C551 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 868,
        column: 11,
        name: "crossAxisAlignment",
        parameterLocations: null
      });
    },
    get C552() {
      return C552 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 869,
        column: 11,
        name: "children",
        parameterLocations: null
      });
    },
    get C549() {
      return C549 = dart.constList([C550 || CT.C550, C551 || CT.C551, C552 || CT.C552], src__widgets__widget_inspector._Location);
    },
    get C548() {
      return C548 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 866,
        column: 16,
        name: null,
        parameterLocations: C549 || CT.C549
      });
    },
    get C555() {
      return C555 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 865,
        column: 9,
        name: "controller",
        parameterLocations: null
      });
    },
    get C556() {
      return C556 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 866,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C554() {
      return C554 = dart.constList([C555 || CT.C555, C556 || CT.C556], src__widgets__widget_inspector._Location);
    },
    get C553() {
      return C553 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 864,
        column: 14,
        name: null,
        parameterLocations: C554 || CT.C554
      });
    },
    get C559() {
      return C559 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 864,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C558() {
      return C558 = dart.constList([C559 || CT.C559], src__widgets__widget_inspector._Location);
    },
    get C557() {
      return C557 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 863,
        column: 12,
        name: null,
        parameterLocations: C558 || CT.C558
      });
    },
    get C562() {
      return C562 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 915,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C561() {
      return C561 = dart.constList([C562 || CT.C562], src__widgets__widget_inspector._Location);
    },
    get C560() {
      return C560 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 914,
        column: 9,
        name: null,
        parameterLocations: C561 || CT.C561
      });
    },
    get C565() {
      return C565 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 924,
        column: 11,
        name: "actionButtons",
        parameterLocations: null
      });
    },
    get C566() {
      return C566 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 925,
        column: 11,
        name: "dividerThickness",
        parameterLocations: null
      });
    },
    get C567() {
      return C567 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 926,
        column: 11,
        name: "hasCancelButton",
        parameterLocations: null
      });
    },
    get C564() {
      return C564 = dart.constList([C565 || CT.C565, C566 || CT.C566, C567 || CT.C567], src__widgets__widget_inspector._Location);
    },
    get C563() {
      return C563 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 923,
        column: 16,
        name: null,
        parameterLocations: C564 || CT.C564
      });
    },
    get C570() {
      return C570 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 922,
        column: 9,
        name: "controller",
        parameterLocations: null
      });
    },
    get C571() {
      return C571 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 923,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C569() {
      return C569 = dart.constList([C570 || CT.C570, C571 || CT.C571], src__widgets__widget_inspector._Location);
    },
    get C568() {
      return C568 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 921,
        column: 14,
        name: null,
        parameterLocations: C569 || CT.C569
      });
    },
    get C574() {
      return C574 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 921,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C573() {
      return C573 = dart.constList([C574 || CT.C574], src__widgets__widget_inspector._Location);
    },
    get C572() {
      return C572 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 920,
        column: 12,
        name: null,
        parameterLocations: C573 || CT.C573
      });
    },
    get C577() {
      return C577 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 958,
        column: 9,
        name: "excludeFromSemantics",
        parameterLocations: null
      });
    },
    get C578() {
      return C578 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 959,
        column: 9,
        name: "behavior",
        parameterLocations: null
      });
    },
    get C579() {
      return C579 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 960,
        column: 9,
        name: "onTapDown",
        parameterLocations: null
      });
    },
    get C580() {
      return C580 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 962,
        column: 9,
        name: "onTapUp",
        parameterLocations: null
      });
    },
    get C581() {
      return C581 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 964,
        column: 9,
        name: "onTapCancel",
        parameterLocations: null
      });
    },
    get C582() {
      return C582 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 965,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C576() {
      return C576 = dart.constList([C577 || CT.C577, C578 || CT.C578, C579 || CT.C579, C580 || CT.C580, C581 || CT.C581, C582 || CT.C582], src__widgets__widget_inspector._Location);
    },
    get C575() {
      return C575 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 957,
        column: 14,
        name: null,
        parameterLocations: C576 || CT.C576
      });
    },
    get C585() {
      return C585 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 955,
        column: 7,
        name: "isPressed",
        parameterLocations: null
      });
    },
    get C586() {
      return C586 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 957,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C584() {
      return C584 = dart.constList([C585 || CT.C585, C586 || CT.C586], src__widgets__widget_inspector._Location);
    },
    get C583() {
      return C583 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart",
        line: 954,
        column: 12,
        name: null,
        parameterLocations: C584 || CT.C584
      });
    },
    get C588() {
      return C588 = dart.const({
        __proto__: ui$.FontWeight.prototype,
        index: 3
      });
    },
    get C589() {
      return C589 = dart.const({
        __proto__: ui$.TextBaseline.prototype,
        index: 0,
        [_name]: "TextBaseline.alphabetic"
      });
    },
    get C587() {
      return C587 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C24 || CT.C24,
        backgroundColor: null,
        fontFamily: ".SF UI Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 20,
        fontWeight: C588 || CT.C588,
        fontStyle: null,
        letterSpacing: null,
        wordSpacing: null,
        textBaseline: C589 || CT.C589,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C591() {
      return C591 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4287598479.0
      });
    },
    get C590() {
      return C590 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: false,
        color: C591 || CT.C591,
        backgroundColor: null,
        fontFamily: ".SF UI Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 13,
        fontWeight: C588 || CT.C588,
        fontStyle: null,
        letterSpacing: null,
        wordSpacing: null,
        textBaseline: C589 || CT.C589,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C593() {
      return C593 = dart.const({
        __proto__: ui$.BlendMode.prototype,
        index: 15,
        [_name]: "BlendMode.overlay"
      });
    },
    get C594() {
      return C594 = dart.const({
        __proto__: src__painting__box_border.BoxShape.prototype,
        index: 0,
        [_name$1]: "BoxShape.rectangle"
      });
    },
    get C592() {
      return C592 = dart.const({
        __proto__: src__painting__box_decoration.BoxDecoration.prototype,
        color: C22 || CT.C22,
        image: null,
        border: null,
        borderRadius: null,
        boxShadow: null,
        gradient: null,
        backgroundBlendMode: C593 || CT.C593,
        shape: C594 || CT.C594
      });
    },
    get C595() {
      return C595 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 3522754808.0
      });
    },
    get C596() {
      return C596 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 2800084458.0
      });
    },
    get C597() {
      return C597 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 1077886783
      });
    },
    get C598() {
      return C598 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 4293585642.0
      });
    },
    get C601() {
      return C601 = dart.const({
        __proto__: src__painting__borders.BorderStyle.prototype,
        index: 0,
        [_name$2]: "BorderStyle.none"
      });
    },
    get C600() {
      return C600 = dart.const({
        __proto__: src__painting__borders.BorderSide.prototype,
        color: C19 || CT.C19,
        width: 0,
        style: C601 || CT.C601
      });
    },
    get C603() {
      return C603 = dart.const({
        __proto__: ui$.Color.prototype,
        [_value]: 1275068416
      });
    },
    get C604() {
      return C604 = dart.const({
        __proto__: src__painting__borders.BorderStyle.prototype,
        index: 1,
        [_name$2]: "BorderStyle.solid"
      });
    },
    get C602() {
      return C602 = dart.const({
        __proto__: src__painting__borders.BorderSide.prototype,
        color: C603 || CT.C603,
        width: 0,
        style: C604 || CT.C604
      });
    },
    get C599() {
      return C599 = dart.const({
        __proto__: src__painting__box_border.Border.prototype,
        top: C600 || CT.C600,
        right: C600 || CT.C600,
        bottom: C602 || CT.C602,
        left: C600 || CT.C600
      });
    },
    get C605() {
      return C605 = dart.const({
        __proto__: src__cupertino__nav_bar._HeroTag.prototype,
        navigator: null
      });
    },
    get C606() {
      return C606 = dart.const({
        __proto__: ui$.Size.prototype,
        [_dx]: 1 / 0,
        [_dy]: 44
      });
    },
    get C609() {
      return C609 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 415,
        column: 9,
        name: "components",
        parameterLocations: null
      });
    },
    get C610() {
      return C610 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 416,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C608() {
      return C608 = dart.constList([C609 || CT.C609, C610 || CT.C610], src__widgets__widget_inspector._Location);
    },
    get C607() {
      return C607 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 414,
        column: 14,
        name: null,
        parameterLocations: C608 || CT.C608
      });
    },
    get C613() {
      return C613 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 433,
        column: 9,
        name: "componentsKeys",
        parameterLocations: null
      });
    },
    get C614() {
      return C614 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 434,
        column: 9,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C615() {
      return C615 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 435,
        column: 9,
        name: "actionsForegroundColor",
        parameterLocations: null
      });
    },
    get C616() {
      return C616 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 436,
        column: 9,
        name: "border",
        parameterLocations: null
      });
    },
    get C617() {
      return C617 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 437,
        column: 9,
        name: "hasUserMiddle",
        parameterLocations: null
      });
    },
    get C618() {
      return C618 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 438,
        column: 9,
        name: "largeExpanded",
        parameterLocations: null
      });
    },
    get C619() {
      return C619 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 439,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C612() {
      return C612 = dart.constList([C613 || CT.C613, C614 || CT.C614, C615 || CT.C615, C616 || CT.C616, C617 || CT.C617, C618 || CT.C618, C619 || CT.C619], src__widgets__widget_inspector._Location);
    },
    get C611() {
      return C611 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 432,
        column: 14,
        name: null,
        parameterLocations: C612 || CT.C612
      });
    },
    get C622() {
      return C622 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 425,
        column: 7,
        name: "tag",
        parameterLocations: null
      });
    },
    get C623() {
      return C623 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 428,
        column: 7,
        name: "createRectTween",
        parameterLocations: null
      });
    },
    get C624() {
      return C624 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 429,
        column: 7,
        name: "placeholderBuilder",
        parameterLocations: null
      });
    },
    get C625() {
      return C625 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 430,
        column: 7,
        name: "flightShuttleBuilder",
        parameterLocations: null
      });
    },
    get C626() {
      return C626 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 431,
        column: 7,
        name: "transitionOnUserGestures",
        parameterLocations: null
      });
    },
    get C627() {
      return C627 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 432,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C621() {
      return C621 = dart.constList([C622 || CT.C622, C623 || CT.C623, C624 || CT.C624, C625 || CT.C625, C626 || CT.C626, C627 || CT.C627], src__widgets__widget_inspector._Location);
    },
    get C620() {
      return C620 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 424,
        column: 12,
        name: null,
        parameterLocations: C621 || CT.C621
      });
    },
    get C630() {
      return C630 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 637,
        column: 7,
        name: "pinned",
        parameterLocations: null
      });
    },
    get C631() {
      return C631 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 638,
        column: 7,
        name: "delegate",
        parameterLocations: null
      });
    },
    get C629() {
      return C629 = dart.constList([C630 || CT.C630, C631 || CT.C631], src__widgets__widget_inspector._Location);
    },
    get C628() {
      return C628 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 636,
        column: 12,
        name: null,
        parameterLocations: C629 || CT.C629
      });
    },
    get C634() {
      return C634 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 700,
        column: 7,
        name: "components",
        parameterLocations: null
      });
    },
    get C635() {
      return C635 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 701,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C636() {
      return C636 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 704,
        column: 7,
        name: "middleVisible",
        parameterLocations: null
      });
    },
    get C633() {
      return C633 = dart.constList([C634 || CT.C634, C635 || CT.C635, C636 || CT.C636], src__widgets__widget_inspector._Location);
    },
    get C632() {
      return C632 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 699,
        column: 9,
        name: null,
        parameterLocations: C633 || CT.C633
      });
    },
    get C637() {
      return C637 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsetsDirectional.prototype,
        [_start]: 16,
        [_top]: 0,
        [_end]: 0,
        [_bottom]: 8
      });
    },
    get C640() {
      return C640 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 740,
        column: 27,
        name: "style",
        parameterLocations: null
      });
    },
    get C641() {
      return C641 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 741,
        column: 27,
        name: "maxLines",
        parameterLocations: null
      });
    },
    get C642() {
      return C642 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 742,
        column: 27,
        name: "overflow",
        parameterLocations: null
      });
    },
    get C643() {
      return C643 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 743,
        column: 27,
        name: "child",
        parameterLocations: null
      });
    },
    get C639() {
      return C639 = dart.constList([C640 || CT.C640, C641 || CT.C641, C642 || CT.C642, C643 || CT.C643], src__widgets__widget_inspector._Location);
    },
    get C638() {
      return C638 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 739,
        column: 32,
        name: null,
        parameterLocations: C639 || CT.C639
      });
    },
    get C646() {
      return C646 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 738,
        column: 25,
        name: "header",
        parameterLocations: null
      });
    },
    get C647() {
      return C647 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 739,
        column: 25,
        name: "child",
        parameterLocations: null
      });
    },
    get C645() {
      return C645 = dart.constList([C646 || CT.C646, C647 || CT.C647], src__widgets__widget_inspector._Location);
    },
    get C644() {
      return C644 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 737,
        column: 30,
        name: null,
        parameterLocations: C645 || CT.C645
      });
    },
    get C650() {
      return C650 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 735,
        column: 23,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C651() {
      return C651 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 736,
        column: 23,
        name: "duration",
        parameterLocations: null
      });
    },
    get C652() {
      return C652 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 737,
        column: 23,
        name: "child",
        parameterLocations: null
      });
    },
    get C649() {
      return C649 = dart.constList([C650 || CT.C650, C651 || CT.C651, C652 || CT.C652], src__widgets__widget_inspector._Location);
    },
    get C648() {
      return C648 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 734,
        column: 28,
        name: null,
        parameterLocations: C649 || CT.C649
      });
    },
    get C655() {
      return C655 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 732,
        column: 21,
        name: "top",
        parameterLocations: null
      });
    },
    get C656() {
      return C656 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 733,
        column: 21,
        name: "bottom",
        parameterLocations: null
      });
    },
    get C657() {
      return C657 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 734,
        column: 21,
        name: "child",
        parameterLocations: null
      });
    },
    get C654() {
      return C654 = dart.constList([C655 || CT.C655, C656 || CT.C656, C657 || CT.C657], src__widgets__widget_inspector._Location);
    },
    get C653() {
      return C653 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 731,
        column: 26,
        name: null,
        parameterLocations: C654 || CT.C654
      });
    },
    get C660() {
      return C660 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 727,
        column: 19,
        name: "padding",
        parameterLocations: null
      });
    },
    get C661() {
      return C661 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 731,
        column: 19,
        name: "child",
        parameterLocations: null
      });
    },
    get C659() {
      return C659 = dart.constList([C660 || CT.C660, C661 || CT.C661], src__widgets__widget_inspector._Location);
    },
    get C658() {
      return C658 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 726,
        column: 24,
        name: null,
        parameterLocations: C659 || CT.C659
      });
    },
    get C664() {
      return C664 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 723,
        column: 17,
        name: "minHeight",
        parameterLocations: null
      });
    },
    get C665() {
      return C665 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 724,
        column: 17,
        name: "maxHeight",
        parameterLocations: null
      });
    },
    get C666() {
      return C666 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 725,
        column: 17,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C667() {
      return C667 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 726,
        column: 17,
        name: "child",
        parameterLocations: null
      });
    },
    get C663() {
      return C663 = dart.constList([C664 || CT.C664, C665 || CT.C665, C666 || CT.C666, C667 || CT.C667], src__widgets__widget_inspector._Location);
    },
    get C662() {
      return C662 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 722,
        column: 22,
        name: null,
        parameterLocations: C663 || CT.C663
      });
    },
    get C670() {
      return C670 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 722,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C669() {
      return C669 = dart.constList([C670 || CT.C670], src__widgets__widget_inspector._Location);
    },
    get C668() {
      return C668 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 718,
        column: 20,
        name: null,
        parameterLocations: C669 || CT.C669
      });
    },
    get C673() {
      return C673 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 714,
        column: 13,
        name: "top",
        parameterLocations: null
      });
    },
    get C674() {
      return C674 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 715,
        column: 13,
        name: "left",
        parameterLocations: null
      });
    },
    get C675() {
      return C675 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 716,
        column: 13,
        name: "right",
        parameterLocations: null
      });
    },
    get C676() {
      return C676 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 717,
        column: 13,
        name: "bottom",
        parameterLocations: null
      });
    },
    get C677() {
      return C677 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 718,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C672() {
      return C672 = dart.constList([C673 || CT.C673, C674 || CT.C674, C675 || CT.C675, C676 || CT.C676, C677 || CT.C677], src__widgets__widget_inspector._Location);
    },
    get C671() {
      return C671 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 713,
        column: 11,
        name: null,
        parameterLocations: C672 || CT.C672
      });
    },
    get C680() {
      return C680 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 753,
        column: 13,
        name: "left",
        parameterLocations: null
      });
    },
    get C681() {
      return C681 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 754,
        column: 13,
        name: "right",
        parameterLocations: null
      });
    },
    get C682() {
      return C682 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 755,
        column: 13,
        name: "top",
        parameterLocations: null
      });
    },
    get C683() {
      return C683 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 756,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C679() {
      return C679 = dart.constList([C680 || CT.C680, C681 || CT.C681, C682 || CT.C682, C683 || CT.C683], src__widgets__widget_inspector._Location);
    },
    get C678() {
      return C678 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 752,
        column: 11,
        name: null,
        parameterLocations: C679 || CT.C679
      });
    },
    get C686() {
      return C686 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 711,
        column: 9,
        name: "fit",
        parameterLocations: null
      });
    },
    get C687() {
      return C687 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 712,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C685() {
      return C685 = dart.constList([C686 || CT.C686, C687 || CT.C687], src__widgets__widget_inspector._Location);
    },
    get C684() {
      return C684 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 710,
        column: 14,
        name: null,
        parameterLocations: C685 || CT.C685
      });
    },
    get C690() {
      return C690 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 778,
        column: 9,
        name: "componentsKeys",
        parameterLocations: null
      });
    },
    get C691() {
      return C691 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 779,
        column: 9,
        name: "backgroundColor",
        parameterLocations: null
      });
    },
    get C692() {
      return C692 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 780,
        column: 9,
        name: "actionsForegroundColor",
        parameterLocations: null
      });
    },
    get C693() {
      return C693 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 781,
        column: 9,
        name: "border",
        parameterLocations: null
      });
    },
    get C694() {
      return C694 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 782,
        column: 9,
        name: "hasUserMiddle",
        parameterLocations: null
      });
    },
    get C695() {
      return C695 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 783,
        column: 9,
        name: "largeExpanded",
        parameterLocations: null
      });
    },
    get C696() {
      return C696 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 784,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C689() {
      return C689 = dart.constList([C690 || CT.C690, C691 || CT.C691, C692 || CT.C692, C693 || CT.C693, C694 || CT.C694, C695 || CT.C695, C696 || CT.C696], src__widgets__widget_inspector._Location);
    },
    get C688() {
      return C688 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 777,
        column: 14,
        name: null,
        parameterLocations: C689 || CT.C689
      });
    },
    get C699() {
      return C699 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 767,
        column: 7,
        name: "tag",
        parameterLocations: null
      });
    },
    get C700() {
      return C700 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 770,
        column: 7,
        name: "createRectTween",
        parameterLocations: null
      });
    },
    get C701() {
      return C701 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 771,
        column: 7,
        name: "flightShuttleBuilder",
        parameterLocations: null
      });
    },
    get C702() {
      return C702 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 772,
        column: 7,
        name: "placeholderBuilder",
        parameterLocations: null
      });
    },
    get C703() {
      return C703 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 773,
        column: 7,
        name: "transitionOnUserGestures",
        parameterLocations: null
      });
    },
    get C704() {
      return C704 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 777,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C698() {
      return C698 = dart.constList([C699 || CT.C699, C700 || CT.C700, C701 || CT.C701, C702 || CT.C702, C703 || CT.C703, C704 || CT.C704], src__widgets__widget_inspector._Location);
    },
    get C697() {
      return C697 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 766,
        column: 12,
        name: null,
        parameterLocations: C698 || CT.C698
      });
    },
    get C707() {
      return C707 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 832,
        column: 26,
        name: "header",
        parameterLocations: null
      });
    },
    get C708() {
      return C708 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 832,
        column: 40,
        name: "child",
        parameterLocations: null
      });
    },
    get C706() {
      return C706 = dart.constList([C707 || CT.C707, C708 || CT.C708], src__widgets__widget_inspector._Location);
    },
    get C705() {
      return C705 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 832,
        column: 16,
        name: null,
        parameterLocations: C706 || CT.C706
      });
    },
    get C711() {
      return C711 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 831,
        column: 9,
        name: "style",
        parameterLocations: null
      });
    },
    get C712() {
      return C712 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 832,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C710() {
      return C710 = dart.constList([C711 || CT.C711, C712 || CT.C712], src__widgets__widget_inspector._Location);
    },
    get C709() {
      return C709 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 830,
        column: 16,
        name: null,
        parameterLocations: C710 || CT.C710
      });
    },
    get C715() {
      return C715 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 839,
        column: 15,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C716() {
      return C716 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 840,
        column: 15,
        name: "duration",
        parameterLocations: null
      });
    },
    get C717() {
      return C717 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 841,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C714() {
      return C714 = dart.constList([C715 || CT.C715, C716 || CT.C716, C717 || CT.C717], src__widgets__widget_inspector._Location);
    },
    get C713() {
      return C713 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 838,
        column: 13,
        name: null,
        parameterLocations: C714 || CT.C714
      });
    },
    get C720() {
      return C720 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 851,
        column: 9,
        name: "_backChevron",
        parameterLocations: null
      });
    },
    get C721() {
      return C721 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 852,
        column: 9,
        name: "_backLabel",
        parameterLocations: null
      });
    },
    get C722() {
      return C722 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 853,
        column: 20,
        name: "color",
        parameterLocations: null
      });
    },
    get C719() {
      return C719 = dart.constList([C720 || CT.C720, C721 || CT.C721, C722 || CT.C722], src__widgets__widget_inspector._Location);
    },
    get C718() {
      return C718 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 850,
        column: 50,
        name: null,
        parameterLocations: C719 || CT.C719
      });
    },
    get C725() {
      return C725 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 858,
        column: 7,
        name: "leading",
        parameterLocations: null
      });
    },
    get C726() {
      return C726 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 859,
        column: 7,
        name: "middle",
        parameterLocations: null
      });
    },
    get C727() {
      return C727 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 860,
        column: 7,
        name: "trailing",
        parameterLocations: null
      });
    },
    get C728() {
      return C728 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 861,
        column: 7,
        name: "centerMiddle",
        parameterLocations: null
      });
    },
    get C729() {
      return C729 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 862,
        column: 7,
        name: "middleSpacing",
        parameterLocations: null
      });
    },
    get C724() {
      return C724 = dart.constList([C725 || CT.C725, C726 || CT.C726, C727 || CT.C727, C728 || CT.C728, C729 || CT.C729], src__widgets__widget_inspector._Location);
    },
    get C723() {
      return C723 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 857,
        column: 28,
        name: null,
        parameterLocations: C724 || CT.C724
      });
    },
    get C732() {
      return C732 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 867,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C733() {
      return C733 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 871,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C731() {
      return C731 = dart.constList([C732 || CT.C732, C733 || CT.C733], src__widgets__widget_inspector._Location);
    },
    get C730() {
      return C730 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 866,
        column: 23,
        name: null,
        parameterLocations: C731 || CT.C731
      });
    },
    get C736() {
      return C736 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 878,
        column: 9,
        name: "bottom",
        parameterLocations: null
      });
    },
    get C737() {
      return C737 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 879,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C735() {
      return C735 = dart.constList([C736 || CT.C736, C737 || CT.C737], src__widgets__widget_inspector._Location);
    },
    get C734() {
      return C734 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 877,
        column: 14,
        name: null,
        parameterLocations: C735 || CT.C735
      });
    },
    get C740() {
      return C740 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 876,
        column: 7,
        name: "height",
        parameterLocations: null
      });
    },
    get C741() {
      return C741 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 877,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C739() {
      return C739 = dart.constList([C740 || CT.C740, C741 || CT.C741], src__widgets__widget_inspector._Location);
    },
    get C738() {
      return C738 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 875,
        column: 12,
        name: null,
        parameterLocations: C739 || CT.C739
      });
    },
    get C744() {
      return C744 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 981,
        column: 32,
        name: "data",
        parameterLocations: null
      });
    },
    get C743() {
      return C743 = dart.constList([C744 || CT.C744], src__widgets__widget_inspector._Location);
    },
    get C742() {
      return C742 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 981,
        column: 14,
        name: null,
        parameterLocations: C743 || CT.C743
      });
    },
    get C745() {
      return C745 = dart.const({
        __proto__: src__widgets__text.Text.prototype,
        data: "Close",
        textSpan: null,
        style: null,
        textAlign: null,
        textDirection: null,
        locale: null,
        softWrap: null,
        overflow: null,
        textScaleFactor: null,
        maxLines: null,
        semanticsLabel: null,
        key: null
      });
    },
    get C748() {
      return C748 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1006,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C749() {
      return C749 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1007,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C750() {
      return C750 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1008,
        column: 9,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C747() {
      return C747 = dart.constList([C748 || CT.C748, C749 || CT.C749, C750 || CT.C750], src__widgets__widget_inspector._Location);
    },
    get C746() {
      return C746 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1005,
        column: 24,
        name: null,
        parameterLocations: C747 || CT.C747
      });
    },
    get C753() {
      return C753 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1025,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C754() {
      return C754 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1026,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C752() {
      return C752 = dart.constList([C753 || CT.C753, C754 || CT.C754], src__widgets__widget_inspector._Location);
    },
    get C751() {
      return C751 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1024,
        column: 16,
        name: null,
        parameterLocations: C752 || CT.C752
      });
    },
    get C757() {
      return C757 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1021,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C758() {
      return C758 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1024,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C756() {
      return C756 = dart.constList([C757 || CT.C757, C758 || CT.C758], src__widgets__widget_inspector._Location);
    },
    get C755() {
      return C755 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1020,
        column: 14,
        name: null,
        parameterLocations: C756 || CT.C756
      });
    },
    get C761() {
      return C761 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1019,
        column: 7,
        name: "key",
        parameterLocations: null
      });
    },
    get C762() {
      return C762 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1020,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C760() {
      return C760 = dart.constList([C761 || CT.C761, C762 || CT.C762], src__widgets__widget_inspector._Location);
    },
    get C759() {
      return C759 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1018,
        column: 12,
        name: null,
        parameterLocations: C760 || CT.C760
      });
    },
    get C763() {
      return C763 = dart.const({
        __proto__: src__cupertino__nav_bar._BackChevron.prototype,
        key: null
      });
    },
    get C766() {
      return C766 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1053,
        column: 25,
        name: "key",
        parameterLocations: null
      });
    },
    get C767() {
      return C767 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1053,
        column: 46,
        name: "child",
        parameterLocations: null
      });
    },
    get C765() {
      return C765 = dart.constList([C766 || CT.C766, C767 || CT.C767], src__widgets__widget_inspector._Location);
    },
    get C764() {
      return C764 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1053,
        column: 12,
        name: null,
        parameterLocations: C765 || CT.C765
      });
    },
    get C770() {
      return C770 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1077,
        column: 9,
        name: "specifiedPreviousTitle",
        parameterLocations: null
      });
    },
    get C771() {
      return C771 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1078,
        column: 9,
        name: "route",
        parameterLocations: null
      });
    },
    get C769() {
      return C769 = dart.constList([C770 || CT.C770, C771 || CT.C771], src__widgets__widget_inspector._Location);
    },
    get C768() {
      return C768 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1076,
        column: 14,
        name: null,
        parameterLocations: C769 || CT.C769
      });
    },
    get C774() {
      return C774 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1075,
        column: 7,
        name: "key",
        parameterLocations: null
      });
    },
    get C775() {
      return C775 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1076,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C773() {
      return C773 = dart.constList([C774 || CT.C774, C775 || CT.C775], src__widgets__widget_inspector._Location);
    },
    get C772() {
      return C772 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1074,
        column: 12,
        name: null,
        parameterLocations: C773 || CT.C773
      });
    },
    get C778() {
      return C778 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1110,
        column: 7,
        name: "key",
        parameterLocations: null
      });
    },
    get C779() {
      return C779 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1111,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C777() {
      return C777 = dart.constList([C778 || CT.C778, C779 || CT.C779], src__widgets__widget_inspector._Location);
    },
    get C776() {
      return C776 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1109,
        column: 12,
        name: null,
        parameterLocations: C777 || CT.C777
      });
    },
    get C782() {
      return C782 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1133,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C783() {
      return C783 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1134,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C781() {
      return C781 = dart.constList([C782 || CT.C782, C783 || CT.C783], src__widgets__widget_inspector._Location);
    },
    get C780() {
      return C780 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1132,
        column: 16,
        name: null,
        parameterLocations: C781 || CT.C781
      });
    },
    get C786() {
      return C786 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1129,
        column: 9,
        name: "padding",
        parameterLocations: null
      });
    },
    get C787() {
      return C787 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1132,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C785() {
      return C785 = dart.constList([C786 || CT.C786, C787 || CT.C787], src__widgets__widget_inspector._Location);
    },
    get C784() {
      return C784 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1128,
        column: 14,
        name: null,
        parameterLocations: C785 || CT.C785
      });
    },
    get C790() {
      return C790 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1127,
        column: 7,
        name: "key",
        parameterLocations: null
      });
    },
    get C791() {
      return C791 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1128,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C789() {
      return C789 = dart.constList([C790 || CT.C790, C791 || CT.C791], src__widgets__widget_inspector._Location);
    },
    get C788() {
      return C788 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1126,
        column: 12,
        name: null,
        parameterLocations: C789 || CT.C789
      });
    },
    get C794() {
      return C794 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1172,
        column: 7,
        name: "key",
        parameterLocations: null
      });
    },
    get C795() {
      return C795 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1173,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C793() {
      return C793 = dart.constList([C794 || CT.C794, C795 || CT.C795], src__widgets__widget_inspector._Location);
    },
    get C792() {
      return C792 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1171,
        column: 12,
        name: null,
        parameterLocations: C793 || CT.C793
      });
    },
    get C796() {
      return C796 = dart.const({
        __proto__: src__rendering__box.BoxConstraints.prototype,
        minWidth: 50,
        maxWidth: 1 / 0,
        minHeight: 0,
        maxHeight: 1 / 0
      });
    },
    get C798() {
      return C798 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsetsDirectional.prototype,
        [_start]: 8,
        [_top]: 0,
        [_end]: 0,
        [_bottom]: 0
      });
    },
    get C797() {
      return C797 = dart.const({
        __proto__: src__widgets__basic.Padding.prototype,
        padding: C798 || CT.C798,
        child: null,
        key: null
      });
    },
    get C800() {
      return C800 = dart.const({
        __proto__: src__painting__edge_insets.EdgeInsetsDirectional.prototype,
        [_start]: 6,
        [_top]: 0,
        [_end]: 0,
        [_bottom]: 0
      });
    },
    get C799() {
      return C799 = dart.const({
        __proto__: src__widgets__basic.Padding.prototype,
        padding: C800 || CT.C800,
        child: null,
        key: null
      });
    },
    get C803() {
      return C803 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1251,
        column: 25,
        name: "specifiedPreviousTitle",
        parameterLocations: null
      });
    },
    get C804() {
      return C804 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1252,
        column: 25,
        name: "route",
        parameterLocations: null
      });
    },
    get C802() {
      return C802 = dart.constList([C803 || CT.C803, C804 || CT.C804], src__widgets__widget_inspector._Location);
    },
    get C801() {
      return C801 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1250,
        column: 23,
        name: null,
        parameterLocations: C802 || CT.C802
      });
    },
    get C807() {
      return C807 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1249,
        column: 19,
        name: "child",
        parameterLocations: null
      });
    },
    get C806() {
      return C806 = dart.constList([C807 || CT.C807], src__widgets__widget_inspector._Location);
    },
    get C805() {
      return C805 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1248,
        column: 17,
        name: null,
        parameterLocations: C806 || CT.C806
      });
    },
    get C810() {
      return C810 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1242,
        column: 15,
        name: "mainAxisSize",
        parameterLocations: null
      });
    },
    get C811() {
      return C811 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1243,
        column: 15,
        name: "mainAxisAlignment",
        parameterLocations: null
      });
    },
    get C812() {
      return C812 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1244,
        column: 15,
        name: "children",
        parameterLocations: null
      });
    },
    get C809() {
      return C809 = dart.constList([C810 || CT.C810, C811 || CT.C811, C812 || CT.C812], src__widgets__widget_inspector._Location);
    },
    get C808() {
      return C808 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1241,
        column: 20,
        name: null,
        parameterLocations: C809 || CT.C809
      });
    },
    get C815() {
      return C815 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1240,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C816() {
      return C816 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1241,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C814() {
      return C814 = dart.constList([C815 || CT.C815, C816 || CT.C816], src__widgets__widget_inspector._Location);
    },
    get C813() {
      return C813 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1239,
        column: 18,
        name: null,
        parameterLocations: C814 || CT.C814
      });
    },
    get C819() {
      return C819 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1237,
        column: 11,
        name: "constraints",
        parameterLocations: null
      });
    },
    get C820() {
      return C820 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1239,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C818() {
      return C818 = dart.constList([C819 || CT.C819, C820 || CT.C820], src__widgets__widget_inspector._Location);
    },
    get C817() {
      return C817 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1236,
        column: 16,
        name: null,
        parameterLocations: C818 || CT.C818
      });
    },
    get C823() {
      return C823 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1232,
        column: 9,
        name: "container",
        parameterLocations: null
      });
    },
    get C824() {
      return C824 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1233,
        column: 9,
        name: "excludeSemantics",
        parameterLocations: null
      });
    },
    get C825() {
      return C825 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1234,
        column: 9,
        name: "label",
        parameterLocations: null
      });
    },
    get C826() {
      return C826 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1235,
        column: 9,
        name: "button",
        parameterLocations: null
      });
    },
    get C827() {
      return C827 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1236,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C822() {
      return C822 = dart.constList([C823 || CT.C823, C824 || CT.C824, C825 || CT.C825, C826 || CT.C826, C827 || CT.C827], src__widgets__widget_inspector._Location);
    },
    get C821() {
      return C821 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1231,
        column: 14,
        name: null,
        parameterLocations: C822 || CT.C822
      });
    },
    get C830() {
      return C830 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1231,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C831() {
      return C831 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1260,
        column: 7,
        name: "padding",
        parameterLocations: null
      });
    },
    get C832() {
      return C832 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1261,
        column: 7,
        name: "onPressed",
        parameterLocations: null
      });
    },
    get C829() {
      return C829 = dart.constList([C830 || CT.C830, C831 || CT.C831, C832 || CT.C832], src__widgets__widget_inspector._Location);
    },
    get C828() {
      return C828 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1230,
        column: 12,
        name: null,
        parameterLocations: C829 || CT.C829
      });
    },
    get C835() {
      return C835 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1279,
        column: 7,
        name: "textSpan",
        parameterLocations: null
      });
    },
    get C834() {
      return C834 = dart.constList([C835 || CT.C835], src__widgets__widget_inspector._Location);
    },
    get C833() {
      return C833 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1278,
        column: 30,
        name: null,
        parameterLocations: C834 || CT.C834
      });
    },
    get C838() {
      return C838 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1293,
        column: 11,
        name: "transform",
        parameterLocations: null
      });
    },
    get C839() {
      return C839 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1294,
        column: 11,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C840() {
      return C840 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1295,
        column: 11,
        name: "transformHitTests",
        parameterLocations: null
      });
    },
    get C841() {
      return C841 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1296,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C837() {
      return C837 = dart.constList([C838 || CT.C838, C839 || CT.C839, C840 || CT.C840, C841 || CT.C841], src__widgets__widget_inspector._Location);
    },
    get C836() {
      return C836 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1292,
        column: 22,
        name: null,
        parameterLocations: C837 || CT.C837
      });
    },
    get C842() {
      return C842 = dart.const({
        __proto__: src__widgets__basic.SizedBox.prototype,
        width: 0,
        height: 0,
        child: null,
        key: null
      });
    },
    get C845() {
      return C845 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1329,
        column: 7,
        name: "data",
        parameterLocations: null
      });
    },
    get C846() {
      return C846 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1330,
        column: 7,
        name: "maxLines",
        parameterLocations: null
      });
    },
    get C847() {
      return C847 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1331,
        column: 7,
        name: "overflow",
        parameterLocations: null
      });
    },
    get C844() {
      return C844 = dart.constList([C845 || CT.C845, C846 || CT.C846, C847 || CT.C847], src__widgets__widget_inspector._Location);
    },
    get C843() {
      return C843 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1328,
        column: 23,
        name: null,
        parameterLocations: C844 || CT.C844
      });
    },
    get C848() {
      return C848 = dart.const({
        __proto__: src__widgets__text.Text.prototype,
        data: "Back",
        textSpan: null,
        style: null,
        textAlign: null,
        textDirection: null,
        locale: null,
        softWrap: null,
        overflow: null,
        textScaleFactor: null,
        maxLines: null,
        semanticsLabel: null,
        key: null
      });
    },
    get C851() {
      return C851 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1339,
        column: 7,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C852() {
      return C852 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1340,
        column: 7,
        name: "widthFactor",
        parameterLocations: null
      });
    },
    get C853() {
      return C853 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1341,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C850() {
      return C850 = dart.constList([C851 || CT.C851, C852 || CT.C852, C853 || CT.C853], src__widgets__widget_inspector._Location);
    },
    get C849() {
      return C849 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1338,
        column: 12,
        name: null,
        parameterLocations: C850 || CT.C850
      });
    },
    get C856() {
      return C856 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1355,
        column: 9,
        name: "valueListenable",
        parameterLocations: null
      });
    },
    get C857() {
      return C857 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1356,
        column: 9,
        name: "builder",
        parameterLocations: null
      });
    },
    get C855() {
      return C855 = dart.constList([C856 || CT.C856, C857 || CT.C857], src__widgets__widget_inspector._Location);
    },
    get C854() {
      return C854 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1354,
        column: 14,
        name: null,
        parameterLocations: C855 || CT.C855
      });
    },
    get C860() {
      return C860 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1499,
        column: 15,
        name: "height",
        parameterLocations: null
      });
    },
    get C861() {
      return C861 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1500,
        column: 15,
        name: "width",
        parameterLocations: null
      });
    },
    get C859() {
      return C859 = dart.constList([C860 || CT.C860, C861 || CT.C861], src__widgets__widget_inspector._Location);
    },
    get C858() {
      return C858 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1498,
        column: 20,
        name: null,
        parameterLocations: C859 || CT.C859
      });
    },
    get C864() {
      return C864 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1491,
        column: 9,
        name: "animation",
        parameterLocations: null
      });
    },
    get C865() {
      return C865 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1492,
        column: 9,
        name: "builder",
        parameterLocations: null
      });
    },
    get C863() {
      return C863 = dart.constList([C864 || CT.C864, C865 || CT.C865], src__widgets__widget_inspector._Location);
    },
    get C862() {
      return C862 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1490,
        column: 7,
        name: null,
        parameterLocations: C863 || CT.C863
      });
    },
    get C868() {
      return C868 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1532,
        column: 9,
        name: "children",
        parameterLocations: null
      });
    },
    get C867() {
      return C867 = dart.constList([C868 || CT.C868], src__widgets__widget_inspector._Location);
    },
    get C866() {
      return C866 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1531,
        column: 14,
        name: null,
        parameterLocations: C867 || CT.C867
      });
    },
    get C871() {
      return C871 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1528,
        column: 7,
        name: "height",
        parameterLocations: null
      });
    },
    get C872() {
      return C872 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1530,
        column: 7,
        name: "width",
        parameterLocations: null
      });
    },
    get C873() {
      return C873 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1531,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C870() {
      return C870 = dart.constList([C871 || CT.C871, C872 || CT.C872, C873 || CT.C873], src__widgets__widget_inspector._Location);
    },
    get C869() {
      return C869 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1527,
        column: 12,
        name: null,
        parameterLocations: C870 || CT.C870
      });
    },
    get C874() {
      return C874 = dart.const({
        __proto__: src__animation__curves.Cubic.prototype,
        a: 0.42,
        b: 0,
        c: 1,
        d: 1
      });
    },
    get C875() {
      return C875 = dart.const({
        __proto__: src__animation__curves.Cubic.prototype,
        a: 0,
        b: 0,
        c: 0.58,
        d: 1
      });
    },
    get C878() {
      return C878 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1701,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C879() {
      return C879 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1702,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C877() {
      return C877 = dart.constList([C878 || CT.C878, C879 || CT.C879], src__widgets__widget_inspector._Location);
    },
    get C876() {
      return C876 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1700,
        column: 14,
        name: null,
        parameterLocations: C877 || CT.C877
      });
    },
    get C882() {
      return C882 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1698,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C883() {
      return C883 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1700,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C881() {
      return C881 = dart.constList([C882 || CT.C882, C883 || CT.C883], src__widgets__widget_inspector._Location);
    },
    get C880() {
      return C880 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1697,
        column: 23,
        name: null,
        parameterLocations: C881 || CT.C881
      });
    },
    get C886() {
      return C886 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1721,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C887() {
      return C887 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1722,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C885() {
      return C885 = dart.constList([C886 || CT.C886, C887 || CT.C887], src__widgets__widget_inspector._Location);
    },
    get C884() {
      return C884 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1720,
        column: 16,
        name: null,
        parameterLocations: C885 || CT.C885
      });
    },
    get C890() {
      return C890 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1719,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C891() {
      return C891 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1720,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C889() {
      return C889 = dart.constList([C890 || CT.C890, C891 || CT.C891], src__widgets__widget_inspector._Location);
    },
    get C888() {
      return C888 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1718,
        column: 14,
        name: null,
        parameterLocations: C889 || CT.C889
      });
    },
    get C894() {
      return C894 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1716,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C895() {
      return C895 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1718,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C893() {
      return C893 = dart.constList([C894 || CT.C894, C895 || CT.C895], src__widgets__widget_inspector._Location);
    },
    get C892() {
      return C892 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1715,
        column: 23,
        name: null,
        parameterLocations: C893 || CT.C893
      });
    },
    get C898() {
      return C898 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1756,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C899() {
      return C899 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1757,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C897() {
      return C897 = dart.constList([C898 || CT.C898, C899 || CT.C899], src__widgets__widget_inspector._Location);
    },
    get C896() {
      return C896 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1755,
        column: 16,
        name: null,
        parameterLocations: C897 || CT.C897
      });
    },
    get C902() {
      return C902 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1754,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C903() {
      return C903 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1755,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C901() {
      return C901 = dart.constList([C902 || CT.C902, C903 || CT.C903], src__widgets__widget_inspector._Location);
    },
    get C900() {
      return C900 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1753,
        column: 14,
        name: null,
        parameterLocations: C901 || CT.C901
      });
    },
    get C906() {
      return C906 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1752,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C907() {
      return C907 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1753,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C905() {
      return C905 = dart.constList([C906 || CT.C906, C907 || CT.C907], src__widgets__widget_inspector._Location);
    },
    get C904() {
      return C904 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1751,
        column: 12,
        name: null,
        parameterLocations: C905 || CT.C905
      });
    },
    get C910() {
      return C910 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1791,
        column: 15,
        name: "style",
        parameterLocations: null
      });
    },
    get C911() {
      return C911 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1795,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C909() {
      return C909 = dart.constList([C910 || CT.C910, C911 || CT.C911], src__widgets__widget_inspector._Location);
    },
    get C908() {
      return C908 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1790,
        column: 20,
        name: null,
        parameterLocations: C909 || CT.C909
      });
    },
    get C914() {
      return C914 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1789,
        column: 13,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C915() {
      return C915 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1790,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C913() {
      return C913 = dart.constList([C914 || CT.C914, C915 || CT.C915], src__widgets__widget_inspector._Location);
    },
    get C912() {
      return C912 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1786,
        column: 18,
        name: null,
        parameterLocations: C913 || CT.C913
      });
    },
    get C918() {
      return C918 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1785,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C919() {
      return C919 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1786,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C917() {
      return C917 = dart.constList([C918 || CT.C918, C919 || CT.C919], src__widgets__widget_inspector._Location);
    },
    get C916() {
      return C916 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1783,
        column: 16,
        name: null,
        parameterLocations: C917 || CT.C917
      });
    },
    get C922() {
      return C922 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1777,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C923() {
      return C923 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1783,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C921() {
      return C921 = dart.constList([C922 || CT.C922, C923 || CT.C923], src__widgets__widget_inspector._Location);
    },
    get C920() {
      return C920 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1776,
        column: 14,
        name: null,
        parameterLocations: C921 || CT.C921
      });
    },
    get C926() {
      return C926 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1813,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C927() {
      return C927 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1814,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C925() {
      return C925 = dart.constList([C926 || CT.C926, C927 || CT.C927], src__widgets__widget_inspector._Location);
    },
    get C924() {
      return C924 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1812,
        column: 18,
        name: null,
        parameterLocations: C925 || CT.C925
      });
    },
    get C930() {
      return C930 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1810,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C931() {
      return C931 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1812,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C929() {
      return C929 = dart.constList([C930 || CT.C930, C931 || CT.C931], src__widgets__widget_inspector._Location);
    },
    get C928() {
      return C928 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1809,
        column: 16,
        name: null,
        parameterLocations: C929 || CT.C929
      });
    },
    get C934() {
      return C934 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1807,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C935() {
      return C935 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1809,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C933() {
      return C933 = dart.constList([C934 || CT.C934, C935 || CT.C935], src__widgets__widget_inspector._Location);
    },
    get C932() {
      return C932 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1806,
        column: 25,
        name: null,
        parameterLocations: C933 || CT.C933
      });
    },
    get C938() {
      return C938 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1849,
        column: 15,
        name: "style",
        parameterLocations: null
      });
    },
    get C939() {
      return C939 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1853,
        column: 15,
        name: "maxLines",
        parameterLocations: null
      });
    },
    get C940() {
      return C940 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1854,
        column: 15,
        name: "overflow",
        parameterLocations: null
      });
    },
    get C941() {
      return C941 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1855,
        column: 15,
        name: "child",
        parameterLocations: null
      });
    },
    get C937() {
      return C937 = dart.constList([C938 || CT.C938, C939 || CT.C939, C940 || CT.C940, C941 || CT.C941], src__widgets__widget_inspector._Location);
    },
    get C936() {
      return C936 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1848,
        column: 20,
        name: null,
        parameterLocations: C937 || CT.C937
      });
    },
    get C944() {
      return C944 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1847,
        column: 13,
        name: "alignment",
        parameterLocations: null
      });
    },
    get C945() {
      return C945 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1848,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C943() {
      return C943 = dart.constList([C944 || CT.C944, C945 || CT.C945], src__widgets__widget_inspector._Location);
    },
    get C942() {
      return C942 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1844,
        column: 18,
        name: null,
        parameterLocations: C943 || CT.C943
      });
    },
    get C948() {
      return C948 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1843,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C949() {
      return C949 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1844,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C947() {
      return C947 = dart.constList([C948 || CT.C948, C949 || CT.C949], src__widgets__widget_inspector._Location);
    },
    get C946() {
      return C946 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1842,
        column: 16,
        name: null,
        parameterLocations: C947 || CT.C947
      });
    },
    get C952() {
      return C952 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1836,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C953() {
      return C953 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1842,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C951() {
      return C951 = dart.constList([C952 || CT.C952, C953 || CT.C953], src__widgets__widget_inspector._Location);
    },
    get C950() {
      return C950 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1835,
        column: 14,
        name: null,
        parameterLocations: C951 || CT.C951
      });
    },
    get C956() {
      return C956 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1887,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C957() {
      return C957 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1888,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C955() {
      return C955 = dart.constList([C956 || CT.C956, C957 || CT.C957], src__widgets__widget_inspector._Location);
    },
    get C954() {
      return C954 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1886,
        column: 18,
        name: null,
        parameterLocations: C955 || CT.C955
      });
    },
    get C960() {
      return C960 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1884,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C961() {
      return C961 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1886,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C959() {
      return C959 = dart.constList([C960 || CT.C960, C961 || CT.C961], src__widgets__widget_inspector._Location);
    },
    get C958() {
      return C958 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1883,
        column: 16,
        name: null,
        parameterLocations: C959 || CT.C959
      });
    },
    get C964() {
      return C964 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1882,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C965() {
      return C965 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1883,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C963() {
      return C963 = dart.constList([C964 || CT.C964, C965 || CT.C965], src__widgets__widget_inspector._Location);
    },
    get C962() {
      return C962 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1881,
        column: 14,
        name: null,
        parameterLocations: C963 || CT.C963
      });
    },
    get C968() {
      return C968 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1909,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C969() {
      return C969 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1910,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C967() {
      return C967 = dart.constList([C968 || CT.C968, C969 || CT.C969], src__widgets__widget_inspector._Location);
    },
    get C966() {
      return C966 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1908,
        column: 14,
        name: null,
        parameterLocations: C967 || CT.C967
      });
    },
    get C972() {
      return C972 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1906,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C973() {
      return C973 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1908,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C971() {
      return C971 = dart.constList([C972 || CT.C972, C973 || CT.C973], src__widgets__widget_inspector._Location);
    },
    get C970() {
      return C970 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1905,
        column: 23,
        name: null,
        parameterLocations: C971 || CT.C971
      });
    },
    get C976() {
      return C976 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1926,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C977() {
      return C977 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1927,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C975() {
      return C975 = dart.constList([C976 || CT.C976, C977 || CT.C977], src__widgets__widget_inspector._Location);
    },
    get C974() {
      return C974 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1925,
        column: 14,
        name: null,
        parameterLocations: C975 || CT.C975
      });
    },
    get C980() {
      return C980 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1923,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C981() {
      return C981 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1925,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C979() {
      return C979 = dart.constList([C980 || CT.C980, C981 || CT.C981], src__widgets__widget_inspector._Location);
    },
    get C978() {
      return C978 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1922,
        column: 23,
        name: null,
        parameterLocations: C979 || CT.C979
      });
    },
    get C984() {
      return C984 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1970,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C985() {
      return C985 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1971,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C983() {
      return C983 = dart.constList([C984 || CT.C984, C985 || CT.C985], src__widgets__widget_inspector._Location);
    },
    get C982() {
      return C982 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1969,
        column: 16,
        name: null,
        parameterLocations: C983 || CT.C983
      });
    },
    get C988() {
      return C988 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1968,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C989() {
      return C989 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1969,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C987() {
      return C987 = dart.constList([C988 || CT.C988, C989 || CT.C989], src__widgets__widget_inspector._Location);
    },
    get C986() {
      return C986 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1967,
        column: 14,
        name: null,
        parameterLocations: C987 || CT.C987
      });
    },
    get C992() {
      return C992 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1966,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C993() {
      return C993 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 1967,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C991() {
      return C991 = dart.constList([C992 || CT.C992, C993 || CT.C993], src__widgets__widget_inspector._Location);
    },
    get C990() {
      return C990 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 1965,
        column: 12,
        name: null,
        parameterLocations: C991 || CT.C991
      });
    },
    get C994() {
      return C994 = dart.const({
        __proto__: TypeMatcherOfRenderAnimatedOpacity().prototype
      });
    },
    get C997() {
      return C997 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2018,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C998() {
      return C998 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2022,
        column: 13,
        name: "maxLines",
        parameterLocations: null
      });
    },
    get C999() {
      return C999 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2023,
        column: 13,
        name: "overflow",
        parameterLocations: null
      });
    },
    get C1000() {
      return C1000 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2024,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C996() {
      return C996 = dart.constList([C997 || CT.C997, C998 || CT.C998, C999 || CT.C999, C1000 || CT.C1000], src__widgets__widget_inspector._Location);
    },
    get C995() {
      return C995 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2017,
        column: 18,
        name: null,
        parameterLocations: C996 || CT.C996
      });
    },
    get C1003() {
      return C1003 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2016,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C1004() {
      return C1004 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2017,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C1002() {
      return C1002 = dart.constList([C1003 || CT.C1003, C1004 || CT.C1004], src__widgets__widget_inspector._Location);
    },
    get C1001() {
      return C1001 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2015,
        column: 16,
        name: null,
        parameterLocations: C1002 || CT.C1002
      });
    },
    get C1007() {
      return C1007 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2009,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C1008() {
      return C1008 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2015,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C1006() {
      return C1006 = dart.constList([C1007 || CT.C1007, C1008 || CT.C1008], src__widgets__widget_inspector._Location);
    },
    get C1005() {
      return C1005 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2008,
        column: 14,
        name: null,
        parameterLocations: C1006 || CT.C1006
      });
    },
    get C1011() {
      return C1011 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2043,
        column: 13,
        name: "style",
        parameterLocations: null
      });
    },
    get C1012() {
      return C1012 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2047,
        column: 13,
        name: "child",
        parameterLocations: null
      });
    },
    get C1010() {
      return C1010 = dart.constList([C1011 || CT.C1011, C1012 || CT.C1012], src__widgets__widget_inspector._Location);
    },
    get C1009() {
      return C1009 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2042,
        column: 18,
        name: null,
        parameterLocations: C1010 || CT.C1010
      });
    },
    get C1015() {
      return C1015 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2041,
        column: 11,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C1016() {
      return C1016 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2042,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C1014() {
      return C1014 = dart.constList([C1015 || CT.C1015, C1016 || CT.C1016], src__widgets__widget_inspector._Location);
    },
    get C1013() {
      return C1013 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2040,
        column: 16,
        name: null,
        parameterLocations: C1014 || CT.C1014
      });
    },
    get C1019() {
      return C1019 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2034,
        column: 9,
        name: "rect",
        parameterLocations: null
      });
    },
    get C1020() {
      return C1020 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2040,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C1018() {
      return C1018 = dart.constList([C1019 || CT.C1019, C1020 || CT.C1020], src__widgets__widget_inspector._Location);
    },
    get C1017() {
      return C1017 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2033,
        column: 14,
        name: null,
        parameterLocations: C1018 || CT.C1018
      });
    },
    get C1023() {
      return C1023 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2088,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C1024() {
      return C1024 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2089,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C1022() {
      return C1022 = dart.constList([C1023 || CT.C1023, C1024 || CT.C1024], src__widgets__widget_inspector._Location);
    },
    get C1021() {
      return C1021 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2087,
        column: 16,
        name: null,
        parameterLocations: C1022 || CT.C1022
      });
    },
    get C1027() {
      return C1027 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2086,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C1028() {
      return C1028 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2087,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C1026() {
      return C1026 = dart.constList([C1027 || CT.C1027, C1028 || CT.C1028], src__widgets__widget_inspector._Location);
    },
    get C1025() {
      return C1025 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2085,
        column: 14,
        name: null,
        parameterLocations: C1026 || CT.C1026
      });
    },
    get C1031() {
      return C1031 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2084,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C1032() {
      return C1032 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2085,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1030() {
      return C1030 = dart.constList([C1031 || CT.C1031, C1032 || CT.C1032], src__widgets__widget_inspector._Location);
    },
    get C1029() {
      return C1029 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2083,
        column: 12,
        name: null,
        parameterLocations: C1030 || CT.C1030
      });
    },
    get C1035() {
      return C1035 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2106,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C1036() {
      return C1036 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2107,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C1034() {
      return C1034 = dart.constList([C1035 || CT.C1035, C1036 || CT.C1036], src__widgets__widget_inspector._Location);
    },
    get C1033() {
      return C1033 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2105,
        column: 14,
        name: null,
        parameterLocations: C1034 || CT.C1034
      });
    },
    get C1039() {
      return C1039 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2103,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C1040() {
      return C1040 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2105,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1038() {
      return C1038 = dart.constList([C1039 || CT.C1039, C1040 || CT.C1040], src__widgets__widget_inspector._Location);
    },
    get C1037() {
      return C1037 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2102,
        column: 23,
        name: null,
        parameterLocations: C1038 || CT.C1038
      });
    },
    get C1043() {
      return C1043 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2139,
        column: 11,
        name: "style",
        parameterLocations: null
      });
    },
    get C1044() {
      return C1044 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2140,
        column: 11,
        name: "maxLines",
        parameterLocations: null
      });
    },
    get C1045() {
      return C1045 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2141,
        column: 11,
        name: "overflow",
        parameterLocations: null
      });
    },
    get C1046() {
      return C1046 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2142,
        column: 11,
        name: "child",
        parameterLocations: null
      });
    },
    get C1042() {
      return C1042 = dart.constList([C1043 || CT.C1043, C1044 || CT.C1044, C1045 || CT.C1045, C1046 || CT.C1046], src__widgets__widget_inspector._Location);
    },
    get C1041() {
      return C1041 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2138,
        column: 16,
        name: null,
        parameterLocations: C1042 || CT.C1042
      });
    },
    get C1049() {
      return C1049 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2137,
        column: 9,
        name: "opacity",
        parameterLocations: null
      });
    },
    get C1050() {
      return C1050 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2138,
        column: 9,
        name: "child",
        parameterLocations: null
      });
    },
    get C1048() {
      return C1048 = dart.constList([C1049 || CT.C1049, C1050 || CT.C1050], src__widgets__widget_inspector._Location);
    },
    get C1047() {
      return C1047 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2136,
        column: 14,
        name: null,
        parameterLocations: C1048 || CT.C1048
      });
    },
    get C1053() {
      return C1053 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2135,
        column: 7,
        name: "rect",
        parameterLocations: null
      });
    },
    get C1054() {
      return C1054 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2136,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1052() {
      return C1052 = dart.constList([C1053 || CT.C1053, C1054 || CT.C1054], src__widgets__widget_inspector._Location);
    },
    get C1051() {
      return C1051 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2134,
        column: 12,
        name: null,
        parameterLocations: C1052 || CT.C1052
      });
    },
    get C1057() {
      return C1057 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 123,
        column: 7,
        name: "value",
        parameterLocations: null
      });
    },
    get C1058() {
      return C1058 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 124,
        column: 7,
        name: "sized",
        parameterLocations: null
      });
    },
    get C1059() {
      return C1059 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 125,
        column: 7,
        name: "child",
        parameterLocations: null
      });
    },
    get C1056() {
      return C1056 = dart.constList([C1057 || CT.C1057, C1058 || CT.C1058, C1059 || CT.C1059], src__widgets__widget_inspector._Location);
    },
    get C1055() {
      return C1055 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 122,
        column: 14,
        name: null,
        parameterLocations: C1056 || CT.C1056
      });
    },
    get C1062() {
      return C1062 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 129,
        column: 5,
        name: "decoration",
        parameterLocations: null
      });
    },
    get C1063() {
      return C1063 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 133,
        column: 5,
        name: "child",
        parameterLocations: null
      });
    },
    get C1061() {
      return C1061 = dart.constList([C1062 || CT.C1062, C1063 || CT.C1063], src__widgets__widget_inspector._Location);
    },
    get C1060() {
      return C1060 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 128,
        column: 44,
        name: null,
        parameterLocations: C1061 || CT.C1061
      });
    },
    get C1064() {
      return C1064 = dart.const({
        __proto__: core.Duration.prototype,
        [_duration]: 150000
      });
    },
    get C1065() {
      return C1065 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: true,
        color: C19 || CT.C19,
        backgroundColor: null,
        fontFamily: ".SF UI Text",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 17,
        fontWeight: C28 || CT.C28,
        fontStyle: null,
        letterSpacing: -0.08,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C1066() {
      return C1066 = dart.const({
        __proto__: src__painting__text_style.TextStyle.prototype,
        inherit: true,
        color: C19 || CT.C19,
        backgroundColor: null,
        fontFamily: ".SF Pro Display",
        [_fontFamilyFallback]: null,
        [_package]: null,
        fontSize: 34,
        fontWeight: C31 || CT.C31,
        fontStyle: null,
        letterSpacing: 0.24,
        wordSpacing: null,
        textBaseline: null,
        height: null,
        locale: null,
        foreground: null,
        background: null,
        decoration: null,
        decorationColor: null,
        decorationStyle: null,
        decorationThickness: null,
        debugLabel: null,
        shadows: null
      });
    },
    get C1069() {
      return C1069 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2180,
        column: 5,
        name: "maintainSize",
        parameterLocations: null
      });
    },
    get C1070() {
      return C1070 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2181,
        column: 5,
        name: "maintainAnimation",
        parameterLocations: null
      });
    },
    get C1071() {
      return C1071 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2182,
        column: 5,
        name: "maintainState",
        parameterLocations: null
      });
    },
    get C1072() {
      return C1072 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2183,
        column: 5,
        name: "visible",
        parameterLocations: null
      });
    },
    get C1073() {
      return C1073 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2184,
        column: 5,
        name: "child",
        parameterLocations: null
      });
    },
    get C1068() {
      return C1068 = dart.constList([C1069 || CT.C1069, C1070 || CT.C1070, C1071 || CT.C1071, C1072 || CT.C1072, C1073 || CT.C1073], src__widgets__widget_inspector._Location);
    },
    get C1067() {
      return C1067 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2179,
        column: 10,
        name: null,
        parameterLocations: C1068 || CT.C1068
      });
    },
    get C1076() {
      return C1076 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2227,
        column: 9,
        name: "animation",
        parameterLocations: null
      });
    },
    get C1077() {
      return C1077 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2228,
        column: 9,
        name: "bottomNavBar",
        parameterLocations: null
      });
    },
    get C1078() {
      return C1078 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2229,
        column: 9,
        name: "topNavBar",
        parameterLocations: null
      });
    },
    get C1075() {
      return C1075 = dart.constList([C1076 || CT.C1076, C1077 || CT.C1077, C1078 || CT.C1078], src__widgets__widget_inspector._Location);
    },
    get C1074() {
      return C1074 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2226,
        column: 14,
        name: null,
        parameterLocations: C1075 || CT.C1075
      });
    },
    get C1079() {
      return C1079 = dart.const({
        __proto__: src__widgets__heroes.HeroFlightDirection.prototype,
        index: 0,
        [_name$3]: "HeroFlightDirection.push"
      });
    },
    get C1082() {
      return C1082 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2234,
        column: 9,
        name: "animation",
        parameterLocations: null
      });
    },
    get C1083() {
      return C1083 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2235,
        column: 9,
        name: "bottomNavBar",
        parameterLocations: null
      });
    },
    get C1084() {
      return C1084 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: null,
        line: 2236,
        column: 9,
        name: "topNavBar",
        parameterLocations: null
      });
    },
    get C1081() {
      return C1081 = dart.constList([C1082 || CT.C1082, C1083 || CT.C1083, C1084 || CT.C1084], src__widgets__widget_inspector._Location);
    },
    get C1080() {
      return C1080 = dart.const({
        __proto__: src__widgets__widget_inspector._Location.prototype,
        file: "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart",
        line: 2233,
        column: 14,
        name: null,
        parameterLocations: C1081 || CT.C1081
      });
    },
    get C1085() {
      return C1085 = dart.const({
        __proto__: src__widgets__heroes.HeroFlightDirection.prototype,
        index: 1,
        [_name$3]: "HeroFlightDirection.pop"
      });
    }
  });
  src__cupertino__scrollbar.CupertinoScrollbar = class CupertinoScrollbar extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$];
    }
    set child(value) {
      super.child = value;
    }
    createState() {
      return new src__cupertino__scrollbar._CupertinoScrollbarState.new();
    }
  };
  (src__cupertino__scrollbar.CupertinoScrollbar.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$] = child;
    src__cupertino__scrollbar.CupertinoScrollbar.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__scrollbar.CupertinoScrollbar.prototype;
  dart.addTypeTests(src__cupertino__scrollbar.CupertinoScrollbar);
  const child$ = Symbol("CupertinoScrollbar.child");
  dart.setMethodSignature(src__cupertino__scrollbar.CupertinoScrollbar, () => ({
    __proto__: dart.getMethods(src__cupertino__scrollbar.CupertinoScrollbar.__proto__),
    createState: dart.fnType(src__cupertino__scrollbar._CupertinoScrollbarState, [])
  }));
  dart.setLibraryUri(src__cupertino__scrollbar.CupertinoScrollbar, "package:flutter_web/src/cupertino/scrollbar.dart");
  dart.setFieldSignature(src__cupertino__scrollbar.CupertinoScrollbar, () => ({
    __proto__: dart.getFields(src__cupertino__scrollbar.CupertinoScrollbar.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _painter = dart.privateName(src__cupertino__scrollbar, "_painter");
  const _textDirection = dart.privateName(src__cupertino__scrollbar, "_textDirection");
  const _fadeoutAnimationController = dart.privateName(src__cupertino__scrollbar, "_fadeoutAnimationController");
  const _fadeoutOpacityAnimation = dart.privateName(src__cupertino__scrollbar, "_fadeoutOpacityAnimation");
  const _fadeoutTimer = dart.privateName(src__cupertino__scrollbar, "_fadeoutTimer");
  const _buildCupertinoScrollbarPainter = dart.privateName(src__cupertino__scrollbar, "_buildCupertinoScrollbarPainter");
  const _handleScrollNotification = dart.privateName(src__cupertino__scrollbar, "_handleScrollNotification");
  let C2;
  let C1;
  let C0;
  let C5;
  let C6;
  let C4;
  let C3;
  let C9;
  let C8;
  let C7;
  let C12;
  let C13;
  let C11;
  let C10;
  const State_TickerProviderStateMixin$ = class State_TickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__scrollbar.CupertinoScrollbar) {};
  (State_TickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.TickerProviderStateMixin$(src__cupertino__scrollbar.CupertinoScrollbar)[dart.mixinNew].call(this);
    State_TickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_TickerProviderStateMixin$.prototype;
  dart.applyMixin(State_TickerProviderStateMixin$, src__widgets__ticker_provider.TickerProviderStateMixin$(src__cupertino__scrollbar.CupertinoScrollbar));
  src__cupertino__scrollbar._CupertinoScrollbarState = class _CupertinoScrollbarState extends State_TickerProviderStateMixin$ {
    initState() {
      super.initState();
      this[_fadeoutAnimationController] = new src__animation__animation_controller.AnimationController.new({vsync: this, duration: src__cupertino__scrollbar._kScrollbarFadeDuration});
      this[_fadeoutOpacityAnimation] = new src__animation__animations.CurvedAnimation.new({parent: this[_fadeoutAnimationController], curve: src__animation__curves.Curves.fastOutSlowIn});
    }
    didChangeDependencies() {
      super.didChangeDependencies();
      this[_textDirection] = src__widgets__basic.Directionality.of(this.context);
      this[_painter] = this[_buildCupertinoScrollbarPainter]();
    }
    [_buildCupertinoScrollbarPainter]() {
      return new src__widgets__scrollbar.ScrollbarPainter.new({color: src__cupertino__scrollbar._kScrollbarColor, textDirection: this[_textDirection], thickness: 2.5, fadeoutOpacityAnimation: this[_fadeoutOpacityAnimation], mainAxisMargin: 3, crossAxisMargin: 3, radius: src__cupertino__scrollbar._kScrollbarRadius, padding: src__widgets__media_query.MediaQuery.of(this.context).padding, minLength: 36, minOverscrollLength: 8});
    }
    [_handleScrollNotification](notification) {
      let t0, t0$;
      if (src__widgets__scroll_notification.ScrollUpdateNotification.is(notification) || src__widgets__scroll_notification.OverscrollNotification.is(notification)) {
        if (!dart.equals(this[_fadeoutAnimationController].status, src__animation__animation.AnimationStatus.forward)) {
          this[_fadeoutAnimationController].forward();
        }
        t0 = this[_fadeoutTimer];
        t0 == null ? null : t0.cancel();
        this[_painter].update(notification.metrics, notification.metrics.axisDirection);
      } else if (src__widgets__scroll_notification.ScrollEndNotification.is(notification)) {
        t0$ = this[_fadeoutTimer];
        t0$ == null ? null : t0$.cancel();
        this[_fadeoutTimer] = async.Timer.new(src__cupertino__scrollbar._kScrollbarTimeToFade, dart.fn(() => {
          this[_fadeoutAnimationController].reverse();
          this[_fadeoutTimer] = null;
        }, VoidToNull()));
      }
      return false;
    }
    dispose() {
      let t0;
      this[_fadeoutAnimationController].dispose();
      t0 = this[_fadeoutTimer];
      t0 == null ? null : t0.cancel();
      this[_painter].dispose();
      super.dispose();
    }
    build(context) {
      return new (NotificationListenerOfScrollNotification()).new({onNotification: dart.bind(this, _handleScrollNotification), child: new src__widgets__basic.RepaintBoundary.new({child: new src__widgets__basic.CustomPaint.new({foregroundPainter: this[_painter], child: new src__widgets__basic.RepaintBoundary.new({child: this.widget.child, $creationLocationd_0dea112b090073317d4: C0 || CT.C0}), $creationLocationd_0dea112b090073317d4: C3 || CT.C3}), $creationLocationd_0dea112b090073317d4: C7 || CT.C7}), $creationLocationd_0dea112b090073317d4: C10 || CT.C10});
    }
  };
  (src__cupertino__scrollbar._CupertinoScrollbarState.new = function() {
    this[_painter] = null;
    this[_textDirection] = null;
    this[_fadeoutAnimationController] = null;
    this[_fadeoutOpacityAnimation] = null;
    this[_fadeoutTimer] = null;
    src__cupertino__scrollbar._CupertinoScrollbarState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__scrollbar._CupertinoScrollbarState.prototype;
  dart.addTypeTests(src__cupertino__scrollbar._CupertinoScrollbarState);
  dart.setMethodSignature(src__cupertino__scrollbar._CupertinoScrollbarState, () => ({
    __proto__: dart.getMethods(src__cupertino__scrollbar._CupertinoScrollbarState.__proto__),
    [_buildCupertinoScrollbarPainter]: dart.fnType(src__widgets__scrollbar.ScrollbarPainter, []),
    [_handleScrollNotification]: dart.fnType(core.bool, [src__widgets__scroll_notification.ScrollNotification]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__scrollbar._CupertinoScrollbarState, "package:flutter_web/src/cupertino/scrollbar.dart");
  dart.setFieldSignature(src__cupertino__scrollbar._CupertinoScrollbarState, () => ({
    __proto__: dart.getFields(src__cupertino__scrollbar._CupertinoScrollbarState.__proto__),
    [_painter]: dart.fieldType(src__widgets__scrollbar.ScrollbarPainter),
    [_textDirection]: dart.fieldType(ui$.TextDirection),
    [_fadeoutAnimationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_fadeoutOpacityAnimation]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_fadeoutTimer]: dart.fieldType(async.Timer)
  }));
  const _value = dart.privateName(ui$, "_value");
  let C14;
  let C15;
  const _duration = dart.privateName(core, "_duration");
  let C16;
  let C17;
  dart.defineLazy(src__cupertino__scrollbar, {
    /*src__cupertino__scrollbar._kScrollbarColor*/get _kScrollbarColor() {
      return C14 || CT.C14;
    },
    /*src__cupertino__scrollbar._kScrollbarMinLength*/get _kScrollbarMinLength() {
      return 36;
    },
    /*src__cupertino__scrollbar._kScrollbarMinOverscrollLength*/get _kScrollbarMinOverscrollLength() {
      return 8;
    },
    /*src__cupertino__scrollbar._kScrollbarRadius*/get _kScrollbarRadius() {
      return C15 || CT.C15;
    },
    /*src__cupertino__scrollbar._kScrollbarTimeToFade*/get _kScrollbarTimeToFade() {
      return C16 || CT.C16;
    },
    /*src__cupertino__scrollbar._kScrollbarFadeDuration*/get _kScrollbarFadeDuration() {
      return C17 || CT.C17;
    },
    /*src__cupertino__scrollbar._kScrollbarThickness*/get _kScrollbarThickness() {
      return 2.5;
    },
    /*src__cupertino__scrollbar._kScrollbarMainAxisMargin*/get _kScrollbarMainAxisMargin() {
      return 3;
    },
    /*src__cupertino__scrollbar._kScrollbarCrossAxisMargin*/get _kScrollbarCrossAxisMargin() {
      return 3;
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
  dart.setLibraryUri(src__cupertino__text_theme.CupertinoTextThemeData, "package:flutter_web/src/cupertino/text_theme.dart");
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
  let C19;
  const _fontFamilyFallback = dart.privateName(src__painting__text_style, "_fontFamilyFallback");
  const _package = dart.privateName(src__painting__text_style, "_package");
  const _mask = dart.privateName(ui$, "_mask");
  let C20;
  let C18;
  let C22;
  let C21;
  let C24;
  let C23;
  let C26;
  let C25;
  let C28;
  let C27;
  let C29;
  let C31;
  let C30;
  let C32;
  dart.defineLazy(src__cupertino__text_theme, {
    /*src__cupertino__text_theme._kDefaultLightTextStyle*/get _kDefaultLightTextStyle() {
      return C18 || CT.C18;
    },
    /*src__cupertino__text_theme._kDefaultDarkTextStyle*/get _kDefaultDarkTextStyle() {
      return C21 || CT.C21;
    },
    /*src__cupertino__text_theme._kDefaultActionTextStyle*/get _kDefaultActionTextStyle() {
      return C23 || CT.C23;
    },
    /*src__cupertino__text_theme._kDefaultTabLabelTextStyle*/get _kDefaultTabLabelTextStyle() {
      return C25 || CT.C25;
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleLightTextStyle*/get _kDefaultMiddleTitleLightTextStyle() {
      return C27 || CT.C27;
    },
    /*src__cupertino__text_theme._kDefaultMiddleTitleDarkTextStyle*/get _kDefaultMiddleTitleDarkTextStyle() {
      return C29 || CT.C29;
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleLightTextStyle*/get _kDefaultLargeTitleLightTextStyle() {
      return C30 || CT.C30;
    },
    /*src__cupertino__text_theme._kDefaultLargeTitleDarkTextStyle*/get _kDefaultLargeTitleDarkTextStyle() {
      return C32 || CT.C32;
    }
  });
  let C33;
  let C34;
  let C35;
  let C36;
  let C37;
  let C38;
  src__cupertino__colors.CupertinoColors = class CupertinoColors extends core.Object {};
  (src__cupertino__colors.CupertinoColors.__ = function() {
    ;
  }).prototype = src__cupertino__colors.CupertinoColors.prototype;
  dart.addTypeTests(src__cupertino__colors.CupertinoColors);
  dart.setLibraryUri(src__cupertino__colors.CupertinoColors, "package:flutter_web/src/cupertino/colors.dart");
  dart.defineLazy(src__cupertino__colors.CupertinoColors, {
    /*src__cupertino__colors.CupertinoColors.activeBlue*/get activeBlue() {
      return C24 || CT.C24;
    },
    /*src__cupertino__colors.CupertinoColors.activeGreen*/get activeGreen() {
      return C33 || CT.C33;
    },
    /*src__cupertino__colors.CupertinoColors.activeOrange*/get activeOrange() {
      return C34 || CT.C34;
    },
    /*src__cupertino__colors.CupertinoColors.white*/get white() {
      return C22 || CT.C22;
    },
    /*src__cupertino__colors.CupertinoColors.black*/get black() {
      return C19 || CT.C19;
    },
    /*src__cupertino__colors.CupertinoColors.lightBackgroundGray*/get lightBackgroundGray() {
      return C35 || CT.C35;
    },
    /*src__cupertino__colors.CupertinoColors.extraLightBackgroundGray*/get extraLightBackgroundGray() {
      return C36 || CT.C36;
    },
    /*src__cupertino__colors.CupertinoColors.darkBackgroundGray*/get darkBackgroundGray() {
      return C37 || CT.C37;
    },
    /*src__cupertino__colors.CupertinoColors.inactiveGray*/get inactiveGray() {
      return C26 || CT.C26;
    },
    /*src__cupertino__colors.CupertinoColors.destructiveRed*/get destructiveRed() {
      return C38 || CT.C38;
    }
  });
  let C39;
  let C40;
  const _languageCode = dart.privateName(ui$, "_languageCode");
  const _countryCode = dart.privateName(ui$, "_countryCode");
  let C42;
  let C41;
  src__cupertino__app.CupertinoApp = class CupertinoApp extends src__widgets__framework.StatefulWidget {
    get navigatorKey() {
      return this[navigatorKey$];
    }
    set navigatorKey(value) {
      super.navigatorKey = value;
    }
    get home() {
      return this[home$];
    }
    set home(value) {
      super.home = value;
    }
    get theme() {
      return this[theme$];
    }
    set theme(value) {
      super.theme = value;
    }
    get routes() {
      return this[routes$];
    }
    set routes(value) {
      super.routes = value;
    }
    get initialRoute() {
      return this[initialRoute$];
    }
    set initialRoute(value) {
      super.initialRoute = value;
    }
    get onGenerateRoute() {
      return this[onGenerateRoute$];
    }
    set onGenerateRoute(value) {
      super.onGenerateRoute = value;
    }
    get onUnknownRoute() {
      return this[onUnknownRoute$];
    }
    set onUnknownRoute(value) {
      super.onUnknownRoute = value;
    }
    get navigatorObservers() {
      return this[navigatorObservers$];
    }
    set navigatorObservers(value) {
      super.navigatorObservers = value;
    }
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
    get onGenerateTitle() {
      return this[onGenerateTitle$];
    }
    set onGenerateTitle(value) {
      super.onGenerateTitle = value;
    }
    get color() {
      return this[color$];
    }
    set color(value) {
      super.color = value;
    }
    get locale() {
      return this[locale$];
    }
    set locale(value) {
      super.locale = value;
    }
    get localizationsDelegates() {
      return this[localizationsDelegates$];
    }
    set localizationsDelegates(value) {
      super.localizationsDelegates = value;
    }
    get localeListResolutionCallback() {
      return this[localeListResolutionCallback$];
    }
    set localeListResolutionCallback(value) {
      super.localeListResolutionCallback = value;
    }
    get localeResolutionCallback() {
      return this[localeResolutionCallback$];
    }
    set localeResolutionCallback(value) {
      super.localeResolutionCallback = value;
    }
    get supportedLocales() {
      return this[supportedLocales$];
    }
    set supportedLocales(value) {
      super.supportedLocales = value;
    }
    get showPerformanceOverlay() {
      return this[showPerformanceOverlay$];
    }
    set showPerformanceOverlay(value) {
      super.showPerformanceOverlay = value;
    }
    get checkerboardRasterCacheImages() {
      return this[checkerboardRasterCacheImages$];
    }
    set checkerboardRasterCacheImages(value) {
      super.checkerboardRasterCacheImages = value;
    }
    get checkerboardOffscreenLayers() {
      return this[checkerboardOffscreenLayers$];
    }
    set checkerboardOffscreenLayers(value) {
      super.checkerboardOffscreenLayers = value;
    }
    get showSemanticsDebugger() {
      return this[showSemanticsDebugger$];
    }
    set showSemanticsDebugger(value) {
      super.showSemanticsDebugger = value;
    }
    get debugShowCheckedModeBanner() {
      return this[debugShowCheckedModeBanner$];
    }
    set debugShowCheckedModeBanner(value) {
      super.debugShowCheckedModeBanner = value;
    }
    createState() {
      return new src__cupertino__app._CupertinoAppState.new();
    }
    static createCupertinoHeroController() {
      return new src__widgets__heroes.HeroController.new();
    }
  };
  (src__cupertino__app.CupertinoApp.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigatorKey = opts && 'navigatorKey' in opts ? opts.navigatorKey : null;
    let home = opts && 'home' in opts ? opts.home : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let routes = opts && 'routes' in opts ? opts.routes : C39 || CT.C39;
    let initialRoute = opts && 'initialRoute' in opts ? opts.initialRoute : null;
    let onGenerateRoute = opts && 'onGenerateRoute' in opts ? opts.onGenerateRoute : null;
    let onUnknownRoute = opts && 'onUnknownRoute' in opts ? opts.onUnknownRoute : null;
    let navigatorObservers = opts && 'navigatorObservers' in opts ? opts.navigatorObservers : C40 || CT.C40;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    let title = opts && 'title' in opts ? opts.title : "";
    let onGenerateTitle = opts && 'onGenerateTitle' in opts ? opts.onGenerateTitle : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let locale = opts && 'locale' in opts ? opts.locale : null;
    let localizationsDelegates = opts && 'localizationsDelegates' in opts ? opts.localizationsDelegates : null;
    let localeListResolutionCallback = opts && 'localeListResolutionCallback' in opts ? opts.localeListResolutionCallback : null;
    let localeResolutionCallback = opts && 'localeResolutionCallback' in opts ? opts.localeResolutionCallback : null;
    let supportedLocales = opts && 'supportedLocales' in opts ? opts.supportedLocales : C41 || CT.C41;
    let showPerformanceOverlay = opts && 'showPerformanceOverlay' in opts ? opts.showPerformanceOverlay : false;
    let checkerboardRasterCacheImages = opts && 'checkerboardRasterCacheImages' in opts ? opts.checkerboardRasterCacheImages : false;
    let checkerboardOffscreenLayers = opts && 'checkerboardOffscreenLayers' in opts ? opts.checkerboardOffscreenLayers : false;
    let showSemanticsDebugger = opts && 'showSemanticsDebugger' in opts ? opts.showSemanticsDebugger : false;
    let debugShowCheckedModeBanner = opts && 'debugShowCheckedModeBanner' in opts ? opts.debugShowCheckedModeBanner : true;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navigatorKey$] = navigatorKey;
    this[home$] = home;
    this[theme$] = theme;
    this[routes$] = routes;
    this[initialRoute$] = initialRoute;
    this[onGenerateRoute$] = onGenerateRoute;
    this[onUnknownRoute$] = onUnknownRoute;
    this[navigatorObservers$] = navigatorObservers;
    this[builder$] = builder;
    this[title$] = title;
    this[onGenerateTitle$] = onGenerateTitle;
    this[color$] = color;
    this[locale$] = locale;
    this[localizationsDelegates$] = localizationsDelegates;
    this[localeListResolutionCallback$] = localeListResolutionCallback;
    this[localeResolutionCallback$] = localeResolutionCallback;
    this[supportedLocales$] = supportedLocales;
    this[showPerformanceOverlay$] = showPerformanceOverlay;
    this[checkerboardRasterCacheImages$] = checkerboardRasterCacheImages;
    this[checkerboardOffscreenLayers$] = checkerboardOffscreenLayers;
    this[showSemanticsDebugger$] = showSemanticsDebugger;
    this[debugShowCheckedModeBanner$] = debugShowCheckedModeBanner;
    if (!(routes != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 94, 16, "routes != null");
    if (!(navigatorObservers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 95, 16, "navigatorObservers != null");
    if (!(title != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 96, 16, "title != null");
    if (!(showPerformanceOverlay != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 97, 16, "showPerformanceOverlay != null");
    if (!(checkerboardRasterCacheImages != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 98, 16, "checkerboardRasterCacheImages != null");
    if (!(checkerboardOffscreenLayers != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 99, 16, "checkerboardOffscreenLayers != null");
    if (!(showSemanticsDebugger != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 100, 16, "showSemanticsDebugger != null");
    if (!(debugShowCheckedModeBanner != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/app.dart", 101, 16, "debugShowCheckedModeBanner != null");
    src__cupertino__app.CupertinoApp.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__app.CupertinoApp.prototype;
  dart.addTypeTests(src__cupertino__app.CupertinoApp);
  const navigatorKey$ = Symbol("CupertinoApp.navigatorKey");
  const home$ = Symbol("CupertinoApp.home");
  const theme$ = Symbol("CupertinoApp.theme");
  const routes$ = Symbol("CupertinoApp.routes");
  const initialRoute$ = Symbol("CupertinoApp.initialRoute");
  const onGenerateRoute$ = Symbol("CupertinoApp.onGenerateRoute");
  const onUnknownRoute$ = Symbol("CupertinoApp.onUnknownRoute");
  const navigatorObservers$ = Symbol("CupertinoApp.navigatorObservers");
  const builder$ = Symbol("CupertinoApp.builder");
  const title$ = Symbol("CupertinoApp.title");
  const onGenerateTitle$ = Symbol("CupertinoApp.onGenerateTitle");
  const color$ = Symbol("CupertinoApp.color");
  const locale$ = Symbol("CupertinoApp.locale");
  const localizationsDelegates$ = Symbol("CupertinoApp.localizationsDelegates");
  const localeListResolutionCallback$ = Symbol("CupertinoApp.localeListResolutionCallback");
  const localeResolutionCallback$ = Symbol("CupertinoApp.localeResolutionCallback");
  const supportedLocales$ = Symbol("CupertinoApp.supportedLocales");
  const showPerformanceOverlay$ = Symbol("CupertinoApp.showPerformanceOverlay");
  const checkerboardRasterCacheImages$ = Symbol("CupertinoApp.checkerboardRasterCacheImages");
  const checkerboardOffscreenLayers$ = Symbol("CupertinoApp.checkerboardOffscreenLayers");
  const showSemanticsDebugger$ = Symbol("CupertinoApp.showSemanticsDebugger");
  const debugShowCheckedModeBanner$ = Symbol("CupertinoApp.debugShowCheckedModeBanner");
  dart.setMethodSignature(src__cupertino__app.CupertinoApp, () => ({
    __proto__: dart.getMethods(src__cupertino__app.CupertinoApp.__proto__),
    createState: dart.fnType(src__cupertino__app._CupertinoAppState, [])
  }));
  dart.setLibraryUri(src__cupertino__app.CupertinoApp, "package:flutter_web/src/cupertino/app.dart");
  dart.setFieldSignature(src__cupertino__app.CupertinoApp, () => ({
    __proto__: dart.getFields(src__cupertino__app.CupertinoApp.__proto__),
    navigatorKey: dart.finalFieldType(src__widgets__framework.GlobalKey$(src__widgets__navigator.NavigatorState)),
    home: dart.finalFieldType(src__widgets__framework.Widget),
    theme: dart.finalFieldType(src__cupertino__theme.CupertinoThemeData),
    routes: dart.finalFieldType(core.Map$(core.String, dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext]))),
    initialRoute: dart.finalFieldType(core.String),
    onGenerateRoute: dart.finalFieldType(dart.fnType(src__widgets__navigator.Route, [src__widgets__navigator.RouteSettings])),
    onUnknownRoute: dart.finalFieldType(dart.fnType(src__widgets__navigator.Route, [src__widgets__navigator.RouteSettings])),
    navigatorObservers: dart.finalFieldType(core.List$(src__widgets__navigator.NavigatorObserver)),
    builder: dart.finalFieldType(dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, src__widgets__framework.Widget])),
    title: dart.finalFieldType(core.String),
    onGenerateTitle: dart.finalFieldType(dart.fnType(core.String, [src__widgets__framework.BuildContext])),
    color: dart.finalFieldType(ui$.Color),
    locale: dart.finalFieldType(ui$.Locale),
    localizationsDelegates: dart.finalFieldType(core.Iterable$(src__widgets__localizations.LocalizationsDelegate)),
    localeListResolutionCallback: dart.finalFieldType(dart.fnType(ui$.Locale, [core.List$(ui$.Locale), core.Iterable$(ui$.Locale)])),
    localeResolutionCallback: dart.finalFieldType(dart.fnType(ui$.Locale, [ui$.Locale, core.Iterable$(ui$.Locale)])),
    supportedLocales: dart.finalFieldType(core.Iterable$(ui$.Locale)),
    showPerformanceOverlay: dart.finalFieldType(core.bool),
    checkerboardRasterCacheImages: dart.finalFieldType(core.bool),
    checkerboardOffscreenLayers: dart.finalFieldType(core.bool),
    showSemanticsDebugger: dart.finalFieldType(core.bool),
    debugShowCheckedModeBanner: dart.finalFieldType(core.bool)
  }));
  let C43;
  src__cupertino__app._AlwaysCupertinoScrollBehavior = class _AlwaysCupertinoScrollBehavior extends src__widgets__scroll_configuration.ScrollBehavior {
    buildViewportChrome(context, child, axisDirection) {
      return child;
    }
    getScrollPhysics(context) {
      return C43 || CT.C43;
    }
  };
  (src__cupertino__app._AlwaysCupertinoScrollBehavior.new = function() {
    src__cupertino__app._AlwaysCupertinoScrollBehavior.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__app._AlwaysCupertinoScrollBehavior.prototype;
  dart.addTypeTests(src__cupertino__app._AlwaysCupertinoScrollBehavior);
  dart.setLibraryUri(src__cupertino__app._AlwaysCupertinoScrollBehavior, "package:flutter_web/src/cupertino/app.dart");
  const _heroController = dart.privateName(src__cupertino__app, "_heroController");
  const _navigatorObservers = dart.privateName(src__cupertino__app, "_navigatorObservers");
  const _updateNavigator = dart.privateName(src__cupertino__app, "_updateNavigator");
  const _localizationsDelegates = dart.privateName(src__cupertino__app, "_localizationsDelegates");
  const _brightness$ = dart.privateName(src__cupertino__theme, "_brightness");
  const _primaryColor$ = dart.privateName(src__cupertino__theme, "_primaryColor");
  const _primaryContrastingColor$ = dart.privateName(src__cupertino__theme, "_primaryContrastingColor");
  const _textTheme$ = dart.privateName(src__cupertino__theme, "_textTheme");
  const _barBackgroundColor$ = dart.privateName(src__cupertino__theme, "_barBackgroundColor");
  const _scaffoldBackgroundColor$ = dart.privateName(src__cupertino__theme, "_scaffoldBackgroundColor");
  let C44;
  let C46;
  let C45;
  let C49;
  let C50;
  let C51;
  let C48;
  let C47;
  let C54;
  let C55;
  let C56;
  let C57;
  let C58;
  let C59;
  let C60;
  let C61;
  let C62;
  let C63;
  let C64;
  let C65;
  let C66;
  let C67;
  let C68;
  let C69;
  let C70;
  let C71;
  let C72;
  let C73;
  let C74;
  let C75;
  let C76;
  let C77;
  let C78;
  let C53;
  let C52;
  let C81;
  let C82;
  let C80;
  let C79;
  let C85;
  let C86;
  let C84;
  let C83;
  src__cupertino__app._CupertinoAppState = class _CupertinoAppState extends src__widgets__framework.State$(src__cupertino__app.CupertinoApp) {
    initState() {
      super.initState();
      this[_heroController] = src__cupertino__app.CupertinoApp.createCupertinoHeroController();
      this[_updateNavigator]();
    }
    didUpdateWidget(oldWidget) {
      src__cupertino__app.CupertinoApp._check(oldWidget);
      super.didUpdateWidget(oldWidget);
      if (!dart.equals(this.widget.navigatorKey, oldWidget.navigatorKey)) {
        this[_heroController] = src__cupertino__app.CupertinoApp.createCupertinoHeroController();
      }
      this[_updateNavigator]();
    }
    [_updateNavigator]() {
      let t0;
      if (this.widget.home != null || dart.test(this.widget.routes[$isNotEmpty]) || this.widget.onGenerateRoute != null || this.widget.onUnknownRoute != null) {
        this[_navigatorObservers] = (t0 = ListOfNavigatorObserver().from(this.widget.navigatorObservers), t0[$add](this[_heroController]), t0);
      } else {
        this[_navigatorObservers] = C40 || CT.C40;
      }
    }
    get [_localizationsDelegates]() {
      return new (SyncIterableOfLocalizationsDelegate()).new((function* _localizationsDelegates() {
        if (this.widget.localizationsDelegates != null) yield* this.widget.localizationsDelegates;
        yield src__cupertino__localizations.DefaultCupertinoLocalizations.delegate;
      }).bind(this));
    }
    build(context) {
      let t0, t0$;
      let effectiveThemeData = (t0 = this.widget.theme, t0 == null ? C44 || CT.C44 : t0);
      return new src__widgets__scroll_configuration.ScrollConfiguration.new({behavior: new src__cupertino__app._AlwaysCupertinoScrollBehavior.new(), child: new src__cupertino__theme.CupertinoTheme.new({data: effectiveThemeData, child: new src__widgets__app.WidgetsApp.new({key: new (GlobalObjectKeyOfStateOfStatefulWidget()).new(this), navigatorKey: this.widget.navigatorKey, navigatorObservers: this[_navigatorObservers], pageRouteBuilder: dart.fn((T, settings, builder) => new (src__cupertino__route.CupertinoPageRoute$(T)).new({settings: settings, builder: builder}), RouteSettingsAndFnToCupertinoPageRouteOfT()), home: this.widget.home, routes: this.widget.routes, initialRoute: this.widget.initialRoute, onGenerateRoute: this.widget.onGenerateRoute, onUnknownRoute: this.widget.onUnknownRoute, builder: this.widget.builder, title: this.widget.title, onGenerateTitle: this.widget.onGenerateTitle, textStyle: effectiveThemeData.textTheme.textStyle, color: (t0$ = this.widget.color, t0$ == null ? src__cupertino__colors.CupertinoColors.activeBlue : t0$), locale: this.widget.locale, localizationsDelegates: this[_localizationsDelegates], localeResolutionCallback: this.widget.localeResolutionCallback, localeListResolutionCallback: this.widget.localeListResolutionCallback, supportedLocales: this.widget.supportedLocales, showPerformanceOverlay: this.widget.showPerformanceOverlay, checkerboardRasterCacheImages: this.widget.checkerboardRasterCacheImages, checkerboardOffscreenLayers: this.widget.checkerboardOffscreenLayers, showSemanticsDebugger: this.widget.showSemanticsDebugger, debugShowCheckedModeBanner: this.widget.debugShowCheckedModeBanner, inspectorSelectButtonBuilder: dart.fn((context, onPressed) => new src__cupertino__button.CupertinoButton.filled({child: C45 || CT.C45, padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: onPressed, $creationLocationd_0dea112b090073317d4: C47 || CT.C47}), BuildContextAndFnToCupertinoButton()), $creationLocationd_0dea112b090073317d4: C52 || CT.C52}), $creationLocationd_0dea112b090073317d4: C79 || CT.C79}), $creationLocationd_0dea112b090073317d4: C83 || CT.C83});
    }
  };
  (src__cupertino__app._CupertinoAppState.new = function() {
    this[_heroController] = null;
    this[_navigatorObservers] = null;
    src__cupertino__app._CupertinoAppState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__app._CupertinoAppState.prototype;
  dart.addTypeTests(src__cupertino__app._CupertinoAppState);
  dart.setMethodSignature(src__cupertino__app._CupertinoAppState, () => ({
    __proto__: dart.getMethods(src__cupertino__app._CupertinoAppState.__proto__),
    [_updateNavigator]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setGetterSignature(src__cupertino__app._CupertinoAppState, () => ({
    __proto__: dart.getGetters(src__cupertino__app._CupertinoAppState.__proto__),
    [_localizationsDelegates]: core.Iterable$(src__widgets__localizations.LocalizationsDelegate)
  }));
  dart.setLibraryUri(src__cupertino__app._CupertinoAppState, "package:flutter_web/src/cupertino/app.dart");
  dart.setFieldSignature(src__cupertino__app._CupertinoAppState, () => ({
    __proto__: dart.getFields(src__cupertino__app._CupertinoAppState.__proto__),
    [_heroController]: dart.fieldType(src__widgets__heroes.HeroController),
    [_navigatorObservers]: dart.fieldType(core.List$(src__widgets__navigator.NavigatorObserver))
  }));
  let C89;
  let C90;
  let C88;
  let C87;
  let C93;
  let C94;
  let C92;
  let C91;
  src__cupertino__theme.CupertinoTheme = class CupertinoTheme extends src__widgets__framework.StatelessWidget {
    get data() {
      return this[data$];
    }
    set data(value) {
      super.data = value;
    }
    get child() {
      return this[child$0];
    }
    set child(value) {
      super.child = value;
    }
    static of(context) {
      let t0, t0$, t0$0;
      let inheritedTheme = src__cupertino__theme._InheritedCupertinoTheme._check(context.inheritFromWidgetOfExactType(dart.wrapType(src__cupertino__theme._InheritedCupertinoTheme)));
      t0$0 = (t0$ = (t0 = inheritedTheme, t0 == null ? null : t0.theme), t0$ == null ? null : t0$.data);
      return t0$0 == null ? C44 || CT.C44 : t0$0;
    }
    build(context) {
      return new src__cupertino__theme._InheritedCupertinoTheme.new({theme: this, child: new src__widgets__icon_theme.IconTheme.new({data: new src__widgets__icon_theme_data.IconThemeData.new({color: this.data.primaryColor}), child: this.child, $creationLocationd_0dea112b090073317d4: C87 || CT.C87}), $creationLocationd_0dea112b090073317d4: C91 || CT.C91});
    }
  };
  (src__cupertino__theme.CupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let data = opts && 'data' in opts ? opts.data : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[data$] = data;
    this[child$0] = child;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart", 45, 16, "child != null");
    if (!(data != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart", 46, 16, "data != null");
    src__cupertino__theme.CupertinoTheme.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__theme.CupertinoTheme.prototype;
  dart.addTypeTests(src__cupertino__theme.CupertinoTheme);
  const data$ = Symbol("CupertinoTheme.data");
  const child$0 = Symbol("CupertinoTheme.child");
  dart.setMethodSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getMethods(src__cupertino__theme.CupertinoTheme.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__theme.CupertinoTheme, "package:flutter_web/src/cupertino/theme.dart");
  dart.setFieldSignature(src__cupertino__theme.CupertinoTheme, () => ({
    __proto__: dart.getFields(src__cupertino__theme.CupertinoTheme.__proto__),
    data: dart.finalFieldType(src__cupertino__theme.CupertinoThemeData),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  src__cupertino__theme._InheritedCupertinoTheme = class _InheritedCupertinoTheme extends src__widgets__framework.InheritedWidget {
    updateShouldNotify(old) {
      src__cupertino__theme._InheritedCupertinoTheme._check(old);
      return !dart.equals(this.theme.data, old.theme.data);
    }
  };
  (src__cupertino__theme._InheritedCupertinoTheme.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let theme = opts && 'theme' in opts ? opts.theme : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.theme = theme;
    if (!(theme != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/theme.dart", 83, 16, "theme != null");
    src__cupertino__theme._InheritedCupertinoTheme.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__theme._InheritedCupertinoTheme.prototype;
  dart.addTypeTests(src__cupertino__theme._InheritedCupertinoTheme);
  dart.setMethodSignature(src__cupertino__theme._InheritedCupertinoTheme, () => ({
    __proto__: dart.getMethods(src__cupertino__theme._InheritedCupertinoTheme.__proto__),
    updateShouldNotify: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(src__cupertino__theme._InheritedCupertinoTheme, "package:flutter_web/src/cupertino/theme.dart");
  dart.setFieldSignature(src__cupertino__theme._InheritedCupertinoTheme, () => ({
    __proto__: dart.getFields(src__cupertino__theme._InheritedCupertinoTheme.__proto__),
    theme: dart.finalFieldType(src__cupertino__theme.CupertinoTheme)
  }));
  const _isLight$ = dart.privateName(src__cupertino__theme, "_isLight");
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
      let defaultData = C44 || CT.C44;
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
  dart.setLibraryUri(src__cupertino__theme.CupertinoThemeData, "package:flutter_web/src/cupertino/theme.dart");
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
  dart.setLibraryUri(src__cupertino__theme._NoDefaultCupertinoThemeData, "package:flutter_web/src/cupertino/theme.dart");
  dart.setFieldSignature(src__cupertino__theme._NoDefaultCupertinoThemeData, () => ({
    __proto__: dart.getFields(src__cupertino__theme._NoDefaultCupertinoThemeData.__proto__),
    brightness: dart.finalFieldType(ui$.Brightness),
    primaryColor: dart.finalFieldType(ui$.Color),
    primaryContrastingColor: dart.finalFieldType(ui$.Color),
    textTheme: dart.finalFieldType(src__cupertino__text_theme.CupertinoTextThemeData),
    barBackgroundColor: dart.finalFieldType(ui$.Color),
    scaffoldBackgroundColor: dart.finalFieldType(ui$.Color)
  }));
  let C95;
  let C96;
  dart.defineLazy(src__cupertino__theme, {
    /*src__cupertino__theme._kDefaultBarLightBackgroundColor*/get _kDefaultBarLightBackgroundColor() {
      return C95 || CT.C95;
    },
    /*src__cupertino__theme._kDefaultBarDarkBackgroundColor*/get _kDefaultBarDarkBackgroundColor() {
      return C96 || CT.C96;
    }
  });
  const _previousTitle = dart.privateName(src__cupertino__route, "_previousTitle");
  let C97;
  let C100;
  let C101;
  let C102;
  let C99;
  let C98;
  let C105;
  let C106;
  let C104;
  let C103;
  let C109;
  let C110;
  let C111;
  let C108;
  let C107;
  let C114;
  let C115;
  let C116;
  let C117;
  let C113;
  let C112;
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
        if (!(this[_previousTitle] != null)) dart.assertFailed("Cannot read the previousTitle for a route that has not yet been installed", "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 141, 7, "_previousTitle != null");
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
        return C97 || CT.C97;
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
      static isPopGestureInProgress(route) {
        return route.navigator.userGestureInProgress;
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
        if (!dart.equals(route.animation.status, src__animation__animation.AnimationStatus.completed)) return false;
        if (!dart.equals(route.secondaryAnimation.status, src__animation__animation.AnimationStatus.dismissed)) return false;
        if (dart.test(src__cupertino__route.CupertinoPageRoute.isPopGestureInProgress(route))) return false;
        return true;
      }
      buildPage(context, animation, secondaryAnimation) {
        let result = new src__widgets__basic.Semantics.new({scopesRoute: true, explicitChildNodes: true, child: this.builder(context), $creationLocationd_0dea112b090073317d4: C98 || CT.C98});
        if (!dart.test(dart.fn(() => {
          if (result === null) {
            dart.throw(src__foundation__assertions.FlutterError.new("The builder for route \"" + dart.str(this.settings.name) + "\" returned null.\n" + "Route builders must never return null."));
          }
          return true;
        }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 250, 12, "() {\n      if (result == null) {\n        throw FlutterError(\n            'The builder for route \"${settings.name}\" returned null.\\n'\n            'Route builders must never return null.');\n      }\n      return true;\n    }()");
        return result;
      }
      static _startPopGesture(T, route) {
        if (!dart.test(src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 266, 12, "_isPopGestureEnabled(route)");
        return new (src__cupertino__route._CupertinoBackGestureController$(T)).new({navigator: route.navigator, controller: route.controller});
      }
      static buildPageTransitions(T, route, context, animation, secondaryAnimation, child) {
        if (dart.test(route.fullscreenDialog)) {
          return new src__cupertino__route.CupertinoFullscreenDialogTransition.new({animation: animation, child: child, $creationLocationd_0dea112b090073317d4: C103 || CT.C103});
        } else {
          return new src__cupertino__route.CupertinoPageTransition.new({primaryRouteAnimation: animation, secondaryRouteAnimation: secondaryAnimation, linearTransition: src__cupertino__route.CupertinoPageRoute.isPopGestureInProgress(route), child: new (src__cupertino__route._CupertinoBackGestureDetector$(T)).new({enabledCallback: dart.fn(() => src__cupertino__route.CupertinoPageRoute._isPopGestureEnabled(T, route), VoidTobool()), onStartPopGesture: dart.fn(() => src__cupertino__route.CupertinoPageRoute._startPopGesture(T, route), dart.fnType(src__cupertino__route._CupertinoBackGestureController$(T), [])), child: child, $creationLocationd_0dea112b090073317d4: C107 || CT.C107}), $creationLocationd_0dea112b090073317d4: C112 || CT.C112});
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
      if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 107, 16, "builder != null");
      if (!(maintainState != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 108, 16, "maintainState != null");
      if (!(fullscreenDialog != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 109, 16, "fullscreenDialog != null");
      if (!dart.test(this.opaque)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 110, 16, "opaque");
      CupertinoPageRoute.__proto__.new.call(this, {settings: settings, fullscreenDialog: fullscreenDialog});
      ;
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
    dart.setLibraryUri(CupertinoPageRoute, "package:flutter_web/src/cupertino/route.dart");
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
  dart.addTypeTests(src__cupertino__route.CupertinoPageRoute, _is_CupertinoPageRoute_default);
  const _primaryPositionAnimation = dart.privateName(src__cupertino__route, "_primaryPositionAnimation");
  const _secondaryPositionAnimation = dart.privateName(src__cupertino__route, "_secondaryPositionAnimation");
  const _primaryShadowAnimation = dart.privateName(src__cupertino__route, "_primaryShadowAnimation");
  let C120;
  let C121;
  let C119;
  let C118;
  let C124;
  let C125;
  let C126;
  let C123;
  let C122;
  let C129;
  let C130;
  let C131;
  let C132;
  let C128;
  let C127;
  src__cupertino__route.CupertinoPageTransition = class CupertinoPageTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$1];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 392, 12, "debugCheckHasDirectionality(context)");
      let textDirection = src__widgets__basic.Directionality.of(context);
      return new src__widgets__transitions.SlideTransition.new({position: this[_secondaryPositionAnimation], textDirection: textDirection, transformHitTests: false, child: new src__widgets__transitions.SlideTransition.new({position: this[_primaryPositionAnimation], textDirection: textDirection, child: new src__widgets__transitions.DecoratedBoxTransition.new({decoration: this[_primaryShadowAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C118 || CT.C118}), $creationLocationd_0dea112b090073317d4: C122 || CT.C122}), $creationLocationd_0dea112b090073317d4: C127 || CT.C127});
    }
  };
  (src__cupertino__route.CupertinoPageTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let primaryRouteAnimation = opts && 'primaryRouteAnimation' in opts ? opts.primaryRouteAnimation : null;
    let secondaryRouteAnimation = opts && 'secondaryRouteAnimation' in opts ? opts.secondaryRouteAnimation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let linearTransition = opts && 'linearTransition' in opts ? opts.linearTransition : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$1] = child;
    if (!(linearTransition != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 349, 16, "linearTransition != null");
    this[_primaryPositionAnimation] = (dart.test(linearTransition) ? primaryRouteAnimation : new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.linearToEaseOut, reverseCurve: src__animation__curves.Curves.easeInToLinear})).drive(ui$.Offset, src__cupertino__route._kRightMiddleTween);
    this[_secondaryPositionAnimation] = (dart.test(linearTransition) ? secondaryRouteAnimation : new src__animation__animations.CurvedAnimation.new({parent: secondaryRouteAnimation, curve: src__animation__curves.Curves.linearToEaseOut, reverseCurve: src__animation__curves.Curves.easeInToLinear})).drive(ui$.Offset, src__cupertino__route._kMiddleLeftTween);
    this[_primaryShadowAnimation] = (dart.test(linearTransition) ? primaryRouteAnimation : new src__animation__animations.CurvedAnimation.new({parent: primaryRouteAnimation, curve: src__animation__curves.Curves.linearToEaseOut})).drive(src__painting__decoration.Decoration, src__cupertino__route._kGradientShadowTween);
    src__cupertino__route.CupertinoPageTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__route.CupertinoPageTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoPageTransition);
  const child$1 = Symbol("CupertinoPageTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoPageTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__route.CupertinoPageTransition, "package:flutter_web/src/cupertino/route.dart");
  dart.setFieldSignature(src__cupertino__route.CupertinoPageTransition, () => ({
    __proto__: dart.getFields(src__cupertino__route.CupertinoPageTransition.__proto__),
    [_primaryPositionAnimation]: dart.finalFieldType(src__animation__animation.Animation$(ui$.Offset)),
    [_secondaryPositionAnimation]: dart.finalFieldType(src__animation__animation.Animation$(ui$.Offset)),
    [_primaryShadowAnimation]: dart.finalFieldType(src__animation__animation.Animation$(src__painting__decoration.Decoration)),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _positionAnimation = dart.privateName(src__cupertino__route, "_positionAnimation");
  let C135;
  let C136;
  let C134;
  let C133;
  src__cupertino__route.CupertinoFullscreenDialogTransition = class CupertinoFullscreenDialogTransition extends src__widgets__framework.StatelessWidget {
    get child() {
      return this[child$2];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      return new src__widgets__transitions.SlideTransition.new({position: this[_positionAnimation], child: this.child, $creationLocationd_0dea112b090073317d4: C133 || CT.C133});
    }
  };
  (src__cupertino__route.CupertinoFullscreenDialogTransition.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let animation = opts && 'animation' in opts ? opts.animation : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$2] = child;
    this[_positionAnimation] = new src__animation__animations.CurvedAnimation.new({parent: animation, curve: src__animation__curves.Curves.linearToEaseOut, reverseCurve: src__animation__curves.Curves.linearToEaseOut.flipped}).drive(ui$.Offset, src__cupertino__route._kBottomUpTween);
    src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__route.CupertinoFullscreenDialogTransition.prototype;
  dart.addTypeTests(src__cupertino__route.CupertinoFullscreenDialogTransition);
  const child$2 = Symbol("CupertinoFullscreenDialogTransition.child");
  dart.setMethodSignature(src__cupertino__route.CupertinoFullscreenDialogTransition, () => ({
    __proto__: dart.getMethods(src__cupertino__route.CupertinoFullscreenDialogTransition.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__route.CupertinoFullscreenDialogTransition, "package:flutter_web/src/cupertino/route.dart");
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
      if (!(enabledCallback != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 460, 16, "enabledCallback != null");
      if (!(onStartPopGesture != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 461, 16, "onStartPopGesture != null");
      if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 462, 16, "child != null");
      _CupertinoBackGestureDetector.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
      ;
    }).prototype = _CupertinoBackGestureDetector.prototype;
    dart.addTypeTests(_CupertinoBackGestureDetector);
    _CupertinoBackGestureDetector.prototype[_is__CupertinoBackGestureDetector_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureDetector, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureDetector.__proto__),
      createState: dart.fnType(src__cupertino__route._CupertinoBackGestureDetectorState$(T), [])
    }));
    dart.setLibraryUri(_CupertinoBackGestureDetector, "package:flutter_web/src/cupertino/route.dart");
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
  const _name = dart.privateName(ui$, "_name");
  let C137;
  let C138;
  let C141;
  let C142;
  let C140;
  let C139;
  let C145;
  let C146;
  let C147;
  let C148;
  let C149;
  let C144;
  let C143;
  let C152;
  let C153;
  let C151;
  let C150;
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
        if (!dart.test(this.mounted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 499, 12, "mounted");
        if (!(this[_backGestureController] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 500, 12, "_backGestureController == null");
        this[_backGestureController] = this.widget.onStartPopGesture();
      }
      [_handleDragUpdate](details) {
        if (!dart.test(this.mounted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 505, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 506, 12, "_backGestureController != null");
        this[_backGestureController].dragUpdate(this[_convertToLogical](dart.notNull(details.primaryDelta) / dart.notNull(this.context.size.width)));
      }
      [_handleDragEnd](details) {
        if (!dart.test(this.mounted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 512, 12, "mounted");
        if (!(this[_backGestureController] != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 513, 12, "_backGestureController != null");
        this[_backGestureController].dragEnd(this[_convertToLogical](dart.notNull(details.velocity.pixelsPerSecond.dx) / dart.notNull(this.context.size.width)));
        this[_backGestureController] = null;
      }
      [_handleDragCancel]() {
        let t0;
        if (!dart.test(this.mounted)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 520, 12, "mounted");
        t0 = this[_backGestureController];
        t0 == null ? null : t0.dragEnd(0.0);
        this[_backGestureController] = null;
      }
      [_handlePointerDown](event) {
        if (dart.test(this.widget.enabledCallback())) this[_recognizer].addPointer(event);
      }
      [_convertToLogical](value) {
        switch (src__widgets__basic.Directionality.of(this.context)) {
          case C137 || CT.C137:
          {
            return -dart.notNull(value);
          }
          case C138 || CT.C138:
          {
            return value;
          }
        }
        return null;
      }
      build(context) {
        if (!dart.test(src__widgets__debug.debugCheckHasDirectionality(context))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 543, 12, "debugCheckHasDirectionality(context)");
        let dragAreaWidth = dart.equals(src__widgets__basic.Directionality.of(context), ui$.TextDirection.ltr) ? src__widgets__media_query.MediaQuery.of(context).padding.left : src__widgets__media_query.MediaQuery.of(context).padding.right;
        dragAreaWidth = math.max(core.double, dragAreaWidth, 20);
        return new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.passthrough, children: JSArrayOfWidget().of([this.widget.child, new src__widgets__basic.PositionedDirectional.new({start: 0.0, width: dragAreaWidth, top: 0.0, bottom: 0.0, child: new src__widgets__basic.Listener.new({onPointerDown: dart.bind(this, _handlePointerDown), behavior: src__rendering__proxy_box.HitTestBehavior.translucent, $creationLocationd_0dea112b090073317d4: C139 || CT.C139}), $creationLocationd_0dea112b090073317d4: C143 || CT.C143})]), $creationLocationd_0dea112b090073317d4: C150 || CT.C150});
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
    dart.setLibraryUri(_CupertinoBackGestureDetectorState, "package:flutter_web/src/cupertino/route.dart");
    dart.setFieldSignature(_CupertinoBackGestureDetectorState, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureDetectorState.__proto__),
      [_backGestureController]: dart.fieldType(src__cupertino__route._CupertinoBackGestureController$(T)),
      [_recognizer]: dart.fieldType(src__gestures__monodrag.HorizontalDragGestureRecognizer)
    }));
    return _CupertinoBackGestureDetectorState;
  });
  src__cupertino__route._CupertinoBackGestureDetectorState = src__cupertino__route._CupertinoBackGestureDetectorState$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureDetectorState, _is__CupertinoBackGestureDetectorState_default);
  let C154;
  const _is__CupertinoBackGestureController_default = Symbol('_is__CupertinoBackGestureController_default');
  src__cupertino__route._CupertinoBackGestureController$ = dart.generic(T => {
    class _CupertinoBackGestureController extends core.Object {
      dragUpdate(delta) {
        let t0;
        t0 = this.controller;
        t0.value = dart.notNull(t0.value) - dart.notNull(delta);
      }
      dragEnd(velocity) {
        let animationCurve = C154 || CT.C154;
        let animateForward = null;
        if (velocity[$abs]() >= 1)
          animateForward = dart.notNull(velocity) > 0 ? false : true;
        else
          animateForward = dart.notNull(this.controller.value) > 0.5 ? true : false;
        if (dart.test(animateForward)) {
          let droppedPageForwardAnimationTime = math.min(core.int, ui$.lerpDouble(800, 0, this.controller.value)[$floor](), 300);
          this.controller.animateTo(1.0, {duration: new core.Duration.new({milliseconds: droppedPageForwardAnimationTime}), curve: animationCurve});
        } else {
          this.navigator.pop(core.Object);
          if (dart.test(this.controller.isAnimating)) {
            let droppedPageBackAnimationTime = ui$.lerpDouble(0, 800, this.controller.value)[$floor]();
            this.controller.animateBack(0.0, {duration: new core.Duration.new({milliseconds: droppedPageBackAnimationTime}), curve: animationCurve});
          }
        }
        if (dart.test(this.controller.isAnimating)) {
          let animationStatusCallback = null;
          animationStatusCallback = dart.fn(status => {
            this.navigator.didStopUserGesture();
            this.controller.removeStatusListener(animationStatusCallback);
          }, AnimationStatusToNull());
          this.controller.addStatusListener(animationStatusCallback);
        } else {
          this.navigator.didStopUserGesture();
        }
      }
    }
    (_CupertinoBackGestureController.new = function(opts) {
      let navigator = opts && 'navigator' in opts ? opts.navigator : null;
      let controller = opts && 'controller' in opts ? opts.controller : null;
      this.navigator = navigator;
      this.controller = controller;
      if (!(navigator != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 588, 16, "navigator != null");
      if (!(controller != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 589, 16, "controller != null");
      this.navigator.didStartUserGesture();
    }).prototype = _CupertinoBackGestureController.prototype;
    dart.addTypeTests(_CupertinoBackGestureController);
    _CupertinoBackGestureController.prototype[_is__CupertinoBackGestureController_default] = true;
    dart.setMethodSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getMethods(_CupertinoBackGestureController.__proto__),
      dragUpdate: dart.fnType(dart.void, [core.double]),
      dragEnd: dart.fnType(dart.void, [core.double])
    }));
    dart.setLibraryUri(_CupertinoBackGestureController, "package:flutter_web/src/cupertino/route.dart");
    dart.setFieldSignature(_CupertinoBackGestureController, () => ({
      __proto__: dart.getFields(_CupertinoBackGestureController.__proto__),
      controller: dart.finalFieldType(src__animation__animation_controller.AnimationController),
      navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState)
    }));
    return _CupertinoBackGestureController;
  });
  src__cupertino__route._CupertinoBackGestureController = src__cupertino__route._CupertinoBackGestureController$();
  dart.addTypeTests(src__cupertino__route._CupertinoBackGestureController, _is__CupertinoBackGestureController_default);
  let C155;
  src__cupertino__route._CupertinoEdgeShadowDecoration = class _CupertinoEdgeShadowDecoration extends src__painting__decoration.Decoration {
    static lerp(a, b, t) {
      let t0, t0$;
      if (!(t != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 711, 12, "t != null");
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
  dart.setLibraryUri(src__cupertino__route._CupertinoEdgeShadowDecoration, "package:flutter_web/src/cupertino/route.dart");
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowDecoration, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowDecoration.__proto__),
    edgeGradient: dart.finalFieldType(src__painting__gradient.LinearGradient)
  }));
  dart.defineExtensionMethods(src__cupertino__route._CupertinoEdgeShadowDecoration, ['_equals']);
  dart.defineExtensionAccessors(src__cupertino__route._CupertinoEdgeShadowDecoration, ['hashCode']);
  dart.defineLazy(src__cupertino__route._CupertinoEdgeShadowDecoration, {
    /*src__cupertino__route._CupertinoEdgeShadowDecoration.none*/get none() {
      return C155 || CT.C155;
    }
  });
  const _decoration$ = dart.privateName(src__cupertino__route, "_decoration");
  src__cupertino__route._CupertinoEdgeShadowPainter = class _CupertinoEdgeShadowPainter extends src__painting__decoration.BoxPainter {
    paint(canvas, offset, configuration) {
      let t0;
      let gradient = this[_decoration$].edgeGradient;
      if (gradient == null) return;
      let textDirection = configuration.textDirection;
      if (!(textDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 772, 12, "textDirection != null");
      let deltaX = null;
      switch (textDirection) {
        case C137 || CT.C137:
        {
          deltaX = configuration.size.width;
          break;
        }
        case C138 || CT.C138:
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
    if (!(_decoration != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 760, 16, "_decoration != null");
    src__cupertino__route._CupertinoEdgeShadowPainter.__proto__.new.call(this, onChange);
    ;
  }).prototype = src__cupertino__route._CupertinoEdgeShadowPainter.prototype;
  dart.addTypeTests(src__cupertino__route._CupertinoEdgeShadowPainter);
  dart.setMethodSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset, src__painting__image_provider.ImageConfiguration])
  }));
  dart.setLibraryUri(src__cupertino__route._CupertinoEdgeShadowPainter, "package:flutter_web/src/cupertino/route.dart");
  dart.setFieldSignature(src__cupertino__route._CupertinoEdgeShadowPainter, () => ({
    __proto__: dart.getFields(src__cupertino__route._CupertinoEdgeShadowPainter.__proto__),
    [_decoration$]: dart.finalFieldType(src__cupertino__route._CupertinoEdgeShadowDecoration)
  }));
  const _animation = dart.privateName(src__cupertino__route, "_animation");
  const _offsetTween = dart.privateName(src__cupertino__route, "_offsetTween");
  const _dx = dart.privateName(ui$, "_dx");
  const _dy = dart.privateName(ui$, "_dy");
  let C156;
  let C157;
  let C160;
  let C161;
  let C159;
  let C158;
  let C164;
  let C165;
  let C163;
  let C162;
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
        if (!(this[_animation] == null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 820, 12, "_animation == null");
        this[_animation] = new src__animation__animations.CurvedAnimation.new({parent: super.createAnimation(), curve: src__animation__curves.Curves.linearToEaseOut, reverseCurve: src__animation__curves.Curves.linearToEaseOut.flipped});
        this[_offsetTween] = new (TweenOfOffset()).new({begin: C156 || CT.C156, end: C157 || CT.C157});
        return this[_animation];
      }
      buildPage(context, animation, secondaryAnimation) {
        return this.builder(context);
      }
      buildTransitions(context, animation, secondaryAnimation, child) {
        return new src__widgets__basic.Align.new({alignment: src__painting__alignment.Alignment.bottomCenter, child: new src__widgets__basic.FractionalTranslation.new({translation: this[_offsetTween].evaluate(this[_animation]), child: child, $creationLocationd_0dea112b090073317d4: C158 || CT.C158}), $creationLocationd_0dea112b090073317d4: C162 || CT.C162});
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
    dart.setLibraryUri(_CupertinoModalPopupRoute, "package:flutter_web/src/cupertino/route.dart");
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
  let C168;
  let C169;
  let C167;
  let C166;
  let C172;
  let C173;
  let C171;
  let C170;
  let C176;
  let C177;
  let C175;
  let C174;
  let C178;
  src__cupertino__route.showCupertinoModalPopup = function showCupertinoModalPopup(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    return src__widgets__navigator.Navigator.of(context, {rootNavigator: true}).push(T, new (src__cupertino__route._CupertinoModalPopupRoute$(T)).new({builder: builder, barrierLabel: "Dismiss"}));
  };
  src__cupertino__route._buildCupertinoDialogTransitions = function _buildCupertinoDialogTransitions(context, animation, secondaryAnimation, child) {
    let fadeAnimation = new src__animation__animations.CurvedAnimation.new({parent: animation, curve: src__animation__curves.Curves.easeInOut});
    if (dart.equals(animation.status, src__animation__animation.AnimationStatus.reverse)) {
      return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: child, $creationLocationd_0dea112b090073317d4: C166 || CT.C166});
    }
    return new src__widgets__transitions.FadeTransition.new({opacity: fadeAnimation, child: new src__widgets__transitions.ScaleTransition.new({child: child, scale: animation.drive(core.double, src__cupertino__route._dialogScaleTween), $creationLocationd_0dea112b090073317d4: C170 || CT.C170}), $creationLocationd_0dea112b090073317d4: C174 || CT.C174});
  };
  src__cupertino__route.showCupertinoDialog = function showCupertinoDialog(T, opts) {
    let context = opts && 'context' in opts ? opts.context : null;
    let builder = opts && 'builder' in opts ? opts.builder : null;
    if (!(builder != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/route.dart", 955, 10, "builder != null");
    return src__widgets__routes.showGeneralDialog(T, {context: context, barrierDismissible: false, barrierColor: src__cupertino__route._kModalBarrierColor, transitionDuration: C17 || CT.C17, pageBuilder: dart.fn((context, animation, secondaryAnimation) => builder(context), BuildContextAndAnimationOfdoubleAndAnimationOfdoubleToWidget()), transitionBuilder: C178 || CT.C178});
  };
  let C179;
  let C180;
  let C181;
  let C182;
  let C185;
  let C186;
  let C187;
  let C189;
  let C190;
  let C191;
  let C192;
  let C188;
  let C193;
  let C184;
  let C183;
  dart.defineLazy(src__cupertino__route, {
    /*src__cupertino__route._kBackGestureWidth*/get _kBackGestureWidth() {
      return 20;
    },
    /*src__cupertino__route._kMinFlingVelocity*/get _kMinFlingVelocity() {
      return 1;
    },
    /*src__cupertino__route._kMaxDroppedSwipePageForwardAnimationTime*/get _kMaxDroppedSwipePageForwardAnimationTime() {
      return 800;
    },
    /*src__cupertino__route._kMaxPageBackAnimationTime*/get _kMaxPageBackAnimationTime() {
      return 300;
    },
    /*src__cupertino__route._kModalBarrierColor*/get _kModalBarrierColor() {
      return C179 || CT.C179;
    },
    /*src__cupertino__route._kModalPopupTransitionDuration*/get _kModalPopupTransitionDuration() {
      return C180 || CT.C180;
    },
    /*src__cupertino__route._kRightMiddleTween*/get _kRightMiddleTween() {
      return new (TweenOfOffset()).new({begin: C181 || CT.C181, end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kMiddleLeftTween*/get _kMiddleLeftTween() {
      return new (TweenOfOffset()).new({begin: ui$.Offset.zero, end: C182 || CT.C182});
    },
    /*src__cupertino__route._kBottomUpTween*/get _kBottomUpTween() {
      return new (TweenOfOffset()).new({begin: C156 || CT.C156, end: ui$.Offset.zero});
    },
    /*src__cupertino__route._kGradientShadowTween*/get _kGradientShadowTween() {
      return new src__widgets__implicit_animations.DecorationTween.new({begin: src__cupertino__route._CupertinoEdgeShadowDecoration.none, end: C183 || CT.C183});
    },
    /*src__cupertino__route._dialogScaleTween*/get _dialogScaleTween() {
      return new (TweenOfdouble()).new({begin: 1.3, end: 1.0}).chain(new src__animation__tween.CurveTween.new({curve: src__animation__curves.Curves.linearToEaseOut}));
    }
  });
  const _name$ = dart.privateName(src__cupertino__localizations, "_name");
  let C194;
  let C195;
  let C196;
  let C197;
  let C198;
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
  dart.setLibraryUri(src__cupertino__localizations.DatePickerDateTimeOrder, "package:flutter_web/src/cupertino/localizations.dart");
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateTimeOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateTimeOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateTimeOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateTimeOrder.date_time_dayPeriod = C194 || CT.C194;
  src__cupertino__localizations.DatePickerDateTimeOrder.date_dayPeriod_time = C195 || CT.C195;
  src__cupertino__localizations.DatePickerDateTimeOrder.time_dayPeriod_date = C196 || CT.C196;
  src__cupertino__localizations.DatePickerDateTimeOrder.dayPeriod_time_date = C197 || CT.C197;
  src__cupertino__localizations.DatePickerDateTimeOrder.values = C198 || CT.C198;
  let C199;
  let C200;
  let C201;
  let C202;
  let C203;
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
  dart.setLibraryUri(src__cupertino__localizations.DatePickerDateOrder, "package:flutter_web/src/cupertino/localizations.dart");
  dart.setFieldSignature(src__cupertino__localizations.DatePickerDateOrder, () => ({
    __proto__: dart.getFields(src__cupertino__localizations.DatePickerDateOrder.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__cupertino__localizations.DatePickerDateOrder, ['toString']);
  src__cupertino__localizations.DatePickerDateOrder.dmy = C199 || CT.C199;
  src__cupertino__localizations.DatePickerDateOrder.mdy = C200 || CT.C200;
  src__cupertino__localizations.DatePickerDateOrder.ymd = C201 || CT.C201;
  src__cupertino__localizations.DatePickerDateOrder.ydm = C202 || CT.C202;
  src__cupertino__localizations.DatePickerDateOrder.values = C203 || CT.C203;
  src__cupertino__localizations.CupertinoLocalizations = class CupertinoLocalizations extends core.Object {
    static of(context) {
      return src__widgets__localizations.Localizations.of(src__cupertino__localizations.CupertinoLocalizations, context, dart.wrapType(src__cupertino__localizations.CupertinoLocalizations));
    }
  };
  (src__cupertino__localizations.CupertinoLocalizations.new = function() {
    ;
  }).prototype = src__cupertino__localizations.CupertinoLocalizations.prototype;
  dart.addTypeTests(src__cupertino__localizations.CupertinoLocalizations);
  dart.setLibraryUri(src__cupertino__localizations.CupertinoLocalizations, "package:flutter_web/src/cupertino/localizations.dart");
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
  dart.setLibraryUri(src__cupertino__localizations._CupertinoLocalizationsDelegate, "package:flutter_web/src/cupertino/localizations.dart");
  dart.defineExtensionMethods(src__cupertino__localizations._CupertinoLocalizationsDelegate, ['toString']);
  let C204;
  let C205;
  let C206;
  let C207;
  let C208;
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
      return dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays[$_get](dart.notNull(date.weekday) - 1)) + " " + dart.str(src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths[$_get](dart.notNull(date.month) - 1)) + " " + dart.toString(date.day)[$padRight](2);
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
      return new (SynchronousFutureOfCupertinoLocalizations()).new(C204 || CT.C204);
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
  dart.setLibraryUri(src__cupertino__localizations.DefaultCupertinoLocalizations, "package:flutter_web/src/cupertino/localizations.dart");
  dart.defineLazy(src__cupertino__localizations.DefaultCupertinoLocalizations, {
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortWeekdays*/get _shortWeekdays() {
      return C205 || CT.C205;
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._shortMonths*/get _shortMonths() {
      return C206 || CT.C206;
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations._months*/get _months() {
      return C207 || CT.C207;
    },
    /*src__cupertino__localizations.DefaultCupertinoLocalizations.delegate*/get delegate() {
      return C208 || CT.C208;
    }
  });
  let C209;
  let C210;
  let C211;
  let C212;
  let C213;
  let C214;
  let C215;
  let C216;
  let C217;
  let C218;
  let C219;
  let C220;
  let C221;
  let C222;
  let C223;
  let C224;
  let C225;
  let C226;
  let C227;
  let C228;
  let C229;
  let C230;
  let C231;
  let C232;
  let C233;
  let C234;
  let C235;
  let C236;
  let C237;
  let C238;
  let C239;
  let C240;
  let C241;
  let C242;
  let C243;
  let C244;
  let C245;
  let C246;
  let C247;
  let C248;
  let C249;
  let C250;
  let C251;
  let C252;
  let C253;
  let C254;
  let C255;
  let C256;
  let C257;
  let C258;
  let C259;
  let C260;
  let C261;
  let C262;
  let C263;
  let C264;
  let C265;
  let C266;
  let C267;
  let C268;
  let C269;
  let C270;
  let C271;
  let C272;
  let C273;
  let C274;
  let C275;
  let C276;
  let C277;
  let C278;
  let C279;
  let C280;
  let C281;
  let C282;
  let C283;
  let C284;
  let C285;
  let C286;
  let C287;
  let C288;
  let C289;
  let C290;
  let C291;
  let C292;
  let C293;
  let C294;
  let C295;
  let C296;
  let C297;
  let C298;
  let C299;
  let C300;
  let C301;
  let C302;
  let C303;
  let C304;
  let C305;
  let C306;
  let C307;
  let C308;
  let C309;
  let C310;
  let C311;
  let C312;
  let C313;
  let C314;
  let C315;
  let C316;
  let C317;
  let C318;
  src__cupertino__icons.CupertinoIcons = class CupertinoIcons extends core.Object {};
  (src__cupertino__icons.CupertinoIcons.__ = function() {
    ;
  }).prototype = src__cupertino__icons.CupertinoIcons.prototype;
  dart.addTypeTests(src__cupertino__icons.CupertinoIcons);
  dart.setLibraryUri(src__cupertino__icons.CupertinoIcons, "package:flutter_web/src/cupertino/icons.dart");
  dart.defineLazy(src__cupertino__icons.CupertinoIcons, {
    /*src__cupertino__icons.CupertinoIcons.iconFont*/get iconFont() {
      return "CupertinoIcons";
    },
    /*src__cupertino__icons.CupertinoIcons.iconFontPackage*/get iconFontPackage() {
      return "cupertino_icons";
    },
    /*src__cupertino__icons.CupertinoIcons.left_chevron*/get left_chevron() {
      return C209 || CT.C209;
    },
    /*src__cupertino__icons.CupertinoIcons.right_chevron*/get right_chevron() {
      return C210 || CT.C210;
    },
    /*src__cupertino__icons.CupertinoIcons.share*/get share() {
      return C211 || CT.C211;
    },
    /*src__cupertino__icons.CupertinoIcons.share_solid*/get share_solid() {
      return C212 || CT.C212;
    },
    /*src__cupertino__icons.CupertinoIcons.book*/get book() {
      return C213 || CT.C213;
    },
    /*src__cupertino__icons.CupertinoIcons.book_solid*/get book_solid() {
      return C214 || CT.C214;
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark*/get bookmark() {
      return C215 || CT.C215;
    },
    /*src__cupertino__icons.CupertinoIcons.bookmark_solid*/get bookmark_solid() {
      return C216 || CT.C216;
    },
    /*src__cupertino__icons.CupertinoIcons.info*/get info() {
      return C217 || CT.C217;
    },
    /*src__cupertino__icons.CupertinoIcons.reply*/get reply() {
      return C218 || CT.C218;
    },
    /*src__cupertino__icons.CupertinoIcons.conversation_bubble*/get conversation_bubble() {
      return C219 || CT.C219;
    },
    /*src__cupertino__icons.CupertinoIcons.profile_circled*/get profile_circled() {
      return C220 || CT.C220;
    },
    /*src__cupertino__icons.CupertinoIcons.plus_circled*/get plus_circled() {
      return C221 || CT.C221;
    },
    /*src__cupertino__icons.CupertinoIcons.minus_circled*/get minus_circled() {
      return C222 || CT.C222;
    },
    /*src__cupertino__icons.CupertinoIcons.flag*/get flag() {
      return C223 || CT.C223;
    },
    /*src__cupertino__icons.CupertinoIcons.search*/get search() {
      return C46 || CT.C46;
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark*/get check_mark() {
      return C224 || CT.C224;
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled*/get check_mark_circled() {
      return C225 || CT.C225;
    },
    /*src__cupertino__icons.CupertinoIcons.check_mark_circled_solid*/get check_mark_circled_solid() {
      return C226 || CT.C226;
    },
    /*src__cupertino__icons.CupertinoIcons.back*/get back() {
      return C227 || CT.C227;
    },
    /*src__cupertino__icons.CupertinoIcons.forward*/get forward() {
      return C228 || CT.C228;
    },
    /*src__cupertino__icons.CupertinoIcons.home*/get home() {
      return C229 || CT.C229;
    },
    /*src__cupertino__icons.CupertinoIcons.shopping_cart*/get shopping_cart() {
      return C230 || CT.C230;
    },
    /*src__cupertino__icons.CupertinoIcons.ellipsis*/get ellipsis() {
      return C231 || CT.C231;
    },
    /*src__cupertino__icons.CupertinoIcons.phone*/get phone() {
      return C232 || CT.C232;
    },
    /*src__cupertino__icons.CupertinoIcons.phone_solid*/get phone_solid() {
      return C233 || CT.C233;
    },
    /*src__cupertino__icons.CupertinoIcons.down_arrow*/get down_arrow() {
      return C234 || CT.C234;
    },
    /*src__cupertino__icons.CupertinoIcons.up_arrow*/get up_arrow() {
      return C235 || CT.C235;
    },
    /*src__cupertino__icons.CupertinoIcons.battery_charging*/get battery_charging() {
      return C236 || CT.C236;
    },
    /*src__cupertino__icons.CupertinoIcons.battery_empty*/get battery_empty() {
      return C237 || CT.C237;
    },
    /*src__cupertino__icons.CupertinoIcons.battery_full*/get battery_full() {
      return C238 || CT.C238;
    },
    /*src__cupertino__icons.CupertinoIcons.battery_75_percent*/get battery_75_percent() {
      return C239 || CT.C239;
    },
    /*src__cupertino__icons.CupertinoIcons.battery_25_percent*/get battery_25_percent() {
      return C240 || CT.C240;
    },
    /*src__cupertino__icons.CupertinoIcons.bluetooth*/get bluetooth() {
      return C241 || CT.C241;
    },
    /*src__cupertino__icons.CupertinoIcons.restart*/get restart() {
      return C242 || CT.C242;
    },
    /*src__cupertino__icons.CupertinoIcons.reply_all*/get reply_all() {
      return C243 || CT.C243;
    },
    /*src__cupertino__icons.CupertinoIcons.reply_thick_solid*/get reply_thick_solid() {
      return C244 || CT.C244;
    },
    /*src__cupertino__icons.CupertinoIcons.share_up*/get share_up() {
      return C245 || CT.C245;
    },
    /*src__cupertino__icons.CupertinoIcons.shuffle_thick*/get shuffle_thick() {
      return C246 || CT.C246;
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera*/get photo_camera() {
      return C247 || CT.C247;
    },
    /*src__cupertino__icons.CupertinoIcons.photo_camera_solid*/get photo_camera_solid() {
      return C248 || CT.C248;
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera*/get video_camera() {
      return C249 || CT.C249;
    },
    /*src__cupertino__icons.CupertinoIcons.video_camera_solid*/get video_camera_solid() {
      return C250 || CT.C250;
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera*/get switch_camera() {
      return C251 || CT.C251;
    },
    /*src__cupertino__icons.CupertinoIcons.switch_camera_solid*/get switch_camera_solid() {
      return C252 || CT.C252;
    },
    /*src__cupertino__icons.CupertinoIcons.collections*/get collections() {
      return C253 || CT.C253;
    },
    /*src__cupertino__icons.CupertinoIcons.collections_solid*/get collections_solid() {
      return C254 || CT.C254;
    },
    /*src__cupertino__icons.CupertinoIcons.folder*/get folder() {
      return C255 || CT.C255;
    },
    /*src__cupertino__icons.CupertinoIcons.folder_solid*/get folder_solid() {
      return C256 || CT.C256;
    },
    /*src__cupertino__icons.CupertinoIcons.folder_open*/get folder_open() {
      return C257 || CT.C257;
    },
    /*src__cupertino__icons.CupertinoIcons.delete*/get delete() {
      return C258 || CT.C258;
    },
    /*src__cupertino__icons.CupertinoIcons.delete_solid*/get delete_solid() {
      return C259 || CT.C259;
    },
    /*src__cupertino__icons.CupertinoIcons.delete_simple*/get delete_simple() {
      return C260 || CT.C260;
    },
    /*src__cupertino__icons.CupertinoIcons.pen*/get pen() {
      return C261 || CT.C261;
    },
    /*src__cupertino__icons.CupertinoIcons.pencil*/get pencil() {
      return C262 || CT.C262;
    },
    /*src__cupertino__icons.CupertinoIcons.create*/get create() {
      return C263 || CT.C263;
    },
    /*src__cupertino__icons.CupertinoIcons.create_solid*/get create_solid() {
      return C263 || CT.C263;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh*/get refresh() {
      return C264 || CT.C264;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled*/get refresh_circled() {
      return C265 || CT.C265;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_circled_solid*/get refresh_circled_solid() {
      return C266 || CT.C266;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thin*/get refresh_thin() {
      return C267 || CT.C267;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_thick*/get refresh_thick() {
      return C268 || CT.C268;
    },
    /*src__cupertino__icons.CupertinoIcons.refresh_bold*/get refresh_bold() {
      return C242 || CT.C242;
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick*/get clear_thick() {
      return C269 || CT.C269;
    },
    /*src__cupertino__icons.CupertinoIcons.clear_thick_circled*/get clear_thick_circled() {
      return C270 || CT.C270;
    },
    /*src__cupertino__icons.CupertinoIcons.clear*/get clear() {
      return C271 || CT.C271;
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled*/get clear_circled() {
      return C272 || CT.C272;
    },
    /*src__cupertino__icons.CupertinoIcons.clear_circled_solid*/get clear_circled_solid() {
      return C273 || CT.C273;
    },
    /*src__cupertino__icons.CupertinoIcons.add*/get add() {
      return C274 || CT.C274;
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled*/get add_circled() {
      return C221 || CT.C221;
    },
    /*src__cupertino__icons.CupertinoIcons.add_circled_solid*/get add_circled_solid() {
      return C275 || CT.C275;
    },
    /*src__cupertino__icons.CupertinoIcons.gear*/get gear() {
      return C276 || CT.C276;
    },
    /*src__cupertino__icons.CupertinoIcons.gear_solid*/get gear_solid() {
      return C277 || CT.C277;
    },
    /*src__cupertino__icons.CupertinoIcons.gear_big*/get gear_big() {
      return C278 || CT.C278;
    },
    /*src__cupertino__icons.CupertinoIcons.settings*/get settings() {
      return C279 || CT.C279;
    },
    /*src__cupertino__icons.CupertinoIcons.settings_solid*/get settings_solid() {
      return C280 || CT.C280;
    },
    /*src__cupertino__icons.CupertinoIcons.music_note*/get music_note() {
      return C281 || CT.C281;
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow*/get play_arrow() {
      return C282 || CT.C282;
    },
    /*src__cupertino__icons.CupertinoIcons.play_arrow_solid*/get play_arrow_solid() {
      return C283 || CT.C283;
    },
    /*src__cupertino__icons.CupertinoIcons.pause*/get pause() {
      return C284 || CT.C284;
    },
    /*src__cupertino__icons.CupertinoIcons.pause_solid*/get pause_solid() {
      return C285 || CT.C285;
    },
    /*src__cupertino__icons.CupertinoIcons.loop*/get loop() {
      return C286 || CT.C286;
    },
    /*src__cupertino__icons.CupertinoIcons.loop_thick*/get loop_thick() {
      return C287 || CT.C287;
    },
    /*src__cupertino__icons.CupertinoIcons.volume_down*/get volume_down() {
      return C288 || CT.C288;
    },
    /*src__cupertino__icons.CupertinoIcons.volume_mute*/get volume_mute() {
      return C289 || CT.C289;
    },
    /*src__cupertino__icons.CupertinoIcons.volume_off*/get volume_off() {
      return C290 || CT.C290;
    },
    /*src__cupertino__icons.CupertinoIcons.volume_up*/get volume_up() {
      return C291 || CT.C291;
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen*/get fullscreen() {
      return C292 || CT.C292;
    },
    /*src__cupertino__icons.CupertinoIcons.fullscreen_exit*/get fullscreen_exit() {
      return C293 || CT.C293;
    },
    /*src__cupertino__icons.CupertinoIcons.mic_off*/get mic_off() {
      return C294 || CT.C294;
    },
    /*src__cupertino__icons.CupertinoIcons.mic*/get mic() {
      return C295 || CT.C295;
    },
    /*src__cupertino__icons.CupertinoIcons.mic_solid*/get mic_solid() {
      return C296 || CT.C296;
    },
    /*src__cupertino__icons.CupertinoIcons.clock*/get clock() {
      return C297 || CT.C297;
    },
    /*src__cupertino__icons.CupertinoIcons.clock_solid*/get clock_solid() {
      return C298 || CT.C298;
    },
    /*src__cupertino__icons.CupertinoIcons.time*/get time() {
      return C299 || CT.C299;
    },
    /*src__cupertino__icons.CupertinoIcons.time_solid*/get time_solid() {
      return C300 || CT.C300;
    },
    /*src__cupertino__icons.CupertinoIcons.padlock*/get padlock() {
      return C301 || CT.C301;
    },
    /*src__cupertino__icons.CupertinoIcons.padlock_solid*/get padlock_solid() {
      return C302 || CT.C302;
    },
    /*src__cupertino__icons.CupertinoIcons.eye*/get eye() {
      return C303 || CT.C303;
    },
    /*src__cupertino__icons.CupertinoIcons.eye_solid*/get eye_solid() {
      return C304 || CT.C304;
    },
    /*src__cupertino__icons.CupertinoIcons.person*/get person() {
      return C305 || CT.C305;
    },
    /*src__cupertino__icons.CupertinoIcons.person_solid*/get person_solid() {
      return C306 || CT.C306;
    },
    /*src__cupertino__icons.CupertinoIcons.person_add*/get person_add() {
      return C307 || CT.C307;
    },
    /*src__cupertino__icons.CupertinoIcons.person_add_solid*/get person_add_solid() {
      return C308 || CT.C308;
    },
    /*src__cupertino__icons.CupertinoIcons.group*/get group() {
      return C309 || CT.C309;
    },
    /*src__cupertino__icons.CupertinoIcons.group_solid*/get group_solid() {
      return C310 || CT.C310;
    },
    /*src__cupertino__icons.CupertinoIcons.mail*/get mail() {
      return C311 || CT.C311;
    },
    /*src__cupertino__icons.CupertinoIcons.mail_solid*/get mail_solid() {
      return C312 || CT.C312;
    },
    /*src__cupertino__icons.CupertinoIcons.location*/get location() {
      return C313 || CT.C313;
    },
    /*src__cupertino__icons.CupertinoIcons.location_solid*/get location_solid() {
      return C314 || CT.C314;
    },
    /*src__cupertino__icons.CupertinoIcons.tag*/get tag() {
      return C315 || CT.C315;
    },
    /*src__cupertino__icons.CupertinoIcons.tag_solid*/get tag_solid() {
      return C316 || CT.C316;
    },
    /*src__cupertino__icons.CupertinoIcons.tags*/get tags() {
      return C317 || CT.C317;
    },
    /*src__cupertino__icons.CupertinoIcons.tags_solid*/get tags_solid() {
      return C318 || CT.C318;
    }
  });
  let C320;
  let C319;
  const _filled = dart.privateName(src__cupertino__button, "_filled");
  src__cupertino__button.CupertinoButton = class CupertinoButton extends src__widgets__framework.StatefulWidget {
    get child() {
      return this[child$3];
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
      return this[color$0];
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
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let color = opts && 'color' in opts ? opts.color : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.1;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C319 || CT.C319;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$3] = child;
    this[padding$] = padding;
    this[color$0] = color;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", 41, 16, "pressedOpacity == null ||\n            (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    this[_filled] = false;
    src__cupertino__button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__button.CupertinoButton.prototype;
  (src__cupertino__button.CupertinoButton.filled = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let disabledColor = opts && 'disabledColor' in opts ? opts.disabledColor : null;
    let minSize = opts && 'minSize' in opts ? opts.minSize : 44;
    let pressedOpacity = opts && 'pressedOpacity' in opts ? opts.pressedOpacity : 0.1;
    let borderRadius = opts && 'borderRadius' in opts ? opts.borderRadius : C319 || CT.C319;
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[child$3] = child;
    this[padding$] = padding;
    this[disabledColor$] = disabledColor;
    this[minSize$] = minSize;
    this[pressedOpacity$] = pressedOpacity;
    this[borderRadius$] = borderRadius;
    this[onPressed$] = onPressed;
    if (!(pressedOpacity == null || dart.notNull(pressedOpacity) >= 0.0 && dart.notNull(pressedOpacity) <= 1.0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/button.dart", 61, 16, "pressedOpacity == null ||\n            (pressedOpacity >= 0.0 && pressedOpacity <= 1.0)");
    this[color$0] = null;
    this[_filled] = true;
    src__cupertino__button.CupertinoButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__button.CupertinoButton.prototype;
  dart.addTypeTests(src__cupertino__button.CupertinoButton);
  const child$3 = Symbol("CupertinoButton.child");
  const padding$ = Symbol("CupertinoButton.padding");
  const color$0 = Symbol("CupertinoButton.color");
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
  dart.setLibraryUri(src__cupertino__button.CupertinoButton, "package:flutter_web/src/cupertino/button.dart");
  dart.setFieldSignature(src__cupertino__button.CupertinoButton, () => ({
    __proto__: dart.getFields(src__cupertino__button.CupertinoButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget),
    padding: dart.finalFieldType(src__painting__edge_insets.EdgeInsetsGeometry),
    color: dart.finalFieldType(ui$.Color),
    disabledColor: dart.finalFieldType(ui$.Color),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    minSize: dart.finalFieldType(core.double),
    pressedOpacity: dart.finalFieldType(core.double),
    borderRadius: dart.finalFieldType(src__painting__border_radius.BorderRadius),
    [_filled]: dart.finalFieldType(core.bool)
  }));
  const _opacityTween = dart.privateName(src__cupertino__button, "_opacityTween");
  const _animationController = dart.privateName(src__cupertino__button, "_animationController");
  const _opacityAnimation = dart.privateName(src__cupertino__button, "_opacityAnimation");
  const _buttonHeldDown = dart.privateName(src__cupertino__button, "_buttonHeldDown");
  let C321;
  const _setTween = dart.privateName(src__cupertino__button, "_setTween");
  const _animate = dart.privateName(src__cupertino__button, "_animate");
  const _handleTapDown = dart.privateName(src__cupertino__button, "_handleTapDown");
  const _handleTapUp = dart.privateName(src__cupertino__button, "_handleTapUp");
  const _handleTapCancel = dart.privateName(src__cupertino__button, "_handleTapCancel");
  let C322;
  let C325;
  let C326;
  let C324;
  let C323;
  let C329;
  let C330;
  let C328;
  let C327;
  let C333;
  let C334;
  let C335;
  let C332;
  let C331;
  let C338;
  let C339;
  let C337;
  let C336;
  let C342;
  let C343;
  let C341;
  let C340;
  let C346;
  let C347;
  let C345;
  let C344;
  let C350;
  let C351;
  let C349;
  let C348;
  let C354;
  let C355;
  let C353;
  let C352;
  let C358;
  let C359;
  let C360;
  let C361;
  let C362;
  let C363;
  let C357;
  let C356;
  let C364;
  let C365;
  const State_SingleTickerProviderStateMixin$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__button.CupertinoButton) {};
  (State_SingleTickerProviderStateMixin$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__button.CupertinoButton));
  src__cupertino__button._CupertinoButtonState = class _CupertinoButtonState extends State_SingleTickerProviderStateMixin$ {
    initState() {
      super.initState();
      this[_animationController] = new src__animation__animation_controller.AnimationController.new({duration: C321 || CT.C321, value: 0.0, vsync: this});
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
      let t0, t0$, t0$0;
      let enabled = this.widget.enabled;
      let primaryColor = src__cupertino__theme.CupertinoTheme.of(context).primaryColor;
      let backgroundColor = (t0 = this.widget.color, t0 == null ? dart.test(this.widget[_filled]) ? primaryColor : null : t0);
      let foregroundColor = backgroundColor != null ? src__cupertino__theme.CupertinoTheme.of(context).primaryContrastingColor : dart.test(enabled) ? primaryColor : src__cupertino__button._kDisabledForeground;
      let textStyle = src__cupertino__theme.CupertinoTheme.of(context).textTheme.textStyle.copyWith({color: foregroundColor});
      return new src__widgets__gesture_detector.GestureDetector.new({behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTapDown: dart.test(enabled) ? dart.bind(this, _handleTapDown) : null, onTapUp: dart.test(enabled) ? dart.bind(this, _handleTapUp) : null, onTapCancel: dart.test(enabled) ? dart.bind(this, _handleTapCancel) : null, onTap: this.widget.onPressed, child: new src__widgets__basic.Semantics.new({button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: this.widget.minSize == null ? C322 || CT.C322 : new src__rendering__box.BoxConstraints.new({minWidth: this.widget.minSize, minHeight: this.widget.minSize}), child: new src__widgets__transitions.FadeTransition.new({opacity: this[_opacityAnimation], child: new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({borderRadius: this.widget.borderRadius, color: backgroundColor != null && !dart.test(enabled) ? (t0$ = this.widget.disabledColor, t0$ == null ? src__cupertino__button._kDisabledBackground : t0$) : backgroundColor}), child: new src__widgets__basic.Padding.new({padding: (t0$0 = this.widget.padding, t0$0 == null ? backgroundColor != null ? src__cupertino__button._kBackgroundButtonPadding : src__cupertino__button._kButtonPadding : t0$0), child: new src__widgets__basic.Center.new({widthFactor: 1.0, heightFactor: 1.0, child: new src__widgets__text.DefaultTextStyle.new({style: textStyle, child: new src__widgets__icon_theme.IconTheme.new({data: new src__widgets__icon_theme_data.IconThemeData.new({color: foregroundColor}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C323 || CT.C323}), $creationLocationd_0dea112b090073317d4: C327 || CT.C327}), $creationLocationd_0dea112b090073317d4: C331 || CT.C331}), $creationLocationd_0dea112b090073317d4: C336 || CT.C336}), $creationLocationd_0dea112b090073317d4: C340 || CT.C340}), $creationLocationd_0dea112b090073317d4: C344 || CT.C344}), $creationLocationd_0dea112b090073317d4: C348 || CT.C348}), $creationLocationd_0dea112b090073317d4: C352 || CT.C352}), $creationLocationd_0dea112b090073317d4: C356 || CT.C356});
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
  dart.setLibraryUri(src__cupertino__button._CupertinoButtonState, "package:flutter_web/src/cupertino/button.dart");
  dart.setFieldSignature(src__cupertino__button._CupertinoButtonState, () => ({
    __proto__: dart.getFields(src__cupertino__button._CupertinoButtonState.__proto__),
    [_opacityTween]: dart.finalFieldType(src__animation__tween.Tween$(core.double)),
    [_animationController]: dart.fieldType(src__animation__animation_controller.AnimationController),
    [_opacityAnimation]: dart.fieldType(src__animation__animation.Animation$(core.double)),
    [_buttonHeldDown]: dart.fieldType(core.bool)
  }));
  dart.defineLazy(src__cupertino__button._CupertinoButtonState, {
    /*src__cupertino__button._CupertinoButtonState.kFadeOutDuration*/get kFadeOutDuration() {
      return C364 || CT.C364;
    },
    /*src__cupertino__button._CupertinoButtonState.kFadeInDuration*/get kFadeInDuration() {
      return C365 || CT.C365;
    }
  });
  let C366;
  let C367;
  const _left = dart.privateName(src__painting__edge_insets, "_left");
  const _top = dart.privateName(src__painting__edge_insets, "_top");
  const _right = dart.privateName(src__painting__edge_insets, "_right");
  const _bottom = dart.privateName(src__painting__edge_insets, "_bottom");
  let C368;
  let C369;
  dart.defineLazy(src__cupertino__button, {
    /*src__cupertino__button._kDisabledBackground*/get _kDisabledBackground() {
      return C366 || CT.C366;
    },
    /*src__cupertino__button._kDisabledForeground*/get _kDisabledForeground() {
      return C367 || CT.C367;
    },
    /*src__cupertino__button._kButtonPadding*/get _kButtonPadding() {
      return C368 || CT.C368;
    },
    /*src__cupertino__button._kBackgroundButtonPadding*/get _kBackgroundButtonPadding() {
      return C369 || CT.C369;
    }
  });
  let C372;
  let C373;
  let C371;
  let C370;
  let C376;
  let C377;
  let C375;
  let C374;
  let C380;
  let C381;
  let C379;
  let C378;
  let C384;
  let C385;
  let C386;
  let C387;
  let C383;
  let C382;
  let C390;
  let C389;
  let C388;
  let C393;
  let C394;
  let C392;
  let C391;
  src__cupertino__page_scaffold.CupertinoPageScaffold = class CupertinoPageScaffold extends src__widgets__framework.StatelessWidget {
    get navigationBar() {
      return this[navigationBar$];
    }
    set navigationBar(value) {
      super.navigationBar = value;
    }
    get child() {
      return this[child$4];
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
          paddedContent = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: topPadding, bottom: bottomPadding}), child: this.child, $creationLocationd_0dea112b090073317d4: C370 || CT.C370});
        } else {
          paddedContent = new src__widgets__media_query.MediaQuery.new({data: existingMediaQuery.copyWith({padding: existingMediaQuery.padding.copyWith({top: topPadding})}), child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({bottom: bottomPadding}), child: this.child, $creationLocationd_0dea112b090073317d4: C374 || CT.C374}), $creationLocationd_0dea112b090073317d4: C378 || CT.C378});
        }
      }
      stacked[$add](paddedContent);
      if (this.navigationBar != null) {
        stacked[$add](new src__widgets__basic.Positioned.new({top: 0.0, left: 0.0, right: 0.0, child: this.navigationBar, $creationLocationd_0dea112b090073317d4: C382 || CT.C382}));
      }
      return new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this.backgroundColor}), child: new src__widgets__basic.Stack.new({children: stacked, $creationLocationd_0dea112b090073317d4: C388 || CT.C388}), $creationLocationd_0dea112b090073317d4: C391 || CT.C391});
    }
  };
  (src__cupertino__page_scaffold.CupertinoPageScaffold.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let navigationBar = opts && 'navigationBar' in opts ? opts.navigationBar : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C22 || CT.C22;
    let resizeToAvoidBottomInset = opts && 'resizeToAvoidBottomInset' in opts ? opts.resizeToAvoidBottomInset : true;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[navigationBar$] = navigationBar;
    this[backgroundColor$] = backgroundColor;
    this[resizeToAvoidBottomInset$] = resizeToAvoidBottomInset;
    this[child$4] = child;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", 27, 16, "child != null");
    if (!(resizeToAvoidBottomInset != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/page_scaffold.dart", 28, 16, "resizeToAvoidBottomInset != null");
    src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__page_scaffold.CupertinoPageScaffold.prototype;
  dart.addTypeTests(src__cupertino__page_scaffold.CupertinoPageScaffold);
  const navigationBar$ = Symbol("CupertinoPageScaffold.navigationBar");
  const child$4 = Symbol("CupertinoPageScaffold.child");
  const backgroundColor$ = Symbol("CupertinoPageScaffold.backgroundColor");
  const resizeToAvoidBottomInset$ = Symbol("CupertinoPageScaffold.resizeToAvoidBottomInset");
  dart.setMethodSignature(src__cupertino__page_scaffold.CupertinoPageScaffold, () => ({
    __proto__: dart.getMethods(src__cupertino__page_scaffold.CupertinoPageScaffold.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__page_scaffold.CupertinoPageScaffold, "package:flutter_web/src/cupertino/page_scaffold.dart");
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
  dart.setLibraryUri(src__cupertino__page_scaffold.ObstructingPreferredSizeWidget, "package:flutter_web/src/cupertino/page_scaffold.dart");
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
    let radius = opts && 'radius' in opts ? opts.radius : 10;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[animating$] = animating;
    this[radius$] = radius;
    if (!(animating != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart", 24, 16, "animating != null");
    if (!(radius != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart", 25, 16, "radius != null");
    if (!(dart.notNull(radius) > 0)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/activity_indicator.dart", 26, 16, "radius > 0");
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
  dart.setLibraryUri(src__cupertino__activity_indicator.CupertinoActivityIndicator, "package:flutter_web/src/cupertino/activity_indicator.dart");
  dart.setFieldSignature(src__cupertino__activity_indicator.CupertinoActivityIndicator, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator.CupertinoActivityIndicator.__proto__),
    animating: dart.finalFieldType(core.bool),
    radius: dart.finalFieldType(core.double)
  }));
  const _controller = dart.privateName(src__cupertino__activity_indicator, "_controller");
  let C395;
  let C398;
  let C397;
  let C396;
  let C401;
  let C402;
  let C403;
  let C400;
  let C399;
  const State_SingleTickerProviderStateMixin$$ = class State_SingleTickerProviderStateMixin extends src__widgets__framework.State$(src__cupertino__activity_indicator.CupertinoActivityIndicator) {};
  (State_SingleTickerProviderStateMixin$$.new = function() {
    src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator)[dart.mixinNew].call(this);
    State_SingleTickerProviderStateMixin$$.__proto__.new.call(this);
  }).prototype = State_SingleTickerProviderStateMixin$$.prototype;
  dart.applyMixin(State_SingleTickerProviderStateMixin$$, src__widgets__ticker_provider.SingleTickerProviderStateMixin$(src__cupertino__activity_indicator.CupertinoActivityIndicator));
  src__cupertino__activity_indicator._CupertinoActivityIndicatorState = class _CupertinoActivityIndicatorState extends State_SingleTickerProviderStateMixin$$ {
    initState() {
      super.initState();
      this[_controller] = new src__animation__animation_controller.AnimationController.new({duration: C395 || CT.C395, vsync: this});
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
      return new src__widgets__basic.SizedBox.new({height: dart.notNull(this.widget.radius) * 2, width: dart.notNull(this.widget.radius) * 2, child: new src__widgets__basic.CustomPaint.new({painter: new src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.new({position: this[_controller], radius: this.widget.radius}), $creationLocationd_0dea112b090073317d4: C396 || CT.C396}), $creationLocationd_0dea112b090073317d4: C399 || CT.C399});
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
  dart.setLibraryUri(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, "package:flutter_web/src/cupertino/activity_indicator.dart");
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorState, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorState.__proto__),
    [_controller]: dart.fieldType(src__animation__animation_controller.AnimationController)
  }));
  src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter = class _CupertinoActivityIndicatorPainter extends src__rendering__custom_paint.CustomPainter {
    paint(canvas, size) {
      canvas.save();
      canvas.translate(dart.notNull(size.width) / 2.0, dart.notNull(size.height) / 2.0);
      let activeTick = (12 * dart.notNull(this.position.value))[$floor]();
      for (let i = 0; i < 12; i = i + 1) {
        let t = ((i + activeTick)[$modulo](12) / 6)[$clamp](0.0, 1.0);
        let paint = new ui$.Paint.new();
        paint.color = ui$.Color.lerp(src__cupertino__activity_indicator._kActiveTickColor, src__cupertino__activity_indicator._kTickColor, t);
        canvas.drawRRect(this.tickFundamentalRRect, paint);
        canvas.rotate(-6.283185307179586 / 12);
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
    this.tickFundamentalRRect = new ui$.RRect.fromLTRBXY(-dart.notNull(radius), 1.0 * dart.notNull(radius) / 10, -dart.notNull(radius) / 2.0, -1.0 * dart.notNull(radius) / 10, 1.0, 1.0);
    src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__.new.call(this, {repaint: position});
    ;
  }).prototype = src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.prototype;
  dart.addTypeTests(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter);
  dart.setMethodSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getMethods(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    paint: dart.fnType(dart.void, [ui$.Canvas, ui$.Size]),
    shouldRepaint: dart.fnType(core.bool, [core.Object])
  }));
  dart.setLibraryUri(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, "package:flutter_web/src/cupertino/activity_indicator.dart");
  dart.setFieldSignature(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter, () => ({
    __proto__: dart.getFields(src__cupertino__activity_indicator._CupertinoActivityIndicatorPainter.__proto__),
    position: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    tickFundamentalRRect: dart.finalFieldType(ui$.RRect)
  }));
  let C404;
  dart.defineLazy(src__cupertino__activity_indicator, {
    /*src__cupertino__activity_indicator._kDefaultIndicatorRadius*/get _kDefaultIndicatorRadius() {
      return 10;
    },
    /*src__cupertino__activity_indicator._kTwoPI*/get _kTwoPI() {
      return 6.283185307179586;
    },
    /*src__cupertino__activity_indicator._kTickCount*/get _kTickCount() {
      return 12;
    },
    /*src__cupertino__activity_indicator._kHalfTickCount*/get _kHalfTickCount() {
      return 6;
    },
    /*src__cupertino__activity_indicator._kTickColor*/get _kTickColor() {
      return C35 || CT.C35;
    },
    /*src__cupertino__activity_indicator._kActiveTickColor*/get _kActiveTickColor() {
      return C404 || CT.C404;
    }
  });
  let C407;
  let C408;
  let C409;
  let C406;
  let C405;
  let C412;
  let C411;
  let C410;
  let C415;
  let C416;
  let C417;
  let C414;
  let C413;
  let C420;
  let C421;
  let C419;
  let C418;
  const _buildContent = dart.privateName(src__cupertino__action_sheet, "_buildContent");
  let C424;
  let C423;
  let C422;
  let C427;
  let C428;
  let C429;
  let C426;
  let C425;
  let C432;
  let C431;
  let C430;
  const _buildActions = dart.privateName(src__cupertino__action_sheet, "_buildActions");
  let C435;
  let C434;
  let C433;
  let C438;
  let C439;
  let C437;
  let C436;
  const _buildCancelButton = dart.privateName(src__cupertino__action_sheet, "_buildCancelButton");
  let C442;
  let C443;
  let C441;
  let C440;
  let C446;
  let C447;
  let C445;
  let C444;
  let C450;
  let C451;
  let C449;
  let C448;
  let C454;
  let C455;
  let C453;
  let C452;
  let C458;
  let C457;
  let C456;
  let C459;
  let C462;
  let C463;
  let C464;
  let C461;
  let C460;
  let C467;
  let C468;
  let C469;
  let C466;
  let C465;
  let C472;
  let C473;
  let C474;
  let C475;
  let C476;
  let C471;
  let C470;
  let C479;
  let C478;
  let C477;
  src__cupertino__action_sheet.CupertinoActionSheet = class CupertinoActionSheet extends src__widgets__framework.StatelessWidget {
    get title() {
      return this[title$0];
    }
    set title(value) {
      super.title = value;
    }
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get actions() {
      return this[actions$];
    }
    set actions(value) {
      super.actions = value;
    }
    get messageScrollController() {
      return this[messageScrollController$];
    }
    set messageScrollController(value) {
      super.messageScrollController = value;
    }
    get actionScrollController() {
      return this[actionScrollController$];
    }
    set actionScrollController(value) {
      super.actionScrollController = value;
    }
    get cancelButton() {
      return this[cancelButton$];
    }
    set cancelButton(value) {
      super.cancelButton = value;
    }
    [_buildContent]() {
      let content = JSArrayOfWidget().of([]);
      if (this.title != null || this.message != null) {
        let titleSection = new src__cupertino__action_sheet._CupertinoAlertContentSection.new({title: this.title, message: this.message, scrollController: this.messageScrollController, $creationLocationd_0dea112b090073317d4: C405 || CT.C405});
        content[$add](new src__widgets__basic.Flexible.new({child: titleSection, $creationLocationd_0dea112b090073317d4: C410 || CT.C410}));
      }
      return new src__widgets__container.Container.new({color: src__cupertino__action_sheet._kBackgroundColor, child: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: content, $creationLocationd_0dea112b090073317d4: C413 || CT.C413}), $creationLocationd_0dea112b090073317d4: C418 || CT.C418});
    }
    [_buildActions]() {
      if (this.actions == null || dart.test(this.actions[$isEmpty])) {
        return new src__widgets__container.Container.new({height: 0.0, $creationLocationd_0dea112b090073317d4: C422 || CT.C422});
      }
      return new src__widgets__container.Container.new({child: new src__cupertino__action_sheet._CupertinoAlertActionSection.new({children: this.actions, scrollController: this.actionScrollController, hasCancelButton: this.cancelButton != null, $creationLocationd_0dea112b090073317d4: C425 || CT.C425}), $creationLocationd_0dea112b090073317d4: C430 || CT.C430});
    }
    [_buildCancelButton]() {
      let cancelPadding = this.actions != null || this.message != null || this.title != null ? 8 : 0.0;
      return new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: cancelPadding}), child: new src__cupertino__action_sheet._CupertinoActionSheetCancelButton.new({child: this.cancelButton, $creationLocationd_0dea112b090073317d4: C433 || CT.C433}), $creationLocationd_0dea112b090073317d4: C436 || CT.C436});
    }
    build(context) {
      let children = JSArrayOfWidget().of([new src__widgets__basic.Flexible.new({child: new src__widgets__basic.ClipRRect.new({borderRadius: new src__painting__border_radius.BorderRadius.circular(12.0), child: new src__widgets__basic.BackdropFilter.new({filter: new ui$.ImageFilter.blur({sigmaX: 20, sigmaY: 20}), child: new src__widgets__container.Container.new({decoration: src__cupertino__action_sheet._kAlertBlurOverlayDecoration, child: new src__cupertino__action_sheet._CupertinoAlertRenderWidget.new({contentSection: this[_buildContent](), actionsSection: this[_buildActions](), $creationLocationd_0dea112b090073317d4: C440 || CT.C440}), $creationLocationd_0dea112b090073317d4: C444 || CT.C444}), $creationLocationd_0dea112b090073317d4: C448 || CT.C448}), $creationLocationd_0dea112b090073317d4: C452 || CT.C452}), $creationLocationd_0dea112b090073317d4: C456 || CT.C456})]);
      if (this.cancelButton != null) {
        children[$add](this[_buildCancelButton]());
      }
      let orientation = src__widgets__media_query.MediaQuery.of(context).orientation;
      let actionSheetWidth = null;
      if (dart.equals(orientation, src__widgets__media_query.Orientation.portrait)) {
        actionSheetWidth = dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.width) - 8 * 2;
      } else {
        actionSheetWidth = dart.notNull(src__widgets__media_query.MediaQuery.of(context).size.height) - 8 * 2;
      }
      return new src__widgets__safe_area.SafeArea.new({child: new src__widgets__basic.Semantics.new({namesRoute: true, scopesRoute: true, explicitChildNodes: true, label: "Alert", child: new src__widgets__container.Container.new({width: actionSheetWidth, margin: C459 || CT.C459, child: new src__widgets__basic.Column.new({children: children, mainAxisSize: src__rendering__flex.MainAxisSize.min, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, $creationLocationd_0dea112b090073317d4: C460 || CT.C460}), $creationLocationd_0dea112b090073317d4: C465 || CT.C465}), $creationLocationd_0dea112b090073317d4: C470 || CT.C470}), $creationLocationd_0dea112b090073317d4: C477 || CT.C477});
    }
  };
  (src__cupertino__action_sheet.CupertinoActionSheet.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let actions = opts && 'actions' in opts ? opts.actions : null;
    let messageScrollController = opts && 'messageScrollController' in opts ? opts.messageScrollController : null;
    let actionScrollController = opts && 'actionScrollController' in opts ? opts.actionScrollController : null;
    let cancelButton = opts && 'cancelButton' in opts ? opts.cancelButton : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[title$0] = title;
    this[message$] = message;
    this[actions$] = actions;
    this[messageScrollController$] = messageScrollController;
    this[actionScrollController$] = actionScrollController;
    this[cancelButton$] = cancelButton;
    if (!(actions != null || title != null || message != null || cancelButton != null)) dart.assertFailed("An action sheet must have a non-null value for at least one of the following arguments: " + "actions, title, message, or cancelButton", "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 112, 13, "actions != null ||\n                title != null ||\n                message != null ||\n                cancelButton != null");
    src__cupertino__action_sheet.CupertinoActionSheet.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet.CupertinoActionSheet.prototype;
  dart.addTypeTests(src__cupertino__action_sheet.CupertinoActionSheet);
  const title$0 = Symbol("CupertinoActionSheet.title");
  const message$ = Symbol("CupertinoActionSheet.message");
  const actions$ = Symbol("CupertinoActionSheet.actions");
  const messageScrollController$ = Symbol("CupertinoActionSheet.messageScrollController");
  const actionScrollController$ = Symbol("CupertinoActionSheet.actionScrollController");
  const cancelButton$ = Symbol("CupertinoActionSheet.cancelButton");
  dart.setMethodSignature(src__cupertino__action_sheet.CupertinoActionSheet, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet.CupertinoActionSheet.__proto__),
    [_buildContent]: dart.fnType(src__widgets__framework.Widget, []),
    [_buildActions]: dart.fnType(src__widgets__framework.Widget, []),
    [_buildCancelButton]: dart.fnType(src__widgets__framework.Widget, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet.CupertinoActionSheet, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet.CupertinoActionSheet, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet.CupertinoActionSheet.__proto__),
    title: dart.finalFieldType(src__widgets__framework.Widget),
    message: dart.finalFieldType(src__widgets__framework.Widget),
    actions: dart.finalFieldType(core.List$(src__widgets__framework.Widget)),
    messageScrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    actionScrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    cancelButton: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  let C480;
  let C481;
  let C484;
  let C485;
  let C486;
  let C483;
  let C482;
  let C489;
  let C490;
  let C491;
  let C488;
  let C487;
  let C494;
  let C495;
  let C493;
  let C492;
  let C498;
  let C499;
  let C497;
  let C496;
  let C502;
  let C503;
  let C504;
  let C501;
  let C500;
  src__cupertino__action_sheet.CupertinoActionSheetAction = class CupertinoActionSheetAction extends src__widgets__framework.StatelessWidget {
    get onPressed() {
      return this[onPressed$0];
    }
    set onPressed(value) {
      super.onPressed = value;
    }
    get isDefaultAction() {
      return this[isDefaultAction$];
    }
    set isDefaultAction(value) {
      super.isDefaultAction = value;
    }
    get isDestructiveAction() {
      return this[isDestructiveAction$];
    }
    set isDestructiveAction(value) {
      super.isDestructiveAction = value;
    }
    get child() {
      return this[child$5];
    }
    set child(value) {
      super.child = value;
    }
    build(context) {
      let style = src__cupertino__action_sheet._kActionSheetActionStyle;
      if (dart.test(this.isDefaultAction)) {
        style = style.copyWith({fontWeight: ui$.FontWeight.w600});
      }
      if (dart.test(this.isDestructiveAction)) {
        style = style.copyWith({color: src__cupertino__colors.CupertinoColors.destructiveRed});
      }
      return new src__widgets__gesture_detector.GestureDetector.new({onTap: this.onPressed, behavior: src__rendering__proxy_box.HitTestBehavior.opaque, child: new src__widgets__basic.ConstrainedBox.new({constraints: C480 || CT.C480, child: new src__widgets__basic.Semantics.new({button: true, child: new src__widgets__container.Container.new({alignment: src__painting__alignment.Alignment.center, padding: C481 || CT.C481, child: new src__widgets__text.DefaultTextStyle.new({style: style, child: this.child, textAlign: ui$.TextAlign.center, $creationLocationd_0dea112b090073317d4: C482 || CT.C482}), $creationLocationd_0dea112b090073317d4: C487 || CT.C487}), $creationLocationd_0dea112b090073317d4: C492 || CT.C492}), $creationLocationd_0dea112b090073317d4: C496 || CT.C496}), $creationLocationd_0dea112b090073317d4: C500 || CT.C500});
    }
  };
  (src__cupertino__action_sheet.CupertinoActionSheetAction.new = function(opts) {
    let onPressed = opts && 'onPressed' in opts ? opts.onPressed : null;
    let isDefaultAction = opts && 'isDefaultAction' in opts ? opts.isDefaultAction : false;
    let isDestructiveAction = opts && 'isDestructiveAction' in opts ? opts.isDestructiveAction : false;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[onPressed$0] = onPressed;
    this[isDefaultAction$] = isDefaultAction;
    this[isDestructiveAction$] = isDestructiveAction;
    this[child$5] = child;
    if (!(child != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 280, 16, "child != null");
    if (!(onPressed != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 281, 16, "onPressed != null");
    src__cupertino__action_sheet.CupertinoActionSheetAction.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet.CupertinoActionSheetAction.prototype;
  dart.addTypeTests(src__cupertino__action_sheet.CupertinoActionSheetAction);
  const onPressed$0 = Symbol("CupertinoActionSheetAction.onPressed");
  const isDefaultAction$ = Symbol("CupertinoActionSheetAction.isDefaultAction");
  const isDestructiveAction$ = Symbol("CupertinoActionSheetAction.isDestructiveAction");
  const child$5 = Symbol("CupertinoActionSheetAction.child");
  dart.setMethodSignature(src__cupertino__action_sheet.CupertinoActionSheetAction, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet.CupertinoActionSheetAction.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet.CupertinoActionSheetAction, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet.CupertinoActionSheetAction, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet.CupertinoActionSheetAction.__proto__),
    onPressed: dart.finalFieldType(dart.fnType(dart.void, [])),
    isDefaultAction: dart.finalFieldType(core.bool),
    isDestructiveAction: dart.finalFieldType(core.bool),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  src__cupertino__action_sheet._CupertinoActionSheetCancelButton = class _CupertinoActionSheetCancelButton extends src__widgets__framework.StatefulWidget {
    createState() {
      return new src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.new();
    }
  };
  (src__cupertino__action_sheet._CupertinoActionSheetCancelButton.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.child = child;
    src__cupertino__action_sheet._CupertinoActionSheetCancelButton.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoActionSheetCancelButton.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoActionSheetCancelButton);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoActionSheetCancelButton, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoActionSheetCancelButton.__proto__),
    createState: dart.fnType(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState, [])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoActionSheetCancelButton, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoActionSheetCancelButton, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoActionSheetCancelButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _backgroundColor = dart.privateName(src__cupertino__action_sheet, "_backgroundColor");
  const _onTapDown = dart.privateName(src__cupertino__action_sheet, "_onTapDown");
  const _onTapUp = dart.privateName(src__cupertino__action_sheet, "_onTapUp");
  const _onTapCancel = dart.privateName(src__cupertino__action_sheet, "_onTapCancel");
  let C507;
  let C508;
  let C506;
  let C505;
  let C511;
  let C512;
  let C513;
  let C514;
  let C515;
  let C510;
  let C509;
  src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState = class _CupertinoActionSheetCancelButtonState extends src__widgets__framework.State$(src__cupertino__action_sheet._CupertinoActionSheetCancelButton) {
    initState() {
      this[_backgroundColor] = src__cupertino__colors.CupertinoColors.white;
      super.initState();
    }
    [_onTapDown](event) {
      this.setState(dart.fn(() => {
        this[_backgroundColor] = src__cupertino__action_sheet._kCancelButtonPressedColor;
      }, VoidToNull()));
    }
    [_onTapUp](event) {
      this.setState(dart.fn(() => {
        this[_backgroundColor] = src__cupertino__colors.CupertinoColors.white;
      }, VoidToNull()));
    }
    [_onTapCancel]() {
      this.setState(dart.fn(() => {
        this[_backgroundColor] = src__cupertino__colors.CupertinoColors.white;
      }, VoidToNull()));
    }
    build(context) {
      return new src__widgets__gesture_detector.GestureDetector.new({excludeFromSemantics: true, onTapDown: dart.bind(this, _onTapDown), onTapUp: dart.bind(this, _onTapUp), onTapCancel: dart.bind(this, _onTapCancel), child: new src__widgets__container.Container.new({decoration: new src__painting__box_decoration.BoxDecoration.new({color: this[_backgroundColor], borderRadius: new src__painting__border_radius.BorderRadius.circular(14)}), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C505 || CT.C505}), $creationLocationd_0dea112b090073317d4: C509 || CT.C509});
    }
  };
  (src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.new = function() {
    this[_backgroundColor] = null;
    src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.__proto__),
    [_onTapDown]: dart.fnType(dart.void, [src__gestures__tap.TapDownDetails]),
    [_onTapUp]: dart.fnType(dart.void, [src__gestures__tap.TapUpDetails]),
    [_onTapCancel]: dart.fnType(dart.void, []),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoActionSheetCancelButtonState.__proto__),
    [_backgroundColor]: dart.fieldType(ui$.Color)
  }));
  src__cupertino__action_sheet._CupertinoAlertRenderWidget = class _CupertinoAlertRenderWidget extends src__widgets__framework.RenderObjectWidget {
    createRenderObject(context) {
      return new src__cupertino__action_sheet._RenderCupertinoAlert.new({dividerThickness: 1 / dart.notNull(src__widgets__media_query.MediaQuery.of(context).devicePixelRatio)});
    }
    createElement() {
      return new src__cupertino__action_sheet._CupertinoAlertRenderElement.new(this);
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertRenderWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let contentSection = opts && 'contentSection' in opts ? opts.contentSection : null;
    let actionsSection = opts && 'actionsSection' in opts ? opts.actionsSection : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.contentSection = contentSection;
    this.actionsSection = actionsSection;
    src__cupertino__action_sheet._CupertinoAlertRenderWidget.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertRenderWidget.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertRenderWidget);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertRenderWidget, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertRenderWidget.__proto__),
    createRenderObject: dart.fnType(src__rendering__object.RenderObject, [src__widgets__framework.BuildContext]),
    createElement: dart.fnType(src__widgets__framework.RenderObjectElement, [])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertRenderWidget, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoAlertRenderWidget, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoAlertRenderWidget.__proto__),
    contentSection: dart.finalFieldType(src__widgets__framework.Widget),
    actionsSection: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _contentElement = dart.privateName(src__cupertino__action_sheet, "_contentElement");
  const _actionsElement = dart.privateName(src__cupertino__action_sheet, "_actionsElement");
  const _placeChildInSlot = dart.privateName(src__cupertino__action_sheet, "_placeChildInSlot");
  const _name$0 = dart.privateName(src__cupertino__action_sheet, "_name");
  let C516;
  let C517;
  src__cupertino__action_sheet._CupertinoAlertRenderElement = class _CupertinoAlertRenderElement extends src__widgets__framework.RenderObjectElement {
    get widget() {
      return src__cupertino__action_sheet._CupertinoAlertRenderWidget._check(super.widget);
    }
    get renderObject() {
      return src__cupertino__action_sheet._RenderCupertinoAlert._check(super.renderObject);
    }
    visitChildren(visitor) {
      if (this[_contentElement] != null) {
        visitor(this[_contentElement]);
      }
      if (this[_actionsElement] != null) {
        visitor(this[_actionsElement]);
      }
    }
    mount(parent, newSlot) {
      super.mount(parent, newSlot);
      this[_contentElement] = this.updateChild(this[_contentElement], this.widget.contentSection, src__cupertino__action_sheet._AlertSections.contentSection);
      this[_actionsElement] = this.updateChild(this[_actionsElement], this.widget.actionsSection, src__cupertino__action_sheet._AlertSections.actionsSection);
    }
    insertChildRenderObject(child, slot) {
      src__rendering__object.RenderObject._check(child);
      src__cupertino__action_sheet._AlertSections._check(slot);
      this[_placeChildInSlot](child, slot);
    }
    moveChildRenderObject(child, slot) {
      src__rendering__object.RenderObject._check(child);
      src__cupertino__action_sheet._AlertSections._check(slot);
      this[_placeChildInSlot](child, slot);
    }
    update(newWidget) {
      src__widgets__framework.RenderObjectWidget._check(newWidget);
      super.update(newWidget);
      this[_contentElement] = this.updateChild(this[_contentElement], this.widget.contentSection, src__cupertino__action_sheet._AlertSections.contentSection);
      this[_actionsElement] = this.updateChild(this[_actionsElement], this.widget.actionsSection, src__cupertino__action_sheet._AlertSections.actionsSection);
    }
    forgetChild(child) {
      if (!(dart.equals(child, this[_contentElement]) || dart.equals(child, this[_actionsElement]))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 478, 12, "child == _contentElement || child == _actionsElement");
      if (dart.equals(this[_contentElement], child)) {
        this[_contentElement] = null;
      } else if (dart.equals(this[_actionsElement], child)) {
        this[_actionsElement] = null;
      }
    }
    removeChildRenderObject(child) {
      src__rendering__object.RenderObject._check(child);
      if (!(dart.equals(child, this.renderObject.contentSection) || dart.equals(child, this.renderObject.actionsSection))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 488, 12, "child == renderObject.contentSection ||\n        child == renderObject.actionsSection");
      if (dart.equals(this.renderObject.contentSection, child)) {
        this.renderObject.contentSection = null;
      } else if (dart.equals(this.renderObject.actionsSection, child)) {
        this.renderObject.actionsSection = null;
      }
    }
    [_placeChildInSlot](child, slot) {
      if (!(slot != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 498, 12, "slot != null");
      switch (slot) {
        case C516 || CT.C516:
        {
          this.renderObject.contentSection = src__rendering__box.RenderBox._check(child);
          break;
        }
        case C517 || CT.C517:
        {
          this.renderObject.actionsSection = src__rendering__box.RenderBox._check(child);
          break;
        }
      }
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertRenderElement.new = function(widget) {
    this[_contentElement] = null;
    this[_actionsElement] = null;
    src__cupertino__action_sheet._CupertinoAlertRenderElement.__proto__.new.call(this, widget);
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertRenderElement.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertRenderElement);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertRenderElement, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertRenderElement.__proto__),
    insertChildRenderObject: dart.fnType(dart.void, [core.Object, core.Object]),
    moveChildRenderObject: dart.fnType(dart.void, [core.Object, core.Object]),
    forgetChild: dart.fnType(dart.void, [src__widgets__framework.Element]),
    removeChildRenderObject: dart.fnType(dart.void, [core.Object]),
    [_placeChildInSlot]: dart.fnType(dart.void, [src__rendering__object.RenderObject, src__cupertino__action_sheet._AlertSections])
  }));
  dart.setGetterSignature(src__cupertino__action_sheet._CupertinoAlertRenderElement, () => ({
    __proto__: dart.getGetters(src__cupertino__action_sheet._CupertinoAlertRenderElement.__proto__),
    widget: src__cupertino__action_sheet._CupertinoAlertRenderWidget,
    renderObject: src__cupertino__action_sheet._RenderCupertinoAlert
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertRenderElement, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoAlertRenderElement, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoAlertRenderElement.__proto__),
    [_contentElement]: dart.fieldType(src__widgets__framework.Element),
    [_actionsElement]: dart.fieldType(src__widgets__framework.Element)
  }));
  const _dividerPaint = dart.privateName(src__cupertino__action_sheet, "_dividerPaint");
  const _contentSection = dart.privateName(src__cupertino__action_sheet, "_contentSection");
  const _actionsSection = dart.privateName(src__cupertino__action_sheet, "_actionsSection");
  const _dividerThickness = dart.privateName(src__cupertino__action_sheet, "_dividerThickness");
  const _paintDividerBetweenContentAndActions = dart.privateName(src__cupertino__action_sheet, "_paintDividerBetweenContentAndActions");
  src__cupertino__action_sheet._RenderCupertinoAlert = class _RenderCupertinoAlert extends src__rendering__box.RenderBox {
    get contentSection() {
      return this[_contentSection];
    }
    set contentSection(newContentSection) {
      if (!dart.equals(newContentSection, this[_contentSection])) {
        if (null != this[_contentSection]) {
          this.dropChild(this[_contentSection]);
        }
        this[_contentSection] = newContentSection;
        if (null != this[_contentSection]) {
          this.adoptChild(this[_contentSection]);
        }
      }
    }
    get actionsSection() {
      return this[_actionsSection];
    }
    set actionsSection(newActionsSection) {
      if (!dart.equals(newActionsSection, this[_actionsSection])) {
        if (null != this[_actionsSection]) {
          this.dropChild(this[_actionsSection]);
        }
        this[_actionsSection] = newActionsSection;
        if (null != this[_actionsSection]) {
          this.adoptChild(this[_actionsSection]);
        }
      }
    }
    attach(owner) {
      src__rendering__object.PipelineOwner._check(owner);
      super.attach(owner);
      if (null != this.contentSection) {
        this.contentSection.attach(owner);
      }
      if (null != this.actionsSection) {
        this.actionsSection.attach(owner);
      }
    }
    detach() {
      super.detach();
      if (null != this.contentSection) {
        this.contentSection.detach();
      }
      if (null != this.actionsSection) {
        this.actionsSection.detach();
      }
    }
    redepthChildren() {
      if (null != this.contentSection) {
        this.redepthChild(this.contentSection);
      }
      if (null != this.actionsSection) {
        this.redepthChild(this.actionsSection);
      }
    }
    setupParentData(child) {
      src__rendering__box.RenderBox._check(child);
      if (!src__rendering__custom_layout.MultiChildLayoutParentData.is(child.parentData)) {
        child.parentData = new src__rendering__custom_layout.MultiChildLayoutParentData.new();
      }
    }
    visitChildren(visitor) {
      if (this.contentSection != null) {
        visitor(this.contentSection);
      }
      if (this.actionsSection != null) {
        visitor(this.actionsSection);
      }
    }
    debugDescribeChildren() {
      let value = JSArrayOfDiagnosticsNode().of([]);
      if (this.contentSection != null) {
        value[$add](this.contentSection.toDiagnosticsNode({name: "content"}));
      }
      if (this.actionsSection != null) {
        value[$add](this.actionsSection.toDiagnosticsNode({name: "actions"}));
      }
      return value;
    }
    computeMinIntrinsicWidth(height) {
      return this.constraints.minWidth;
    }
    computeMaxIntrinsicWidth(height) {
      return this.constraints.maxWidth;
    }
    computeMinIntrinsicHeight(width) {
      let contentHeight = this.contentSection.getMinIntrinsicHeight(width);
      let actionsHeight = this.actionsSection.getMinIntrinsicHeight(width);
      let hasDivider = dart.notNull(contentHeight) > 0.0 && dart.notNull(actionsHeight) > 0.0;
      let height = dart.notNull(contentHeight) + dart.notNull(hasDivider ? this[_dividerThickness] : 0.0) + dart.notNull(actionsHeight);
      if (dart.notNull(actionsHeight) > 0 || dart.notNull(contentHeight) > 0) height = height - 2 * 10;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    computeMaxIntrinsicHeight(width) {
      let contentHeight = this.contentSection.getMaxIntrinsicHeight(width);
      let actionsHeight = this.actionsSection.getMaxIntrinsicHeight(width);
      let hasDivider = dart.notNull(contentHeight) > 0.0 && dart.notNull(actionsHeight) > 0.0;
      let height = dart.notNull(contentHeight) + dart.notNull(hasDivider ? this[_dividerThickness] : 0.0) + dart.notNull(actionsHeight);
      if (dart.notNull(actionsHeight) > 0 || dart.notNull(contentHeight) > 0) height = height - 2 * 10;
      if (height[$isFinite]) return height;
      return 0.0;
    }
    performLayout() {
      let hasDivider = dart.notNull(this.contentSection.getMaxIntrinsicHeight(this.constraints.maxWidth)) > 0.0 && dart.notNull(this.actionsSection.getMaxIntrinsicHeight(this.constraints.maxWidth)) > 0.0;
      let dividerThickness = hasDivider ? this[_dividerThickness] : 0.0;
      let minActionsHeight = this.actionsSection.getMinIntrinsicHeight(this.constraints.maxWidth);
      this.contentSection.layout(this.constraints.deflate(new src__painting__edge_insets.EdgeInsets.only({bottom: dart.notNull(minActionsHeight) + dart.notNull(dividerThickness)})), {parentUsesSize: true});
      let contentSize = this.contentSection.size;
      this.actionsSection.layout(this.constraints.deflate(new src__painting__edge_insets.EdgeInsets.only({top: dart.notNull(contentSize.height) + dart.notNull(dividerThickness)})), {parentUsesSize: true});
      let actionsSize = this.actionsSection.size;
      let actionSheetHeight = dart.notNull(contentSize.height) + dart.notNull(dividerThickness) + dart.notNull(actionsSize.height);
      this.size = new ui$.Size.new(this.constraints.maxWidth, actionSheetHeight);
      if (!src__rendering__custom_layout.MultiChildLayoutParentData.is(this.actionsSection.parentData)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 705, 12, "actionsSection.parentData is MultiChildLayoutParentData");
      let actionParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(this.actionsSection.parentData);
      actionParentData.offset = new ui$.Offset.new(0.0, dart.notNull(contentSize.height) + dart.notNull(dividerThickness));
    }
    paint(context, offset) {
      let contentParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(this.contentSection.parentData);
      this.contentSection.paint(context, offset['+'](contentParentData.offset));
      let hasDivider = dart.notNull(this.contentSection.size.height) > 0.0 && dart.notNull(this.actionsSection.size.height) > 0.0;
      if (hasDivider) {
        this[_paintDividerBetweenContentAndActions](context.canvas, offset);
      }
      let actionsParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(this.actionsSection.parentData);
      this.actionsSection.paint(context, offset['+'](actionsParentData.offset));
    }
    [_paintDividerBetweenContentAndActions](canvas, offset) {
      canvas.drawRect(new ui$.Rect.fromLTWH(offset.dx, dart.notNull(offset.dy) + dart.notNull(this.contentSection.size.height), this.size.width, this[_dividerThickness]), this[_dividerPaint]);
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      let contentSectionParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(this.contentSection.parentData);
      let actionsSectionParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(this.actionsSection.parentData);
      return dart.test(result.addWithPaintOffset({offset: contentSectionParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (!dart.equals(transformed, position['-'](contentSectionParentData.offset))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 751, 20, "transformed == position - contentSectionParentData.offset");
          return this.contentSection.hitTest(result, {position: transformed});
        }, BoxHitTestResultAndOffsetTobool())})) || dart.test(result.addWithPaintOffset({offset: actionsSectionParentData.offset, position: position, hitTest: dart.fn((result, transformed) => {
          if (!dart.equals(transformed, position['-'](actionsSectionParentData.offset))) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 759, 20, "transformed == position - actionsSectionParentData.offset");
          return this.actionsSection.hitTest(result, {position: transformed});
        }, BoxHitTestResultAndOffsetTobool())}));
    }
  };
  (src__cupertino__action_sheet._RenderCupertinoAlert.new = function(opts) {
    let t0;
    let contentSection = opts && 'contentSection' in opts ? opts.contentSection : null;
    let actionsSection = opts && 'actionsSection' in opts ? opts.actionsSection : null;
    let dividerThickness = opts && 'dividerThickness' in opts ? opts.dividerThickness : 0;
    this[_dividerPaint] = (t0 = new ui$.Paint.new(), t0.color = src__cupertino__action_sheet._kButtonDividerColor, t0.style = ui$.PaintingStyle.fill, t0);
    this[_contentSection] = contentSection;
    this[_actionsSection] = actionsSection;
    this[_dividerThickness] = dividerThickness;
    src__cupertino__action_sheet._RenderCupertinoAlert.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__action_sheet._RenderCupertinoAlert.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._RenderCupertinoAlert);
  dart.setMethodSignature(src__cupertino__action_sheet._RenderCupertinoAlert, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._RenderCupertinoAlert.__proto__),
    [_paintDividerBetweenContentAndActions]: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset])
  }));
  dart.setGetterSignature(src__cupertino__action_sheet._RenderCupertinoAlert, () => ({
    __proto__: dart.getGetters(src__cupertino__action_sheet._RenderCupertinoAlert.__proto__),
    contentSection: src__rendering__box.RenderBox,
    actionsSection: src__rendering__box.RenderBox
  }));
  dart.setSetterSignature(src__cupertino__action_sheet._RenderCupertinoAlert, () => ({
    __proto__: dart.getSetters(src__cupertino__action_sheet._RenderCupertinoAlert.__proto__),
    contentSection: src__rendering__box.RenderBox,
    actionsSection: src__rendering__box.RenderBox
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._RenderCupertinoAlert, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._RenderCupertinoAlert, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._RenderCupertinoAlert.__proto__),
    [_contentSection]: dart.fieldType(src__rendering__box.RenderBox),
    [_actionsSection]: dart.fieldType(src__rendering__box.RenderBox),
    [_dividerThickness]: dart.finalFieldType(core.double),
    [_dividerPaint]: dart.finalFieldType(ui$.Paint)
  }));
  let C518;
  src__cupertino__action_sheet._AlertSections = class _AlertSections extends core.Object {
    toString() {
      return this[_name$0];
    }
  };
  (src__cupertino__action_sheet._AlertSections.new = function(index, _name) {
    this.index = index;
    this[_name$0] = _name;
    ;
  }).prototype = src__cupertino__action_sheet._AlertSections.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._AlertSections);
  dart.setLibraryUri(src__cupertino__action_sheet._AlertSections, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._AlertSections, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._AlertSections.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$0]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(src__cupertino__action_sheet._AlertSections, ['toString']);
  src__cupertino__action_sheet._AlertSections.contentSection = C516 || CT.C516;
  src__cupertino__action_sheet._AlertSections.actionsSection = C517 || CT.C517;
  src__cupertino__action_sheet._AlertSections.values = C518 || CT.C518;
  let C519;
  let C522;
  let C523;
  let C524;
  let C521;
  let C520;
  let C527;
  let C528;
  let C526;
  let C525;
  let C531;
  let C532;
  let C533;
  let C530;
  let C529;
  let C536;
  let C537;
  let C535;
  let C534;
  let C540;
  let C541;
  let C539;
  let C538;
  let C544;
  let C545;
  let C543;
  let C542;
  let C547;
  let C546;
  let C550;
  let C551;
  let C552;
  let C549;
  let C548;
  let C555;
  let C556;
  let C554;
  let C553;
  let C559;
  let C558;
  let C557;
  src__cupertino__action_sheet._CupertinoAlertContentSection = class _CupertinoAlertContentSection extends src__widgets__framework.StatelessWidget {
    build(context) {
      let titleContentGroup = JSArrayOfWidget().of([]);
      if (this.title != null) {
        titleContentGroup[$add](new src__widgets__basic.Padding.new({padding: C519 || CT.C519, child: new src__widgets__text.DefaultTextStyle.new({style: this.message == null ? src__cupertino__action_sheet._kActionSheetContentStyle : src__cupertino__action_sheet._kActionSheetContentStyle.copyWith({fontWeight: ui$.FontWeight.w600}), textAlign: ui$.TextAlign.center, child: this.title, $creationLocationd_0dea112b090073317d4: C520 || CT.C520}), $creationLocationd_0dea112b090073317d4: C525 || CT.C525}));
      }
      if (this.message != null) {
        titleContentGroup[$add](new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({left: 40, right: 40, bottom: this.title == null ? 14 : 22.0, top: this.title == null ? 14 : 0.0}), child: new src__widgets__text.DefaultTextStyle.new({style: this.title == null ? src__cupertino__action_sheet._kActionSheetContentStyle.copyWith({fontWeight: ui$.FontWeight.w600}) : src__cupertino__action_sheet._kActionSheetContentStyle, textAlign: ui$.TextAlign.center, child: this.message, $creationLocationd_0dea112b090073317d4: C529 || CT.C529}), $creationLocationd_0dea112b090073317d4: C534 || CT.C534}));
      }
      if (dart.test(titleContentGroup[$isEmpty])) {
        return new src__widgets__single_child_scroll_view.SingleChildScrollView.new({controller: this.scrollController, child: new src__widgets__container.Container.new({width: 0.0, height: 0.0, $creationLocationd_0dea112b090073317d4: C538 || CT.C538}), $creationLocationd_0dea112b090073317d4: C542 || CT.C542});
      }
      if (dart.notNull(titleContentGroup[$length]) > 1) {
        titleContentGroup[$insert](1, C546 || CT.C546);
      }
      return new src__cupertino__scrollbar.CupertinoScrollbar.new({child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({controller: this.scrollController, child: new src__widgets__basic.Column.new({mainAxisSize: src__rendering__flex.MainAxisSize.max, crossAxisAlignment: src__rendering__flex.CrossAxisAlignment.stretch, children: titleContentGroup, $creationLocationd_0dea112b090073317d4: C548 || CT.C548}), $creationLocationd_0dea112b090073317d4: C553 || CT.C553}), $creationLocationd_0dea112b090073317d4: C557 || CT.C557});
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertContentSection.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let title = opts && 'title' in opts ? opts.title : null;
    let message = opts && 'message' in opts ? opts.message : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.title = title;
    this.message = message;
    this.scrollController = scrollController;
    src__cupertino__action_sheet._CupertinoAlertContentSection.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertContentSection.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertContentSection);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertContentSection, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertContentSection.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertContentSection, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoAlertContentSection, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoAlertContentSection.__proto__),
    title: dart.finalFieldType(src__widgets__framework.Widget),
    message: dart.finalFieldType(src__widgets__framework.Widget),
    scrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController)
  }));
  src__cupertino__action_sheet._CupertinoAlertActionSection = class _CupertinoAlertActionSection extends src__widgets__framework.StatefulWidget {
    createState() {
      return new src__cupertino__action_sheet._CupertinoAlertActionSectionState.new();
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertActionSection.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let children = opts && 'children' in opts ? opts.children : null;
    let scrollController = opts && 'scrollController' in opts ? opts.scrollController : null;
    let hasCancelButton = opts && 'hasCancelButton' in opts ? opts.hasCancelButton : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.children = children;
    this.scrollController = scrollController;
    this.hasCancelButton = hasCancelButton;
    if (!(children != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 886, 16, "children != null");
    src__cupertino__action_sheet._CupertinoAlertActionSection.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertActionSection.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertActionSection);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertActionSection, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertActionSection.__proto__),
    createState: dart.fnType(src__cupertino__action_sheet._CupertinoAlertActionSectionState, [])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertActionSection, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoAlertActionSection, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoAlertActionSection.__proto__),
    children: dart.finalFieldType(core.List$(src__widgets__framework.Widget)),
    scrollController: dart.finalFieldType(src__widgets__scroll_controller.ScrollController),
    hasCancelButton: dart.finalFieldType(core.bool)
  }));
  let C562;
  let C561;
  let C560;
  let C565;
  let C566;
  let C567;
  let C564;
  let C563;
  let C570;
  let C571;
  let C569;
  let C568;
  let C574;
  let C573;
  let C572;
  src__cupertino__action_sheet._CupertinoAlertActionSectionState = class _CupertinoAlertActionSectionState extends src__widgets__framework.State$(src__cupertino__action_sheet._CupertinoAlertActionSection) {
    build(context) {
      let devicePixelRatio = src__widgets__media_query.MediaQuery.of(context).devicePixelRatio;
      let interactiveButtons = JSArrayOfWidget().of([]);
      for (let i = 0; i < dart.notNull(this.widget.children[$length]); i = i + 1) {
        interactiveButtons[$add](new src__cupertino__action_sheet._PressableActionButton.new({child: this.widget.children[$_get](i), $creationLocationd_0dea112b090073317d4: C560 || CT.C560}));
      }
      return new src__cupertino__scrollbar.CupertinoScrollbar.new({child: new src__widgets__single_child_scroll_view.SingleChildScrollView.new({controller: this.widget.scrollController, child: new src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.new({actionButtons: interactiveButtons, dividerThickness: 1 / dart.notNull(devicePixelRatio), hasCancelButton: this.widget.hasCancelButton, $creationLocationd_0dea112b090073317d4: C563 || CT.C563}), $creationLocationd_0dea112b090073317d4: C568 || CT.C568}), $creationLocationd_0dea112b090073317d4: C572 || CT.C572});
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertActionSectionState.new = function() {
    src__cupertino__action_sheet._CupertinoAlertActionSectionState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertActionSectionState.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertActionSectionState);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertActionSectionState, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertActionSectionState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertActionSectionState, "package:flutter_web/src/cupertino/action_sheet.dart");
  src__cupertino__action_sheet._PressableActionButton = class _PressableActionButton extends src__widgets__framework.StatefulWidget {
    createState() {
      return new src__cupertino__action_sheet._PressableActionButtonState.new();
    }
  };
  (src__cupertino__action_sheet._PressableActionButton.new = function(opts) {
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.child = child;
    src__cupertino__action_sheet._PressableActionButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._PressableActionButton.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._PressableActionButton);
  dart.setMethodSignature(src__cupertino__action_sheet._PressableActionButton, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._PressableActionButton.__proto__),
    createState: dart.fnType(src__cupertino__action_sheet._PressableActionButtonState, [])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._PressableActionButton, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._PressableActionButton, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._PressableActionButton.__proto__),
    child: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  const _isPressed = dart.privateName(src__cupertino__action_sheet, "_isPressed");
  let C577;
  let C578;
  let C579;
  let C580;
  let C581;
  let C582;
  let C576;
  let C575;
  let C585;
  let C586;
  let C584;
  let C583;
  src__cupertino__action_sheet._PressableActionButtonState = class _PressableActionButtonState extends src__widgets__framework.State$(src__cupertino__action_sheet._PressableActionButton) {
    build(context) {
      return new src__cupertino__action_sheet._ActionButtonParentDataWidget.new({isPressed: this[_isPressed], child: new src__widgets__gesture_detector.GestureDetector.new({excludeFromSemantics: true, behavior: src__rendering__proxy_box.HitTestBehavior.opaque, onTapDown: dart.fn(details => this.setState(dart.fn(() => this[_isPressed] = true, VoidTobool())), TapDownDetailsTovoid()), onTapUp: dart.fn(details => this.setState(dart.fn(() => this[_isPressed] = false, VoidTobool())), TapUpDetailsTovoid()), onTapCancel: dart.fn(() => this.setState(dart.fn(() => this[_isPressed] = false, VoidTobool())), VoidTovoid()), child: this.widget.child, $creationLocationd_0dea112b090073317d4: C575 || CT.C575}), $creationLocationd_0dea112b090073317d4: C583 || CT.C583});
    }
  };
  (src__cupertino__action_sheet._PressableActionButtonState.new = function() {
    this[_isPressed] = false;
    src__cupertino__action_sheet._PressableActionButtonState.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__action_sheet._PressableActionButtonState.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._PressableActionButtonState);
  dart.setMethodSignature(src__cupertino__action_sheet._PressableActionButtonState, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._PressableActionButtonState.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._PressableActionButtonState, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._PressableActionButtonState, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._PressableActionButtonState.__proto__),
    [_isPressed]: dart.fieldType(core.bool)
  }));
  const _hasCancelButton = dart.privateName(src__cupertino__action_sheet, "_hasCancelButton");
  src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget = class _CupertinoAlertActionsRenderWidget extends src__widgets__framework.MultiChildRenderObjectWidget {
    createRenderObject(context) {
      return new src__cupertino__action_sheet._RenderCupertinoAlertActions.new({dividerThickness: this[_dividerThickness], hasCancelButton: this[_hasCancelButton]});
    }
    updateRenderObject(context, renderObject) {
      src__cupertino__action_sheet._RenderCupertinoAlertActions._check(renderObject);
      renderObject.dividerThickness = this[_dividerThickness];
      renderObject.hasCancelButton = this[_hasCancelButton];
    }
  };
  (src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let actionButtons = opts && 'actionButtons' in opts ? opts.actionButtons : null;
    let dividerThickness = opts && 'dividerThickness' in opts ? opts.dividerThickness : 0;
    let hasCancelButton = opts && 'hasCancelButton' in opts ? opts.hasCancelButton : false;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_dividerThickness] = dividerThickness;
    this[_hasCancelButton] = hasCancelButton;
    src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.__proto__.new.call(this, {key: key, children: actionButtons, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget);
  dart.setMethodSignature(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.__proto__),
    createRenderObject: dart.fnType(src__rendering__object.RenderObject, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget.__proto__),
    [_dividerThickness]: dart.finalFieldType(core.double),
    [_hasCancelButton]: dart.finalFieldType(core.bool)
  }));
  src__cupertino__action_sheet._ActionButtonParentDataWidget = class _ActionButtonParentDataWidget extends src__widgets__framework.ParentDataWidget$(src__cupertino__action_sheet._CupertinoAlertActionsRenderWidget) {
    applyParentData(renderObject) {
      if (!src__cupertino__action_sheet._ActionButtonParentData.is(renderObject.parentData)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 990, 12, "renderObject.parentData is _ActionButtonParentData");
      let parentData = src__cupertino__action_sheet._ActionButtonParentData._check(renderObject.parentData);
      if (!dart.equals(parentData.isPressed, this.isPressed)) {
        parentData.isPressed = this.isPressed;
        let targetParent = renderObject.parent;
        if (src__rendering__object.RenderObject.is(targetParent)) targetParent.markNeedsPaint();
      }
    }
  };
  (src__cupertino__action_sheet._ActionButtonParentDataWidget.new = function(opts) {
    let key = opts && 'key' in opts ? opts.key : null;
    let isPressed = opts && 'isPressed' in opts ? opts.isPressed : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this.isPressed = isPressed;
    src__cupertino__action_sheet._ActionButtonParentDataWidget.__proto__.new.call(this, {key: key, child: child, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__action_sheet._ActionButtonParentDataWidget.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._ActionButtonParentDataWidget);
  dart.setMethodSignature(src__cupertino__action_sheet._ActionButtonParentDataWidget, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._ActionButtonParentDataWidget.__proto__),
    applyParentData: dart.fnType(dart.void, [src__rendering__object.RenderObject])
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._ActionButtonParentDataWidget, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._ActionButtonParentDataWidget, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._ActionButtonParentDataWidget.__proto__),
    isPressed: dart.finalFieldType(core.bool)
  }));
  src__cupertino__action_sheet._ActionButtonParentData = class _ActionButtonParentData extends src__rendering__custom_layout.MultiChildLayoutParentData {};
  (src__cupertino__action_sheet._ActionButtonParentData.new = function(opts) {
    let isPressed = opts && 'isPressed' in opts ? opts.isPressed : false;
    this.isPressed = isPressed;
    src__cupertino__action_sheet._ActionButtonParentData.__proto__.new.call(this);
    ;
  }).prototype = src__cupertino__action_sheet._ActionButtonParentData.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._ActionButtonParentData);
  dart.setLibraryUri(src__cupertino__action_sheet._ActionButtonParentData, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._ActionButtonParentData, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._ActionButtonParentData.__proto__),
    isPressed: dart.fieldType(core.bool)
  }));
  const _buttonBackgroundPaint = dart.privateName(src__cupertino__action_sheet, "_buttonBackgroundPaint");
  const _pressedButtonBackgroundPaint = dart.privateName(src__cupertino__action_sheet, "_pressedButtonBackgroundPaint");
  const _computeMinIntrinsicHeightWithCancel = dart.privateName(src__cupertino__action_sheet, "_computeMinIntrinsicHeightWithCancel");
  const _computeMinIntrinsicHeightWithoutCancel = dart.privateName(src__cupertino__action_sheet, "_computeMinIntrinsicHeightWithoutCancel");
  const _computeMaxIntrinsicHeightStacked = dart.privateName(src__cupertino__action_sheet, "_computeMaxIntrinsicHeightStacked");
  const _drawButtonBackgroundsAndDividersStacked = dart.privateName(src__cupertino__action_sheet, "_drawButtonBackgroundsAndDividersStacked");
  const _drawButtons = dart.privateName(src__cupertino__action_sheet, "_drawButtons");
  const RenderBox_ContainerRenderObjectMixin$ = class RenderBox_ContainerRenderObjectMixin extends src__rendering__box.RenderBox {};
  (RenderBox_ContainerRenderObjectMixin$.new = function() {
    src__rendering__object.ContainerRenderObjectMixin$(src__rendering__box.RenderBox, src__rendering__custom_layout.MultiChildLayoutParentData)[dart.mixinNew].call(this);
    RenderBox_ContainerRenderObjectMixin$.__proto__.new.call(this);
  }).prototype = RenderBox_ContainerRenderObjectMixin$.prototype;
  dart.applyMixin(RenderBox_ContainerRenderObjectMixin$, src__rendering__object.ContainerRenderObjectMixin$(src__rendering__box.RenderBox, src__rendering__custom_layout.MultiChildLayoutParentData));
  const RenderBox_RenderBoxContainerDefaultsMixin$ = class RenderBox_RenderBoxContainerDefaultsMixin extends RenderBox_ContainerRenderObjectMixin$ {};
  (RenderBox_RenderBoxContainerDefaultsMixin$.new = function() {
    RenderBox_RenderBoxContainerDefaultsMixin$.__proto__.new.call(this);
  }).prototype = RenderBox_RenderBoxContainerDefaultsMixin$.prototype;
  dart.applyMixin(RenderBox_RenderBoxContainerDefaultsMixin$, src__rendering__box.RenderBoxContainerDefaultsMixin$(src__rendering__box.RenderBox, src__rendering__custom_layout.MultiChildLayoutParentData));
  src__cupertino__action_sheet._RenderCupertinoAlertActions = class _RenderCupertinoAlertActions extends RenderBox_RenderBoxContainerDefaultsMixin$ {
    get dividerThickness() {
      return this[_dividerThickness];
    }
    set dividerThickness(newValue) {
      if (newValue == this[_dividerThickness]) {
        return;
      }
      this[_dividerThickness] = newValue;
      this.markNeedsLayout();
    }
    get hasCancelButton() {
      return this[_hasCancelButton];
    }
    set hasCancelButton(newValue) {
      if (dart.equals(newValue, this[_hasCancelButton])) {
        return;
      }
      this[_hasCancelButton] = newValue;
      this.markNeedsLayout();
    }
    setupParentData(child) {
      src__rendering__box.RenderBox._check(child);
      if (!src__cupertino__action_sheet._ActionButtonParentData.is(child.parentData)) child.parentData = new src__cupertino__action_sheet._ActionButtonParentData.new();
    }
    computeMinIntrinsicWidth(height) {
      return this.constraints.minWidth;
    }
    computeMaxIntrinsicWidth(height) {
      return this.constraints.maxWidth;
    }
    computeMinIntrinsicHeight(width) {
      if (this.childCount === 0) return 0.0;
      if (this.childCount === 1) return dart.notNull(this.firstChild.computeMaxIntrinsicHeight(width)) + dart.notNull(this.dividerThickness);
      if (dart.test(this.hasCancelButton) && dart.notNull(this.childCount) < 4) return this[_computeMinIntrinsicHeightWithCancel](width);
      return this[_computeMinIntrinsicHeightWithoutCancel](width);
    }
    [_computeMinIntrinsicHeightWithCancel](width) {
      if (!(this.childCount === 2 || this.childCount === 3)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1139, 12, "childCount == 2 || childCount == 3");
      if (this.childCount === 2) {
        return dart.notNull(this.firstChild.getMinIntrinsicHeight(width)) + dart.notNull(this.childAfter(this.firstChild).getMinIntrinsicHeight(width)) + dart.notNull(this.dividerThickness);
      }
      return dart.notNull(this.firstChild.getMinIntrinsicHeight(width)) + dart.notNull(this.childAfter(this.firstChild).getMinIntrinsicHeight(width)) + dart.notNull(this.childAfter(this.childAfter(this.firstChild)).getMinIntrinsicHeight(width)) + dart.notNull(this.dividerThickness) * 2;
    }
    [_computeMinIntrinsicHeightWithoutCancel](width) {
      if (!(dart.notNull(this.childCount) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1155, 12, "childCount >= 2");
      return dart.notNull(this.firstChild.getMinIntrinsicHeight(width)) + dart.notNull(this.dividerThickness) + 0.5 * dart.notNull(this.childAfter(this.firstChild).getMinIntrinsicHeight(width));
    }
    computeMaxIntrinsicHeight(width) {
      if (this.childCount === 0) return 0.0;
      if (this.childCount === 1) return dart.notNull(this.firstChild.computeMaxIntrinsicHeight(width)) + dart.notNull(this.dividerThickness);
      return this[_computeMaxIntrinsicHeightStacked](width);
    }
    [_computeMaxIntrinsicHeightStacked](width) {
      if (!(dart.notNull(this.childCount) >= 2)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1172, 12, "childCount >= 2");
      let allDividersHeight = (dart.notNull(this.childCount) - 1) * dart.notNull(this.dividerThickness);
      let heightAccumulation = allDividersHeight;
      let button = this.firstChild;
      while (button != null) {
        heightAccumulation = heightAccumulation + dart.notNull(button.getMaxIntrinsicHeight(width));
        button = this.childAfter(button);
      }
      return heightAccumulation;
    }
    performLayout() {
      let perButtonConstraints = this.constraints.copyWith({minHeight: 0.0, maxHeight: 1 / 0});
      let child = this.firstChild;
      let index = 0;
      let verticalOffset = 0.0;
      while (child != null) {
        child.layout(perButtonConstraints, {parentUsesSize: true});
        if (!src__rendering__custom_layout.MultiChildLayoutParentData.is(child.parentData)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1200, 14, "child.parentData is MultiChildLayoutParentData");
        let parentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(child.parentData);
        parentData.offset = new ui$.Offset.new(0.0, verticalOffset);
        verticalOffset = verticalOffset + dart.notNull(child.size.height);
        if (index < dart.notNull(this.childCount) - 1) {
          verticalOffset = verticalOffset + dart.notNull(this.dividerThickness);
        }
        index = index + 1;
        child = this.childAfter(child);
      }
      this.size = this.constraints.constrain(new ui$.Size.new(this.constraints.maxWidth, verticalOffset));
    }
    paint(context, offset) {
      let canvas = context.canvas;
      this[_drawButtonBackgroundsAndDividersStacked](canvas, offset);
      this[_drawButtons](context, offset);
    }
    [_drawButtonBackgroundsAndDividersStacked](canvas, offset) {
      let t0;
      let dividerOffset = new ui$.Offset.new(0.0, this.dividerThickness);
      let backgroundFillPath = (t0 = ui$.Path.new(), t0.fillType = ui$.PathFillType.evenOdd, t0.addRect(new ui$.Rect.fromLTWH(0.0, 0.0, this.size.width, this.size.height)), t0);
      let pressedBackgroundFillPath = ui$.Path.new();
      let dividersPath = ui$.Path.new();
      let accumulatingOffset = offset;
      let child = this.firstChild;
      let prevChild = null;
      while (child != null) {
        if (!src__cupertino__action_sheet._ActionButtonParentData.is(child.parentData)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1240, 14, "child.parentData is _ActionButtonParentData");
        let currentButtonParentData = src__cupertino__action_sheet._ActionButtonParentData._check(child.parentData);
        let isButtonPressed = currentButtonParentData.isPressed;
        let isPrevButtonPressed = false;
        if (prevChild != null) {
          if (!src__cupertino__action_sheet._ActionButtonParentData.is(prevChild.parentData)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/action_sheet.dart", 1246, 16, "prevChild.parentData is _ActionButtonParentData");
          let previousButtonParentData = src__cupertino__action_sheet._ActionButtonParentData._check(prevChild.parentData);
          isPrevButtonPressed = previousButtonParentData.isPressed;
        }
        let isDividerPresent = !dart.equals(child, this.firstChild);
        let isDividerPainted = isDividerPresent && !(dart.test(isButtonPressed) || dart.test(isPrevButtonPressed));
        let dividerRect = new ui$.Rect.fromLTWH(accumulatingOffset.dx, accumulatingOffset.dy, this.size.width, this[_dividerThickness]);
        let buttonBackgroundRect = new ui$.Rect.fromLTWH(accumulatingOffset.dx, dart.notNull(accumulatingOffset.dy) + dart.notNull(isDividerPresent ? this.dividerThickness : 0.0), this.size.width, child.size.height);
        if (dart.test(isButtonPressed)) {
          backgroundFillPath.addRect(buttonBackgroundRect);
          pressedBackgroundFillPath.addRect(buttonBackgroundRect);
        }
        if (isDividerPainted) {
          backgroundFillPath.addRect(dividerRect);
          dividersPath.addRect(dividerRect);
        }
        accumulatingOffset = accumulatingOffset['+']((isDividerPresent ? dividerOffset : ui$.Offset.zero)['+'](new ui$.Offset.new(0.0, child.size.height)));
        prevChild = child;
        child = this.childAfter(child);
      }
      canvas.drawPath(backgroundFillPath, this[_buttonBackgroundPaint]);
      canvas.drawPath(pressedBackgroundFillPath, this[_pressedButtonBackgroundPaint]);
      canvas.drawPath(dividersPath, this[_dividerPaint]);
    }
    [_drawButtons](context, offset) {
      let child = this.firstChild;
      while (child != null) {
        let childParentData = src__rendering__custom_layout.MultiChildLayoutParentData._check(child.parentData);
        context.paintChild(child, childParentData.offset['+'](offset));
        child = this.childAfter(child);
      }
    }
    hitTestChildren(result, opts) {
      let position = opts && 'position' in opts ? opts.position : null;
      return this.defaultHitTestChildren(result, {position: position});
    }
  };
  (src__cupertino__action_sheet._RenderCupertinoAlertActions.new = function(opts) {
    let t0, t0$, t0$0;
    let children = opts && 'children' in opts ? opts.children : null;
    let dividerThickness = opts && 'dividerThickness' in opts ? opts.dividerThickness : 0;
    let hasCancelButton = opts && 'hasCancelButton' in opts ? opts.hasCancelButton : false;
    this[_buttonBackgroundPaint] = (t0 = new ui$.Paint.new(), t0.color = src__cupertino__action_sheet._kBackgroundColor, t0.style = ui$.PaintingStyle.fill, t0);
    this[_pressedButtonBackgroundPaint] = (t0$ = new ui$.Paint.new(), t0$.color = src__cupertino__action_sheet._kPressedColor, t0$.style = ui$.PaintingStyle.fill, t0$);
    this[_dividerPaint] = (t0$0 = new ui$.Paint.new(), t0$0.color = src__cupertino__action_sheet._kButtonDividerColor, t0$0.style = ui$.PaintingStyle.fill, t0$0);
    this[_dividerThickness] = dividerThickness;
    this[_hasCancelButton] = hasCancelButton;
    src__cupertino__action_sheet._RenderCupertinoAlertActions.__proto__.new.call(this);
    this.addAll(children);
  }).prototype = src__cupertino__action_sheet._RenderCupertinoAlertActions.prototype;
  dart.addTypeTests(src__cupertino__action_sheet._RenderCupertinoAlertActions);
  dart.setMethodSignature(src__cupertino__action_sheet._RenderCupertinoAlertActions, () => ({
    __proto__: dart.getMethods(src__cupertino__action_sheet._RenderCupertinoAlertActions.__proto__),
    [_computeMinIntrinsicHeightWithCancel]: dart.fnType(core.double, [core.double]),
    [_computeMinIntrinsicHeightWithoutCancel]: dart.fnType(core.double, [core.double]),
    [_computeMaxIntrinsicHeightStacked]: dart.fnType(core.double, [core.double]),
    [_drawButtonBackgroundsAndDividersStacked]: dart.fnType(dart.void, [ui$.Canvas, ui$.Offset]),
    [_drawButtons]: dart.fnType(dart.void, [src__rendering__object.PaintingContext, ui$.Offset])
  }));
  dart.setGetterSignature(src__cupertino__action_sheet._RenderCupertinoAlertActions, () => ({
    __proto__: dart.getGetters(src__cupertino__action_sheet._RenderCupertinoAlertActions.__proto__),
    dividerThickness: core.double,
    hasCancelButton: core.bool
  }));
  dart.setSetterSignature(src__cupertino__action_sheet._RenderCupertinoAlertActions, () => ({
    __proto__: dart.getSetters(src__cupertino__action_sheet._RenderCupertinoAlertActions.__proto__),
    dividerThickness: core.double,
    hasCancelButton: core.bool
  }));
  dart.setLibraryUri(src__cupertino__action_sheet._RenderCupertinoAlertActions, "package:flutter_web/src/cupertino/action_sheet.dart");
  dart.setFieldSignature(src__cupertino__action_sheet._RenderCupertinoAlertActions, () => ({
    __proto__: dart.getFields(src__cupertino__action_sheet._RenderCupertinoAlertActions.__proto__),
    [_dividerThickness]: dart.fieldType(core.double),
    [_hasCancelButton]: dart.fieldType(core.bool),
    [_buttonBackgroundPaint]: dart.finalFieldType(ui$.Paint),
    [_pressedButtonBackgroundPaint]: dart.finalFieldType(ui$.Paint),
    [_dividerPaint]: dart.finalFieldType(ui$.Paint)
  }));
  let C588;
  let C589;
  let C587;
  let C591;
  let C590;
  let C593;
  const _name$1 = dart.privateName(src__painting__box_border, "_name");
  let C594;
  let C592;
  let C595;
  let C596;
  let C597;
  let C598;
  dart.defineLazy(src__cupertino__action_sheet, {
    /*src__cupertino__action_sheet._kActionSheetActionStyle*/get _kActionSheetActionStyle() {
      return C587 || CT.C587;
    },
    /*src__cupertino__action_sheet._kActionSheetContentStyle*/get _kActionSheetContentStyle() {
      return C590 || CT.C590;
    },
    /*src__cupertino__action_sheet._kAlertBlurOverlayDecoration*/get _kAlertBlurOverlayDecoration() {
      return C592 || CT.C592;
    },
    /*src__cupertino__action_sheet._kBackgroundColor*/get _kBackgroundColor() {
      return C595 || CT.C595;
    },
    /*src__cupertino__action_sheet._kPressedColor*/get _kPressedColor() {
      return C596 || CT.C596;
    },
    /*src__cupertino__action_sheet._kButtonDividerColor*/get _kButtonDividerColor() {
      return C597 || CT.C597;
    },
    /*src__cupertino__action_sheet._kContentTextColor*/get _kContentTextColor() {
      return C591 || CT.C591;
    },
    /*src__cupertino__action_sheet._kCancelButtonPressedColor*/get _kCancelButtonPressedColor() {
      return C598 || CT.C598;
    },
    /*src__cupertino__action_sheet._kBlurAmount*/get _kBlurAmount() {
      return 20;
    },
    /*src__cupertino__action_sheet._kEdgeHorizontalPadding*/get _kEdgeHorizontalPadding() {
      return 8;
    },
    /*src__cupertino__action_sheet._kCancelButtonPadding*/get _kCancelButtonPadding() {
      return 8;
    },
    /*src__cupertino__action_sheet._kEdgeVerticalPadding*/get _kEdgeVerticalPadding() {
      return 10;
    },
    /*src__cupertino__action_sheet._kContentHorizontalPadding*/get _kContentHorizontalPadding() {
      return 40;
    },
    /*src__cupertino__action_sheet._kContentVerticalPadding*/get _kContentVerticalPadding() {
      return 14;
    },
    /*src__cupertino__action_sheet._kButtonHeight*/get _kButtonHeight() {
      return 56;
    },
    /*src__cupertino__action_sheet._kCornerRadius*/get _kCornerRadius() {
      return 14;
    },
    /*src__cupertino__action_sheet._kDividerThickness*/get _kDividerThickness() {
      return 1;
    }
  });
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
  dart.setLibraryUri(src__cupertino__nav_bar._HeroTag, "package:flutter_web/src/cupertino/nav_bar.dart");
  dart.setFieldSignature(src__cupertino__nav_bar._HeroTag, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._HeroTag.__proto__),
    navigator: dart.finalFieldType(src__widgets__navigator.NavigatorState)
  }));
  dart.defineExtensionMethods(src__cupertino__nav_bar._HeroTag, ['toString', '_equals']);
  dart.defineExtensionAccessors(src__cupertino__nav_bar._HeroTag, ['hashCode']);
  const _name$2 = dart.privateName(src__painting__borders, "_name");
  let C601;
  let C600;
  let C603;
  let C604;
  let C602;
  let C599;
  let C605;
  let C606;
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
      return C606 || CT.C606;
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
    let border = opts && 'border' in opts ? opts.border : C599 || CT.C599;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C95 || CT.C95;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : C24 || CT.C24;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : C605 || CT.C605;
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
    if (!(automaticallyImplyLeading != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 215, 16, "automaticallyImplyLeading != null");
    if (!(automaticallyImplyMiddle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 216, 16, "automaticallyImplyMiddle != null");
    if (!(transitionBetweenRoutes != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 217, 16, "transitionBetweenRoutes != null");
    if (!(heroTag != null)) dart.assertFailed("heroTag cannot be null. Use transitionBetweenRoutes = false to " + "disable Hero transition on this navigation bar.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 219, 13, "heroTag != null");
    if (!(!dart.test(transitionBetweenRoutes) || core.identical(heroTag, src__cupertino__nav_bar._defaultHeroTag))) dart.assertFailed("Cannot specify a heroTag override if this navigation bar does not " + "transition due to transitionBetweenRoutes = false.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 223, 13, "!transitionBetweenRoutes || identical(heroTag, _defaultHeroTag)");
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
  dart.setLibraryUri(src__cupertino__nav_bar.CupertinoNavigationBar, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C609;
  let C610;
  let C608;
  let C607;
  let C613;
  let C614;
  let C615;
  let C616;
  let C617;
  let C618;
  let C619;
  let C612;
  let C611;
  let C622;
  let C623;
  let C624;
  let C625;
  let C626;
  let C627;
  let C621;
  let C620;
  src__cupertino__nav_bar._CupertinoNavigationBarState = class _CupertinoNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyMiddle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, userLargeTitle: null, large: false});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.widget.border, backgroundColor: this.widget.backgroundColor, child: new src__cupertino__nav_bar._PersistentNavigationBar.new({components: components, padding: this.widget.padding, $creationLocationd_0dea112b090073317d4: C607 || CT.C607})});
      if (!dart.test(this.widget.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.widget.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.widget.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.widget.backgroundColor, actionsForegroundColor: this.widget.actionsForegroundColor, border: this.widget.border, hasUserMiddle: this.widget.middle != null, largeExpanded: false, child: navBar, $creationLocationd_0dea112b090073317d4: C611 || CT.C611}), $creationLocationd_0dea112b090073317d4: C620 || CT.C620});
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
  dart.setLibraryUri(src__cupertino__nav_bar._CupertinoNavigationBarState, "package:flutter_web/src/cupertino/nav_bar.dart");
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
    let border = opts && 'border' in opts ? opts.border : C599 || CT.C599;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : C95 || CT.C95;
    let padding = opts && 'padding' in opts ? opts.padding : null;
    let actionsForegroundColor = opts && 'actionsForegroundColor' in opts ? opts.actionsForegroundColor : C24 || CT.C24;
    let transitionBetweenRoutes = opts && 'transitionBetweenRoutes' in opts ? opts.transitionBetweenRoutes : true;
    let heroTag = opts && 'heroTag' in opts ? opts.heroTag : C605 || CT.C605;
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
    if (!(automaticallyImplyLeading != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 510, 16, "automaticallyImplyLeading != null");
    if (!(automaticallyImplyTitle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 511, 16, "automaticallyImplyTitle != null");
    if (!(dart.equals(automaticallyImplyTitle, true) || largeTitle != null)) dart.assertFailed("No largeTitle has been provided but automaticallyImplyTitle is also " + "false. Either provide a largeTitle or set automaticallyImplyTitle to " + "true.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 513, 13, "automaticallyImplyTitle == true || largeTitle != null");
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
  dart.setLibraryUri(src__cupertino__nav_bar.CupertinoSliverNavigationBar, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C630;
  let C631;
  let C629;
  let C628;
  src__cupertino__nav_bar._CupertinoSliverNavigationBarState = class _CupertinoSliverNavigationBarState extends src__widgets__framework.State$(src__cupertino__nav_bar.CupertinoSliverNavigationBar) {
    initState() {
      super.initState();
      this.keys = new src__cupertino__nav_bar._NavigationBarStaticComponentsKeys.new();
    }
    build(context) {
      let components = new src__cupertino__nav_bar._NavigationBarStaticComponents.new({keys: this.keys, route: src__widgets__routes.ModalRoute.of(core.Object, context), userLeading: this.widget.leading, automaticallyImplyLeading: this.widget.automaticallyImplyLeading, automaticallyImplyTitle: this.widget.automaticallyImplyTitle, previousPageTitle: this.widget.previousPageTitle, userMiddle: this.widget.middle, userTrailing: this.widget.trailing, userLargeTitle: this.widget.largeTitle, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, large: true});
      return new src__widgets__sliver_persistent_header.SliverPersistentHeader.new({pinned: true, delegate: new src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate.new({keys: this.keys, components: components, userMiddle: this.widget.middle, backgroundColor: this.widget.backgroundColor, border: this.widget.border, padding: this.widget.padding, actionsForegroundColor: this.widget.actionsForegroundColor, transitionBetweenRoutes: this.widget.transitionBetweenRoutes, heroTag: this.widget.heroTag, persistentHeight: 44 + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), alwaysShowMiddle: this.widget.middle != null}), $creationLocationd_0dea112b090073317d4: C628 || CT.C628});
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
  dart.setLibraryUri(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, "package:flutter_web/src/cupertino/nav_bar.dart");
  dart.setFieldSignature(src__cupertino__nav_bar._CupertinoSliverNavigationBarState, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._CupertinoSliverNavigationBarState.__proto__),
    keys: dart.fieldType(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys)
  }));
  let C634;
  let C635;
  let C636;
  let C633;
  let C632;
  const _start = dart.privateName(src__painting__edge_insets, "_start");
  const _end = dart.privateName(src__painting__edge_insets, "_end");
  let C637;
  let C640;
  let C641;
  let C642;
  let C643;
  let C639;
  let C638;
  let C646;
  let C647;
  let C645;
  let C644;
  let C650;
  let C651;
  let C652;
  let C649;
  let C648;
  let C655;
  let C656;
  let C657;
  let C654;
  let C653;
  let C660;
  let C661;
  let C659;
  let C658;
  let C664;
  let C665;
  let C666;
  let C667;
  let C663;
  let C662;
  let C670;
  let C669;
  let C668;
  let C673;
  let C674;
  let C675;
  let C676;
  let C677;
  let C672;
  let C671;
  let C680;
  let C681;
  let C682;
  let C683;
  let C679;
  let C678;
  let C686;
  let C687;
  let C685;
  let C684;
  let C690;
  let C691;
  let C692;
  let C693;
  let C694;
  let C695;
  let C696;
  let C689;
  let C688;
  let C699;
  let C700;
  let C701;
  let C702;
  let C703;
  let C704;
  let C698;
  let C697;
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
      return dart.notNull(this.persistentHeight) + 52;
    }
    build(context, shrinkOffset, overlapsContent) {
      let showLargeTitle = dart.notNull(shrinkOffset) < dart.notNull(this.maxExtent) - dart.notNull(this.minExtent) - 10;
      let persistentNavigationBar = new src__cupertino__nav_bar._PersistentNavigationBar.new({components: this.components, padding: this.padding, middleVisible: dart.test(this.alwaysShowMiddle) ? null : !showLargeTitle, $creationLocationd_0dea112b090073317d4: C632 || CT.C632});
      let navBar = src__cupertino__nav_bar._wrapWithBackground({border: this.border, backgroundColor: this.backgroundColor, child: new src__widgets__basic.Stack.new({fit: src__rendering__stack.StackFit.expand, children: JSArrayOfWidget().of([new src__widgets__basic.Positioned.new({top: this.persistentHeight, left: 0.0, right: 0.0, bottom: 0.0, child: new src__widgets__basic.ClipRect.new({child: new src__widgets__basic.OverflowBox.new({minHeight: 0.0, maxHeight: 1 / 0, alignment: src__painting__alignment.AlignmentDirectional.bottomStart, child: new src__widgets__basic.Padding.new({padding: C637 || CT.C637, child: new src__widgets__safe_area.SafeArea.new({top: false, bottom: false, child: new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: showLargeTitle ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: new src__widgets__basic.Semantics.new({header: true, child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: this.components.largeTitle, $creationLocationd_0dea112b090073317d4: C638 || CT.C638}), $creationLocationd_0dea112b090073317d4: C644 || CT.C644}), $creationLocationd_0dea112b090073317d4: C648 || CT.C648}), $creationLocationd_0dea112b090073317d4: C653 || CT.C653}), $creationLocationd_0dea112b090073317d4: C658 || CT.C658}), $creationLocationd_0dea112b090073317d4: C662 || CT.C662}), $creationLocationd_0dea112b090073317d4: C668 || CT.C668}), $creationLocationd_0dea112b090073317d4: C671 || CT.C671}), new src__widgets__basic.Positioned.new({left: 0.0, right: 0.0, top: 0.0, child: persistentNavigationBar, $creationLocationd_0dea112b090073317d4: C678 || CT.C678})]), $creationLocationd_0dea112b090073317d4: C684 || CT.C684})});
      if (!dart.test(this.transitionBetweenRoutes) || !dart.test(src__cupertino__nav_bar._isTransitionable(context))) {
        return navBar;
      }
      return new src__widgets__heroes.Hero.new({tag: dart.equals(this.heroTag, src__cupertino__nav_bar._defaultHeroTag) ? new src__cupertino__nav_bar._HeroTag.new(src__widgets__navigator.Navigator.of(context)) : this.heroTag, createRectTween: src__cupertino__nav_bar._linearTranslateWithLargestRectSizeTween, flightShuttleBuilder: src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder, placeholderBuilder: src__cupertino__nav_bar._navBarHeroLaunchPadBuilder, transitionOnUserGestures: true, child: new src__cupertino__nav_bar._TransitionableNavigationBar.new({componentsKeys: this.keys, backgroundColor: this.backgroundColor, actionsForegroundColor: this.actionsForegroundColor, border: this.border, hasUserMiddle: this.userMiddle != null, largeExpanded: showLargeTitle, child: navBar, $creationLocationd_0dea112b090073317d4: C688 || CT.C688}), $creationLocationd_0dea112b090073317d4: C697 || CT.C697});
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
    if (!(persistentHeight != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 670, 16, "persistentHeight != null");
    if (!(alwaysShowMiddle != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 671, 16, "alwaysShowMiddle != null");
    if (!(transitionBetweenRoutes != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 672, 16, "transitionBetweenRoutes != null");
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
  dart.setLibraryUri(src__cupertino__nav_bar._LargeTitleNavigationBarSliverDelegate, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C707;
  let C708;
  let C706;
  let C705;
  let C711;
  let C712;
  let C710;
  let C709;
  let C715;
  let C716;
  let C717;
  let C714;
  let C713;
  let C720;
  let C721;
  let C722;
  let C719;
  let C718;
  let C725;
  let C726;
  let C727;
  let C728;
  let C729;
  let C724;
  let C723;
  let C732;
  let C733;
  let C731;
  let C730;
  let C736;
  let C737;
  let C735;
  let C734;
  let C740;
  let C741;
  let C739;
  let C738;
  src__cupertino__nav_bar._PersistentNavigationBar = class _PersistentNavigationBar extends src__widgets__framework.StatelessWidget {
    build(context) {
      let middle = this.components.middle;
      if (middle != null) {
        middle = new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: new src__widgets__basic.Semantics.new({header: true, child: middle, $creationLocationd_0dea112b090073317d4: C705 || CT.C705}), $creationLocationd_0dea112b090073317d4: C709 || CT.C709});
        middle = this.middleVisible == null ? middle : new src__widgets__implicit_animations.AnimatedOpacity.new({opacity: dart.test(this.middleVisible) ? 1.0 : 0.0, duration: src__cupertino__nav_bar._kNavBarTitleFadeDuration, child: middle, $creationLocationd_0dea112b090073317d4: C713 || CT.C713});
      }
      let leading = this.components.leading;
      let backChevron = this.components.backChevron;
      let backLabel = this.components.backLabel;
      if (leading == null && backChevron != null && backLabel != null) {
        leading = new src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble(backChevron, backLabel, this.components.actionsForegroundColor, {$creationLocationd_0dea112b090073317d4: C718 || CT.C718});
      }
      let paddedToolbar = new src__widgets__navigation_toolbar.NavigationToolbar.new({leading: leading, middle: middle, trailing: this.components.trailing, centerMiddle: true, middleSpacing: 6.0, $creationLocationd_0dea112b090073317d4: C723 || CT.C723});
      if (this.padding != null) {
        paddedToolbar = new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsets.only({top: this.padding.top, bottom: this.padding.bottom}), child: paddedToolbar, $creationLocationd_0dea112b090073317d4: C730 || CT.C730});
      }
      return new src__widgets__basic.SizedBox.new({height: 44 + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), child: new src__widgets__safe_area.SafeArea.new({bottom: false, child: paddedToolbar, $creationLocationd_0dea112b090073317d4: C734 || CT.C734}), $creationLocationd_0dea112b090073317d4: C738 || CT.C738});
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
  dart.setLibraryUri(src__cupertino__nav_bar._PersistentNavigationBar, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  dart.setLibraryUri(src__cupertino__nav_bar._NavigationBarStaticComponentsKeys, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C744;
  let C743;
  let C742;
  let C745;
  let C748;
  let C749;
  let C750;
  let C747;
  let C746;
  let C753;
  let C754;
  let C752;
  let C751;
  let C757;
  let C758;
  let C756;
  let C755;
  let C761;
  let C762;
  let C760;
  let C759;
  let C763;
  let C766;
  let C767;
  let C765;
  let C764;
  let C770;
  let C771;
  let C769;
  let C768;
  let C774;
  let C775;
  let C773;
  let C772;
  let C778;
  let C779;
  let C777;
  let C776;
  let C782;
  let C783;
  let C781;
  let C780;
  let C786;
  let C787;
  let C785;
  let C784;
  let C790;
  let C791;
  let C789;
  let C788;
  let C794;
  let C795;
  let C793;
  let C792;
  src__cupertino__nav_bar._NavigationBarStaticComponents = class _NavigationBarStaticComponents extends core.Object {
    static _derivedTitle(opts) {
      let automaticallyImplyTitle = opts && 'automaticallyImplyTitle' in opts ? opts.automaticallyImplyTitle : null;
      let currentRoute = opts && 'currentRoute' in opts ? opts.currentRoute : null;
      if (dart.test(automaticallyImplyTitle) && src__cupertino__route.CupertinoPageRoute.is(currentRoute) && currentRoute.title != null) {
        return new src__widgets__text.Text.new(currentRoute.title, {$creationLocationd_0dea112b090073317d4: C742 || CT.C742});
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
        leadingContent = new src__cupertino__button.CupertinoButton.new({child: C745 || CT.C745, padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
            route.navigator.maybePop(core.Object);
          }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C746 || CT.C746});
      }
      if (leadingContent == null) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: leadingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({start: (t0$ = (t0 = padding, t0 == null ? null : t0.start), t0$ == null ? 16 : t0$)}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: leadingContent}), $creationLocationd_0dea112b090073317d4: C751 || CT.C751}), $creationLocationd_0dea112b090073317d4: C755 || CT.C755}), $creationLocationd_0dea112b090073317d4: C759 || CT.C759});
    }
    static createBackChevron(opts) {
      let backChevronKey = opts && 'backChevronKey' in opts ? opts.backChevronKey : null;
      let userLeading = opts && 'userLeading' in opts ? opts.userLeading : null;
      let route = opts && 'route' in opts ? opts.route : null;
      let automaticallyImplyLeading = opts && 'automaticallyImplyLeading' in opts ? opts.automaticallyImplyLeading : null;
      if (userLeading != null || !dart.test(automaticallyImplyLeading) || route == null || !dart.test(route.canPop) || src__widgets__pages.PageRoute.is(route) && dart.test(route.fullscreenDialog)) {
        return null;
      }
      return new src__widgets__basic.KeyedSubtree.new({key: backChevronKey, child: C763 || CT.C763, $creationLocationd_0dea112b090073317d4: C764 || CT.C764});
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
      return new src__widgets__basic.KeyedSubtree.new({key: backLabelKey, child: new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: previousPageTitle, route: route, $creationLocationd_0dea112b090073317d4: C768 || CT.C768}), $creationLocationd_0dea112b090073317d4: C772 || CT.C772});
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
      return new src__widgets__basic.KeyedSubtree.new({key: middleKey, child: middleContent, $creationLocationd_0dea112b090073317d4: C776 || CT.C776});
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
      return new src__widgets__basic.KeyedSubtree.new({key: trailingKey, child: new src__widgets__basic.Padding.new({padding: new src__painting__edge_insets.EdgeInsetsDirectional.only({end: (t0$ = (t0 = padding, t0 == null ? null : t0.end), t0$ == null ? 16 : t0$)}), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(actionsForegroundColor), child: src__widgets__icon_theme.IconTheme.merge({data: new src__widgets__icon_theme_data.IconThemeData.new({color: actionsForegroundColor, size: 32.0}), child: userTrailing}), $creationLocationd_0dea112b090073317d4: C780 || CT.C780}), $creationLocationd_0dea112b090073317d4: C784 || CT.C784}), $creationLocationd_0dea112b090073317d4: C788 || CT.C788});
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
      if (!(largeTitleContent != null)) dart.assertFailed("largeTitle was not provided and there was no title from the route.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1167, 7, "largeTitleContent != null");
      return new src__widgets__basic.KeyedSubtree.new({key: largeTitleKey, child: largeTitleContent, $creationLocationd_0dea112b090073317d4: C792 || CT.C792});
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
  dart.setLibraryUri(src__cupertino__nav_bar._NavigationBarStaticComponents, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C796;
  let C798;
  let C797;
  let C800;
  let C799;
  let C803;
  let C804;
  let C802;
  let C801;
  let C807;
  let C806;
  let C805;
  let C810;
  let C811;
  let C812;
  let C809;
  let C808;
  let C815;
  let C816;
  let C814;
  let C813;
  let C819;
  let C820;
  let C818;
  let C817;
  let C823;
  let C824;
  let C825;
  let C826;
  let C827;
  let C822;
  let C821;
  let C830;
  let C831;
  let C832;
  let C829;
  let C828;
  src__cupertino__nav_bar.CupertinoNavigationBarBackButton = class CupertinoNavigationBarBackButton extends src__widgets__framework.StatelessWidget {
    get color() {
      return this[color$1];
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
      if (!dart.test(currentRoute.canPop)) dart.assertFailed("CupertinoNavigationBarBackButton should only be used in routes that can be popped", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1226, 7, "currentRoute.canPop");
      return new src__cupertino__button.CupertinoButton.new({child: new src__widgets__basic.Semantics.new({container: true, excludeSemantics: true, label: "Back", button: true, child: new src__widgets__basic.ConstrainedBox.new({constraints: C796 || CT.C796, child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._navBarItemStyle(this.color), child: new src__widgets__basic.Row.new({mainAxisSize: src__rendering__flex.MainAxisSize.min, mainAxisAlignment: src__rendering__flex.MainAxisAlignment.start, children: JSArrayOfWidget().of([C797 || CT.C797, (t0 = this[_backChevron$], t0 == null ? C763 || CT.C763 : t0), C799 || CT.C799, new src__widgets__basic.Flexible.new({child: (t0$ = this[_backLabel$], t0$ == null ? new src__cupertino__nav_bar._BackLabel.new({specifiedPreviousTitle: this.previousPageTitle, route: currentRoute, $creationLocationd_0dea112b090073317d4: C801 || CT.C801}) : t0$), $creationLocationd_0dea112b090073317d4: C805 || CT.C805})]), $creationLocationd_0dea112b090073317d4: C808 || CT.C808}), $creationLocationd_0dea112b090073317d4: C813 || CT.C813}), $creationLocationd_0dea112b090073317d4: C817 || CT.C817}), $creationLocationd_0dea112b090073317d4: C821 || CT.C821}), padding: src__painting__edge_insets.EdgeInsets.zero, onPressed: dart.fn(() => {
          src__widgets__navigator.Navigator.maybePop(core.Object, context);
        }, VoidToNull()), $creationLocationd_0dea112b090073317d4: C828 || CT.C828});
    }
  };
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton.new = function(opts) {
    let color = opts && 'color' in opts ? opts.color : null;
    let previousPageTitle = opts && 'previousPageTitle' in opts ? opts.previousPageTitle : null;
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[color$1] = color;
    this[previousPageTitle$1] = previousPageTitle;
    this[_backChevron$] = null;
    this[_backLabel$] = null;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1197, 16, "color != null");
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  (src__cupertino__nav_bar.CupertinoNavigationBarBackButton._assemble = function(_backChevron, _backLabel, color, opts) {
    let $creationLocationd_0dea112b090073317d4 = opts && '$creationLocationd_0dea112b090073317d4' in opts ? opts.$creationLocationd_0dea112b090073317d4 : null;
    this[_backChevron$] = _backChevron;
    this[_backLabel$] = _backLabel;
    this[color$1] = color;
    this[previousPageTitle$1] = null;
    if (!(color != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1206, 16, "color != null");
    src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__.new.call(this, {$creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar.CupertinoNavigationBarBackButton.prototype;
  dart.addTypeTests(src__cupertino__nav_bar.CupertinoNavigationBarBackButton);
  const color$1 = Symbol("CupertinoNavigationBarBackButton.color");
  const previousPageTitle$1 = Symbol("CupertinoNavigationBarBackButton.previousPageTitle");
  dart.setMethodSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, "package:flutter_web/src/cupertino/nav_bar.dart");
  dart.setFieldSignature(src__cupertino__nav_bar.CupertinoNavigationBarBackButton, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar.CupertinoNavigationBarBackButton.__proto__),
    color: dart.finalFieldType(ui$.Color),
    previousPageTitle: dart.finalFieldType(core.String),
    [_backChevron$]: dart.finalFieldType(src__widgets__framework.Widget),
    [_backLabel$]: dart.finalFieldType(src__widgets__framework.Widget)
  }));
  let C835;
  let C834;
  let C833;
  let C838;
  let C839;
  let C840;
  let C841;
  let C837;
  let C836;
  src__cupertino__nav_bar._BackChevron = class _BackChevron extends src__widgets__framework.StatelessWidget {
    build(context) {
      let t0;
      let textDirection = src__widgets__basic.Directionality.of(context);
      let textStyle = src__widgets__text.DefaultTextStyle.of(context).style;
      let iconWidget = new src__widgets__text.Text.rich(new src__painting__text_span.TextSpan.new({text: core.String.fromCharCode(src__cupertino__icons.CupertinoIcons.back.codePoint), style: new src__painting__text_style.TextStyle.new({inherit: false, color: textStyle.color, fontSize: 34.0, fontFamily: src__cupertino__icons.CupertinoIcons.back.fontFamily, package: src__cupertino__icons.CupertinoIcons.back.fontPackage})}), {$creationLocationd_0dea112b090073317d4: C833 || CT.C833});
      switch (textDirection) {
        case C137 || CT.C137:
        {
          iconWidget = new src__widgets__basic.Transform.new({transform: (t0 = vector_math_64$.Matrix4.identity(), t0.scale(-1.0, 1.0, 1.0), t0), alignment: src__painting__alignment.Alignment.center, transformHitTests: false, child: iconWidget, $creationLocationd_0dea112b090073317d4: C836 || CT.C836});
          break;
        }
        case C138 || CT.C138:
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
  dart.setLibraryUri(src__cupertino__nav_bar._BackChevron, "package:flutter_web/src/cupertino/nav_bar.dart");
  let C842;
  let C845;
  let C846;
  let C847;
  let C844;
  let C843;
  let C848;
  let C851;
  let C852;
  let C853;
  let C850;
  let C849;
  const _buildPreviousTitleWidget = dart.privateName(src__cupertino__nav_bar, "_buildPreviousTitleWidget");
  let C856;
  let C857;
  let C855;
  let C854;
  src__cupertino__nav_bar._BackLabel = class _BackLabel extends src__widgets__framework.StatelessWidget {
    [_buildPreviousTitleWidget](context, previousTitle, child) {
      if (previousTitle == null) {
        return C842 || CT.C842;
      }
      let textWidget = new src__widgets__text.Text.new(previousTitle, {maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, $creationLocationd_0dea112b090073317d4: C843 || CT.C843});
      if (previousTitle.length > 12) {
        textWidget = C848 || CT.C848;
      }
      return new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, widthFactor: 1.0, child: textWidget, $creationLocationd_0dea112b090073317d4: C849 || CT.C849});
    }
    build(context) {
      if (this.specifiedPreviousTitle != null) {
        return this[_buildPreviousTitleWidget](context, this.specifiedPreviousTitle, null);
      } else if (src__cupertino__route.CupertinoPageRoute.is(this.route)) {
        let cupertinoRoute = src__cupertino__route.CupertinoPageRoute._check(this.route);
        return new (ValueListenableBuilderOfString()).new({valueListenable: cupertinoRoute.previousTitle, builder: dart.bind(this, _buildPreviousTitleWidget), $creationLocationd_0dea112b090073317d4: C854 || CT.C854});
      } else {
        return C842 || CT.C842;
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
    if (!(route != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1314, 16, "route != null");
    src__cupertino__nav_bar._BackLabel.__proto__.new.call(this, {key: key, $creationLocationd_0dea112b090073317d4: $creationLocationd_0dea112b090073317d4});
    ;
  }).prototype = src__cupertino__nav_bar._BackLabel.prototype;
  dart.addTypeTests(src__cupertino__nav_bar._BackLabel);
  dart.setMethodSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getMethods(src__cupertino__nav_bar._BackLabel.__proto__),
    [_buildPreviousTitleWidget]: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext, core.String, src__widgets__framework.Widget]),
    build: dart.fnType(src__widgets__framework.Widget, [src__widgets__framework.BuildContext])
  }));
  dart.setLibraryUri(src__cupertino__nav_bar._BackLabel, "package:flutter_web/src/cupertino/nav_bar.dart");
  dart.setFieldSignature(src__cupertino__nav_bar._BackLabel, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._BackLabel.__proto__),
    specifiedPreviousTitle: dart.finalFieldType(core.String),
    route: dart.finalFieldType(src__widgets__routes.ModalRoute)
  }));
  src__cupertino__nav_bar._TransitionableNavigationBar = class _TransitionableNavigationBar extends src__widgets__framework.StatelessWidget {
    get renderBox() {
      let box = src__rendering__box.RenderBox._check(this.componentsKeys.navBarBoxKey.currentContext.findRenderObject());
      if (!dart.test(box.attached)) dart.assertFailed("_TransitionableNavigationBar.renderBox should be called when building " + "hero flight shuttles when the from and the to nav bar boxes are already " + "laid out and painted.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1397, 7, "box.attached");
      return box;
    }
    build(context) {
      if (!dart.test(dart.fn(() => {
        let inHero = null;
        context.visitAncestorElements(dart.fn(ancestor => {
          if (src__widgets__framework.ComponentElement.is(ancestor)) {
            if (!!dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__cupertino__nav_bar._NavigationBarTransition))) dart.assertFailed("_TransitionableNavigationBar should never re-appear inside " + "_NavigationBarTransition. Keyed _TransitionableNavigationBar should " + "only serve as anchor points in routes rather than appearing inside " + "Hero flights themselves.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1412, 13, "ancestor.widget.runtimeType != _NavigationBarTransition");
            if (dart.equals(dart.runtimeType(ancestor.widget), dart.wrapType(src__widgets__heroes.Hero))) {
              inHero = true;
            }
          }
          inHero == null ? inHero = false : null;
          return true;
        }, ElementTobool()));
        if (!dart.equals(inHero, true)) dart.assertFailed("_TransitionableNavigationBar should only be added as the immediate " + "child of Hero widgets.", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1426, 9, "inHero == true");
        return true;
      }, VoidTobool())())) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1407, 12, "() {\n      bool inHero;\n      context.visitAncestorElements((Element ancestor) {\n        if (ancestor is ComponentElement) {\n          assert(\n            ancestor.widget.runtimeType != _NavigationBarTransition,\n            '_TransitionableNavigationBar should never re-appear inside '\n            '_NavigationBarTransition. Keyed _TransitionableNavigationBar should '\n            'only serve as anchor points in routes rather than appearing inside '\n            'Hero flights themselves.',\n          );\n          if (ancestor.widget.runtimeType == Hero) {\n            inHero = true;\n          }\n        }\n        inHero ??= false;\n        return true;\n      });\n      assert(\n        inHero == true,\n        '_TransitionableNavigationBar should only be added as the immediate '\n        'child of Hero widgets.',\n      );\n      return true;\n    }()");
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
    if (!(componentsKeys != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1381, 16, "componentsKeys != null");
    if (!(largeExpanded != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1382, 16, "largeExpanded != null");
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
  dart.setLibraryUri(src__cupertino__nav_bar._TransitionableNavigationBar, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C860;
  let C861;
  let C859;
  let C858;
  let C864;
  let C865;
  let C863;
  let C862;
  let C868;
  let C867;
  let C866;
  let C871;
  let C872;
  let C873;
  let C870;
  let C869;
  src__cupertino__nav_bar._NavigationBarTransition = class _NavigationBarTransition extends src__widgets__framework.StatelessWidget {
    build(context) {
      let componentsTransition = new src__cupertino__nav_bar._NavigationBarComponentsTransition.new({animation: this.animation, bottomNavBar: this.bottomNavBar, topNavBar: this.topNavBar, directionality: src__widgets__basic.Directionality.of(context)});
      let children = JSArrayOfWidget().of([new src__widgets__transitions.AnimatedBuilder.new({animation: this.animation, builder: dart.fn((context, child) => src__cupertino__nav_bar._wrapWithBackground({updateSystemUiOverlay: false, backgroundColor: this.backgroundTween.evaluate(this.animation), border: this.borderTween.evaluate(this.animation), child: new src__widgets__basic.SizedBox.new({height: this.heightTween.evaluate(this.animation), width: 1 / 0, $creationLocationd_0dea112b090073317d4: C858 || CT.C858})}), BuildContextAndWidgetToWidget()), $creationLocationd_0dea112b090073317d4: C862 || CT.C862}), componentsTransition.bottomBackChevron, componentsTransition.bottomBackLabel, componentsTransition.bottomLeading, componentsTransition.bottomMiddle, componentsTransition.bottomLargeTitle, componentsTransition.bottomTrailing, componentsTransition.topLeading, componentsTransition.topBackChevron, componentsTransition.topBackLabel, componentsTransition.topMiddle, componentsTransition.topLargeTitle, componentsTransition.topTrailing]);
      children[$removeWhere](dart.fn(child => child == null, WidgetTobool()));
      return new src__widgets__basic.SizedBox.new({height: math.max(core.double, this.heightTween.begin, this.heightTween.end) + dart.notNull(src__widgets__media_query.MediaQuery.of(context).padding.top), width: 1 / 0, child: new src__widgets__basic.Stack.new({children: children, $creationLocationd_0dea112b090073317d4: C866 || CT.C866}), $creationLocationd_0dea112b090073317d4: C869 || CT.C869});
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
  dart.setLibraryUri(src__cupertino__nav_bar._NavigationBarTransition, "package:flutter_web/src/cupertino/nav_bar.dart");
  dart.setFieldSignature(src__cupertino__nav_bar._NavigationBarTransition, () => ({
    __proto__: dart.getFields(src__cupertino__nav_bar._NavigationBarTransition.__proto__),
    animation: dart.finalFieldType(src__animation__animation.Animation$(core.double)),
    topNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    bottomNavBar: dart.finalFieldType(src__cupertino__nav_bar._TransitionableNavigationBar),
    heightTween: dart.finalFieldType(src__animation__tween.Tween$(core.double)),
    backgroundTween: dart.finalFieldType(src__animation__tween.ColorTween),
    borderTween: dart.finalFieldType(src__widgets__implicit_animations.BorderTween)
  }));
  let C874;
  let C875;
  let C878;
  let C879;
  let C877;
  let C876;
  let C882;
  let C883;
  let C881;
  let C880;
  let C886;
  let C887;
  let C885;
  let C884;
  let C890;
  let C891;
  let C889;
  let C888;
  let C894;
  let C895;
  let C893;
  let C892;
  let C898;
  let C899;
  let C897;
  let C896;
  let C902;
  let C903;
  let C901;
  let C900;
  let C906;
  let C907;
  let C905;
  let C904;
  let C910;
  let C911;
  let C909;
  let C908;
  let C914;
  let C915;
  let C913;
  let C912;
  let C918;
  let C919;
  let C917;
  let C916;
  let C922;
  let C923;
  let C921;
  let C920;
  let C926;
  let C927;
  let C925;
  let C924;
  let C930;
  let C931;
  let C929;
  let C928;
  let C934;
  let C935;
  let C933;
  let C932;
  let C938;
  let C939;
  let C940;
  let C941;
  let C937;
  let C936;
  let C944;
  let C945;
  let C943;
  let C942;
  let C948;
  let C949;
  let C947;
  let C946;
  let C952;
  let C953;
  let C951;
  let C950;
  let C956;
  let C957;
  let C955;
  let C954;
  let C960;
  let C961;
  let C959;
  let C958;
  let C964;
  let C965;
  let C963;
  let C962;
  let C968;
  let C969;
  let C967;
  let C966;
  let C972;
  let C973;
  let C971;
  let C970;
  let C976;
  let C977;
  let C975;
  let C974;
  let C980;
  let C981;
  let C979;
  let C978;
  let C984;
  let C985;
  let C983;
  let C982;
  let C988;
  let C989;
  let C987;
  let C986;
  let C992;
  let C993;
  let C991;
  let C990;
  let C994;
  let C997;
  let C998;
  let C999;
  let C1000;
  let C996;
  let C995;
  let C1003;
  let C1004;
  let C1002;
  let C1001;
  let C1007;
  let C1008;
  let C1006;
  let C1005;
  let C1011;
  let C1012;
  let C1010;
  let C1009;
  let C1015;
  let C1016;
  let C1014;
  let C1013;
  let C1019;
  let C1020;
  let C1018;
  let C1017;
  let C1023;
  let C1024;
  let C1022;
  let C1021;
  let C1027;
  let C1028;
  let C1026;
  let C1025;
  let C1031;
  let C1032;
  let C1030;
  let C1029;
  let C1035;
  let C1036;
  let C1034;
  let C1033;
  let C1039;
  let C1040;
  let C1038;
  let C1037;
  let C1043;
  let C1044;
  let C1045;
  let C1046;
  let C1042;
  let C1041;
  let C1049;
  let C1050;
  let C1048;
  let C1047;
  let C1053;
  let C1054;
  let C1052;
  let C1051;
  src__cupertino__nav_bar._NavigationBarComponentsTransition = class _NavigationBarComponentsTransition extends core.Object {
    positionInTransitionBox(key, opts) {
      let from = opts && 'from' in opts ? opts.from : null;
      let componentBox = src__rendering__box.RenderBox._check(key.currentContext.findRenderObject());
      if (!dart.test(componentBox.attached)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 1623, 12, "componentBox.attached");
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
      let curve = opts && 'curve' in opts ? opts.curve : C874 || CT.C874;
      return this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeIn.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(t, 1.0, {curve: curve})})));
    }
    fadeOutBy(t, opts) {
      let curve = opts && 'curve' in opts ? opts.curve : C875 || CT.C875;
      return this.animation.drive(core.double, src__cupertino__nav_bar._NavigationBarComponentsTransition.fadeOut.chain(new src__animation__tween.CurveTween.new({curve: new src__animation__curves.Interval.new(0.0, t, {curve: curve})})));
    }
    get bottomLeading() {
      let bottomLeading = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.leadingKey.currentWidget);
      if (bottomLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.leadingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: bottomLeading.child, $creationLocationd_0dea112b090073317d4: C876 || CT.C876}), $creationLocationd_0dea112b090073317d4: C880 || CT.C880});
    }
    get bottomBackChevron() {
      let bottomBackChevron = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backChevronKey.currentWidget);
      if (bottomBackChevron == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.backChevronKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackChevron.child, $creationLocationd_0dea112b090073317d4: C884 || CT.C884}), $creationLocationd_0dea112b090073317d4: C888 || CT.C888}), $creationLocationd_0dea112b090073317d4: C892 || CT.C892});
    }
    get bottomBackLabel() {
      let bottomBackLabel = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.backLabelKey.currentWidget);
      if (bottomBackLabel == null) {
        return null;
      }
      let from = this.positionInTransitionBox(this.bottomComponents.backLabelKey, {from: this.bottomNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * (-dart.notNull(this.bottomNavBarBox.size.width) / 2.0), 0.0))});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.2), child: new src__widgets__text.DefaultTextStyle.new({style: this.bottomActionsStyle, child: bottomBackLabel.child, $creationLocationd_0dea112b090073317d4: C896 || CT.C896}), $creationLocationd_0dea112b090073317d4: C900 || CT.C900}), $creationLocationd_0dea112b090073317d4: C904 || CT.C904});
    }
    get bottomMiddle() {
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (!dart.test(this.bottomHasUserMiddle) && dart.test(this.bottomLargeExpanded)) {
        return null;
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle})), child: bottomMiddle.child, $creationLocationd_0dea112b090073317d4: C908 || CT.C908}), $creationLocationd_0dea112b090073317d4: C912 || CT.C912}), $creationLocationd_0dea112b090073317d4: C916 || CT.C916}), $creationLocationd_0dea112b090073317d4: C920 || CT.C920});
      }
      if (bottomMiddle != null && topLeading != null) {
        return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.middleKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(dart.test(this.bottomHasUserMiddle) ? 0.4 : 0.7), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: bottomMiddle.child, $creationLocationd_0dea112b090073317d4: C924 || CT.C924}), $creationLocationd_0dea112b090073317d4: C928 || CT.C928}), $creationLocationd_0dea112b090073317d4: C932 || CT.C932});
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
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: new src__widgets__basic.Align.new({alignment: src__painting__alignment.AlignmentDirectional.centerStart, child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle})), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: bottomLargeTitle.child, $creationLocationd_0dea112b090073317d4: C936 || CT.C936}), $creationLocationd_0dea112b090073317d4: C942 || CT.C942}), $creationLocationd_0dea112b090073317d4: C946 || CT.C946}), $creationLocationd_0dea112b090073317d4: C950 || CT.C950});
      }
      if (bottomLargeTitle != null && topLeading != null) {
        let from = this.positionInTransitionBox(this.bottomComponents.largeTitleKey, {from: this.bottomNavBarBox});
        let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: from, end: from.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.bottomNavBarBox.size.width) / 4.0, 0.0))});
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.4), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, child: bottomLargeTitle.child, $creationLocationd_0dea112b090073317d4: C954 || CT.C954}), $creationLocationd_0dea112b090073317d4: C958 || CT.C958}), $creationLocationd_0dea112b090073317d4: C962 || CT.C962});
      }
      return null;
    }
    get bottomTrailing() {
      let bottomTrailing = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.trailingKey.currentWidget);
      if (bottomTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.bottomComponents.trailingKey, {from: this.bottomNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeOutBy(0.6), child: bottomTrailing.child, $creationLocationd_0dea112b090073317d4: C966 || CT.C966}), $creationLocationd_0dea112b090073317d4: C970 || CT.C970});
    }
    get topLeading() {
      let topLeading = src__widgets__basic.KeyedSubtree._check(this.topComponents.leadingKey.currentWidget);
      if (topLeading == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.leadingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.6), child: topLeading.child, $creationLocationd_0dea112b090073317d4: C974 || CT.C974}), $creationLocationd_0dea112b090073317d4: C978 || CT.C978});
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
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(bottomBackChevron == null ? 0.7 : 0.4), child: new src__widgets__text.DefaultTextStyle.new({style: this.topActionsStyle, child: topBackChevron.child, $creationLocationd_0dea112b090073317d4: C982 || CT.C982}), $creationLocationd_0dea112b090073317d4: C986 || CT.C986}), $creationLocationd_0dea112b090073317d4: C990 || CT.C990});
    }
    get topBackLabel() {
      let t0, t0$, t0$0;
      let bottomMiddle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.middleKey.currentWidget);
      let bottomLargeTitle = src__widgets__basic.KeyedSubtree._check(this.bottomComponents.largeTitleKey.currentWidget);
      let topBackLabel = src__widgets__basic.KeyedSubtree._check(this.topComponents.backLabelKey.currentWidget);
      if (topBackLabel == null) {
        return null;
      }
      let topBackLabelOpacity = src__rendering__proxy_box.RenderAnimatedOpacity._check((t0 = this.topComponents.backLabelKey.currentContext, t0 == null ? null : t0.ancestorRenderObjectOfType(C994 || CT.C994)));
      let midClickOpacity = null;
      if (topBackLabelOpacity != null && dart.notNull(topBackLabelOpacity.opacity.value) < 1.0) {
        midClickOpacity = this.animation.drive(core.double, new (TweenOfdouble()).new({begin: 0.0, end: topBackLabelOpacity.opacity.value}));
      }
      if (bottomLargeTitle != null && topBackLabel != null && dart.test(this.bottomLargeExpanded)) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.largeTitleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: (t0$ = midClickOpacity, t0$ == null ? this.fadeInFrom(0.4) : t0$), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kLargeTitleTextStyle, end: this.topActionsStyle})), maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topBackLabel.child, $creationLocationd_0dea112b090073317d4: C995 || CT.C995}), $creationLocationd_0dea112b090073317d4: C1001 || CT.C1001}), $creationLocationd_0dea112b090073317d4: C1005 || CT.C1005});
      }
      if (bottomMiddle != null && topBackLabel != null) {
        return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, this.slideFromLeadingEdge({fromKey: this.bottomComponents.middleKey, fromNavBarBox: this.bottomNavBarBox, toKey: this.topComponents.backLabelKey, toNavBarBox: this.topNavBarBox})), child: new src__widgets__transitions.FadeTransition.new({opacity: (t0$0 = midClickOpacity, t0$0 == null ? this.fadeInFrom(0.3) : t0$0), child: new src__widgets__transitions.DefaultTextStyleTransition.new({style: this.animation.drive(src__painting__text_style.TextStyle, new src__widgets__implicit_animations.TextStyleTween.new({begin: src__cupertino__nav_bar._kMiddleTitleTextStyle, end: this.topActionsStyle})), child: topBackLabel.child, $creationLocationd_0dea112b090073317d4: C1009 || CT.C1009}), $creationLocationd_0dea112b090073317d4: C1013 || CT.C1013}), $creationLocationd_0dea112b090073317d4: C1017 || CT.C1017});
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
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.25), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kMiddleTitleTextStyle, child: topMiddle.child, $creationLocationd_0dea112b090073317d4: C1021 || CT.C1021}), $creationLocationd_0dea112b090073317d4: C1025 || CT.C1025}), $creationLocationd_0dea112b090073317d4: C1029 || CT.C1029});
    }
    get topTrailing() {
      let topTrailing = src__widgets__basic.KeyedSubtree._check(this.topComponents.trailingKey.currentWidget);
      if (topTrailing == null) {
        return null;
      }
      return new src__widgets__basic.Positioned.fromRelativeRect({rect: this.positionInTransitionBox(this.topComponents.trailingKey, {from: this.topNavBarBox}), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.4), child: topTrailing.child, $creationLocationd_0dea112b090073317d4: C1033 || CT.C1033}), $creationLocationd_0dea112b090073317d4: C1037 || CT.C1037});
    }
    get topLargeTitle() {
      let topLargeTitle = src__widgets__basic.KeyedSubtree._check(this.topComponents.largeTitleKey.currentWidget);
      if (topLargeTitle == null || !dart.test(this.topLargeExpanded)) {
        return null;
      }
      let to = this.positionInTransitionBox(this.topComponents.largeTitleKey, {from: this.topNavBarBox});
      let positionTween = new src__widgets__transitions.RelativeRectTween.new({begin: to.shift(new ui$.Offset.new(dart.notNull(this.forwardDirection) * dart.notNull(this.topNavBarBox.size.width), 0.0)), end: to});
      return new src__widgets__transitions.PositionedTransition.new({rect: this.animation.drive(src__rendering__stack.RelativeRect, positionTween), child: new src__widgets__transitions.FadeTransition.new({opacity: this.fadeInFrom(0.3), child: new src__widgets__text.DefaultTextStyle.new({style: src__cupertino__nav_bar._kLargeTitleTextStyle, maxLines: 1, overflow: src__rendering__paragraph.TextOverflow.ellipsis, child: topLargeTitle.child, $creationLocationd_0dea112b090073317d4: C1041 || CT.C1041}), $creationLocationd_0dea112b090073317d4: C1047 || CT.C1047}), $creationLocationd_0dea112b090073317d4: C1051 || CT.C1051});
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
  dart.setLibraryUri(src__cupertino__nav_bar._NavigationBarComponentsTransition, "package:flutter_web/src/cupertino/nav_bar.dart");
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
  let C1057;
  let C1058;
  let C1059;
  let C1056;
  let C1055;
  let C1062;
  let C1063;
  let C1061;
  let C1060;
  src__cupertino__nav_bar._navBarItemStyle = function _navBarItemStyle(color) {
    return new src__painting__text_style.TextStyle.new({fontFamily: ".SF UI Text", fontSize: 17.0, letterSpacing: -0.24, color: color});
  };
  src__cupertino__nav_bar._wrapWithBackground = function _wrapWithBackground(opts) {
    let border = opts && 'border' in opts ? opts.border : null;
    let backgroundColor = opts && 'backgroundColor' in opts ? opts.backgroundColor : null;
    let child = opts && 'child' in opts ? opts.child : null;
    let updateSystemUiOverlay = opts && 'updateSystemUiOverlay' in opts ? opts.updateSystemUiOverlay : true;
    let result = child;
    if (dart.test(updateSystemUiOverlay)) {
      let darkBackground = dart.notNull(backgroundColor.computeLuminance()) < 0.179;
      let overlayStyle = darkBackground ? src__services__system_chrome.SystemUiOverlayStyle.light : src__services__system_chrome.SystemUiOverlayStyle.dark;
      result = new (AnnotatedRegionOfSystemUiOverlayStyle()).new({value: overlayStyle, sized: true, child: result, $creationLocationd_0dea112b090073317d4: C1055 || CT.C1055});
    }
    let childWithBackground = new src__widgets__container.DecoratedBox.new({decoration: new src__painting__box_decoration.BoxDecoration.new({border: border, color: backgroundColor}), child: result, $creationLocationd_0dea112b090073317d4: C1060 || CT.C1060});
    if (backgroundColor.alpha === 255) return childWithBackground;
    return childWithBackground;
  };
  src__cupertino__nav_bar._isTransitionable = function _isTransitionable(context) {
    let route = src__widgets__routes.ModalRoute.of(core.Object, context);
    return src__widgets__pages.PageRoute.is(route) && !dart.test(route.fullscreenDialog);
  };
  let C1064;
  let C1065;
  let C1066;
  let C1069;
  let C1070;
  let C1071;
  let C1072;
  let C1073;
  let C1068;
  let C1067;
  let C1076;
  let C1077;
  let C1078;
  let C1075;
  let C1074;
  const _name$3 = dart.privateName(src__widgets__heroes, "_name");
  let C1079;
  let C1082;
  let C1083;
  let C1084;
  let C1081;
  let C1080;
  let C1085;
  dart.defineLazy(src__cupertino__nav_bar, {
    /*src__cupertino__nav_bar._kNavBarPersistentHeight*/get _kNavBarPersistentHeight() {
      return 44;
    },
    /*src__cupertino__nav_bar._kNavBarLargeTitleHeightExtension*/get _kNavBarLargeTitleHeightExtension() {
      return 52;
    },
    /*src__cupertino__nav_bar._kNavBarShowLargeTitleThreshold*/get _kNavBarShowLargeTitleThreshold() {
      return 10;
    },
    /*src__cupertino__nav_bar._kNavBarEdgePadding*/get _kNavBarEdgePadding() {
      return 16;
    },
    /*src__cupertino__nav_bar._kNavBarBackButtonTapWidth*/get _kNavBarBackButtonTapWidth() {
      return 50;
    },
    /*src__cupertino__nav_bar._kNavBarTitleFadeDuration*/get _kNavBarTitleFadeDuration() {
      return C1064 || CT.C1064;
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBackgroundColor*/get _kDefaultNavBarBackgroundColor() {
      return C95 || CT.C95;
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorderColor*/get _kDefaultNavBarBorderColor() {
      return C603 || CT.C603;
    },
    /*src__cupertino__nav_bar._kDefaultNavBarBorder*/get _kDefaultNavBarBorder() {
      return C599 || CT.C599;
    },
    /*src__cupertino__nav_bar._kMiddleTitleTextStyle*/get _kMiddleTitleTextStyle() {
      return C1065 || CT.C1065;
    },
    /*src__cupertino__nav_bar._kLargeTitleTextStyle*/get _kLargeTitleTextStyle() {
      return C1066 || CT.C1066;
    },
    /*src__cupertino__nav_bar._defaultHeroTag*/get _defaultHeroTag() {
      return C605 || CT.C605;
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
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2167, 10, "child is _TransitionableNavigationBar");
        return new src__widgets__visibility.Visibility.new({maintainSize: true, maintainAnimation: true, maintainState: true, visible: false, child: child, $creationLocationd_0dea112b090073317d4: C1067 || CT.C1067});
      }, BuildContextAndWidgetToVisibility());
    },
    /*src__cupertino__nav_bar._navBarHeroFlightShuttleBuilder*/get _navBarHeroFlightShuttleBuilder() {
      return dart.fn((flightContext, animation, flightDirection, fromHeroContext, toHeroContext) => {
        if (!(animation != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2196, 10, "animation != null");
        if (!(flightDirection != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2197, 10, "flightDirection != null");
        if (!(fromHeroContext != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2198, 10, "fromHeroContext != null");
        if (!(toHeroContext != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2199, 10, "toHeroContext != null");
        if (!src__widgets__heroes.Hero.is(fromHeroContext.widget)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2200, 10, "fromHeroContext.widget is Hero");
        if (!src__widgets__heroes.Hero.is(toHeroContext.widget)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2201, 10, "toHeroContext.widget is Hero");
        let fromHeroWidget = src__widgets__heroes.Hero._check(fromHeroContext.widget);
        let toHeroWidget = src__widgets__heroes.Hero._check(toHeroContext.widget);
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(fromHeroWidget.child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2206, 10, "fromHeroWidget.child is _TransitionableNavigationBar");
        if (!src__cupertino__nav_bar._TransitionableNavigationBar.is(toHeroWidget.child)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2207, 10, "toHeroWidget.child is _TransitionableNavigationBar");
        let fromNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(fromHeroWidget.child);
        let toNavBar = src__cupertino__nav_bar._TransitionableNavigationBar._check(toHeroWidget.child);
        if (!(fromNavBar.componentsKeys != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2212, 10, "fromNavBar.componentsKeys != null");
        if (!(toNavBar.componentsKeys != null)) dart.assertFailed(null, "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2213, 10, "toNavBar.componentsKeys != null");
        if (!(fromNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The from nav bar to Hero must have been mounted in the previous frame", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2216, 5, "fromNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null");
        if (!(toNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null)) dart.assertFailed("The to nav bar to Hero must have been mounted in the previous frame", "org-dartlang-app:///packages/flutter_web/src/cupertino/nav_bar.dart", 2220, 5, "toNavBar.componentsKeys.navBarBoxKey.currentContext.owner != null");
        switch (flightDirection) {
          case C1079 || CT.C1079:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: fromNavBar, topNavBar: toNavBar, $creationLocationd_0dea112b090073317d4: C1074 || CT.C1074});
            break;
          }
          case C1085 || CT.C1085:
          {
            return new src__cupertino__nav_bar._NavigationBarTransition.new({animation: animation, bottomNavBar: toNavBar, topNavBar: fromNavBar, $creationLocationd_0dea112b090073317d4: C1080 || CT.C1080});
          }
        }
        dart.throw(new core.ArgumentError.value(flightDirection, "flightDirection"));
      }, BuildContextAndAnimationOfdoubleAndHeroFlightDirection__To_NavigationBarTransition());
    }
  });
  dart.trackLibraries("packages/flutter_web/src/cupertino/action_sheet", {
    "package:flutter_web/src/cupertino/scrollbar.dart": src__cupertino__scrollbar,
    "package:flutter_web/src/cupertino/text_theme.dart": src__cupertino__text_theme,
    "package:flutter_web/src/cupertino/colors.dart": src__cupertino__colors,
    "package:flutter_web/src/cupertino/app.dart": src__cupertino__app,
    "package:flutter_web/src/cupertino/theme.dart": src__cupertino__theme,
    "package:flutter_web/src/cupertino/route.dart": src__cupertino__route,
    "package:flutter_web/src/cupertino/localizations.dart": src__cupertino__localizations,
    "package:flutter_web/src/cupertino/icons.dart": src__cupertino__icons,
    "package:flutter_web/src/cupertino/button.dart": src__cupertino__button,
    "package:flutter_web/src/cupertino/page_scaffold.dart": src__cupertino__page_scaffold,
    "package:flutter_web/src/cupertino/activity_indicator.dart": src__cupertino__activity_indicator,
    "package:flutter_web/src/cupertino/action_sheet.dart": src__cupertino__action_sheet,
    "package:flutter_web/src/cupertino/nav_bar.dart": src__cupertino__nav_bar
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["scrollbar.dart","text_theme.dart","colors.dart","app.dart","theme.dart","route.dart","localizations.dart","icons.dart","button.dart","page_scaffold.dart","activity_indicator.dart","action_sheet.dart","nav_bar.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;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","file":"action_sheet.ddc.js"}');
  // Exports:
  return {
    src__cupertino__scrollbar: src__cupertino__scrollbar,
    src__cupertino__text_theme: src__cupertino__text_theme,
    src__cupertino__colors: src__cupertino__colors,
    src__cupertino__app: src__cupertino__app,
    src__cupertino__theme: src__cupertino__theme,
    src__cupertino__route: src__cupertino__route,
    src__cupertino__localizations: src__cupertino__localizations,
    src__cupertino__icons: src__cupertino__icons,
    src__cupertino__button: src__cupertino__button,
    src__cupertino__page_scaffold: src__cupertino__page_scaffold,
    src__cupertino__activity_indicator: src__cupertino__activity_indicator,
    src__cupertino__action_sheet: src__cupertino__action_sheet,
    src__cupertino__nav_bar: src__cupertino__nav_bar
  };
});

//# sourceMappingURL=action_sheet.ddc.js.map
