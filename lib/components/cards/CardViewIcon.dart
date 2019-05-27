import 'package:flutter_web/material.dart';

import '../PageListTile.dart';

class CardViewIcon extends StatelessWidget {

  String icon, text;

  CardViewIcon(this.icon, this.text);

  @override
  Widget build(BuildContext context) {
    return SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(icon, text))));
  }
}