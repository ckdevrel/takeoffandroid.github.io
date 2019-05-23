import 'package:flutter_web/material.dart';

class SpeakingPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('MASTERING ANDROID STUDIO TEMPLATE CREATION',
              style: TextStyle(color: Colors.pinkAccent, fontSize: 40)),
          SizedBox(height: 4),
          Text('CHICAGO ROBOTO (CHICAGO, USA)',
              style: TextStyle(color: Colors.grey, fontSize: 18)),
          SizedBox(height: 24),
          MaterialButton(onPressed: () { openLink("https://speakerdeck.com/TakeoffAndroid"); }, child: Text('Speaker Deck', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          MaterialButton(onPressed: () { openLink("https://www.youtube.com/watch?v=abbXZ20OPRI&index=14&list=PLnD_TKDSaFyXuapaScA3Q616AXvsnlq09&t=0s"); }, child: Text('Youtube Link', style: TextStyle(color: Colors.blueAccent, fontSize: 16, decoration: TextDecoration.underline))),
          SizedBox(height: 16),
          Text(
              'Presented at International Android conference to talk about Android studio templates '
              '\ncreation, application and its usages.',
              style: TextStyle(fontSize: 18)),
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
