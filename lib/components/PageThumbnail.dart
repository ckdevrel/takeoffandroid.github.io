import 'package:flutter_web/material.dart';

import '../AppColors.dart';

class PageThumbnail extends StatelessWidget {
  String image;

  PageThumbnail(this.image);

  @override
  Widget build(BuildContext context) {
    return           Container(margin: EdgeInsets.fromLTRB(0, 0, 0, 24),
        width: 1011,
        height: 300,
        child: Center(child: Image.asset(image)));
  }
}
