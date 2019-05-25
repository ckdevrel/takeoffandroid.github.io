import 'package:flutter_web/material.dart';

import '../AppColors.dart';
import 'PageSection.dart';

class PageGridTile extends StatelessWidget {
  String image, title;

  PageGridTile(this.image, this.title);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        IconButton(iconSize: 50, icon: Image.asset(image), onPressed: () {},),
        SizedBox(height: 16),
        PageSection(title)
      ],
    );
  }
}
