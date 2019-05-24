import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageGridTile extends StatelessWidget {
  String image, title;

  PageGridTile(this.image, this.title);

  @override
  Widget build(BuildContext context) {
    return Container(
      child: ListTile(
          leading: Image.asset(image),
          title: Text(title, style: TextStyle(color: AppColors.colorTextBlackPrimary, fontFamily: 'OpenSans', fontWeight: FontWeight.w600, fontSize: 14))),
    );
  }
}
