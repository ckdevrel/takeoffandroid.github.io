import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class OpenSourceHeader extends StatelessWidget {
  String title;

  OpenSourceHeader(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(
      title,
      style: TextStyle(
        color: AppColors.colorTextBlackPrimary,
        fontSize: 20,
        fontFamily: 'OpenSans',
        fontWeight: FontWeight.w600,
      ),
    );
  }
}
