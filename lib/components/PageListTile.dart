import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageListTile extends StatelessWidget {
  String image, title;

  PageListTile(this.image, this.title);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 50,
      child: ListTile(
          leading: Image.asset(image),
          title: Text(title, style: TextStyle(color: AppColors.colorTextBlackPrimary, fontFamily: 'OpenSans', fontWeight: FontWeight.w600, fontSize: 14))),
    );
  }
}
