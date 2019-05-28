import 'package:flutter_web/material.dart';

import '../ResponsiveWidget.dart';

class PageListView extends StatelessWidget {

  Widget child;

  PageListView({this.child});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: ResponsiveWidget.isLargeScreen(context) ? EdgeInsets.all(48.0) : EdgeInsets.all(24.0),
      child: child
    );
  }
}