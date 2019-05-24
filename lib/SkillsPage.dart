import 'package:flutter_web/material.dart';

import 'components/PageGridTile.dart';
import 'components/PageListTile.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';

class SkillsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          PageThumbnail('images/award_thumbnail.png'),
          PageTitle('SKILLS'),
          SizedBox(height: 16),
          Expanded(
            child: GridView(
              shrinkWrap: true,
              children: <Widget>[
                PageGridTile(
                    'images/award_expertise.png', 'Agile Development & Scrum'),
                PageGridTile(
                    'images/award_certified.png', 'Test Driven Development'),
                PageGridTile('images/award_funding.png',
                    'Object Oriented Programming & Solid Principles'),
                PageGridTile('images/award_topic.png', 'Responsive Design'),
                PageGridTile(
                    'images/award_expertise.png', 'Cross Functional Teams')
              ],
              gridDelegate: new SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 2, mainAxisSpacing: 3, crossAxisSpacing: 2),
            ),
          ),
        ],
      ),
    );
  }

  openLink(String url) async {
//    if (await canLaunch(url)) {
//      await launch(url);
//    } else {
//      throw 'Could not launch $url';
//    }
  }
}
