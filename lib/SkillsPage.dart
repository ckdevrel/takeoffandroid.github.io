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
      child: ListView(
        children: <Widget>[
          PageTitle('SKILLS'),
          SizedBox(height: 16),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(skillsModel[0].icon, skillsModel[0].text)))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(skillsModel[1].icon, skillsModel[1].text)))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(skillsModel[2].icon, skillsModel[2].text)))),
            ]),
          ),
          SizedBox(height: 24),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(skillsModel[3].icon, skillsModel[3].text)))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile(skillsModel[4].icon, skillsModel[4].text)))),
            ]),
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
