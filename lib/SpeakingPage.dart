import 'package:flutter_web/material.dart';

import 'package:takeoffandroid_portfolio/components/space/Height24.dart';
import 'package:takeoffandroid_portfolio/components/space/Height36.dart';
import 'package:takeoffandroid_portfolio/components/space/Height4.dart';
import 'components/PageListView.dart';
import 'components/PageParagraph.dart';
import 'components/PageSubTitle.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';
import 'components/SocialIconButton.dart';
import 'components/SocialView.dart';
import 'package:takeoffandroid_portfolio/util/UrlLauncher.dart';

class SpeakingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PageListView(
      child: ListView(
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
            InkWell(child: SocialIconButton('images/speaking_youtube.png'), onTap: () {
              UrlLauncher.openUrl('https://www.youtube.com/watch?v=abbXZ20OPRI&t=12s', 'Chicago Roboto 2018');
            },),
            InkWell(child: SocialIconButton('images/speaking_speaker_deck.png'), onTap: () {
              UrlLauncher.openUrl('https://speakerdeck.com/takeoffandroid/mastering-android-studio-template-creation', 'Speaker Deck');
            },),
          ]),
        ],
      ),
    );
  }
}
