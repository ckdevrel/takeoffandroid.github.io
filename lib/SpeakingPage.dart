import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height36.dart';
import 'package:takeoffandroid_portfolio/components/space/Height4.dart';
import 'components/PageParagraph.dart';
import 'components/PageSubTitle.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';
import 'components/SocialIconButton.dart';
import 'components/SocialView.dart';

class SpeakingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new ListView(
        children: <Widget>[
          PageThumbnail('images/speaking_thumbnail.png'),
          PageTitle('MASTERING ANDROID STUDIO TEMPLATE CREATION'),
          Height4(),
          PageSubTitle('Chicago Roboto, Chicago, USA'),
          Height24(),
          PageParagraph(
              'Presented at International Android conference to talk about Android studio templates '
              '\ncreation, application and its usages.'),
          Height36(),
          SocialView(socialIconButtons: <Widget>[
            SocialIconButton('images/speaking_youtube.png'),
            SocialIconButton('images/speaking_speaker_deck.png'),
          ]),
        ],
      ),
    );
  }

  openLink(String url)  {
//    if (await canLaunch(url)) {
//      await launch(url);
//    } else {
//      throw 'Could not launch $url';
//    }
  }
}
