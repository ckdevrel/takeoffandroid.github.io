import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageParagraph extends StatelessWidget {
  String title;

  PageParagraph(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title,
        style: TextStyle(
            color: AppColors.colorTextGreySecondary,
            fontSize: 14,
            fontFamily: 'OpenSans',
            fontWeight: FontWeight.normal));
  }
}
