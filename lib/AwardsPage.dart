import 'package:flutter_web/material.dart';

import 'components/PageListTile.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';

class AwardsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          PageThumbnail('images/award_thumbnail.png'),
          PageTitle('AWARDS & CERTIFICATIONS'),
          SizedBox(height: 16),
          Expanded(
            child: ListView(
              children: <Widget>[
                PageListTile('images/award_certified.png', 'Google Certified Developer'),
                SizedBox(height: 16),
                PageListTile('images/award_funding.png', 'Got a seed contributions and funding for my open sources'),
                SizedBox(height: 16),
                PageListTile('images/award_topic.png', 'First person to propose and present a topic on Android studio templates'),
                SizedBox(height: 16),
                PageListTile('images/award_expertise.png', 'Expertise in Android, iOS, Flutter and React development')
              ],
            ),
          ),
        ],
      ),
    );
  }
}
