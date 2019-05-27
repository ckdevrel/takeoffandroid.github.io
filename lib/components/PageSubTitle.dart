import 'package:flutter_web/material.dart';

import '../AppColors.dart';
import '../ResponsiveWidget.dart';

class PageSubTitle extends StatelessWidget {
  String title;

  PageSubTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title,
        style: TextStyle(color: AppColors.colorTextGreyPrimary,
            fontSize: ResponsiveWidget.isLargeScreen(context) ? 15 : 13,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.w600));
  }
}
