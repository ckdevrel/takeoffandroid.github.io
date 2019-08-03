import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height16.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height36.dart';
import 'package:takeoffandroid_portfolio/util/UrlLauncher.dart';
import 'components/PageListView.dart';
import 'components/PageSubTitle.dart';
import 'components/PageTitle.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';

import 'components/cards/CardView.dart';

class OpenSourcePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PageListView(
      child: ListView(
        children: <Widget>[
          PageTitle('OPEN SOURCES'),
          Height24(),
          PageSubTitle('FLUTTER'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              InkWell(
                child: CardView('Flutter Examples'),
                onTap: () {
                  UrlLauncher.openUrl('http://flutterexamples.com/', 'Flutter Examples');
                },
              ),
              Width36(),
              InkWell(child: CardView('Feedback Widget'), onTap: () {
                UrlLauncher.openUrl('https://pub.dev/packages/feedback_widget', 'Feedack widget');
              },),
              Width36(),
              InkWell(child: CardView('Authentication View'), onTap: () {
                UrlLauncher.openUrl('https://pub.dev/packages/authentication_view', 'Authentication View');
              },)
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID STUDIO TEMPLATES'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
            InkWell(child: CardView('Recylerview Template'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid/RecyclerViewTemplate', 'Recylerview Template');
          },),
              Width36(),
            InkWell(child: CardView('Material Tabs Template'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid/MaterialTabsTemplate', 'Material Tabs Template');
            },),
            Width36(),
            InkWell(child: CardView('Login Template'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid/LoginAndroidStudioTemplate', 'Login Template');
            },),
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
            InkWell(child: CardView('App Intro Animation'), onTap: () {
                UrlLauncher.openUrl('https://github.com/TakeoffAndroid/AppIntroAnimation', 'App Intro Animation');
            },),
              Width36(),
            InkWell(child: CardView('Video Chat Heads'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid/VideoChatHeads', 'Video Chat Heads');
            },),
              Width36(),
            InkWell(child: CardView('Material Dialog Search view'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid/MaterialDialogSearchView', 'Material Dialog Search view');
            },)
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
