import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageSection extends StatelessWidget {
  String title;

  PageSection(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title,
        style: TextStyle(
            color: AppColors.colorTextBlackPrimary,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.w600,
            fontSize: 14));
  }
}
