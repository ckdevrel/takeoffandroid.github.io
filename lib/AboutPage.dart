import 'package:flutter_web/material.dart';
import 'package:takeoffandroid_portfolio/util/UrlLauncher.dart';

import 'AppColors.dart';
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

class AboutPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return PageListView(
      child: ListView(
        children: <Widget>[
          PageThumbnail('images/about_thumbnail.png'),
          PageTitle('CHANDRASEKAR K'),
          Height4(),
          PageSubTitle('Chennai, India'),
          Height24(),
          PageParagraph(
              'I am a Android Techie geek with 6+ years of experience in programming, blogging and open source contributions. '
                  '\nI have authored 15+ open sources and 20+ articles and spoken at chicago roboto 2018 Android conference. '
                  '\nIf you’d like to get in touch, feel free to say hello through any of the social links below.'),
          Height36(),
          SocialView(socialIconButtons: <Widget>[
            InkWell(child: SocialIconButton('images/about_medium.png'), onTap: () {
              UrlLauncher.openUrl('https://medium.com/@takeoffandroid', 'Medium');
            },),
            InkWell(child: SocialIconButton('images/about_linkedin.png'), onTap: () {
              UrlLauncher.openUrl('https://www.linkedin.com/in/chandrasekar-kuppusamy-64696472/', 'Linkedin');
            },),
            InkWell(child: SocialIconButton('images/about_twitter.png'), onTap: () {
              UrlLauncher.openUrl('https://twitter.com/takeoffandroid', 'Twitter');
            },),
            InkWell(child: SocialIconButton('images/about_github.png'), onTap: () {
              UrlLauncher.openUrl('https://github.com/TakeoffAndroid', 'Github');
            },)
          ]),
        ],
      ),
    );
  }
}
