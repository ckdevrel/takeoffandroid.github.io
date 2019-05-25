import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class OpenSourceAndroidTitle extends StatelessWidget {
  String title;

  OpenSourceAndroidTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(
        color: AppColors.colorTextGreySecondary,
        fontSize: 18,
        fontFamily: 'OpenSans',
        fontWeight: FontWeight.w600,
      ),
    );
  }
}
