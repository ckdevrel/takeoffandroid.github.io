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

class HomeWebPage extends StatefulWidget {
  @override
  _HomeWebPageState createState() => _HomeWebPageState();
}

class _HomeWebPageState extends State<HomeWebPage> {
  int drawerPosition = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Container(
            width: 250,
            height: double.infinity,
            color: AppColors.colorPrimary,
            child: new ListView(children: <Widget>[
              DrawerTopBar(),
              DrawerRow("About", 'images/about.png', onPressed: () {
                setState(() {
                  drawerPosition = 0;
                });
              }),
              DrawerRow(
                "Speaking",
                'images/speaking.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 1;
                  });
                },
              ),
              DrawerRow(
                "Open Source",
                'images/opensource.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 2;
                  });
                },
              ),
              DrawerRow(
                "Skills",
                'images/skills.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 3;
                  });
                },
              ),
              DrawerRow(
                "Awards",
                'images/award.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 4;
                  });
                },
              )
            ]),
          ),
          Expanded(
            child: ContentFrame(drawerPosition),
          )
        ],
      ),
    );
  }
}
