import 'package:flutter_web/material.dart';

import 'AboutPage.dart';
import 'AwardsPage.dart';
import 'SpeakingPage.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {

  int drawerPosition = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Row(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          new Drawer(
            child: new ListView(
              children: <Widget>[
                new UserAccountsDrawerHeader(
                  accountName: new Text("TakeoffAndroid"),
                  accountEmail: new Text("takeoffandroid@gmail.com"),
                  currentAccountPicture: Image.network("https://i.imgur.com/R0Rzcsv.png"),
                ),
                new ListTile(
                    title: new Text("About"),
                    onTap: () {
                      setState(() {
                        drawerPosition = 0;
                      });
                    }),
                new ListTile(
                    title: new Text("Speaking"),
                    onTap: () {
                      setState(() {
                        drawerPosition = 1;
                      });
                    }),
                new ListTile(
                    title: new Text("Open Source"),
                    onTap: () {
                      setState(() {
                        drawerPosition = 2;
                      });
                    }),
                new ListTile(
                    title: new Text("Skills"),
                    onTap: () {
                      setState(() {
                        drawerPosition = 3;
                      });
                    }),
                new ListTile(
                    title: new Text("Awards"),
                    onTap: () {
                      setState(() {
                        drawerPosition = 4;
                      });
                    }),
              ],
            ),
          ),
          Expanded(
            child: getHomeContainer(),
          )
        ],
      ),
    );
  }

  Widget getHomeContainer (){
    switch(drawerPosition) {
      case 0:
        return AboutPage();
      case 1:
        return SpeakingPage();
      case 2:
        return AboutPage();
      case 3:
        return AboutPage();
      case 4:
        return AwardsPage();
    }
  }
}
