import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height16.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'components/PageGridTile.dart';
import 'components/PageListTile.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';
import 'components/cards/CardViewIcon.dart';
import 'components/cards/ThreeRowCardView.dart';
import 'components/cards/TwoRowCardView.dart';
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
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              CardViewIcon(skillsModel[0].icon, skillsModel[0].text),
              Width36(),
              CardViewIcon(skillsModel[1].icon, skillsModel[1].text),
              Width36(),
              CardViewIcon(skillsModel[2].icon, skillsModel[2].text)
            ]),
          ),
          Height24(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              CardViewIcon(skillsModel[3].icon, skillsModel[3].text),
              Width36(),
              CardViewIcon(skillsModel[4].icon, skillsModel[4].text),
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
