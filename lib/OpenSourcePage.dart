import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height16.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height36.dart';
import 'components/PageListView.dart';
import 'components/PageParagraph.dart';
import 'components/OpenSourceHeader.dart';
import 'components/PageListTile.dart';
import 'components/PageSubTitle.dart';
import 'components/PageTitle.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';

import 'components/cards/CardView.dart';

class OpenSourcePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PageListView(
      child: new ListView(
        children: <Widget>[
          PageTitle('OPEN SOURCES'),
          Height24(),
          PageSubTitle('FLUTTER'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              CardView('Flutter Examples'),
              Width36(),
              CardView('Flutter Portfolio Web')
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID STUDIO TEMPLATES'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              CardView('Recylerview Template'),
              Width36(),
              CardView('Material Tabs Template'),
              Width36(),
              CardView('Login Template'),
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              CardView('App Intro Animation'),
              Width36(),
              CardView('Video Chat Heads'),
              Width36(),
              CardView('Material Dialog Search view'),
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
