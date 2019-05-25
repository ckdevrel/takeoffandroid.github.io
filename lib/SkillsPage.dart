import 'package:flutter_web/material.dart';

import 'components/PageGridTile.dart';
import 'components/PageListTile.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';
import 'models/SkillsModel.dart';

class SkillsPage extends StatelessWidget {
  var skillsModel = [
    SkillsModel('images/skills_agile.png', 'Agile Development & Scrum'),
    SkillsModel('images/skills_tdd.png', 'Test Driven Development'),
    SkillsModel('images/skills_oops.png',
        'Object Oriented Programming & Solid Principles'),
    SkillsModel('images/skills_responsive.png', 'Responsive Design'),
    SkillsModel('images/skills_cross.png', 'Cross Functional Teams')
  ];

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
            child: GridView.count(
              childAspectRatio: 3,
              shrinkWrap: true,
              controller: new ScrollController(keepScrollOffset: false),
              crossAxisCount: 3,
              mainAxisSpacing: 5,
              children: <Widget>[
                PageGridTile(skillsModel[0].icon, skillsModel[0].text),
                PageGridTile(skillsModel[1].icon, skillsModel[1].text),
                PageGridTile(skillsModel[2].icon, skillsModel[2].text),
                PageGridTile(skillsModel[3].icon, skillsModel[3].text),
                PageGridTile(skillsModel[4].icon, skillsModel[4].text),
              ],
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
