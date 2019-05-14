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
         Text('MASTERING ANDROID STUDIO TEMPLATE CREATION', style: TextStyle(color: Colors.pinkAccent, fontSize: 40)),
         SizedBox(height: 4),
         Text('CHICAGO ROBOTO (CHICAGO, USA)', style: TextStyle(color: Colors.grey, fontSize: 18)),
          SizedBox(height: 24),
          Text('Presented at International Android conference to talk about Android studio templates '
              '\ncreation, application and its usages.', style: TextStyle(fontSize: 18)),
        ],
      ),
    );
  }
}
