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

import 'components/drawer/DrawerImage.dart';
import 'components/drawer/DrawerRow.dart';
import 'components/drawer/DrawerSubTitle.dart';
import 'components/drawer/DrawerTitle.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
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
              Container(
                  decoration: BoxDecoration(
                      color: AppColors.colorSecondary,
                      boxShadow: [
                        BoxShadow(color: Color.fromRGBO(2, 4, 16, 1))
                      ]),
                  margin: EdgeInsets.fromLTRB(0, 0, 0, 16),
                  child: Padding(
                    padding: const EdgeInsets.all(36.0),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: <Widget>[
                        DrawerImage(),
                        Height24(),
                        DrawerTitle(),
                        Height4(),
                        DrawerSubTitle(),
                      ],
                    ),
                  )),
              DrawerRow("About", 'images/about.png', onPressed: () {
                setState(() {
                  drawerPosition = 0;
                });
              }),
             DrawerRow("Speaking", 'images/speaking.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 1;
                  });
                },
              ),
            DrawerRow("Open Source", 'images/opensource.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 2;
                  });
                },
              ),
             DrawerRow("Skills", 'images/skills.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 3;
                  });
                },
              ),
             DrawerRow("Awards", 'images/award.png',
                onPressed: () {
                  setState(() {
                    drawerPosition = 4;
                  });
                },
              )
            ]),
          ),
          Expanded(
            child: getHomeContainer(),
          )
        ],
      ),
    );
  }

//
  Widget getHomeContainer() {
    switch (drawerPosition) {
      case 0:
        return AboutPage();
      case 1:
        return SpeakingPage();
      case 2:
        return OpenSourcePage();
      case 3:
        return SkillsPage();
      case 4:
        return AwardsPage();
    }
  }
}
