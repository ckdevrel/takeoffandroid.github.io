import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';

import '../PageListTile.dart';
import 'CardViewIcon.dart';

class ThreeRowCardView extends StatelessWidget {

  String text1, text2, text3;

  String icon1, icon2, icon3;

  ThreeRowCardView( this.icon1, this.text1, this.icon2, this.text2, this.icon3, this.text3);

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      scrollDirection: Axis.horizontal,
      child: Row(children: <Widget>[
        CardViewIcon(icon1, text1),
        Width36(),
        CardViewIcon(icon2, text2),
        Width36(),
        CardViewIcon(icon3, text3)
      ]),
    );
  }
}