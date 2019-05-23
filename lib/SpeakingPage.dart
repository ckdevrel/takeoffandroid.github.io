import 'package:flutter_web/material.dart';

import 'components/PageParagraph.dart';
import 'components/PageSubTitle.dart';
import 'components/PageThumbnail.dart';
import 'components/PageTitle.dart';

class SpeakingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          PageThumbnail('images/speaking_thumbnail.png'),
          PageTitle('MASTERING ANDROID STUDIO TEMPLATE CREATION'),
          SizedBox(height: 4),
          PageSubTitle('Chicago Roboto, Chicago, USA'),
          SizedBox(height: 24),
          PageParagraph(
              'Presented at International Android conference to talk about Android studio templates '
              '\ncreation, application and its usages.'),
          SizedBox(height: 36),
          Container(
            height: 50,
            child: ListView(
              scrollDirection: Axis.horizontal, children: <Widget>[
              IconButton(iconSize: 40,
                  padding: EdgeInsets.fromLTRB(0, 0, 10, 0),
                  icon: Image.asset('images/speaking_youtube.png'),
                  onPressed: openLink("https://www.youtube.com/watch?v=abbXZ20OPRI&index=14&list=PLnD_TKDSaFyXuapaScA3Q616AXvsnlq09&t=0s")),
              IconButton(iconSize: 40,
                  padding: EdgeInsets.fromLTRB(0, 0, 10, 0),
                  icon: Image.asset('images/speaking_speaker_deck.png'),
                  onPressed: openLink("https://speakerdeck.com/TakeoffAndroid")),
            ],),
          )
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
