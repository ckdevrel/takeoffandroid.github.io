import 'package:flutter_web/material.dart';

import '../PageListTile.dart';
import '../PageParagraph.dart';

class CardView extends StatelessWidget {

  String text;

  CardView(this.text);

  @override
  Widget build(BuildContext context) {
    return SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph(text))));
  }
}