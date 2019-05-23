import 'package:flutter_web/material.dart';

class SkillsPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Text('SKILLS',
              style: TextStyle(color: Colors.pinkAccent, fontSize: 40)),
          SizedBox(height: 24),
          Text(
              'Test Driven Development'
              '\nObject Oriented Programming & Solid Principles'
              '\nResponsive Design'
              '\nAgile Development & Scrum'
              '\nCross Functional Teams',
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
