import 'package:flutter_web/material.dart';

import '../AppColors.dart';
import '../ResponsiveWidget.dart';
import 'space/Width16.dart';

class PageListTile extends StatelessWidget {
  String image, title;

  PageListTile(this.image, this.title);

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.fromLTRB(16, 0, 16, 0),
      width: 291,
      height: 100,
      child: Row(
        children: <Widget>[
          ResponsiveWidget.isLargeScreen(context) ? Image.asset(image, width: 50, height: 50) :
          Image.asset(image, width: 36, height: 36),
          Width16(),
          Expanded(
            child: Text(title,
                style: TextStyle(
                    color: AppColors.colorTextBlackPrimary,
                    fontFamily: 'OpenSans',
                    fontWeight: FontWeight.w600,
                    fontSize: 14)),
          )
        ],
      ),
    );
  }
}
