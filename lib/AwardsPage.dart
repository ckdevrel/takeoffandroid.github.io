import 'package:flutter_web/material.dart';

import 'components/PageListTile.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';

class AwardsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: ListView(
        children: <Widget>[
          PageTitle('AWARDS & CERTIFICATIONS'),
          SizedBox(height: 16),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_certified.png', 'Google Certified Developer')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_funding.png', 'Got a seed contributions and funding for my open sources')))),
              SizedBox(width: 36),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_topic.png', 'First person to propose and present a topic on Android studio templates')))),
            ]),
          ),
          SizedBox(height: 24),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_expertise.png', 'Expertise in Android, iOS, Flutter mobile and web development')))),
            ]),
          )
        ],
      ),
    );
  }
}
