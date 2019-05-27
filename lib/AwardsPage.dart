import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height16.dart';
import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'components/PageListTile.dart';
import 'components/PageTitle.dart';
import 'components/space/Width36.dart';

class AwardsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: ListView(
        children: <Widget>[
          PageTitle('AWARDS & CERTIFICATIONS'),
          Height16(),
          SingleChildScrollView(
            scrollDirection: Axis.horizontal,
            child: Row(children: <Widget>[
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_certified.png', 'Google Certified Developer')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_funding.png', 'Got a seed contributions and funding for my open sources')))),
              Width36(),
              SizedBox(width: 291, height: 120, child: Card(elevation: 4 ,child: Center(child: PageListTile('images/award_topic.png', 'First person to propose and present a topic on Android studio templates')))),
            ]),
          ),
          Height24(),
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
