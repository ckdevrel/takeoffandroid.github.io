import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageTitle extends StatelessWidget {
  String title;

  PageTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
        title,
        style: TextStyle(
            color: AppColors.colorPrimary,
            fontSize: 36,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.bold),
      );
  }
}
