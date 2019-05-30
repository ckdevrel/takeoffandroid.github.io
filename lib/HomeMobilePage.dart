import 'package:flutter_web/material.dart';

import 'AboutPage.dart';
import 'AppColors.dart';
import 'AwardsPage.dart';
import 'OpenSourcePage.dart';
import 'SkillsPage.dart';
import 'SpeakingPage.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height4.dart';
import 'package:takeoffandroid_portfolio/components/space/Width16.dart';

import 'components/ContentFrame.dart';
import 'components/drawer/DrawerImage.dart';
import 'components/drawer/DrawerRow.dart';
import 'components/drawer/DrawerSubTitle.dart';
import 'components/drawer/DrawerTitle.dart';
import 'components/drawer/DrawerTopBar.dart';

class HomeMobilePage extends StatefulWidget {
  @override
  _HomeMobilePageState createState() => _HomeMobilePageState();
}

class _HomeMobilePageState extends State<HomeMobilePage> {
  int selectedOption = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
          title: Text('TakeoffAndroid',
              style: TextStyle(
                  fontFamily: "Lato",
                  fontSize: 18,
                  color: Colors.white,
                  fontWeight: FontWeight.w100))),
      backgroundColor: Colors.white,
      drawer: Drawer(
        child: Container(
          color: AppColors.colorPrimary,
          child: new ListView(children: <Widget>[
            DrawerTopBar(),
            DrawerRow(selectedOption == 0, "About", 'images/drawer_about.png', onPressed: () {
              loadPage(context, 0);
            }),
            DrawerRow(selectedOption == 1,
              "Speaking",
              'images/drawer_speaking.png',
              onPressed: () {
                loadPage(context, 1);
              },
            ),
            DrawerRow(selectedOption == 2,
              "Open Source",
              'images/drawer_open_source.png',
              onPressed: () {
                loadPage(context, 2);
              },
            ),
            DrawerRow(selectedOption == 3,
              "Skills",
              'images/drawer_skills.png',
              onPressed: () {
                loadPage(context, 3);
              },
            ),
            DrawerRow(selectedOption == 4,
              "Awards",
              'images/drawer_award.png',
              onPressed: () {
                loadPage(context, 4);
              },
            )
          ]),
        ),
      ),
      body: ContentFrame(selectedOption),
    );
  }

  void loadPage(BuildContext context, int drawerPosition) {
    Navigator.pop(context);
    setState(() {
      this.selectedOption = drawerPosition;
    });
  }
}
