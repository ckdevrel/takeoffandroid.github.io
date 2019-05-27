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
  int drawerPosition = 0;

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
            DrawerRow("About", 'images/about.png', onPressed: () {
              loadPage(context, 0);
            }),
            DrawerRow(
              "Speaking",
              'images/speaking.png',
              onPressed: () {
                loadPage(context, 1);
              },
            ),
            DrawerRow(
              "Open Source",
              'images/opensource.png',
              onPressed: () {
                loadPage(context, 2);
              },
            ),
            DrawerRow(
              "Skills",
              'images/skills.png',
              onPressed: () {
                loadPage(context, 3);
              },
            ),
            DrawerRow(
              "Awards",
              'images/award.png',
              onPressed: () {
                loadPage(context, 4);
              },
            )
          ]),
        ),
      ),
      body: ContentFrame(drawerPosition),
    );
  }

  void loadPage(BuildContext context, int drawerPosition) {
    Navigator.pop(context);
    setState(() {
      this.drawerPosition = drawerPosition;
    });
  }
}
