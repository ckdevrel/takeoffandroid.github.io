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
                        SizedBox(
                            width: 90,
                            height: 90,
                            child: CircleAvatar(
                              backgroundImage: NetworkImage(
                                  'https://i.imgur.com/R0Rzcsv.png'),
                            )),
                        Height24(),
                        new Text(
                          "CHANDRASEKAR K",
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Colors.white,
                              fontWeight: FontWeight.w100),
                          textAlign: TextAlign.center,
                        ),
                        Height4(),
                        new Text("Mobile Developer",
                            style: TextStyle(
                                fontFamily: "Lato",
                                fontSize: 12,
                                color: Color.fromRGBO(193, 191, 203, 1)),
                            textAlign: TextAlign.center),
                      ],
                    ),
                  )),
              MaterialButton(
                padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
                child: new Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Image.asset('images/about.png'),
                      Width16(),
                      new Text("About",
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Color.fromRGBO(207, 209, 233, 1),
                              fontWeight: FontWeight.w100))
                    ]),
                onPressed: () {
                  setState(() {
                    drawerPosition = 0;
                  });
                },
              ),
              MaterialButton(
                padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
                child: new Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Image.asset('images/speaking.png'),
                      Width16(),
                      new Text("Speaking",
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Color.fromRGBO(207, 209, 233, 1),
                              fontWeight: FontWeight.w100))
                    ]),
                onPressed: () {
                  setState(() {
                    drawerPosition = 1;
                  });
                },
              ),
              MaterialButton(
                padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
                child: new Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Image.asset('images/opensource.png'),
                      Width16(),
                      new Text("Open Source",
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Color.fromRGBO(207, 209, 233, 1),
                              fontWeight: FontWeight.w100))
                    ]),
                onPressed: () {
                  setState(() {
                    drawerPosition = 2;
                  });
                },
              ),
              MaterialButton(
                padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
                child: new Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Image.asset('images/skills.png'),
                      Width16(),
                      new Text("Skills",
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Color.fromRGBO(207, 209, 233, 1),
                              fontWeight: FontWeight.w100))
                    ]),
                onPressed: () {
                  setState(() {
                    drawerPosition = 3;
                  });
                },
              ),
              MaterialButton(
                padding: EdgeInsets.fromLTRB(36, 0, 0, 0),
                child: new Row(
                    crossAxisAlignment: CrossAxisAlignment.center,
                    mainAxisAlignment: MainAxisAlignment.start,
                    children: <Widget>[
                      Image.asset('images/award.png'),
                      Width16(),
                      new Text("Awards",
                          textAlign: TextAlign.start,
                          style: TextStyle(
                              fontFamily: "Lato",
                              fontSize: 14,
                              color: Color.fromRGBO(207, 209, 233, 1),
                              fontWeight: FontWeight.w100))
                    ]),
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
