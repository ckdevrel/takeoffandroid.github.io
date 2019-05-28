import 'package:flutter_web/material.dart';

import '../../ResponsiveWidget.dart';
import '../PageListTile.dart';

class CardViewIcon extends StatelessWidget {

  String icon, text;

  CardViewIcon(this.icon, this.text);

  @override
  Widget build(BuildContext context) {
    if(ResponsiveWidget.isLargeScreen(context)){
      return Card(elevation: 4 ,child: Center(child: PageListTile(icon, text)));
    }else{
      return Card(elevation: 4 ,child: Center(child: PageListTile(icon, text)));
    }
  }
}