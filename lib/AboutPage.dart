import 'package:flutter_web/material.dart';

class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          RichText(
            text: TextSpan(
              text: 'CHANDRASEKAR',
              style: TextStyle(color: Colors.pinkAccent, fontSize: 40),
              children: <TextSpan>[
                TextSpan(text: ' K', style: TextStyle(color: Colors.grey, fontSize: 40)),
              ],
            ),
          ),
          SizedBox(height: 4),
          Text('CHENNAI, INDIA', style: TextStyle(color: Colors.grey, fontSize: 15)),
          SizedBox(height: 40),
          Text('I am a Android Techie geek with 6+ years of experience in programming, blogging and open source contributions. '
              '\nI have authored 15+ open sources and 20+ articles and spoken at chicago roboto 2018 Android conference. '
              '\nIf you’d like to get in touch, feel free to say hello through any of the social links below.', style: TextStyle(fontSize: 20)),
        ],
      ),
    );
  }
}
