import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';

import '../PageListTile.dart';
import 'CardViewIcon.dart';

class TwoRowCardView extends StatelessWidget {

  String text1, text2;

  String icon1, icon2;

  TwoRowCardView(this.icon1, this.text1, this.icon2, this.text2);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(children: <Widget>[
        CardViewIcon(icon1, text1),
        Width36(),
        CardViewIcon(icon2, text2),
      ]),
    );
  }
}