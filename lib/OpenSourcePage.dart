import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height16.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height36.dart';
import 'components/PageParagraph.dart';
import 'components/OpenSourceHeader.dart';
import 'components/PageListTile.dart';
import 'components/PageSection.dart';
import 'components/PageSubTitle.dart';
import 'components/PageTitle.dart';
import 'package:takeoffandroid_portfolio/components/space/Width36.dart';

class OpenSourcePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new ListView(
        children: <Widget>[
          PageTitle('OPEN SOURCES'),
          Height24(),
          PageSubTitle('FLUTTER'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Flutter Examples')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Flutter Portfolio Web')))),
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID STUDIO TEMPLATES'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Recylerview Template')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Material Tabs Template')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Login Template'))))
            ]),
          ),
          Height36(),
          PageSubTitle('ANDROID'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('App Intro Animation')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Video Chat Heads')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Material Dialog Search view'))))
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
