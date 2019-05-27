import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/AboutPage.dart';
import 'package:takeoffandroid_portfolio/AwardsPage.dart';
import 'package:takeoffandroid_portfolio/OpenSourcePage.dart';
import 'package:takeoffandroid_portfolio/SkillsPage.dart';
import 'package:takeoffandroid_portfolio/SpeakingPage.dart';

class ContentFrame extends StatelessWidget {

  int drawerPosition;

  ContentFrame(this.drawerPosition);

  @override
  Widget build(BuildContext context) {
    return getHomeContainer();
  }

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
