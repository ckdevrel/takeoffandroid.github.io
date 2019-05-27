import 'package:flutter_web/material.dart';

import '../AppColors.dart';
import '../ResponsiveWidget.dart';

class PageTitle extends StatelessWidget {
  String title;

  PageTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
        title,
        style: TextStyle(
            color: AppColors.colorPrimary,
            fontSize: ResponsiveWidget.isLargeScreen(context) ? 36 : 16,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.bold),
      );
  }
}
