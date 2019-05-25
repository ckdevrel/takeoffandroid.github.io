import 'package:flutter_web/material.dart';

import 'components/PageParagraph.dart';
import 'components/OpenSourceHeader.dart';
import 'components/PageListTile.dart';
import 'components/PageSection.dart';
import 'components/PageSubTitle.dart';
import 'components/PageTitle.dart';

class OpenSourcePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new ListView(
        children: <Widget>[
          PageTitle('OPEN SOURCES'),
          SizedBox(height: 24),
          PageSubTitle('FLUTTER'),
          SizedBox(height: 16),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Flutter Examples')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Flutter Portfolio Web')))),
            ]),
          ),
          SizedBox(height: 36),
          PageSubTitle('ANDROID STUDIO TEMPLATES'),
          SizedBox(height: 16),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Recylerview Template')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Material Tabs Template')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Login Template'))))
            ]),
          ),
          SizedBox(height: 36),
          PageSubTitle('ANDROID'),
          SizedBox(height: 16),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('App Intro Animation')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageParagraph('Video Chat Heads')))),
              SizedBox(width: 36),
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
