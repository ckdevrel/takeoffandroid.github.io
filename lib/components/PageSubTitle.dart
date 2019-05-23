import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageSubTitle extends StatelessWidget {
  String title;

  PageSubTitle(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title,
        style: TextStyle(color: AppColors.colorTextGreyPrimary,
            fontSize: 15,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.w600));
  }
}
