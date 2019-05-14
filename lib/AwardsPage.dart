import 'package:flutter_web/material.dart';

class AwardsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
         Text('AWARDS & CERTIFICATIONS', style: TextStyle(color: Colors.pinkAccent, fontSize: 40)),
          SizedBox(height: 24),
          Text('- Google Certified Developer'
            '\n- Got a seed contributions and funding for my open sources'
            '\n- First person to propose and present a topic on Android studio templates'
            '\n- Expertise in Android, iOS, Flutter and React development', style: TextStyle(fontSize: 18)),
        ],
      ),
    );
  }
}
