import 'package:flutter_web/material.dart';

import 'AppColors.dart';

class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(48.0),
      child: new Column(
        mainAxisAlignment: MainAxisAlignment.start,
        mainAxisSize: MainAxisSize.max,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: <Widget>[
          Container(margin: EdgeInsets.fromLTRB(0, 0, 0, 24), width: 1011, height: 300, child: Center(child: Image.asset('images/about_thumbnail.png'))),
          Text('CHANDRASEKAR K', style: TextStyle(color: AppColors.colorPrimary, fontSize: 36, fontFamily: 'OpenSans', fontWeight: FontWeight.bold),),
          SizedBox(height: 4),
          Text('Chennai, India',
              style: TextStyle(color: AppColors.colorTextGreyPrimary, fontSize: 15, fontFamily: 'OpenSans', fontWeight: FontWeight.w600)),
          SizedBox(height: 30),
          Text(
              'I am a Android Techie geek with 6+ years of experience in programming, blogging and open source contributions. '
              '\nI have authored 15+ open sources and 20+ articles and spoken at chicago roboto 2018 Android conference. '
              '\nIf you’d like to get in touch, feel free to say hello through any of the social links below.',
              style: TextStyle(color: AppColors.colorTextGreySecondary, fontSize: 14, fontFamily: 'OpenSans', fontWeight: FontWeight.normal)),
          SizedBox(height: 36),
          Container(
            height: 50,
            child: ListView(scrollDirection: Axis.horizontal, children: <Widget>[
              IconButton(iconSize: 40, padding: EdgeInsets.fromLTRB(0, 0, 10, 0),icon: Image.asset('images/about_medium.png'), onPressed: null),
              IconButton(iconSize: 40, padding: EdgeInsets.fromLTRB(0, 0, 10, 0), icon: Image.asset('images/about_linkedin.png'), onPressed: null),
              IconButton(iconSize: 40, padding: EdgeInsets.fromLTRB(0, 0, 10, 0), icon: Image.asset('images/about_twitter.png'), onPressed: null),
              IconButton(iconSize: 40, padding: EdgeInsets.fromLTRB(0, 0, 10, 0), icon: Image.asset('images/about_github.png'), onPressed: null)
            ],),
          ),
        ],
      ),
    );
  }
}
